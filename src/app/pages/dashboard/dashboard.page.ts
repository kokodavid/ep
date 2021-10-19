import { Component, OnInit, Inject } from '@angular/core';
import { Router, NavigationExtras, ActivatedRoute } from '@angular/router';
import {AlertController, MenuController, LoadingController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth.service';
import { EnvService } from '../../services/env.service';
import { DataService } from '../../services/data.service';
// import { ApiService } from '../../services/api.service';
import { AlertService } from 'src/app/services/alert.service';
import * as moment from 'moment';
import { NgxSpinnerService } from 'ngx-spinner';
import { SpinnerDialog } from '@ionic-native/spinner-dialog/ngx';
import * as $ from 'jquery';
import { SessionService } from 'src/app/services/session.service';
import { HttpClient, HttpSentEvent } from '@angular/common/http';

// import { User } from 'src/app/models/user';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {
  news: any[];
  students: any[];
  data: any;
  stud: any;
  data1: any;
  userinfo: any;
  school: any;
  assets: any;
  loading: any;
  feedback: any;
  feed: any;
  load: any;
  fake: any;
  users = [];
  check: any;
  viewed: any;
  student_id: any;
  resources: any;
  constructor(
    private spinnerDialog: SpinnerDialog,
    // private apiService: ApiService,
    private router: Router,
    private spinner: NgxSpinnerService,
    private dataService: DataService,
    private menu: MenuController,
    private authService: AuthService,
    private sessionService: SessionService,
    public loadingController: LoadingController,
    private alertCtrl: AlertController,
    private http: HttpClient,
    private route: ActivatedRoute) {
    this.menu.enable(true);
    this.students = new Array();
    this.news = new Array();
    this.feedback = false;
    this.load = false;
    this.fake = 1;
    this.check = 0;
    setTimeout(() => {
      this.fake = 0;
    }, 6000);
    this.sessionService.sessionTimeOut();
    this.feed = new Array();
    this.student_id = new Array();
    this.route.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation().extras.state) {
        this.resources = this.router.getCurrentNavigation().extras.state.details;

        // console.log(JSON.stringify(this.resources))
      }
    });

    const slowLoad = window.setTimeout(function () {
      console.log('the page is taking its sweet time loading');
    }, 2000);


    setTimeout(() => {
        this.fake = 0;
      }, 3000)

    window.addEventListener('load', function () {
      window.clearTimeout(slowLoad);
    }, false);
    // this.loadData(true);

    // this.idle.onTimeout.subscribe(() => {
    //   this.authService.logout();
    // });
  }
  async ngOnInit() {
    const user = await localStorage.getItem('token');
    
    const u = JSON.parse(user);
    this.userinfo = u;
    // console.log(JSON.stringify(this.userinfo));
    this.students = this.userinfo.students === undefined ? [] : this.userinfo.students;
    this.school = this.students[0].school;
    const parent = this.userinfo.parent_id === undefined ? {} : this.userinfo.parent_id;
    // $(document).ready(function() {
    //   $.ajax({
    //     type: 'GET',
    //     url: `https://api.eduweb.co.ke/getParentStudents/getParentStudents/${this.userinfo.parent_id}`,
    //     // data: "check",
    //     dataType: 'json',
    //     success: function(data) {
    //       this.data1 = data.data;
    //       this.stud = this.data1.students;
    //     console.log(data.data);
    //         //alert(data);
    //     }
    // });
    //   // alert('JQuery is working!!');
    // });
    // logout on idle timeout
    
    await this.authService.news().subscribe(
      news => {
        this.data = news;
        this.news = this.data.data.news[this.school] !== undefined ? this.data.data.news[this.school] : [];
        this.assets = `https://${this.school}.eduweb.co.ke/assets/students/`;

      }
    );
  }
  async ionViewWillEnter() {
    // console.log(this.stud);
    // if (this.students === []) {
    //   const navigationExtras: NavigationExtras = {
    //     state: {
    //       // details: student,
    //     }
    //   };
    //   this.router.navigate(['/home'], navigationExtras);

    // } else {
    // this.load = true;
    // this.spinnerDialog.show();
    // setTimeout(async () => await this.spinnerDialog.hide(), 3000);

    // await this.authService.

    const alert = await this.alertCtrl.create({
      message: "Click OK to update to the latest version of Eduweb parents",
      subHeader: 'Version update',
      buttons: [{text:'Ok', handler:() => {
        window.location.href = 'https://play.google.com'
      }}],
    });

    // await alert.present();

    await this.authService.checkFeed().then(
      feed => {
        // console.log(feed);
        this.feedback = feed;
      }
    );
    await this.authService.news().subscribe(
      news => {
        this.data = news;
        this.news = this.data.data.news[this.school] !== undefined ? this.data.data.news[this.school] : [];
        this.assets = `https://${this.school}.eduweb.co.ke/assets/students/`;

      }
    );

    // }
    // this.loadData(true);
  }
  // loadData(refresh = false, refresher?) {
  //   this.apiService.getUsers(refresh).subscribe(res => {
  //     this.users = res;
  //     console.log(res);
  //     if (refresher) {
  //       refresher.target.complete();
  //     }
  //   });
  // }

  // updateUser(id) {
  //   this.apiService.updateUser(id, {name: 'Simon', job: 'CEO'}).subscribe();
  // }
  // do a reload
  async reload() {
    // this.fake = 1;
    // this.check = 1;
    //if (this.news.length === 0 ) {
    // setTimeout(() => {
    //     this.fake = 0;
    //   }, 3000)
    this.authService.presentLoading();
    await this.authService.reloadnews().subscribe(
      news => {
        this.authService.dismiss();
        // console.log(news);
        this.data = news;
        this.news = this.data.data.news[this.school] !== undefined ? this.data.data.news[this.school] : [];
        console.log("okayokay"+JSON.stringify(this.news));
        this.assets = `https://${this.school}.eduweb.co.ke/assets/students/`;

      }
    );

  }
  // loader
  async presentLoading() {
    // Prepare a loading controller
    this.loading = await this.loadingController.create({
      message: 'Loading...'
    });
    // Present the loading controller
    await this.loading.present();
  }
  // go to student
  studentData(student) {
    console.log(student);
    const navigationExtras: NavigationExtras = {
      state: {
        details: student,
        resources: this.resources,
      }
    };
    this.router.navigate(['home'], navigationExtras);
  }

  // get news information
  newsInfo(news, school) {

    // console.log(news);
    const navigationExtras: NavigationExtras = {
      state: {
        details: news,
        school: school,
        student_id: this.students[0].student_id,


      }
    };
    this.router.navigate(['news'], navigationExtras);
  }
  // add feed
  addfeed() {
    const navigationExtras: NavigationExtras = {
    };
    this.router.navigate(['feedback'], navigationExtras);
  }
  /// format date
  formatdate(date) {

    return moment(date).format('DD MMMM YYYY');
  }

}
