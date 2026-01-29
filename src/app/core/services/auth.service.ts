import { Injectable, signal, inject } from '@angular/core';
import { tap } from 'rxjs';
import { AuthRepository } from '../repositories/auth/auth.repository';

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    private authRepository = inject(AuthRepository);
    private _isAuthenticated = signal<boolean>(false);
    isAuthenticated = this._isAuthenticated.asReadonly();

    constructor() {
        // Check localStorage for existing session using the single keyword 'session'
        const session = localStorage.getItem('session');
        if (session) {
            this._isAuthenticated.set(true);
        }
    }

    login(credentials: { email: string; password: string }) {
        return this.authRepository.login(credentials).pipe(
            tap((res) => {
                this._isAuthenticated.set(true);
                if (res.token) {
                    localStorage.setItem('session', res.token);
                } else {
                    // Fallback to a placeholder if no token is returned but login succeeded
                    localStorage.setItem('session', 'true');
                }
            })
        );
    }

    logout() {
        this._isAuthenticated.set(false);
        localStorage.removeItem('session');
    }
}
