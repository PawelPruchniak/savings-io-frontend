import { NgModule } from '@angular/core';
import { LoginComponent } from './login.component';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { LoginRoutingModule } from './login-routing.module';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatCardModule } from '@angular/material/card';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatProgressBarModule } from '@angular/material/progress-bar';

@NgModule({
  imports: [
    CommonModule,
    LoginRoutingModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    MatProgressSpinnerModule,
    MatCardModule,
    MatAutocompleteModule,
    NgOptimizedImage,
    MatProgressBarModule,
  ],
  declarations: [LoginComponent],
})
export class LoginModule {}
