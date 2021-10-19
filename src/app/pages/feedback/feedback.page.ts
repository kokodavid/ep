import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { EnvService } from '../../services/env.service';
import { DataService } from '../../services/data.service';
import { NgForm } from '@angular/forms';
import { AlertService } from 'src/app/services/alert.service';
import { AlertController, NavController, LoadingController } from '@ionic/angular';
import { SessionService } from 'src/app/services/session.service';
import { ActivatedRoute, Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.page.html',
  styleUrls: ['./feedback.page.scss'],
})
export class FeedbackPage implements OnInit {
  data: any;
  students: any;
  response: any;
  school: any;
  fake: any;
  subject: any;
  student_name: any;
  student_id: any;
  refferences: any;
  constructor(
    private alertService: AlertService,
    private dataService: DataService,
    private authService: AuthService,
    private navCtrl: NavController,
    private sessionService: SessionService,
    private router: Router,
    private route: ActivatedRoute,

  ) {
    this.fake = 0;
    this.sessionService.sessionTimeOut();
    this.refferences = this.router.getCurrentNavigation().extras.state;
    console.log(this.refferences);
    if (this.router.getCurrentNavigation().extras.state != null) {
      this.student_name = this.router.getCurrentNavigation().extras.state.studentName;
      this.subject = this.router.getCurrentNavigation().extras.state.subject;
      this.student_id = this.router.getCurrentNavigation().extras.state.student_id;
    }
    this.students = new Array();



  }

  ngOnInit() {
  }

  async ionViewWillEnter() {
    this.authService.presentLoading();
    await this.authService.getStudents().subscribe(
      news => {
        this.authService.dismiss();
        this.data = news;
        this.students = this.data.data.students;
        this.school = this.students[0].school;
        // console.log(this.students, this.school);
      }
    );
  }

  post(form: NgForm) {
    this.authService.presentLoading();
    if (this.refferences != undefined) {
      if (typeof form.value.student != 'number') {
        form.value.student = this.student_id;
      }
      this.authService.addfeed(form.value.student, form.value.subject, form.value.message, this.school).subscribe(
        data => {

          this.response = data;
          if (this.response.response) {
            this.authService.dismiss();
            this.navCtrl.navigateRoot('/dashboard');
            this.alertService.presentToast(this.response.data);
          } else {
            this.alertService.presentToast('Error Occured while posting your feedback...');
          }
        },
        error => {
          this.authService.dismiss();
          console.log(error);
        },
        () => {
        }
      );
    } else {  
      this.authService.addfeed(form.value.student, form.value.subject, form.value.message, this.school).subscribe(
        data => {
          
          this.response = data;
          console.log(this.response);
          if (this.response.response) {
            this.authService.dismiss();
            this.navCtrl.navigateRoot('/dashboard');
            this.alertService.presentToast(this.response.data);
          } else {
            this.alertService.presentToast('Error Occured while posting your feedback...');
          }
        },
        error => {
          this.authService.dismiss();
          console.log(error);
        },
        () => {
        }
      );
    }

  }

}
