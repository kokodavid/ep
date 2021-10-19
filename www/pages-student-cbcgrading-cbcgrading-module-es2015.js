(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-student-cbcgrading-cbcgrading-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/student/cbcgrading/cbcgrading.page.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/student/cbcgrading/cbcgrading.page.html ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\" style=\"font-size: 14px;\">\n      <ion-back-button text=\"\" icon=\"chevron-back\"></ion-back-button>CBC GRADES\n    </ion-buttons>\n    <!-- <ion-title style=\"font-size:14px;\">EXAMS & GRADES</ion-title> -->\n  </ion-toolbar>\n  <ion-item>\n    <ion-avatar slot=\"start\" *ngIf=\"assets !==1\">\n      <img src={{assets}}>\n    </ion-avatar>\n    <ion-avatar slot=\"start\" *ngIf=\"assets === 1\">\n      <ion-icon size=\"32\" style=\"font-size: 2em\" name=\"happy-outline\"></ion-icon>\n    </ion-avatar>\n    <ion-label style=\"text-transform: uppercase;\">{{student.first_name}} {{student.middle_name}} {{student.last_name}}\n    </ion-label>\n  </ion-item>\n\n</ion-header>\n<ion-content>\n\n  <div>\n    <ion-list-header>\n      <ion-button size=\"small\" style=\"color: black;\" disabled (click)=\"hide()\">Filter <ion-icon name=\"chevron-down\">\n        </ion-icon>\n      </ion-button>\n    </ion-list-header>\n    <div id=\"hid\" hidden style=\"padding-left: 8px; padding-right: 8px;\">\n      <ion-item>\n        <ion-label>Class</ion-label>\n        <ion-select id=\"class\" cancelText=\"Cancel\" okText=\"Ok\" (ionChange)=\"classExamChange($event)\">\n          <div *ngFor=\"let c of class_history\">\n            <ion-select-option value=\"{{c}}\">{{c}}</ion-select-option>\n          </div>\n\n        </ion-select>\n      </ion-item>\n      <ion-item>\n        <ion-label>Term</ion-label>\n        <ion-select cancelText=\"Cancel\" okText=\"Ok\" (ionChange)=\"termExamChange($event)\">\n          <div *ngFor=\"let t of terms\">\n            <ion-select-option value=\"{{t.term_name}}\">{{t.term_name}}</ion-select-option>\n          </div>\n        </ion-select>\n      </ion-item>\n      <ion-item lines=\"none\">\n        <ion-button slot=\"end\" color=\"dark\" (click)=\"filterExam()\">Filter</ion-button>\n      </ion-item>\n    </div>\n    <ion-list *ngIf=\"cbc_reports.length === 0 && fake === 1\">\n      <br>\n      <ion-spinner name=\"lines-small\" style=\"text-align: center; margin-left: 50%; margin-right: 50%;\" color=\"primary\">\n      </ion-spinner>\n    </ion-list>\n    <ion-list *ngIf=\"cbc_reports.length === 0 && fake === 0\">\n      <ion-item>No cbc report cards for this student</ion-item>\n    </ion-list>\n\n    <div *ngIf=\"cbc_reports.length > 0\">\n      <div *ngFor=\"let cbc of cbc_reports; let i = index\">\n        <div>\n          <ion-item (click)=\"cbcClick(cbc)\" style=\"margin: 0px !important;\">\n            <ion-col col-7 style=\" color: green; font-size: 12px; font-weight:500;\"><strong>Class Name</strong> <br>\n              {{cbc.class_name}}\n\n            </ion-col>\n            <ion-col col-3 style=\"text-align: center !important;\"><strong>Term</strong> <br> {{cbc.term_name}}</ion-col>\n            <ion-col col-3 style=\"text-align: center !important;\"><strong>Exam</strong> <br> {{cbc.exam_type}}</ion-col>\n\n          </ion-item>\n        </div>\n      </div>\n    </div>\n\n  </div>\n\n\n  <ion-fab *ngIf=\"feedback === 'true'\" vertical=\"bottom\" (click)=\"addfeed()\" horizontal=\"end\" slot=\"fixed\">\n    <ion-fab-button color=\"tertiary\">\n      <ion-icon name=\"chatbox-ellipses\"></ion-icon>\n    </ion-fab-button>\n  </ion-fab>\n\n</ion-content>");

