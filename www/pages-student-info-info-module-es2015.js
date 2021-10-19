(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-student-info-info-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/student/info/info.page.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/student/info/info.page.html ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\" style=\"font-size:14px;\">\n      <ion-back-button text=\"\" icon=\"chevron-back\"></ion-back-button>STUDENT INFORMATION\n    </ion-buttons>\n    <!-- <ion-title style=\"font-size:14px;\">STUDENT INFORMATION</ion-title> -->\n  </ion-toolbar>\n  <ion-item>\n    <ion-avatar slot=\"start\" *ngIf=\"assets !==1\">\n      <img src={{assets}}>\n    </ion-avatar>\n    <ion-avatar slot=\"start\" *ngIf=\"assets === 1\">\n      <ion-icon size=\"32\" style=\"font-size: 2em\" name=\"happy-outline\"></ion-icon>\n    </ion-avatar>\n    <ion-label style=\"text-transform: uppercase;\">{{student.first_name}} {{student.middle_name}} {{student.last_name}}\n    </ion-label>\n  </ion-item>\n  <ion-segment (ionChange)=\"segmentChanged($event)\" [(ngModel)]=\"segment\" value=\"details\" mode=\"md\">\n    <ion-segment-button value=\"details\">\n      <ion-label>Details</ion-label>\n    </ion-segment-button>\n    <ion-segment-button value=\"family\">\n      <ion-label>Family</ion-label>\n    </ion-segment-button>\n    <ion-segment-button value=\"medical\">\n      <ion-label>Medical</ion-label>\n    </ion-segment-button>\n    <ion-segment-button value=\"enrolled\">\n      <ion-label>Enrolled</ion-label>\n    </ion-segment-button>\n  </ion-segment>\n</ion-header>\n\n<ion-content class='ion-no-padding'>\n  <div [ngSwitch]=\"segment\">\n    <div *ngSwitchCase=\"'details'\">\n      <ion-list *ngIf=\"info === undefined && fake === 1\">\n        <ion-spinner name=\"lines-small\" style=\"text-align: center; margin-left: 50%; margin-right: 50%;\"></ion-spinner>\n      </ion-list>\n      <ion-item>\n        <ion-grid>\n          <ion-row>\n            <ion-col>\n              Admission Date\n            </ion-col>\n            <ion-col class=\"info\">\n              {{info.admission_date}}\n            </ion-col>\n          </ion-row>\n        </ion-grid>\n      </ion-item>\n      <ion-item>\n        <ion-grid>\n          <ion-row>\n            <ion-col>\n              Admission Number\n            </ion-col>\n            <ion-col class=\"info\">\n              {{info.admission_number}}\n            </ion-col>\n          </ion-row>\n        </ion-grid>\n      </ion-item>\n      <ion-item>\n        <ion-grid>\n          <ion-row>\n            <ion-col>\n              Student Category\n            </ion-col>\n            <ion-col class=\"info\">\n              {{info.student_category}}\n            </ion-col>\n          </ion-row>\n        </ion-grid>\n      </ion-item>\n      <ion-item>\n        <ion-grid>\n          <ion-row>\n            <ion-col>\n              First Name\n            </ion-col>\n            <ion-col class=\"info\">\n              {{info.first_name}}\n            </ion-col>\n          </ion-row>\n        </ion-grid>\n      </ion-item>\n      <ion-item>\n        <ion-grid>\n          <ion-row>\n            <ion-col>\n              Middle Name\n            </ion-col>\n            <ion-col class=\"info\">\n              {{info.middle_name}}\n            </ion-col>\n          </ion-row>\n        </ion-grid>\n      </ion-item>\n      <ion-item>\n        <ion-grid>\n          <ion-row>\n            <ion-col>\n              Last Name\n            </ion-col>\n            <ion-col class=\"info\">\n              {{info.last_name}}\n            </ion-col>\n          </ion-row>\n        </ion-grid>\n      </ion-item>\n      <ion-item>\n        <ion-grid>\n          <ion-row>\n            <ion-col>\n              Gender\n            </ion-col>\n            <ion-col class=\"info\">\n              {{info.gender}}\n            </ion-col>\n          </ion-row>\n        </ion-grid>\n      </ion-item>\n      <ion-item>\n        <ion-grid>\n          <ion-row>\n            <ion-col>\n              Date of Birth\n            </ion-col>\n            <ion-col class=\"info\">\n              {{info.dob}}\n            </ion-col>\n          </ion-row>\n        </ion-grid>\n      </ion-item>\n      <ion-item>\n        <ion-grid>\n          <ion-row>\n            <ion-col>\n              Class Entry\n            </ion-col>\n            <ion-col class=\"info\">\n              {{info.class_name}}\n            </ion-col>\n          </ion-row>\n        </ion-grid>\n      </ion-item>\n      <ion-item>\n        <ion-grid>\n          <ion-row>\n            <ion-col>\n              Payment Plan\n            </ion-col>\n            <ion-col class=\"info\">\n              {{info.payment_plan_name}}\n            </ion-col>\n          </ion-row>\n        </ion-grid>\n      </ion-item>\n    </div>\n    <div *ngSwitchCase=\"'family'\">\n      <ion-list *ngIf=\"quardians.length === 0 && fake === 1\">\n        <ion-spinner name=\"lines-small\" style=\"text-align: center; margin-left: 50%; margin-right: 50%;\"></ion-spinner>\n      </ion-list>\n      <ion-card>\n        <ion-card-header>\n          <div class=\"topbar\">\n            <!-- <ion-item  lines=\"none\"> -->\n\n            <h4>\n              <ion-icon slot=\"start\" name=\"people\" item-start style=\"color: black\"></ion-icon><span>\n                Parent/Guardians</span>\n            </h4>\n            <!-- </ion-item> -->\n          </div>\n        </ion-card-header>\n        <ion-card-content>\n          <ion-item *ngIf=\"quardians.length == 0 \">\n            No Records.\n          </ion-item>\n          <ion-list line='none' *ngFor=\"let r of quardians;  let i = index\">\n            {{r.first_name}} {{r.last_name}} ({{r.relationship}})<br>\n            {{r.telephone}} <br>\n            {{r.email}}<br>\n          </ion-list>\n        </ion-card-content>\n        <ion-card-header>\n          <h4>\n            <ion-icon slot=\"start\" name=\"alert-circle\" slot=\"start\" item-start style=\"color: black\">\n            </ion-icon><span> Emergency Contact</span>\n          </h4>\n        </ion-card-header>\n        <ion-card-content>\n          <ion-list>{{info.emergency_name}} ({{info.emergency_relationship}})<br>{{info.emergency_telephone}}</ion-list>\n        </ion-card-content>\n        <ion-card-header>\n          <h4>\n            <ion-icon name=\"car-sport\" slot=\"start\"></ion-icon> Drop Off/Pick Up Individual\n          </h4>\n        </ion-card-header>\n        <ion-card-content>\n          <ion-list>{{info.pick_up_drop_off_individual}}</ion-list>\n        </ion-card-content>\n      </ion-card>\n    </div>\n    <ion-card *ngSwitchCase=\"'medical'\">\n      <ion-card-header>\n        <h4>\n          <ion-icon name=\"medkit\" slot=\"start\"></ion-icon> Medical\n        </h4>\n      </ion-card-header>\n      <ion-card-content>\n        <ion-list *ngIf=\"medical.length == 0 && fake === 0 \">\n          No medical records.\n        </ion-list>\n        <div *ngIf=\"medical.length > 0 \">\n          <ion-list line='none' *ngFor=\"let r of medical;  let i = index\">\n            <ion-grid>\n              <ion-row>\n                <ion-col col-4>{{r.illness_condition}} - </ion-col>\n                <ion-col col-8>{{r.comments}}</ion-col>\n              </ion-row>\n            </ion-grid>\n          </ion-list>\n        </div>\n      </ion-card-content>\n      <ion-card-header> Has your child had any other serious illnesses or allergies?</ion-card-header>\n      <ion-card-content>\n        <ion-list *ngIf=\"info.other_medical_conditions== false\">No-</ion-list>\n        <ion-list *ngIf=\"info.other_medical_conditions== true\">{{info.other_medical_conditions }}\n          {{info.other_medical_conditions_description}}</ion-list>\n      </ion-card-content>\n      <ion-card-header> Has your child been hospitalized or undergone any operations?</ion-card-header>\n      <ion-card-content>\n        <ion-list *ngIf=\"info.hospitalized == true\">{{info.hospitalized }} {{info.hospitalized_description}}</ion-list>\n        <ion-list *ngIf=\"info.hospitalized == false\">No-</ion-list>\n      </ion-card-content>\n      <ion-card-header>Is your child being treated for a medical illness or on any medications currently?\n      </ion-card-header>\n      <ion-card-content>\n        <ion-list *ngIf=\"info.current_medical_treatment == false\">No-</ion-list>\n        <ion-list *ngIf=\"info.current_medical_treatment == true\">{{info.current_medical_treatment }}\n          {{info.current_medical_treatment_description}}</ion-list>\n      </ion-card-content>\n      <ion-card-header>Comments</ion-card-header>\n      <ion-card-content>\n        <ion-list *ngIf=\"info.current_medical_treatment == true\">{{info.current_medical_treatment }} </ion-list>\n        <ion-list *ngIf=\"info.current_medical_treatment == false\">none </ion-list>\n      </ion-card-content>\n    </ion-card>\n\n    <ion-card *ngSwitchCase=\"'enrolled'\">\n      <ion-item *ngIf=\"feeitems.length == 0 \" class=\"ion-no-padding\">\n        No fee items.\n      </ion-item>\n      <ion-card-header>\n        <h4>\n          <ion-icon slot=\"start\" name=\"checkmark-circle-outline\" slot=\"start\">\n          </ion-icon> Enrolled In\n        </h4>\n      </ion-card-header>\n      <ion-card-content>\n        <ion-item *ngFor=\"let r of feeitems;  let i = index\" class=\"ion-no-padding\">\n          {{r.fee_item}}\n        </ion-item>\n      </ion-card-content>\n    </ion-card>\n  </div>\n\n  <ion-fab *ngIf=\"feedback === 'true'\" vertical=\"bottom\" (click)=\"addfeed()\" horizontal=\"end\" slot=\"fixed\">\n    <ion-fab-button color=\"tertiary\">\n      <ion-icon name=\"chatbox-ellipses\"></ion-icon>\n    </ion-fab-button>\n  </ion-fab>\n</ion-content>");

