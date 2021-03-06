import { Component, ViewChild } from '@angular/core';
import { Nav, Platform,ModalController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { SelectLanguagePage } from '../pages/select-language/select-language';
import { LoginPage } from '../pages/login/login';
import { RegisterPage } from '../pages/register/register';
import { SupermarketsPage } from '../pages/supermarkets/supermarkets';
import { CategoryPage } from '../pages/category/category';
import { SubcategoryPage } from '../pages/subcategory/subcategory';
import { CartPage } from '../pages/cart/cart';
import { OrdernowPage } from '../pages/ordernow/ordernow';
import { SplashPage } from '../pages/splash/splash';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  //@ViewChild(Nav) nav: Nav;
  @ViewChild('content') nav: Nav;
  rootPage: any = SelectLanguagePage;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen,public modalCtrl: ModalController) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Super Markets', component: SupermarketsPage },
      { title: 'Logout', component: LoginPage }
     
    ];
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      let splash = modalCtrl.create(SplashPage);
      splash.present();
    //  this.splashScreen.hide();
    }); 
  }

  initializeApp() {
 /*   this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      let splash = modalCtrl.create(SplashPage);
      splash.present();
    //  this.splashScreen.hide();
    }); */
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
