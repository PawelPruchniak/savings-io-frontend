import { Injectable } from '@angular/core';
import { JwtToken } from './jwt-token/jwt-token';
import { AuthApiGatewayService } from './auth-api-gateway.service';
import * as moment from 'moment';
import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private static readonly ID_TOKEN = 'id_token';
  private static readonly EXPIRES_AT = 'expires_at';

  constructor(private authApiGateway: AuthApiGatewayService) {}

  public async login(username: string, password: string): Promise<boolean> {
    let jwtToken: JwtToken | undefined;
    try {
      jwtToken = await firstValueFrom(
        this.authApiGateway.login(username, password),
        { defaultValue: undefined }
      );
    } catch (e) {
      return false;
    }

    if (jwtToken) {
      this.setSession(jwtToken);
      return true;
    }

    return false;
  }

  public logout(): void {
    this.clearSession();
  }

  public isLoggedOut(): boolean {
    return !this.isLoggedIn();
  }

  public isLoggedIn(): boolean {
    const expiration = this.getExpiration();
    const isLoggedIn: boolean = expiration
      ? moment().isBefore(expiration)
      : false;

    if (!isLoggedIn) {
      this.clearSession();
    }

    return isLoggedIn;
  }

  private getExpiration(): moment.Moment | undefined {
    const expiration = localStorage.getItem(AuthService.EXPIRES_AT);

    if (expiration) {
      const expiresAt = JSON.parse(expiration);
      return moment(expiresAt);
    }

    return undefined;
  }

  private setSession(jwtToken: JwtToken): void {
    const expiresAt = moment().add(jwtToken.expirationInSeconds, 'seconds');

    localStorage.setItem(AuthService.ID_TOKEN, jwtToken.jwtToken);
    localStorage.setItem(
      AuthService.EXPIRES_AT,
      JSON.stringify(expiresAt.valueOf())
    );
  }

  private clearSession(): void {
    localStorage.removeItem(AuthService.ID_TOKEN);
    localStorage.removeItem(AuthService.EXPIRES_AT);
  }
}
