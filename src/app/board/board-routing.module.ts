import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { BoardComponent } from './board.component';
import { RouterPaths } from '@savings-io/router-paths';

export const routes: Routes = [
  {
    path: '',
    component: BoardComponent,
    children: [
      {
        path: RouterPaths.MAIN_ACCOUNT,
        loadChildren: () => import('../account/main-account.module').then((m) => m.MainAccountModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BoardRoutingModule {}
