import { Observable } from 'rxjs';
import { Car } from '../../interfaces/car.interface';

export abstract class CarRepository {
    abstract getCarsList(pageNumber: number, pageSize: number, searchToken: string): Observable<Car[]>;
    abstract getPopularCars(): Observable<Car[]>;
    abstract getRecommendedCars(): Observable<Car[]>;
}
