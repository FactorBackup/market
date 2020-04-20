import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FraudPageRoutingModule } from './fraud-routing.module';

import { FraudPage } from './fraud.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FraudPageRoutingModule
  ],
  declarations: [FraudPage]
})
export class FraudPageModule {}
