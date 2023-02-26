import { Component, OnInit } from '@angular/core';
import { UserAccount } from '@savings-io/shared/model';
import { Router } from '@angular/router';
import { AuthService } from '@savings-io/shared/auth';
import { RouterPaths } from '@savings-io/router-paths';
import { AccountService } from './account-api-gateway/account.service';
import { ObjectState } from '@savings-io/shared/commons';

@Component({
  selector: 'savings-io-main-account',
  templateUrl: './main-account.component.html',
  styleUrls: ['./main-account.component.scss'],
})
export class MainAccountComponent implements OnInit {
  userAccountState: ObjectState<UserAccount> = {} as ObjectState<UserAccount>;

  constructor(private accountService: AccountService, private authService: AuthService, private router: Router) {
    if (authService.isLoggedOut()) {
      router.navigateByUrl(RouterPaths.LOGIN);
    }
  }

  ngOnInit(): void {
    this.userAccountState = this.accountService.getUserAccount();
  }
}
