import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams ,MenuController } from 'ionic-angular';
import { OrdernowPage } from '../ordernow/ordernow';
/**
 * Generated class for the CartPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */


@Component({
  selector: 'page-cart',
  templateUrl: 'cart.html',
})
export class CartPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public menuCtrl: MenuController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CartPage');
  }
  openMenu() {
    this.menuCtrl.open();
  }
  ordernowpage()
  {this.navCtrl.push(OrdernowPage);}
}
