import { Injectable } from '@angular/core';
import { UserAccount } from '@savings-io/shared/model';
import { CommonsService, ObjectState } from '@savings-io/shared/commons';
import { AccountApiGatewayService } from './account-api-gateway.service';

@Injectable({
  providedIn: 'root',
})
export class AccountService {
  constructor(private commonsService: CommonsService, private accountApiGateway: AccountApiGatewayService) {}

  getUserAccount(): ObjectState<UserAccount> {
    console.debug('Getting user account...');
    return this.commonsService.prepareObjectState(this.accountApiGateway.fetchUserAccount());
  }
}
