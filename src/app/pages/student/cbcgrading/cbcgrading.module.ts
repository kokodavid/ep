import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { CbcGradingPage } from './cbcgrading.page';

const routes: Routes = [
  {
    path: '',
    component: CbcGradingPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [CbcGradingPage]
})
export class CbcGradingPageModule {}
