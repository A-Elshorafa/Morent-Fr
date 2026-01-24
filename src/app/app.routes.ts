import { Routes } from '@angular/router';
import { RecommendedCars } from './features/cars/pages/recommended-cars/recommended-cars.page';
import { NotFoundComponent } from './shared/components/not-found.component/not-found.component';
import { HomePage } from './features/cars/pages/home.page/home.page';

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
  // {
  //   path: 'car-details',
  //   component: CarDetails
  // },
  {
    path: '**',
    component: NotFoundComponent
  }
];
