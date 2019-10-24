import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { VipothersettingPage } from './vipothersetting.page';

const routes: Routes = [
  {
    path: '',
    component: VipothersettingPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [VipothersettingPage]
})
export class VipothersettingPageModule {}
