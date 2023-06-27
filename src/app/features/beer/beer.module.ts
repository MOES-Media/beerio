import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './pages/list/list.component';
import { DetailComponent } from './pages/detail/detail.component';
import { StoreModule } from '@ngrx/store';
import { beerReducer } from './store/reducers/beer.reducer';
import { RouterModule } from '@angular/router';
import { beerRoutes } from './beer.routes';
import { SharedModule } from 'src/app/shared/shared.module';
import { BeerOverviewComponent } from './components/beer-overview/beer-overview.component';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { EffectsModule } from '@ngrx/effects';
import { BeerEffects } from './store/effects/beer.effects';

@NgModule({
  declarations: [ListComponent, DetailComponent, BeerOverviewComponent],
  imports: [
    CommonModule,
    SharedModule,
    StoreModule.forFeature('beerFeature', beerReducer),
    EffectsModule.forFeature([BeerEffects]),
    RouterModule.forChild(beerRoutes),
    InfiniteScrollModule,
  ],
})
export class BeerModule {}
