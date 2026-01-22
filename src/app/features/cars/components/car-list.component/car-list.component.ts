import { Component, OnInit } from '@angular/core';
import { CarService } from '../../services/car.service';
import { Car } from '../../../../core/interfaces/car.interface';
import { CarCardComponent } from "../../../../shared/components/car-card.component/car-card.component";
import { ScrollingModule } from '@angular/cdk/scrolling';

@Component({
  selector: 'app-car-list',
  standalone: true,   // 👈 REQUIRED
  templateUrl: './car-list.component.html',
  styleUrls: ['./car-list.component.css'],
  imports: [CarCardComponent, ScrollingModule],
})
export class CarListComponent implements OnInit {
  cars: Car[] = [];

  constructor(private carService: CarService) { }

  ngOnInit() {
    this.carService.getPopularCars().subscribe(cars => {
      this.cars = cars;
      console.log('cars: ');
      console.log(this.cars);
    });
  }
}
