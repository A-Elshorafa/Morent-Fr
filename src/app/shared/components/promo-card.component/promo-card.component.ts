import { Component, Input } from '@angular/core';

@Component({
  selector: 'promo-card',
  standalone: true,
  templateUrl: './promo-card.component.html',
  styleUrls: ['./promo-card.component.css'],
})
export class PromoCardComponent {
  @Input() title!: string;
  @Input() description!: string;
  @Input() buttonText = 'Rental Car';
  @Input() imageUrl!: string;
  @Input() variant: 'light' | 'dark' = 'light';
}
