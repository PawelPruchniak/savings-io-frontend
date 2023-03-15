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

  get getTrendIcon(): string {
    if (this.investmentAccount.investmentResultValue < 0) {
      return 'trending_down';
    }

    if (this.investmentAccount.investmentResultValue > 0) {
      return 'trending_up';
    }

    return 'trending_flat';
  }

  get getTrendStyleIconClass(): string {
    if (this.investmentAccount.investmentResultValue < 0) {
      return 'investment-icon-loss';
    }

    if (this.investmentAccount.investmentResultValue > 0) {
      return 'investment-icon-gain';
    }

    return 'investment-icon-neutral';
  }

  get getTrendStyleValueClass(): string {
    if (this.investmentAccount.investmentResultValue < 0) {
      return 'investment-value-loss';
    }

    if (this.investmentAccount.investmentResultValue > 0) {
      return 'investment-value-gain';
    }

    return 'investment-value-neutral';
  }
}
