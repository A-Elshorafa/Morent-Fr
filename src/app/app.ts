import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './shared/components/header/header.component';
import { FooterComponent } from './shared/components/footer-component/footer-component';
import { RecommendedCars } from './features/cars/pages/recommended-cars/recommended-cars.page'
import { CarFilterPanelComponent } from './shared/components/car-filter-panel.component/car-filter-panel.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, FooterComponent, RecommendedCars, CarFilterPanelComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  filtersOpen = false;

  onFiltersChange(filters: any) {
    console.log(filters);
  }
  onToggleFilter() {
    console.log('toggle filter app');
    this.filtersOpen = !this.filtersOpen;
  }
}
