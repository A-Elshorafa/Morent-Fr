import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Car } from '../../interfaces/car.interface';
import { CarRepository } from './car.repository';

@Injectable()
export class CarHttpRepository implements CarRepository {
    constructor(private http: HttpClient) { }

    getPopularCars(): Observable<Car[]> {
        return this.http.get<Car[]>('/api/cars/popular');
    }
}
