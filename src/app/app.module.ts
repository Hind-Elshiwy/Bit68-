import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { SplashPage } from '../pages/splash/splash';
import { MainPage } from '../pages/main/main';
import { DataService } from '../services/data-service';
import { HttpClientModule } from '@angular/common/http';
import { ListingPage } from '../pages/listing/listing';
import { ProductPage } from '../pages/product/product';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    SplashPage,
    MainPage,
    ListingPage,
    ProductPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    SplashPage,
    MainPage,
    ListingPage,
    ProductPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    DataService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
