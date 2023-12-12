import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StaffBilldetailsPage } from './staff-billdetails.page';

const routes: Routes = [
  {
    path: '',
    component: StaffBilldetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StaffBilldetailsPageRoutingModule {}
