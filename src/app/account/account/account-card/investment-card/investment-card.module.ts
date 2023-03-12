import { NgModule } from '@angular/core';
import { InvestmentCardComponent } from './investment-card.component';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';

@NgModule({
  imports: [MatCardModule, MatListModule],
  declarations: [InvestmentCardComponent],
  exports: [InvestmentCardComponent],
})
export class InvestmentCardModule {}
