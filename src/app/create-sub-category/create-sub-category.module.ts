import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { IonicModule } from '@ionic/angular';

import { CreateSubCategoryPageRoutingModule } from './create-sub-category-routing.module';

import { CreateSubCategoryPage } from './create-sub-category.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CreateSubCategoryPageRoutingModule,
    MatIconModule
  ],
  declarations: [CreateSubCategoryPage]
})
export class CreateSubCategoryPageModule {}
