import { createFeatureSelector, createSelector } from '@ngrx/store';
import { BeerState } from '../states/beer.states';

const beerState = createFeatureSelector<BeerState>('beerFeature');
export const selectBeerDetail = createSelector(beerState, (state) => state.detail.data);
export const isBeerDetailPending = createSelector(beerState, (state) => state.detail.isPending);
