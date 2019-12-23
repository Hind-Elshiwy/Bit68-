import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ProductPage } from '../product/product';

/**
 * Generated class for the ListingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-listing',
  templateUrl: 'listing.html',
})
export class ListingPage {
value:any
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.value = navParams.get('item');
  }

  public moveToProduct(event ,item ){
    this.navCtrl.push(ProductPage,{
    item:item
    });
  }
}
