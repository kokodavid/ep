import { Component, Input, ViewChild, OnInit } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';
import { Chart } from 'chart.js';
import * as _ from 'underscore';
import { AuthService } from '../services/auth.service';
import { element } from 'protractor';


@Component({
  selector: 'app-analytics-modal',
  templateUrl: './analytics-modal.component.html',
  styleUrls: ['./analytics-modal.component.scss'],
})
export class AnalyticsModalComponent implements OnInit {
  @ViewChild('barChart') barChart;
  @ViewChild('lineChart') ovChart;
  type: [];
  terms: [];
  math: any;
  english: any;
  kiswahili: any;
  science: any;
  ssre: any;
  subjects: any;
  bars: any;
  exam_marks: any;
  name: any;
  labels: any;
  term: any;
  chartype: any;
  str_lines: any;

  constructor(
    private modalCtl: ModalController,
    private navParams: NavParams,
    private authService: AuthService,
  ) {


  }

  ngOnInit() {
    if (this.navParams.get('type') === 'overall') {
      this.chartype = 1;
      this.labels = this.navParams.get('reports');
      setTimeout(() => {
        this.authService.dismiss();
        this.overallChart();
      }, 2000);
    } else {
      this.authService.presentLoading();
      setTimeout(() => {
        this.authService.dismiss();
        this.createChart();
      }, 2000);
    }
  }


