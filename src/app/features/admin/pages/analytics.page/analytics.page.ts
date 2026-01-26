import { Component } from '@angular/core';
import { RecentTransactionsComponent } from '../../components/recent-transactions.component/recent-transactions.component';
@Component({
  selector: 'app-analytics.page',
  imports: [RecentTransactionsComponent],
  templateUrl: './analytics.page.html',
  styleUrl: './analytics.page.css',
})
export class AnalyticsPage {

}
