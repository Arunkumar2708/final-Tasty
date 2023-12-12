import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminPrebillPage } from './admin-prebill.page';

const routes: Routes = [
  {
    path: '',
    component: AdminPrebillPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminPrebillPageRoutingModule {}
