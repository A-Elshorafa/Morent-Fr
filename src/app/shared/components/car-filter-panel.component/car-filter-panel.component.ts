import { FormsModule } from '@angular/forms';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FilterLayoutService } from '@/core/services/filter-layout.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'car-filter-panel',
  imports: [FormsModule, CommonModule],
  standalone: true,
  templateUrl: './car-filter-panel.component.html',
  styleUrl: './car-filter-panel.component.css',
})
export class CarFilterPanelComponent {

  constructor(public filterLayoutService: FilterLayoutService) {
  }

  @Output() filtersChange = new EventEmitter<any>();

  filters = {
    type: ['Sport', 'SUV', 'MPV'],
    capacity: ['2', '8+'],
    maxPrice: 100
  };

  toggleArrayFilter(arr: string[], value: string) {
    const index = arr.indexOf(value);
    index === -1 ? arr.push(value) : arr.splice(index, 1);
    this.emit();
  }

  emit() {
    this.filtersChange.emit(this.filters);
  }

  close() {
    this.filterLayoutService.close();
  }
}
