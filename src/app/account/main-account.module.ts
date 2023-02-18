import { NgModule } from '@angular/core';
import { MainAccountComponent } from './main-account.component';
import { MainAccountRoutingModule } from './main-account-routing.module';

@NgModule({
  imports: [MainAccountRoutingModule],
  declarations: [MainAccountComponent],
})
export class MainAccountModule {}
