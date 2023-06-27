import { Component } from '@angular/core';
import { Constants } from 'src/app/core/constants';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  imageBaseUrl = Constants.BEER_LABELS_S3
  page = 1;
  onBeerItemClicked = (event: any) => console.log(event)

  onScroll = () => {
    this.page++
    console.log(this.page)
  }
  
}
