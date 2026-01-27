import { Component, inject, Input, OnInit, signal } from '@angular/core';
import { Router } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { BillingInfoComponent } from '../../components/billing-info/billing-info.component';
import { RentalInfoComponent } from '../../components/rental-info/rental-info.component';
import { PaymentMethodComponent } from '../../components/payment-method/payment-method.component';
import { ConfirmationComponent } from '../../components/confirmation/confirmation.component';
import { RentalSummaryComponent } from '../../components/rental-summary/rental-summary.component';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CarTransactionsService } from '../../../../core/services/car-transactions.service';
import { NotificationService } from '../../../../core/services/notification.service';
import { CarTransaction } from '../../../../core/interfaces/car-transaction.interface';
import { CommonModule } from '@angular/common';
import { Car } from '@/core/interfaces/car.interface';
import { CarService } from '../../../../core/services/car.service';

@Component({
  selector: 'app-checkout.page',
  imports: [
    CommonModule,
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
export class CheckoutPage implements OnInit {
  @Input() carId!: string;
  @Input() renterId!: string;

  car = signal<Car | null>(null);

  private carService = inject(CarService);
  private carTransactionsService = inject(CarTransactionsService);
  private notificationService = inject(NotificationService);
  private router = inject(Router);

  isLoading = signal(false);

  ngOnInit() {
    if (this.carId) {
      this.carService.getCarDetails(this.carId).subscribe({
        next: (car) => this.car.set(car),
        error: (err) => this.notificationService.error('Failed to load car details')
      });
    }
  }

  form = new FormGroup({
    billing: new FormGroup({
      name: new FormControl('', Validators.required),
      phone: new FormControl('', Validators.required),
      address: new FormControl(''),
      city: new FormControl('')
    }),

    rental: new FormGroup({
      pickUp: new FormGroup({
        pickUpLocation: new FormControl<number | null>(null, Validators.required),
        pickUpDate: new FormControl<string | null>(null, Validators.required),
        pickUpTime: new FormControl<string | null>(null, Validators.required),
      }),
      dropOff: new FormGroup({
        deliveryLocation: new FormControl<number | null>(null, Validators.required),
        deliveryDate: new FormControl<string | null>(null, Validators.required),
        deliveryTime: new FormControl<string | null>(null, Validators.required),
      }),
    }),

    payment: new FormGroup({
      method: new FormControl('card'),
      cardNumber: new FormControl('', Validators.required),
      expiry: new FormControl('', Validators.required),
      cvc: new FormControl('', Validators.required),
      holder: new FormControl('', Validators.required),
    }),

    confirmation: new FormGroup({
      marketing: new FormControl(false),
      terms: new FormControl(false, Validators.requiredTrue),
    })
  });

  submit() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      this.notificationService.error('Please fill all required fields and accept terms.');
      return;
    }

    const currentCar = this.car();
    if (!currentCar) {
      this.notificationService.error('Car data is not ready yet.');
      return;
    }

    this.isLoading.set(true);

    const formValue = this.form.getRawValue();
    const expiryDateArray = formValue.payment.expiry!.split('/');
    const expiryMonth = expiryDateArray[0];
    const expiryYear = `20${expiryDateArray[1]}`;

    // Map form values to CarTransaction interface
    // Note: Some values like carId, renterId, rentalPrice are hardcoded for now 
    // as they should normally come from the state/selected car.
    const transaction: CarTransaction = {
      fromDate: this.combineDateAndTime(formValue.rental.pickUp.pickUpDate!, formValue.rental.pickUp.pickUpTime!),
      toDate: this.combineDateAndTime(formValue.rental.dropOff.deliveryDate!, formValue.rental.dropOff.deliveryTime!),
      rentalPrice: currentCar.rentalPrice, // Should come from selected car
      cardNumber: formValue.payment.cardNumber!.split(" ").join(""),
      cardHolderName: formValue.payment.holder!,
      cardExpiryDate: new Date(Number(expiryMonth), Number(expiryYear)).toISOString(),
      promoCode: '', // Optional
      subTotal: currentCar.rentalPrice.toString(), // Should be calculated
      carId: Number(currentCar.carId), // Should come from selected car
      renterId: Number(this.renterId), // Should come from auth user
      pickupLocationId: formValue.rental.pickUp.pickUpLocation!,
      dropOfLocationId: formValue.rental.dropOff.deliveryLocation!
    };

    this.carTransactionsService.createTransaction(transaction).subscribe({
      next: (response) => {
        this.isLoading.set(false);
        this.notificationService.success('Transaction created successfully!');
        this.router.navigate(['/home']);
      },
      error: (err) => {
        this.isLoading.set(false);
        this.notificationService.error(err.message || 'Failed to create transaction');
      }
    });
  }

  private combineDateAndTime(date: string, time: string): string {
    return new Date(`${date}T${time}`).toISOString();
  }
}
