import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter, withComponentInputBinding } from '@angular/router';

import { routes } from './app.routes';
import { CAR_REPOSITORY_PROVIDER } from './core/repositories/car/car.provider';
import { LOCATION_REPOSITORY_PROVIDER } from './core/repositories/location/location.provider';
import { CAR_TRANSACTION_REPOSITORY_PROVIDER } from './core/repositories/car-transaction/car-transaction.provider';
import { FilterLayoutService } from './core/services/filter-layout.service';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { apiResponseInterceptor } from './core/api/api.interceptor';
import { apiUrlInterceptor } from './core/api/api-url.interceptor';
import { provideEchartsCore } from 'ngx-echarts';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes, withComponentInputBinding()),
    CAR_REPOSITORY_PROVIDER,
    LOCATION_REPOSITORY_PROVIDER,
    CAR_TRANSACTION_REPOSITORY_PROVIDER,
    FilterLayoutService,
    provideHttpClient(
      withInterceptors([apiUrlInterceptor, apiResponseInterceptor])
    ),
    provideEchartsCore({
      echarts: () => import('echarts')
    })
  ]
};
