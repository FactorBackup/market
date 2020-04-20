import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DappPageRoutingModule } from './dapp-routing.module';

import { DappPage } from './dapp.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DappPageRoutingModule
  ],
  declarations: [DappPage]
})
export class DappPageModule {}
