import { Component, OnInit, ViewChild } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { ActivatedRoute, Router, NavigationExtras } from '@angular/router';
import * as moment from 'moment';
import { SessionService } from 'src/app/services/session.service';
import { Chart } from 'chart.js';
import { Route } from '@angular/compiler/src/core';
import * as _ from 'underscore';


@Component({
  selector: 'app-analysis',
  templateUrl: './analysis.page.html',
  styleUrls: ['./analysis.page.scss'],
})

export class AnalysisPage implements OnInit {
  @ViewChild('barChart') barChart;
  @ViewChild('lineChart') lineChart;
  bars: any;
  lines: any;
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
  reportCards: any;
  type: any;
  exam_marks: any;

  constructor(
    private authService: AuthService,
    private route: ActivatedRoute,
    private router: Router,
  ) {
    this.reportCards = new Array();
    this.exam_marks = new Array();
    this.route.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation().extras.state) {
        this.student = this.router.getCurrentNavigation().extras.state.details;

        this.reportCards = this.router.getCurrentNavigation().extras.state.reports;
        this.exam_marks = this.reportCards.exam_marks === undefined ? [] : this.reportCards.exam_marks;

      }
    })
  }
  ngOnInit() {
  }
  ionViewWillEnter() {
    this.labels = this.reportCards;

    var subray = new Array();
    subray = this.labels.subjects_column;
    this.subjects = [];
    //subject names
    // for (var x = 0; x < subray.length; x++) {
    //   if (subray[x].parent_subject_id == null) {
    //     this.subjects.push(subray[x].subject_name);
    //   }
    // }

    this.createChart();
  }

  createChart() {
    this.terms = [];
    this.type = [];


    //exam types
    for (var h = 0; h < this.reportCards.exam_marks.length; h++) {
      this.type.push(this.reportCards.exam_marks[h].exam_type);
    }


    this.math = [];
    this.english = [];
    this.kiswahli = [];
    this.science = [];
    this.ssre = [];

    // tslint:disable-next-line:prefer-for-of
    for (var i = 0; i < this.exam_marks.length; i++) {

      let a;
      a = _.sortBy(this.exam_marks[i].exam_marks, 'subject_name');
      this.math.push(a[2].mark);
      this.english.push(a[4].mark);
      this.kiswahli.push(a[7].mark);
      this.science.push(a[8].mark);
      this.ssre.push(a[10].mark);

      console.log(a);




    }

    for (var j = 0; j < this.exam_marks[0].exam_marks.length; j++) {
      let b;
      b = _.sortBy(this.exam_marks[0].exam_marks, 'subject_name');
      if (b[j].parent_subject_id == null) {
        this.subjects.push(b[j].subject_name);
      }

    }


    if (this.terms != undefined || this.terms != null) {
      this.bars = new Chart(this.barChart.nativeElement, {
        type: 'line',
        data: {
          labels: this.type,
          datasets: [{
            label: this.subjects[0],
            data: this.math,
            fill: false,
            borderWidth: 2,
            borderColor: 'orange'
          },
          {
            label: this.subjects[1],
            data: this.english,
            borderWidth: 2,
            fill: false,
            borderColor: 'black'
          },
          {
            label: this.subjects[2],
            data: this.kiswahli,
            borderWidth: 2,
            borderColor: 'blue',
            fill: false,
          },
          {
            label: this.subjects[3],
            data: this.science,
            borderWidth: 2,
            borderColor: 'red',
            fill: false,
          }, {
            label: this.subjects[4],
            data: this.ssre,
            borderWidth: 2,
            borderColor: 'green',
            fill: false,
          }]
        },
        options: {
          title: {
            display: true,
            text: 'Analysis for ' + this.reportCards.class_name + ' ' + this.reportCards.term_name
          },
          maintainAspectRatio: false,
          gridLines:{
            display: false
          },
          scales: {
            yAxes: [{
              scaleLabel: {
                display: true,
                labelString: 'EXAM MARKS',
                fontStyle: 'bold'
              },
              ticks: {
                beginAtZero: true,
                suggestedMax: 100,
              }
            }],
            xAxes: [{
              scaleLabel: {
                display: true,
                labelString: 'EXAM TYPE',
                fontStyle: 'bold'
              },
              ticks: {

              }
            }]
          }
        }
      });
    }
  }
  subChart() {
    this.terms = [];
    for (var i = 0; i < this.labels.length; i++) {
      this.terms.push(this.labels[i].term_name);
      this.marks.push(this.labels[i].overall_marks_and_grade[0].this_term_marks_and_grade[0].overall_mark.substr(0, 3));
    }

    for (var j = 0; j < this.labels.length; j++) {

      this.math.push(this.labels[j].subject_overalls_column[0].subject_overalls[0].average);
      this.english.push(this.labels[j].subject_overalls_column[0].subject_overalls[1].average);
      this.kiswahli.push(this.labels[j].subject_overalls_column[0].subject_overalls[2].average);
      this.science.push(this.labels[j].subject_overalls_column[0].subject_overalls[3].average);
      this.ssre.push(this.labels[j].subject_overalls_column[0].subject_overalls[4].average);
      // console.log(this.labels[j].subject_overalls_column[0].subject_overalls[0].average);
    }
    if (this.terms != undefined || this.terms != null) {
      this.bars = new Chart(this.lineChart.nativeElement, {
        type: 'line',
        data: {
          labels: this.terms,
          datasets: [{
            label: this.subjects[0],
            data: this.math,
            fill: false,
            borderWidth: 1,
            borderColor: 'grey'
          },
          {
            label: this.subjects[1],
            data: this.english,
            borderWidth: 1,
            fill: false,
            borderColor: 'black'
          },
          {
            label: this.subjects[2],
            data: this.kiswahli,
            borderWidth: 1,
            borderColor: 'blue',
            fill: false,
          },
          {
            label: this.subjects[3],
            data: this.science,
            borderWidth: 1,
            borderColor: 'red',
            fill: false,
          }, {
            label: this.subjects[4],
            data: this.ssre,
            borderWidth: 1,
            borderColor: 'green',
            fill: false,
          }]
        },
        options: {
          scales: {
            yAxes: [{

              ticks: {
                beginAtZero: true,
                suggestedMax: 100,
              }
            }]
          }
        }
      });
    }
  }
  onlyUnique(value, index, self) {
    return self.indexOf(value) === index;
  }

}
