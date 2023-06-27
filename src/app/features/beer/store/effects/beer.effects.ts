import { Actions, createEffect, ofType } from '@ngrx/effects';
import {
  BeerActionTypes,
  FetchBeerListError,
  FetchBeerListSuccess,
} from '../actions/beer.actions';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { APIService } from 'src/app/core/api/api.service';
import { from, of } from 'rxjs';
import { Injectable } from '@angular/core';
import { Beer } from '../models/beer.model';

@Injectable()
export class BeerEffects {
  constructor(private actions$: Actions, private api: APIService) {}

  //TODO JN grab the next token from the store
  listBeers$ = createEffect(() =>
    this.actions$.pipe(
      ofType(BeerActionTypes.FETCH_BEERS_LIST),
      mergeMap(() =>
        from(this.api.GetBeerOverviewItems({}, 64)).pipe(
          map((event) => {
            console.log(event);
            //FIXME JN: look into getting the correct types here... this is not the way!
            return new FetchBeerListSuccess({
              data: event.items
                .filter((item) => item !== undefined)
                .map((item) => ({
                  id: item?.id!,
                  abv: item?.abv ? item?.abv : 0,
                  name: item?.name!,
                  brewStyle: item?.brewStyle?.name!,
                  imageSource: item?.labels?.large
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
