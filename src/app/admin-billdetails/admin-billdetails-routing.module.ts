import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminBilldetailsPage } from './admin-billdetails.page';

const routes: Routes = [
  {
    path: '',
    component: AdminBilldetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminBilldetailsPageRoutingModule {}
