import {
  Component,
  Input,
  Output,
  EventEmitter,
  signal,
  computed,
} from '@angular/core';

@Component({
  selector: 'app-input-component',
  standalone: true,
  templateUrl: './input-component.html',
  styleUrl: './input-component.css',
})
export class InputComponent {
  // ===== Inputs =====
  @Input() placeholder = '';
  @Input() type: 'text' | 'email' | 'password' | 'search' = 'text';
  @Input() disabled = false;
  @Input() readonly = false;

  // Initial value input
  @Input()
  set value(val: string) {
    this._value.set(val ?? '');
  }

  // ===== Signals =====
  private _value = signal('');
  valueSignal = computed(() => this._value());

  // ===== Outputs =====
  @Output() valueChange = new EventEmitter<string>();

  // ===== Handlers =====
  onInput(event: Event): void {
    const newValue = (event.target as HTMLInputElement).value;
    this._value.set(newValue);
    this.valueChange.emit(newValue);
  }
}
