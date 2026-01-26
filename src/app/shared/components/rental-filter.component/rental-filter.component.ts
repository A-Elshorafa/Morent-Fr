import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LocationSelectComponent } from "../location-select.component/location-select.component";
import { FormDateComponent } from "../date-select.component/date-select.component";

@Component({
  selector: 'rental-filter',
  standalone: true,
  templateUrl: './rental-filter.component.html',
  styleUrls: ['./rental-filter.component.css'],
  imports: [CommonModule, LocationSelectComponent, FormDateComponent],
})
export class RentalFilterComponent {
  swapLocations() {
    console.log('swap pickup & drop-off');
  }
}
