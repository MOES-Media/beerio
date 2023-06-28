import { Action } from '@ngrx/store';
import { BeerDetail, BeerOverviewItem } from '../models/beer.model';

export enum BeerActionTypes {
  FETCH_BEERS_LIST = '[Beer] Fetch Beers List',
  FETCH_BEERS_LIST_SUCCESS = '[Beer] Fetch Beers List Success',
  FETCH_BEERS_LIST_ERROR = '[Beer] Fetch Beers List Error',
  SET_NEXT_BEERS_PAGE = '[Beer] Set Next Beers Page',
  FETCH_BEER_DETAIL = '[Beer] Fetch Beer Detail',
  FETCH_BEER_DETAIL_SUCCESS = '[Beer] Fetch Beer Detail Success',
  FETCH_BEER_DETAIL_ERROR = '[Beer] Fetch Beer Detail Error'
}

export class FetchBeerListAction implements Action {
  readonly type = BeerActionTypes.FETCH_BEERS_LIST;
}

export class FetchBeerListSuccessAction implements Action {
  readonly type = BeerActionTypes.FETCH_BEERS_LIST_SUCCESS;
  constructor(public payload: { nextToken?: string, data: Array<BeerOverviewItem> }) {}
}

export class FetchBeerListErrorAction implements Action {
  readonly type = BeerActionTypes.FETCH_BEERS_LIST_ERROR;
  constructor(public payload: Error) {}
}

export class SetNextBeersPageAction implements Action {
  readonly type = BeerActionTypes.SET_NEXT_BEERS_PAGE;
}

export class FetchBeerDetailAction implements Action {
  readonly type = BeerActionTypes.FETCH_BEER_DETAIL
  constructor(public payload: string) {}
}

export class FetchBeerDetailSuccessAction implements Action {
  readonly type = BeerActionTypes.FETCH_BEER_DETAIL_SUCCESS
  constructor(public payload: BeerDetail) {}
}

export class FetchBeerDetailErrorAction implements Action {
  readonly type = BeerActionTypes.FETCH_BEER_DETAIL_ERROR
  constructor(public payload: Error) {}
}
