import { NgModule } from '@angular/core';
import { BoardComponent } from './board.component';
import { BoardRoutingModule } from './board-routing.module';

@NgModule({
  imports: [BoardRoutingModule],
  declarations: [BoardComponent],
})
export class BoardModule {}
