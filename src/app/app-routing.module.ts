import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RouterPaths } from '@savings-io/router-paths';

const routes: Routes = [
  {
    path: RouterPaths.LOGIN,
    loadChildren: () => import('./login/login.module').then((m) => m.LoginModule),
  },
  {
    path: RouterPaths.BOARD,
    loadChildren: () => import('board/board.module').then((m) => m.BoardModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [],
})
export class AppRoutingModule {}
