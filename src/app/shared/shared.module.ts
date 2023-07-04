import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BeerListItemComponent } from './components/beer-list-item/beer-list-item.component';
import { LoaderComponent } from './components/loader/loader.component';
import { PopOverComponent } from './components/pop-over/pop-over.component';
import { DescriptorComponent } from './components/descriptor/descriptor.component';
import { BeerDetailComponent } from './components/beer-detail/beer-detail.component';

@NgModule({
  declarations: [
    BeerListItemComponent,
    LoaderComponent,
    PopOverComponent,
    DescriptorComponent,
    BeerDetailComponent,
  ],
  imports: [CommonModule],
  exports: [
    BeerListItemComponent,
    LoaderComponent,
    PopOverComponent,
    BeerDetailComponent,
  ],
})
export class SharedModule {}
