import { Actions, createEffect, ofType } from '@ngrx/effects';
import {
  BeerActionTypes,
  FetchBeerDetailAction,
  FetchBeerDetailSuccessAction,
  FetchBeerListErrorAction,
  FetchBeerListSuccessAction,
} from '../actions/beer.actions';
import {
  catchError,
  map,
  mergeMap,
  switchMap,
  withLatestFrom,
} from 'rxjs/operators';
import { APIService } from 'src/app/core/api/api.service';
import { from, of } from 'rxjs';
import { Injectable } from '@angular/core';
import { BeerFeatureState, BeerState } from '../states/beer.states';
import { Store } from '@ngrx/store';

@Injectable()
export class BeerQueryEffects {
  constructor(
    private actions$: Actions,
    private api: APIService,
    private store: Store<BeerFeatureState>
  ) {}

  getBeerOverviewItems$ = createEffect(() =>
    this.actions$.pipe(
      ofType(BeerActionTypes.FETCH_BEERS_LIST),
      withLatestFrom(
        this.store.select((store) => store.beerFeature.overview.nextToken)
      ),
      switchMap(([_, nextToken]) =>
        from(this.api.GetBeerOverviewItems({}, 64, nextToken)).pipe(
          map((event) => {
            //FIXME JN: look into getting the correct types here... this is not the way!
            return new FetchBeerListSuccessAction({
              data: event.items.map((item) => ({
                id: item?.id!,
                abv: item?.abv ? item?.abv : 0,
                name: item?.name!,
                brewStyle: item?.brewStyle?.name!,
                imageSource: item!.labels!.large,
              })),
              nextToken: event.nextToken ? event.nextToken : undefined,
            });
          }),
          catchError((err) => {
            console.error(err);
            return of(new FetchBeerListErrorAction(err));
          })
        )
      )
    )
  );

  getBeerDetail$ = createEffect(() =>
    this.actions$.pipe(
      ofType(BeerActionTypes.FETCH_BEER_DETAIL),
      switchMap((action) =>
        from(
          this.api.GetBeerDetails((action as FetchBeerDetailAction).payload)
        ).pipe(
          map(
            (event) =>
              new FetchBeerDetailSuccessAction({
                abv: event.abv ? event.abv : undefined,
                name: event.name!,
                isOrganic: event.isOrganic ? event.isOrganic : false,
                labels: event.labels!,
                isRetired: event.isRetired ? event.isRetired : false,
              })
          )
        )
      )
    )
  );
}
