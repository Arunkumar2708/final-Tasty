import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdminPrebillPageRoutingModule } from './admin-prebill-routing.module';

import { AdminPrebillPage } from './admin-prebill.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdminPrebillPageRoutingModule
  ],
  declarations: [AdminPrebillPage]
})
export class AdminPrebillPageModule {}
