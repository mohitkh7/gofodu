import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { InAppBrowser } from 'ionic-native';

import { SelectCourse} from '../select-course/select-course';
import {HomePage} from '../home/home';

/*
  Generated class for the Login page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class Login {

	//default
	defaultemail="admin@gmail.com";
	defaultpassword="3000";
	//input
	email="";
	password="";
	//error
	emailError=false;
	passwordError=false;

  constructor(public navCtrl: NavController, public navParams: NavParams){

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  isMatch(){
  	if(this.email==this.defaultemail)
  		return true;
  	else
  		return false;
  }

  //open website 
  openSite(){
  	if(this.email!=this.defaultemail){
  		this.emailError=true;
  		alert(this.defaultemail);
  		alert(this.email);
  	}
  	else if(this.password!=this.defaultpassword){
  		this.emailError=false;
  		this.passwordError=true;
  	}
  	else{
  		let browser = new InAppBrowser('http://gofodu.com', '_system','toolbar=no');
  	}	

  }

  //open select course page for signup process
  openSelectCourse(){
  	this.navCtrl.push(SelectCourse)
  }
  //open forgot password
  openForgotPassword(){
  	this.navCtrl.push(HomePage)
  }

}
