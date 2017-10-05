import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { Push } from '@ionic-native/push';
import { MyApp } from './app.component';
import { HomePage } from '../pages/touch/touch';
//import { BasicPage } from '../pages/slides/pages';
import { SwiperModule } from 'angular2-useful-swiper'; 
import {CardPage} from '../pages/card/card';
//import {CoverflowPage} from '../pages/coverflow/coverflow';
//import {PagePiling} from '../pages/pagepiling/pagepiling';

@NgModule({
  declarations: [
    MyApp,
    //BasicPage
    //CoverflowPage
    //PagePiling
    //HomePage
    CardPage
  ],
  imports: [
    BrowserModule,
    SwiperModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    //BasicPage
    //HomePage
    //CoverflowPage
    //PagePiling
    CardPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Push,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
