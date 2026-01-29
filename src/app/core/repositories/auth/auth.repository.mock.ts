import { Injectable } from '@angular/core';
import { Observable, of, delay } from 'rxjs';
import { AuthRepository, LoginResponse } from './auth.repository';

@Injectable({
    providedIn: 'root'
})
export class AuthMockRepository extends AuthRepository {
    override login(credentials: any): Observable<LoginResponse> {
        console.log('Mock Login with:', credentials);
        return of({
            token: 'mock-jwt-token',
            user: { id: 1, name: 'Mock User', email: credentials.email }
        }).pipe(delay(1000));
    }
}
