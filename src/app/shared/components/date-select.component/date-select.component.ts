import { Component, Input, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-form-date',
  standalone: true,
  templateUrl: './date-select.component.html',
  styleUrls: ['./date-select.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => FormDateComponent),
      multi: true,
    },
  ],
})
export class FormDateComponent implements ControlValueAccessor {
  @Input({ required: true }) title!: string;
  @Input() placeholder = 'Select date';
  @Input() variant: 'default' | 'inline' = 'default';

  value: string | null = null;
  disabled = false;

  private onChange = (value: string | null) => { };
  private onTouched = () => { };

  writeValue(value: string | null): void {
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

  handleChange(value: string) {
    this.value = value;
    this.onChange(value);
  }
  handleOnTouched() {
    this.onTouched();
  }
}
