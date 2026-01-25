import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-card-input',
  imports: [],
  templateUrl: './card-input.component.html',
  styleUrl: './card-input.component.css',
})
export class CardInputComponent {
  @Input() title = 'Card Number';

  @Output() valueChange = new EventEmitter<string>();

  onInput(event: Event) {
    const input = event.target as HTMLInputElement;
    let value = input.value.replace(/\D/g, '');

    value = value.replace(/(.{4})/g, '$1 ').trim();
    input.value = value;

    this.valueChange.emit(value);
  }
}
