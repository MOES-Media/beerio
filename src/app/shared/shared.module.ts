import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BeerListItemComponent } from './components/beer-list-item/beer-list-item.component';
import { LoaderComponent } from './components/loader/loader.component';


@NgModule({
  declarations: [
    BeerListItemComponent,
    LoaderComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [BeerListItemComponent, LoaderComponent]
})
export class SharedModule { }
