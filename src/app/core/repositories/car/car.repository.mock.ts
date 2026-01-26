import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Car } from '../../interfaces/car.interface';
import { CarRepository } from './car.repository';

@Injectable()
export class CarMockRepository implements CarRepository {
    private carsDummyData: Car[] = [
        {
            carId: '1',
            modelName: 'Koenigsegg',
            rentalPrice: 99,
            typeName: 'Sport',
            photoURL: "assets/cars/car-1.png",
            fuelCapacity: 90,
            isAutomatic: true,
            noOfPassengers: 4,
            isPreferred: false
        },
        {
            carId: '2',
            modelName: 'Nissan GT-R',
            rentalPrice: 80,
            typeName: 'Sport',
            photoURL: "assets/cars/car-2.png",
            fuelCapacity: 80,
            isAutomatic: true,
            noOfPassengers: 6,
            isPreferred: false
        },
        {
            carId: '3',
            modelName: 'Koenigsegg',
            rentalPrice: 99,
            typeName: 'Sport',
            photoURL: "assets/cars/car-3.png",
            fuelCapacity: 90,
            isAutomatic: true,
            noOfPassengers: 2,
            isPreferred: false
        },
        {
            carId: '4',
            modelName: 'Nissan GT-R',
            rentalPrice: 80,
            typeName: 'Sport',
            photoURL: "assets/cars/car-4.png",
            fuelCapacity: 80,
            isAutomatic: true,
            noOfPassengers: 4,
            isPreferred: false
        },
    ];

    getCarsList(pageNumber: number = 1, pageSize: number = 10, searchToken: string = ""): Observable<Car[]> {
        return of(this.carsDummyData);
    }

    getPopularCars(): Observable<Car[]> {
        return of(this.carsDummyData);
    };
    getRecommendedCars(): Observable<Car[]> {
        return of([
            {
                carId: '1',
                modelName: 'All New Rush',
                rentalPrice: 72,
                typeName: 'SUV',
                photoURL: "assets/cars/car-1.png",
                fuelCapacity: 70,
                isAutomatic: false,
                noOfPassengers: 6,
                isPreferred: false,
            },
            {
                carId: '2',
                modelName: 'CR-V',
                rentalPrice: 80,
                typeName: 'SUV',
                photoURL: "assets/cars/car-2.png",
                fuelCapacity: 80,
                isAutomatic: true,
                noOfPassengers: 6,
                isPreferred: false,
            },
            {
                carId: '3',
                modelName: 'All New Terios',
                rentalPrice: 74,
                typeName: 'SUV',
                photoURL: "assets/cars/car-3.png",
                fuelCapacity: 90,
                isAutomatic: false,
                noOfPassengers: 6,
                isPreferred: false,
            },
            {
                carId: '4',
                modelName: 'CR-V',
                rentalPrice: 80,
                typeName: 'SUV',
                photoURL: "assets/cars/car-4.png",
                fuelCapacity: 80,
                isAutomatic: true,
                noOfPassengers: 6,
                isPreferred: false,
            },
            {
                carId: '5',
                modelName: 'MG ZX Exclusive',
                rentalPrice: 76,
                typeName: 'Hatchback',
                photoURL: "assets/cars/car-5.png",
                fuelCapacity: 70,
                isAutomatic: false,
                noOfPassengers: 4,
                isPreferred: false,
            },
            {
                carId: '6',
                modelName: 'New MGZS',
                rentalPrice: 80,
                typeName: 'SUV',
                photoURL: "assets/cars/car-2.png",
                fuelCapacity: 80,
                isAutomatic: true,
                noOfPassengers: 6,
                isPreferred: false,
            },
            {
                carId: '7',
                modelName: 'MG ZX Excite',
                rentalPrice: 74,
                typeName: 'Hatchback',
                photoURL: "assets/cars/car-4.png",
                fuelCapacity: 90,
                isAutomatic: true,
                noOfPassengers: 4,
                isPreferred: false,
            },
            {
                carId: '8',
                modelName: 'New MGZS',
                rentalPrice: 80,
                typeName: 'SUV',
                photoURL: "assets/cars/car-1.png",
                fuelCapacity: 80,
                isAutomatic: false,
                noOfPassengers: 6,
                isPreferred: false,
            },
            {
                carId: '9',
                modelName: 'All New Rush',
                rentalPrice: 72,
                typeName: 'SUV',
                photoURL: "assets/cars/car-1.png",
                fuelCapacity: 70,
                isAutomatic: false,
                noOfPassengers: 6,
                isPreferred: false
            },
            {
                carId: '10',
                modelName: 'CR-V',
                rentalPrice: 80,
                typeName: 'SUV',
                photoURL: "assets/cars/car-2.png",
                fuelCapacity: 80,
                isAutomatic: true,
                noOfPassengers: 6,
                isPreferred: false
            },
            {
                carId: '11',
                modelName: 'All New Terios',
                rentalPrice: 74,
                typeName: 'SUV',
                photoURL: "assets/cars/car-3.png",
                fuelCapacity: 90,
                isAutomatic: false,
                noOfPassengers: 6,
                isPreferred: false
            },
            {
                carId: '12',
                modelName: 'CR-V',
                rentalPrice: 80,
                typeName: 'SUV',
                photoURL: "assets/cars/car-4.png",
                fuelCapacity: 80,
                isAutomatic: true,
                noOfPassengers: 6,
                isPreferred: false
            },
        ]);
    }
}
