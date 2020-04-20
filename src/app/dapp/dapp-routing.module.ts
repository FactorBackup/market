import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DappPage } from './dapp.page';

const routes: Routes = [
  {
    path: '',
    component: DappPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DappPageRoutingModule {}
