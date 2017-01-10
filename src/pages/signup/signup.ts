import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Confirmation } from '../confirmation/confirmation';

/*
  Generated class for the Signup page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html'
})
export class Signup {

	signupForm: FormGroup;
	pas="";
	repas="";

  constructor(public navCtrl: NavController, public navParams: NavParams, public formBuilder: FormBuilder) {

  	this.signupForm=formBuilder.group({
  		
  		name:['',Validators.compose([Validators.minLength(2),Validators.required])],
  		email:['',Validators.compose([Validators.maxLength(30), Validators.pattern('[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$'), Validators.required])],
  		password:['',Validators.compose([Validators.minLength(8),Validators.required])],
  		repassword:['',Validators.compose([Validators.minLength(8),Validators.required])]
  	});
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignupPage');
  }

  signupButton(){
  	if(this.signupForm.valid && this.pas==this.repas){
  		this.navCtrl.push(Confirmation);
  	}
  	else{
  		alert("Fail Ho");
  	}
  }

}
