import { Beer, BeerOverviewItem } from "../models/beer.model";

export interface BeerState {
    isPending: boolean;
    currentPage: number;
    error?: Error,
    content?: Array<Beer> 
    overviewItems: Array<BeerOverviewItem>
    nextToken?: string 
}

export const initialBeerState: BeerState = {
    isPending: false,
    currentPage: 1,
    overviewItems: [] as Array<BeerOverviewItem>
}

export interface BeerFeatureState {
    beerFeature: BeerState
}