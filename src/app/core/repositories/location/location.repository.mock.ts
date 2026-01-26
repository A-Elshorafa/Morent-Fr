import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Location } from '../../interfaces/location.interface';
import { LocationRepository } from './location.repository';

@Injectable()
export class LocationMockRepository implements LocationRepository {
    getLocations(): Observable<Location[]> {
        return of([
            {
                locationId: 1,
                locationName: 'Cairo',
            },
            {
                locationId: 2,
                locationName: 'Giza',
            },
            {
                locationId: 3,
                locationName: 'Alexandria',
            },
            {
                locationId: 4,
                locationName: 'Suez',
            },
            {
                locationId: 5,
                locationName: 'Mokattam',
            },
        ]);
    };
}
