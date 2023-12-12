import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {MatIconModule} from '@angular/material/icon';
import { IonicModule } from '@ionic/angular';

import { SetPasswordPageRoutingModule } from './set-password-routing.module';

import { SetPasswordPage } from './set-password.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SetPasswordPageRoutingModule,
    MatIconModule
  ],
  declarations: [SetPasswordPage]
})
export class SetPasswordPageModule {}
