(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-student-attendance-attendance-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/student/attendance/attendance.page.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/student/attendance/attendance.page.html ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n    <ion-toolbar color=\"primary\">\n        <ion-buttons slot=\"start\" style=\"font-size: 14px;\">\n            <ion-back-button text=\"\" icon=\"chevron-back\">\n            </ion-back-button>\n            <div style=\"text-transform: uppercase;\"> attendance</div>\n        </ion-buttons>\n    </ion-toolbar>\n\n    <ion-segment (ionChange)=\"segmentChanged($event)\" [(ngModel)]=\"segment\" value=\"absenteeism\" mode=\"md\">\n        <ion-segment-button value=\"absenteeism\">\n            <ion-label style=\"color: white !important;\">Absenteeism</ion-label>\n        </ion-segment-button>\n        <ion-segment-button value=\"attendance\">\n            <ion-label style=\"color: white !important;\">Attendance</ion-label>\n        </ion-segment-button>\n    </ion-segment>\n</ion-header>\n<ion-content [scrollEvents]=\"true\" overflow-scroll=\"true\">\n    <div [ngSwitch]=\"segment\">\n        <div *ngSwitchCase=\"'absenteeism'\">\n            <div style=\"background-color: white; margin: 10px; padding: 10px; border-radius: 5px;\">\n                <h4>Report Absenteeism</h4>\n                <p class=\"text\">Select the child/children and reason for absenteeism and enter the specific date\n                    or\n                    date range\n                    the student(s) will be absent.</p>\n\n                <form #absentForm=\"ngForm\" (ngSubmit)=\"reportAbsent(absentForm)\" method=\"post\">\n                    <ion-item lines=\"none\">\n                        <ion-label name=\"students\" position=\"stacked\" style=\"margin-bottom: 5px;\">Student(s)\n                            <ion-icon small name=\"people\"></ion-icon>\n                        </ion-label>\n\n                        <ion-input value={{this.student}} [readonly]=\"isReadonly()\"></ion-input>\n                    </ion-item>\n                    <ion-item lines=\"none\" class=\"no-ripple\">\n                        <ion-label position=\"stacked\" style=\"margin-bottom: 5px;\">Reason <ion-icon small\n                                name=\"help-circle\"></ion-icon>\n                        </ion-label>\n                        <ion-select ngModel name=\"reason\" (ionChange)=\"reasonChange($event)\">\n                            <ion-select-option value=\"Travel\">Travel</ion-select-option>\n                            <ion-select-option value=\"Sickness\">Sickness</ion-select-option>\n                            <ion-select-option value=\"Bereavment\">Bereavment</ion-select-option>\n                            <ion-select-option value=\"other\">Other</ion-select-option>\n                        </ion-select>\n                    </ion-item>\n                    <ion-item id=\"hid\" hidden lines=\"none\">\n                        <ion-label position=\"stacked\" style=\"margin-bottom: 5px;\"> Period <ion-icon small\n                                name=\"calendar\"></ion-icon>\n                        </ion-label>\n\n                        <ion-datetime [ngStyle]=\"{'border': valid == 'true' ? 'solid 1px red' : 'solid 1px slategray'}\"\n                            [(ngModel)]=\"from_date\" name=\"from_date\" (ngModelChange)=\"fromDate($event)\"\n                            placeholder=\"From\" displayFormat=\"DD MMM YYYY\" doneText=\"Ok\" cancelText=\"Cancel\">\n                        </ion-datetime>\n                        <small *ngIf=\"valid == 'true'\" style=\"color: red;\"> <i>change start date</i></small>\n                        <br>\n                        <ion-datetime [ngStyle]=\"{'border': valid == 'true' ? 'solid 1px red' : 'solid 1px slategray'}\"\n                            [(ngModel)]=\"to_date\" name=\"to_date\" (ngModelChange)=\"toDate($event)\" placeholder=\"To\"\n                            displayFormat=\"DD MMM YYYY\" doneText=\"Ok\" cancelText=\"Cancel\">\n                        </ion-datetime>\n                        <small *ngIf=\"valid == 'true'\" style=\"color: red;\"> <i>change end date</i></small>\n                    </ion-item>\n                    <ion-item id=\"hid2\" hidden lines=\"none\">\n                        <ion-label position=\"stacked\">Message <ion-icon small name=\"document-text\"></ion-icon>\n                        </ion-label>\n                        <ion-textarea ngModel cols=\"20\" rows=\"7\" name=\"message\" maxlength=\"500\"></ion-textarea>\n                        <ion-button id=\"sub_button\" type=\"submit\">Report Absenteeism</ion-button>\n                    </ion-item>\n\n                </form>\n            </div>\n            <div style=\"background-color: white; margin: 10px; padding: 10px; border-radius: 5px;\">\n                <h4>Absent Days</h4>\n                <p class=\"text\">Below are the days the student was absent from school. <i><small>(Click for more\n                            info.)</small></i></p>\n                <ion-list>\n                    <div *ngIf=\"fake == 0 && absent_days.length == 0\">\n                        <ion-spinner name=\"lines-small\" style=\"text-align: center; margin-left: 50%; margin-right: 50%;\"\n                            color=\"primary\">\n                        </ion-spinner>\n                    </div>\n                    <div *ngIf=\"fake == 1  && absent_days.length == 0\">\n                        <small><i style=\"color: #397C49;\">No Absent Records for student.</i></small>\n                    </div>\n                    <ion-item id=\"absentItem\" lines=\"full\" *ngFor=\"let ab of absent_days; let i = index\">\n                        <ion-grid (click)=\"showInfo(i)\">\n                            <ion-row>\n                                <small><strong>Absent due to</strong> {{ab.reason}}</small>\n                            </ion-row>\n                            <ion-row id=\"duration{{i}}\">\n                                <small><strong>Duration:</strong> {{this.duration[i]}} day(s) of\n                                    {{this.month[i]}}</small>\n                            </ion-row>\n                            <div id=\"content{{i}}\" hidden>\n                                <ion-row>\n                                    <small> <strong>Your note: </strong> \"<i>{{ab.message}}</i>\" </small>\n                                </ion-row>\n                                <ion-row>\n                                    <ion-col col-6>\n                                        <small><strong>From: </strong> {{this.formatDate(ab.starting)}}</small>\n                                    </ion-col>\n                                    <ion-col col-6>\n                                        <small><strong>To: </strong>{{this.formatDate(ab.ending)}}</small>\n                                    </ion-col>\n                                </ion-row>\n                            </div>\n                        </ion-grid>\n\n                    </ion-item>\n                </ion-list>\n            </div>\n\n\n        </div>\n        <div *ngSwitchCase=\"'attendance'\">\n            <div class=\"center\">\n                <ion-icon name=\"construct\" style=\"zoom: 3.0;\"></ion-icon><br>\n                <i><strong style=\"color: #397C49;\">Coming soon</strong></i>\n            </div>\n        </div>\n    </div>\n</ion-content>");

