function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-reports-analysis-analysis-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/reports/analysis/analysis.page.html":
  /*!*************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/reports/analysis/analysis.page.html ***!
    \*************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesReportsAnalysisAnalysisPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\" style=\"font-size: 14px;\">\n      <ion-back-button text=\"\" icon=\"chevron-back\"></ion-back-button>Analysis for {{this.reportCards.term_name}}\n    </ion-buttons>\n    <!-- <ion-title style=\"text-transform: uppercase\">Report Card</ion-title> -->\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <canvas #barChart style=\"height: 250px;\"></canvas>\n</ion-content>";
    /***/
  },

  /***/
  "./src/app/pages/reports/analysis/analysis.module.ts":
  /*!***********************************************************!*\
    !*** ./src/app/pages/reports/analysis/analysis.module.ts ***!
    \***********************************************************/

  /*! exports provided: AnalysisPageModule */

  /***/
  function srcAppPagesReportsAnalysisAnalysisModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AnalysisPageModule", function () {
      return AnalysisPageModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _analysis_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./analysis.page */
    "./src/app/pages/reports/analysis/analysis.page.ts");

    var routes = [{
      path: '',
      component: _analysis_page__WEBPACK_IMPORTED_MODULE_6__["AnalysisPage"]
    }];

    var AnalysisPageModule = function AnalysisPageModule() {
      _classCallCheck(this, AnalysisPageModule);
    };

    AnalysisPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)],
      declarations: [_analysis_page__WEBPACK_IMPORTED_MODULE_6__["AnalysisPage"]]
    })], AnalysisPageModule);
    /***/
  },

  /***/
  "./src/app/pages/reports/analysis/analysis.page.scss":
  /*!***********************************************************!*\
    !*** ./src/app/pages/reports/analysis/analysis.page.scss ***!
    \***********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesReportsAnalysisAnalysisPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3JlcG9ydHMvYW5hbHlzaXMvYW5hbHlzaXMucGFnZS5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/pages/reports/analysis/analysis.page.ts":
  /*!*********************************************************!*\
    !*** ./src/app/pages/reports/analysis/analysis.page.ts ***!
    \*********************************************************/

  /*! exports provided: AnalysisPage */

  /***/
  function srcAppPagesReportsAnalysisAnalysisPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AnalysisPage", function () {
      return AnalysisPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/services/auth.service */
    "./src/app/services/auth.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var chart_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! chart.js */
    "./node_modules/chart.js/dist/Chart.js");
    /* harmony import */


    var chart_js__WEBPACK_IMPORTED_MODULE_4___default =
    /*#__PURE__*/
    __webpack_require__.n(chart_js__WEBPACK_IMPORTED_MODULE_4__);
    /* harmony import */


    var underscore__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! underscore */
    "./node_modules/underscore/modules/index-all.js");

    var AnalysisPage =
    /*#__PURE__*/
    function () {
      function AnalysisPage(authService, route, router) {
        var _this = this;

        _classCallCheck(this, AnalysisPage);

        this.authService = authService;
        this.route = route;
        this.router = router;
        this.reportCards = new Array();
        this.exam_marks = new Array();
        this.route.queryParams.subscribe(function (params) {
          if (_this.router.getCurrentNavigation().extras.state) {
            _this.student = _this.router.getCurrentNavigation().extras.state.details;
            _this.reportCards = _this.router.getCurrentNavigation().extras.state.reports;
            _this.exam_marks = _this.reportCards.exam_marks === undefined ? [] : _this.reportCards.exam_marks;
          }
        });
      }

      _createClass(AnalysisPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "ionViewWillEnter",
        value: function ionViewWillEnter() {
          this.labels = this.reportCards;
          var subray = new Array();
          subray = this.labels.subjects_column;
          this.subjects = []; //subject names
          // for (var x = 0; x < subray.length; x++) {
          //   if (subray[x].parent_subject_id == null) {
          //     this.subjects.push(subray[x].subject_name);
          //   }
          // }

          this.createChart();
        }
      }, {
        key: "createChart",
        value: function createChart() {
          this.terms = [];
          this.type = []; //exam types

          for (var h = 0; h < this.reportCards.exam_marks.length; h++) {
            this.type.push(this.reportCards.exam_marks[h].exam_type);
          }

          this.math = [];
          this.english = [];
          this.kiswahli = [];
          this.science = [];
          this.ssre = []; // tslint:disable-next-line:prefer-for-of

          for (var i = 0; i < this.exam_marks.length; i++) {
            var a = void 0;
            a = underscore__WEBPACK_IMPORTED_MODULE_5__["sortBy"](this.exam_marks[i].exam_marks, 'subject_name');
            this.math.push(a[2].mark);
            this.english.push(a[4].mark);
            this.kiswahli.push(a[7].mark);
            this.science.push(a[8].mark);
            this.ssre.push(a[10].mark);
            console.log(a);
          }

          for (var j = 0; j < this.exam_marks[0].exam_marks.length; j++) {
            var b = void 0;
            b = underscore__WEBPACK_IMPORTED_MODULE_5__["sortBy"](this.exam_marks[0].exam_marks, 'subject_name');

            if (b[j].parent_subject_id == null) {
              this.subjects.push(b[j].subject_name);
            }
          }

          if (this.terms != undefined || this.terms != null) {
            this.bars = new chart_js__WEBPACK_IMPORTED_MODULE_4__["Chart"](this.barChart.nativeElement, {
              type: 'line',
              data: {
                labels: this.type,
                datasets: [{
                  label: this.subjects[0],
                  data: this.math,
                  fill: false,
                  borderWidth: 2,
                  borderColor: 'orange'
                }, {
                  label: this.subjects[1],
                  data: this.english,
                  borderWidth: 2,
                  fill: false,
                  borderColor: 'black'
                }, {
                  label: this.subjects[2],
                  data: this.kiswahli,
                  borderWidth: 2,
                  borderColor: 'blue',
                  fill: false
                }, {
                  label: this.subjects[3],
                  data: this.science,
                  borderWidth: 2,
                  borderColor: 'red',
                  fill: false
                }, {
                  label: this.subjects[4],
                  data: this.ssre,
                  borderWidth: 2,
                  borderColor: 'green',
                  fill: false
                }]
              },
              options: {
                title: {
                  display: true,
                  text: 'Analysis for ' + this.reportCards.class_name + ' ' + this.reportCards.term_name
                },
                maintainAspectRatio: false,
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
                      suggestedMax: 100
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
      }, {
        key: "subChart",
        value: function subChart() {
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
            this.ssre.push(this.labels[j].subject_overalls_column[0].subject_overalls[4].average); // console.log(this.labels[j].subject_overalls_column[0].subject_overalls[0].average);
          }

          if (this.terms != undefined || this.terms != null) {
            this.bars = new chart_js__WEBPACK_IMPORTED_MODULE_4__["Chart"](this.lineChart.nativeElement, {
              type: 'line',
              data: {
                labels: this.terms,
                datasets: [{
                  label: this.subjects[0],
                  data: this.math,
                  fill: false,
                  borderWidth: 1,
                  borderColor: 'grey'
                }, {
                  label: this.subjects[1],
                  data: this.english,
                  borderWidth: 1,
                  fill: false,
                  borderColor: 'black'
                }, {
                  label: this.subjects[2],
                  data: this.kiswahli,
                  borderWidth: 1,
                  borderColor: 'blue',
                  fill: false
                }, {
                  label: this.subjects[3],
                  data: this.science,
                  borderWidth: 1,
                  borderColor: 'red',
                  fill: false
                }, {
                  label: this.subjects[4],
                  data: this.ssre,
                  borderWidth: 1,
                  borderColor: 'green',
                  fill: false
                }]
              },
              options: {
                scales: {
                  yAxes: [{
                    ticks: {
                      beginAtZero: true,
                      suggestedMax: 100
                    }
                  }]
                }
              }
            });
          }
        }
      }, {
        key: "onlyUnique",
        value: function onlyUnique(value, index, self) {
          return self.indexOf(value) === index;
        }
      }]);

      return AnalysisPage;
    }();

    AnalysisPage.ctorParameters = function () {
      return [{
        type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('barChart'), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], AnalysisPage.prototype, "barChart", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('lineChart'), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], AnalysisPage.prototype, "lineChart", void 0);
    AnalysisPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-analysis',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./analysis.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/reports/analysis/analysis.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./analysis.page.scss */
      "./src/app/pages/reports/analysis/analysis.page.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])], AnalysisPage);
    /***/
  }
}]);
//# sourceMappingURL=pages-reports-analysis-analysis-module-es5.js.map