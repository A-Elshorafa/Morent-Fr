import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Car } from '../../../core/interfaces/car.interface';
import { CarRepository } from '../../../core/repositories/car/car.repository';

@Injectable({ providedIn: 'root' })
export class CarService {
    constructor(private repo: CarRepository) { }

    getPopularCars(): Observable<Car[]> {
        return this.repo.getPopularCars();
    }

    getRecommendedCars(): Observable<Car[]> {
        return this.repo.getRecommendedCars();
    }
}
