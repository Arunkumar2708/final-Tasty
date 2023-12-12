import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';

import { IonicModule } from '@ionic/angular';

import { CreateExpensePageRoutingModule } from './create-expense-routing.module';

import { CreateExpensePage } from './create-expense.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CreateExpensePageRoutingModule,
    MatIconModule
  ],
  declarations: [CreateExpensePage]
})
export class CreateExpensePageModule {}
