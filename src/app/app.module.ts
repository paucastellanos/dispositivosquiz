import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { BocinaPage } from '../pages/bocina/bocina';
import { TvPage } from '../pages/tv/tv';
import { SmartphonePage } from '../pages/smartphone/smartphone';
import { LámparaPage } from '../pages/lámpara/lámpara';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    BocinaPage,
    TvPage,
    SmartphonePage,
    LámparaPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    BocinaPage,
    TvPage,
    SmartphonePage,
    LámparaPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
