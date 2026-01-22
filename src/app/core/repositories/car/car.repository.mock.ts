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
                image: 'https://picsum.photos/300/150?1',
                fuel: '90L',
                transmission: 'Manual',
                people: 2,
                price: 99,
                liked: true,
            },
            {
                id: '2',
                name: 'Nissan GT-R',
                type: 'Sport',
                image: 'https://picsum.photos/300/150?2',
                fuel: '80L',
                transmission: 'Manual',
                people: 2,
                price: 80,
                oldPrice: 100,
            },
            {
                id: '3',
                name: 'Koenigsegg',
                type: 'Sport',
                image: 'https://picsum.photos/300/150?3',
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
                image: 'https://picsum.photos/300/150?4',
                fuel: '80L',
                transmission: 'Manual',
                people: 2,
                price: 80,
                oldPrice: 100,
            },
        ]);
    }
}
