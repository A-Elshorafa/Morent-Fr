import { Provider } from '@angular/core';
import { CarRepository } from './car.repository';
import { CarHttpRepository } from './car.repository.http';

export const CAR_REPOSITORY_PROVIDER: Provider = {
    provide: CarRepository,
    useClass: CarHttpRepository, // 🔁 switch here
};
