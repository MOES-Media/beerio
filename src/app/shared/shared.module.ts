import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BeerListItemComponent } from './components/beer-list-item/beer-list-item.component';



@NgModule({
  declarations: [
    BeerListItemComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [BeerListItemComponent]
})
export class SharedModule { }
