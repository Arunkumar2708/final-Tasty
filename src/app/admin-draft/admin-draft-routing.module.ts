import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminDraftPage } from './admin-draft.page';

const routes: Routes = [
  {
    path: '',
    component: AdminDraftPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminDraftPageRoutingModule {}
