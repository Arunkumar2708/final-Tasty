import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {MatIconModule} from '@angular/material/icon';
import { IonicModule } from '@ionic/angular';

import { OtpVerifyPageRoutingModule } from './otp-verify-routing.module';

import { OtpVerifyPage } from './otp-verify.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OtpVerifyPageRoutingModule,
    MatIconModule
  ],
  declarations: [OtpVerifyPage]
})
export class OtpVerifyPageModule {}
