import { Action } from '@ngrx/store';
import { Beer, BeerOverviewItem } from '../models/beer.model';

export enum BeerActionTypes {
  FETCH_BEERS_LIST = '[Beer] Fetch Beers List',
  FETCH_BEERS_LIST_PENDING = '[Beer] Fetch Beers List Pending',
  FETCH_BEERS_LIST_SUCCESS = '[Beer] Fetch Beers List Success',
  FETCH_BEERS_LIST_ERROR = '[Beer] Fetch Beers List Error',
  SET_NEXT_BEERS_PAGE = '[Beer] Set Next Beers Page',
}

export class FetchBeerListAction implements Action {
  readonly type = BeerActionTypes.FETCH_BEERS_LIST;
}

export class FetchBeerListPending implements Action {
  readonly type = BeerActionTypes.FETCH_BEERS_LIST_PENDING;
}

export class FetchBeerListSuccess implements Action {
  readonly type = BeerActionTypes.FETCH_BEERS_LIST_SUCCESS;
  constructor(public payload: { nextToken?: string | null, data: Array<BeerOverviewItem> }) {}
}

export class FetchBeerListError implements Action {
  readonly type = BeerActionTypes.FETCH_BEERS_LIST_ERROR;
  constructor(public payload: Error) {}
}

export class SetNextBeersPage implements Action {
  readonly type = BeerActionTypes.SET_NEXT_BEERS_PAGE;
}
