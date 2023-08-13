import { NgModule } from '@angular/core';
import { MainAccountComponent } from './main-account.component';
import { MainAccountRoutingModule } from './main-account-routing.module';
import { AsyncPipe, NgForOf, NgIf } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { AccountCardModule } from './account/account-card/account-card.module';

@NgModule({
  imports: [
    MainAccountRoutingModule,
    NgIf,
    AsyncPipe,
    MatCardModule,
    MatProgressBarModule,
    MatDividerModule,
    MatIconModule,
    MatTooltipModule,
    AccountCardModule,
    NgForOf,
  ],
  declarations: [MainAccountComponent],
})
export class MainAccountModule {}
