import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'user-list-page',
        loadChildren: '../user-list-page/user-list-page.module#UserListPagePageModule'
      },
      {
        path: 'message-page',
        loadChildren: '../message-page/message-page.module#MessagePagePageModule'
      },
      {
        path: 'tinder-like-page',
        loadChildren: '../tinder-like-page/tinder-like-page.module#TinderLikePagePageModule'
      },
      {
        path: 'chat-page',
        loadChildren: '../chat-page/chat-page.module#ChatPagePageModule'
      },
      {
        path: 'profile-page',
        loadChildren: '../profile-page/profile-page.module#ProfilePagePageModule'
      },
      {
        path: 'call-page',
        loadChildren: '../call-page/call-page.module#CallPagePageModule'
      }
    ]
  },
  {
    path: '',
    redirectTo: 'tabs/user-list-page',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [TabsPage]
})
export class TabsPageModule { }
