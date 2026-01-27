import { Injectable } from '@angular/core';
import { Observable, of, delay } from 'rxjs';
import { CarTransaction } from '../../interfaces/car-transaction.interface';
import { CarTransactionRepository } from './car-transaction.repository';

@Injectable()
export class CarTransactionMockRepository implements CarTransactionRepository {
    createTransaction(transaction: CarTransaction): Observable<any> {
        console.log('Mock: Creating transaction', transaction);
        return of({ success: true, message: 'Transaction created successfully' }).pipe(delay(1000));
    }
}
