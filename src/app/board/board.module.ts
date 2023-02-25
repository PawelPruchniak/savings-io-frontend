import { NgModule } from '@angular/core';
import { BoardComponent } from './board.component';
import { BoardRoutingModule } from './board-routing.module';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatTabsModule } from '@angular/material/tabs';

@NgModule({
  imports: [BoardRoutingModule, MatToolbarModule, MatButtonModule, MatTabsModule],
  declarations: [BoardComponent],
})
export class BoardModule {}
