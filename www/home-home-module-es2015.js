(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-home-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\" style=\"font-size: 14px;\">\n      <ion-back-button text=\"\" icon=\"chevron-back\">\n      </ion-back-button>\n      STUDENT DETAILS\n    </ion-buttons>\n    <!-- <ion-title style=\"font-size:14px;\">\n      STUDENT DETAILS\n    </ion-title> -->\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n  <div class=\"outer\">\n    <div class=\"center-div\">\n      <ion-icon class=\"img\" *ngIf=\"data.student_image === null\" name=\"happy-outline\"></ion-icon>\n      <img class=\"img\" src={{assets+data.student_image}} alt={{data.first_name}} *ngIf=\"data.student_image !== null\" />\n    </div>\n    <div style=\"text-align: center;font-size:12px;margin-bottom: 10px;text-transform: uppercase;font-weight:500;\">\n      <span>{{data.first_name}} {{data.middle_name}} {{data.last_name}}</span></div>\n    <div style=\"text-align: center;font-size:12px;margin-bottom: 10px;\"><br></div>\n  </div>\n\n  <ion-list>\n    <ion-item (click)=\"posts(data)\">\n      <ion-icon slot=\"start\" name=\"megaphone\" item-left></ion-icon>\n      <ion-label>Homework & Posts</ion-label>\n      <ion-icon slot=\"end\" color=\"medium\" name=\"arrow-forward\"></ion-icon>\n    </ion-item>\n    <ion-item (click)=\"details(data)\">\n      <ion-icon slot=\"start\" name=\"person-circle\" item-left></ion-icon>\n      <ion-label>Student Details</ion-label>\n      <ion-icon slot=\"end\" color=\"medium\" name=\"arrow-forward\"></ion-icon>\n    </ion-item>\n    <ion-item (click)=\"fees(data)\">\n      <ion-icon slot=\"start\" name=\"pricetag\" item-left></ion-icon>\n      <ion-label>Fees</ion-label>\n      <ion-icon slot=\"end\" color=\"medium\" name=\"arrow-forward\"></ion-icon>\n    </ion-item>\n    <ion-item (click)=\"grades(data)\">\n      <ion-icon slot=\"start\" name=\"school\" item-left></ion-icon>\n      <ion-label>Grading</ion-label>\n      <ion-icon slot=\"end\" color=\"medium\" name=\"arrow-forward\"></ion-icon>\n    </ion-item>\n    <ion-item (click)=\"cbcgrades(data)\">\n      <ion-icon slot=\"start\" name=\"school\" item-left></ion-icon>\n      <ion-label>CBC Grading</ion-label>\n      <ion-icon slot=\"end\" color=\"medium\" name=\"arrow-forward\"></ion-icon>\n    </ion-item>\n    <ion-item (click)=\"analytics(data)\">\n      <ion-icon slot=\"start\" name=\"bar-chart\" item-left></ion-icon>\n      <ion-label>Analytics</ion-label>\n      <ion-icon slot=\"end\" color=\"medium\" name=\"arrow-forward\"></ion-icon>\n    </ion-item>\n    <ion-item (click)=\"attendance(data)\">\n      <ion-icon slot=\"start\"  name=\"checkmark-done-circle\" item-left></ion-icon>\n      <ion-label>Attendance</ion-label>\n      <ion-icon slot=\"end\" color=\"medium\" name=\"arrow-forward\"></ion-icon>\n    </ion-item>\n    <ion-item (click)=\"albums(data)\">\n      <ion-icon slot=\"start\" name=\"albums\" item-left></ion-icon>\n      <ion-label>Gallery</ion-label>\n      <ion-icon slot=\"end\" color=\"medium\" name=\"arrow-forward\"></ion-icon>\n    </ion-item>\n    <ion-item (click)=\"resources(data)\">\n      <ion-icon slot=\"start\" name=\"videocam\" item-left></ion-icon>\n      <ion-label>Resources</ion-label>\n      <ion-icon slot=\"end\" color=\"medium\" name=\"arrow-forward\"></ion-icon>\n    </ion-item>\n  </ion-list>\n</ion-content>");

