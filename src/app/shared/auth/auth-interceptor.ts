import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  private authService: AuthService;

  constructor(authService: AuthService) {
    this.authService = authService;
  }

  intercept(request: HttpRequest<any>, httpHandler: HttpHandler): Observable<HttpEvent<any>> {
    console.debug('Intercepting...');

    if (this.authService.isLoggedIn()) {
      const idToken = localStorage.getItem('id_token');
      if (idToken) {
        const cloned = request.clone({
          headers: request.headers.set('Authorization', 'Bearer ' + idToken),
        });
        return httpHandler.handle(cloned);
      }
    }

    return httpHandler.handle(request);
  }
}
