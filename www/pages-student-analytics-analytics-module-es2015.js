(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-student-analytics-analytics-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/analytics-modal/analytics-modal.component.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/analytics-modal/analytics-modal.component.html ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title >{{this.name}} {{this.term}} </ion-title>\n    <ion-title *ngIf=\"chartype === 1\">Overall performance analysis</ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-button (click)=\"dismisModal()\" slot=\"end\">\n        <ion-icon name=\"close-circle\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n  <canvas #barChart *ngIf=\"chartype !== 1\" style=\"width: 250px;\"></canvas>\n  <canvas #lineChart *ngIf=\"chartype === 1\" style=\"height: 250px;\"></canvas>\n</ion-content>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/student/analytics/analytics.page.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/student/analytics/analytics.page.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\" style=\"font-size: 14px;\">\n      <ion-back-button text=\"\" icon=\"chevron-back\">\n\n      </ion-back-button>ANALYTICS\n    </ion-buttons>\n    <!-- <ion-title style=\"font-size:14px;\">POSTS & HOMEWORK</ion-title> -->\n  </ion-toolbar>\n  <ion-item style=\"--background: none;\">\n    <ion-avatar slot=\"start\" *ngIf=\"assets !==1\">\n      <img src={{assets}}>\n    </ion-avatar>\n    <ion-avatar slot=\"start\" *ngIf=\"assets === 1\">\n      <ion-icon size=\"32\" style=\"font-size: 2em\" name=\"happy-outline\"></ion-icon>\n    </ion-avatar>\n    <ion-label style=\"text-transform: uppercase;\">{{student.first_name}} {{student.middle_name}} {{student.last_name}}\n    </ion-label>\n  </ion-item>\n</ion-header>\n<ion-content class=\"ion-padding\">\n  <div class=\"vertical-center\" *ngIf=\"nodata === 'true'\" >\n      <ion-item lines=\"none\" >No analytic information for this student.</ion-item>\n  </div>\n  <div *ngIf=\"report_cards.length>0\">\n    <ion-icon style=\"padding-top: 10px; color: #397C49;\" #helper size=\"medium\" name=\"information-circle\"></ion-icon><i style=\"color:#397C49;\">Click on card to view detailed analysis</i>\n    <h5>Overall performance</h5>\n    <ion-card style=\"height: 180px;\">\n      <canvas (click)=\"ovModal()\" #overallChart></canvas>\n    </ion-card>\n    \n    <ion-list>\n      <h5 style=\"margin-bottom: -5px;\">Subject performance</h5>\n      <ion-list-header>\n        <ion-button size=\"small\" style=\"color: black;\" (click)=\"hide()\">Filter <ion-icon name=\"chevron-down\">\n          </ion-icon>\n        </ion-button>\n      </ion-list-header>\n\n      <div id=\"hid\" hidden style=\"padding-left: 8px; padding-right: 8px;\">\n        <ion-item>\n          <ion-label>Class</ion-label>\n          <ion-select id=\"class\" cancelText=\"Cancel\" okText=\"Ok\" (ionChange)=\"classChange($event)\">\n            <ion-select-option value=\"all\">All</ion-select-option>\n            <div *ngFor=\"let c of class_history\">\n              <ion-select-option value=\"{{c}}\">{{c}}</ion-select-option>\n            </div>\n          </ion-select>\n        </ion-item>\n        <ion-item >\n          <ion-label>Term</ion-label>\n          <ion-select cancelText=\"Cancel\" okText=\"Ok\" (ionChange)=\"termChange($event)\">\n            <div *ngFor=\"let t of terms\">\n              <ion-select-option value=\"{{t.term_id}}\">{{t.term_name}}</ion-select-option>\n            </div>\n          </ion-select>\n        </ion-item>\n        <ion-item lines=\"none\">\n          <ion-button slot=\"end\" color=\"dark\" (click)=\"filter()\">Filter</ion-button>\n        </ion-item>\n      </div>\n    </ion-list>\n    \n    <ion-grid class=\"grid_graphs\">\n      <ion-row>\n        <ion-col size=\"6\" style=\"margin: -5px;\"  *ngFor=\"let r of report_cards; let i = index\" >\n          <div (click)=\"openModal(r)\">\n            <ion-card tooltip=\"Okay lets see\" positionV=\"bottom\">\n              <canvas #lineChart *ngIf=\"i == 0\" style=\"height: 180px; width: 200px;\"></canvas>\n              <canvas #lineChart2 *ngIf=\"i == 1\" style=\"height: 180px;\"></canvas>\n              <canvas #lineChart3 *ngIf=\"i == 2\" style=\"height: 180px;\"></canvas>\n              <!-- <apx-chart #chartObj></apx-chart> -->\n\n              <!-- <apx-chart [series]=\"series\" [chart]=\"chart\" [title]=\"title\"></apx-chart> -->\n            </ion-card> \n            <p style=\"text-align: center;\"><strong>{{r.term_name}}</strong></p>\n          </div>\n\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </div>\n\n\n</ion-content>");

