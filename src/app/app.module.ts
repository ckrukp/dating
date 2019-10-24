import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { TabsPageModule } from './pages/tabs/tabs.module';
import { VipsettingPageModule } from './pages/modal/vipsetting/vipsetting.module';
import { VipdktransformPageModule } from './pages/modal/vipdktransform/vipdktransform.module';
import { VipothersettingPageModule } from './pages/modal/vipothersetting/vipothersetting.module';
import { UserfilterPageModule } from './pages/modal/userfilter/userfilter.module';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule, 
    IonicModule.forRoot(), 
    AppRoutingModule, 
    TabsPageModule, 
    VipsettingPageModule, 
    VipdktransformPageModule, 
    VipothersettingPageModule, 
    UserfilterPageModule
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