/***/ }),

/***/ "./src/app/pages/student/info/info.module.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/student/info/info.module.ts ***!
  \***************************************************/
/*! exports provided: InfoPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InfoPageModule", function() { return InfoPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _info_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./info.page */ "./src/app/pages/student/info/info.page.ts");







const routes = [
    {
        path: '',
        component: _info_page__WEBPACK_IMPORTED_MODULE_6__["InfoPage"]
    }
];
let InfoPageModule = class InfoPageModule {
};
InfoPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_info_page__WEBPACK_IMPORTED_MODULE_6__["InfoPage"]]
    })
], InfoPageModule);



/***/ }),

/***/ "./src/app/pages/student/info/info.page.scss":
/*!***************************************************!*\
  !*** ./src/app/pages/student/info/info.page.scss ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("h4 {\n  font-size: 14px;\n}\n\nion-content ion-card-header {\n  color: black;\n  font-size: 12px;\n  font-weight: 500;\n  background-color: #ddd;\n}\n\nion-content ion-card-header ion-icon {\n  margin: 0px;\n  font-size: 1em;\n  font-weight: 500;\n}\n\nion-content ion-card-content {\n  color: black;\n  font-size: 13px;\n}\n\nion-content ion-card-content ion-list {\n  color: black;\n  font-size: 12px;\n  font-weight: 400;\n}\n\nion-content ion-col {\n  margin: 0px;\n  color: black;\n  font-size: 12px;\n  font-weight: 400;\n}\n\nion-content ion-item {\n  font-size: 12px;\n  margin-top: 0px;\n  margin-bottom: 0px;\n}\n\nion-content .info {\n  color: black;\n  font-size: 12px;\n  font-weight: 500;\n}\n\n.in {\n  margin-top: 5px;\n  color: black;\n  font-size: 16px;\n  font-weight: 700;\n  background-color: #5e5b5b;\n}\n\n.topbar {\n  display: block;\n  width: 100%;\n  max-height: 18px;\n  font-size: 14px;\n}\n\nion-icon {\n  font-size: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9rb2tvZGF2aWQvRG93bmxvYWRzL2VwL3NyYy9hcHAvcGFnZXMvc3R1ZGVudC9pbmZvL2luZm8ucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9zdHVkZW50L2luZm8vaW5mby5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxlQUFBO0FDQ0o7O0FERUk7RUFDSSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0Esc0JBQUE7QUNDUjs7QURBUTtFQUNJLFdBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7QUNFWjs7QURHSTtFQUNJLFlBQUE7RUFDQSxlQUFBO0FDRFI7O0FERVE7RUFDSSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FDQVo7O0FES0k7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQ0hSOztBREtJO0VBQ0ksZUFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtBQ0hSOztBREtJO0VBQ0ksWUFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQ0hSOztBRFNBO0VBQ0ksZUFBQTtFQUNJLFlBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSx5QkFBQTtBQ05SOztBRFdBO0VBQ0ksY0FBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7QUNSSjs7QURZSTtFQUNJLGVBQUE7QUNUUiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3N0dWRlbnQvaW5mby9pbmZvLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImg0e1xuICAgIGZvbnQtc2l6ZToxNHB4O1xufVxuaW9uLWNvbnRlbnR7XG4gICAgaW9uLWNhcmQtaGVhZGVye1xuICAgICAgICBjb2xvcjpibGFjaztcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGRkO1xuICAgICAgICBpb24taWNvbntcbiAgICAgICAgICAgIG1hcmdpbjowcHg7XG4gICAgICAgICAgICBmb250LXNpemU6IDFlbTtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICAgIH1cbiAgICAgICBcbiAgIFxuICAgIH1cbiAgICBpb24tY2FyZC1jb250ZW50e1xuICAgICAgICBjb2xvcjpibGFjaztcbiAgICAgICAgZm9udC1zaXplOiAxM3B4O1xuICAgICAgICBpb24tbGlzdHtcbiAgICAgICAgICAgIGNvbG9yOmJsYWNrO1xuICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6NDAwO1xuICAgICAgICB9ICBcblxuICAgIH1cbiAgICAvLyBmb250LXNpemU6IDEycHg7XG4gICAgaW9uLWNvbHtcbiAgICAgICAgbWFyZ2luOiAwcHg7XG4gICAgICAgIGNvbG9yOmJsYWNrO1xuICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgIGZvbnQtd2VpZ2h0OjQwMDtcbiAgICB9XG4gICAgaW9uLWl0ZW17XG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgbWFyZ2luLXRvcDogMHB4O1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAwcHg7XG4gICAgfVxuICAgIC5pbmZve1xuICAgICAgICBjb2xvcjpibGFjaztcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICBmb250LXdlaWdodDogNTAwO1xuICAgIH1cbiBcblxufVxuXG4uaW57XG4gICAgbWFyZ2luLXRvcDogNXB4O1xuICAgICAgICBjb2xvcjpibGFjaztcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICBmb250LXdlaWdodDogNzAwO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoOTQsIDkxLCA5MSk7XG4gICAgICAgIC8vYmFja2dyb3VuZC1jb2xvcjogI2RkZFwiXG5cbn1cblxuLnRvcGJhcntcbiAgICBkaXNwbGF5OmJsb2NrO1xuICAgIHdpZHRoOjEwMCU7XG4gICAgbWF4LWhlaWdodDoxOHB4O1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAvL2JhY2tncm91bmQtY29sb3I6IzQ3NTtcbiAgICAvL292ZXJmbG93OnNjcm9sbDtcbiAgICB9XG4gICAgaW9uLWljb257XG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICB9IiwiaDQge1xuICBmb250LXNpemU6IDE0cHg7XG59XG5cbmlvbi1jb250ZW50IGlvbi1jYXJkLWhlYWRlciB7XG4gIGNvbG9yOiBibGFjaztcbiAgZm9udC1zaXplOiAxMnB4O1xuICBmb250LXdlaWdodDogNTAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGRkO1xufVxuaW9uLWNvbnRlbnQgaW9uLWNhcmQtaGVhZGVyIGlvbi1pY29uIHtcbiAgbWFyZ2luOiAwcHg7XG4gIGZvbnQtc2l6ZTogMWVtO1xuICBmb250LXdlaWdodDogNTAwO1xufVxuaW9uLWNvbnRlbnQgaW9uLWNhcmQtY29udGVudCB7XG4gIGNvbG9yOiBibGFjaztcbiAgZm9udC1zaXplOiAxM3B4O1xufVxuaW9uLWNvbnRlbnQgaW9uLWNhcmQtY29udGVudCBpb24tbGlzdCB7XG4gIGNvbG9yOiBibGFjaztcbiAgZm9udC1zaXplOiAxMnB4O1xuICBmb250LXdlaWdodDogNDAwO1xufVxuaW9uLWNvbnRlbnQgaW9uLWNvbCB7XG4gIG1hcmdpbjogMHB4O1xuICBjb2xvcjogYmxhY2s7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbn1cbmlvbi1jb250ZW50IGlvbi1pdGVtIHtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBtYXJnaW4tdG9wOiAwcHg7XG4gIG1hcmdpbi1ib3R0b206IDBweDtcbn1cbmlvbi1jb250ZW50IC5pbmZvIHtcbiAgY29sb3I6IGJsYWNrO1xuICBmb250LXNpemU6IDEycHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG5cbi5pbiB7XG4gIG1hcmdpbi10b3A6IDVweDtcbiAgY29sb3I6IGJsYWNrO1xuICBmb250LXNpemU6IDE2cHg7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGJhY2tncm91bmQtY29sb3I6ICM1ZTViNWI7XG59XG5cbi50b3BiYXIge1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6IDEwMCU7XG4gIG1heC1oZWlnaHQ6IDE4cHg7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cblxuaW9uLWljb24ge1xuICBmb250LXNpemU6IDIwcHg7XG59Il19 */");

