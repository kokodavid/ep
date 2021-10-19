import { Component, OnInit } from '@angular/core';
import { EnvService } from '../../../services/env.service';
import { AuthService } from 'src/app/services/auth.service';
import { ActivatedRoute, Router, NavigationExtras } from '@angular/router';
import { SessionService } from 'src/app/services/session.service';

@Component({
  selector: 'app-info',
  templateUrl: './info.page.html',
  styleUrls: ['./info.page.scss'],
})
export class InfoPage implements OnInit {
  data: any;
  data1: any;
  posts: any;
  date: any;
  homeworks: any;
  student: any;
  school: any;
  segment: any;
  assets: any;
  info: any;
  quardians: any;
  medical: any;
  feeitems: any;
  students: any;
  userinfo: any;
  feedback: any;
  fake: any;
  constructor(private authService: AuthService, private route: ActivatedRoute, private router: Router, private session: SessionService) {
    this.info = new Object();
    this.data = new Object();
    this.quardians = new Array();
    this.medical = new Array();
    this.feeitems = new Array();
    this.feedback = false;
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
    this.segment = 'details';
  }

  async ngOnInit() {
  }

  async ionViewWillEnter() {
    await this.authService.checkFeed().then(
      feed => {
        // console.log(feed);
        this.feedback = feed;
      }
    );
    await this.authService.getstudent(this.student.school, this.student.student_id).subscribe(
      info => {
        // console.log(news);
        this.data = info;
        this.info = this.data.data;
        console.log(this.info);
      }
    );
  }
  formatCourseDate(date) {

    const date1 = new Date(date); // yyyy-MM-dd

    return date1.getDate() + '/' + (date1.getMonth() + 1) + '/' + date1.getFullYear();

  }
 
  segmentChanged(ev: any) {
    if (ev.detail.value === 'family') {
      this.quardians = this.info.guardians;
    }
    if (ev.detail.value === 'medical') {
      this.medical = this.info.medical_history;
    }
    if (ev.detail.value === 'enrolled') {
      this.feeitems = this.info.fee_items;
    }
    if (ev.detail.value === 'details') {
      // this.info = this.info.fe;
    }
    // console.log('Segment changed', ev);
  }
  addfeed() {
    const navigationExtras: NavigationExtras = {};
    this.router.navigate(['feedback'], navigationExtras);
  }
}
