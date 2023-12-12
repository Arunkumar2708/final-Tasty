import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StaffDraftPageRoutingModule } from './staff-draft-routing.module';

import { StaffDraftPage } from './staff-draft.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StaffDraftPageRoutingModule
  ],
  declarations: [StaffDraftPage]
})
export class StaffDraftPageModule {}