/***/ }),

/***/ "./src/app/pages/student/cbcgrading/cbcgrading.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/pages/student/cbcgrading/cbcgrading.module.ts ***!
  \***************************************************************/
/*! exports provided: CbcGradingPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CbcGradingPageModule", function() { return CbcGradingPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _cbcgrading_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./cbcgrading.page */ "./src/app/pages/student/cbcgrading/cbcgrading.page.ts");







const routes = [
    {
        path: '',
        component: _cbcgrading_page__WEBPACK_IMPORTED_MODULE_6__["CbcGradingPage"]
    }
];
let CbcGradingPageModule = class CbcGradingPageModule {
};
CbcGradingPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_cbcgrading_page__WEBPACK_IMPORTED_MODULE_6__["CbcGradingPage"]]
    })
], CbcGradingPageModule);



/***/ }),

/***/ "./src/app/pages/student/cbcgrading/cbcgrading.page.scss":
/*!***************************************************************!*\
  !*** ./src/app/pages/student/cbcgrading/cbcgrading.page.scss ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-segment ion-label {\n  color: white;\n  text-transform: unset;\n  font-size: 12px;\n}\n\nion-segment ion-label {\n  color: white;\n  font-size: 12px;\n}\n\nion-content {\n  font-size: 12px;\n}\n\nion-content ion-col {\n  color: black;\n  font-size: 12px;\n}\n\nion-content .info {\n  color: black;\n  font-size: 12px;\n}\n\n#class {\n  max-width: 65% !important;\n}\n\nion-select {\n  width: 100%;\n  justify-content: center;\n}\n\n.center {\n  text-align: right;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9rb2tvZGF2aWQvRG93bmxvYWRzL2VwL3NyYy9hcHAvcGFnZXMvc3R1ZGVudC9jYmNncmFkaW5nL2NiY2dyYWRpbmcucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9zdHVkZW50L2NiY2dyYWRpbmcvY2JjZ3JhZGluZy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUk7RUFDSSxZQUFBO0VBQ0EscUJBQUE7RUFDQSxlQUFBO0FDRFI7O0FETUk7RUFDSSxZQUFBO0VBQ0EsZUFBQTtBQ0hSOztBRE1BO0VBQ0ksZUFBQTtBQ0hKOztBRElJO0VBQ0ksWUFBQTtFQUNBLGVBQUE7QUNGUjs7QURJSTtFQUNJLFlBQUE7RUFDQSxlQUFBO0FDRlI7O0FETUE7RUFDSSx5QkFBQTtBQ0hKOztBRE1BO0VBQ0ksV0FBQTtFQUNBLHVCQUFBO0FDSEo7O0FES0E7RUFDSSxpQkFBQTtBQ0ZKIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvc3R1ZGVudC9jYmNncmFkaW5nL2NiY2dyYWRpbmcucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLXNlZ21lbnR7XG4gICAgLy9jb2xvcjp3aGl0ZTtcbiAgICBpb24tbGFiZWx7XG4gICAgICAgIGNvbG9yOndoaXRlO1xuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdW5zZXQ7XG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICB9XG59XG5pb24tc2VnbWVudHtcbiAgICAvL2NvbG9yOndoaXRlO1xuICAgIGlvbi1sYWJlbHtcbiAgICAgICAgY29sb3I6d2hpdGU7XG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICB9XG59XG5pb24tY29udGVudHtcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgaW9uLWNvbHtcbiAgICAgICAgY29sb3I6YmxhY2s7XG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICB9XG4gICAgLmluZm97XG4gICAgICAgIGNvbG9yOmJsYWNrO1xuICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgfVxuXG59XG4jY2xhc3N7XG4gICAgbWF4LXdpZHRoOiA2NSUgIWltcG9ydGFudDtcblxufVxuaW9uLXNlbGVjdCB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIH1cbi5jZW50ZXJ7XG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgLy8gY29sb3I6IHJnYigxMjYsIDcwLCA3MCk7XG4gICAgLy8gLy9hbGlnbi1pdGVtczogZmxleC1lbmQ7XG4gICAgLy8gZm9udC1zaXplOiAxNnB4O1xuICAgIC8vIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgXG59XG5cbiIsImlvbi1zZWdtZW50IGlvbi1sYWJlbCB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgdGV4dC10cmFuc2Zvcm06IHVuc2V0O1xuICBmb250LXNpemU6IDEycHg7XG59XG5cbmlvbi1zZWdtZW50IGlvbi1sYWJlbCB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC1zaXplOiAxMnB4O1xufVxuXG5pb24tY29udGVudCB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbn1cbmlvbi1jb250ZW50IGlvbi1jb2wge1xuICBjb2xvcjogYmxhY2s7XG4gIGZvbnQtc2l6ZTogMTJweDtcbn1cbmlvbi1jb250ZW50IC5pbmZvIHtcbiAgY29sb3I6IGJsYWNrO1xuICBmb250LXNpemU6IDEycHg7XG59XG5cbiNjbGFzcyB7XG4gIG1heC13aWR0aDogNjUlICFpbXBvcnRhbnQ7XG59XG5cbmlvbi1zZWxlY3Qge1xuICB3aWR0aDogMTAwJTtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5jZW50ZXIge1xuICB0ZXh0LWFsaWduOiByaWdodDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/pages/student/cbcgrading/cbcgrading.page.ts":
/*!*************************************************************!*\
  !*** ./src/app/pages/student/cbcgrading/cbcgrading.page.ts ***!
  \*************************************************************/
