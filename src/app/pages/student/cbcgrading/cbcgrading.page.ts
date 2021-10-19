import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { ActivatedRoute, Router, NavigationExtras } from '@angular/router';
import { FileOpener } from '@ionic-native/file-opener/ngx';
import { InAppBrowser, InAppBrowserOptions } from '@ionic-native/in-app-browser/ngx';
import * as moment from 'moment';
import { FileTransfer, FileTransferObject } from '@ionic-native/file-transfer/ngx';
import { File } from '@ionic-native/file/ngx';
import { SpinnerDialog } from '@ionic-native/spinner-dialog/ngx';
import { SessionService } from 'src/app/services/session.service';
import { report } from 'process';
import { HttpClient } from '@angular/common/http';
import { EnvService } from 'src/app/services/env.service';
import { AlertService } from 'src/app/services/alert.service';
import * as _ from 'underscore';
import { element } from 'protractor';
import { newArray } from '@angular/compiler/src/util';

@Component({
  selector: 'app-cbcgrading',
  templateUrl: './cbcgrading.page.html',
  styleUrls: ['./cbcgrading.page.scss'],
})
export class CbcGradingPage implements OnInit {
  term_data: any;
  header_one: any;
  header_two: any;
  ter_id: any;
  data: any;
  data1: any;
  data2: any;
  reportcards: any;
  cbc_reports: any;
  cbcdata: any;
  types: any[];
  changes: any[];
  student: any;
  school: any;
  segment: any;
  assets: any;
  term: any;
  data3: any;
  data4: any;
  assessments: any;
  exams: any;
  no_cards: any;
  class_id: any;
  schoolInfo: any;
  data5: any;
  schoolDetails: any;
  schoolHeaders: any;
  reportdata: any;
  subjects: any;
  examTypes: any[];
  userinfo: any;
  feedback: any;
  students: any;
  t_id: any;
  terms: any;
  examdata: any;
  term_id: any;
  type: any[];
  url: any;
  fake: any;
  j: any;
  c_id: any;
  cdn: any;
  class_history: any;
  report_cards: any;
  reports: any;
  schoolLevel: any;
  hidden: boolean = true;
  exam_mark_header: any;
  private fileTransfer: FileTransferObject;
  options: InAppBrowserOptions = {
    location: 'yes', // Or 'no'
    hidden: 'no', // Or  'yes'
    clearcache: 'yes',
    clearsessioncache: 'yes',
    zoom: 'yes',// Android only ,shows browser zoom controls
    hardwareback: 'yes',
    mediaPlaybackRequiresUserAction: 'no',
    shouldPauseOnSuspend: 'no', // Android only
    closebuttoncaption: 'Close', // iOS only
    disallowoverscroll: 'no', // iOS only
    toolbar: 'yes', // iOS only
    enableViewportScale: 'no', // iOS only
    allowInlineMediaPlayback: 'no', // iOS only
    presentationstyle: 'pagesheet', // iOS only
    fullscreen: 'yes', // Windows only
  };
  constructor(
    private transfer: FileTransfer,
    private spinnerDialog: SpinnerDialog,
    private file: File,
    private iab: InAppBrowser,
    private authService: AuthService,
    private route: ActivatedRoute,
    private fileOpener: FileOpener,
    private router: Router,
    private http: HttpClient,
    private env: EnvService,
    private alertService: AlertService,
    private session: SessionService) {
    this.reportcards = new Array();
    this.exams = new Array();
    this.assessments = new Array();
    this.schoolInfo = new Array();
    this.examdata = new Array();
    this.term = new Object();
    this.types = new Array();
    this.type = new Array();
    this.changes = new Array();
    this.term_id = new Array();
    this.terms = new Array();
    this.term_data = new Array();
    this.j = new Array();
    this.fake = 1;
    this.class_history = new Array();
    this.report_cards = new Array();
    this.cbc_reports = new Array();
    this.cbcdata = new Array();
    this.reports = new Array();
    setTimeout(() => {
      this.fake = 0;
    }, 5000);
    // this.getSesion();
    this.schoolDetails = new Object();
    this.examTypes = new Array();
    this.route.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation().extras.state) {
        this.student = this.router.getCurrentNavigation().extras.state.details;
        console.log(this.student)
        // this.report_cards = this.router.getCurrentNavigation().extras.state.reports;
        this.term_id = this.router.getCurrentNavigation().extras.state.tids;
        this.assets = this.student.student_image === null ? 1 :
          `https://${this.student.school}.eduweb.co.ke/assets/students/${this.student.student_image}`;
        this.url = `https://${this.student.school}.eduweb.co.ke/assets/students/`;

        this.cdn = `https://${this.student.school}.eduweb.co.ke/assets/reportcards/${this.student.school}/`
      }
      this.session.sessionTimeOut();


    });

    this.segment = 'reports';



  }

  ngOnInit() {
  }

  async ionViewWillEnter() {


    await this.authService.checkFeed().then(
      feed => {
        this.feedback = feed;
      }
    );
    await this.authService.getSchool(this.student.school).subscribe(
      school => {
        this.data5 = school;
        this.schoolInfo = this.data5.data;
        this.schoolInfo.forEach(element => {
          if (element.name == 'School Level') {
            this.schoolLevel = element.value;
          }
        })
      }
    );
    setTimeout(() => {
      if (this.schoolLevel === 'Secondary') {
        this.authService.highCards(this.student.school, this.student.student_id).subscribe(
          cards => {
            this.data = cards;
            console.log(this.data)
            this.report_cards = this.data.data === undefined ? [] : this.data.data;
            this.report_cards = _.sortBy(this.report_cards, 'term_id').reverse();

          }
        );

      } else if (this.schoolLevel === 'Primary') {
        this.authService.cards(this.student.school, this.student.student_id).subscribe(
          cards => {
            this.data = cards;
            this.report_cards = this.data.data === undefined ? [] : this.data.data;
            this.report_cards = _.sortBy(this.report_cards, 'term_id').reverse();

          }
        );
      }
    }, 3000);

    await this.authService.currentTerm(this.student.school).subscribe(
      terms => {
        this.data2 = terms;
        this.term = this.data2.data;
      }
    );
    await this.authService.schoolTerm(this.student.school, this.student.student_id).subscribe(
      school_terms => {
      console.log("schoool terms>> "+JSON.stringify(school_terms));
        this.term_data = school_terms;
        this.terms = this.term_data.data;

        this.ter_id = this.terms[0].term_id;
        this.class_history = this.terms.map(item => item.class_name).filter((value, index, self) => self.indexOf(value) === index);
        console.log(JSON.stringify(this.class_history))
        this.class_id = this.terms[0].class_id;
        this.exam_mark_header = this.terms[0].class_name + this.terms[0].term_name;
      }
    );
   
    await this.authService.examsTypes(this.student.school, this.student.class_cat_id).subscribe(
      types => {
        this.data1 = types;
        if (this.data1.nodata) {
          this.types = [];
        } else {
          this.types = this.data1.data;
        }
      }
    );

    this.cbcreports();
  }



  view1(file) {
    let target = '_blank';
    this.iab.create(file, target, this.options);

  }

  async cbcreports(){
    //TODO: hit endpoint

    await this.authService.cbcreport(this.student.school,this.student.student_id).subscribe(
      cbcreports => {
        this.cbcdata = cbcreports;
        this.cbc_reports = this.cbcdata.data == undefined ? [] : this.cbcdata.data;

      }
    )

  }

  async calChange() {

    var data;
    var changeTermId = this.terms[1].term_id;
    var changeClassId = this.terms[1].class_id;

    await this.authService.exams(this.student.school, changeClassId, this.student.student_id, changeTermId).subscribe(
      exams => {
        data = exams;
        var examMarks = data.data === undefined ? [] : data.data;
        this.changes = examMarks;
      });


  }

  onlyUnique(value, index, self) {
    return self.indexOf(value) === index;
  }

  async assessment() {
    await this.authService.assessment(this.student.school, this.student.student_id).subscribe(
      assessments => {
        // console.log(homeworks.data);
        this.data4 = assessments;
        if (this.data4.nodata) {
          this.assessments = [];
        } else {
          const data1 = this.data4.data === undefined ? [] : this.data4.data;
          data1.sort((a, b) => (a.term_id < b.term_id) ? 1 : -1);
          const data = data1;
          this.assessments = data;
        }
        // console.log(JSON.stringify(this.assessments));

      }
    );
  }

  
  cbcClick(cbc){
    this.prepare(cbc.term_id);
      // const navigationExtras: NavigationExtras = {
      //   state: {
      //     details: this.student,
      //     examTypes: this.types,
      //     schoolInfo: this.schoolInfo,
      //     type:"cbc",
      //     reports: cbc,
      //     level: this.schoolLevel
      //   }
      // };
      // this.router.navigate(['grades'], navigationExtras);
    
  }

  //class change
  classChange($event) {
    this.c_id = $event.target.value;
    if (this.c_id === "all") {
      this.terms = this.term_data.data;
    } else {
      this.terms = this.term_data.data;
      this.terms = this.terms.filter(t => {
        var ts = [];
        ts = t.class_name;
        return ts == this.c_id;
      });
    }
  }
  //term change
  termChange($event) {
    this.t_id = $event.target.value;
  }

  //termExamChange($exam)
  termExamChange($exam) {
    this.ter_id = $exam.target.value;
    this.header_two = this.ter_id;
    this.terms.filter(t => {
      var term = [];
      term = t.term_name;
      if (term === this.ter_id) {
        this.ter_id = t.term_id;
      }
    });
  }

  //classExamChange
  classExamChange($class) {

    //value is class name
    var value = $class.target.value;

    this.header_one = value;

    //re init terms for after filter click
    this.terms = this.term_data.data;
    console.log(this.terms)

    //filter terms to have only those of selected class
    this.terms = this.terms.filter(t => {
      var class_name;
      class_name = t.class_name;
      if (class_name === value) {
        this.class_id = t.class_id;
        return t.class_id == this.class_id;
      }
    });
    console.log(this.class_id)
    console.log(this.terms);


  }
  //filter
  filter() {
    this.report_cards = this.data.data === undefined ? [] : this.data.data;
    this.report_cards = this.report_cards.filter(reports => {
      var j = [];
      j = reports.term_id;
      return j == this.t_id;
    });

  }
  //filterExam 
  async filterExam() {
    this.authService.presentLoading();
    this.examdata = [];
    this.exam_mark_header = "";
    await this.authService.exams(this.student.school, this.class_id, this.student.student_id, this.ter_id).subscribe(
      exams => {
        this.data1 = exams;
        if (this.data1.nodata) {
          this.alertService.presentToast("No exam marks for term selected");
          this.cbc_reports = [];
          this.authService.dismiss();
        } else {
          this.data3 = exams;
          this.exams = this.data3.data === undefined ? [] : this.data3.data;
          // this.exams.sort((a, b) => (a.exam_type > b.exam_type) ? 1 : -1);
          this.exams.forEach(e => {
            this.type.push(e.exam_type);
          });
          // console.log(this.type);
          const myArray = this.type;
          this.types = myArray.filter((v, i, a) => a.indexOf(v) === i);

          this.types.forEach(el => {
            console.log
            const ty = el;
            let x = [];
            let c = [];
            var m, k;
            for (var i = 0; i < this.exams.length; i++) {
              if (this.exams[i].exam_type === el) {
                k = this.exams[i-1] === undefined ? 0 : this.exams[i-1].mark;
                m = this.exams[i].mark-k;
                x.push(this.exams[i]);
                c.push(m);
              }
            }
            const data = {
              ty,
              marks: x,
              change: c
            };
            this.examdata.push(data);
            this.authService.dismiss();
          });

        }
      }
    );
    this.exam_mark_header = this.header_one + ' ' + this.header_two;

  }
  // hide
  hide() {
    if (this.hidden == true) {
      document.getElementById('hid').hidden = false;
      this.hidden = false
    } else {
      document.getElementById('hid').hidden = true;
      this.hidden = true;
      this.report_cards = this.data.data === undefined ? [] : this.data.data;
    }

  }
  //prepare document for download
  prepare(sid: any) {
    var file_name: any;
    if (this.student.middle_name != null) {
      file_name = this.student.student_id + '_' + this.student.school + '_' + this.student.first_name + '_' + this.student.middle_name + '_' + this.student.last_name + '_' + sid + '.pdf';
    } else {
      file_name = this.student.student_id + '_' + this.student.school + '_' + this.student.first_name + '__' + this.student.last_name + '_' + sid + '.pdf';
    }
    console.log(file_name);
    var downloadUrl = (this.cdn + file_name.replace(/\s/g, "_"));

    if (downloadUrl.includes("'")) {
      downloadUrl = downloadUrl.replace(/'/g, "''");
    }
    console.log(downloadUrl);
    this.download(file_name, downloadUrl);
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
    }
    return MIMETypes[ext];
  }
  open(file) {
    this.authService.dismiss();
    // this.spinnerDialog.hide();
    const fileExtn = file.split('.').reverse()[0];
    const fileMIMEType = this.getMIMEtype(fileExtn);
    console.log(fileExtn, fileMIMEType, file);
    this.fileOpener.showOpenWithDialog(file, fileMIMEType)
      .then(() => console.log('File is opened'))
      .catch(e => {
        this.alertService.presentToast(e);
      });
  }
  async download(fileName, filePath) {
    await this.authService.presentLoading();
    // this.spinnerDialog.show();
    // const  fileExtn = fileName.split('.').reverse()[0];
    // const fileMIMEType = this.getMIMEtype(fileExtn);
    const url = encodeURI(filePath);
    this.fileTransfer = this.transfer.create();
    this.fileTransfer.download(url, this.file.dataDirectory + fileName, true).then((entry) => {
      // here logging our success downloaded file path in mobile.
      console.log('download completed: ' + entry.toURL());
      // open downloaded file
      // this.downloadFile = entry.toURL();
      this.open(entry.toURL());
    }).catch((error) => {
      this.authService.dismiss();
      // this.spinnerDialog.hide();
      // here logging an error.
      if (/\s/.test(fileName)) {
        this.alertService.presentToast('Download failed: File Name has spaces');
      }
      this.alertService.presentToast('Download failed: File not found');
      console.log('download failed: ' + JSON.stringify(error));
    });
  }

  //add feed
  addfeed() {
    const navigationExtras: NavigationExtras = {};
    this.router.navigate(['feedback'], navigationExtras);
  }

  format(date) {
    return moment(date).format('DD-MM-YYYY');
  }

}
