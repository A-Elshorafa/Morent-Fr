import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Car } from '../../interfaces/car.interface';
import { CarRepository } from './car.repository';

@Injectable()
export class CarHttpRepository implements CarRepository {
    constructor(private http: HttpClient) { }

    getCarsList(pageNumber: number = 1, pageSize: number = 10, searchToken: string = ""): Observable<Car[]> {
        return this.http.get<Car[]>('cars', { params: { pageNumber, pageSize, searchToken } });
    }

    getPopularCars(): Observable<Car[]> {
        return this.http.get<Car[]>('cars');
    }

    getRecommendedCars(): Observable<Car[]> {
        return this.http.get<Car[]>('cars/get-recommended-cars');
    }

    getCarDetails(id: string): Observable<Car> {
        return this.http.get<Car>(`cars/${id}`);
    }
}
