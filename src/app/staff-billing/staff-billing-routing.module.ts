import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StaffBillingPage } from './staff-billing.page';

const routes: Routes = [
  {
    path: '',
    component: StaffBillingPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StaffBillingPageRoutingModule {}
