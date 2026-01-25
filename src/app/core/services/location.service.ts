import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Location } from '../interfaces/location.interface';
import { LocationRepository } from '../repositories/location/location.repository';

@Injectable({ providedIn: 'root' })
export class LocationService {
    constructor(private repo: LocationRepository) { }

    getLocations(): Observable<Location[]> {
        return this.repo.getLocations();
    }
}
