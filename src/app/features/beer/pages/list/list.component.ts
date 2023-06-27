import { Component } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  page = 1;
  onBeerItemClicked = (event: any) => console.log(event)

  onScroll = () => {
    this.page++
    console.log(this.page)
  }
  
}
