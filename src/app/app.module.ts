import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { SelectLanguagePage } from '../pages/select-language/select-language';
import { LoginPage } from '../pages/login/login';
import { RegisterPage } from '../pages/register/register';
import { SupermarketsPage } from '../pages/supermarkets/supermarkets';
import { CategoryPage } from '../pages/category/category';
import { SubcategoryPage } from '../pages/subcategory/subcategory';
import { ProductdetailsPage } from '../pages/productdetails/productdetails';
import { CartPage } from '../pages/cart/cart';
import { OrdernowPage } from '../pages/ordernow/ordernow';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { SplashPage } from '../pages/splash/splash';

@NgModule({
  declarations: [
    MyApp,
    SelectLanguagePage,
    LoginPage,
    RegisterPage,
    SupermarketsPage,
    CategoryPage,
    SubcategoryPage,
    ProductdetailsPage,
    CartPage,
    OrdernowPage,
    SplashPage

  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    SelectLanguagePage,
    LoginPage,
     RegisterPage,
     SupermarketsPage,
     CategoryPage,
     SubcategoryPage,
     ProductdetailsPage,
     CartPage,
     OrdernowPage,
     SplashPage 
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
