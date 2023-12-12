import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminHistorybillingPage } from './admin-historybilling.page';

const routes: Routes = [
  {
    path: '',
    component: AdminHistorybillingPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminHistorybillingPageRoutingModule {}
