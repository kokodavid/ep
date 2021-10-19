(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-dashboard-dashboard-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/dashboard/dashboard.page.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/dashboard/dashboard.page.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>\n      <div *ngIf=\"userinfo != null\" style=\"text-align: center; font-size: medium; font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif\">\n        Hello<small style=\"text-transform: uppercase; font-size: 14px;\">  {{ userinfo.first_name }}\n          </small>\n      </div>\n    </ion-title>\n    <ion-buttons slot=\"end\">\n      <div style=\"right: 20px;\">\n        <ion-icon size=\"40\" style=\"right: 20px;\" (click)=\"reload()\" name=\"refresh\"></ion-icon>\n      </div>\n    </ion-buttons>\n    <ion-buttons slot=\"end\"></ion-buttons>\n  </ion-toolbar>\n</ion-header>\n<ion-content class=\"ion-no-padding\">\n  <ion-grid style=\"width: 100%; margin-bottom: -20px;\">\n    <ion-row responsive-sm *ngIf=\"students.length == 1\" class=\"ion-no-padding\">\n      <ion-col *ngFor=\"let student of students;  let i = index\" col-8>\n        <div class=\"center-image\">\n          <ion-icon (click)=\"studentData(student)\" class=\"img1\" style=\"font-size:7em\"\n            *ngIf=\"student.student_image === null\" name=\"happy-outline\"></ion-icon>\n          <img (click)=\"studentData(student)\" class=\"img1\"\n            *ngIf=\"student.student_image !== null && assets !== undefined\" src={{assets+student.student_image}} />\n          <!-- <ion-skeleton-text *ngIf=\"assets === undefined\" class=\"img1\"  animated></ion-skeleton-text> -->\n          <!-- <div class=\"center-image\"><div *ngIf=\"student.student_image === null && assets === undefined\"  class=\"img1\" >\n                  <ion-spinner    name=\"lines-small\" style=\"  left: 50%;top: 50%;bottom: 50%;right: 50%;\"></ion-spinner>\n              </div></div> -->\n        </div>\n        <div class=\"center-div\" (click)=\"studentData(student)\">\n          <div class=\"c\"\n            style=\"align-content: center; text-align:center;font-weight: bold; text-transform: uppercase; font-size: 11px;\"\n            [innerHTML]=\"student.student_name\"></div>\n          <div class=\"c\"\n            style=\"align-content: center; text-align:center;text-transform: uppercase;font-size: 11px; color:rgb(70, 66, 66);\"\n            [innerHTML]=\"student.class_name\"></div>\n          <div class=\"c\"\n            style=\"align-content: center; text-align:center;text-transform: uppercase;font-size: 11px; color:rgb(70, 66, 66);\"\n            [innerHTML]=\"student.school_name\"></div>\n        </div>\n      </ion-col>\n    </ion-row>\n    <ion-row responsive-sm *ngIf=\"students.length >= 2\">\n      <ion-col *ngFor=\"let student of students;  let i = index\" col-4>\n        <ion-icon (click)=\"studentData(student)\" class=\"img2\" style=\"font-size:5.5em\"\n          *ngIf=\"student.student_image === null\" name=\"happy-outline\"></ion-icon>\n        <!-- <ion-skeleton-text  animated></ion-skeleton-text> -->\n        <div *ngIf=\"assets === undefined\" class=\"img1\">\n          <ion-spinner name=\"lines-small\" style=\"\n          left: 50%;\n          top: 50%;\n          bottom: 50%;\n          right: 50%;\n        \" color=\"tertiary\"></ion-spinner>\n        </div>\n        <img class=\"img1\" *ngIf=\"student.student_image !== null && assets !== undefined\" (click)=\"studentData(student)\"\n          src={{assets+student.student_image}} />\n        <div\n          style=\"align-content: center; text-align:center;font-weight: bold; text-transform: uppercase; font-size: 11px;\"\n          (click)=\"studentData(student)\" [innerHTML]=\"student.student_name\"></div>\n        <div\n          style=\"align-content: center; text-align:center;text-transform: uppercase;font-size: 11px; color:rgb(70, 66, 66);\"\n          (click)=\"studentData(student)\" [innerHTML]=\"student.class_name\"></div>\n        <div\n          style=\"align-content: center; text-align:center;text-transform: uppercase;font-size: 11px;color:rgb(70, 66, 66);\"\n          (click)=\"studentData(student)\" [innerHTML]=\"student.school_name\"></div>\n      </ion-col>\n    </ion-row>\n\n  </ion-grid>\n  <div class=\"ion-padding\" style=\"margin-bottom: 5px;\">\n    <ion-list class=\"head\" style=\"margin-bottom:0px;\">News</ion-list>\n    <ion-list class=\"tittle\"> {{this.school}}</ion-list>\n  </div>\n  <!-- <div *ngIf=\"load\" style=\"align-items: center;\"><ion-spinner name=\"dots\"></ion-spinner></div> -->\n  <ion-item *ngIf=\"news.length === 0 && fake === 0\">\n    <ion-avatar slot=\"start\">\n      <ion-skeleton-text animated></ion-skeleton-text>\n    </ion-avatar>\n    No news records found.\n  </ion-item>\n  <ion-list *ngIf=\"check === 1 && fake === 1\">\n    <br>\n    <ion-spinner name=\"lines-small\" style=\"text-align: center; margin-left: 50%; margin-right: 50%;\" color=\"primary\">\n    </ion-spinner>\n  </ion-list>\n  <ion-list *ngIf=\"news.length === 0 && fake === 1\">\n    <br>\n    <ion-spinner name=\"lines-small\" style=\"text-align: center; margin-left: 50%; margin-right: 50%;\" color=\"primary\">\n    </ion-spinner>\n    <!-- <ion-item *ngFor=\"let i of [1,2,3,4,5,7,8];  let i = index\"  >\n      <ion-avatar slot=\"start\" >\n         <ion-skeleton-text animated></ion-skeleton-text>\n       </ion-avatar>\n       <ion-label>\n         <h3><ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text></h3>\n         <p><ion-skeleton-text animated style=\"width: 90%\"></ion-skeleton-text></p>\n         <p><ion-skeleton-text animated style=\"width: 80%\"></ion-skeleton-text></p>\n       </ion-label>\n</ion-item> -->\n  </ion-list>\n  <div *ngIf=\"news.length > 0\">\n    <div *ngFor=\"let item of news; let i = index\">\n      <div *ngIf=\"this.formatdate(item.creation_date).substr(-4) > '2019'\">\n        <div scrollY=\"true\">\n          <ion-list class=\"ion-no-padding\">\n            <div *ngIf=\"item.seen === true; else not_seen\">\n              <ion-item (click)=\"newsInfo(item,this.school)\">\n                <ion-icon style=\"top:0px; color: #397C49;position: relative;\" size=\"32\" name=\"notifications\"\n                  slot=\"start\">\n                </ion-icon>\n                <ion-list style=\"min-width: 100%; color: #397C49;\">\n                  <div [innerHTML]=\"item.subject\"></div>\n                  <div class=\"news\"><small>{{this.formatdate(item.creation_date)}} By {{item.posted_by}}</small> </div>\n                </ion-list>\n              </ion-item> \n            </div> \n            <ng-template #not_seen>\n              <ion-item (click)=\"newsInfo(item,this.school)\">\n                <ion-icon style=\"top:0px; color:black;position: relative;\" size=\"32\" name=\"notifications\" slot=\"start\">\n                </ion-icon>\n                <ion-list style=\"min-width: 100%; color: black;\">\n                  <div [innerHTML]=\"item.subject\"></div>\n                  <div class=\"news\"><small>{{this.formatdate(item.creation_date)}} By {{item.posted_by}}</small> </div>\n                </ion-list>\n              </ion-item> \n            </ng-template>\n          </ion-list>\n        </div>\n      </div>\n    </div>\n  </div>\n  <ion-fab *ngIf=\"feedback === 'true'\" vertical=\"bottom\" (click)=\"addfeed()\" horizontal=\"end\" slot=\"fixed\">\n    <ion-fab-button color=\"tertiary\">\n      <ion-icon name=\"chatbox-ellipses\"></ion-icon>\n    </ion-fab-button>\n  </ion-fab>\n</ion-content>");

