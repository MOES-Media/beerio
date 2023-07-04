import { Actions, createEffect, ofType } from '@ngrx/effects';
import {
  BeerActionTypes,
  FetchBeerDetailAction,
  FetchBeerDetailSuccessAction,
  FetchBeerListErrorAction,
  FetchBeerListSuccessAction,
} from '../actions/beer.actions';
import { catchError, map, switchMap, withLatestFrom } from 'rxjs/operators';
import { APIService } from 'src/app/core/api/api.service';
import { from, of } from 'rxjs';
import { Injectable } from '@angular/core';
import { BeerFeatureState } from '../states/beer.states';
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
                description:
                  event.description === null ? undefined : event.description,
                isOrganic: event.isOrganic ? event.isOrganic : false,
                labels: event.labels!,
                isRetired: event.isRetired ? event.isRetired : false,
                brewStyle: event.brewStyle
                  ? {
                      name: event.brewStyle.name,
                      category: {
                        name: event.brewStyle.category!.name,
                      },
                      abvMin:
                        event.brewStyle.abvMin === null
                          ? undefined
                          : event.brewStyle.abvMin,
                      abvMax:
                        event.brewStyle.abvMax === null
                          ? undefined
                          : event.brewStyle.abvMax,
                      ibuMin:
                        event.brewStyle.ibuMin === null
                          ? undefined
                          : event.brewStyle.ibuMin,
                      ibuMax:
                        event.brewStyle.ibuMax === null
                          ? undefined
                          : event.brewStyle.ibuMax,
                      fgMin:
                        event.brewStyle.fgMin === null
                          ? undefined
                          : event.brewStyle.fgMin,
                      fgMax:
                        event.brewStyle.fgMax === null
                          ? undefined
                          : event.brewStyle.fgMax,
                      srmMin:
                        event.brewStyle.srmMin === null
                          ? undefined
                          : event.brewStyle.srmMin,
                      srmMax:
                        event.brewStyle.srmMax === null
                          ? undefined
                          : event.brewStyle.srmMax,
                    }
                  : undefined,
                glass:
                  event.glass !== null && event.glass !== undefined
                    ? {
                        name: event.glass!.name,
                      }
                    : undefined,
                availability: event.availability
                  ? {
                      name: event.availability.name,
                      description:
                        event.availability.description!,
                    }
                  : undefined,
                ibu: event.ibu !== null ? event.ibu : undefined,
                originalGravity: event.originalGravity !== null ? event.originalGravity : undefined
              })
          )
        )
      )
    )
  );
}
