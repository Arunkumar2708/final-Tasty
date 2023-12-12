import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';

import { IonicModule } from '@ionic/angular';

import { AdminHistoryPageRoutingModule } from './admin-history-routing.module';

import { AdminHistoryPage } from './admin-history.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdminHistoryPageRoutingModule,
    MatIconModule
  ],
  declarations: [AdminHistoryPage]
})
export class AdminHistoryPageModule {}
