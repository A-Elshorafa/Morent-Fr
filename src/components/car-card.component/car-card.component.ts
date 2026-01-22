import { Component, Input } from '@angular/core';

export interface Car {
  name: string;
  type: string;
  image: string;
  fuel: string;
  transmission: string;
  people: number;
  price: number;
  oldPrice?: number;
  liked?: boolean;
}

@Component({
  selector: 'car-card',
  standalone: true,
  templateUrl: './car-card.component.html',
  styleUrls: ['./car-card.component.scss'],
})
export class CarCardComponent {
  @Input() car!: Car;
}
