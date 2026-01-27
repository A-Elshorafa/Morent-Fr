import { Component, Input, Optional, Self } from '@angular/core';
import { ControlValueAccessor, NgControl } from '@angular/forms';

@Component({
  selector: 'app-form-input',
  imports: [],
  standalone: true,
  templateUrl: './form-input.component.html',
  styleUrl: './form-input.component.css'
})
export class FormInputComponent implements ControlValueAccessor {
  @Input({ required: true }) title!: string;
  @Input() placeholder = '';
  @Input() type: 'text' | 'email' | 'number' | 'password' = 'text';

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
}
