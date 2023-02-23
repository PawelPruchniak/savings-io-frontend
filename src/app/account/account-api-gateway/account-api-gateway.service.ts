import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserAccount } from '@savings-io/shared/model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AccountApiGatewayService {
  private readonly userAccountUrl = '/api/user-account';

  constructor(private httpClient: HttpClient) {}

  getUserAccount(): Observable<UserAccount> {
    console.debug('Getting user account...');

    return this.httpClient.get<UserAccount>(this.userAccountUrl);
  }
}
