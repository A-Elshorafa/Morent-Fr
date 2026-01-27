import { Component } from '@angular/core';
import { RecentTransactionsComponent } from '../../components/recent-transactions.component/recent-transactions.component';
import { DetailsRentalComponent } from '../../components/details-rental.component/details-rental.component';

@Component({
  selector: 'app-analytics.page',
  imports: [RecentTransactionsComponent, DetailsRentalComponent],
  templateUrl: './analytics.page.html',
  styleUrl: './analytics.page.css',
})
export class AnalyticsPage {

}
