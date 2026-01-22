import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './shared/components/header/header.component';
import { FooterComponent } from './shared/components/footer-component/footer-component';
import { RecommendedCars } from './features/cars/pages/recommended-cars/recommended-cars.page'

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, FooterComponent, RecommendedCars],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
}
