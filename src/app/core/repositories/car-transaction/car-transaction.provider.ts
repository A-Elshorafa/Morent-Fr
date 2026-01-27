import { Provider } from '@angular/core';
import { CarTransactionRepository } from './car-transaction.repository';
import { CarTransactionHttpRepository } from './car-transaction.repository.http';

export const CAR_TRANSACTION_REPOSITORY_PROVIDER: Provider = {
    provide: CarTransactionRepository,
    useClass: CarTransactionHttpRepository, // 🔁 switch here
};
