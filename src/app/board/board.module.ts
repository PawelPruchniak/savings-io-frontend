import { NgModule } from '@angular/core';
import { BoardComponent } from './board.component';
import { BoardRoutingModule } from './board-routing.module';
import { MatToolbarModule } from '@angular/material/toolbar';

@NgModule({
  imports: [BoardRoutingModule, MatToolbarModule],
  declarations: [BoardComponent],
})
export class BoardModule {}
