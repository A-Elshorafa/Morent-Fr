import { Component, Input } from '@angular/core';
import { Car } from "../../../core/interfaces/car.interface";

@Component({
  selector: 'car-card',
  standalone: true,
  templateUrl: './car-card.component.html',
  styleUrls: ['./car-card.component.css'],
})
export class CarCardComponent {
  @Input() car!: Car;

  ngOnInit() {
    console.log('car in ngOnInit:', this.car);
  }
}
