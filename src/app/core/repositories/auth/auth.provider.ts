import { Provider } from '@angular/core';
import { AuthRepository } from './auth.repository';
import { AuthHttpRepository } from './auth.repository.http';

export const AUTH_REPOSITORY_PROVIDER: Provider = {
    provide: AuthRepository,
    useClass: AuthHttpRepository, // 🔁 switch here to AuthMockRepository for testing
};
