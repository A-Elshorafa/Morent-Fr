import { Component, signal, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule, RouterOutlet } from '@angular/router';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { InputComponent } from '../input-component/input-component';
import { IconButton } from "../icon-button/icon-button";
import { FilterLayoutService } from '@/core/services/filter-layout.service';
import { AuthService } from '@/core/services/auth.service';

@Component({
  selector: 'header-component',
  imports: [
    InputComponent,
    CommonModule,
    RouterModule, MatToolbarModule, MatButtonModule, MatFormFieldModule, MatInputModule,
    IconButton
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
  standalone: true,
})
export class HeaderComponent {
  private authService = inject(AuthService);
  private filterLayout = inject(FilterLayoutService);
  private router = inject(Router);

  isAuthenticated = this.authService.isAuthenticated;

  constructor() { }

  toggleFilter() {
    this.filterLayout.toggle();
  }

  onSearch(searchkey: string) {
    this.router.navigate(['/car-search'], { queryParams: { search: searchkey } });
  }

  onSettingClick() {
    this.router.navigate(['/analytics']);
  }

  onTitleClick() {
    this.router.navigate(['/home']);
  }

  onLogout() {
    console.log('Logging out...');
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}
