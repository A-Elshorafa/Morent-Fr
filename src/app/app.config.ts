import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { CAR_REPOSITORY_PROVIDER } from './core/repositories/car/car.provider';
import { LOCATION_REPOSITORY_PROVIDER } from './core/repositories/location/location.provider';
import { FilterLayoutService } from './core/services/filter-layout.service';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { apiResponseInterceptor } from './core/api/api.interceptor';
import { apiUrlInterceptor } from './core/api/api-url.interceptor';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes),
    CAR_REPOSITORY_PROVIDER,
    LOCATION_REPOSITORY_PROVIDER,
    FilterLayoutService,
    provideHttpClient(
      withInterceptors([apiUrlInterceptor, apiResponseInterceptor])
    ),
  ]
};
