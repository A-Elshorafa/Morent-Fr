import { Component, Input, Output, EventEmitter, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { type SelectOption } from '../../../core/interfaces/select-option';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-form-select',
  imports: [CommonModule],
  templateUrl: './form-select.component.html',
  styleUrl: './form-select.component.css',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => FormSelectComponent),
      multi: true,
    },
  ],
})
export class FormSelectComponent<T = any> implements ControlValueAccessor {
  @Input({ required: true }) title!: string;
  @Input() disabled = false;
  @Input() value: T | null = null;
  @Input() placeholder = 'Select';
  @Input({ required: true }) options: SelectOption<T>[] = [];
  @Input() variant: 'default' | 'inline' = 'default';
  @Output() valueChange = new EventEmitter<T | null>();

  protected String = String;

  onChange = (value: T | null) => { };
  onTouched = () => { };

  writeValue(value: T | null): void {
    this.value = value;
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  handleChange(value: T | null): void {
    this.value = value;
    this.onChange(value);
    this.valueChange.emit(value);
  }
}
