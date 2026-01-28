import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Car } from "../../../core/interfaces/car.interface";
import { Router } from '@angular/router';

@Component({
  selector: 'car-card',
  standalone: true,
  templateUrl: './car-card.component.html',
  styleUrls: ['./car-card.component.css'],
})
export class CarCardComponent {
  @Input() car!: Car;
  @Output() rentNowEvent = new EventEmitter<Car>();

  constructor(private router: Router) { }

  ngOnInit() {
    console.log('car in ngOnInit:', this.car);
  }

  rentNow() {
    this.rentNowEvent.emit(this.car);
  }
}
