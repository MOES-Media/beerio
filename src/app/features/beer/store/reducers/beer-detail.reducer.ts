import { Action } from '@ngrx/store';
import { BeerDetailState, initialBeerDetailState } from '../states/beer.states';
import {
  BeerActionTypes,
  FetchBeerDetailErrorAction,
  FetchBeerDetailSuccessAction,
} from '../actions/beer.actions';

export const beerDetailReducer = (
  state: BeerDetailState = initialBeerDetailState,
  action: Action
): BeerDetailState => {
  switch (action.type) {
    case BeerActionTypes.FETCH_BEER_DETAIL:
      return {
        ...state,
        isPending: true,
        error: undefined,
        data: undefined,
      };
    case BeerActionTypes.FETCH_BEER_DETAIL_SUCCESS:
      return {
        ...state,
        isPending: false,
        data: (action as FetchBeerDetailSuccessAction).payload,
      };
    case BeerActionTypes.FETCH_BEER_DETAIL_ERROR:
      return {
        ...state,
        isPending: false,
        error: (action as FetchBeerDetailErrorAction).payload,
      };
    default:
      return state;
  }
};
