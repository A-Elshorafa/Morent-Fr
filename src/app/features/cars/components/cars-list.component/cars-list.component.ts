import { Component, ElementRef, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges, ViewChild } from '@angular/core';
import { Car } from '../../../../core/interfaces/car.interface';
import { CarCardComponent } from "../../../../shared/components/car-card.component/car-card.component";
import { ScrollingModule } from '@angular/cdk/scrolling';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cars-list',
  standalone: true,
  templateUrl: './cars-list.component.html',
  styleUrls: ['./cars-list.component.css'],
  imports: [CommonModule, CarCardComponent, ScrollingModule],
})
export class CarsListComponent implements OnInit, OnChanges {
  @Input({ required: true }) cars!: Car[];
  @Input({ required: true }) showExternalPagination!: boolean;
  @Input({ required: true }) hasMore!: boolean;
  @Output() showMoreClick = new EventEmitter<void>();
  carsRows: any[][] = [];

  viewportHeight = 0;
  visibleCount = 5;
  STEP = 5;
  readonly CARS_PER_ROW = 4;

  @ViewChild('container') container?: ElementRef<HTMLElement>;

  ngAfterViewInit() {
    this.calculateHeight();
  }

  calculateHeight(): void {
    const el = this.container?.nativeElement;
    if (!el) return;

    const rect = el.getBoundingClientRect();
    this.viewportHeight = window.innerHeight - rect.top - 20;
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['cars']) {
      if (this.showExternalPagination) {
        this.visibleCount = this.cars.length;
      } else {
        this.visibleCount = this.STEP;
      }
      this.buildRows();
    }
  }

  ngOnInit() {
  }

  buildRows() {
    this.carsRows = [];
    for (let i = 0; i < this.cars.length; i += this.CARS_PER_ROW) {
      this.carsRows.push(this.cars.slice(i, i + this.CARS_PER_ROW));
    }
  }

  trackRow(index: number) {
    return index;
  }

  trackById(index: number, car: any) {
    return car.carId;
  }

  showMore() {
    if (this.showExternalPagination) {
      this.showMoreClick.emit();
    } else {
      this.visibleCount += this.STEP;
    }
  }
}
