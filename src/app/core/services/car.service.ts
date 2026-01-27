import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Car } from '../interfaces/car.interface';
import { CarRepository } from '../repositories/car/car.repository';

@Injectable({ providedIn: 'root' })
export class CarService {
    constructor(private repo: CarRepository) { }

    getCarsList(pageNumber: number = 1, pageSize: number = 10, searchToken: string = ""): Observable<Car[]> {
        return this.repo.getCarsList(pageNumber, pageSize, searchToken);
    }

    getPopularCars(): Observable<Car[]> {
        return this.repo.getPopularCars();
    }

    getRecommendedCars(): Observable<Car[]> {
        return this.repo.getRecommendedCars();
    }

    getCarDetails(id: string): Observable<Car> {
        return this.repo.getCarDetails(id);
    }
}
