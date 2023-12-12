import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StaffPreviewPageRoutingModule } from './staff-preview-routing.module';

import { StaffPreviewPage } from './staff-preview.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StaffPreviewPageRoutingModule
  ],
  declarations: [StaffPreviewPage]
})
export class StaffPreviewPageModule {}
