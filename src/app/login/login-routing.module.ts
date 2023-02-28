import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { LoginComponent } from './login.component';
import { RouterPaths } from '@savings-io/router-paths';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
  },
  {
    path: RouterPaths.BOARD,
    loadChildren: () => import('board/board.module').then((m) => m.BoardModule),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LoginRoutingModule {}
