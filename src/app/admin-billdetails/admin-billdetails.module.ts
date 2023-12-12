import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdminBilldetailsPageRoutingModule } from './admin-billdetails-routing.module';

import { AdminBilldetailsPage } from './admin-billdetails.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdminBilldetailsPageRoutingModule
  ],
  declarations: [AdminBilldetailsPage]
})
export class AdminBilldetailsPageModule {}
