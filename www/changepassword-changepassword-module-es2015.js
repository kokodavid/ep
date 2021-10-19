(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["changepassword-changepassword-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/changepassword/changepassword.page.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/changepassword/changepassword.page.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\" style=\"font-size: 14px;\">\n      <ion-back-button text=\"\" icon=\"chevron-back\"></ion-back-button>RESET PASSWORD\n    </ion-buttons>\n    <!-- <ion-title>RESET PASSWORD</ion-title> -->\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <form #form=\"ngForm\" (ngSubmit)=\"reset(form)\" method=\"post\">\n    <ion-item>\n      <ion-icon slot=\"start\" name=\"lock-closed\"></ion-icon>\n      <!-- <ion-label position=\"floating\">Current Password</ion-label> -->\n      <ion-input ngModel type={{type}} required placeholder=\"Current Password\" name=\"oldpass\"></ion-input>\n      <ion-icon ion-button *ngIf=\"showPasswordText == 1\" name=\"eye\" (click)=\"managePassword()\" slot=\"end\">\n      </ion-icon>\n      <ion-icon ion-button *ngIf=\"showPasswordText == 0\" name=\"eye-off\" (click)=\"managePassword()\" slot=\"end\">\n      </ion-icon>\n    </ion-item>\n    <small *ngIf=\"sameAsOld == true\" style=\"color: red;\"> <i>\n      <ion-icon slot=\"start\" name=\"alert-circle\"></ion-icon>New password cannot match old password\n    </i></small>\n    <ion-item>\n      <ion-icon slot=\"start\" name=\"lock-closed\"></ion-icon>\n      <!-- <ion-label position=\"floating\">New Password</ion-label> -->\n      <!-- <ion-input ngModel type=\"{{type}}\" name=\"newpassword\"></ion-input> -->\n      <ion-input ngModel type={{newtype}} required placeholder=\"New Password\" name=\"newpassword\"></ion-input>\n      <ion-icon ion-button *ngIf=\"showNewText == 1\" name=\"eye\" (click)=\"managenewPassword()\" slot=\"end\">\n      </ion-icon>\n      <ion-icon ion-button *ngIf=\"showNewText == 0\" name=\"eye-off\" (click)=\"managenewPassword()\" slot=\"end\">\n      </ion-icon>\n\n    </ion-item>\n    <small *ngIf=\"shortPass == true\" style=\"color: red;\"> <i>\n        <ion-icon slot=\"start\" name=\"alert-circle\"></ion-icon>Password with 8 characters minimum(including digits) is\n        required.\n      </i></small>\n    <small *ngIf=\"sameAsOld == true\" style=\"color: red;\"> <i>\n        <ion-icon slot=\"start\" name=\"alert-circle\"></ion-icon>New password cannot match old password\n      </i></small>\n    <small *ngIf=\"notSame == true\" style=\"color: red;\"> <i>\n        <ion-icon slot=\"start\" name=\"alert-circle\"></ion-icon>New passwords do not match.\n      </i></small>\n    <ion-item>\n\n      <ion-icon slot=\"start\" name=\"lock-closed\"></ion-icon>\n      <!-- <ion-label position=\"floating\">Verify New Password</ion-label> -->\n      <!-- <ion-input  ngModel  type=\"{{type}}\" name=\"repassword\"></ion-input> -->\n      <ion-input ngModel type={{newtype}} required placeholder=\"Verify New Password\" name=\"repassword\"></ion-input>\n      <ion-icon ion-button *ngIf=\"showNewText == 1\" name=\"eye\" (click)=\"managenewPassword()\" slot=\"end\">\n      </ion-icon>\n      <ion-icon ion-button *ngIf=\"showNewText == 0\" name=\"eye-off\" (click)=\"managenewPassword()\" slot=\"end\">\n      </ion-icon>\n    </ion-item>\n    <small *ngIf=\"notSame == true\" style=\"color: red;\"> <i>\n        <ion-icon slot=\"start\" name=\"alert-circle\"></ion-icon>New passwords do not match.\n      </i></small>\n    <ion-row>\n      <ion-col col-4></ion-col>\n      <ion-col col-4>\n        <ion-button type=\"submit\" color=\"warning\">CHANGE PASSWORD</ion-button>\n      </ion-col>\n      <ion-col col-4></ion-col>\n    </ion-row>\n  </form>\n\n</ion-content>");

/***/ }),

