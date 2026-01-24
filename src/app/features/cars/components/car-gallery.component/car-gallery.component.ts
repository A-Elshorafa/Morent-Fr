import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-car-gallery',
  imports: [CommonModule],
  templateUrl: './car-gallery.component.html',
  styleUrl: './car-gallery.component.css',
})
export class CarGalleryComponent {
  @Input() images: string[] = [];
  @Input() title = '';
  @Input() subtitle = '';

  activeImage = '';

  ngOnInit(): void {
    this.activeImage = this.images?.[0] ?? '';
  }

  selectImage(img: string): void {
    this.activeImage = img;
  }
}
