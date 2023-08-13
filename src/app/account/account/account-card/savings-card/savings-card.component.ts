import { Component, Input } from '@angular/core';
import { SavingsAccount } from '@savings-io/shared/model';

@Component({
  selector: 'savings-io-savings-card',
  templateUrl: './savings-card.component.html',
  styleUrls: ['./savings-card.component.scss'],
})
export class SavingsCardComponent {
  @Input()
  savingsAccount!: SavingsAccount;

  showDescription = false;

  get canShowDescription(): boolean {
    return this.savingsAccount.description.length > 0;
  }

  get getShowDescriptionIconTooltip(): string {
    return this.showDescription ? 'Hide description' : 'Show description';
  }

  toggleShowDescription(): void {
    this.showDescription = !this.showDescription;
  }
}
