import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-descriptor',
  templateUrl: './descriptor.component.html',
  styleUrls: ['./descriptor.component.css']
})
export class DescriptorComponent {
  @Input() label: string;
  @Input() value: string;
}
