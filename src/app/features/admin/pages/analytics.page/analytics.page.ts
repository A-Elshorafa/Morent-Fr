import { Component } from '@angular/core';
import { RecentTransactionsComponent } from '../../components/recent-transactions.component/recent-transactions.component';
import { DetailsRentalComponent } from '../../components/details-rental.component/details-rental.component';
import { RentalAnalysisComponent } from '../../components/rental-analysis.component/rental-analysis.component';
import { Car } from '../../../../core/interfaces/car.interface';

@Component({
  selector: 'app-analytics.page',
  imports: [RecentTransactionsComponent, DetailsRentalComponent, RentalAnalysisComponent],
  templateUrl: './analytics.page.html',
  styleUrl: './analytics.page.css',
})
export class AnalyticsPage {
  selectedCar: Car | null = null;

  onCarSelected(car: Car): void {
    this.selectedCar = car;
  }
}
