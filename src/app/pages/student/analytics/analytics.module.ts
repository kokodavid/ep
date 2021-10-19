import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {Routes, RouterModule} from '@angular/router';

import {IonicModule} from '@ionic/angular';
import {AnalyticsPage} from './analytics.page';
import { AnalyticsModalComponent } from 'src/app/analytics-modal/analytics-modal.component';

const routes:Routes =[
  {
    path:'',
    component: AnalyticsPage
  }
];

@NgModule({
  imports:[
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations:[AnalyticsPage, AnalyticsModalComponent],
  entryComponents: [AnalyticsModalComponent]
})
export class AnalyticsPageModule{}