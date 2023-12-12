import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdminKotPageRoutingModule } from './admin-kot-routing.module';

import { AdminKotPage } from './admin-kot.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdminKotPageRoutingModule
  ],
  declarations: [AdminKotPage]
})
export class AdminKotPageModule {}
