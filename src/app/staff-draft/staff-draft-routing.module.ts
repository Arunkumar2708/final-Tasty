import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StaffDraftPage } from './staff-draft.page';

const routes: Routes = [
  {
    path: '',
    component: StaffDraftPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StaffDraftPageRoutingModule {}
