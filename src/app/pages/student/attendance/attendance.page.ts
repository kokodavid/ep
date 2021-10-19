import { Component, OnInit, ViewChild } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { ActivatedRoute, Router, NavigationExtras } from '@angular/router';
import * as moment from 'moment';
import { NgForm } from '@angular/forms';
import { SessionService } from 'src/app/services/session.service';


@Component({
  selector: 'app-attendance',
  templateUrl: './attendance.page.html',
  styleUrls: ['./attendance.page.scss'],
})


export class AttendancePage implements OnInit {
  @ViewChild('absentForm', { static: false }) absentForm: NgForm;
  segment: string;
  student: any;
  assets: any;
  from_date: any;
  to_date: any;
  sub_domain: string;
  student_id: any;
  data;
  class_name: any;
  valid: string = "false";
  details: any;
  message: any;
  absent_days: any;
  state: string = "off";
  duration: any;
  month: any;
  start: any;
  starting_dates: any;
  end: any;
  fake: any;

  constructor(
    private authServices: AuthService,
    private router: Router,
    private route: ActivatedRoute,
    private sessionService: SessionService,
  ) {
    this.route.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation().extras.state) {
        this.student = this.router.getCurrentNavigation().extras.state.details.student_name;
        this.student_id = this.router.getCurrentNavigation().extras.state.details.student_id;
        this.sub_domain = this.router.getCurrentNavigation().extras.state.details.school_subdomain;
        this.class_name = this.router.getCurrentNavigation().extras.state.details.class_name;
        this.details = this.router.getCurrentNavigation().extras.state.details;
        if (this.sub_domain == null) {
          this.sub_domain = this.router.getCurrentNavigation().extras.state.details.school;
        }
        // console.log(this.student);
        this.assets = this.student.student_image === null ? 1 :
          `https://${this.student.school}.eduweb.co.ke/assets/students/${this.student.student_image}`;

      }
    });
    this.absent_days = new Array();
    this.sessionService.sessionTimeOut();
    this.duration = new Array();
    this.month = new Array();
    this.starting_dates = new Array();
    this.fake = 0;
    setTimeout(()=>{
      this.fake = 1;
    },3000);
  }

  ngOnInit() {
    this.segment = 'absenteeism'
    this.message = "Hello, \n";
  }


  async ionViewWillEnter() {
    await this.authServices.getAbsenteeism(this.student_id, this.sub_domain).subscribe(
      days => {
        this.data = days;
        if (this.data.response === "success") {
          this.absent_days = this.data.data === undefined ? [] : this.data.data;
          console.log(this.absent_days);
          //duration
          for (var i = 0; i < this.absent_days.length; i++) {
            const oneDay = 24 * 60 * 60 * 1000;
            var from = new Date(this.data.data[i].starting);
            var to = new Date(this.data.data[i].ending);
            this.starting_dates.push(moment(from).format('MMM, Do YYYY'));
            console.log(this.starting_dates);
            this.month.push(this.getMonth(from))
            var startMillis = from.getTime();
            var endMillis = to.getTime();
            var weekend = 0;
            for (var j = startMillis; j < endMillis; j += oneDay) {
              var currentDay = new Date(j);
              if (currentDay.getDay() === 5 || currentDay.getDay() === 6) {
                weekend++
              }

            }
            var total_days = Math.round(Math.abs(from.getTime() - to.getTime()) / oneDay) + 1;
            this.duration.push(total_days - weekend);

          }
        }
      }
    )
  }

  reasonChange($event) {
    document.getElementById('hid').hidden = false;
    this.message = this.message + "Due to " + $event.detail.value + ", " + this.student + " (" + this.class_name + ") shall not be in schoool from ";
  }
  fromDate($event) {
    this.message = this.message + this.formatDate($event) + " to ";
    this.valid = "false";
  }
  toDate($event) {
    document.getElementById('hid2').hidden = false;
    this.message = this.message + this.formatDate($event) + ". \nThank you.";
    this.valid = "false";
  }
  showInfo(index: any) {
    if (document.getElementById("content" + index).hidden == true) {
      document.getElementById("content" + index).hidden = false;
      document.getElementById("duration" + index).hidden = true;

    } else {
      document.getElementById("content" + index).hidden = true;
      document.getElementById("duration" + index).hidden = false;

    }
  }

  reportAbsent(absentForm: NgForm) {
    console.log(absentForm.value);
    var starting = moment(absentForm.value.from_date).format('MMM, ddd YYYY');
    var ending = moment(absentForm.value.to_date).format('MMM, ddd YYYY');
    var start = new Date(absentForm.value.from_date);
    var end = new Date(absentForm.value.to_date);
    console.log(start);
    console.log(end);
    document.querySelector("app-attendance").querySelector('ion-content').scrollToTop(1500);

    console.log("end " + end.getTime());

    console.log("start " + start.getTime())
    if (end.getTime() > start.getTime()) {
      if (!this.starting_dates.includes(moment(start).format('MMM, Do YYYY'))){

       this.authServices.reportAbsenteeism(this.student_id, absentForm.value.message,
          absentForm.value.reason,
          absentForm.value.from_date,
          absentForm.value.to_date, this.sub_domain, starting, ending).subscribe(data => {
            this.data = data;
            if (this.data.response === "success") {
              this.authServices.presentAlert2(this.data.data);
              const navigationExtras: NavigationExtras = {
                state: {
                  details: this.details,
                }
              }
              this.router.navigate(['home'], navigationExtras);
            } else {
              this.authServices.presentAlert2(this.data.data)
            }
          });
        }else{
          this.authServices.presentAlert2("Duplicate entry. \n Student already reported absent for dates selected.");
          absentForm.reset();
        }
    } else {
      this.authServices.presentAlert2("Check dates and try again. \n Start date should be before End date");
      absentForm.reset();
      document.querySelector("app-attendance").querySelector('ion-content').scrollToTop(1500);
      // absentForm.value.from_date = '';

      this.valid = "true";
    }


  }
  segmentChanged($ev) {
    // console.log($ev);
  }
  checkWeekend(date1, date2) {
    var oneDay = 1000 * 60 * 60 * 24;

  }
  isReadonly() {
    return this.isReadonly;   //return true/false 
  }
  formatDate(date) {
    return moment(date).format('MMM D, YYYY');
  }
  getMonth(date) {
    return moment(date).format('MMMM');
  }
}
