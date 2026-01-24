import { Component, OnInit } from '@angular/core';
import { CarService } from '../../../../core/services/car.service';
import { Car } from '../../../../core/interfaces/car.interface';
import { CarCardComponent } from "../../../../shared/components/car-card.component/car-card.component";
import { ScrollingModule } from '@angular/cdk/scrolling';

@Component({
  selector: 'popular-cars-list',
  standalone: true,   // 👈 REQUIRED
  templateUrl: './popular-cars-list.component.html',
  styleUrls: ['./popular-cars-list.component.css'],
  imports: [CarCardComponent, ScrollingModule],
})
export class PopularCarsListComponent implements OnInit {
  cars: Car[] = [];

  constructor(private carService: CarService) { }

  ngOnInit() {
    this.carService.getPopularCars().subscribe(cars => {
      this.cars = cars;
    });
  }

  trackById(index: number, car: any) {
    return car.id;
  }
}
