import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdminBillingPageRoutingModule } from './admin-billing-routing.module';

import { AdminBillingPage } from './admin-billing.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdminBillingPageRoutingModule
  ],
  declarations: [AdminBillingPage]
})
export class AdminBillingPageModule {}
