import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StaffBilldetailsPageRoutingModule } from './staff-billdetails-routing.module';

import { StaffBilldetailsPage } from './staff-billdetails.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StaffBilldetailsPageRoutingModule
  ],
  declarations: [StaffBilldetailsPage]
})
export class StaffBilldetailsPageModule {}
