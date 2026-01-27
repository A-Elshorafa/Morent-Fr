import { Component, Input, OnChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { NgxEchartsModule } from "ngx-echarts";
import { provideEchartsCore } from 'ngx-echarts';

@Component({
  selector: 'app-rental-analysis',
  standalone: true,
  imports: [CommonModule, MatCardModule, NgxEchartsModule],
  templateUrl: './rental-analysis.component.html',
  styleUrl: './rental-analysis.component.css',
  providers: [
    provideEchartsCore({
      echarts: () => import('echarts')
    })
  ]
})

export class RentalAnalysisComponent implements OnChanges {

  @Input() title = 'Top 5 Car Rental';
  @Input() total = 0;
  @Input() items: { label: string; value: number; color: string }[] = [];
  @Input() loading = false;

  chartOptions: any;

  ngOnChanges(): void {

    if (!this.items?.length) {
      this.chartOptions = null;
      return;
    }

    this.chartOptions = {
      tooltip: { show: false },
      series: [
        {
          type: 'pie',
          radius: ['65%', '85%'],
          avoidLabelOverlap: false,
          label: { show: false },
          data: this.items.map(i => ({
            value: i.value,
            name: i.label,
            itemStyle: { color: i.color }
          }))
        }
      ]
    };
  }

  get isEmpty(): boolean {
    return !this.loading && (!this.items || this.items.length === 0);
  }
}
