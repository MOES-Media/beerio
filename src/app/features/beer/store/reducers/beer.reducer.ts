import { Action } from "@ngrx/store";
import { BeerState, initialBeerState } from "../states/beer.states";
import { BeerActionTypes, FetchBeerListError, FetchBeerListPending, FetchBeerListSuccess } from "../actions/beer.actions";

export const beerReducer = (
    state: BeerState = initialBeerState,
    action: Action
) => {
    switch (action.type) {
        case BeerActionTypes.FETCH_BEERS_LIST_PENDING:
            return {
                ...state,
                isPending: true,
                error: undefined,
                content: undefined
            }
        case BeerActionTypes.FETCH_BEERS_LIST_ERROR:
            return {
                ...state,
                isPending: false,
                error: (action as FetchBeerListError).payload,
            }
        case BeerActionTypes.FETCH_BEERS_LIST_SUCCESS:
            return {
                ...state,
                isPending: false,
                content: (action as FetchBeerListSuccess).payload
            }
        case BeerActionTypes.SET_NEXT_BEERS_PAGE:
            return {
                ...state,
                currentPage: state.currentPage + 1
            }
        default:
            return state;
    }
}