import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { CarService } from '../../services/car.service';
import { Car } from '../../../../core/interfaces/car.interface';
import { CarCardComponent } from "../../../../shared/components/car-card.component/car-card.component";
import { ScrollingModule } from '@angular/cdk/scrolling';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'recommended-cars-list',
  standalone: true,   // 👈 REQUIRED
  templateUrl: './recommended-cars-list.component.html',
  styleUrls: ['./recommended-cars-list.component.css'],
  imports: [CommonModule, CarCardComponent, ScrollingModule],
})
export class RecommendedCarsListComponent implements OnInit {
  cars: Car[] = [];
  carsRows: any[][] = [];

  viewportHeight = 0;
  visibleCount = 5;
  STEP = 5;
  readonly CARS_PER_ROW = 4;

  constructor(private carService: CarService) { }

  @ViewChild('container') container?: ElementRef<HTMLElement>;

  ngAfterViewInit() {
    this.calculateHeight();
  }

  calculateHeight(): void {
    const el = this.container?.nativeElement;
    if (!el) return;

    const rect = el.getBoundingClientRect();
    this.viewportHeight = window.innerHeight - rect.top - 20;
  }

  ngOnInit() {
    this.carService.getRecommendedCars().subscribe(cars => {
      this.cars = cars;
      this.buildRows();
    });
  }

  buildRows() {
    this.carsRows = [];
    for (let i = 0; i < this.cars.length; i += this.CARS_PER_ROW) {
      this.carsRows.push(this.cars.slice(i, i + this.CARS_PER_ROW));
    }
  }

  trackRow(index: number) {
    return index;
  }

  trackById(index: number, car: any) {
    return car.id;
  }

  showMore() {
    this.visibleCount += this.STEP;
  }
}
