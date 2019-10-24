import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  { path: 'login', loadChildren: './login/login.module#LoginPageModule' },
  { path: 'tabs', loadChildren: './pages/tabs/tabs.module#TabsPageModule' },
  { path: 'person-info-page', loadChildren: './pages/person-info-page/person-info-page.module#PersonInfoPagePageModule' },
  { path: 'vipdktransform', loadChildren: './pages/modal/vipdktransform/vipdktransform.module#VipdktransformPageModule' },
  { path: 'vipothersetting', loadChildren: './pages/modal/vipothersetting/vipothersetting.module#VipothersettingPageModule' },
  { path: 'userfilter', loadChildren: './pages/modal/userfilter/userfilter.module#UserfilterPageModule' },
  { path: 'voice-call', loadChildren: './pages/modal/voice-call/voice-call.module#VoiceCallPageModule' },
  // { path: 'user-list-page', loadChildren: './pages/user-list-page/user-list-page.module#UserListPagePageModule' },
  // { path: 'message-page', loadChildren: './pages/message-page/message-page.module#MessagePagePageModule' },
  // { path: 'tinder-like-page', loadChildren: './pages/tinder-like-page/tinder-like-page.module#TinderLikePagePageModule' },
  { path: 'chat-page', loadChildren: './pages/chat-page/chat-page.module#ChatPagePageModule' },
  // { path: 'profile-page', loadChildren: './pages/profile-page/profile-page.module#ProfilePagePageModule' },
  // { path: 'call-page', loadChildren: './pages/call-page/call-page.module#CallPagePageModule' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
