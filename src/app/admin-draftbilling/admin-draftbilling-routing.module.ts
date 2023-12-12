import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminDraftbillingPage } from './admin-draftbilling.page';

const routes: Routes = [
  {
    path: '',
    component: AdminDraftbillingPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminDraftbillingPageRoutingModule {}
