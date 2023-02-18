import { Component } from '@angular/core';
import { AuthService } from '@savings-io/shared/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'savings-io-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'savings-io-frontend';

  constructor(private authService: AuthService, private router: Router) {
    if (authService.isLoggedIn()) {
      router.navigateByUrl('account');
    } else {
      router.navigateByUrl('login');
    }
  }
}
