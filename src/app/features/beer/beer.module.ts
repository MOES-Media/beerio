import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './pages/list/list.component';
import { DetailComponent } from './pages/detail/detail.component';
import { StoreModule } from '@ngrx/store';
import { beerReducer } from './store/reducers/beer.reducer';
import { RouterModule } from '@angular/router';
import { beerRoutes } from './beer.routes';



@NgModule({
  declarations: [
    ListComponent,
    DetailComponent
  ],
  imports: [
    CommonModule,
    StoreModule.forFeature('beerFeature', {
      beer: beerReducer
    }),
    RouterModule.forChild(beerRoutes)
  ]
})
export class BeerModule { }
