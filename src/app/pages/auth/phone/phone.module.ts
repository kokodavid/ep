import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { TextMaskModule } from 'angular2-text-mask';
import { IonicModule } from '@ionic/angular';
import { Mask } from '../../../mask';
import { PhonePage } from './phone.page';

const routes: Routes = [
  {
    path: '',
    component: PhonePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TextMaskModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ Mask ]
})
export class PhonePageModule {}
