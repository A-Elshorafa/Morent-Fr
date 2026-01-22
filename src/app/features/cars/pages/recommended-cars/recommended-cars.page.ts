import { Component } from '@angular/core';
import { PromoCardComponent } from '../../../../shared/components/promo-card.component/promo-card.component';
import { RentalFilterComponent } from '../../../../shared/components/rental-filter.component/rental-filter.component';
import { CarListComponent } from "../../components/car-list.component/car-list.component";

@Component({
  selector: 'recommended-cars',
  imports: [PromoCardComponent, RentalFilterComponent, CarListComponent],
  templateUrl: './recommended-cars.page.html',
  styleUrl: './recommended-cars.page.css'
})
export class RecommendedCars {

}
