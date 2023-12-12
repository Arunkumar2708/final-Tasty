import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminPrebillBillingPage } from './admin-prebill-billing.page';

const routes: Routes = [
  {
    path: '',
    component: AdminPrebillBillingPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminPrebillBillingPageRoutingModule {}
