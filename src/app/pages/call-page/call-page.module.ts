import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { CallPagePage } from './call-page.page';
import { EmojiPickerComponent } from '../../components/emoji-picker/emoji-picker.component';

const routes: Routes = [
  {
    path: '',
    component: CallPagePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [CallPagePage, EmojiPickerComponent]
})
export class CallPagePageModule {}
