import { Component, Input, Optional, Self } from '@angular/core';
import { ControlValueAccessor, NgControl } from '@angular/forms';

@Component({
  selector: 'app-card-input',
  imports: [],
  templateUrl: './card-input.component.html',
  styleUrl: './card-input.component.css',
})
export class CardInputComponent implements ControlValueAccessor {
  @Input() title = 'Card Number';

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

    value = value.replace(/(.{4})/g, '$1 ').trim();
    input.value = value;
    this.value = value;
    this.onChange(value);
  }
}
