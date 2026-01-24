import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-car-info-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './car-info-card.component.html',
  styleUrl: './car-info-card.component.css',
})
export class CarInfoCardComponent {
  @Input() car!: {
    name: string;
    rating: number;
    reviewsCount: number;
    description: string;
    specs: { label: string; value: string }[];
    price: number;
    oldPrice?: number;
  };
}
