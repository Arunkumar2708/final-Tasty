import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdminPrebillBillingPageRoutingModule } from './admin-prebill-billing-routing.module';

import { AdminPrebillBillingPage } from './admin-prebill-billing.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdminPrebillBillingPageRoutingModule
  ],
  declarations: [AdminPrebillBillingPage]
})
export class AdminPrebillBillingPageModule {}
