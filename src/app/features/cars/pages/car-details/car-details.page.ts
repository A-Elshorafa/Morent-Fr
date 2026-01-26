import { Component, OnInit } from '@angular/core';
import { CarGalleryComponent } from '../../components/car-gallery.component/car-gallery.component';
import { CarInfoCardComponent } from '../../components/car-info-card.component/car-info-card.component';
import { CarReviewsComponent } from '../../components/car-reviews.component/car-reviews.component';
import { PopularCarsListComponent } from '../../../../shared/components/popular-cars-list.component/popular-cars-list.component';
import { CarsCarsolComponent } from "../../../../shared/components/cars-carsol.component/cars-carsol.component";
import { CarService } from '../../../../core/services/car.service';
import { Car } from '../../../../core/interfaces/car.interface';

@Component({
  selector: 'app-car-details.page',
  standalone: true,
  imports: [CarGalleryComponent, CarInfoCardComponent, CarReviewsComponent, PopularCarsListComponent, CarsCarsolComponent],
  templateUrl: './car-details.page.html',
  styleUrl: './car-details.page.css',
})
export class CarDetailsPage implements OnInit {

  recentCars: Car[] = [];
  recommendedCars: Car[] = [];

  constructor(private carService: CarService) { }

  ngOnInit() {
    this.carService.getRecommendedCars().subscribe(cars => {
      this.recommendedCars = cars;
    });
  }

  car = {
    name: 'Nissan GT - R',
    title: 'Sports car with the best design and acceleration',
    subtitle:
      'Safety and comfort while driving a futuristic and elegant sports car',
    images: [
      'assets/images/Car.png',
      'assets/images/car-driver.png',
      'assets/images/car-second-driver.png',
    ],
    rating: 4.5,
    reviewsCount: 440,
    description:
      'NISMO has become the embodiment of Nissan’s outstanding performance, inspired by the most unforgiving proving ground, the race track.',
    specs: [
      { label: 'Type Car', value: 'Sport' },
      { label: 'Capacity', value: '2 Person' },
      { label: 'Steering', value: 'Manual' },
      { label: 'Gasoline', value: '70L' },
    ],
    price: 80,
    oldPrice: 100,
  };

  reviews = [
    {
      name: 'Alex Stanton',
      role: 'CEO at Bukalapak',
      avatar: 'assets/avatars/user-1.png',
      date: '21 July 2022',
      rating: 5,
      comment:
        'We are very happy with the service from the MORENT App. Morent has a low price and also a large variety of cars.',
    },
    {
      name: 'Skylar Dias',
      role: 'CEO at Amazon',
      avatar: 'assets/avatars/user-2.png',
      date: '20 July 2022',
      rating: 4,
      comment:
        'We are greatly helped by the services of the MORENT Application. Morent has low prices and a wide variety of cars.',
    },
  ];
}