/***/ }),

/***/ "./src/app/pages/dashboard/dashboard.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/pages/dashboard/dashboard.module.ts ***!
  \*****************************************************/
/*! exports provided: DashboardPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardPageModule", function() { return DashboardPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/progress-spinner */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-spinner.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/__ivy_ngcc__/fesm2015/ngx-spinner.js");
/* harmony import */ var _dashboard_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./dashboard.page */ "./src/app/pages/dashboard/dashboard.page.ts");









const routes = [
    {
        path: '',
        component: _dashboard_page__WEBPACK_IMPORTED_MODULE_8__["DashboardPage"]
    }
];
let DashboardPageModule = class DashboardPageModule {
};
DashboardPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonicModule"],
            _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_5__["MatProgressSpinnerModule"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_7__["NgxSpinnerModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_dashboard_page__WEBPACK_IMPORTED_MODULE_8__["DashboardPage"]]
    })
], DashboardPageModule);



/***/ }),

/***/ "./src/app/pages/dashboard/dashboard.page.scss":
/*!*****************************************************!*\
  !*** ./src/app/pages/dashboard/dashboard.page.scss ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-content {\n  font-size: 12px;\n  font-weight: 400;\n}\nion-content ion-spinner > svg {\n  width: 80px !important;\n  height: 80px !important;\n}\nion-content .center {\n  text-align: center;\n  font-size: 10px;\n}\nion-content .c {\n  text-align: center;\n  font-size: 11px;\n}\nion-content .img {\n  height: 145px !important;\n  min-width: 145px;\n  border-radius: 4px;\n  padding: 0;\n  -o-object-fit: cover;\n     object-fit: cover;\n  margin: 0 auto;\n}\nion-content .img2 {\n  height: 137px !important;\n  border-radius: 4px;\n  border-spacing: 0;\n  padding: 0;\n  width: 90%;\n  margin-top: 10px;\n  border-radius: 4px;\n  align-items: center;\n  -o-object-fit: cover;\n     object-fit: cover;\n}\nion-content .img1 {\n  min-width: 100%;\n  height: 180px !important;\n  border-radius: 4px;\n  border-spacing: 0;\n  padding: 0;\n  -o-object-fit: cover;\n     object-fit: cover;\n  margin-top: 2px;\n}\nion-content ion-item {\n  font-size: 16px;\n  font-weight: 400;\n}\nion-content .news {\n  min-width: 100%;\n  color: #464242;\n  font-weight: 400;\n  font-size: 14px;\n}\n.tittle {\n  text-transform: uppercase;\n  color: #009e0f;\n}\n.head {\n  font-size: 16px;\n  font-weight: 500;\n  text-transform: capitalize;\n  color: #0f0f0f;\n}\n.center-div {\n  margin: 0 auto;\n  width: 200px;\n  font-size: 12px;\n}\n.center-image {\n  margin: 0 auto;\n  width: 160px;\n  font-size: 12px;\n}\n.center-div1 {\n  margin: 0 auto;\n  width: 100%;\n  font-size: 12px;\n}\n.columns {\n  width: 90%;\n}\nion-col {\n  background-color: #eee;\n  border: 2px white solid !important;\n}\nion-list {\n  -webkit-transform: translateZ(0) translate3d(0px, 0px, 0px);\n}\n/* Custom Skeleton Line Height and Margin */\n.custom-skeleton ion-skeleton-text {\n  line-height: 13px;\n}\n.custom-skeleton ion-skeleton-text:last-child {\n  margin-bottom: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9rb2tvZGF2aWQvRG93bmxvYWRzL2VwL3NyYy9hcHAvcGFnZXMvZGFzaGJvYXJkL2Rhc2hib2FyZC5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2Rhc2hib2FyZC9kYXNoYm9hcmQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBS0ksZUFBQTtFQUNBLGdCQUFBO0FDSEo7QURGSTtFQUNJLHNCQUFBO0VBQ0EsdUJBQUE7QUNJUjtBREFJO0VBQ0ksa0JBQUE7RUFDQSxlQUFBO0FDRVI7QURFTTtFQUNFLGtCQUFBO0VBQ0EsZUFBQTtBQ0FSO0FES0k7RUFFSSx3QkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFHQSxVQUFBO0VBQ0Esb0JBQUE7S0FBQSxpQkFBQTtFQUNBLGNBQUE7QUNOUjtBRG1CSTtFQUNJLHdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUVBLFVBQUE7RUFDQSxVQUFBO0VBQ0MsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0Esb0JBQUE7S0FBQSxpQkFBQTtBQ2xCVDtBRHFCSTtFQUNJLGVBQUE7RUFFQSx3QkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFFQSxVQUFBO0VBQ0Esb0JBQUE7S0FBQSxpQkFBQTtFQUVBLGVBQUE7QUN0QlI7QUQ2Qkk7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7QUMzQlI7QUQ4Qkk7RUFDRyxlQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtBQzVCUDtBRG1DQTtFQUNJLHlCQUFBO0VBQ0EsY0FBQTtBQ2hDSjtBRGtDQTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtFQUNBLDBCQUFBO0VBQ0EsY0FBQTtBQy9CSjtBRGlDQTtFQUlLLGNBQUE7RUFDQSxZQUFBO0VBRUEsZUFBQTtBQ2xDTDtBRHFDQTtFQUVLLGNBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtBQ25DTDtBRHNDQTtFQUlLLGNBQUE7RUFDQSxXQUFBO0VBRUEsZUFBQTtBQ3ZDTDtBRDJDQTtFQUNJLFVBQUE7QUN4Q0o7QUQyQ0E7RUFDSSxzQkFBQTtFQUNBLGtDQUFBO0FDeENKO0FEMENBO0VBQ0ksMkRBQUE7QUN2Q0o7QUQ2Q0EsMkNBQUE7QUFDQTtFQUNJLGlCQUFBO0FDMUNKO0FENkNFO0VBQ0Usa0JBQUE7QUMxQ0oiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9kYXNoYm9hcmQvZGFzaGJvYXJkLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb250ZW50e1xuICAgIGlvbi1zcGlubmVyID4gc3ZnIHtcbiAgICAgICAgd2lkdGg6IDgwcHggIWltcG9ydGFudDtcbiAgICAgICAgaGVpZ2h0OiA4MHB4ICFpbXBvcnRhbnQ7XG4gICAgfVxuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICBmb250LXdlaWdodDogNDAwO1xuICAgIC5jZW50ZXIge1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIGZvbnQtc2l6ZTogMTBweDtcbiAgICAgICAgXG4gICAgICAgIC8vYm9yZGVyOiAzcHggc29saWQgZ3JlZW47XG4gICAgICB9XG4gICAgICAuYyB7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgZm9udC1zaXplOiAxMXB4O1xuICAgICAgICAvL2ZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICAvL2JvcmRlcjogM3B4IHNvbGlkIGdyZWVuO1xuICAgICAgfVxuICAgIC8vZm9udC1mYW1pbHk6IG1vbm9zcGFjZTtcbiAgICAuaW1ne1xuICAgICBcbiAgICAgICAgaGVpZ2h0OiAxNDVweCAhaW1wb3J0YW50OztcbiAgICAgICAgbWluLXdpZHRoOiAxNDVweDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgICAgICAvL2JvcmRlci1zcGFjaW5nOjEwcHg7XG4gICAgICAgIC8vYm9yZGVyLWNvbGxhcHNlOmNvbGxhcHNlO1xuICAgICAgICBwYWRkaW5nOjA7XG4gICAgICAgIG9iamVjdC1maXQ6IGNvdmVyO1xuICAgICAgICBtYXJnaW46IDAgYXV0bztcbiAgICAgICAgLy93aWR0aDogMTAlO1xuICAgICAgICAvL29iamVjdC1maXQ6IGNvdmVyO1xuICAgICAgICAvL3NwYWNpbmc6MDtcbiAgICAgICAvLyBib3JkZXI6MnB4O1xuICAgICAgICAvL2FsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIC8vYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICAgICAgLy8gYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICAgICAgLy8gYmFja2dyb3VuZC1wb3NpdGlvbjogNTAlIDUwJTtcbiAgICAgICAgLy8gbWFyZ2luLWxlZnQ6IDE1cHg7XG4gICAgICAgIC8vIG1hcmdpbi1yaWdodDogNXB4O1xuICAgICAgICAvL2JvcmRlcjogI2NlY2VkZiBvdXRzZXQgMnB4O1xuICAgIH1cbiAgICAuaW1nMntcbiAgICAgICAgaGVpZ2h0OiAxMzdweCAhaW1wb3J0YW50O1xuICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgICAgIGJvcmRlci1zcGFjaW5nOjA7XG4gICAgICAgIC8vYm9yZGVyLWNvbGxhcHNlOmNvbGxhcHNlO1xuICAgICAgICBwYWRkaW5nOjA7XG4gICAgICAgIHdpZHRoOiA5MCU7XG4gICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgIG9iamVjdC1maXQ6IGNvdmVyO1xuICAgXG4gICAgfVxuICAgIC5pbWcxe1xuICAgICAgICBtaW4td2lkdGg6IDEwMCU7XG4gICAgICAgIC8vIG1pbi1oZWlnaHQ6IDIwMHB4O1xuICAgICAgICBoZWlnaHQ6IDE4MHB4ICFpbXBvcnRhbnQ7O1xuICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgICAgIGJvcmRlci1zcGFjaW5nOjA7XG4gICAgICAgIC8vYm9yZGVyLWNvbGxhcHNlOlxuICAgICAgICBwYWRkaW5nOjA7XG4gICAgICAgIG9iamVjdC1maXQ6IGNvdmVyO1xuICAgICAgICAvL3dpZHRoOiAxMDAlO1xuICAgICAgICBtYXJnaW4tdG9wOiAycHg7XG4gICAgICAgIC8vbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICAgICAgLy9ib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgICAgICAvL2FsaWduLWl0ZW1zOiBjZW50ZXI7XG5cbiAgICB9XG5cbiAgICBpb24taXRlbXtcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICBmb250LXdlaWdodDogNDAwO1xuICAgIH1cblxuICAgIC5uZXdze1xuICAgICAgIG1pbi13aWR0aDogMTAwJTtcbiAgICAgICBjb2xvcjpyZ2IoNzAsIDY2LCA2Nik7XG4gICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgIC8vd2hpdGUtc3BhY2U6IHdyYXA7XG4gICAgICAgIC8vQGF0LXJvb3RtYXJnaW4tbGVmdDogMTBweDtcbiAgICAgICAgLy9tYXJnaW4tcmlnaHQ6IDEwcHg7XG4gICAgICAgIC8vd29yZC13cmFwOiBicmVhay13b3JkO1xuICAgIH1cbn1cbi50aXR0bGV7XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICBjb2xvcjogIzAwOWUwZjtcbn1cbi5oZWFke1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xuICAgIGNvbG9yOiAjMGYwZjBmO1xufVxuLmNlbnRlci1kaXZcbntcbiAgXG4vL2JhY2tncm91bmQtY29sb3I6IGRhcmtncmV5O1xuICAgICBtYXJnaW46IDAgYXV0bztcbiAgICAgd2lkdGg6IDIwMHB4OyBcbiAgICAgLy9oZWlnaHQ6IDIwMHB4O1xuICAgICBmb250LXNpemU6IDEycHg7XG4gICAgXG59XG4uY2VudGVyLWltYWdlXG57XG4gICAgIG1hcmdpbjogMCBhdXRvO1xuICAgICB3aWR0aDogMTYwcHg7IFxuICAgICBmb250LXNpemU6IDEycHg7XG4gICAgXG59XG4uY2VudGVyLWRpdjFcbntcbiAgXG4vL2JhY2tncm91bmQtY29sb3I6IGRhcmtncmV5O1xuICAgICBtYXJnaW46IDAgYXV0bztcbiAgICAgd2lkdGg6IDEwMCU7IFxuICAgICAvL2hlaWdodDogMjAwcHg7XG4gICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICBcbn1cblxuLmNvbHVtbnN7XG4gICAgd2lkdGg6OTAlO1xuXG59XG5pb24tY29se1xuICAgIGJhY2tncm91bmQtY29sb3I6I2VlZTtcbiAgICBib3JkZXI6IDJweCB3aGl0ZSBzb2xpZCAhaW1wb3J0YW50O1xufVxuaW9uLWxpc3R7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVooMCkgdHJhbnNsYXRlM2QoMHB4LCAwcHgsIDBweCk7XG59XG5cblxuXG5cbi8qIEN1c3RvbSBTa2VsZXRvbiBMaW5lIEhlaWdodCBhbmQgTWFyZ2luICovXG4uY3VzdG9tLXNrZWxldG9uIGlvbi1za2VsZXRvbi10ZXh0IHtcbiAgICBsaW5lLWhlaWdodDogMTNweDtcbiAgfVxuICBcbiAgLmN1c3RvbS1za2VsZXRvbiBpb24tc2tlbGV0b24tdGV4dDpsYXN0LWNoaWxkIHtcbiAgICBtYXJnaW4tYm90dG9tOiA1cHg7XG4gIH1cbiAgXG4gIFxuIiwiaW9uLWNvbnRlbnQge1xuICBmb250LXNpemU6IDEycHg7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG59XG5pb24tY29udGVudCBpb24tc3Bpbm5lciA+IHN2ZyB7XG4gIHdpZHRoOiA4MHB4ICFpbXBvcnRhbnQ7XG4gIGhlaWdodDogODBweCAhaW1wb3J0YW50O1xufVxuaW9uLWNvbnRlbnQgLmNlbnRlciB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiAxMHB4O1xufVxuaW9uLWNvbnRlbnQgLmMge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMTFweDtcbn1cbmlvbi1jb250ZW50IC5pbWcge1xuICBoZWlnaHQ6IDE0NXB4ICFpbXBvcnRhbnQ7XG4gIG1pbi13aWR0aDogMTQ1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgcGFkZGluZzogMDtcbiAgb2JqZWN0LWZpdDogY292ZXI7XG4gIG1hcmdpbjogMCBhdXRvO1xufVxuaW9uLWNvbnRlbnQgLmltZzIge1xuICBoZWlnaHQ6IDEzN3B4ICFpbXBvcnRhbnQ7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgYm9yZGVyLXNwYWNpbmc6IDA7XG4gIHBhZGRpbmc6IDA7XG4gIHdpZHRoOiA5MCU7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgb2JqZWN0LWZpdDogY292ZXI7XG59XG5pb24tY29udGVudCAuaW1nMSB7XG4gIG1pbi13aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxODBweCAhaW1wb3J0YW50O1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIGJvcmRlci1zcGFjaW5nOiAwO1xuICBwYWRkaW5nOiAwO1xuICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgbWFyZ2luLXRvcDogMnB4O1xufVxuaW9uLWNvbnRlbnQgaW9uLWl0ZW0ge1xuICBmb250LXNpemU6IDE2cHg7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG59XG5pb24tY29udGVudCAubmV3cyB7XG4gIG1pbi13aWR0aDogMTAwJTtcbiAgY29sb3I6ICM0NjQyNDI7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cblxuLnRpdHRsZSB7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGNvbG9yOiAjMDA5ZTBmO1xufVxuXG4uaGVhZCB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG4gIGNvbG9yOiAjMGYwZjBmO1xufVxuXG4uY2VudGVyLWRpdiB7XG4gIG1hcmdpbjogMCBhdXRvO1xuICB3aWR0aDogMjAwcHg7XG4gIGZvbnQtc2l6ZTogMTJweDtcbn1cblxuLmNlbnRlci1pbWFnZSB7XG4gIG1hcmdpbjogMCBhdXRvO1xuICB3aWR0aDogMTYwcHg7XG4gIGZvbnQtc2l6ZTogMTJweDtcbn1cblxuLmNlbnRlci1kaXYxIHtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIHdpZHRoOiAxMDAlO1xuICBmb250LXNpemU6IDEycHg7XG59XG5cbi5jb2x1bW5zIHtcbiAgd2lkdGg6IDkwJTtcbn1cblxuaW9uLWNvbCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlZWU7XG4gIGJvcmRlcjogMnB4IHdoaXRlIHNvbGlkICFpbXBvcnRhbnQ7XG59XG5cbmlvbi1saXN0IHtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVooMCkgdHJhbnNsYXRlM2QoMHB4LCAwcHgsIDBweCk7XG59XG5cbi8qIEN1c3RvbSBTa2VsZXRvbiBMaW5lIEhlaWdodCBhbmQgTWFyZ2luICovXG4uY3VzdG9tLXNrZWxldG9uIGlvbi1za2VsZXRvbi10ZXh0IHtcbiAgbGluZS1oZWlnaHQ6IDEzcHg7XG59XG5cbi5jdXN0b20tc2tlbGV0b24gaW9uLXNrZWxldG9uLXRleHQ6bGFzdC1jaGlsZCB7XG4gIG1hcmdpbi1ib3R0b206IDVweDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/pages/dashboard/dashboard.page.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/dashboard/dashboard.page.ts ***!
  \***************************************************/
/*! exports provided: DashboardPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardPage", function() { return DashboardPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/data.service */ "./src/app/services/data.service.ts");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/__ivy_ngcc__/fesm2015/ngx-spinner.js");
/* harmony import */ var _ionic_native_spinner_dialog_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic-native/spinner-dialog/ngx */ "./node_modules/@ionic-native/spinner-dialog/__ivy_ngcc__/ngx/index.js");
/* harmony import */ var src_app_services_session_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/services/session.service */ "./src/app/services/session.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");











