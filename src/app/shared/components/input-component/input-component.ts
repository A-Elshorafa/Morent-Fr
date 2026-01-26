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
import { FilterLayoutService } from '@/core/services/filter-layout.service';

@Component({
  selector: 'app-input-component',
  standalone: true,
  imports: [CommonModule, MatButtonModule],
  templateUrl: './input-component.html',
  styleUrl: './input-component.css',
})
export class InputComponent {
  constructor(private filterLayout: FilterLayoutService) { }

  // ===== Inputs =====
  @Input() placeholder = '';
  @Input() type: 'text' | 'email' | 'password' | 'search' = 'text';
  @Input() disabled = false;
  @Input() readonly = false;
  @Input() showFilterButton = false;


  // Initial value input
  @Input()
  set value(val: string) {
    this._value.set(val ?? '');
  }

  @Output() onSearch = new EventEmitter<string>();

  onToggleFilter() {
    this.filterLayout.toggle();
  }

  // ===== Signals =====
  private _value = signal('');
  valueSignal = computed(() => this._value());


  // ===== Handlers =====
  onInput(event: Event): void {
    const newValue = (event.target as HTMLInputElement).value;
    this._value.set(newValue);
  }

  onClickSearch() {
    this.onSearch.emit(this.valueSignal());
  }
}
