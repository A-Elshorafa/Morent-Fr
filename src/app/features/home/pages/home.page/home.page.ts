import { Component } from '@angular/core';
import { HeaderComponent } from '../../../../shared/components/header/header.component';
import { FooterComponent } from '../../../../shared/components/footer-component/footer-component';
import { CarFilterPanelComponent } from '../../../../shared/components/car-filter-panel.component/car-filter-panel.component';
import { PromoCardComponent } from '../../../../shared/components/promo-card.component/promo-card.component';
import { RentalFilterComponent } from '../../../../shared/components/rental-filter.component/rental-filter.component';
import { RecommendedCarsListComponent } from "../../components/recommended-cars-list.component/recommended-cars-list.component";
import { PopularCarsListComponent } from '../../components/popular-cars-list.component/popular-cars-list.component';

@Component({
  selector: 'app-home.page',
  imports: [HeaderComponent, FooterComponent, CarFilterPanelComponent, PromoCardComponent, RentalFilterComponent, RecommendedCarsListComponent, PopularCarsListComponent],
  templateUrl: './home.page.html',
  styleUrl: './home.page.css',
})
export class HomePage {
  filtersOpen = false;

  onFiltersChange(filters: any) {
    console.log(filters);
  }
  onToggleFilter() {
    console.log('toggle filter app');
    this.filtersOpen = !this.filtersOpen;
  }
}