/*! exports provided: CbcGradingPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CbcGradingPage", function() { return CbcGradingPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ionic_native_file_opener_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/file-opener/ngx */ "./node_modules/@ionic-native/file-opener/__ivy_ngcc__/ngx/index.js");
/* harmony import */ var _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/in-app-browser/ngx */ "./node_modules/@ionic-native/in-app-browser/__ivy_ngcc__/ngx/index.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/file-transfer/ngx */ "./node_modules/@ionic-native/file-transfer/__ivy_ngcc__/ngx/index.js");
/* harmony import */ var _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic-native/file/ngx */ "./node_modules/@ionic-native/file/__ivy_ngcc__/ngx/index.js");
/* harmony import */ var _ionic_native_spinner_dialog_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic-native/spinner-dialog/ngx */ "./node_modules/@ionic-native/spinner-dialog/__ivy_ngcc__/ngx/index.js");
/* harmony import */ var src_app_services_session_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/services/session.service */ "./src/app/services/session.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var src_app_services_env_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/services/env.service */ "./src/app/services/env.service.ts");
/* harmony import */ var src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/services/alert.service */ "./src/app/services/alert.service.ts");
/* harmony import */ var underscore__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! underscore */ "./node_modules/underscore/modules/index-all.js");















let CbcGradingPage = class CbcGradingPage {
    constructor(transfer, spinnerDialog, file, iab, authService, route, fileOpener, router, http, env, alertService, session) {
        this.transfer = transfer;
        this.spinnerDialog = spinnerDialog;
        this.file = file;
        this.iab = iab;
        this.authService = authService;
        this.route = route;
        this.fileOpener = fileOpener;
        this.router = router;
        this.http = http;
        this.env = env;
        this.alertService = alertService;
        this.session = session;
        this.hidden = true;
        this.options = {
            location: 'yes',
            hidden: 'no',
            clearcache: 'yes',
            clearsessioncache: 'yes',
            zoom: 'yes',
            hardwareback: 'yes',
            mediaPlaybackRequiresUserAction: 'no',
            shouldPauseOnSuspend: 'no',
            closebuttoncaption: 'Close',
            disallowoverscroll: 'no',
            toolbar: 'yes',
            enableViewportScale: 'no',
            allowInlineMediaPlayback: 'no',
            presentationstyle: 'pagesheet',
            fullscreen: 'yes',
        };
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
                console.log(this.student);
                // this.report_cards = this.router.getCurrentNavigation().extras.state.reports;
                this.term_id = this.router.getCurrentNavigation().extras.state.tids;
                this.assets = this.student.student_image === null ? 1 :
                    `https://${this.student.school}.eduweb.co.ke/assets/students/${this.student.student_image}`;
                this.url = `https://${this.student.school}.eduweb.co.ke/assets/students/`;
                this.cdn = `https://${this.student.school}.eduweb.co.ke/assets/reportcards/${this.student.school}/`;
            }
            this.session.sessionTimeOut();
        });
        this.segment = 'reports';
    }
    ngOnInit() {
    }
    ionViewWillEnter() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.authService.checkFeed().then(feed => {
                this.feedback = feed;
            });
            yield this.authService.getSchool(this.student.school).subscribe(school => {
                this.data5 = school;
                this.schoolInfo = this.data5.data;
                this.schoolInfo.forEach(element => {
                    if (element.name == 'School Level') {
                        this.schoolLevel = element.value;
                    }
                });
            });
            setTimeout(() => {
                if (this.schoolLevel === 'Secondary') {
                    this.authService.highCards(this.student.school, this.student.student_id).subscribe(cards => {
                        this.data = cards;
                        console.log(this.data);
                        this.report_cards = this.data.data === undefined ? [] : this.data.data;
                        this.report_cards = underscore__WEBPACK_IMPORTED_MODULE_14__["sortBy"](this.report_cards, 'term_id').reverse();
                    });
                }
                else if (this.schoolLevel === 'Primary') {
                    this.authService.cards(this.student.school, this.student.student_id).subscribe(cards => {
                        this.data = cards;
                        this.report_cards = this.data.data === undefined ? [] : this.data.data;
                        this.report_cards = underscore__WEBPACK_IMPORTED_MODULE_14__["sortBy"](this.report_cards, 'term_id').reverse();
                    });
                }
            }, 3000);
            yield this.authService.currentTerm(this.student.school).subscribe(terms => {
                this.data2 = terms;
                this.term = this.data2.data;
            });
            yield this.authService.schoolTerm(this.student.school, this.student.student_id).subscribe(school_terms => {
                console.log("schoool terms>> " + JSON.stringify(school_terms));
                this.term_data = school_terms;
                this.terms = this.term_data.data;
                this.ter_id = this.terms[0].term_id;
                this.class_history = this.terms.map(item => item.class_name).filter((value, index, self) => self.indexOf(value) === index);
                console.log(JSON.stringify(this.class_history));
                this.class_id = this.terms[0].class_id;
                this.exam_mark_header = this.terms[0].class_name + this.terms[0].term_name;
            });
            yield this.authService.examsTypes(this.student.school, this.student.class_cat_id).subscribe(types => {
                this.data1 = types;
                if (this.data1.nodata) {
                    this.types = [];
                }
                else {
                    this.types = this.data1.data;
                }
            });
            this.cbcreports();
        });
    }
    view1(file) {
        let target = '_blank';
        this.iab.create(file, target, this.options);
    }
    cbcreports() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            //TODO: hit endpoint
            yield this.authService.cbcreport(this.student.school, this.student.student_id).subscribe(cbcreports => {
                this.cbcdata = cbcreports;
                this.cbc_reports = this.cbcdata.data == undefined ? [] : this.cbcdata.data;
            });
        });
    }
    calChange() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            var data;
            var changeTermId = this.terms[1].term_id;
            var changeClassId = this.terms[1].class_id;
            yield this.authService.exams(this.student.school, changeClassId, this.student.student_id, changeTermId).subscribe(exams => {
                data = exams;
                var examMarks = data.data === undefined ? [] : data.data;
                this.changes = examMarks;
            });
        });
    }
    onlyUnique(value, index, self) {
        return self.indexOf(value) === index;
    }
    assessment() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.authService.assessment(this.student.school, this.student.student_id).subscribe(assessments => {
                // console.log(homeworks.data);
                this.data4 = assessments;
                if (this.data4.nodata) {
                    this.assessments = [];
                }
                else {
                    const data1 = this.data4.data === undefined ? [] : this.data4.data;
                    data1.sort((a, b) => (a.term_id < b.term_id) ? 1 : -1);
                    const data = data1;
                    this.assessments = data;
                }
                // console.log(JSON.stringify(this.assessments));
            });
        });
    }
    cbcClick(cbc) {
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
        }
        else {
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
        console.log(this.terms);
        //filter terms to have only those of selected class
        this.terms = this.terms.filter(t => {
            var class_name;
            class_name = t.class_name;
            if (class_name === value) {
                this.class_id = t.class_id;
                return t.class_id == this.class_id;
            }
        });
        console.log(this.class_id);
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
    filterExam() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.authService.presentLoading();
            this.examdata = [];
            this.exam_mark_header = "";
            yield this.authService.exams(this.student.school, this.class_id, this.student.student_id, this.ter_id).subscribe(exams => {
                this.data1 = exams;
                if (this.data1.nodata) {
                    this.alertService.presentToast("No exam marks for term selected");
                    this.cbc_reports = [];
                    this.authService.dismiss();
                }
                else {
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
                        console.log;
                        const ty = el;
                        let x = [];
                        let c = [];
                        var m, k;
                        for (var i = 0; i < this.exams.length; i++) {
                            if (this.exams[i].exam_type === el) {
                                k = this.exams[i - 1] === undefined ? 0 : this.exams[i - 1].mark;
                                m = this.exams[i].mark - k;
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
            });
            this.exam_mark_header = this.header_one + ' ' + this.header_two;
        });
    }
    // hide
    hide() {
        if (this.hidden == true) {
            document.getElementById('hid').hidden = false;
            this.hidden = false;
        }
        else {
            document.getElementById('hid').hidden = true;
            this.hidden = true;
            this.report_cards = this.data.data === undefined ? [] : this.data.data;
        }
    }
    //prepare document for download
    prepare(sid) {
        var file_name;
        if (this.student.middle_name != null) {
            file_name = this.student.student_id + '_' + this.student.school + '_' + this.student.first_name + '_' + this.student.middle_name + '_' + this.student.last_name + '_' + sid + '.pdf';
        }
        else {
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
        };
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
    download(fileName, filePath) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.authService.presentLoading();
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
        });
    }
    //add feed
    addfeed() {
        const navigationExtras = {};
        this.router.navigate(['feedback'], navigationExtras);
    }
    format(date) {
        return moment__WEBPACK_IMPORTED_MODULE_6__(date).format('DD-MM-YYYY');
    }
};
CbcGradingPage.ctorParameters = () => [
    { type: _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_7__["FileTransfer"] },
    { type: _ionic_native_spinner_dialog_ngx__WEBPACK_IMPORTED_MODULE_9__["SpinnerDialog"] },
    { type: _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_8__["File"] },
    { type: _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_5__["InAppBrowser"] },
    { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _ionic_native_file_opener_ngx__WEBPACK_IMPORTED_MODULE_4__["FileOpener"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HttpClient"] },
    { type: src_app_services_env_service__WEBPACK_IMPORTED_MODULE_12__["EnvService"] },
    { type: src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_13__["AlertService"] },
    { type: src_app_services_session_service__WEBPACK_IMPORTED_MODULE_10__["SessionService"] }
];
CbcGradingPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-cbcgrading',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./cbcgrading.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/student/cbcgrading/cbcgrading.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./cbcgrading.page.scss */ "./src/app/pages/student/cbcgrading/cbcgrading.page.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_7__["FileTransfer"],
        _ionic_native_spinner_dialog_ngx__WEBPACK_IMPORTED_MODULE_9__["SpinnerDialog"],
        _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_8__["File"],
        _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_5__["InAppBrowser"],
        src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
        _ionic_native_file_opener_ngx__WEBPACK_IMPORTED_MODULE_4__["FileOpener"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HttpClient"],
        src_app_services_env_service__WEBPACK_IMPORTED_MODULE_12__["EnvService"],
        src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_13__["AlertService"],
        src_app_services_session_service__WEBPACK_IMPORTED_MODULE_10__["SessionService"]])
], CbcGradingPage);



/***/ })

}]);
//# sourceMappingURL=pages-student-cbcgrading-cbcgrading-module-es2015.js.map