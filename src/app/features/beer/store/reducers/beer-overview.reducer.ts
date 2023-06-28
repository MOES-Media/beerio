import { Action } from '@ngrx/store';
import { BeerOverviewState, initialBeerOverviewState } from '../states/beer.states';
import {
  BeerActionTypes,
  FetchBeerListErrorAction,
  FetchBeerListSuccessAction,
} from '../actions/beer.actions';

export const beerOverviewReducer = (
  state: BeerOverviewState = initialBeerOverviewState,
  action: Action
): BeerOverviewState => {
  switch (action.type) {
    case BeerActionTypes.FETCH_BEERS_LIST:
      return {
        ...state,
        isPending: true,
        error: undefined,
      };
    case BeerActionTypes.FETCH_BEERS_LIST_ERROR:
      return {
        ...state,
        isPending: false,
        error: (action as FetchBeerListErrorAction).payload,
      };
    case BeerActionTypes.FETCH_BEERS_LIST_SUCCESS:
      return {
        ...state,
        isPending: false,
        overviewItems: [
          ...state.overviewItems,
          ...(action as FetchBeerListSuccessAction).payload.data,
        ],
        nextToken: (action as FetchBeerListSuccessAction).payload.nextToken,
      };
    case BeerActionTypes.SET_NEXT_BEERS_PAGE:
      return {
        ...state,
        currentPage: state.currentPage + 1,
      };
    default:
      return state;
  }
};
