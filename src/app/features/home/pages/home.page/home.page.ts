import { Component, Input } from '@angular/core';
import { PromoCardComponent } from '../../../../shared/components/promo-card.component/promo-card.component';
import { RentalFilterComponent } from '../../../../shared/components/rental-filter.component/rental-filter.component';
import { RecommendedCarsListComponent } from "../../components/recommended-cars-list.component/recommended-cars-list.component";
import { PopularCarsListComponent } from '../../components/popular-cars-list.component/popular-cars-list.component';

@Component({
  selector: 'app-home.page',
  imports: [PromoCardComponent, RentalFilterComponent, RecommendedCarsListComponent, PopularCarsListComponent],
  templateUrl: './home.page.html',
  styleUrl: './home.page.css',
})
export class HomePage {
  @Input() filtersOpen = false;
}
