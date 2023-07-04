import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-beer-detail',
  templateUrl: './beer-detail.component.html',
  styleUrls: ['./beer-detail.component.css'],
})
export class BeerDetailComponent {
  @Input() labelImageSrc: string;
  @Input() name: string;
  @Input() brewStyle: string;
  @Input() abv: number;
  @Input() description?: string;
  @Input() glassware?: string;
  @Input() availability?: string;
  @Input() ibu?: number;
  @Input() originalGravity?: number;
}
