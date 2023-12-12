import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StaffHistoryPage } from './staff-history.page';

const routes: Routes = [
  {
    path: '',
    component: StaffHistoryPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StaffHistoryPageRoutingModule {}
