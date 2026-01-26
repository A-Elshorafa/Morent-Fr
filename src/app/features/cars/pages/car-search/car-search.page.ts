import { Component, OnInit, ChangeDetectorRef, signal } from '@angular/core';
import { RentalFilterComponent } from "@/shared/components/rental-filter.component/rental-filter.component";
import { CarsListComponent } from "../../components/cars-list.component/cars-list.component";
import { CarService } from '@/core/services/car.service';
import { ActivatedRoute } from '@angular/router';
import { Car } from '@/core/interfaces/car.interface';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-car-search',
  standalone: true,
  imports: [RentalFilterComponent, CarsListComponent, CommonModule],
  templateUrl: './car-search.page.html',
  styleUrl: './car-search.page.css',
})
export class CarSearchPage implements OnInit {
  cars = signal<Car[]>([]);
  currentPage = 1;
  pageSize = 5;
  searchToken = '';
  hasMore = true;

  constructor(
    private route: ActivatedRoute,
    private carService: CarService,
    private cdr: ChangeDetectorRef
  ) { }

  ngOnInit(): void {
    // Subscribe to query parameters to trigger search on page load and on update
    this.route.queryParams.subscribe(params => {
      this.searchToken = params['search'] || '';
      this.resetAndLoad();
    });
  }

  private resetAndLoad(): void {
    this.currentPage = 1;
    this.cars.update(() => []);
    this.hasMore = true;
    this.loadCars();
  }

  loadCars(): void {
    this.carService.getCarsList(this.currentPage, this.pageSize, this.searchToken).subscribe(newCars => {
      if (newCars.length < this.pageSize) {
        this.hasMore = false;
      }
      this.cars.update((cars) => [...cars, ...newCars]);
      this.cdr.markForCheck();
    });
  }

  loadMore(): void {
    if (this.hasMore) {
      this.currentPage++;
      this.loadCars();
    }
  }
}
