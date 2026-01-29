import { Routes } from '@angular/router';
import { NotFoundComponent } from './shared/components/not-found.component/not-found.component';
import { HomePage } from './features/home/pages/home.page/home.page';
import { CarDetailsPage } from './features/cars/pages/car-details/car-details.page';
import { CarSearchPage } from './features/cars/pages/car-search/car-search.page';
import { CheckoutPage } from './features/checkout/pages/checkout.page/checkout.page';
import { AnalyticsPage } from './features/admin/pages/analytics.page/analytics.page';
import { LoginPage } from './features/auth/pages/login-page/login-page';
import { MainLayout } from './core/layout/main.layout/main.layout';
import { AuthLayout } from './core/layout/auth.layout/auth.layout';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  // Auth Layout Routes
  {
    path: '',
    component: AuthLayout,
    children: [
      {
        path: 'login',
        component: LoginPage
      }
    ]
  },
  // Main Layout Routes
  {
    path: '',
    component: MainLayout,
    children: [
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
      }
    ]
  },
  // Not Found (usually without main layout or with main layout? Let's use main layout for now)
  {
    path: '**',
    component: MainLayout,
    children: [
      {
        path: '',
        component: NotFoundComponent
      }
    ]
  }
];
