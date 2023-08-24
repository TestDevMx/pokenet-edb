import {
  HttpEvent,
  HttpHandlerFn,
  HttpInterceptorFn,
  HttpRequest,
} from '@angular/common/http';
import { inject } from '@angular/core';

import { Observable, catchError } from 'rxjs';

import { ErrorHandlerService } from '@core/utils/error-handler.service';

export const errorHandlerInterceptorFn: HttpInterceptorFn = (
  req: HttpRequest<unknown>,
  next: HttpHandlerFn
): Observable<HttpEvent<unknown>> => {
  const errorHandler = inject(ErrorHandlerService);
  return next(req).pipe(
    catchError((err) => errorHandler.httpErrorResponse(err))
  );
};
