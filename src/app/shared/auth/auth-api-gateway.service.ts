import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { JwtToken } from './jwt-token/jwt-token';

@Injectable({
  providedIn: 'root',
})
export class AuthApiGatewayService {
  private readonly loginUrl = '/api/security/authenticate';

  constructor(private httpClient: HttpClient) {}

  public login(username: string, password: string): Observable<JwtToken> {
    return this.httpClient.post<JwtToken>(this.loginUrl, {
      username: username,
      password: password,
    });
  }
}
