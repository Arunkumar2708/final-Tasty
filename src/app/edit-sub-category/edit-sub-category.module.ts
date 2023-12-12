import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { IonicModule } from '@ionic/angular';

import { EditSubCategoryPageRoutingModule } from './edit-sub-category-routing.module';

import { EditSubCategoryPage } from './edit-sub-category.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditSubCategoryPageRoutingModule,
    MatIconModule
  ],
  declarations: [EditSubCategoryPage]
})
export class EditSubCategoryPageModule {}
