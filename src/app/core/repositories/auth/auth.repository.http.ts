import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthRepository, LoginResponse } from './auth.repository';

@Injectable({
    providedIn: 'root'
})
export class AuthHttpRepository extends AuthRepository {
    private http = inject(HttpClient);

    override login(credentials: any): Observable<LoginResponse> {
        // User requested "auth/login" without leading slash
        return this.http.post<LoginResponse>('auth/login', credentials);
    }
}