  createChart() {
    let reportCards;
    reportCards = new Array()

    // this.reportCards = new Array();
    this.exam_marks = new Array();
    reportCards = this.navParams.get('reports');
    this.name = reportCards.class_name;
    this.term = reportCards.term_name;
    this.exam_marks = reportCards.exam_marks === undefined ? [] : reportCards.exam_marks;
    console.log(reportCards);
    this.terms = [];
    this.type = [];
    let type = [];

    //exam types
    for (var h = 0; h < reportCards.exam_marks.length; h++) {
      type.push(reportCards.exam_marks[h].exam_type);
    }
    var exam = [];
    // tslint:disable-next-line:prefer-for-of
    for (let a = 0; a < this.exam_marks.length; a++) {

      // tslint:disable-next-line: prefer-for-of
      for (let b = 0; b < this.exam_marks[a].exam_marks.length; b++) {
        // console.log(this.exam_marks[a].exam_marks[b].mark);
        if (this.exam_marks[a].exam_marks[b].mark !== null) {
          exam.push(this.exam_marks[a].exam_type);
        }
      }
    }
    type = exam.filter(this.onlyUnique);
    console.log(type)
    this.math = [];
    this.english = [];
    this.kiswahili = [];
    this.science = [];
    this.ssre = [];

    for (var i = 0; i < this.exam_marks.length; i++) {

      let a;
      a = _.sortBy(this.exam_marks[i].exam_marks, 'subject_name');
      a = a.filter((param) => {
        var sub_id = [];
        sub_id = param.parent_subject_id;
        return sub_id == null;
      });

      this.math.push(a[0].mark);
      this.english.push(a[1].mark);
      this.kiswahili.push(a[2].mark);
      this.science.push(a[3].mark);
      this.ssre.push(a[4].mark);


    }
    let subjects = [];
    for (var j = 0; j < this.exam_marks[0].exam_marks.length; j++) {
      let b;
      b = _.sortBy(this.exam_marks[0].exam_marks, 'subject_name');
      if (b[j].parent_subject_id == null) {
        subjects.push(b[j].subject_name);
      }

    }


    if (this.terms != undefined || this.terms != null) {
      this.math = this.math.filter((el) => {
        return el != null;
      });
      this.english = this.english.filter((el) => {
        return el != null;
      });
      this.kiswahili = this.kiswahili.filter((el) => {
        return el != null;
      });
      this.science = this.science.filter((el) => {
        return el != null;
      });
      this.ssre = this.ssre.filter((el) => {
        return el != null;
      });
      this.bars = new Chart(this.barChart.nativeElement, {
        type: 'bar',
        data: {
          labels: type,
          datasets: [{
            label: subjects[0],
            data: this.math,
            fill: true,
            borderWidth: 2,
            backgroundColor: 'orange'
          },
          {
            label: subjects[1],
            data: this.english,
            borderWidth: 2,
            fill: true,
            backgroundColor: 'black'
          },
          {
            label: subjects[2],
            data: this.kiswahili,
            borderWidth: 2,
            backgroundColor: 'blue',
            fill: true,
          },
          {
            label: subjects[3],
            data: this.science,
            borderWidth: 2,
            backgroundColor: 'red',
            fill: true,
          }, {
            label: subjects[4],
            data: this.ssre,
            borderWidth: 2,
            backgroundColor: 'green',
            fill: true,
          }]
        },
        options: {
          title: {
            display: true,
            text: 'Analysis for ' + reportCards.class_name + ' ' + reportCards.term_name
          },
          maintainAspectRatio: false,
          // responsive: false,
          legend: {
            display: true,
            position: 'bottom'
          },
          gridLines: {
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

  //  overall
  overallChart() {
    let ovMarks = [];
    let termNames = [];
    this.labels = this.labels;
    for (let i = 0; i < this.labels.length; i++) {
      ovMarks.push(this.labels[i].overall_marks_and_grade[0].
        this_term_marks_and_grade[0].overall_mark.substr(0, 3));
      if (this.labels[i].term_name.length > 10) {
        if (this.labels[i].term_name.includes("ONE")) {
          var f;
          f = this.labels[i].term_name.replace("ONE", "1");
          termNames.push(f);
        } else if (this.labels[i].term_name.includes("TWO")) {
          var f;
          f = this.labels[i].term_name.replace("TWO", "2");
          termNames.push(f);
        } else if (this.labels[i].term_name.includes("THREE")) {
          var f;
          f = this.labels[i].term_name.replace("THREE", "3");
          termNames.push(f);
        } else {
          termNames.push(this.labels[i].term_name);
        }
      } else {
        if (this.labels[i].term_name.includes("ONE")) {
          var f;
          f = this.labels[i].term_name.replace("ONE", "1");
          termNames.push(f + ' ' + this.labels[i].year)
        } else if (this.labels[i].term_name.includes("TWO")) {
          var f;
          f = this.labels[i].term_name.replace("TWO", "2");
          termNames.push(f + ' ' + this.labels[i].year)
        } else if (this.labels[i].term_name.includes("THREE")) {
          var f;
          f = this.labels[i].term_name.replace("THREE", "3");
          termNames.push(f + ' ' + this.labels[i].year)
        } else {
          termNames.push(this.labels[i].term_name + ' ' + this.labels[i].year)
        }

      }
    }
    console.log(ovMarks);
    console.log(termNames);

    this.str_lines = new Chart(this.ovChart.nativeElement, {
      type: 'line',
      data: {
        labels: termNames,
        datasets: [{
          label: 'OVERALL MARKS',
          data: ovMarks,
          fill: true,
          borderWidth: 2,
          backgroundColor: 'rgba(57,124,73,0.3)',
          borderColor: '#397C49'
        }]
      },
      options: {
        title: {
          display: false,
          text: 'Overall performance'
        },
        maintainAspectRatio: false,
        // responsive: false,
        legend: {
          display: true,
          position: 'top'
        },
        scales: {
          yAxes: [{
            scaleLabel: {
              display: true,
              labelString: 'OVERALL MARKS',
              fontStyle: 'bold'
            },
            ticks: {
              display: true,
              beginAtZero: true,
              suggestedMax: 500,
              stepSize: 100
            }
          }],
          xAxes: [{
            scaleLabel: {
              display: true,
              labelString: 'TERMS',
              fontStyle: 'bold'
            },
            ticks: {
              display: true
            }
          }]
        }
      }
    });
  }
  onlyUnique(value, index, self) {
    return self.indexOf(value) === index;
  }

  dismisModal() {
    this.modalCtl.dismiss();
  }
}
