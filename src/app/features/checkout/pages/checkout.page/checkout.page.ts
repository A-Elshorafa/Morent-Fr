import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BillingInfoComponent } from '../../components/billing-info/billing-info.component';
import { RentalInfoComponent } from '../../components/rental-info/rental-info.component';
import { PaymentMethodComponent } from '../../components/payment-method/payment-method.component';
import { ConfirmationComponent } from '../../components/confirmation/confirmation.component';
import { RentalSummaryComponent } from '../../components/rental-summary/rental-summary.component';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-checkout.page',
  imports: [
    ReactiveFormsModule,
    BillingInfoComponent,
    RentalInfoComponent,
    PaymentMethodComponent,
    ConfirmationComponent,
    RentalSummaryComponent
  ],
  templateUrl: './checkout.page.html',
  styleUrl: './checkout.page.css',
})
export class CheckoutPage {
  form = new FormGroup({
    billing: new FormGroup({
      name: new FormControl('', Validators.required),
      phone: new FormControl('', Validators.required),
      address: new FormControl(''),
      city: new FormControl('')
    }),

    rental: new FormGroup({
      pickUp: new FormGroup({
        pickUpLocation: new FormControl<number | null>(null),
        pickUpDate: new FormControl<string | null>(null),
        pickUpTime: new FormControl<string | null>(null),
      }),
      dropOff: new FormGroup({
        deliveryLocation: new FormControl<number | null>(null),
        deliveryDate: new FormControl<string | null>(null),
        deliveryTime: new FormControl<string | null>(null),
      }),
    }),

    payment: new FormGroup({
      method: new FormControl('card'),
      cardNumber: new FormControl(''),
      expiry: new FormControl(''),
      cvc: new FormControl(''),
      holder: new FormControl(''),
    }),

    confirmation: new FormGroup({
      marketing: new FormControl(false),
      terms: new FormControl(false, Validators.requiredTrue),
    })
  });

  submit() {
    console.log('submit');
    console.log(this.form.value);

    if (this.form.invalid) return;
    console.log(this.form.value);
  }
}
