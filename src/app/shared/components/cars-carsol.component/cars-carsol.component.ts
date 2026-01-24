import { Component, Input } from '@angular/core';
import { Car } from '../../../core/interfaces/car.interface';
import { CarCardComponent } from "../car-card.component/car-card.component";
import { ScrollingModule } from '@angular/cdk/scrolling';

@Component({
  selector: 'cars-carsol',
  standalone: true,   // 👈 REQUIRED
  templateUrl: './cars-carsol.component.html',
  styleUrls: ['./cars-carsol.component.css'],
  imports: [CarCardComponent, ScrollingModule],
})
export class CarsCarsolComponent {
  @Input({ required: true }) cars: Car[] = [];
  @Input({ required: true }) title: string = '';

  trackById(index: number, car: any) {
    return car.id;
  }
}