/***/ }),

/***/ "./src/app/analytics-modal/analytics-modal.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/analytics-modal/analytics-modal.component.scss ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FuYWx5dGljcy1tb2RhbC9hbmFseXRpY3MtbW9kYWwuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/analytics-modal/analytics-modal.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/analytics-modal/analytics-modal.component.ts ***!
  \**************************************************************/
/*! exports provided: AnalyticsModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnalyticsModalComponent", function() { return AnalyticsModalComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! chart.js */ "./node_modules/chart.js/dist/Chart.js");
/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(chart_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var underscore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! underscore */ "./node_modules/underscore/modules/index-all.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");






let AnalyticsModalComponent = class AnalyticsModalComponent {
    constructor(modalCtl, navParams, authService) {
        this.modalCtl = modalCtl;
        this.navParams = navParams;
        this.authService = authService;
    }
    ngOnInit() {
        if (this.navParams.get('type') === 'overall') {
            this.chartype = 1;
            this.labels = this.navParams.get('reports');
            setTimeout(() => {
                this.authService.dismiss();
                this.overallChart();
            }, 2000);
        }
        else {
            this.authService.presentLoading();
            setTimeout(() => {
                this.authService.dismiss();
                this.createChart();
            }, 2000);
        }
    }
    createChart() {
        let reportCards;
        reportCards = new Array();
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
        console.log(type);
        this.math = [];
        this.english = [];
        this.kiswahili = [];
        this.science = [];
        this.ssre = [];
        for (var i = 0; i < this.exam_marks.length; i++) {
            let a;
            a = underscore__WEBPACK_IMPORTED_MODULE_4__["sortBy"](this.exam_marks[i].exam_marks, 'subject_name');
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
            b = underscore__WEBPACK_IMPORTED_MODULE_4__["sortBy"](this.exam_marks[0].exam_marks, 'subject_name');
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
            this.bars = new chart_js__WEBPACK_IMPORTED_MODULE_3__["Chart"](this.barChart.nativeElement, {
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
                                ticks: {}
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
                }
                else if (this.labels[i].term_name.includes("TWO")) {
                    var f;
                    f = this.labels[i].term_name.replace("TWO", "2");
                    termNames.push(f);
                }
                else if (this.labels[i].term_name.includes("THREE")) {
                    var f;
                    f = this.labels[i].term_name.replace("THREE", "3");
                    termNames.push(f);
                }
                else {
                    termNames.push(this.labels[i].term_name);
                }
            }
            else {
                if (this.labels[i].term_name.includes("ONE")) {
                    var f;
                    f = this.labels[i].term_name.replace("ONE", "1");
                    termNames.push(f + ' ' + this.labels[i].year);
                }
                else if (this.labels[i].term_name.includes("TWO")) {
                    var f;
                    f = this.labels[i].term_name.replace("TWO", "2");
                    termNames.push(f + ' ' + this.labels[i].year);
                }
                else if (this.labels[i].term_name.includes("THREE")) {
                    var f;
                    f = this.labels[i].term_name.replace("THREE", "3");
                    termNames.push(f + ' ' + this.labels[i].year);
                }
                else {
                    termNames.push(this.labels[i].term_name + ' ' + this.labels[i].year);
                }
            }
        }
        console.log(ovMarks);
        console.log(termNames);
        this.str_lines = new chart_js__WEBPACK_IMPORTED_MODULE_3__["Chart"](this.ovChart.nativeElement, {
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
};
AnalyticsModalComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavParams"] },
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"] }
];
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('barChart'),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], AnalyticsModalComponent.prototype, "barChart", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('lineChart'),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], AnalyticsModalComponent.prototype, "ovChart", void 0);
AnalyticsModalComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-analytics-modal',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./analytics-modal.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/analytics-modal/analytics-modal.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./analytics-modal.component.scss */ "./src/app/analytics-modal/analytics-modal.component.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavParams"],
        _services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"]])
], AnalyticsModalComponent);



