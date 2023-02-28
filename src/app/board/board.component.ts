import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '@savings-io/shared/auth';
import { AccountApiGatewayService } from '../account/account-api-gateway/account-api-gateway.service';
import { RouterPaths } from '@savings-io/router-paths';

@Component({
  selector: 'savings-io-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss'],
})
export class BoardComponent {
  constructor(
    private accountApiGateway: AccountApiGatewayService,
    private authService: AuthService,
    private router: Router,
    private route: ActivatedRoute,
  ) {
    if (authService.isLoggedOut()) {
      router.navigateByUrl(RouterPaths.LOGIN);
    } else {
      this.navigateToMainAccount();
    }
  }

  logout() {
    this.authService.logout();
    this.router.navigateByUrl(RouterPaths.LOGIN);
  }

  navigateToMainAccount() {
    this.router.navigate([RouterPaths.MAIN_ACCOUNT], { relativeTo: this.route });
  }
}
