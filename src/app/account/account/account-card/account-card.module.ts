import { NgModule } from '@angular/core';
import { AccountCardComponent } from './account-card.component';
import { AsyncPipe, NgIf } from '@angular/common';
import { SavingsCardModule } from './savings-card/savings-card.module';
import { InvestmentCardModule } from './investment-card/investment-card.module';

@NgModule({
  imports: [AsyncPipe, NgIf, SavingsCardModule, InvestmentCardModule],
  declarations: [AccountCardComponent],
  exports: [AccountCardComponent],
})
export class AccountCardModule {}