/***/ }),

/***/ "./src/app/home/home.module.ts":
/*!*************************************!*\
  !*** ./src/app/home/home.module.ts ***!
  \*************************************/
/*! exports provided: HomePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home.page */ "./src/app/home/home.page.ts");







let HomePageModule = class HomePageModule {
};
HomePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild([
                {
                    path: '',
                    component: _home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"]
                }
            ])
        ],
        declarations: [_home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"]]
    })
], HomePageModule);



/***/ }),

/***/ "./src/app/home/home.page.scss":
/*!*************************************!*\
  !*** ./src/app/home/home.page.scss ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".welcome-card img {\n  height: 90px;\n  width: 90px;\n  border-radius: 4px;\n  margin-block: 20px;\n  overflow: hidden;\n}\n\nion-content {\n  font-size: 3rem;\n  -moz-columns: #000000;\n       columns: #000000;\n}\n\n.center {\n  text-align: center;\n  font-size: 12px;\n  margin-bottom: 20px;\n}\n\n.img {\n  height: 160px;\n  border-radius: 4px;\n  border-spacing: 0;\n  border-collapse: collapse;\n  -o-object-fit: cover;\n     object-fit: cover;\n  padding: 0;\n  width: 100%;\n  margin-top: 15px;\n  margin-bottom: 20px;\n}\n\n.inf {\n  text-align: center;\n  margin-top: 10px;\n  margin-bottom: 20px;\n  font-size: 14px;\n  width: 100%;\n}\n\n.img1 {\n  width: 100%;\n  z-index: 0;\n  max-height: 200px;\n  border-radius: 4px;\n}\n\nion-item {\n  color: #000000;\n  font-size: 14px;\n  font-weight: 400;\n}\n\nion-item ion-label {\n  color: #000000;\n  font-size: 16px;\n  font-weight: 500;\n}\n\nion-item ion-icon {\n  color: #000000;\n  font-size: 28px;\n}\n\n.outer {\n  background-color: #eee;\n  margin-bottom: 15px;\n}\n\n.center-div {\n  margin: 0 auto;\n  width: 160px;\n  font-size: 12px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9rb2tvZGF2aWQvRG93bmxvYWRzL2VwL3NyYy9hcHAvaG9tZS9ob21lLnBhZ2Uuc2NzcyIsInNyYy9hcHAvaG9tZS9ob21lLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUVBLGdCQUFBO0FDQUY7O0FERUE7RUFFRSxlQUFBO0VBQ0EscUJBQUE7T0FBQSxnQkFBQTtBQ0FGOztBREdBO0VBQ0Usa0JBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7QUNBRjs7QURJQTtFQUtDLGFBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EseUJBQUE7RUFDQSxvQkFBQTtLQUFBLGlCQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FDTEQ7O0FET0E7RUFDRSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtBQ0pGOztBRE1BO0VBQ0UsV0FBQTtFQUNBLFVBQUE7RUFFQSxpQkFBQTtFQUNBLGtCQUFBO0FDSkY7O0FETUE7RUFDRSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FDSEY7O0FESUU7RUFDRSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FDRko7O0FES0U7RUFDRSxjQUFBO0VBQ0EsZUFBQTtBQ0hKOztBRFFBO0VBQ0Usc0JBQUE7RUFDQSxtQkFBQTtBQ0xGOztBRE9BO0VBRUssY0FBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0FDTEwiLCJmaWxlIjoic3JjL2FwcC9ob21lL2hvbWUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLndlbGNvbWUtY2FyZCBpbWcge1xuICBoZWlnaHQ6IDkwcHg7XG4gIHdpZHRoOiA5MHB4O1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIG1hcmdpbi1ibG9jazogMjBweDtcbiAgLy9tYXgtaGVpZ2h0OiAzNXZoO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuaW9uLWNvbnRlbnR7XG5cbiAgZm9udC1zaXplOjNyZW07XG4gIGNvbHVtbnM6ICMwMDAwMDA7XG59XG5cbi5jZW50ZXIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgLy9ib3JkZXI6IDNweCBzb2xpZCBncmVlbjtcbn1cbi8vZm9udC1mYW1pbHk6IG1vbm9zcGFjZTtcbi5pbWd7XG4gIC8vZGlzcGxheTogZmxleDtcbiAgLy93aWR0aDogMzMuMyU7XG4gLy8gd2lkdGg6IDE1MHB4O1xuIC8vIGhlaWdodDogMTUwcHg7XG4gaGVpZ2h0OiAxNjBweDtcbiBib3JkZXItcmFkaXVzOiA0cHg7XG4gYm9yZGVyLXNwYWNpbmc6MDtcbiBib3JkZXItY29sbGFwc2U6Y29sbGFwc2U7XG4gb2JqZWN0LWZpdDogY292ZXI7XG4gcGFkZGluZzowO1xuIHdpZHRoOiAxMDAlO1xuIG1hcmdpbi10b3A6IDE1cHg7XG4gbWFyZ2luLWJvdHRvbTogMjBweDtcbn1cbi5pbmZ7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luLXRvcDogMTBweDtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgZm9udC1zaXplOjE0cHg7XG4gIHdpZHRoOiAxMDAlO1xufVxuLmltZzF7XG4gIHdpZHRoOiAxMDAlO1xuICB6LWluZGV4OiAwO1xuICAvL21heC1oZWlnaHQ6IFxuICBtYXgtaGVpZ2h0OjIwMHB4O1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG59XG5pb24taXRlbXtcbiAgY29sb3I6ICMwMDAwMDA7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgaW9uLWxhYmVse1xuICAgIGNvbG9yOiAjMDAwMDAwO1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBmb250LXdlaWdodDo1MDA7XG5cbiAgfVxuICBpb24taWNvbntcbiAgICBjb2xvcjogIzAwMDAwMDtcbiAgICBmb250LXNpemU6IDI4cHg7XG5cbiAgfVxuXG59XG4ub3V0ZXJ7XG4gIGJhY2tncm91bmQtY29sb3I6I2VlZTtcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcbn1cbi5jZW50ZXItZGl2XG57XG4gICAgIG1hcmdpbjogMCBhdXRvO1xuICAgICB3aWR0aDogMTYwcHg7IFxuICAgICBmb250LXNpemU6IDEycHg7XG4gICAgXG59IiwiLndlbGNvbWUtY2FyZCBpbWcge1xuICBoZWlnaHQ6IDkwcHg7XG4gIHdpZHRoOiA5MHB4O1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIG1hcmdpbi1ibG9jazogMjBweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuaW9uLWNvbnRlbnQge1xuICBmb250LXNpemU6IDNyZW07XG4gIGNvbHVtbnM6ICMwMDAwMDA7XG59XG5cbi5jZW50ZXIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbn1cblxuLmltZyB7XG4gIGhlaWdodDogMTYwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgYm9yZGVyLXNwYWNpbmc6IDA7XG4gIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XG4gIG9iamVjdC1maXQ6IGNvdmVyO1xuICBwYWRkaW5nOiAwO1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luLXRvcDogMTVweDtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbn1cblxuLmluZiB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luLXRvcDogMTBweDtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICB3aWR0aDogMTAwJTtcbn1cblxuLmltZzEge1xuICB3aWR0aDogMTAwJTtcbiAgei1pbmRleDogMDtcbiAgbWF4LWhlaWdodDogMjAwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbn1cblxuaW9uLWl0ZW0ge1xuICBjb2xvcjogIzAwMDAwMDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogNDAwO1xufVxuaW9uLWl0ZW0gaW9uLWxhYmVsIHtcbiAgY29sb3I6ICMwMDAwMDA7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cbmlvbi1pdGVtIGlvbi1pY29uIHtcbiAgY29sb3I6ICMwMDAwMDA7XG4gIGZvbnQtc2l6ZTogMjhweDtcbn1cblxuLm91dGVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VlZTtcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcbn1cblxuLmNlbnRlci1kaXYge1xuICBtYXJnaW46IDAgYXV0bztcbiAgd2lkdGg6IDE2MHB4O1xuICBmb250LXNpemU6IDEycHg7XG59Il19 */");

