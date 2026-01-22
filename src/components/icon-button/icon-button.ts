import { Component, Input } from '@angular/core';

@Component({
  selector: 'icon-button',
  imports: [],
  templateUrl: './icon-button.html',
  styleUrl: './icon-button.css',
})
export class IconButton {
  @Input() icon: string = '';
  @Input() size: 'small' | 'large' = 'small';
}
