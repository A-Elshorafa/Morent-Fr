import {
  HttpResponse,
  HttpErrorResponse,
  HttpInterceptorFn
} from '@angular/common/http';
import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { environment } from '../environments/environment';
import { NotificationService } from '../services/notification.service';
import { AuthService } from '../services/auth.service';

export const apiResponseInterceptor: HttpInterceptorFn = (req, next) => {
  const notification = inject(NotificationService);
  const authService = inject(AuthService);
  const router = inject(Router);

  return next(req).pipe(
    map(event => {
      if (event instanceof HttpResponse) {
        const body = event.body as any;

        if (body?.success === false) {
          notification.error(body.message || 'Request failed');
          throw new Error(body.message);
        }

        // unwrap data
        return event.clone({
          body: body?.data ?? body,
          url: `${environment.apiBaseUrl}${req.url}`
        });
      }

      return event;
    }),

    catchError((error: HttpErrorResponse | Error) => {
      let message = 'An unexpected error occurred';

      if (error instanceof HttpErrorResponse) {
        if (error.status === 401) {
          authService.logout();
          router.navigate(['/login']);
          message = 'Session expired. Please log in again.';
        } else {
          message = error.error?.message || 'Server error';
        }
      } else {
        message = error.message;
      }

      notification.error(message);
      return throwError(() => new Error(message));
    })
  );
};