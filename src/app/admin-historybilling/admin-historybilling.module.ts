import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdminHistorybillingPageRoutingModule } from './admin-historybilling-routing.module';

import { AdminHistorybillingPage } from './admin-historybilling.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdminHistorybillingPageRoutingModule
  ],
  declarations: [AdminHistorybillingPage]
})
export class AdminHistorybillingPageModule {}
