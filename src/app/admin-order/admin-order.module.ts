import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';

import { IonicModule } from '@ionic/angular';

import { AdminOrderPageRoutingModule } from './admin-order-routing.module';

import { AdminOrderPage } from './admin-order.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdminOrderPageRoutingModule,
    MatIconModule
  ],
  declarations: [AdminOrderPage]
})
export class AdminOrderPageModule {}