/***/ }),

/***/ "./src/app/pages/student/info/info.page.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/student/info/info.page.ts ***!
  \*************************************************/
/*! exports provided: InfoPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InfoPage", function() { return InfoPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_services_session_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/session.service */ "./src/app/services/session.service.ts");





let InfoPage = class InfoPage {
    constructor(authService, route, router, session) {
        this.authService = authService;
        this.route = route;
        this.router = router;
        this.session = session;
        this.info = new Object();
        this.data = new Object();
        this.quardians = new Array();
        this.medical = new Array();
        this.feeitems = new Array();
        this.feedback = false;
        this.fake = 1;
        setTimeout(() => {
            this.fake = 0;
        }, 3000);
        this.session.sessionTimeOut();
        this.route.queryParams.subscribe(params => {
            if (this.router.getCurrentNavigation().extras.state) {
                this.student = this.router.getCurrentNavigation().extras.state.details;
                this.assets = this.student.student_image === null ? 1 :
                    `https://${this.student.school}.eduweb.co.ke/assets/students/${this.student.student_image}`;
            }
        });
        this.segment = 'details';
    }
    ngOnInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
        });
    }
    ionViewWillEnter() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.authService.checkFeed().then(feed => {
                // console.log(feed);
                this.feedback = feed;
            });
            yield this.authService.getstudent(this.student.school, this.student.student_id).subscribe(info => {
                // console.log(news);
                this.data = info;
                this.info = this.data.data;
                console.log(this.info);
            });
        });
    }
    formatCourseDate(date) {
        const date1 = new Date(date); // yyyy-MM-dd
        return date1.getDate() + '/' + (date1.getMonth() + 1) + '/' + date1.getFullYear();
    }
    segmentChanged(ev) {
        if (ev.detail.value === 'family') {
            this.quardians = this.info.guardians;
        }
        if (ev.detail.value === 'medical') {
            this.medical = this.info.medical_history;
        }
        if (ev.detail.value === 'enrolled') {
            this.feeitems = this.info.fee_items;
        }
        if (ev.detail.value === 'details') {
            // this.info = this.info.fe;
        }
        // console.log('Segment changed', ev);
    }
    addfeed() {
        const navigationExtras = {};
        this.router.navigate(['feedback'], navigationExtras);
    }
};
InfoPage.ctorParameters = () => [
    { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: src_app_services_session_service__WEBPACK_IMPORTED_MODULE_4__["SessionService"] }
];
InfoPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-info',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./info.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/student/info/info.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./info.page.scss */ "./src/app/pages/student/info/info.page.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], src_app_services_session_service__WEBPACK_IMPORTED_MODULE_4__["SessionService"]])
], InfoPage);



/***/ })

}]);
//# sourceMappingURL=pages-student-info-info-module-es2015.js.map