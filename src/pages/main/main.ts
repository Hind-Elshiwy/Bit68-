import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DataService } from '../../services/data-service';
import { ListingPage } from '../listing/listing';

/**
 * Generated class for the MainPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-main',
  templateUrl: 'main.html',
})
export class MainPage {
  categories:any = [];
  constructor(public navCtrl: NavController, public navParams: NavParams,private dataService:DataService) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MainPage');
    this.dataService.getData().subscribe( res=> {
      console.log(res)
      this.categories = res
    })
  }
  public moveToList(event ,item ){
      this.navCtrl.push(ListingPage,{
      item:item
      });
    }

}
