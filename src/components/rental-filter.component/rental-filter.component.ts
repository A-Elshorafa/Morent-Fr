import { Component } from '@angular/core';

@Component({
  selector: 'rental-filter',
  standalone: true,
  templateUrl: './rental-filter.component.html',
  styleUrls: ['./rental-filter.component.css'],
})
export class RentalFilterComponent {
  swapLocations() {
    console.log('swap pickup & drop-off');
  }
}
