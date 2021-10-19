function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-feedback-feedback-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/feedback/feedback.page.html":
  /*!*****************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/feedback/feedback.page.html ***!
    \*****************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesFeedbackFeedbackPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\" style=\"font-size: 14px;\">\n      <ion-back-button text=\"\" icon=\"chevron-back\"></ion-back-button>ADD FEEDBACK\n    </ion-buttons>\n    <!-- <ion-title>ADD FEEDBACK </ion-title> -->\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"\">\n  <ion-list *ngIf=\"students.length === 0 && fake === 1\">\n    <ion-spinner name=\"lines-small\" style=\"text-align: center; margin-left: 50%; margin-right: 50%;\"></ion-spinner>\n  </ion-list>\n  <form #form=\"ngForm\" (ngSubmit)=\"post(form)\" method=\"post\">\n    <div *ngIf=\"refferences != undefined; else empty_subject\">\n      <ion-item lines=\"none\">\n        <ion-label position=\"stacked\">Student(s)</ion-label>\n        <ion-input type=\"text\" [(ngModel)]=\"student_name\" name=\"student\"></ion-input>\n      </ion-item>\n      <ion-item lines=\"none\"> \n        <ion-label position=\"stacked\">Subject </ion-label>\n        <ion-input type=\"text\" [(ngModel)]=\"subject\" name=\"subject\"></ion-input>\n      </ion-item>\n      <ion-item lines=\"none\">\n        <ion-label position=\"stacked\">Message</ion-label>\n        <ion-textarea ngModel name=\"message\" maxlength=\"500\"></ion-textarea>\n      </ion-item>\n      <ion-list>\n        <ion-row>\n          <ion-col col-4></ion-col>\n          <ion-col col-4>\n            <ion-button type=\"submit\" color=\"warning\">SEND FEEDBACK</ion-button>\n          </ion-col>\n          <ion-col col-4></ion-col>\n        </ion-row>\n      </ion-list>\n    </div>\n    <ng-template #empty_subject>\n      <ion-item lines=\"none\">\n        <ion-label position=\"stacked\" style=\"margin-bottom: 5px;\">Student(s)</ion-label>\n        <ion-select multiple=\"true\" ngModel name=\"student\">\n          <ion-select-option *ngFor=\"let user of students\" value={{user.student_id}}>\n            <small>{{user.first_name + ' ' + user.last_name}}</small></ion-select-option>\n        </ion-select>\n      </ion-item>\n      <ion-item  lines=\"none\">\n        <ion-label position=\"stacked\"  style=\"margin-bottom: 5px;\">Subject</ion-label>\n          <ion-input ngModel name=\"subject\"></ion-input>\n      </ion-item>\n      <ion-item  lines=\"none\">\n        <ion-label position=\"stacked\">Message</ion-label>\n        <ion-textarea ngModel cols=\"20\" rows=\"7\" placeholder=\"Type message...\" name=\"message\" maxlength=\"500\"></ion-textarea>\n      </ion-item>\n      <ion-list>\n        <ion-row>\n          <ion-col col-4></ion-col>\n          <ion-col col-4>\n            \n          </ion-col>\n          <ion-col col-4>\n            <ion-button type=\"submit\" color=\"warning\">SEND FEEDBACK</ion-button>\n          </ion-col>\n        </ion-row>\n      </ion-list>\n    </ng-template>\n  </form>\n</ion-content>";
    /***/
  },

  /***/
  "./src/app/pages/feedback/feedback.module.ts":
  /*!***************************************************!*\
    !*** ./src/app/pages/feedback/feedback.module.ts ***!
    \***************************************************/

  /*! exports provided: FeedbackPageModule */

  /***/
  function srcAppPagesFeedbackFeedbackModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FeedbackPageModule", function () {
      return FeedbackPageModule;
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


    var _feedback_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./feedback.page */
    "./src/app/pages/feedback/feedback.page.ts");

    var routes = [{
      path: '',
      component: _feedback_page__WEBPACK_IMPORTED_MODULE_6__["FeedbackPage"]
    }];

    var FeedbackPageModule = function FeedbackPageModule() {
      _classCallCheck(this, FeedbackPageModule);
    };

    FeedbackPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)],
      declarations: [_feedback_page__WEBPACK_IMPORTED_MODULE_6__["FeedbackPage"]]
    })], FeedbackPageModule);
    /***/
  },

  /***/
  "./src/app/pages/feedback/feedback.page.scss":
  /*!***************************************************!*\
    !*** ./src/app/pages/feedback/feedback.page.scss ***!
    \***************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesFeedbackFeedbackPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-content {\n  font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Oxygen, Ubuntu, Cantarell, \"Open Sans\", \"Helvetica Neue\", sans-serif;\n  background-color: lightgray;\n}\n\nion-textarea {\n  border: solid 1px slategray;\n  padding: 10px;\n  border-radius: 10px;\n  font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Oxygen, Ubuntu, Cantarell, \"Open Sans\", \"Helvetica Neue\", sans-serif;\n}\n\nion-textarea ::-moz-placeholder {\n  font-style: italic !important;\n}\n\nion-textarea ::placeholder {\n  font-style: italic !important;\n}\n\nion-label {\n  margin-left: 10px;\n  font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Oxygen, Ubuntu, Cantarell, \"Open Sans\", \"Helvetica Neue\", sans-serif !important;\n}\n\nion-input {\n  border: solid 1px slategray;\n  border-radius: 8px;\n  padding-left: 10px !important;\n  font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Oxygen, Ubuntu, Cantarell, \"Open Sans\", \"Helvetica Neue\", sans-serif;\n}\n\nion-select {\n  border: solid 1px slategray;\n  padding: 10px;\n  border-radius: 8px;\n  font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Oxygen, Ubuntu, Cantarell, \"Open Sans\", \"Helvetica Neue\", sans-serif;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9rb2tvZGF2aWQvRG93bmxvYWRzL2VwL3NyYy9hcHAvcGFnZXMvZmVlZGJhY2svZmVlZGJhY2sucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9mZWVkYmFjay9mZWVkYmFjay5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSx3SUFBQTtFQUNBLDJCQUFBO0FDQ0o7O0FEQ0E7RUFDSSwyQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUlBLHdJQUFBO0FDREo7O0FERkk7RUFDSSw2QkFBQTtBQ0lSOztBRExJO0VBQ0ksNkJBQUE7QUNJUjs7QURBQTtFQUNJLGlCQUFBO0VBQ0EsbUpBQUE7QUNHSjs7QUREQTtFQUNJLDJCQUFBO0VBQ0Esa0JBQUE7RUFDQSw2QkFBQTtFQUNBLHdJQUFBO0FDSUo7O0FERkE7RUFDSSwyQkFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLHdJQUFBO0FDS0oiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9mZWVkYmFjay9mZWVkYmFjay5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29udGVudHtcbiAgICBmb250LWZhbWlseTogLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCAnU2Vnb2UgVUknLCBSb2JvdG8sIE94eWdlbiwgVWJ1bnR1LCBDYW50YXJlbGwsICdPcGVuIFNhbnMnLCAnSGVsdmV0aWNhIE5ldWUnLCBzYW5zLXNlcmlmO1xuICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JheTtcbn1cbmlvbi10ZXh0YXJlYXtcbiAgICBib3JkZXI6IHNvbGlkIDFweCBzbGF0ZWdyYXk7XG4gICAgcGFkZGluZzogMTBweDtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIDo6cGxhY2Vob2xkZXJ7XG4gICAgICAgIGZvbnQtc3R5bGU6IGl0YWxpYyAhaW1wb3J0YW50O1xuICAgIH1cbiAgICBmb250LWZhbWlseTogLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCAnU2Vnb2UgVUknLCBSb2JvdG8sIE94eWdlbiwgVWJ1bnR1LCBDYW50YXJlbGwsICdPcGVuIFNhbnMnLCAnSGVsdmV0aWNhIE5ldWUnLCBzYW5zLXNlcmlmO1xufVxuaW9uLWxhYmVse1xuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICAgIGZvbnQtZmFtaWx5OiAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsICdTZWdvZSBVSScsIFJvYm90bywgT3h5Z2VuLCBVYnVudHUsIENhbnRhcmVsbCwgJ09wZW4gU2FucycsICdIZWx2ZXRpY2EgTmV1ZScsIHNhbnMtc2VyaWYgIWltcG9ydGFudDtcbn1cbmlvbi1pbnB1dHtcbiAgICBib3JkZXI6IHNvbGlkIDFweCBzbGF0ZWdyYXk7XG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xuICAgIHBhZGRpbmctbGVmdDogMTBweCAhaW1wb3J0YW50O1xuICAgIGZvbnQtZmFtaWx5OiAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsICdTZWdvZSBVSScsIFJvYm90bywgT3h5Z2VuLCBVYnVudHUsIENhbnRhcmVsbCwgJ09wZW4gU2FucycsICdIZWx2ZXRpY2EgTmV1ZScsIHNhbnMtc2VyaWY7XG59XG5pb24tc2VsZWN0e1xuICAgIGJvcmRlcjpzb2xpZCAxcHggc2xhdGVncmF5O1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xuICAgIGZvbnQtZmFtaWx5OiAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsICdTZWdvZSBVSScsIFJvYm90bywgT3h5Z2VuLCBVYnVudHUsIENhbnRhcmVsbCwgJ09wZW4gU2FucycsICdIZWx2ZXRpY2EgTmV1ZScsIHNhbnMtc2VyaWY7XG59XG4iLCJpb24tY29udGVudCB7XG4gIGZvbnQtZmFtaWx5OiAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsIFwiU2Vnb2UgVUlcIiwgUm9ib3RvLCBPeHlnZW4sIFVidW50dSwgQ2FudGFyZWxsLCBcIk9wZW4gU2Fuc1wiLCBcIkhlbHZldGljYSBOZXVlXCIsIHNhbnMtc2VyaWY7XG4gIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JheTtcbn1cblxuaW9uLXRleHRhcmVhIHtcbiAgYm9yZGVyOiBzb2xpZCAxcHggc2xhdGVncmF5O1xuICBwYWRkaW5nOiAxMHB4O1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBmb250LWZhbWlseTogLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCBcIlNlZ29lIFVJXCIsIFJvYm90bywgT3h5Z2VuLCBVYnVudHUsIENhbnRhcmVsbCwgXCJPcGVuIFNhbnNcIiwgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBzYW5zLXNlcmlmO1xufVxuaW9uLXRleHRhcmVhIDo6cGxhY2Vob2xkZXIge1xuICBmb250LXN0eWxlOiBpdGFsaWMgIWltcG9ydGFudDtcbn1cblxuaW9uLWxhYmVsIHtcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gIGZvbnQtZmFtaWx5OiAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsIFwiU2Vnb2UgVUlcIiwgUm9ib3RvLCBPeHlnZW4sIFVidW50dSwgQ2FudGFyZWxsLCBcIk9wZW4gU2Fuc1wiLCBcIkhlbHZldGljYSBOZXVlXCIsIHNhbnMtc2VyaWYgIWltcG9ydGFudDtcbn1cblxuaW9uLWlucHV0IHtcbiAgYm9yZGVyOiBzb2xpZCAxcHggc2xhdGVncmF5O1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG4gIHBhZGRpbmctbGVmdDogMTBweCAhaW1wb3J0YW50O1xuICBmb250LWZhbWlseTogLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCBcIlNlZ29lIFVJXCIsIFJvYm90bywgT3h5Z2VuLCBVYnVudHUsIENhbnRhcmVsbCwgXCJPcGVuIFNhbnNcIiwgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBzYW5zLXNlcmlmO1xufVxuXG5pb24tc2VsZWN0IHtcbiAgYm9yZGVyOiBzb2xpZCAxcHggc2xhdGVncmF5O1xuICBwYWRkaW5nOiAxMHB4O1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG4gIGZvbnQtZmFtaWx5OiAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsIFwiU2Vnb2UgVUlcIiwgUm9ib3RvLCBPeHlnZW4sIFVidW50dSwgQ2FudGFyZWxsLCBcIk9wZW4gU2Fuc1wiLCBcIkhlbHZldGljYSBOZXVlXCIsIHNhbnMtc2VyaWY7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/pages/feedback/feedback.page.ts":
  /*!*************************************************!*\
    !*** ./src/app/pages/feedback/feedback.page.ts ***!
    \*************************************************/

  /*! exports provided: FeedbackPage */

  /***/
  function srcAppPagesFeedbackFeedbackPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FeedbackPage", function () {
      return FeedbackPage;
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


    var _services_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../services/data.service */
    "./src/app/services/data.service.ts");
    /* harmony import */


    var src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/services/alert.service */
    "./src/app/services/alert.service.ts");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var src_app_services_session_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/app/services/session.service */
    "./src/app/services/session.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var FeedbackPage =
    /*#__PURE__*/
    function () {
      function FeedbackPage(alertService, dataService, authService, navCtrl, sessionService, router, route) {
        _classCallCheck(this, FeedbackPage);

        this.alertService = alertService;
        this.dataService = dataService;
        this.authService = authService;
        this.navCtrl = navCtrl;
        this.sessionService = sessionService;
        this.router = router;
        this.route = route;
        this.fake = 0;
        this.sessionService.sessionTimeOut();
        this.refferences = this.router.getCurrentNavigation().extras.state;
        console.log(this.refferences);

        if (this.router.getCurrentNavigation().extras.state != null) {
          this.student_name = this.router.getCurrentNavigation().extras.state.studentName;
          this.subject = this.router.getCurrentNavigation().extras.state.subject;
          this.student_id = this.router.getCurrentNavigation().extras.state.student_id;
        }

        this.students = new Array();
      }

      _createClass(FeedbackPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "ionViewWillEnter",
        value: function ionViewWillEnter() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee() {
            var _this = this;

            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    this.authService.presentLoading();
                    _context.next = 3;
                    return this.authService.getStudents().subscribe(function (news) {
                      _this.authService.dismiss();

                      _this.data = news;
                      _this.students = _this.data.data.students;
                      _this.school = _this.students[0].school; // console.log(this.students, this.school);
                    });

                  case 3:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }, {
        key: "post",
        value: function post(form) {
          var _this2 = this;

          this.authService.presentLoading();

          if (this.refferences != undefined) {
            if (typeof form.value.student != 'number') {
              form.value.student = this.student_id;
            }

            this.authService.addfeed(form.value.student, form.value.subject, form.value.message, this.school).subscribe(function (data) {
              _this2.response = data;

              if (_this2.response.response) {
                _this2.authService.dismiss();

                _this2.navCtrl.navigateRoot('/dashboard');

                _this2.alertService.presentToast(_this2.response.data);
              } else {
                _this2.alertService.presentToast('Error Occured while posting your feedback...');
              }
            }, function (error) {
              _this2.authService.dismiss();

              console.log(error);
            }, function () {});
          } else {
            this.authService.addfeed(form.value.student, form.value.subject, form.value.message, this.school).subscribe(function (data) {
              _this2.response = data;
              console.log(_this2.response);

              if (_this2.response.response) {
                _this2.authService.dismiss();

                _this2.navCtrl.navigateRoot('/dashboard');

                _this2.alertService.presentToast(_this2.response.data);
              } else {
                _this2.alertService.presentToast('Error Occured while posting your feedback...');
              }
            }, function (error) {
              _this2.authService.dismiss();

              console.log(error);
            }, function () {});
          }
        }
      }]);

      return FeedbackPage;
    }();

    FeedbackPage.ctorParameters = function () {
      return [{
        type: src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_4__["AlertService"]
      }, {
        type: _services_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"]
      }, {
        type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavController"]
      }, {
        type: src_app_services_session_service__WEBPACK_IMPORTED_MODULE_6__["SessionService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"]
      }];
    };

    FeedbackPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-feedback',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./feedback.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/feedback/feedback.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./feedback.page.scss */
      "./src/app/pages/feedback/feedback.page.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_4__["AlertService"], _services_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"], src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavController"], src_app_services_session_service__WEBPACK_IMPORTED_MODULE_6__["SessionService"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"]])], FeedbackPage);
    /***/
  }
}]);
//# sourceMappingURL=pages-feedback-feedback-module-es5.js.map