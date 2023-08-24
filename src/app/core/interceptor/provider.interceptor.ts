import { HttpInterceptorFn } from '@angular/common/http';

import { httpBaseApiRouteInterceptorFn } from '@core/interceptor/http-base-api-route.interceptor';
import { errorHandlerInterceptorFn } from '@core/interceptor/error-handler.interceptor';

export const provideInterceptor: HttpInterceptorFn[] = [
  httpBaseApiRouteInterceptorFn,
  errorHandlerInterceptorFn,
];
