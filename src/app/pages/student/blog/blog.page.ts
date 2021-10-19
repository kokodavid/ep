import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { ActivatedRoute, Router, NavigationExtras } from '@angular/router';
import * as moment from 'moment';
import { SessionService } from 'src/app/services/session.service';
import { AlertService } from 'src/app/services/alert.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.page.html',
  styleUrls: ['./blog.page.scss'],
})
export class BlogPage implements OnInit {
  data: any;
  maths: any;
  data1: any;
  posts: any[];
  homeworks: any;
  student: any;
  school: any;
  segment: any;
  assets: any;
  feedback: any;
  fake: any;
  link: any;
  hidden: boolean = true;
  filtered: any = 0;
  subject: any;
  time: any;
  customPickerOptions: any;
  final_filter: any;
  from_date: any;
  date: any;
  today: any;
  min_date: any;
  max_date: any;
  ok: any;
  to: any;
  from: any;
  subjects: any;
  $event: any;
  subjectName: any;
  all:any;
  constructor(
    private authService: AuthService,
    private route: ActivatedRoute,
    private router: Router,
    private session: SessionService,
    private alert: AlertService,
  ) {
    this.segment = 'homeworks';
    this.posts = new Array();
    this.homeworks = new Array();
    this.fake = 1;
    this.all="all";
    setTimeout(() => {
      this.fake = 0;
    }, 3000);
    this.session.sessionTimeOut();
    this.route.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation().extras.state) {
        this.student = this.router.getCurrentNavigation().extras.state.details;
        console.log(this.student);
        this.assets = this.student.student_image === null ? 1 :
          `https://${this.student.school}.eduweb.co.ke/assets/students/${this.student.student_image}`;

      }
    });
    this.today = moment().format("DD MMM YYYY");
    this.min_date = 2019;
    this.max_date = 2020;
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
    await this.authService.posts(this.student.school, this.student.student_id, 1).subscribe(
      posts => {
        // console.log(news);
        this.data = posts;
        this.posts = this.data.data.posts === undefined ? [] : this.data.data.posts;
      }
    );
    await this.authService.homeworks(this.student.school, this.student.student_id).subscribe(
      homeworks => {
        // console.log(homeworks.data);
        this.data1 = homeworks;
        this.homeworks = this.data1.data.homework === undefined ? [] : this.data1.data.homework;
        this.subjectName = this.data1.data.subjects === undefined ? [] : this.data1.data.subjects;
        console.log(JSON.stringify(this.homeworks));
      });
  }
  onChange($event) {
    this.subject = $event.target.value;
    if (this.subject === 'all') {
      this.homeworks = this.data1.data.homework === undefined ? [] : this.data1.data.homework;
    } else {
      this.homeworks = this.data1.data.homework === undefined ? [] : this.data1.data.homework;
      this.homeworks = this.homeworks.filter(homeworks => homeworks.subject_name === this.subject);
    }
  }
  fromDate($event) {
    if (this.subject === 'undefined') {
      this.alert.presentToast('Subject cannot be null');
    }else{
      this.ok = new Date($event).getTime();
      localStorage.setItem('from', this.ok);
    }
    
  }
  selectDate($event) {
    this.to = new Date($event).getTime();
    this.from = this.ok;

    localStorage.setItem('to', this.to);
  }
  filter() {
    const f = Number(localStorage.getItem('from')) - 86400000;
    const t = Number(localStorage.getItem('to'));
    console.log("from " + f +" to " + t);
    this.homeworks = this.data1.data.homework === undefined ? [] : this.data1.data.homework;
    var filtered = this.homeworks.filter(homeworks => {
      // var range = new Date(homeworks.assigned_date_formated);
      var formated_dates = (homeworks.assigned_date).substr(0,10);
      var range = new Date(formated_dates).getTime();
      if (this.subject === 'all') {
        return range >= f && range <= t && homeworks.subject_name;
      } else {
        return range >= f && range <= t && homeworks.subject_name === this.subject;
      }
    });
    this.homeworks = filtered;
  }
  formatDate(date) {
    return moment(date).format('MMM D, YYYY');
  }

  segmentChanged(ev: any) {
    // console.log('Segment changed', ev);
  }
  filterHomework() {
    if (this.hidden == true) {
      document.getElementById('filter').hidden = false;
      this.hidden = false;
    } else {
      document.getElementById('filter').hidden = true;
      this.hidden = true;
      this.homeworks = this.data1.data.homework === undefined ? [] : this.data1.data.homework;
    }
  }

  addfeed() {
    const navigationExtras: NavigationExtras = {};
    this.router.navigate(['feedback'], navigationExtras);
  }

  openHomework(homeworks, school) {

    const navigationExtras: NavigationExtras = {
      state: {
        details: homeworks,
        school: this.student.school,
        student_id: this.student.student_id,
        student: this.student.first_name + " " + this.student.last_name,
      }
    };


    this.router.navigate(['homework'], navigationExtras);
  }


}
