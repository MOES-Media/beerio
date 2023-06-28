import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './pages/list/list.component';
import { DetailComponent } from './pages/detail/detail.component';
import { ActionReducerMap, StoreModule, combineReducers } from '@ngrx/store';
import { beerOverviewReducer } from './store/reducers/beer-overview.reducer';
import { RouterModule } from '@angular/router';
import { beerRoutes } from './beer.routes';
import { SharedModule } from 'src/app/shared/shared.module';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { EffectsModule } from '@ngrx/effects';
import { BeerQueryEffects } from './store/effects/beer.query.effects';
import { beerDetailReducer } from './store/reducers/beer-detail.reducer';
import { BeerState } from './store/states/beer.states';

const reducers: ActionReducerMap<BeerState> = {
  overview: beerOverviewReducer,
  detail: beerDetailReducer,
};

@NgModule({
  declarations: [ListComponent, DetailComponent],
  imports: [
    CommonModule,
    SharedModule,
    StoreModule.forFeature<BeerState>('beerFeature', reducers),
    EffectsModule.forFeature([BeerQueryEffects]),
    RouterModule.forChild(beerRoutes),
    InfiniteScrollModule,
  ],
})
export class BeerModule {}
