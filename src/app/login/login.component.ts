import { Component } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { AuthService } from '@savings-io/shared/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'savings-io-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  readonly emailPlaceholder: string = 'john.kowalsky@gmail.com';

  email: FormControl;
  password: FormControl;
  hidePassword = true;
  loginFailed = false;

  constructor(private formBuilder: FormBuilder, private authService: AuthService, private router: Router) {
    this.email = new FormControl('', [Validators.required, Validators.email]);
    this.password = new FormControl('', [Validators.required]);
  }

  login() {
    console.debug('Trying to login...');
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
      .navigateByUrl('account')
      .then(() => console.debug('Navigate success'))
      .catch((error) => console.debug('Navigate failed: ' + error));
  }

  private onLoginFailed(): void {
    console.log('Login failed');

    this.loginFormReset();
    this.loginFormTouched();
    this.loginFailed = true;
  }

  private resetLoginFailed(): void {
    this.loginFailed = false;
  }

  private loginFormTouched(): void {
    this.email.markAsTouched();
    this.password.markAsTouched();
  }

  private loginFormReset(): void {
    this.password.reset();
  }

  toggleHidePassword(): void {
    this.hidePassword = !this.hidePassword;
  }

  get isLoginDisabled(): boolean {
    return !this.email.valid || !this.password.valid;
  }
}
