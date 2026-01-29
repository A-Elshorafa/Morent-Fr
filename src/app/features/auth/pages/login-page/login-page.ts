import { Component, signal, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { LoginFormComponent } from '../../components/login-form/login-form.component';
import { SocialAuthComponent } from '../../components/social-auth/social-auth.component';
import { AuthService } from '@/core/services/auth.service';

@Component({
    selector: 'app-login-page',
    standalone: true,
    imports: [CommonModule, RouterModule, LoginFormComponent, SocialAuthComponent],
    templateUrl: './login-page.html',
    styleUrl: './login-page.css'
})
export class LoginPage {
    private router = inject(Router);
    private authService = inject(AuthService);

    isLoading = signal(false);
    errorMessage = signal('');

    constructor() { }

    onLogin(credentials: any) {
        this.isLoading.set(true);
        this.errorMessage.set('');

        this.authService.login(credentials).subscribe({
            next: () => {
                this.isLoading.set(false);
                this.router.navigate(['/home']);
            },
            error: (err) => {
                this.isLoading.set(false);
                this.errorMessage.set(err.error?.message || 'Invalid email or password');
            }
        });
    }

    onSocialLogin(platform: string) {
        // For social login, we'll keep the simulation or implement if requested
        this.isLoading.set(true);
        setTimeout(() => {
            this.isLoading.set(false);
            // For now, still simulate social login success using the unified 'session' key
            localStorage.setItem('session', 'social-active');
            window.location.reload(); // Quick way to update state
        }, 1000);
    }
}
