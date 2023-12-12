import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdminDraftbillingPageRoutingModule } from './admin-draftbilling-routing.module';

import { AdminDraftbillingPage } from './admin-draftbilling.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdminDraftbillingPageRoutingModule
  ],
  declarations: [AdminDraftbillingPage]
})
export class AdminDraftbillingPageModule {}
