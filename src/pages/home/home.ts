import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import { ToastController } from 'ionic-angular';
import{ MenuPage }from '../menu/menu';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
menuPage=MenuPage;
  constructor(public navCtrl: NavController,public toastCtrl:ToastController) {
    
  }
   menuToast(){
	  let toast=this.toastCtrl.create({
		  message:'You Moved to Menu Successfully',
		  duration:1000,
		  position:'middle',
		  showCloseButton:true,
		  closeButtonText:'ok'
	  });
	  toast.present();

}

}
