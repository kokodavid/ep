import { Component, OnInit, ViewChild, AfterViewInit, Injectable } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { ActivatedRoute, Router, NavigationExtras } from '@angular/router';
import * as moment from 'moment';
import { SessionService } from 'src/app/services/session.service';
import { Chart } from 'chart.js';
import * as _ from 'underscore';
import { ModalController } from '@ionic/angular';
import { AnalyticsModalComponent } from 'src/app/analytics-modal/analytics-modal.component';
import { TooltipsModule } from 'ionic-tooltips';






@Component({
  selector: 'app-analytics',
  templateUrl: './analytics.page.html',
  styleUrls: ['./analytics.page.scss'],
})

export class AnalyticsPage implements OnInit {
  @ViewChild('lineChart') lineChart;
  @ViewChild('lineChart2') lineChart2;
  @ViewChild('lineChart3') lineChart3;
  @ViewChild('overallChart') ovChart;
  bars: any;
  lines: any;
  str_lines: any;
  collorArray: any;
  data: any;
  student: any;
  segment: any;
  terms: any;
  marks: any;
  labels: any;
  ctx: any;
  fake: any;
  subjects: any;
  submarks: any;
  math: any;
  assets: any;
  english: any;
  kiswahli: any;
  science: any;
  ssre: any;
  report_cards: any;
  hidden: boolean;
  t_id: any;
  c_id: any;
  class_history: any;
  exam_marks: any;
  type: any;
  sort: number;
  indx: any;
  pies: any;
  pos: any;
  nodata: any;
  options: any;
  constructor(
    private authService: AuthService,
    private route: ActivatedRoute,
    private router: Router,
    private session: SessionService,
    private modalCtl: ModalController,
    // private apexCharts: ApexChart,

  ) {
    this.data = new Array();
    this.student = new Array();
    this.terms = [];
    this.segment = 'overall';
    this.marks = [];
    this.fake = 0;
    this.hidden = true;
    this.report_cards = new Array();
    this.class_history = new Array();
    this.exam_marks = new Array();
    this.route.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation().extras.state) {
        this.student = this.router.getCurrentNavigation().extras.state.details;
        // console.log(this.student);
        this.assets = this.student.student_image === null ? 1 :
          `https://${this.student.school}.eduweb.co.ke/assets/students/${this.student.student_image}`;
      }
    });

    this.options = {
      title: {
        display: false,
        text: 'Analysis for '
      },
      legend: {
        display: false,
      },
      maintainAspectRatio: false,
      responive: true,
      scales: {
        yAxes: [{
          scaleLabel: {
            display: false,
            labelString: 'EXAM MARKS',
            fontStyle: 'bold'
          },
          ticks: {
            display: false,
            beginAtZero: true,
            suggestedMax: 100,
            stepSize: 25
          },
          gridLines: {
            display: true,
            lineWidth: 1
          }
        }],
        xAxes: [{
          scaleLabel: {
            display: false,
            labelString: 'EXAM TYPE',
            fontStyle: 'bold'
          },
          ticks: {
            display: false
          },
          gridLines: {
            display: true,
            lineWidth: 1
          }
        }]
      }
    }
  }

  ngOnInit() {
    this.authService.presentLoading()

  }

  async ionViewWillEnter() {
    await this.authService.cards(this.student.school, this.student.student_id).subscribe(cards => {

      this.data = cards;
      this.labels = _.sortBy(this.data.data, 'term_id');
      var n = [];
      for (var i = 0; i < this.labels.length; i++) {

        n = this.labels[i].exam_marks;

      }

      if (this.labels == undefined || this.labels.length === 0 || n === null) {
        this.nodata = 'true';
        this.authService.dismiss();
      } else {
        this.nodata = 'false';

        this.report_cards = this.labels.reverse();
        console.log(this.report_cards);
        //display latest cards only
        if (this.report_cards[0].year === '2020') {
          this.sort = 1;
          this.report_cards = this.report_cards.filter((x) => {
            return x.year == '2020';
          });

        } else if (this.report_cards[0].year === '2019') {
          this.sort = 0;
          this.report_cards = this.report_cards.filter((y) => {
            return y.year == '2019';
          });

        } else if (this.report_cards[0].year === '2018') {
          this.sort = 0;
          this.report_cards = this.report_cards.filter((y) => {
            return y.year == '2018';
          });
        } else {
          this.nodata = 'true';
          this.authService.dismiss();
        }
        this.authService.dismiss();
        this.pos = -1;
        setTimeout(() => {
          this.overallChart();
          this.createChart(this.pos);
        }, 2000);


      }

    });

    await this.authService.schoolTerm(this.student.school, this.student.student_id).subscribe(
      school_terms => {
        this.data = school_terms;
        this.terms = this.data.data;
        this.class_history = this.terms.map(item => item.class_name).filter((value, index, self) => self.indexOf(value) === index);

      }
    );


  }

  //onclick
  reportData(report) {
    const navigationExtras: NavigationExtras = {
      state: {
        details: this.student,
        reports: report
      }
    };
    this.router.navigate(['analysis'], navigationExtras);

  }
  // hide filter
  hide() {
    if (this.hidden == true) {
      document.getElementById('hid').hidden = false;
      this.hidden = false
    } else {
      document.getElementById('hid').hidden = true;
      this.hidden = true;
      this.report_cards = this.labels.reverse();

      if (this.report_cards[0].year === '2020') {
        this.sort = 1;
        this.report_cards = this.report_cards.filter((params) => {
          return params.year == '2020';
        });

      } else {
        this.sort = 0;
        this.report_cards = this.report_cards.filter((y) => {
          return y.year == '2019';
        });

      }
      setTimeout(() => {
        this.pos = -1;
        this.createChart(this.pos);
      }, 2000);
    }

  }
  //class change
  classChange($event) {
    this.c_id = $event.target.value;
    if (this.c_id === "all") {
      this.terms = this.data.data;
    } else {
      this.terms = this.data.data;
      this.terms = this.terms.filter(t => {
        let ts = [];
        ts = t.class_name;
        return ts == this.c_id;
      });
    }
    console.log(this.terms);
  }
  //term change
  termChange($event) {
    this.t_id = $event.target.value;
  }
  //filter
  filter() {
    this.report_cards = this.data.data === undefined ? [] : this.data.data;
    //find index of the report_cards in reportcards
    let c;
    c = this.report_cards.filter(reports => {
      var j = [];
      j = reports.term_id;
      return j == this.t_id;

    });
    console.log(c[0]);
    this.pos = this.report_cards.indexOf(c[0]);
    console.log(this.pos)
    this.report_cards = this.report_cards.filter(reports => {
      var j = [];
      j = reports.term_id;
      return j == this.t_id;

    });

    setTimeout(() => {
      this.createChart(this.pos);
    }, 2000);

  }
  // chart 
  createChart(pos) {
    console.log(pos);
    if (pos != -1) {

      let term1 = this.report_cards[0].exam_marks;
      let type1 = []
      for (let h = 0; h < term1.length; h++) {
        type1.push(term1[h].exam_type);
      }
      console.log(type1);
      this.math = [];
      this.english = [];
      this.kiswahli = [];
      this.science = [];
      this.ssre = [];

      for (var i = 0; i < term1.length; i++) {

        let a;
        a = _.sortBy(term1[i].exam_marks, 'subject_name');
        a = a.filter((param) => {
          var sub_id = [];
          sub_id = param.parent_subject_id;
          return sub_id == null;
        });
        this.math.push(a[0].mark);
        this.english.push(a[1].mark);
        this.kiswahli.push(a[2].mark);
        this.science.push(a[3].mark);
        this.ssre.push(a[4].mark);

      }

      let subjects = [];
      for (var n = 0; n < term1[0].exam_marks.length; n++) {
        let b;
        b = _.sortBy(term1[0].exam_marks, 'subject_name');
        if (b[n].parent_subject_id == null) {
          subjects.push(b[n].subject_name);
        }

      }

      this.bars = new Chart(this.lineChart.nativeElement, {
        type: 'bar',
        data: {
          labels: type1,
          datasets: [{
            label: subjects[0],
            data: this.math,
            fill: false,
            borderWidth: 0.5,
            borderColor: 'orange'
          },
          {
            label: subjects[1],
            data: this.english,
            borderWidth: 0.5,
            fill: false,
            borderColor: 'black'
          },
          {
            label: subjects[2],
            data: this.kiswahli,
            borderWidth: 0.5,
            borderColor: 'blue',
            fill: false,
          },
          {
            label: subjects[3],
            data: this.science,
            borderWidth: 0.5,
            borderColor: 'red',
            fill: false,
          }, {
            label: subjects[4],
            data: this.ssre,
            borderWidth: 0.5,
            borderColor: 'green',
            fill: false,
          }]
        },
        options: this.options
      });



    } else {

      for (var i = 0; i < this.report_cards.length; i++) {
        // this.exam_marks = this.report_cards[i].exam_marks === undefined ? [] : this.report_cards[i].exam_marks;
        this.exam_marks.push(this.report_cards[i].exam_marks);
      }

      let term1 = this.exam_marks[0];
      let term2 = this.exam_marks[1];
      let term3 = this.exam_marks[2];
      console.log(term1[0].exam_marks)
      //subjects
      let subjects = [];
      for (var n = 0; n < term1[0].exam_marks.length; n++) {
        let b;
        b = _.sortBy(term1[0].exam_marks, 'subject_name');
        if (b[n].parent_subject_id == null) {
          subjects.push(b[n].subject_name);
        }

      }

      this.terms = [];


      //exam types
      let type1 = [];
      let type2 = [];
      let type3 = [];

      // exam types
      for (var h = 0; h < term1.length; h++) {
        type1.push(term1[h].exam_type);
      }
      this.math = [];
      this.english = [];
      this.kiswahli = [];
      this.science = [];
      this.ssre = [];
      let a;
      for (let i = 0; i < term1.length; i++) {


        a = _.sortBy(term1[i].exam_marks, 'subject_name');
        a = a.filter((param) => {
          var sub_id = [];
          sub_id = param.parent_subject_id;
          return sub_id == null;
        });

        this.math.push(a[0].mark);
        this.english.push(a[1].mark);
        this.kiswahli.push(a[2].mark);
        this.science.push(a[3].mark);
        this.ssre.push(a[4].mark);


      }

      this.bars = new Chart(this.lineChart.nativeElement, {
        type: 'bar',
        data: {
          labels: type1,
          datasets: [{
            label: subjects[0],
            data: this.math,
            fill: false,
            borderWidth: 0.5,
            borderColor: 'orange'
          },
          {
            label: subjects[1],
            data: this.english,
            borderWidth: 0.5,
            fill: false,
            borderColor: 'black'
          },
          {
            label: subjects[2],
            data: this.kiswahli,
            borderWidth: 0.5,
            borderColor: 'blue',
            fill: false,
          },
          {
            label: subjects[3],
            data: this.science,
            borderWidth: 0.5,
            borderColor: 'red',
            fill: false,
          }, {
            label: subjects[4],
            data: this.ssre,
            borderWidth: 0.5,
            borderColor: 'green',
            fill: false,
          }]
        },
        options: this.options
      });
      if (term2 !== undefined || [] || term3 !== undefined || []) {
        //exam types
        for (let l = 0; l < term2.length; l++) {
          type2.push(term2[l].exam_type);
        }

        if (term3 !== undefined) {
          for (let m = 0; m < term3.length; m++) {
            type3.push(term3[m].exam_type);
          }
        }
        //marks
        //term2
        var math2 = [];
        var eng2 = [];
        var kis2 = [];
        var sci2 = [];
        var ssre2 = [];
        let a;
        for (var i = 0; i < term2.length; i++) {

          a = _.sortBy(term2[i].exam_marks, 'subject_name');
          a = a.filter((param) => {
            var sub_id = [];
            sub_id = param.parent_subject_id;
            return sub_id == null;
          });

          math2.push(a[0].mark);
          eng2.push(a[1].mark);
          kis2.push(a[2].mark);
          sci2.push(a[3].mark);
          ssre2.push(a[4].mark);
        }

        //term 3
        var math3 = [];
        var eng3 = [];
        var kis3 = [];
        var sci3 = [];
        var ssre3 = [];
        if (term3 !== undefined) {
          for (var i = 0; i < term3.length; i++) {

            let a;
            a = _.sortBy(term3[i].exam_marks, 'subject_name');
            a = a.filter((param) => {
              var sub_id = [];
              sub_id = param.parent_subject_id;
              return sub_id == null;
            });

            math3.push(a[0].mark);
            eng3.push(a[1].mark);
            kis3.push(a[2].mark);
            sci3.push(a[3].mark);
            ssre3.push(a[4].mark);

          }
        }
        math2 = math2.filter((el) => {
          return el != null;
        });
        eng2 = eng2.filter((el) => {
          return el != null;
        });
        kis2 = kis2.filter((el) => {
          return el != null;
        });
        sci2 = sci2.filter((el) => {
          return el != null;
        });
        ssre2 = ssre2.filter((el) => {
          return el != null;
        });
        this.lines = new Chart(this.lineChart2.nativeElement, {
          type: 'bar',
          data: {
            labels: type2,
            datasets: [{
              label: subjects[0],
              data: math2,
              fill: false,
              borderWidth: 0.5,
              borderColor: 'orange'
            },
            {
              label: subjects[1],
              data: eng2,
              borderWidth: 0.5,
              fill: false,
              borderColor: 'black'
            },
            {
              label: subjects[2],
              data: kis2,
              borderWidth: 0.5,
              borderColor: 'blue',
              fill: false,
            },
            {
              label: subjects[3],
              data: sci2,
              borderWidth: 0.5,
              borderColor: 'red',
              fill: false,
            }, {
              label: subjects[4],
              data: ssre2,
              borderWidth: 0.5,
              borderColor: 'green',
              fill: false,
            }]
          },
          options: this.options
        });
        this.pies = new Chart(this.lineChart3.nativeElement, {
          type: 'bar',
          data: {
            labels: type3,
            datasets: [{
              label: subjects[0],
              data: math3,
              fill: false,
              borderWidth: 0.5,
              borderColor: 'orange'
            },
            {
              label: subjects[1],
              data: eng3,
              borderWidth: 0.5,
              fill: false,
              borderColor: 'black'
            },
            {
              label: subjects[2],
              data: kis3,
              borderWidth: 0.5,
              borderColor: 'blue',
              fill: false,
            },
            {
              label: subjects[3],
              data: sci3,
              borderWidth: 0.5,
              borderColor: 'red',
              fill: false,
            }, {
              label: subjects[4],
              data: ssre3,
              borderWidth: 0.5,
              borderColor: 'green',
              fill: false,
            }]
          },
          options: this.options
        });
      }
    }
  }
  //overall
  overallChart() {
    let ovMarks = [];
    let termNames = [];
    this.labels = _.sortBy(this.labels, 'term_id');
    for (let i = 0; i < this.labels.length; i++) {
      ovMarks.push(this.labels[i].overall_marks_and_grade[0].
        this_term_marks_and_grade[0].overall_mark.substr(0, 3));

      termNames.push(this.labels[i].term_name);
    }
    console.log(ovMarks);
    console.log(termNames);

    this.str_lines = new Chart(this.ovChart.nativeElement, {
      type: 'line',
      data: {
        labels: termNames,
        datasets: [{
          label: 'Overall Marks',
          data: ovMarks,
          fill: true,
          borderWidth: 2,
          backgroundColor: 'rgba(57,124,73,0.3)',
          borderColor: '#397C49'
        }]
      },
      options: {
        maintainAspectRatio: false,
        scales: {
          yAxes: [{
            scaleLabel: {
              display: false,
              labelString: 'Ov MARKS',
              fontStyle: 'bold'
            },
            ticks: {
              display: true,
              beginAtZero: true,
              suggestedMax: 500,
              stepSize: 250
            }
          }],
          xAxes: [{
            scaleLabel: {
              display: true,
              labelString: 'TERMS',
              fontStyle: 'bold'
            },
            ticks: {
              display: false
            }
          }]
        }
      }
    });
  }
  //open modal 
  async openModal(r) {
    const modal = await this.modalCtl.create({
      component: AnalyticsModalComponent,
      cssClass: 'modal-css',
      componentProps: {
        reports: r
      }
    });

    await modal.present();
  }
  async ovModal() {
    const modal = await this.modalCtl.create({
      component: AnalyticsModalComponent,
      cssClass: 'modal-css',
      componentProps: {
        reports: this.labels,
        type: 'overall'
      }
    });

    await modal.present();
  }

  onlyUnique(value, index, self) {
    return self.indexOf(value) === index;
  }
  format(date) {
    return moment(date).format('DD-MM-YYYY');
  }


}