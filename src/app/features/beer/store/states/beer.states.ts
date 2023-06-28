import { Beer, BeerDetail, BeerOverviewItem } from "../models/beer.model";

export interface BeerOverviewState {
    isPending: boolean;
    currentPage: number;
    error?: Error,
    overviewItems: Array<BeerOverviewItem>
    nextToken?: string
}

export const initialBeerOverviewState: BeerOverviewState = {
    isPending: false,
    currentPage: 1,
    overviewItems: [] as Array<BeerOverviewItem>
}

export interface BeerDetailState {
    isPending: boolean;
    error?: Error,
    data?: BeerDetail
}

export const initialBeerDetailState: BeerDetailState = {
    isPending: false
}

export interface BeerState {
    overview: BeerOverviewState,
    detail: BeerDetailState
}

export interface BeerFeatureState {
    beerFeature: BeerState
}