import { FormGroup } from '@angular/forms';
import { Component, Input } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormInputComponent } from "../../../../shared/components/form-input.component/form-input.component";

@Component({
  selector: 'app-billing-info',
  imports: [ReactiveFormsModule, FormInputComponent],
  standalone: true,
  templateUrl: './billing-info.component.html',
  styleUrl: './billing-info.component.css',
})
export class BillingInfoComponent {
  @Input({ required: true }) group!: FormGroup;
}
