import { Beer } from "../models/beer.model";

export interface BeerState {
    isPending: boolean;
    error?: Error,
    content?: Array<Beer> 
}

export const initialBeerState = {
    isPending: false,
}