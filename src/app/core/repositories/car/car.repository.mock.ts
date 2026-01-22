import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Car } from '../../interfaces/car.interface';
import { CarRepository } from './car.repository';

@Injectable()
export class CarMockRepository implements CarRepository {
    getPopularCars(): Observable<Car[]> {
        return of([
            {
                id: '1',
                name: 'Koenigsegg',
                type: 'Sport',
                image: "assets/cars/car-1.png",
                fuel: '90L',
                transmission: 'Manual',
                people: 4,
                price: 99,
                liked: true,
            },
            {
                id: '2',
                name: 'Nissan GT-R',
                type: 'Sport',
                image: "assets/cars/car-2.png",
                fuel: '80L',
                transmission: 'Manual',
                people: 6,
                price: 80,
                oldPrice: 100,
            },
            {
                id: '3',
                name: 'Koenigsegg',
                type: 'Sport',
                image: "assets/cars/car-3.png",
                fuel: '90L',
                transmission: 'Manual',
                people: 2,
                price: 99,
                liked: true,
            },
            {
                id: '4',
                name: 'Nissan GT-R',
                type: 'Sport',
                image: "assets/cars/car-4.png",
                fuel: '80L',
                transmission: 'Manual',
                people: 4,
                price: 80,
                oldPrice: 100,
            },
        ]);
    };
    getRecommendedCars(): Observable<Car[]> {
        return of([
            {
                "id": "1",
                "name": "All New Rush",
                "type": "SUV",
                "image": "assets/cars/car-1.png",
                "fuel": "70L",
                "transmission": "Manual",
                "people": 6,
                "price": 72,
                "liked": false
            },
            {
                "id": "2",
                "name": "CR-V",
                "type": "SUV",
                "image": "assets/cars/car-2.png",
                "fuel": "80L",
                "transmission": "Manual",
                "people": 6,
                "price": 80,
                "liked": true
            },
            {
                "id": "3",
                "name": "All New Terios",
                "type": "SUV",
                "image": "assets/cars/car-3.png",
                "fuel": "90L",
                "transmission": "Manual",
                "people": 6,
                "price": 74,
                "liked": false
            },
            {
                "id": "4",
                "name": "CR-V",
                "type": "SUV",
                "image": "assets/cars/car-4.png",
                "fuel": "80L",
                "transmission": "Manual",
                "people": 6,
                "price": 80,
                "liked": true
            },
            {
                "id": "5",
                "name": "MG ZX Exclusive",
                "type": "Hatchback",
                "image": "assets/cars/car-5.png",
                "fuel": "70L",
                "transmission": "Manual",
                "people": 4,
                "price": 76,
                "liked": true
            },
            {
                "id": "6",
                "name": "New MGZS",
                "type": "SUV",
                "image": "assets/cars/car-2.png",
                "fuel": "80L",
                "transmission": "Manual",
                "people": 6,
                "price": 80,
                "liked": false
            },
            {
                "id": "7",
                "name": "MG ZX Excite",
                "type": "Hatchback",
                "image": "assets/cars/car-4.png",
                "fuel": "90L",
                "transmission": "Manual",
                "people": 4,
                "price": 74,
                "liked": true
            },
            {
                "id": "8",
                "name": "New MGZS",
                "type": "SUV",
                "image": "assets/cars/car-1.png",
                "fuel": "80L",
                "transmission": "Manual",
                "people": 6,
                "price": 80,
                "liked": false
            },
            {
                "id": "9",
                "name": "All New Rush",
                "type": "SUV",
                "image": "assets/cars/car-1.png",
                "fuel": "70L",
                "transmission": "Manual",
                "people": 6,
                "price": 72,
                "liked": false
            },
            {
                "id": "10",
                "name": "CR-V",
                "type": "SUV",
                "image": "assets/cars/car-2.png",
                "fuel": "80L",
                "transmission": "Manual",
                "people": 6,
                "price": 80,
                "liked": true
            },
            {
                "id": "11",
                "name": "All New Terios",
                "type": "SUV",
                "image": "assets/cars/car-3.png",
                "fuel": "90L",
                "transmission": "Manual",
                "people": 6,
                "price": 74,
                "liked": false
            },
            {
                "id": "12",
                "name": "CR-V",
                "type": "SUV",
                "image": "assets/cars/car-4.png",
                "fuel": "80L",
                "transmission": "Manual",
                "people": 6,
                "price": 80,
                "liked": true
            },
        ]);
    }
}
