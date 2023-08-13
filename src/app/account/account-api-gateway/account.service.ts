import { Injectable } from '@angular/core';
import { Account, UserAccount } from '@savings-io/shared/model';
import { ObjectState } from '@savings-io/shared/commons';
import { AccountApiGatewayService } from './account-api-gateway.service';
import { CommonsService } from '@savings-io/core';

@Injectable({
  providedIn: 'root',
})
export class AccountService {
  constructor(
    private commonsService: CommonsService,
    private accountApiGateway: AccountApiGatewayService,
  ) {}

  getUserAccount(): ObjectState<UserAccount> {
    console.debug('Getting user account...');
    return this.commonsService.prepareObjectState(this.accountApiGateway.fetchUserAccount());
  }

  getAccount(accountId: string): ObjectState<Account> {
    console.debug('Getting account...');
    return this.commonsService.prepareObjectState(this.accountApiGateway.fetchAccount(accountId));
  }
}
