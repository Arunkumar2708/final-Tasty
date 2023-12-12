import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StaffPreviewPage } from './staff-preview.page';

const routes: Routes = [
  {
    path: '',
    component: StaffPreviewPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StaffPreviewPageRoutingModule {}
