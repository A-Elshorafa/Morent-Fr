import { Component } from '@angular/core';
import { MatDivider } from '@angular/material/divider';
@Component({
  selector: 'footer-component',
  standalone: true,
  imports: [MatDivider],
  templateUrl: './footer-component.html',
  styleUrls: ['./footer-component.css'],
})
export class FooterComponent {
  currentYear = new Date().getFullYear();
}