import { Beer } from "../models/beer.model";

export interface BeerState {
    isPending: boolean;
    currentPage: number;
    error?: Error,
    content?: Array<Beer> 
    nextToken?: string | null
}

export const initialBeerState = {
    isPending: false,
    currentPage: 1,
    nextToken: null
}

export interface BeerFeatureState {
    beerFeature: BeerState
}