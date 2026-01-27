import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-details-rental',
  imports: [CommonModule, MatCardModule],
  templateUrl: './details-rental.component.html',
  styleUrl: './details-rental.component.css',
})
export class DetailsRentalComponent {

  @Input() loading = false;

  @Input() mapImage = '';

  @Input() carImage = '';
  @Input() carName = '';
  @Input() carType = '';
  @Input() price: number | null = null;

  @Input() pickupLocation = '';
  @Input() pickupDate = '';
  @Input() pickupTime = '';

  @Input() dropoffLocation = '';
  @Input() dropoffDate = '';
  @Input() dropoffTime = '';

  get isEmpty(): boolean {
    return !this.loading && !this.carName;
  }
}
