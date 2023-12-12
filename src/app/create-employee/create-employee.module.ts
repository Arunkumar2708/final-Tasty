import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { IonicModule } from '@ionic/angular';

import { CreateEmployeePageRoutingModule } from './create-employee-routing.module';

import { CreateEmployeePage } from './create-employee.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CreateEmployeePageRoutingModule,
    MatIconModule
  ],
  declarations: [CreateEmployeePage]
})
export class CreateEmployeePageModule {}
