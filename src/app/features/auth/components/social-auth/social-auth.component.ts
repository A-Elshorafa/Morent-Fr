import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-social-auth',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './social-auth.component.html',
  styleUrl: './social-auth.component.css'
})
export class SocialAuthComponent {
  @Output() socialLogin = new EventEmitter<string>();

  onSocialLogin(platform: string) {
    this.socialLogin.emit(platform);
  }
}
