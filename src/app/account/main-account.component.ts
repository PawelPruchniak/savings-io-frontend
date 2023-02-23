import { Component, OnInit } from '@angular/core';
import { AccountApiGatewayService } from './account-api-gateway/account-api-gateway.service';
import { UserAccount } from '@savings-io/shared/model';
import { Router } from '@angular/router';
import { AuthService } from '@savings-io/shared/auth';
import { HttpErrorResponse } from '@angular/common/http';
import { RouterPaths } from '@savings-io/router-paths';

@Component({
  selector: 'savings-io-main-account',
  templateUrl: './main-account.component.html',
  styleUrls: ['./main-account.component.scss'],
})
export class MainAccountComponent implements OnInit {
  userAccount?: UserAccount;

  constructor(
    private accountApiGateway: AccountApiGatewayService,
    private authService: AuthService,
    private router: Router,
  ) {
    if (authService.isLoggedOut()) {
      router.navigateByUrl(RouterPaths.LOGIN);
    }
  }

  ngOnInit(): void {
    this.accountApiGateway.getUserAccount().subscribe({
      next: (userAccount: UserAccount) => (this.userAccount = { ...userAccount }),
      error: (error: HttpErrorResponse) => {
        if (error.status === 401) {
          this.logout();
        }
      },
    });
  }

  logout() {
    this.authService.logout();
    this.router.navigateByUrl(RouterPaths.LOGIN);
  }
}