/***/ }),

/***/ "./src/app/pages/student/attendance/attendance.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/pages/student/attendance/attendance.module.ts ***!
  \***************************************************************/
/*! exports provided: AttendancePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AttendancePageModule", function() { return AttendancePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _attendance_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./attendance.page */ "./src/app/pages/student/attendance/attendance.page.ts");







const routes = [
    {
        path: '',
        component: _attendance_page__WEBPACK_IMPORTED_MODULE_6__["AttendancePage"]
    }
];
let AttendancePageModule = class AttendancePageModule {
};
AttendancePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_attendance_page__WEBPACK_IMPORTED_MODULE_6__["AttendancePage"]]
    })
], AttendancePageModule);



/***/ }),

/***/ "./src/app/pages/student/attendance/attendance.page.scss":
/*!***************************************************************!*\
  !*** ./src/app/pages/student/attendance/attendance.page.scss ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-card-title {\n  font-size: 18px !important;\n  margin: 0px;\n}\n\nion-card-subtitle {\n  text-transform: none;\n  font-style: normal;\n}\n\nion-label, .text, ion-card-title, ion-input, ion-select, textarea {\n  font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Oxygen, Ubuntu, Cantarell, \"Open Sans\", \"Helvetica Neue\", sans-serif !important;\n  color: black;\n}\n\nion-input, ion-textarea, ion-select, ion-datetime {\n  border: solid 1px slategray;\n  border-radius: 8px;\n  padding-left: 10px !important;\n}\n\nion-row, ion-col {\n  size: 11px;\n  margin-bottom: 5px;\n}\n\nion-content {\n  --background: lightgrey;\n}\n\n.no-ripple {\n  --ripple-color: transparent;\n  --background-activated: transparent;\n}\n\n.center {\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  transform: translate(-50%, -50%);\n  padding: 10px;\n  align-content: center;\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9rb2tvZGF2aWQvRG93bmxvYWRzL2VwL3NyYy9hcHAvcGFnZXMvc3R1ZGVudC9hdHRlbmRhbmNlL2F0dGVuZGFuY2UucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9zdHVkZW50L2F0dGVuZGFuY2UvYXR0ZW5kYW5jZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSwwQkFBQTtFQUNBLFdBQUE7QUNDSjs7QURDQTtFQUNJLG9CQUFBO0VBQ0Esa0JBQUE7QUNFSjs7QURBQTtFQUNJLG1KQUFBO0VBQ0EsWUFBQTtBQ0dKOztBRERBO0VBQ0ksMkJBQUE7RUFDQSxrQkFBQTtFQUNBLDZCQUFBO0FDSUo7O0FERkE7RUFDSSxVQUFBO0VBQ0Esa0JBQUE7QUNLSjs7QURGQTtFQUNJLHVCQUFBO0FDS0o7O0FERkE7RUFDSSwyQkFBQTtFQUNBLG1DQUFBO0FDS0o7O0FESEE7RUFDSSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxRQUFBO0VBQ0EsZ0NBQUE7RUFDQSxhQUFBO0VBQ0EscUJBQUE7RUFDQSxrQkFBQTtBQ01KIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvc3R1ZGVudC9hdHRlbmRhbmNlL2F0dGVuZGFuY2UucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNhcmQtdGl0bGV7XG4gICAgZm9udC1zaXplOiAxOHB4ICFpbXBvcnRhbnQ7XG4gICAgbWFyZ2luOiAwcHg7XG59XG5pb24tY2FyZC1zdWJ0aXRsZXtcbiAgICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XG59XG5pb24tbGFiZWwsIC50ZXh0LCBpb24tY2FyZC10aXRsZSwgaW9uLWlucHV0LCBpb24tc2VsZWN0LCB0ZXh0YXJlYXtcbiAgICBmb250LWZhbWlseTogLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCAnU2Vnb2UgVUknLCBSb2JvdG8sIE94eWdlbiwgVWJ1bnR1LCBDYW50YXJlbGwsICdPcGVuIFNhbnMnLCAnSGVsdmV0aWNhIE5ldWUnLCBzYW5zLXNlcmlmICFpbXBvcnRhbnQ7XG4gICAgY29sb3I6IGJsYWNrO1xufVxuaW9uLWlucHV0LCBpb24tdGV4dGFyZWEsIGlvbi1zZWxlY3QsIGlvbi1kYXRldGltZXtcbiAgICBib3JkZXI6IHNvbGlkIDFweCBzbGF0ZWdyYXk7XG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xuICAgIHBhZGRpbmctbGVmdDogMTBweCAhaW1wb3J0YW50O1xufVxuaW9uLXJvdywgaW9uLWNvbHtcbiAgICBzaXplOiAxMXB4O1xuICAgIG1hcmdpbi1ib3R0b206IDVweDtcbn1cblxuaW9uLWNvbnRlbnR7XG4gICAgLS1iYWNrZ3JvdW5kOiBsaWdodGdyZXk7XG4gICAgXG59XG4ubm8tcmlwcGxlIHtcbiAgICAtLXJpcHBsZS1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgLS1iYWNrZ3JvdW5kLWFjdGl2YXRlZDogdHJhbnNwYXJlbnQ7XG59XG4uY2VudGVyIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgbGVmdDogNTAlOyAgICBcbiAgICB0b3A6IDUwJTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgXG4gIH1cbiIsImlvbi1jYXJkLXRpdGxlIHtcbiAgZm9udC1zaXplOiAxOHB4ICFpbXBvcnRhbnQ7XG4gIG1hcmdpbjogMHB4O1xufVxuXG5pb24tY2FyZC1zdWJ0aXRsZSB7XG4gIHRleHQtdHJhbnNmb3JtOiBub25lO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG59XG5cbmlvbi1sYWJlbCwgLnRleHQsIGlvbi1jYXJkLXRpdGxlLCBpb24taW5wdXQsIGlvbi1zZWxlY3QsIHRleHRhcmVhIHtcbiAgZm9udC1mYW1pbHk6IC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgXCJTZWdvZSBVSVwiLCBSb2JvdG8sIE94eWdlbiwgVWJ1bnR1LCBDYW50YXJlbGwsIFwiT3BlbiBTYW5zXCIsIFwiSGVsdmV0aWNhIE5ldWVcIiwgc2Fucy1zZXJpZiAhaW1wb3J0YW50O1xuICBjb2xvcjogYmxhY2s7XG59XG5cbmlvbi1pbnB1dCwgaW9uLXRleHRhcmVhLCBpb24tc2VsZWN0LCBpb24tZGF0ZXRpbWUge1xuICBib3JkZXI6IHNvbGlkIDFweCBzbGF0ZWdyYXk7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgcGFkZGluZy1sZWZ0OiAxMHB4ICFpbXBvcnRhbnQ7XG59XG5cbmlvbi1yb3csIGlvbi1jb2wge1xuICBzaXplOiAxMXB4O1xuICBtYXJnaW4tYm90dG9tOiA1cHg7XG59XG5cbmlvbi1jb250ZW50IHtcbiAgLS1iYWNrZ3JvdW5kOiBsaWdodGdyZXk7XG59XG5cbi5uby1yaXBwbGUge1xuICAtLXJpcHBsZS1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIC0tYmFja2dyb3VuZC1hY3RpdmF0ZWQ6IHRyYW5zcGFyZW50O1xufVxuXG4uY2VudGVyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiA1MCU7XG4gIHRvcDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgcGFkZGluZzogMTBweDtcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59Il19 */");

