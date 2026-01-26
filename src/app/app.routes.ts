import { Routes } from '@angular/router';
import { NotFoundComponent } from './shared/components/not-found.component/not-found.component';
import { HomePage } from './features/home/pages/home.page/home.page';
import { CarDetailsPage } from './features/cars/pages/car-details/car-details.page';
import { CarSearchPage } from './features/cars/pages/car-search/car-search.page';
import { CheckoutPage } from './features/checkout/pages/checkout.page/checkout.page';
import { AnalyticsPage } from './features/admin/pages/analytics.page/analytics.page';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomePage
  },
  {
    path: 'car-details',
    component: CarDetailsPage
  },
  {
    path: 'checkout',
    component: CheckoutPage
  },
  {
    path: 'car-search',
    component: CarSearchPage
  },
  {
    path: 'analytics',
    component: AnalyticsPage
  },
  {
    path: '**',
    component: NotFoundComponent
  }
];
