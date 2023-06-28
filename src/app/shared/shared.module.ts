import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BeerListItemComponent } from './components/beer-list-item/beer-list-item.component';
import { LoaderComponent } from './components/loader/loader.component';
import { PopOverComponent } from './components/pop-over/pop-over.component';


@NgModule({
  declarations: [
    BeerListItemComponent,
    LoaderComponent,
    PopOverComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [BeerListItemComponent, LoaderComponent, PopOverComponent]
})
export class SharedModule { }
