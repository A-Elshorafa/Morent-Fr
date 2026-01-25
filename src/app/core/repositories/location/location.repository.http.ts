import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Location } from '../../interfaces/location.interface';
import { LocationRepository } from './location.repository';

@Injectable()
export class LocationHttpRepository implements LocationRepository {
    constructor(private http: HttpClient) { }

    getLocations(): Observable<Location[]> {
        return this.http.get<Location[]>('/api/locations');
    }
}
