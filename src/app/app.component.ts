import { Component } from '@angular/core';
import { AuthService } from '@savings-io/shared/auth';
import { Router } from '@angular/router';
import { RouterPaths } from '@savings-io/router-paths';

@Component({
  selector: 'savings-io-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'savings-io-frontend';

  constructor(authService: AuthService, router: Router) {
    if (authService.isLoggedIn()) {
      router.navigateByUrl(RouterPaths.BOARD);
    } else {
      router.navigateByUrl(RouterPaths.LOGIN);
    }
  }
}
