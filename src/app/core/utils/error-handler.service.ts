import { Injectable, inject } from '@angular/core';
import { HttpErrorResponse, HttpStatusCode } from '@angular/common/http';
import { Router } from '@angular/router';

import { throwError } from 'rxjs';

import { WEB_ROUTES } from '@core/utils/web.routes';

@Injectable({ providedIn: 'root' })
export class ErrorHandlerService {
  private readonly router = inject(Router);
  httpErrorResponse(errorResponse: HttpErrorResponse) {
    const { status, error, statusText, url } = errorResponse;

    switch (true) {
      case status === 0:
        break;
      case status === HttpStatusCode.NotFound:
        console.log({ error });
        break;
      case status >= HttpStatusCode.InternalServerError && status < 600:
        this.router.navigateByUrl(
          `${WEB_ROUTES.errors.root_path}/${WEB_ROUTES.errors.e500.path}`
        );
        break;
      default:
        break;
    }

    return throwError(() => error);
  }
}