// import { User } from 'src/app/models/user';
let DashboardPage = class DashboardPage {
    constructor(spinnerDialog, 
    // private apiService: ApiService,
    router, spinner, dataService, menu, authService, sessionService, loadingController, alertCtrl, http, route) {
        this.spinnerDialog = spinnerDialog;
        this.router = router;
        this.spinner = spinner;
        this.dataService = dataService;
        this.menu = menu;
        this.authService = authService;
        this.sessionService = sessionService;
        this.loadingController = loadingController;
        this.alertCtrl = alertCtrl;
        this.http = http;
        this.route = route;
        this.users = [];
        this.menu.enable(true);
        this.students = new Array();
        this.news = new Array();
        this.feedback = false;
        this.load = false;
        this.fake = 1;
        this.check = 0;
        setTimeout(() => {
            this.fake = 0;
        }, 6000);
        this.sessionService.sessionTimeOut();
        this.feed = new Array();
        this.student_id = new Array();
        this.route.queryParams.subscribe(params => {
            if (this.router.getCurrentNavigation().extras.state) {
                this.resources = this.router.getCurrentNavigation().extras.state.details;
                // console.log(JSON.stringify(this.resources))
            }
        });
        const slowLoad = window.setTimeout(function () {
            console.log('the page is taking its sweet time loading');
        }, 2000);
        setTimeout(() => {
            this.fake = 0;
        }, 3000);
        window.addEventListener('load', function () {
            window.clearTimeout(slowLoad);
        }, false);
        // this.loadData(true);
        // this.idle.onTimeout.subscribe(() => {
        //   this.authService.logout();
        // });
    }
    ngOnInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const user = yield localStorage.getItem('token');
            const u = JSON.parse(user);
            this.userinfo = u;
            // console.log(JSON.stringify(this.userinfo));
            this.students = this.userinfo.students === undefined ? [] : this.userinfo.students;
            this.school = this.students[0].school;
            const parent = this.userinfo.parent_id === undefined ? {} : this.userinfo.parent_id;
            // $(document).ready(function() {
            //   $.ajax({
            //     type: 'GET',
            //     url: `https://api.eduweb.co.ke/getParentStudents/getParentStudents/${this.userinfo.parent_id}`,
            //     // data: "check",
            //     dataType: 'json',
            //     success: function(data) {
            //       this.data1 = data.data;
            //       this.stud = this.data1.students;
            //     console.log(data.data);
            //         //alert(data);
            //     }
            // });
            //   // alert('JQuery is working!!');
            // });
            // logout on idle timeout
            yield this.authService.news().subscribe(news => {
                this.data = news;
                this.news = this.data.data.news[this.school] !== undefined ? this.data.data.news[this.school] : [];
                this.assets = `https://${this.school}.eduweb.co.ke/assets/students/`;
            });
        });
    }
    ionViewWillEnter() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            // console.log(this.stud);
            // if (this.students === []) {
            //   const navigationExtras: NavigationExtras = {
            //     state: {
            //       // details: student,
            //     }
            //   };
            //   this.router.navigate(['/home'], navigationExtras);
            // } else {
            // this.load = true;
            // this.spinnerDialog.show();
            // setTimeout(async () => await this.spinnerDialog.hide(), 3000);
            // await this.authService.
            const alert = yield this.alertCtrl.create({
                message: "Click OK to update to the latest version of Eduweb parents",
                subHeader: 'Version update',
                buttons: [{ text: 'Ok', handler: () => {
                            window.location.href = 'https://play.google.com';
                        } }],
            });
            // await alert.present();
            yield this.authService.checkFeed().then(feed => {
                // console.log(feed);
                this.feedback = feed;
            });
            yield this.authService.news().subscribe(news => {
                this.data = news;
                this.news = this.data.data.news[this.school] !== undefined ? this.data.data.news[this.school] : [];
                this.assets = `https://${this.school}.eduweb.co.ke/assets/students/`;
            });
            // }
            // this.loadData(true);
        });
    }
    // loadData(refresh = false, refresher?) {
    //   this.apiService.getUsers(refresh).subscribe(res => {
    //     this.users = res;
    //     console.log(res);
    //     if (refresher) {
    //       refresher.target.complete();
    //     }
    //   });
    // }
    // updateUser(id) {
    //   this.apiService.updateUser(id, {name: 'Simon', job: 'CEO'}).subscribe();
    // }
    // do a reload
    reload() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            // this.fake = 1;
            // this.check = 1;
            //if (this.news.length === 0 ) {
            // setTimeout(() => {
            //     this.fake = 0;
            //   }, 3000)
            this.authService.presentLoading();
            yield this.authService.reloadnews().subscribe(news => {
                this.authService.dismiss();
                // console.log(news);
                this.data = news;
                this.news = this.data.data.news[this.school] !== undefined ? this.data.data.news[this.school] : [];
                console.log("okayokay" + JSON.stringify(this.news));
                this.assets = `https://${this.school}.eduweb.co.ke/assets/students/`;
            });
        });
    }
    // loader
    presentLoading() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            // Prepare a loading controller
            this.loading = yield this.loadingController.create({
                message: 'Loading...'
            });
            // Present the loading controller
            yield this.loading.present();
        });
    }
    // go to student
    studentData(student) {
        console.log(student);
        const navigationExtras = {
            state: {
                details: student,
                resources: this.resources,
            }
        };
        this.router.navigate(['home'], navigationExtras);
    }
    // get news information
    newsInfo(news, school) {
        // console.log(news);
        const navigationExtras = {
            state: {
                details: news,
                school: school,
                student_id: this.students[0].student_id,
            }
        };
        this.router.navigate(['news'], navigationExtras);
    }
    // add feed
    addfeed() {
        const navigationExtras = {};
        this.router.navigate(['feedback'], navigationExtras);
    }
    /// format date
    formatdate(date) {
        return moment__WEBPACK_IMPORTED_MODULE_6__(date).format('DD MMMM YYYY');
    }
};
DashboardPage.ctorParameters = () => [
    { type: _ionic_native_spinner_dialog_ngx__WEBPACK_IMPORTED_MODULE_8__["SpinnerDialog"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_7__["NgxSpinnerService"] },
    { type: _services_data_service__WEBPACK_IMPORTED_MODULE_5__["DataService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["MenuController"] },
    { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] },
    { type: src_app_services_session_service__WEBPACK_IMPORTED_MODULE_9__["SessionService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpClient"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }
];
DashboardPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-dashboard',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./dashboard.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/dashboard/dashboard.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./dashboard.page.scss */ "./src/app/pages/dashboard/dashboard.page.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_ionic_native_spinner_dialog_ngx__WEBPACK_IMPORTED_MODULE_8__["SpinnerDialog"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
        ngx_spinner__WEBPACK_IMPORTED_MODULE_7__["NgxSpinnerService"],
        _services_data_service__WEBPACK_IMPORTED_MODULE_5__["DataService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["MenuController"],
        src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"],
        src_app_services_session_service__WEBPACK_IMPORTED_MODULE_9__["SessionService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpClient"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
], DashboardPage);



/***/ })

}]);
//# sourceMappingURL=pages-dashboard-dashboard-module-es2015.js.map