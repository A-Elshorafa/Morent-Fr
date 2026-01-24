import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-car-reviews',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './car-reviews.component.html',
  styleUrl: './car-reviews.component.css',
})
export class CarReviewsComponent {
  @Input() reviews: {
    name: string;
    role: string;
    avatar: string;
    date: string;
    rating: number;
    comment: string;
  }[] = [];

  showAll = false;

  get visibleReviews() {
    return this.showAll ? this.reviews : this.reviews.slice(0, 2);
  }
}
