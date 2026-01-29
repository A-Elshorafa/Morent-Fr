import { Component, EventEmitter, OnInit, Output, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

import { LocationSelectComponent } from '../location-select.component/location-select.component';
import { FormDateComponent } from '../date-select.component/date-select.component';
import { FormTimeComponent } from '../time-select.component/time-select.component';
import { CarService } from '../../../core/services/car.service';

@Component({
  selector: 'rental-filter',
  standalone: true,
  templateUrl: './rental-filter.component.html',
  styleUrls: ['./rental-filter.component.css'],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    LocationSelectComponent,
    FormDateComponent,
    FormTimeComponent
  ],
})
export class RentalFilterComponent implements OnInit {
  @Output() filterChanged = new EventEmitter<any>();

  form: FormGroup;
  private router = inject(Router);
  private route = inject(ActivatedRoute);

  constructor(private fb: FormBuilder) {
    console.log('constructor:', this.route.queryParams);
    this.form = this.fb.group({
      pickUpLocation: [null],
      pickUpDate: [null],
      pickUpTime: [null],

      dropOffLocation: [null],
      dropOffDate: [null],
      dropOffTime: [null],
    });
    this.form.valueChanges.subscribe(() => {
      this.onFilterChange();
    });
  }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      console.log('ngOnInit:', params);
      const fromDateTime = params['fromDate'] || '';
      const toDateTime = params['toDate'] || '';

      const [pickUpDate, pickUpTime] = fromDateTime.split('T');
      const [dropOffDate, dropOffTime] = toDateTime.split('T');

      this.form.patchValue({
        pickUpLocation: params['locationId'] ? Number(params['locationId']) : null,
        pickUpDate: pickUpDate || null,
        pickUpTime: pickUpTime || null,

        dropOffLocation: params['dropOffLocation'] ? Number(params['dropOffLocation']) : null,
        dropOffDate: dropOffDate || null,
        dropOffTime: dropOffTime || null,
      }, { emitEvent: false });
    });
  }

  onFilterChange() {
    this.filterChanged.emit(this.form.value);
  }

  searchCars() {
    const {
      pickUpLocation, pickUpDate, pickUpTime,
      dropOffLocation, dropOffDate, dropOffTime
    } = this.form.value;

    const queryParams: any = {};

    if (pickUpLocation) queryParams.locationId = pickUpLocation;
    if (pickUpDate && pickUpTime) {
      queryParams.fromDate = `${pickUpDate}T${pickUpTime}`;
    } else if (pickUpDate) {
      queryParams.fromDate = pickUpDate;
    }

    if (dropOffDate && dropOffTime) {
      queryParams.toDate = `${dropOffDate}T${dropOffTime}`;
    } else if (dropOffDate) {
      queryParams.toDate = dropOffDate;
    }

    if (dropOffLocation) queryParams.dropOffLocation = dropOffLocation;

    this.router.navigate(['/car-search'], {
      queryParams,
      queryParamsHandling: 'merge'
    });
  }
}
