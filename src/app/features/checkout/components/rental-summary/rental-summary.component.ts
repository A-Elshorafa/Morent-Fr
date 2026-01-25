import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-rental-summary',
  imports: [CommonModule],
  standalone: true,
  templateUrl: './rental-summary.component.html',
  styleUrl: './rental-summary.component.css',
})
export class RentalSummaryComponent {
  @Input() carName = '';
  @Input() carImage = '';
  @Input() rating = 4; // out of 5
  @Input() reviewers = 0;

  @Input() subtotal = 0;
  @Input() tax = 0;
  @Input() discount = 0;

  get total(): number {
    return this.subtotal + this.tax - this.discount;
  }

  stars = Array.from({ length: 5 });
}
