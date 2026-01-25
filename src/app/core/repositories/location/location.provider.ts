import { Provider } from '@angular/core';
import { LocationRepository } from './location.repository';
import { LocationMockRepository } from './location.repository.mock';

export const LOCATION_REPOSITORY_PROVIDER: Provider = {
    provide: LocationRepository,
    useClass: LocationMockRepository,
};
