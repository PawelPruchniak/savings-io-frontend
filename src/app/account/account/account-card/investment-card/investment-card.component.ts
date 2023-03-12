import { Component, Input } from '@angular/core';
import { InvestmentAccount } from '@savings-io/shared/model';

@Component({
  selector: 'savings-io-investment-card',
  templateUrl: './investment-card.component.html',
  styleUrls: ['./investment-card.component.scss'],
})
export class InvestmentCardComponent {
  @Input()
  investmentAccount!: InvestmentAccount;
}
