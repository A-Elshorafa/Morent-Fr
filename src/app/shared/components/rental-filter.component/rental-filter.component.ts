import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup } from '@angular/forms';

import { LocationSelectComponent } from '../location-select.component/location-select.component';
import { FormDateComponent } from '../date-select.component/date-select.component';

@Component({
  selector: 'rental-filter',
  standalone: true,
  templateUrl: './rental-filter.component.html',
  styleUrls: ['./rental-filter.component.css'],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    LocationSelectComponent,
    FormDateComponent
  ],
})
export class RentalFilterComponent {
  @Output() swapLocationsEvent = new EventEmitter<void>();

  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      pickUpLocation: [null],
      pickUpDateFrom: [null],
      pickUpDateTo: [null],

      dropOffLocation: [null],
      dropOffDateFrom: [null],
      dropOffDateTo: [null],
    });
  }

  swapLocations() {
    const {
      pickUpLocation,
      pickUpDateFrom,
      pickUpDateTo,
      dropOffLocation,
      dropOffDateFrom,
      dropOffDateTo,
    } = this.form.value;

    this.form.patchValue({
      pickUpLocation: dropOffLocation,
      pickUpDateFrom: dropOffDateFrom,
      pickUpDateTo: dropOffDateTo,

      dropOffLocation: pickUpLocation,
      dropOffDateFrom: pickUpDateFrom,
      dropOffDateTo: pickUpDateTo,
    });

    this.swapLocationsEvent.emit(this.form.value);
  }
}
