import { Component, OnInit } from '@angular/core';
import { UserAccount } from '@savings-io/shared/model';
import { Router } from '@angular/router';
import { AuthService } from '@savings-io/shared/auth';
import { AccountApiGatewayService } from '../account/account-api-gateway/account-api-gateway.service';
import { RouterPaths } from '@savings-io/router-paths';

@Component({
  selector: 'savings-io-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss'],
})
export class BoardComponent implements OnInit {
  userAccount?: UserAccount;

  constructor(
    private accountApiGateway: AccountApiGatewayService,
    private authService: AuthService,
    private router: Router,
  ) {
    console.log('constructor');
    if (authService.isLoggedOut()) {
      router.navigateByUrl(RouterPaths.LOGIN);
    }
  }

  ngOnInit(): void {
    console.log('ng on init');
  }

  logout() {
    this.authService.logout();
    this.router.navigateByUrl(RouterPaths.LOGIN);
  }
}
