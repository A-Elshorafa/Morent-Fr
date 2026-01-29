import { Component, ElementRef, OnInit, AfterViewInit, OnDestroy, ViewChild } from '@angular/core';
import { CarService } from '../../../../core/services/car.service';
import { Car } from '../../../../core/interfaces/car.interface';
import { CarCardComponent } from "../../../../shared/components/car-card.component/car-card.component";
import { ScrollingModule } from '@angular/cdk/scrolling';
import { CommonModule } from '@angular/common';
import { Subscription } from 'rxjs';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'recommended-cars-list',
  standalone: true,   // 👈 REQUIRED
  templateUrl: './recommended-cars-list.component.html',
  styleUrls: ['./recommended-cars-list.component.css'],
  imports: [CommonModule, CarCardComponent, ScrollingModule],
})
export class RecommendedCarsListComponent implements OnInit, AfterViewInit, OnDestroy {
  private sub!: Subscription;
  cars: Car[] = [];
  carsRows: any[][] = [];

  viewportHeight = 0;
  visibleCount = 5;
  STEP = 5;
  readonly CARS_PER_ROW = 4;
  @ViewChild('container') container?: ElementRef<HTMLElement>;

  constructor(private carService: CarService, private router: Router) { }

  calculateHeight(): void {
    const el = this.container?.nativeElement;
    if (!el) return;

    const rect = el.getBoundingClientRect();
    this.viewportHeight = window.innerHeight - rect.top - 20;
  }

  recommendedCars() {
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
    return car.carId;
  }

  showMore() {
    this.visibleCount += this.STEP;
  }

  rentNow(car: Car) {
    this.router.navigate([`/checkout`], { queryParams: { carId: car.carId, renterId: '2' } });
  }

  ngOnInit() {
    this.recommendedCars();

    this.sub = this.router.events
      .pipe(filter(e => e instanceof NavigationEnd))
      .subscribe(() => {
        this.recommendedCars();
        this.recalcLayout();
      });
  }

  ngAfterViewInit() {
    this.recalcLayout();
  }

  ngOnDestroy() {
    this.sub?.unsubscribe();
  }

  private recalcLayout() {
    requestAnimationFrame(() => {
      this.calculateHeight();
    });
  }
}
