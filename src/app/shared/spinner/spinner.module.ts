import { NgModule } from '@angular/core';
import { SpinnerComponent } from './spinner.component';
import { MatCardModule } from '@angular/material/card';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@NgModule({
  imports: [MatCardModule, MatProgressSpinnerModule],
  exports: [SpinnerComponent],
  declarations: [SpinnerComponent],
})
export class SpinnerModule {}
