import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminPreviewComponent } from './admin-preview.page';

const routes: Routes = [
  {
    path: '',
    component: AdminPreviewComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminPreviewPageRoutingModule {}
