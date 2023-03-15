import { NgModule } from '@angular/core';
import { InvestmentCardComponent } from './investment-card.component';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  imports: [MatCardModule, MatListModule, MatIconModule],
  declarations: [InvestmentCardComponent],
  exports: [InvestmentCardComponent],
})
export class InvestmentCardModule {}
