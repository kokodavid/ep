import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationExtras } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { isNgTemplate, ArrayType } from '@angular/compiler';
import * as moment from 'moment';
import { FileOpener } from '@ionic-native/file-opener/ngx';
import { File } from '@ionic-native/file/ngx'
import { SessionService } from 'src/app/services/session.service';
import { Element } from '@angular/compiler/src/render3/r3_ast';
import { encode } from 'punycode';
import { element } from 'protractor';
// import { mkdir } from 'fs';
@Component({
  selector: 'app-grades',
  templateUrl: './grades.page.html',
  styleUrls: ['./grades.page.scss'],
})
export class GradesPage implements OnInit {
  student: any;
  assets: any;
  cbc:any;
  reportdata: any;
  types: any[];
  subjects: any;
  comments: any;
  examTypes: any[];
  marks: any;
  reportCards: any;
  public schoolInfo: any[];
  schoolHeaders: any;
  usehead: any;
  header: any;
  header1: any;
  positions: any;
  lastterm: any;
  totals: any;
  term_id: any;
  class_id: any;
  data: any;
  keys: any[];
  pdf: any;
  col1: any;
  data1: any;
  type: any[];
  this_term: any;
  last_term: any;
  exam_marks: any;
  exam_type: any;
  sub: any;
  grades: any;
  cat1: any;
  cat2: any;
  cat3: any;
  cat4: any;
  cat5: any;
  cat6: any;
  cat7: any;
  overall: any;
  avg: any;
  total: any;
  closing_date: any;
  opening_date: any;
  subjOvrl: any;
  fake: any;
  schoolLevel: any;
  colspan: any;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private authService: AuthService,
    private fileOpener: FileOpener,
    private sessionService: SessionService,
  ) {
    this.subjects = new Array();
    this.comments = new Object();
    this.types = new Array();
    this.marks = new Array();
    this.reportCards = new Array();
    this.examTypes = new Array();
    this.schoolInfo = new Array();
    this.type = new Array();
    this.lastterm = new Object();
    this.positions = new Object();
    this.totals = new Array();
    this.last_term = new Object();
    this.this_term = new Object();
    this.exam_marks = new Array();
    this.exam_type = new Array();
    this.grades = new Array();
    this.cat1 = new Array();
    this.cat2 = new Array();
    this.cat3 = new Array();
    this.cat4 = new Array();
    this.cat5 = new Array();
    this.cat6 = new Array();
    this.cat7 = new Array();
    this.overall = new Array();
    this.total = new Array();
    this.sub = new Array();
    this.avg = new Array();
    this.fake = 0;

    setTimeout(() => {
      this.fake = 1;
    }, 6000);
    this.subjOvrl = new Array();
    this.route.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation().extras.state) {
        this.student = this.router.getCurrentNavigation().extras.state.details;

        this.reportCards = this.router.getCurrentNavigation().extras.state.reports;
        this.type = this.router.getCurrentNavigation().extras.state.examTypes;
        this.term_id = this.router.getCurrentNavigation().extras.state.term_id;
        this.cbc = this.router.getCurrentNavigation().extras.state.type;
        this.class_id = this.router.getCurrentNavigation().extras.state.class_id;
        this.schoolInfo = this.router.getCurrentNavigation().extras.state.schoolInfo;
        this.assets = this.student.student_image === null ? 1 :
          `https://${this.student.school}.eduweb.co.ke/assets/students/${this.student.student_image}`;
        

        this.sessionService.sessionTimeOut();
        this.col1 = this.examTypes.length;
        // get headers
        console.log(this.schoolInfo);
        const schoolDetails = {};
        this.schoolInfo.forEach(element => {
          if (element.name === 'Letterhead') {
            if (
              element.name === 'Letterhead'
              || element.name === 'logo'
              || element.name === 'School Name'
              || element.name === 'Address 2'
              || element.name === 'Address 1'
              || element.name === 'Phone Number'
              || element.name === 'Email Address'
              || element.name === 'Phone Number 2'
            ) {
              // console.log(element.name, element.value);
              if (element.name === 'Letterhead') {
                const Letterhead = element.value;
                // if(Letterhead == undefined || Letterhead == null){
                //   schoolDetails['head']= ``
                // }
                schoolDetails['head'] = Letterhead;
              } else if (element.name === 'logo') {
                const Logo = element.value;
                schoolDetails['Logo'] = Logo;
                console.log(Logo);
              } else if (element.name === 'School Name') {
                const schoolname = element.value;
                schoolDetails['schoolname'] = schoolname;
              } else if (element.name === 'Address 2') {
                schoolDetails['address2'] = element.value;
              } else if (element.name === 'Address 1') {
                schoolDetails['address1'] = element.value;
              } else if (element.name === 'Phone Number') {
                schoolDetails['phone'] = element.value;
              } else if (element.name === 'Phone Number 2') {
                schoolDetails['phone2'] = element.value;
              } else if (element.name === 'Email Address') {
                schoolDetails['email'] = element.value;
              }
            } else {

            }
          }
        });
        this.schoolHeaders = schoolDetails;
        console.log(this.schoolHeaders);
        this.usehead = this.schoolHeaders.head ? 1 : 0;
        this.header = `https://${this.student.school}.eduweb.co.ke/assets/schools/${this.schoolHeaders.head}`;
        this.header1 = `https://${this.student.school}.eduweb.co.ke/assets/schools/${this.schoolHeaders.head}`;
        console.log(this.header, this.header1);
        console.log(this.reportCards.report_card_comments);
        this.comments = this.reportCards.report_card_comments;
        if (this.reportCards.exam_marks == null) {
          this.exam_marks = [" "];
        } else {
          this.exam_marks = this.reportCards.exam_marks === undefined ? [] : this.reportCards.exam_marks;
        }
        // SOLN

        //dates 
        this.opening_date = this.reportCards.next_term_begins;
        this.closing_date = this.reportCards.closing_date;

        // subjects
        this.sub = this.reportCards.subjects_column == undefined ? [] : this.reportCards.subjects_column;
        // exam types
        console.log(this.reportCards)
        var exam = [];
        // tslint:disable-next-line:prefer-for-of
        for (let a = 0; a < this.exam_marks.length; a++) {

          // tslint:disable-next-line: prefer-for-of
          for (let b = 0; b < this.exam_marks[a].exam_marks.length; b++) {
            // console.log(this.exam_marks[a].exam_marks[b].mark);
            if (this.exam_marks[a].exam_marks[b].mark !== null) {
              exam.push(this.exam_marks[a].exam_type);
              // this.exam_type['exam_type'] = this.exam_marks[a].exam_type;

            }
          }


        }
        this.exam_type = exam.filter(this.onlyUnique);



        // overall
        // tslint:disable-next-line: max-line-length
        this.subjOvrl = this.reportCards.subject_overalls_column[0].subject_overalls == undefined ? [] : this.reportCards.subject_overalls_column[0].subject_overalls;

        // exam grades
        if (this.exam_marks[0] !== undefined) {
          this.cat1 = this.exam_marks[0].exam_marks === undefined ? [] : this.exam_marks[0].exam_marks;
          var c = [];
          this.cat1.filter((params) => {
            c.push(params.mark);
            return c != null;
          })
          console.log(c)
          if (c.every(element => element === null)) {
            this.cat1 = [];
          }
        }
        if (this.exam_marks[1] !== undefined) {
          this.cat2 = this.exam_marks[1].exam_marks === undefined ? [] : this.exam_marks[1].exam_marks;
          var c = [];
          this.cat2.filter((params) => {
            c.push(params.mark);
            return c != null;
          })
          console.log(c)
          if (c.every(element => element === null)) {
            this.cat2 = [];
          }
        }
        if (this.exam_marks[2] !== undefined) {
          this.cat3 = this.exam_marks[2].exam_marks === undefined ? [] : this.exam_marks[2].exam_marks;
          var c = [];
          this.cat3.filter((params) => {
            c.push(params.mark);
            return c != null;
          })
          console.log(c)
          if (c.every(element => element === null)) {
            this.cat3 = [];
          }
        }
        if (this.exam_marks[3] !== undefined) {
          this.cat4 = this.exam_marks[3].exam_marks === undefined ? [] : this.exam_marks[3].exam_marks;
          var c = [];
          this.cat4.filter((params) => {
            c.push(params.mark);
            return c != null;
          })
          console.log(c)
          if (c.every(element => element === null)) {
            this.cat4 = [];
          }
        }
        if (this.exam_marks[4] !== undefined) {
          this.cat5 = this.exam_marks[4].exam_marks === undefined ? [] : this.exam_marks[4].exam_marks;
          var c = [];
          this.cat5.filter((params) => {
            c.push(params.mark);
            return c != null;
          })
          console.log(c)
          if (c.every(element => element === null)) {
            this.cat5 = [];
          }
        }
        if (this.exam_marks[5] !== undefined) {
          this.cat6 = this.exam_marks[5].exam_marks === undefined ? [] : this.exam_marks[5].exam_marks;

        }
        if (this.exam_marks[6] !== undefined) {
          this.cat7 = this.exam_marks[6].exam_marks === undefined ? [] : this.exam_marks[6].exam_marks;

        }
        //totals
        this.total = this.reportCards.totals[0].total_marks === undefined ? [] : this.reportCards.totals[0].total_marks;
        this.total = this.total.filter(params => {
          return params.total !== null;
        });


       //comments
       

 
        //positions
        if (this.reportCards.calculation_mode === "Last Exam") {
          // this.this_term = this.reportCards.totals[0].total_marks[this.total.length - 1];
          //overall
          this.overall = this.reportCards.overall_marks_and_grade_by_last_exam;
          //position
          this.positions = this.reportCards.positions_by_last_exam;


        } else {
          this.positions = this.reportCards.positions;
          this.overall = this.reportCards.overall_marks_and_grade;
        }

        // set marks according to computation methods
        if (this.reportCards.total_marks == null) {
          this.this_term = [];
        } else {

        }

        //overage
        this.avg = this.reportCards.overall_marks_and_grade[0].this_term_marks_and_grade;

        // colSpan

        this.colspan = 3 * (this.exam_type.length) + 2;

        this.comments = this.reportCards.report_card_comments;
      }
    });
  }

  ngOnInit() {
  }
  async ionViewWillEnter() {


    await this.authService.keys(this.student.school).subscribe(
      k => {
        //console.log(k);
        this.data = k;
        this.keys = this.data.data;
      }
    );


  }
  getMIMEtype(extn) {
    let ext = extn.toLowerCase();
    let MIMETypes = {
      'txt': 'text/plain',
      'docx': 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
      'doc': 'application/msword',
      'pdf': 'application/pdf',
      'jpg': 'image/jpeg',
      'bmp': 'image/bmp',
      'png': 'image/png',
      'xls': 'application/vnd.ms-excel',
      'xlsx': 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
      'rtf': 'application/rtf',
      'ppt': 'application/vnd.ms-powerpoint',
      'pptx': 'application/vnd.openxmlformats-officedocument.presentationml.presentation'
    };
    return MIMETypes[ext];
  }
  open(file) {
    const fileExtn = file.split('.').reverse()[0];
    const fileMIMEType = this.getMIMEtype(fileExtn);
    // console.log(fileExtn, fileMIMEType, file);
    this.fileOpener.showOpenWithDialog(file, fileMIMEType)
      .then(() => console.log('File is opened'))
      .catch(e => console.log('Error openening file', e));

  }
  formatDate(date) {
    return moment(date).format('Do MMM YYYY');
  }
  onlyUnique(value, index, self) {
    return self.indexOf(value) === index;
  }
  format(value) {
    // console.log(value);
    // console.log(value.grade);

  }
}
