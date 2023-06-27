import { Beer } from "../models/beer.model";

export interface BeerState {
    isPending: boolean;
    currentPage: number;
    error?: Error,
    content?: Array<Beer> 
}

export const initialBeerState = {
    isPending: false,
    currentPage: 1
}

export interface BeerFeatureState {
    beerFeature: BeerState
}