import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { PhonePage } from '../phone/phone.page';
import { ForgotPasswordPage } from '../forgot-password/forgot-password.page';
import { IonicModule } from '@ionic/angular';
import { LoginPage } from './login.page';
import { Device } from '@ionic-native/device/ngx'

const routes: Routes = [
  {
    path: '',
    component: LoginPage

  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  // declarations: [LandingPage, LoginPage, RegisterPage],
  entryComponents: [LoginPage, PhonePage, ForgotPasswordPage],
  declarations: [LoginPage, ForgotPasswordPage, PhonePage],
  providers: [Device]
})


export class LoginPageModule {}
