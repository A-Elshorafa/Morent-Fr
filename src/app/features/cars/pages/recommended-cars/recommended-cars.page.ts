import { Component } from '@angular/core';
import { PromoCardComponent } from '../../../../shared/components/promo-card.component/promo-card.component';
import { RentalFilterComponent } from '../../../../shared/components/rental-filter.component/rental-filter.component';
import { RecommendedCarsListComponent } from "../../components/recommended-cars-list.component/recommended-cars-list.component";
import { PopularCarsListComponent } from '../../components/popular-cars-list.component/popular-cars-list.component';

@Component({
  selector: 'recommended-cars',
  imports: [PromoCardComponent, RentalFilterComponent, PopularCarsListComponent, RecommendedCarsListComponent],
  templateUrl: './recommended-cars.page.html',
  styleUrl: './recommended-cars.page.css'
})
export class RecommendedCars {

}
