import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { VoiceCallPage } from './voice-call.page';

const routes: Routes = [
  {
    path: '',
    component: VoiceCallPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [VoiceCallPage]
})
export class VoiceCallPageModule {}
