import { Actions, createEffect, ofType } from '@ngrx/effects';
import {
  BeerActionTypes,
  FetchBeerListError,
  FetchBeerListSuccess,
} from '../actions/beer.actions';
import {
  catchError,
  map,
  switchMap,
  withLatestFrom,
} from 'rxjs/operators';
import { APIService } from 'src/app/core/api/api.service';
import { from, of } from 'rxjs';
import { Injectable } from '@angular/core';
import { BeerFeatureState } from '../states/beer.states';
import { Store } from '@ngrx/store';

@Injectable()
export class BeerEffects {
  constructor(
    private actions$: Actions,
    private api: APIService,
    private store: Store<BeerFeatureState>
  ) {}

  listBeers$ = createEffect(() =>
    this.actions$.pipe(
      ofType(BeerActionTypes.FETCH_BEERS_LIST),
      withLatestFrom(this.store.select((store) => store.beerFeature.nextToken)),
      switchMap(([_, nextToken]) =>
        from(this.api.GetBeerOverviewItems({}, 64, nextToken)).pipe(
          map((event) => {
            //FIXME JN: look into getting the correct types here... this is not the way!
            return new FetchBeerListSuccess({
              data: event.items
                .filter((item) => item !== undefined)
                .map((item) => ({
                  id: item?.id!,
                  abv: item?.abv ? item?.abv : 0,
                  name: item?.name!,
                  brewStyle: item?.brewStyle?.name!,
                  imageSource: item!.labels!.large,
                })),
              nextToken: event.nextToken,
            });
          }),
          catchError((err) => {
            console.error(err);
            return of(new FetchBeerListError(err));
          })
        )
      )
    )
  );
}
