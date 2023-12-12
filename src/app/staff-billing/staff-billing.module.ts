import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StaffBillingPageRoutingModule } from './staff-billing-routing.module';

import { StaffBillingPage } from './staff-billing.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StaffBillingPageRoutingModule
  ],
  declarations: [StaffBillingPage]
})
export class StaffBillingPageModule {}
