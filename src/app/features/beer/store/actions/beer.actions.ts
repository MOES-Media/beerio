import { Action } from "@ngrx/store";
import { Beer } from "../models/beer.model";

export enum BeerActionTypes {
    FETCH_BEERS_LIST = "[Beer] Fetch Beers List",
    FETCH_BEERS_LIST_PENDING = "[Beer] Fetch Beers List Pending",
    FETCH_BEERS_LIST_SUCCESS = "[Beer] Fetch Beers List Success",
    FETCH_BEERS_LIST_ERROR = "[Beer] Fetch Beers List Error"
}

export class FetchBeerListAction implements Action{
    readonly type = BeerActionTypes.FETCH_BEERS_LIST
    constructor(){}
}

export class FetchBeerListPending implements Action {
    readonly type = BeerActionTypes.FETCH_BEERS_LIST_PENDING
    constructor() {}
}

export class FetchBeerListSuccess implements Action {
    readonly type = BeerActionTypes.FETCH_BEERS_LIST_SUCCESS
    constructor(public payload: Array<Beer>) {}
}

export class FetchBeerListError implements Action {
    readonly type = BeerActionTypes.FETCH_BEERS_LIST_ERROR
    constructor(public payload: Error){}
}