import { Component } from '@angular/core';
import { HeaderComponent } from '../../../shared/components/header/header.component';
import { FooterComponent } from '../../../shared/components/footer-component/footer-component';
import { CarFilterPanelComponent } from '../../../shared/components/car-filter-panel.component/car-filter-panel.component';

@Component({
  selector: 'app-main-layout',
  standalone: true,
  imports: [HeaderComponent, FooterComponent, CarFilterPanelComponent],
  templateUrl: './main.layout.html',
  styleUrl: './main.layout.css',
})

export class MainLayout {
  filtersOpen = false;

  onFiltersChange(filters: any) {
    console.log(filters);
  }
  onToggleFilter() {
    console.log('toggle filter app');
    this.filtersOpen = !this.filtersOpen;
  }
}
