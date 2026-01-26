import { Component, OnInit, signal } from '@angular/core';
import { CarService } from '../../../../core/services/car.service';
import { CommonModule } from '@angular/common';
import { Car } from '../../../../core/interfaces/car.interface';
@Component({
  selector: 'app-recent-transactions',
  imports: [CommonModule],
  templateUrl: './recent-transactions.component.html',
  styleUrl: './recent-transactions.component.css',
})
export class RecentTransactionsComponent implements OnInit {
  readonly pageSize = 5;
  currentPage = 1;
  searchToken = '';

  loading = signal<boolean>(true);
  cars = signal<Car[]>([]);
  hasMore = signal<boolean>(true);

  constructor(private carService: CarService) { }

  ngOnInit(): void {
    this.loadCars();
  }

  private loadCars(): void {
    this.loading.set(true);

    this.carService
      .getCarsList(this.currentPage, this.pageSize, this.searchToken)
      .subscribe({
        next: (newCars) => {
          this.cars.set(newCars.slice(0, 5)); // hard safety
          this.hasMore.set(newCars.length === this.pageSize);
          this.loading.set(false);
        },
        error: () => {
          this.cars.set([]);
          this.loading.set(false);
        }
      });
  }
}
