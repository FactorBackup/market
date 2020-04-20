import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EyePage } from './eye.page';

const routes: Routes = [
  {
    path: '',
    component: EyePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EyePageRoutingModule {}
