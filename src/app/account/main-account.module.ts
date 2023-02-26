import { NgModule } from '@angular/core';
import { MainAccountComponent } from './main-account.component';
import { MainAccountRoutingModule } from './main-account-routing.module';
import { AsyncPipe, NgIf } from '@angular/common';
import { SpinnerModule } from '../shared/spinner/spinner.module';
import { MatCardModule } from '@angular/material/card';
import { MatProgressBarModule } from '@angular/material/progress-bar';

@NgModule({
  imports: [MainAccountRoutingModule, NgIf, AsyncPipe, SpinnerModule, MatCardModule, MatProgressBarModule],
  declarations: [MainAccountComponent],
})
export class MainAccountModule {}
