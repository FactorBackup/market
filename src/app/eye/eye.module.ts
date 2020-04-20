import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EyePageRoutingModule } from './eye-routing.module';

import { EyePage } from './eye.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EyePageRoutingModule
  ],
  declarations: [EyePage]
})
export class EyePageModule {}
