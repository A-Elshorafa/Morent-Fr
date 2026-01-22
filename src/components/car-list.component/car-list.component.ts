import { Component } from '@angular/core';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { CarCardComponent, Car } from '../car-card.component/car-card.component';

@Component({
  selector: 'app-car-list',
  standalone: true,
  imports: [ScrollingModule, CarCardComponent],
  templateUrl: './car-list.component.html',
  styleUrls: ['./car-list.component.scss'],
})
export class CarListComponent {
  cars: Car[] = [
    {
      name: 'Koenigsegg',
      type: 'Sport',
      image: 'assets/cars/koenigsegg.png',
      fuel: '90L',
      transmission: 'Manual',
      people: 2,
      price: 99,
      liked: true,
    },
    {
      name: 'Nissan GT-R',
      type: 'Sport',
      image: 'assets/cars/gtr.png',
      fuel: '80L',
      transmission: 'Manual',
      people: 2,
      price: 80,
      oldPrice: 100,
    },
    // add more items here
  ];
}
