import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from '../components/header/header.component';
import { FooterComponent } from '../components/footer-component/footer-component';
import { PromoCardComponent } from '../components/promo-card.component/promo-card.component';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, FooterComponent, PromoCardComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
}
