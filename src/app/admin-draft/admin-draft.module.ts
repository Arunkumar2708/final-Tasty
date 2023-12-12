import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdminDraftPageRoutingModule } from './admin-draft-routing.module';

import { AdminDraftPage } from './admin-draft.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdminDraftPageRoutingModule
  ],
  declarations: [AdminDraftPage]
})
export class AdminDraftPageModule {}
