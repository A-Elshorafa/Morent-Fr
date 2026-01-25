import { Component, Input } from '@angular/core';
import { FormGroup, ControlValueAccessor } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { FormInputComponent } from "../../../../shared/components/form-input.component/form-input.component";
import { CcvInputComponent } from '@/shared/components/ccv-input.component/ccv-input.component';
import { ExpiryDateInputComponent } from '@/shared/components/expiry-date-input.component/expiry-date-input.component';
import { CardInputComponent } from '@/shared/components/card-input.component/card-input.component';

@Component({
  selector: 'app-payment-method',
  imports: [ReactiveFormsModule, CommonModule, FormInputComponent, CcvInputComponent, ExpiryDateInputComponent, CardInputComponent],
  standalone: true,
  templateUrl: './payment-method.component.html',
  styleUrl: './payment-method.component.css',
})
export class PaymentMethodComponent implements ControlValueAccessor {
  @Input({ required: true }) group!: FormGroup;

  writeValue(obj: any): void {
    throw new Error('Method not implemented.');
  }
  registerOnChange(fn: any): void {
    throw new Error('Method not implemented.');
  }
  registerOnTouched(fn: any): void {
    throw new Error('Method not implemented.');
  }
}
