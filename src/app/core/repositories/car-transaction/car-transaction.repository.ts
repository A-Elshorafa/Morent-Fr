import { Observable } from 'rxjs';
import { CarTransaction } from '../../interfaces/car-transaction.interface';

export abstract class CarTransactionRepository {
    abstract createTransaction(transaction: CarTransaction): Observable<any>;
}
