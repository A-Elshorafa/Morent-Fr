import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Location } from '../../interfaces/location.interface';
import { LocationRepository } from './location.repository';

@Injectable()
export class LocationMockRepository implements LocationRepository {
    getLocations(): Observable<Location[]> {
        return of([
            {
                id: 1,
                name: 'Cairo',
            },
            {
                id: 2,
                name: 'Giza',
            },
            {
                id: 3,
                name: 'Alexandria',
            },
            {
                id: 4,
                name: 'Suez',
            },
            {
                id: 5,
                name: 'Mokattam',
            },
        ]);
    };
}
