import { Component, OnInit } from '@angular/core';
import { CarService } from '../../../../core/services/car.service';
import { Car } from '../../../../core/interfaces/car.interface';
import { CarCardComponent } from "../../../../shared/components/car-card.component/car-card.component";
import { ScrollingModule } from '@angular/cdk/scrolling';
import { Subscription } from 'rxjs';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'popular-cars-list',
  standalone: true,   // 👈 REQUIRED
  templateUrl: './popular-cars-list.component.html',
  styleUrls: ['./popular-cars-list.component.css'],
  imports: [CarCardComponent, ScrollingModule, CommonModule],
})
export class PopularCarsListComponent implements OnInit {
  private sub!: Subscription;
  cars: Car[] = [];

  constructor(private carService: CarService, private router: Router) { }

  ngOnInit() {
    this.popularCars(); // 👈 FIRST LOAD

    this.sub = this.router.events
      .pipe(filter(e => e instanceof NavigationEnd))
      .subscribe(() => {
        this.popularCars();
      });
  }

  popularCars() {
    this.carService.getPopularCars().subscribe(cars => {
      this.cars = cars;
    });
  }

  trackById(index: number, car: any) {
    return car.carId;
  }

  rentNow(car: Car) {
    this.router.navigate([`/checkout`], { queryParams: { carId: car.carId, renterId: '2' } });
  }
}
