import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { PastindPage } from '../pastind/pastind';
import { PresentcontiPage } from '../presentconti/presentconti';
import { PresentperfPage } from '../presentperf/presentperf';
import {PresentprfcontiPage } from '../presentprfconti/presentprfconti';
import {HomePage } from '../home/home';
/*
  Generated class for the Present page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-present',
  templateUrl: 'present.html'
})
export class PresentPage {
pastindPage=PastindPage;
presentcontiPage=PresentcontiPage;
presentperfPage=PresentperfPage;
presentprfcontiPage=PresentprfcontiPage;
homePage=HomePage;
  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad PresentPage');
  }

}
