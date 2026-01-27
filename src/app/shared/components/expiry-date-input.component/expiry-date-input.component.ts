import { Component, Input, Optional, Self } from '@angular/core';
import { ControlValueAccessor, NgControl } from '@angular/forms';

@Component({
  selector: 'app-expiry-date-input',
  imports: [],
  templateUrl: './expiry-date-input.component.html',
  styleUrl: './expiry-date-input.component.css',
})
export class ExpiryDateInputComponent implements ControlValueAccessor {
  @Input() title = 'Expiry Date';

  constructor(@Optional() @Self() public ngControl: NgControl) {
    if (this.ngControl) {
      this.ngControl.valueAccessor = this;
    }
  }

  get isInvalid(): boolean {
    return !!(this.ngControl?.invalid && (this.ngControl?.dirty || this.ngControl?.touched));
  }

  value = '';
  disabled = false;

  onChange = (value: string) => { };
  onTouched = () => { };

  writeValue(value: string): void {
    this.value = value ?? '';
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

  onInput(event: Event) {
    const input = event.target as HTMLInputElement;
    let value = input.value.replace(/\D/g, '');

    if (value.length >= 3) {
      value = value.substring(0, 2) + '/' + value.substring(2, 4);
    }

    input.value = value;
    this.value = value;
    this.onChange(value);
  }
}
