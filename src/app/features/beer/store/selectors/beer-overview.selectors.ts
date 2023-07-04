import { createFeatureSelector, createSelector } from '@ngrx/store';
import { BeerState } from '../states/beer.states';

const beerState = createFeatureSelector<BeerState>('beerFeature');
export const selectBeerOverviewItems = createSelector(beerState, (state) => state.overview.overviewItems);
export const isBeerOverviewPending = createSelector(beerState, (state) => state.overview.isPending);
export const selectCurrentPage = createSelector(beerState, (state) => state.overview.currentPage)