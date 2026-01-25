import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-ccv-input',
  imports: [],
  standalone: true,
  templateUrl: './ccv-input.component.html',
  styleUrl: './ccv-input.component.css',
})
export class CcvInputComponent {
  @Input() title = 'CVC';
  @Output() valueChange = new EventEmitter<string>();

  onInput(event: Event) {
    const input = event.target as HTMLInputElement;
    input.value = input.value.replace(/\D/g, '');
    this.valueChange.emit(input.value);
  }
}