/***/ }),

/***/ "./src/app/pages/student/analytics/analytics.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/pages/student/analytics/analytics.module.ts ***!
  \*************************************************************/
/*! exports provided: AnalyticsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnalyticsPageModule", function() { return AnalyticsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _analytics_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./analytics.page */ "./src/app/pages/student/analytics/analytics.page.ts");
/* harmony import */ var src_app_analytics_modal_analytics_modal_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/analytics-modal/analytics-modal.component */ "./src/app/analytics-modal/analytics-modal.component.ts");








const routes = [
    {
        path: '',
        component: _analytics_page__WEBPACK_IMPORTED_MODULE_6__["AnalyticsPage"]
    }
];
let AnalyticsPageModule = class AnalyticsPageModule {
};
AnalyticsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_analytics_page__WEBPACK_IMPORTED_MODULE_6__["AnalyticsPage"], src_app_analytics_modal_analytics_modal_component__WEBPACK_IMPORTED_MODULE_7__["AnalyticsModalComponent"]],
        entryComponents: [src_app_analytics_modal_analytics_modal_component__WEBPACK_IMPORTED_MODULE_7__["AnalyticsModalComponent"]]
    })
], AnalyticsPageModule);



/***/ }),

/***/ "./src/app/pages/student/analytics/analytics.page.scss":
/*!*************************************************************!*\
  !*** ./src/app/pages/student/analytics/analytics.page.scss ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-segment ion-label {\n  color: white;\n  text-transform: unset;\n  font-size: 12px;\n}\n\nion-segment ion-label {\n  color: white;\n  font-size: 12px;\n}\n\nion-content {\n  font-size: 12px;\n  --ion-background-color: #dddede;\n}\n\nion-content ion-col {\n  color: black;\n  font-size: 12px;\n}\n\nion-content ion-row {\n  --background: none;\n}\n\nion-content ion-list {\n  --background: none;\n}\n\nion-content ion-card {\n  --ion-background-color: #ffffff;\n  padding: 8px;\n}\n\nion-content .info {\n  color: black;\n  font-size: 12px;\n}\n\n#class {\n  max-width: 65% !important;\n}\n\nion-select {\n  width: 100%;\n  justify-content: center;\n}\n\n.center {\n  text-align: right;\n}\n\n.grid_graphs {\n  margin: -8px;\n}\n\nion-item {\n  --border-color: #fff;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9rb2tvZGF2aWQvRG93bmxvYWRzL2VwL3NyYy9hcHAvcGFnZXMvc3R1ZGVudC9hbmFseXRpY3MvYW5hbHl0aWNzLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvc3R1ZGVudC9hbmFseXRpY3MvYW5hbHl0aWNzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFSTtFQUNJLFlBQUE7RUFDQSxxQkFBQTtFQUNBLGVBQUE7QUNEUjs7QURNSTtFQUNJLFlBQUE7RUFDQSxlQUFBO0FDSFI7O0FEU0E7RUFDSSxlQUFBO0VBQ0EsK0JBQUE7QUNOSjs7QURTSTtFQUNJLFlBQUE7RUFDQSxlQUFBO0FDUFI7O0FEU0k7RUFDSSxrQkFBQTtBQ1BSOztBRFVJO0VBQ0ksa0JBQUE7QUNSUjs7QURXSTtFQUNJLCtCQUFBO0VBQ0EsWUFBQTtBQ1RSOztBRFdJO0VBQ0ksWUFBQTtFQUNBLGVBQUE7QUNUUjs7QURZQTtFQUNJLHlCQUFBO0FDVEo7O0FEV0E7RUFDSSxXQUFBO0VBQ0EsdUJBQUE7QUNSSjs7QURVQTtFQUNJLGlCQUFBO0FDUEo7O0FEYUE7RUFDSSxZQUFBO0FDVko7O0FEYUE7RUFDSSxvQkFBQTtBQ1ZKIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvc3R1ZGVudC9hbmFseXRpY3MvYW5hbHl0aWNzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1zZWdtZW50IHtcbiAgICAvL2NvbG9yOndoaXRlO1xuICAgIGlvbi1sYWJlbCB7XG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVuc2V0O1xuICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgfVxufVxuaW9uLXNlZ21lbnQge1xuICAgIC8vY29sb3I6d2hpdGU7XG4gICAgaW9uLWxhYmVsIHtcbiAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgfVxufVxuLy8gaW9uLWhlYWRlcntcbi8vICAgICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiNkZGRlZGU7XG4vLyB9XG5pb24tY29udGVudCB7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICAgIC0taW9uLWJhY2tncm91bmQtY29sb3I6ICNkZGRlZGU7XG4gICAgLy8gLS1iYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQod2hpdGUsIGdyZXkpICFpbXBvcnRhbnQ7XG5cbiAgICBpb24tY29sIHtcbiAgICAgICAgY29sb3I6IGJsYWNrO1xuICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgfVxuICAgIGlvbi1yb3cge1xuICAgICAgICAtLWJhY2tncm91bmQ6IG5vbmU7XG4gICAgfVxuXG4gICAgaW9uLWxpc3Qge1xuICAgICAgICAtLWJhY2tncm91bmQ6IG5vbmU7XG4gICAgfVxuXG4gICAgaW9uLWNhcmQge1xuICAgICAgICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xuICAgICAgICBwYWRkaW5nOiA4cHg7XG4gICAgfVxuICAgIC5pbmZvIHtcbiAgICAgICAgY29sb3I6IGJsYWNrO1xuICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgfVxufVxuI2NsYXNzIHtcbiAgICBtYXgtd2lkdGg6IDY1JSAhaW1wb3J0YW50O1xufVxuaW9uLXNlbGVjdCB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG4uY2VudGVyIHtcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICAvLyBjb2xvcjogcmdiKDEyNiwgNzAsIDcwKTtcbiAgICAvLyAvL2FsaWduLWl0ZW1zOiBmbGV4LWVuZDtcbiAgICAvLyBmb250LXNpemU6IDE2cHg7XG4gICAgLy8gZm9udC13ZWlnaHQ6IDYwMDtcbn1cbi5ncmlkX2dyYXBocyB7XG4gICAgbWFyZ2luOiAtOHB4O1xufVxuXG5pb24taXRlbSB7XG4gICAgLS1ib3JkZXItY29sb3I6ICNmZmY7XG4gICAgLy8gLS1iYWNrZ3JvdW5kOiBub25lO1xufVxuIiwiaW9uLXNlZ21lbnQgaW9uLWxhYmVsIHtcbiAgY29sb3I6IHdoaXRlO1xuICB0ZXh0LXRyYW5zZm9ybTogdW5zZXQ7XG4gIGZvbnQtc2l6ZTogMTJweDtcbn1cblxuaW9uLXNlZ21lbnQgaW9uLWxhYmVsIHtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LXNpemU6IDEycHg7XG59XG5cbmlvbi1jb250ZW50IHtcbiAgZm9udC1zaXplOiAxMnB4O1xuICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiAjZGRkZWRlO1xufVxuaW9uLWNvbnRlbnQgaW9uLWNvbCB7XG4gIGNvbG9yOiBibGFjaztcbiAgZm9udC1zaXplOiAxMnB4O1xufVxuaW9uLWNvbnRlbnQgaW9uLXJvdyB7XG4gIC0tYmFja2dyb3VuZDogbm9uZTtcbn1cbmlvbi1jb250ZW50IGlvbi1saXN0IHtcbiAgLS1iYWNrZ3JvdW5kOiBub25lO1xufVxuaW9uLWNvbnRlbnQgaW9uLWNhcmQge1xuICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xuICBwYWRkaW5nOiA4cHg7XG59XG5pb24tY29udGVudCAuaW5mbyB7XG4gIGNvbG9yOiBibGFjaztcbiAgZm9udC1zaXplOiAxMnB4O1xufVxuXG4jY2xhc3Mge1xuICBtYXgtd2lkdGg6IDY1JSAhaW1wb3J0YW50O1xufVxuXG5pb24tc2VsZWN0IHtcbiAgd2lkdGg6IDEwMCU7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4uY2VudGVyIHtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG59XG5cbi5ncmlkX2dyYXBocyB7XG4gIG1hcmdpbjogLThweDtcbn1cblxuaW9uLWl0ZW0ge1xuICAtLWJvcmRlci1jb2xvcjogI2ZmZjtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/pages/student/analytics/analytics.page.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/student/analytics/analytics.page.ts ***!
  \***********************************************************/
