import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CarTransaction } from '../interfaces/car-transaction.interface';
import { CarTransactionRepository } from '../repositories/car-transaction/car-transaction.repository';

@Injectable({ providedIn: 'root' })
export class CarTransactionsService {
    constructor(private repo: CarTransactionRepository) { }

    createTransaction(transaction: CarTransaction): Observable<any> {
        return this.repo.createTransaction(transaction);
    }
}
