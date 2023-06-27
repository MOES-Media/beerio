import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-beer-list-item',
  templateUrl: './beer-list-item.component.html',
  styleUrls: ['./beer-list-item.component.css']
})
export class BeerListItemComponent {
  @Input() imageSource!: string;
  @Input() name!: string;
  @Input() style!: string;
  @Input() abv!: number

  @Output() onItemClick = new EventEmitter<string>()

  emitOnItemClicked = () => this.onItemClick.emit(this.name)
}
