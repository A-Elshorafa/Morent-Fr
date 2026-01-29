import { Observable } from 'rxjs';

export interface LoginResponse {
    token: string;
    user: any;
}

export abstract class AuthRepository {
    abstract login(credentials: any): Observable<LoginResponse>;
}
