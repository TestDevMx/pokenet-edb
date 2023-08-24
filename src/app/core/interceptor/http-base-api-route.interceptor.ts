import {
  HttpEvent,
  HttpHandlerFn,
  HttpInterceptorFn,
  HttpRequest,
} from '@angular/common/http';

import { Observable } from 'rxjs';

import { environment } from '@env/environment';

export const httpBaseApiRouteInterceptorFn: HttpInterceptorFn = (
  req: HttpRequest<unknown>,
  next: HttpHandlerFn
): Observable<HttpEvent<unknown>> => {
  const originalReq = req.clone({
    url: `${environment.api.base_url}/${req.url}`,
  });

  return next(originalReq);
};
