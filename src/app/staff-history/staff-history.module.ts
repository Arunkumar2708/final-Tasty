import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StaffHistoryPageRoutingModule } from './staff-history-routing.module';

import { StaffHistoryPage } from './staff-history.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StaffHistoryPageRoutingModule
  ],
  declarations: [StaffHistoryPage]
})
export class StaffHistoryPageModule {}
