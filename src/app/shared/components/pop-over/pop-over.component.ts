import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-pop-over',
  templateUrl: './pop-over.component.html',
  styleUrls: ['./pop-over.component.css'],
})
export class PopOverComponent {
  @Input() title?: string;
  @Input() body: string;
  @Input() popoverId: string;
}
