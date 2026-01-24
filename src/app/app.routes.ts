import { Routes } from '@angular/router';
import { NotFoundComponent } from './shared/components/not-found.component/not-found.component';
import { HomePage } from './features/home/pages/home.page/home.page';
import { CarDetailsPage } from './features/cars/pages/car-details/car-details.page';

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
    path: '**',
    component: NotFoundComponent
  }
];
