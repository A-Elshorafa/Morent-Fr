import { Observable } from 'rxjs';
import { Location } from '../../interfaces/location.interface';

export abstract class LocationRepository {
    abstract getLocations(): Observable<Location[]>;
}
