function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-student-homework-homework-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/student/homework/homework.page.html":
  /*!*************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/student/homework/homework.page.html ***!
    \*************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesStudentHomeworkHomeworkPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\" style=\"font-size: 14px;\">\n      <ion-back-button text=\"\" icon=\"chevron-back\">\n      </ion-back-button>\n      <div style=\"text-transform: uppercase;\"> {{homeworkInfo.title}} {{homeworkInfo.subject_name}}</div>\n    </ion-buttons>\n    <!-- <ion-title style=\"font-size:14px;\">POSTS & HOMEWORK</ion-title> -->\n  </ion-toolbar>\n</ion-header>\n<ion-content class=\"ion-no-padding\">\n  <ion-card>\n    <ion-card-content>\n      <ion-grid>\n        <ion-row>\n          <ion-col col-12><strong>By :</strong> {{homeworkInfo.posted_by}}</ion-col>\n\n        </ion-row>\n        <ion-row>\n          <ion-col col-4>\n            <strong>Posted:</strong> {{this.formatDate(homeworkInfo.assigned_date)}}\n          </ion-col>\n          <ion-col col-8><strong>Due in:</strong> {{this.formatDate(homeworkInfo.due_date)}}</ion-col>\n\n        </ion-row>\n        <ion-row>\n          <ion-col col-12>\n            <div class=\"info\" [innerHTML]=\"homeworkInfo.body\" style=\"font-size: 14px;\"></div>\n            \n          </ion-col>\n        </ion-row>\n        <div *ngIf=\"homeworkInfo.attachment\">\n          <div *ngIf=\"attachments.length > 0\" class=\"ion-no-padding\">\n            <ion-list *ngFor=\"let items of attachments; let i = index;\">\n              <ion-item style=\"font-size:14px; color: blue; border-bottom: blue 1px !important\" no-padding (click)=\"download(items,assets+items)\">\n                <span> {{i+1}}. <ion-icon name=\"document-attach\" md=\"md-attach\"></ion-icon>\n                <a  style=\"color: blue;font-size:13px; \"> {{items}}  </a></span>\n              </ion-item>\n            </ion-list>\n          </div>\n          <!-- <ion-row>\n            <ion-col col-21 (click)=\"download(homeworkInfo.attachment, assets+homeworkInfo.attachment)\">\n              <strong>Attachment: </strong>\n              <a style=\"color: blue;\"> {{homeworkInfo.attachment}} </a>\n            </ion-col>\n          </ion-row> -->\n        </div>\n\n      </ion-grid>\n    </ion-card-content>\n  </ion-card>\n  <ion-fab *ngIf=\"feed === 'true'\" vertical=\"bottom\" (click)=\"addfeed()\" horizontal=\"end\" slot=\"fixed\">\n    <ion-fab-button color=\"tertiary\">\n      <ion-icon name=\"chatbox-ellipses\"></ion-icon>\n    </ion-fab-button>\n  </ion-fab>\n</ion-content>";
    /***/
  },

  /***/
  "./src/app/pages/student/homework/homework.module.ts":
  /*!***********************************************************!*\
    !*** ./src/app/pages/student/homework/homework.module.ts ***!
    \***********************************************************/

  /*! exports provided: HomeworkPageModule */

  /***/
  function srcAppPagesStudentHomeworkHomeworkModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomeworkPageModule", function () {
      return HomeworkPageModule;
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


    var _homework_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./homework.page */
    "./src/app/pages/student/homework/homework.page.ts");

    var routes = [{
      path: '',
      component: _homework_page__WEBPACK_IMPORTED_MODULE_6__["HomeworkPage"]
    }];

    var HomeworkPageModule = function HomeworkPageModule() {
      _classCallCheck(this, HomeworkPageModule);
    };

    HomeworkPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)],
      declarations: [_homework_page__WEBPACK_IMPORTED_MODULE_6__["HomeworkPage"]]
    })], HomeworkPageModule);
    /***/
  },

  /***/
  "./src/app/pages/student/homework/homework.page.scss":
  /*!***********************************************************!*\
    !*** ./src/app/pages/student/homework/homework.page.scss ***!
    \***********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesStudentHomeworkHomeworkPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-segment {\n  text-transform: none;\n}\nion-segment ion-label {\n  color: white;\n  font-size: 12px;\n}\nion-content {\n  font-size: 12px;\n}\nion-content ion-col {\n  color: black;\n  font-size: 12px;\n}\nion-content .info {\n  color: black;\n  font-size: 12px;\n}\nion-content ion-list ::-webkit-scrollbar {\n  display: inline;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9rb2tvZGF2aWQvRG93bmxvYWRzL2VwL3NyYy9hcHAvcGFnZXMvc3R1ZGVudC9ob21ld29yay9ob21ld29yay5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL3N0dWRlbnQvaG9tZXdvcmsvaG9tZXdvcmsucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksb0JBQUE7QUNDSjtBRENJO0VBQ0ksWUFBQTtFQUNBLGVBQUE7QUNDUjtBREVBO0VBQ0ksZUFBQTtBQ0NKO0FEQUk7RUFDSSxZQUFBO0VBQ0EsZUFBQTtBQ0VSO0FEQUk7RUFDSSxZQUFBO0VBQ0EsZUFBQTtBQ0VSO0FEQ1E7RUFDSSxlQUFBO0FDQ1oiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9zdHVkZW50L2hvbWV3b3JrL2hvbWV3b3JrLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1zZWdtZW50e1xuICAgIHRleHQtdHJhbnNmb3JtOm5vbmUgO1xuICAgIC8vY29sb3I6d2hpdGU7XG4gICAgaW9uLWxhYmVse1xuICAgICAgICBjb2xvcjp3aGl0ZTtcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgIH1cbn1cbmlvbi1jb250ZW50e1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICBpb24tY29se1xuICAgICAgICBjb2xvcjpibGFjaztcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgIH1cbiAgICAuaW5mb3tcbiAgICAgICAgY29sb3I6YmxhY2s7XG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICB9XG4gICAgaW9uLWxpc3R7XG4gICAgICAgIDo6LXdlYmtpdC1zY3JvbGxiYXJ7XG4gICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmU7XG4gICAgICAgIH1cbiAgICB9XG5cbn1cbi8vIC5sb2FkZXJ7XG4vLyBcdGJhY2tncm91bmQ6ICNmMjBkNDkgIWltcG9ydGFudDtcbi8vIFx0Ym9yZGVyLXJhZGl1czoxMDBweDtcbi8vIFx0aGVpZ2h0OjIwcHg7XG4vLyBcdHB7XG4vLyBcdFx0dGV4dC1hbGlnbjpjZW50ZXI7XG4vLyBcdFx0Y29sb3I6d2hpdGUgIWltcG9ydGFudDtcbi8vIFx0XHR0ZXh0LWFsaWduOmNlbnRlcjtcbi8vIFx0fVxuLy8gfVxuXG4vLyBpb24tY2FyZC1oZWFkZXJ7XG4gICAgXG4vLyB9IiwiaW9uLXNlZ21lbnQge1xuICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcbn1cbmlvbi1zZWdtZW50IGlvbi1sYWJlbCB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC1zaXplOiAxMnB4O1xufVxuXG5pb24tY29udGVudCB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbn1cbmlvbi1jb250ZW50IGlvbi1jb2wge1xuICBjb2xvcjogYmxhY2s7XG4gIGZvbnQtc2l6ZTogMTJweDtcbn1cbmlvbi1jb250ZW50IC5pbmZvIHtcbiAgY29sb3I6IGJsYWNrO1xuICBmb250LXNpemU6IDEycHg7XG59XG5pb24tY29udGVudCBpb24tbGlzdCA6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgZGlzcGxheTogaW5saW5lO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/pages/student/homework/homework.page.ts":
  /*!*********************************************************!*\
    !*** ./src/app/pages/student/homework/homework.page.ts ***!
    \*********************************************************/

  /*! exports provided: HomeworkPage */

  /***/
  function srcAppPagesStudentHomeworkHomeworkPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomeworkPage", function () {
      return HomeworkPage;
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


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var moment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! moment */
    "./node_modules/moment/moment.js");
    /* harmony import */


    var moment__WEBPACK_IMPORTED_MODULE_4___default =
    /*#__PURE__*/
    __webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_4__);
    /* harmony import */


    var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/services/auth.service */
    "./src/app/services/auth.service.ts");
    /* harmony import */


    var _ionic_native_file_opener_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @ionic-native/file-opener/ngx */
    "./node_modules/@ionic-native/file-opener/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @ionic-native/file-transfer/ngx */
    "./node_modules/@ionic-native/file-transfer/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @ionic-native/file/ngx */
    "./node_modules/@ionic-native/file/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var src_app_services_env_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! src/app/services/env.service */
    "./src/app/services/env.service.ts");
    /* harmony import */


    var src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! src/app/services/alert.service */
    "./src/app/services/alert.service.ts");

    var HomeworkPage =
    /*#__PURE__*/
    //7401d099f0fc693bf578b465e4e9902912741e54
    function () {
      function HomeworkPage(route, router, authService, transfer, file, fileOpener, http, env, alertService) {
        var _this = this;

        _classCallCheck(this, HomeworkPage);

        this.route = route;
        this.router = router;
        this.authService = authService;
        this.transfer = transfer;
        this.file = file;
        this.fileOpener = fileOpener;
        this.http = http;
        this.env = env;
        this.alertService = alertService;
        this.homeworkInfo = new Object();
        this.route.queryParams.subscribe(function (params) {
          if (_this.router.getCurrentNavigation().extras.state) {
            _this.homeworkInfo = _this.router.getCurrentNavigation().extras.state.details;
            _this.school = _this.router.getCurrentNavigation().extras.state.school;
            _this.student_id = _this.router.getCurrentNavigation().extras.state.student_id;
            _this.student_name = _this.router.getCurrentNavigation().extras.state.student;
            var filename = _this.homeworkInfo.attachment ? _this.homeworkInfo.attachment : null;
            var files = filename === null ? '' : filename;
            var name = files; // .replace(/ /g, '%20');

            var nameArr = name === null ? null : name.split(',');
            _this.attachments = nameArr[0] !== '' ? nameArr : [];
            _this.assets = "https://".concat(_this.school, ".eduweb.co.ke/assets/posts/");
          }
        });
      }

      _createClass(HomeworkPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          return this.http.get(this.env.API_URL + 'getParticularHomework/' + this.school + '/' + this.student_id + '/' + this.homeworkInfo.homework_id).subscribe(function (response) {
            console.log(response);
          });
        }
      }, {
        key: "ionViewWillEnter",
        value: function ionViewWillEnter() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee() {
            var _this2 = this;

            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
                    return this.authService.checkFeed().then(function (feed) {
                      console.log(feed);
                      _this2.feed = feed;
                    });

                  case 2:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }, {
        key: "getMIMEtype",
        value: function getMIMEtype(extn) {
          var ext = extn.toLowerCase();
          var MIMETypes = {
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
      }, {
        key: "open",
        value: function open(file) {
          var _this3 = this;

          this.authService.dismiss(); // this.spinnerDialog.hide();

          var fileExtn = file.split('.').reverse()[0];
          var fileMIMEType = this.getMIMEtype(fileExtn);
          console.log(fileExtn, fileMIMEType, file);
          this.fileOpener.showOpenWithDialog(file, fileMIMEType).then(function () {
            return console.log('File is opened');
          })["catch"](function (e) {
            _this3.alertService.presentToast(e);
          });
        }
      }, {
        key: "download",
        value: function download(fileName, filePath) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee2() {
            var _this4 = this;

            var url;
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    _context2.next = 2;
                    return this.authService.presentLoading();

                  case 2:
                    // this.spinnerDialog.show();
                    // const  fileExtn = fileName.split('.').reverse()[0];
                    // const fileMIMEType = this.getMIMEtype(fileExtn);
                    url = encodeURI(filePath);
                    this.fileTransfer = this.transfer.create();
                    this.fileTransfer.download(url, this.file.dataDirectory + fileName, true).then(function (entry) {
                      // here logging our success downloaded file path in mobile.
                      console.log('download completed: ' + entry.toURL()); // open downloaded file
                      // this.downloadFile = entry.toURL();

                      _this4.open(entry.toURL());
                    })["catch"](function (error) {
                      _this4.authService.dismiss(); // this.spinnerDialog.hide();
                      // here logging an error.


                      if (/\s/.test(fileName)) {
                        _this4.alertService.presentToast('Download failed: File Name has spaces');
                      }

                      _this4.alertService.presentToast('Download failed: Attempting to open multiple documents');

                      console.log('download failed: ' + JSON.stringify(error));
                    });

                  case 5:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this);
          }));
        }
      }, {
        key: "formatDate",
        value: function formatDate(date) {
          return moment__WEBPACK_IMPORTED_MODULE_4__(date).format('MMM D, YYYY');
        } // add feed

      }, {
        key: "addfeed",
        value: function addfeed() {
          var navigationExtras = {
            state: {
              subject: this.homeworkInfo.subject_name + ' ' + this.homeworkInfo.title,
              studentName: this.student_name,
              student_id: this.student_id
            }
          };
          this.router.navigate(['feedback'], navigationExtras);
        }
      }]);

      return HomeworkPage;
    }();

    HomeworkPage.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"]
      }, {
        type: _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_7__["FileTransfer"]
      }, {
        type: _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_8__["File"]
      }, {
        type: _ionic_native_file_opener_ngx__WEBPACK_IMPORTED_MODULE_6__["FileOpener"]
      }, {
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
      }, {
        type: src_app_services_env_service__WEBPACK_IMPORTED_MODULE_9__["EnvService"]
      }, {
        type: src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_10__["AlertService"]
      }];
    };

    HomeworkPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-homework',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./homework.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/student/homework/homework.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./homework.page.scss */
      "./src/app/pages/student/homework/homework.page.scss"))["default"]]
    }) //7401d099f0fc693bf578b465e4e9902912741e54
    , Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"], _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_7__["FileTransfer"], _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_8__["File"], _ionic_native_file_opener_ngx__WEBPACK_IMPORTED_MODULE_6__["FileOpener"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"], src_app_services_env_service__WEBPACK_IMPORTED_MODULE_9__["EnvService"], src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_10__["AlertService"]])], HomeworkPage);
    /***/
  }
}]);
//# sourceMappingURL=pages-student-homework-homework-module-es5.js.map