/***/ }),

/***/ "./src/app/home/home.page.ts":
/*!***********************************!*\
  !*** ./src/app/home/home.page.ts ***!
  \***********************************/
/*! exports provided: HomePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePage", function() { return HomePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/auth.service */ "./src/app/services/auth.service.ts");





let HomePage = class HomePage {
    constructor(route, router, navCtrl, authService) {
        this.route = route;
        this.router = router;
        this.navCtrl = navCtrl;
        this.authService = authService;
        this.terms = new Array();
        this.class_history = new Array();
        this.class_id = new Array();
        this.term_ids = new Array();
        this.reportcards = new Array();
        this.route.queryParams.subscribe(params => {
            if (this.router.getCurrentNavigation().extras.state) {
                this.data = this.router.getCurrentNavigation().extras.state.details;
                this.resource = this.router.getCurrentNavigation().extras.state.resources;
                if (this.data === null || this.data === undefined) {
                    this.navCtrl.navigateRoot('/dashboard');
                }
                else {
                    this.school = this.data.school;
                    this.assets = `https://${this.school}.eduweb.co.ke/assets/students/`;
                }
            }
        });
    }
    ngOnInit() {
    }
    posts(student) {
        // console.log(student);
        const navigationExtras = {
            state: {
                details: student,
            }
        };
        this.router.navigate(['blog'], navigationExtras);
    }
    details(student) {
        // console.log(student);
        const navigationExtras = {
            state: {
                details: student,
            }
        };
        this.router.navigate(['info'], navigationExtras);
    }
    fees(student) {
        // console.log(student);
        const navigationExtras = {
            state: {
                details: student,
            }
        };
        this.router.navigate(['fees'], navigationExtras);
    }
    onlyUnique(value, index, self) {
        return self.indexOf(value) === index;
    }
    grades(student) {
        //term ids
        // this.term_ids = [];
        // this.class_id = [];
        // for (var c of this.terms) {
        //   let t = c.term_id;
        //   let s = c.class_id;
        //   this.term_ids.push(t)
        //   this.class_id.push(s)
        // // }
        // // var x = this.class_id.filter(this.onlyUnique);
        // // var y = this.term_ids.filter(this.onlyUnique);
        const navigationExtras = {
            state: {
                details: student,
            }
        };
        this.router.navigate(['grading'], navigationExtras);
    }
    cbcgrades(student) {
        //term ids
        // this.term_ids = [];
        // this.class_id = [];
        // for (var c of this.terms) {
        //   let t = c.term_id;
        //   let s = c.class_id;
        //   this.term_ids.push(t)
        //   this.class_id.push(s)
        // // }
        // // var x = this.class_id.filter(this.onlyUnique);
        // // var y = this.term_ids.filter(this.onlyUnique);
        const navigationExtras = {
            state: {
                details: student,
            }
        };
        this.router.navigate(['cbcgrading'], navigationExtras);
    }
    analytics(student) {
        const navigationExtras = {
            state: {
                details: student,
            }
        };
        this.router.navigate(['analytics'], navigationExtras);
    }
    attendance(student) {
        const navigationExtras = {
            state: {
                details: student,
            }
        };
        console.log(student);
        this.router.navigate(['attendance'], navigationExtras);
    }
    albums(student) {
        // console.log(student);
        const navigationExtras = {
            state: {
                details: student,
            }
        };
        this.router.navigate(['gallery'], navigationExtras);
    }
    resources(student) {
        const navigationExtras = {
            state: {
                details: student,
                resource: this.resource
            }
        };
        this.router.navigate(['resources'], navigationExtras);
    }
};
HomePage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"] },
    { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] }
];
HomePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-home',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./home.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./home.page.scss */ "./src/app/home/home.page.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"],
        src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]])
], HomePage);



/***/ })

}]);
//# sourceMappingURL=home-home-module-es2015.js.map