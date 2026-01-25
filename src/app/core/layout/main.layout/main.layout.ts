import { Component, EventEmitter, Output } from '@angular/core';
import { HeaderComponent } from '../../../shared/components/header/header.component';
import { FooterComponent } from '../../../shared/components/footer-component/footer-component';
import { CarFilterPanelComponent } from '../../../shared/components/car-filter-panel.component/car-filter-panel.component';
import { Observable } from 'rxjs';
import { FilterLayoutService } from '@/core/services/filter-layout.service';

@Component({
  selector: 'app-main-layout',
  standalone: true,
  imports: [HeaderComponent, FooterComponent, CarFilterPanelComponent],
  templateUrl: './main.layout.html',
  styleUrl: './main.layout.css',
})

export class MainLayout {
  filterLayout: FilterLayoutService;
  constructor(filterLayout: FilterLayoutService) {
    this.filterLayout = filterLayout;
  }

  onToggleFilter() {
    console.log('toggle filter app layout', this.filterLayout.open());
    this.filterLayout.toggle();
  }

  onFiltersChange(filters: any) {
    console.log(filters);
  }
}
