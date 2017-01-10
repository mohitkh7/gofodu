import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

import { Login } from "../login/login";
import { SelectCourse } from "../select-course/select-course";
import { Signup } from "../signup/signup";
import { Confirmation } from "../confirmation/confirmation";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {
    
  }

  openLogin(){
  	this.navCtrl.push(Login);
  }
  openList(){
  	this.navCtrl.push(SelectCourse)
  }
  openSignup(){
  	this.navCtrl.push(Signup);
  }
  openConfirmation(){
  	this.navCtrl.push(Confirmation);
  }

}
