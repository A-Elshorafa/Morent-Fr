import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-expiry-date-input',
  imports: [],
  templateUrl: './expiry-date-input.component.html',
  styleUrl: './expiry-date-input.component.css',
})
export class ExpiryDateInputComponent {
  @Input() title = 'Expiry Date';
  @Output() valueChange = new EventEmitter<string>();

  onInput(event: Event) {
    const input = event.target as HTMLInputElement;
    let value = input.value.replace(/\D/g, '');

    if (value.length >= 3) {
      value = value.substring(0, 2) + '/' + value.substring(2, 4);
    }

    input.value = value;
    this.valueChange.emit(value);
  }
}
