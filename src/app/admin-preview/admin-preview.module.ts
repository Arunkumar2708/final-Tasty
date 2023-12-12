import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdminPreviewPageRoutingModule } from './admin-preview-routing.module';

import { AdminPreviewComponent } from './admin-preview.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdminPreviewPageRoutingModule
  ],
  declarations: [AdminPreviewComponent]
})
export class AdminPreviewPageModule {}
