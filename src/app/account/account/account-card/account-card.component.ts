import { Component, Input, OnInit } from '@angular/core';
import { AccountService } from '../../account-api-gateway/account.service';
import { ObjectState } from '@savings-io/shared/commons';
import { Account } from '@savings-io/shared/model';

@Component({
  selector: 'savings-io-account-card',
  templateUrl: './account-card.component.html',
  styleUrls: ['./account-card.component.scss'],
})
export class AccountCardComponent implements OnInit {
  @Input()
  accountId!: string;

  accountState: ObjectState<Account> = {} as ObjectState<Account>;

  constructor(private accountService: AccountService) {}

  ngOnInit(): void {
    this.accountState = this.accountService.getAccount(this.accountId);
  }
}
