import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from '../components/header/header.component';
import { FooterComponent } from '../components/footer-component/footer-component';
import { PromoCardComponent } from '../components/promo-card.component/promo-card.component';
import { RentalFilterComponent } from '../components/rental-filter.component/rental-filter.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, FooterComponent, PromoCardComponent, RentalFilterComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
}