/***/ }),

/***/ "./src/app/pages/student/attendance/attendance.page.ts":
/*!*************************************************************!*\
  !*** ./src/app/pages/student/attendance/attendance.page.ts ***!
  \*************************************************************/
/*! exports provided: AttendancePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AttendancePage", function() { return AttendancePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var src_app_services_session_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/session.service */ "./src/app/services/session.service.ts");







let AttendancePage = class AttendancePage {
    constructor(authServices, router, route, sessionService) {
        this.authServices = authServices;
        this.router = router;
        this.route = route;
        this.sessionService = sessionService;
        this.valid = "false";
        this.state = "off";
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
        setTimeout(() => {
            this.fake = 1;
        }, 3000);
    }
    ngOnInit() {
        this.segment = 'absenteeism';
        this.message = "Hello, \n";
    }
    ionViewWillEnter() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.authServices.getAbsenteeism(this.student_id, this.sub_domain).subscribe(days => {
                this.data = days;
                if (this.data.response === "success") {
                    this.absent_days = this.data.data === undefined ? [] : this.data.data;
                    console.log(this.absent_days);
                    //duration
                    for (var i = 0; i < this.absent_days.length; i++) {
                        const oneDay = 24 * 60 * 60 * 1000;
                        var from = new Date(this.data.data[i].starting);
                        var to = new Date(this.data.data[i].ending);
                        this.starting_dates.push(moment__WEBPACK_IMPORTED_MODULE_4__(from).format('MMM, Do YYYY'));
                        console.log(this.starting_dates);
                        this.month.push(this.getMonth(from));
                        var startMillis = from.getTime();
                        var endMillis = to.getTime();
                        var weekend = 0;
                        for (var j = startMillis; j < endMillis; j += oneDay) {
                            var currentDay = new Date(j);
                            if (currentDay.getDay() === 5 || currentDay.getDay() === 6) {
                                weekend++;
                            }
                        }
                        var total_days = Math.round(Math.abs(from.getTime() - to.getTime()) / oneDay) + 1;
                        this.duration.push(total_days - weekend);
                    }
                }
            });
        });
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
    showInfo(index) {
        if (document.getElementById("content" + index).hidden == true) {
            document.getElementById("content" + index).hidden = false;
            document.getElementById("duration" + index).hidden = true;
        }
        else {
            document.getElementById("content" + index).hidden = true;
            document.getElementById("duration" + index).hidden = false;
        }
    }
    reportAbsent(absentForm) {
        console.log(absentForm.value);
        var starting = moment__WEBPACK_IMPORTED_MODULE_4__(absentForm.value.from_date).format('MMM, ddd YYYY');
        var ending = moment__WEBPACK_IMPORTED_MODULE_4__(absentForm.value.to_date).format('MMM, ddd YYYY');
        var start = new Date(absentForm.value.from_date);
        var end = new Date(absentForm.value.to_date);
        console.log(start);
        console.log(end);
        document.querySelector("app-attendance").querySelector('ion-content').scrollToTop(1500);
        console.log("end " + end.getTime());
        console.log("start " + start.getTime());
        if (end.getTime() > start.getTime()) {
            if (!this.starting_dates.includes(moment__WEBPACK_IMPORTED_MODULE_4__(start).format('MMM, Do YYYY'))) {
                this.authServices.reportAbsenteeism(this.student_id, absentForm.value.message, absentForm.value.reason, absentForm.value.from_date, absentForm.value.to_date, this.sub_domain, starting, ending).subscribe(data => {
                    this.data = data;
                    if (this.data.response === "success") {
                        this.authServices.presentAlert2(this.data.data);
                        const navigationExtras = {
                            state: {
                                details: this.details,
                            }
                        };
                        this.router.navigate(['home'], navigationExtras);
                    }
                    else {
                        this.authServices.presentAlert2(this.data.data);
                    }
                });
            }
            else {
                this.authServices.presentAlert2("Duplicate entry. \n Student already reported absent for dates selected.");
                absentForm.reset();
            }
        }
        else {
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
        return this.isReadonly; //return true/false 
    }
    formatDate(date) {
        return moment__WEBPACK_IMPORTED_MODULE_4__(date).format('MMM D, YYYY');
    }
    getMonth(date) {
        return moment__WEBPACK_IMPORTED_MODULE_4__(date).format('MMMM');
    }
};
AttendancePage.ctorParameters = () => [
    { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: src_app_services_session_service__WEBPACK_IMPORTED_MODULE_6__["SessionService"] }
];
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('absentForm', { static: false }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgForm"])
], AttendancePage.prototype, "absentForm", void 0);
AttendancePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-attendance',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./attendance.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/student/attendance/attendance.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./attendance.page.scss */ "./src/app/pages/student/attendance/attendance.page.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
        src_app_services_session_service__WEBPACK_IMPORTED_MODULE_6__["SessionService"]])
], AttendancePage);



/***/ })

}]);
//# sourceMappingURL=pages-student-attendance-attendance-module-es2015.js.map