import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { FutureindPage } from '../futureind/futureind';
import { FuturecontiPage } from '../futureconti/futureconti';
import {FutureprfPage } from '../futureprf/futureprf';
import {FutureprfcontiPage } from '../futureprfconti/futureprfconti';
import {HomePage } from '../home/home';
/*
  Generated class for the Future page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-future',
  templateUrl: 'future.html'
})
export class FuturePage {
futureindPage=FutureindPage;
futurecontiPage=FuturecontiPage;
futureprfPage=FutureprfPage;
futureprfcontiPage=FutureprfcontiPage;
homePage=HomePage;

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad FuturePage');
  }

}
