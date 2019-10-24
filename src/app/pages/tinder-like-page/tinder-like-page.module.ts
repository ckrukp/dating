import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { TinderLikePagePage } from './tinder-like-page.page';

const routes: Routes = [
  {
    path: '',
    component: TinderLikePagePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [TinderLikePagePage]
})
export class TinderLikePagePageModule {}
