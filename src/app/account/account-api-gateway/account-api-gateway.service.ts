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

  fetchUserAccount(): Observable<UserAccount> {
    console.debug('Fetching user account...');

    return this.httpClient.get<UserAccount>(this.userAccountUrl);
  }
}
