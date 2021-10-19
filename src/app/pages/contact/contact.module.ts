import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { IonicModule } from '@ionic/angular';
import { NgxSpinnerModule } from 'ngx-spinner';
import { ContactPage } from './contact.page';

const routes: Routes = [
  {
    path: '',
    component: ContactPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MatProgressSpinnerModule,
    NgxSpinnerModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ContactPage]
})
export class ContactPageModule {}
