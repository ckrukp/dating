import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { PersonInfoPagePage } from './person-info-page.page';

const routes: Routes = [
  {
    path: '',
    component: PersonInfoPagePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [PersonInfoPagePage]
})
export class PersonInfoPagePageModule {}
