import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CarTransaction } from '../../interfaces/car-transaction.interface';
import { CarTransactionRepository } from './car-transaction.repository';

@Injectable()
export class CarTransactionHttpRepository implements CarTransactionRepository {
    constructor(private http: HttpClient) { }

    createTransaction(transaction: CarTransaction): Observable<any> {
        return this.http.post('car-transactions', transaction);
    }
}
