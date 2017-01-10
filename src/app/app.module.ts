import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { Login } from '../pages/login/login';
import { Signup } from '../pages/signup/signup';
import { SelectCourse } from '../pages/select-course/select-course';
import { Confirmation } from '../pages/confirmation/confirmation';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    Login,
    Signup,
    SelectCourse,
    Confirmation
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    Login,
    Signup,
    SelectCourse,
    Confirmation
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
