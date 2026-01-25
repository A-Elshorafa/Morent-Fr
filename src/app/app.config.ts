import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { CAR_REPOSITORY_PROVIDER } from './core/repositories/car/car.provider';
import { LOCATION_REPOSITORY_PROVIDER } from './core/repositories/location/location.provider';
import { FilterLayoutService } from '@/core/services/filter-layout.service';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes),
    CAR_REPOSITORY_PROVIDER,
    LOCATION_REPOSITORY_PROVIDER,
    FilterLayoutService
  ]
};
