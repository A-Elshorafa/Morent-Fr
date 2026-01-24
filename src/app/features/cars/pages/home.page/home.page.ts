import { Component } from '@angular/core';
import { HeaderComponent } from '../../../../shared/components/header/header.component';
import { FooterComponent } from '../../../../shared/components/footer-component/footer-component';
import { RecommendedCars } from '../recommended-cars/recommended-cars.page'
import { CarFilterPanelComponent } from '../../../../shared/components/car-filter-panel.component/car-filter-panel.component';

@Component({
  selector: 'app-home.page',
  imports: [HeaderComponent, FooterComponent, RecommendedCars, CarFilterPanelComponent],
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