/*! exports provided: AnalyticsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnalyticsPage", function() { return AnalyticsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var src_app_services_session_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/session.service */ "./src/app/services/session.service.ts");
/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! chart.js */ "./node_modules/chart.js/dist/Chart.js");
/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(chart_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var underscore__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! underscore */ "./node_modules/underscore/modules/index-all.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var src_app_analytics_modal_analytics_modal_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/analytics-modal/analytics-modal.component */ "./src/app/analytics-modal/analytics-modal.component.ts");










let AnalyticsPage = class AnalyticsPage {
    constructor(authService, route, router, session, modalCtl) {
        this.authService = authService;
        this.route = route;
        this.router = router;
        this.session = session;
        this.modalCtl = modalCtl;
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
        };
    }
    ngOnInit() {
        this.authService.presentLoading();
    }
    ionViewWillEnter() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.authService.cards(this.student.school, this.student.student_id).subscribe(cards => {
                this.data = cards;
                this.labels = underscore__WEBPACK_IMPORTED_MODULE_7__["sortBy"](this.data.data, 'term_id');
                var n = [];
                for (var i = 0; i < this.labels.length; i++) {
                    n = this.labels[i].exam_marks;
                }
                if (this.labels == undefined || this.labels.length === 0 || n === null) {
                    this.nodata = 'true';
                    this.authService.dismiss();
                }
                else {
                    this.nodata = 'false';
                    this.report_cards = this.labels.reverse();
                    console.log(this.report_cards);
                    //display latest cards only
                    if (this.report_cards[0].year === '2020') {
                        this.sort = 1;
                        this.report_cards = this.report_cards.filter((x) => {
                            return x.year == '2020';
                        });
                    }
                    else if (this.report_cards[0].year === '2019') {
                        this.sort = 0;
                        this.report_cards = this.report_cards.filter((y) => {
                            return y.year == '2019';
                        });
                    }
                    else if (this.report_cards[0].year === '2018') {
                        this.sort = 0;
                        this.report_cards = this.report_cards.filter((y) => {
                            return y.year == '2018';
                        });
                    }
                    else {
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
            yield this.authService.schoolTerm(this.student.school, this.student.student_id).subscribe(school_terms => {
                this.data = school_terms;
                this.terms = this.data.data;
                this.class_history = this.terms.map(item => item.class_name).filter((value, index, self) => self.indexOf(value) === index);
            });
        });
    }
    //onclick
    reportData(report) {
        const navigationExtras = {
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
            this.hidden = false;
        }
        else {
            document.getElementById('hid').hidden = true;
            this.hidden = true;
            this.report_cards = this.labels.reverse();
            if (this.report_cards[0].year === '2020') {
                this.sort = 1;
                this.report_cards = this.report_cards.filter((params) => {
                    return params.year == '2020';
                });
            }
            else {
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
        }
        else {
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
        console.log(this.pos);
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
            let type1 = [];
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
                a = underscore__WEBPACK_IMPORTED_MODULE_7__["sortBy"](term1[i].exam_marks, 'subject_name');
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
                b = underscore__WEBPACK_IMPORTED_MODULE_7__["sortBy"](term1[0].exam_marks, 'subject_name');
                if (b[n].parent_subject_id == null) {
                    subjects.push(b[n].subject_name);
                }
            }
            this.bars = new chart_js__WEBPACK_IMPORTED_MODULE_6__["Chart"](this.lineChart.nativeElement, {
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
        }
        else {
            for (var i = 0; i < this.report_cards.length; i++) {
                // this.exam_marks = this.report_cards[i].exam_marks === undefined ? [] : this.report_cards[i].exam_marks;
                this.exam_marks.push(this.report_cards[i].exam_marks);
            }
            let term1 = this.exam_marks[0];
            let term2 = this.exam_marks[1];
            let term3 = this.exam_marks[2];
            console.log(term1[0].exam_marks);
            //subjects
            let subjects = [];
            for (var n = 0; n < term1[0].exam_marks.length; n++) {
                let b;
                b = underscore__WEBPACK_IMPORTED_MODULE_7__["sortBy"](term1[0].exam_marks, 'subject_name');
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
                a = underscore__WEBPACK_IMPORTED_MODULE_7__["sortBy"](term1[i].exam_marks, 'subject_name');
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
            this.bars = new chart_js__WEBPACK_IMPORTED_MODULE_6__["Chart"](this.lineChart.nativeElement, {
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
                    a = underscore__WEBPACK_IMPORTED_MODULE_7__["sortBy"](term2[i].exam_marks, 'subject_name');
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
                        a = underscore__WEBPACK_IMPORTED_MODULE_7__["sortBy"](term3[i].exam_marks, 'subject_name');
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
                this.lines = new chart_js__WEBPACK_IMPORTED_MODULE_6__["Chart"](this.lineChart2.nativeElement, {
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
                this.pies = new chart_js__WEBPACK_IMPORTED_MODULE_6__["Chart"](this.lineChart3.nativeElement, {
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
        this.labels = underscore__WEBPACK_IMPORTED_MODULE_7__["sortBy"](this.labels, 'term_id');
        for (let i = 0; i < this.labels.length; i++) {
            ovMarks.push(this.labels[i].overall_marks_and_grade[0].
                this_term_marks_and_grade[0].overall_mark.substr(0, 3));
            termNames.push(this.labels[i].term_name);
        }
        console.log(ovMarks);
        console.log(termNames);
        this.str_lines = new chart_js__WEBPACK_IMPORTED_MODULE_6__["Chart"](this.ovChart.nativeElement, {
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
    openModal(r) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const modal = yield this.modalCtl.create({
                component: src_app_analytics_modal_analytics_modal_component__WEBPACK_IMPORTED_MODULE_9__["AnalyticsModalComponent"],
                cssClass: 'modal-css',
                componentProps: {
                    reports: r
                }
            });
            yield modal.present();
        });
    }
    ovModal() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const modal = yield this.modalCtl.create({
                component: src_app_analytics_modal_analytics_modal_component__WEBPACK_IMPORTED_MODULE_9__["AnalyticsModalComponent"],
                cssClass: 'modal-css',
                componentProps: {
                    reports: this.labels,
                    type: 'overall'
                }
            });
            yield modal.present();
        });
    }
    onlyUnique(value, index, self) {
        return self.indexOf(value) === index;
    }
    format(date) {
        return moment__WEBPACK_IMPORTED_MODULE_4__(date).format('DD-MM-YYYY');
    }
};
AnalyticsPage.ctorParameters = () => [
    { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: src_app_services_session_service__WEBPACK_IMPORTED_MODULE_5__["SessionService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["ModalController"] }
];
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('lineChart'),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], AnalyticsPage.prototype, "lineChart", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('lineChart2'),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], AnalyticsPage.prototype, "lineChart2", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('lineChart3'),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], AnalyticsPage.prototype, "lineChart3", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('overallChart'),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], AnalyticsPage.prototype, "ovChart", void 0);
AnalyticsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-analytics',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./analytics.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/student/analytics/analytics.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./analytics.page.scss */ "./src/app/pages/student/analytics/analytics.page.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
        src_app_services_session_service__WEBPACK_IMPORTED_MODULE_5__["SessionService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["ModalController"]])
], AnalyticsPage);



/***/ })

}]);
//# sourceMappingURL=pages-student-analytics-analytics-module-es2015.js.map