import { CommonModule } from '@angular/common';
import {
  Component,
  Input,
  Output,
  EventEmitter,
  signal,
  computed,
} from '@angular/core';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-input-component',
  standalone: true,
  imports: [CommonModule, MatButtonModule],
  templateUrl: './input-component.html',
  styleUrl: './input-component.css',
})
export class InputComponent {
  // ===== Inputs =====
  @Input() placeholder = '';
  @Input() type: 'text' | 'email' | 'password' | 'search' = 'text';
  @Input() disabled = false;
  @Input() readonly = false;
  @Input() showFilterButton = false;

  @Output() toggleFilter = new EventEmitter<void>();

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

  onToggleFilter() {
    console.log('toggle filter');
    this.toggleFilter.emit();
  }
}
