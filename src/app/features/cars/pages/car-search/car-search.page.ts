import { Component, OnInit, signal } from '@angular/core';
import { RentalFilterComponent } from "@/shared/components/rental-filter.component/rental-filter.component";
import { CarsListComponent } from "../../components/cars-list.component/cars-list.component";
import { CarService } from '@/core/services/car.service';
import { ActivatedRoute, Router } from '@angular/router';
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
  fromDate = '';
  toDate = '';
  locationId?: number;
  dropOffLocation?: number;
  hasMore = true;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private carService: CarService,
  ) { }

  ngOnInit(): void {
    // Subscribe to query parameters to trigger search on page load and on update
    this.route.queryParams.subscribe(params => {
      this.searchToken = params['search'] || '';
      this.fromDate = params['fromDate'] || '';
      this.toDate = params['toDate'] || '';
      this.locationId = params['locationId'] ? Number(params['locationId']) : undefined;
      this.dropOffLocation = params['dropOffLocation'] ? Number(params['dropOffLocation']) : undefined;

      this.resetAndLoad();
    });
  }

  private resetAndLoad(withLoading: boolean = true): void {
    this.currentPage = 1;
    this.cars.update(() => []);
    this.hasMore = true;
    if (withLoading) {
      this.loadCars();
    }
  }

  loadCars(): void {
    this.carService.getCarsList(
      this.currentPage,
      this.pageSize,
      this.searchToken,
      this.fromDate,
      this.toDate,
      this.locationId
    ).subscribe(newCars => {
      if (newCars.length < this.pageSize) {
        this.hasMore = false;
      }
      this.cars.update((cars) => [...cars, ...newCars]);
    });
  }

  loadMore(): void {
    if (this.hasMore) {
      this.currentPage++;
      this.loadCars();
    }
  }

  handleFilterChange(data: any) {
    const fromDateTime = (data.pickUpDate && data.pickUpTime) ? `${data.pickUpDate}T${data.pickUpTime}` : data.pickUpDate || null;
    const toDateTime = (data.dropOffDate && data.dropOffTime) ? `${data.dropOffDate}T${data.dropOffTime}` : data.dropOffDate || null;

    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: {
        fromDate: fromDateTime,
        toDate: toDateTime,
        locationId: data.pickUpLocation || null,
        dropOffLocation: data.dropOffLocation || null
      },
      queryParamsHandling: 'merge'
    });
  }
}