/***/ "./src/app/changepassword/changepassword.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/changepassword/changepassword.module.ts ***!
  \*********************************************************/
/*! exports provided: ChangepasswordPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChangepasswordPageModule", function() { return ChangepasswordPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _changepassword_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./changepassword.page */ "./src/app/changepassword/changepassword.page.ts");







const routes = [
    {
        path: '',
        component: _changepassword_page__WEBPACK_IMPORTED_MODULE_6__["ChangepasswordPage"]
    }
];
let ChangepasswordPageModule = class ChangepasswordPageModule {
};
ChangepasswordPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_changepassword_page__WEBPACK_IMPORTED_MODULE_6__["ChangepasswordPage"]]
    })
], ChangepasswordPageModule);



/***/ }),

/***/ "./src/app/changepassword/changepassword.page.scss":
/*!*********************************************************!*\
  !*** ./src/app/changepassword/changepassword.page.scss ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NoYW5nZXBhc3N3b3JkL2NoYW5nZXBhc3N3b3JkLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/changepassword/changepassword.page.ts":
/*!*******************************************************!*\
  !*** ./src/app/changepassword/changepassword.page.ts ***!
  \*******************************************************/
/*! exports provided: ChangepasswordPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChangepasswordPage", function() { return ChangepasswordPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/alert.service */ "./src/app/services/alert.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");






let ChangepasswordPage = class ChangepasswordPage {
    constructor(authService, route, router, navCtrl, alertService) {
        this.authService = authService;
        this.route = route;
        this.router = router;
        this.navCtrl = navCtrl;
        this.alertService = alertService;
        // this.feedback = new Array();
        this.route.queryParams.subscribe(params => {
            if (this.router.getCurrentNavigation().extras.state) {
                this.data = this.router.getCurrentNavigation().extras.state.details;
                console.log(this.data);
                // t his.school = this.data.school;
            }
        });
        this.showPasswordText = 0;
        this.showNewText = 0;
        this.type = 'password';
        this.newtype = 'password';
        this.shortPass = false;
        this.sameAsOld = false;
        this.notSame = false;
        this.isEmpty = false;
    }
    ngOnInit() {
    }
    managePassword() {
        if (this.showPasswordText === 0) {
            this.showPasswordText = 1;
            this.type = 'text';
            // console.log(this.showPasswordText);
        }
        else if (this.showPasswordText === 1) {
            this.showPasswordText = 0;
            this.type = 'password';
            // console.log(this.showPasswordText);
        }
    }
    managenewPassword() {
        if (this.showNewText === 0) {
            this.showNewText = 1;
            this.newtype = 'text';
            // console.log(this.showPasswordText);
        }
        else if (this.showNewText === 1) {
            this.showNewText = 0;
            this.newtype = 'password';
            // console.log(this.showPasswordText);
        }
    }
    reset(form) {
        this.authService.presentLoading();
        if (form.value.newpassword.length < 8 || !/\d/.test(form.value.newpassword)) {
            this.authService.dismiss();
            this.shortPass = true;
        }
        else if (form.value.oldpass === form.value.newpassword) {
            this.authService.dismiss();
            this.sameAsOld = true;
        }
        else if (form.value.newpassword !== form.value.repassword) {
            this.authService.dismiss();
            this.notSame = true;
        }
        else {
            this.shortPass = false;
            this.sameAsOld = false;
            this.notSame = false;
            this.authService.reset(form.value.oldpass, form.value.newpassword).subscribe(data => {
                this.response = data;
                console.log(this.response);
                if (this.response.response === 'success') {
                    this.authService.dismiss();
                    this.alertService.presentToast('Password changed successfully...');
                    this.navCtrl.navigateRoot('/dashboard');
                }
                else {
                    this.authService.dismiss();
                    this.authService.presentAlert1(this.response.data);
                }
            }, error => {
                this.authService.dismiss();
                console.log(error);
            }, () => {
            });
        }
    }
};
ChangepasswordPage.ctorParameters = () => [
    { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavController"] },
    { type: src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_4__["AlertService"] }
];
ChangepasswordPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-changepassword',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./changepassword.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/changepassword/changepassword.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./changepassword.page.scss */ "./src/app/changepassword/changepassword.page.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavController"],
        src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_4__["AlertService"]])
], ChangepasswordPage);



/***/ })

}]);
//# sourceMappingURL=changepassword-changepassword-module-es2015.js.map