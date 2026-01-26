import { HttpInterceptorFn } from '@angular/common/http';
import { environment } from '../environments/environment';

export const apiUrlInterceptor: HttpInterceptorFn = (req, next) => {


    // Skip absolute URLs (CDNs, external APIs)
    if (req.url.startsWith('http')) {
        return next(req);
    }

    return next(
        req.clone({
            url: `${environment.apiBaseUrl}${req.url}`,
            headers: req.headers.set('Authorization', `Bearer ${localStorage.getItem('session')}`)
        })
    );
};
