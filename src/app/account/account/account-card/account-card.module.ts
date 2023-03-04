import { NgModule } from '@angular/core';
import { AccountCardComponent } from './account-card.component';
import { AsyncPipe, NgIf } from '@angular/common';

@NgModule({
  imports: [AsyncPipe, NgIf],
  declarations: [AccountCardComponent],
  exports: [AccountCardComponent],
})
export class AccountCardModule {}
