import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'icon-button',
  imports: [],
  templateUrl: './icon-button.html',
  styleUrl: './icon-button.css',
})
export class IconButton {
  @Input() icon: string = '';
  @Input() size: 'small' | 'large' = 'small';

  @Output() click = new EventEmitter<void>();

  onClick() {
    this.click.emit();
  }
}
