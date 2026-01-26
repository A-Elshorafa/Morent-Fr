import { Injectable } from "@angular/core";

@Injectable({ providedIn: 'root' })
export class NotificationService {
    error(message: string) {
        // MatSnackBar / Toastr / PrimeNG
        console.error(message);
    }

    success(message: string) {
        console.log(message);
    }
}