import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import {Signup} from '../signup/signup';

/*
  Generated class for the SelectCourse page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-select-course',
  templateUrl: 'select-course.html'
})
export class SelectCourse {

	public course = [
		{title:'SBI',image:'default.jpg'},
		{title:'new RBC',image:'books.png'},
		{title:'CAT',image:'default.jpg'},
		{title:'MBA',image:'books.png'},
		{title:'SBI Clerk Mains',image:'default.jpg'},
		{title:'IBPS PO',image:'books.png'},
		{title:'SSC',image:'default.jpg'},
		{title:'MPPSC',image:'books.png'}
	];
  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad SelectCoursePage');
  }

  //to redirect to signup page
  openSignup(){
  	this.navCtrl.push(Signup);
  }

}
