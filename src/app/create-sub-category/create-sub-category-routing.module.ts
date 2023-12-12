import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreateSubCategoryPage } from './create-sub-category.page';

const routes: Routes = [
  {
    path: '',
    component: CreateSubCategoryPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CreateSubCategoryPageRoutingModule {}
