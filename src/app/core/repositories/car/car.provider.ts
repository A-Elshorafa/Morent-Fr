import { Provider } from '@angular/core';
import { CarRepository } from './car.repository';
import { CarMockRepository } from './car.repository.mock';
// import { CarHttpRepository } from './car.repository.http';

export const CAR_REPOSITORY_PROVIDER: Provider = {
    provide: CarRepository,
    useClass: CarMockRepository, // 🔁 switch here
};
