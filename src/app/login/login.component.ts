import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { AuthService } from '@savings-io/shared/auth';
import { Router } from '@angular/router';
import { RouterPaths } from '@savings-io/router-paths';

@Component({
  selector: 'savings-io-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  readonly emailPlaceholder: string = 'john.kowalsky@gmail.com';

  email: FormControl;
  password: FormControl;
  isHidePassword = true;
  isLoginFailed = false;
  isLoginLoading = false;

  constructor(
    private authService: AuthService,
    private router: Router,
  ) {
    this.email = new FormControl('', [Validators.required, Validators.email]);
    this.password = new FormControl('', [Validators.required]);
  }

  login() {
    console.debug('Trying to login...');
    this.isLoginLoading = true;
    this.resetLoginFailed();
    this.loginFormTouched();

    if (this.email.valid && this.password.valid) {
      this.authService
        .login(this.email.value, this.password.value)
        .then((result: boolean) => (result ? this.onLoginSuccess() : this.onLoginFailed()))
        .catch((error) => {
          console.debug('Error during login: ' + JSON.stringify(error));
          this.onLoginFailed();
        });
    }
  }

  private onLoginSuccess(): void {
    console.log('Login success');

    this.router
      .navigateByUrl(RouterPaths.BOARD)
      .then(() => console.debug('Navigate success'))
      .catch((error) => console.debug('Navigate failed: ' + error))
      .finally(() => (this.isLoginLoading = false));
  }

  private onLoginFailed(): void {
    console.log('Login failed');
    this.isLoginLoading = false;

    this.loginFormReset();
    this.loginFormTouched();
    this.isLoginFailed = true;
  }

  private resetLoginFailed(): void {
    this.isLoginFailed = false;
  }

  private loginFormTouched(): void {
    this.email.markAsTouched();
    this.password.markAsTouched();
  }

  private loginFormReset(): void {
    this.password.reset();
  }

  toggleHidePassword(): void {
    this.isHidePassword = !this.isHidePassword;
  }

  get isLoginDisabled(): boolean {
    return !this.email.valid || !this.password.valid;
  }
}
