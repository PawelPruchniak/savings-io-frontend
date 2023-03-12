import { NgModule } from '@angular/core';
import { SavingsCardComponent } from './savings-card.component';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { NgIf } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';

@NgModule({
  imports: [MatCardModule, MatDividerModule, NgIf, MatIconModule, MatTooltipModule],
  declarations: [SavingsCardComponent],
  exports: [SavingsCardComponent],
})
export class SavingsCardModule {}
