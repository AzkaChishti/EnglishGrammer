import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { PastindPage } from '../pastind/pastind';
import { PastcontiPage } from '../pastconti/pastconti';
import { PastprfPage } from '../pastprf/pastprf';
import { PastprfcontiPage } from '../pastprfconti/pastprfconti';

/*
  Generated class for the Past page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-past',
  templateUrl: 'past.html'
})
export class PastPage {
pastindPage=PastindPage;
pastcontiPage=PastcontiPage;
pastprfPage=PastprfPage;
pastprfcontiPage=PastprfcontiPage;

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad PastPage');
  }

}
