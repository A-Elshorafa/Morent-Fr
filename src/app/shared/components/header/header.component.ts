import { Component, EventEmitter, Output } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { InputComponent } from '../input-component/input-component';
import { IconButton } from "../icon-button/icon-button";
import { FilterLayoutService } from '@/core/services/filter-layout.service';

@Component({
  selector: 'header-component',
  imports: [
    InputComponent,
    RouterOutlet, MatToolbarModule, MatButtonModule, MatFormFieldModule, MatInputModule,
    IconButton
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
  standalone: true,
})
export class HeaderComponent {
  constructor(private filterLayout: FilterLayoutService) { }

  toggleFilter() {
    this.filterLayout.toggle();
  }
}
