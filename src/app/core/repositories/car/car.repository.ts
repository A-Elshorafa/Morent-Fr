import { Observable } from 'rxjs';
import { Car } from '../../interfaces/car.interface';

export abstract class CarRepository {
    abstract getPopularCars(): Observable<Car[]>;
    abstract getRecommendedCars(): Observable<Car[]>;
}
