import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { InAppBrowser } from 'ionic-native';

@Component({
  selector: 'page-confirmation',
  templateUrl: 'confirmation.html'
})

export class Confirmation{

	stage1=true;
	stage2=false;
  ran;
	mobileNo;
	otp;
  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
		console.log('ionViewDidLoad ConfirmationPage');
		this.genOTP();
  }

  makeActive(sectionNo){
  	if(sectionNo==1){
  		this.stage1=true;
  		this.stage2=false;
  	}
  	if(sectionNo==2){
  		this.stage2=true;
  		this.stage1=false;
  	}
  }

  genOTP(){
  	this.ran=Math.floor(Math.random()*1000000);
  }

  isValid(digits){
  	if(digits==10){
  		if(this.mobileNo>1000000000 && this.mobileNo<9999999999)
  			return true;
  		else
  			return false;
  	}
  }

  isMatch(){
  	if(this.otp==this.ran){
  		return true;
  	}
  }

  openSite(){  	
  	let browser = new InAppBrowser('http://gofodu.com', '_system','toolbar=no');
  }

}
