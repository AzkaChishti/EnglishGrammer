import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { PresentPage } from '../present/present';
import { PastPage } from '../past/past';
import { FuturePage } from '../future/future';
import { ToastController } from 'ionic-angular';
import {HomePage } from '../home/home';
/*
  Generated class for the Menu page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-menu',
  templateUrl: 'menu.html'
})
export class MenuPage {
presentPage=PresentPage;
pastPage=PastPage;
futurePage=FuturePage;
homePage =HomePage ;
  constructor(public navCtrl: NavController, public navParams: NavParams,public toastCtrl:ToastController) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad MenuPage');
  }
   tenseToast(){
	  let toast=this.toastCtrl.create({
		  message:'You Moved to Next Successfully',
		  duration:1000,
		  position:'top',
		  showCloseButton:true,
		  closeButtonText:'ok'
	  });
	  toast.present();


}

	  

}
