import { Provider } from '@angular/core';
import { LocationRepository } from './location.repository';
import { LocationHttpRepository } from './location.repository.http';

export const LOCATION_REPOSITORY_PROVIDER: Provider = {
    provide: LocationRepository,
    useClass: LocationHttpRepository,
};
