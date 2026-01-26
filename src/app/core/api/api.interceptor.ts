import {
  HttpResponse,
  HttpErrorResponse,
  HttpInterceptorFn
} from '@angular/common/http';
import { inject } from '@angular/core';
import { throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { environment } from '../environments/environment';
import { NotificationService } from '../services/notification.service';

export const apiResponseInterceptor: HttpInterceptorFn = (req, next) => {
  const notification = inject(NotificationService);

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
      const message =
        error instanceof HttpErrorResponse
          ? error.error?.message || 'Server error'
          : error.message;

      notification.error(message);

      return throwError(() => new Error(message));
    })
  );
};