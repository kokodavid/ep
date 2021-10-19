import { Component, OnInit } from '@angular/core';
import { EnvService } from '../../../services/env.service';
import { AuthService } from 'src/app/services/auth.service';
import { ActivatedRoute, Router, NavigationExtras } from '@angular/router';
import * as moment from 'moment';
import { SessionService } from 'src/app/services/session.service';

@Component({
  selector: 'app-fees',
  templateUrl: './fees.page.html',
  styleUrls: ['./fees.page.scss'],
})
export class FeesPage implements OnInit {
segment: any;
data: any;
data1: any;
data3: any;
data4: any;
posts: any;
fees: any;
student: any;
school: any;
assets: any;
balance: any;
feeitems: any[];
payments: any[];
invoices: any[];
summary: any[];
feedback: any;
fake: any;
  constructor(private authService: AuthService, private route: ActivatedRoute, private router: Router, private session: SessionService) {
    this.segment = 'summary';
    this.invoices = new Array();
    this.payments = new Array();
    this.feeitems = new Array();
    this.summary = new Array();
    this.balance = new Object();
    this.fake = 1;
    setTimeout(() => {
      this.fake = 0;
    }, 3000);
    this.session.sessionTimeOut();
    this.route.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation().extras.state) {
        this.student = this.router.getCurrentNavigation().extras.state.details;
        this.assets = this.student.student_image === null ? 1 :
        `https://${this.student.school}.eduweb.co.ke/assets/students/${this.student.student_image}`;
      }
    });
   }

  ngOnInit() {
  }
  async ionViewWillEnter() {
    await this.authService.checkFeed().then(
      feed => {
       console.log(feed);
       this.feedback = feed;
      }
    );
    await this.authService.feesBalance(this.student.school, this.student.student_id).subscribe(
      balance => {
       // console.log(news);
        this.data = balance;
        if (this.data.nodata) {
          this.balance = {};
          this.summary = [];
        } else {
        this.balance = this.data.data.fee_summary;
        this.summary = this.data.data.fees;
        }
        // console.log(this.summary);
      }
    );
    await this.authService.Feeitems(this.student.school, this.student.student_id).subscribe(
      feeitems => {
        // console.log(homeworks.data);
        this.data1 = feeitems;
        if (this.data1.nodata) {
          this.feeitems = [];
        } else {
          this.feeitems = this.data1.data;
        }
       // console.log(this.feeitems);

      });
    await this.authService.Invoices(this.student.school, this.student.student_id).subscribe(
        item => {
         // console.log(news);
          this.data4 = item;
          if (this.data4.nodata) {
            this.invoices = [];
          } else {
          const data = this.data4.data;
          this.invoices = data.reverse();
          }
          // console.log(this.invoices);
        }
      );
    await this.authService.Payments(this.student.school, this.student.student_id).subscribe(
        items => {
          // console.log(homeworks.data);
          this.data3 = items;
          console.log(this.data3);
          if (this.data3.nodata) {
            this.payments = [];
          } else {
            const data = this.data3.data;
            this.payments = data.reverse();
          }
          // console.log(this.payments);
        }
    );
  }
  segmentChanged(ev: any) {
    // console.log('Segment changed', ev);
  }

  formatDate(date) {
      return moment(date).format('MMM D, YYYY');
    }
  fn(n) {
  const num = isNaN(n) ? 0 : Math.abs(n);
  return num.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, '$1,');
  }
addfeed() {
  const navigationExtras: NavigationExtras = {};
  this.router.navigate(['feedback'], navigationExtras);
}
}
