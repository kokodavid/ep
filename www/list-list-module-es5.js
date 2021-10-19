function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["list-list-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/list/list.page.html":
  /*!***************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/list/list.page.html ***!
    \***************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppListListPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\" style=\"font-size: 14px;\">\n      <ion-back-button text=\"\" icon=\"chevron-back\"></ion-back-button>\n      <ion-icon slot=\"start\" size=\"30\" style=\"font-size: 1.6em ;margin-top:5px !important;\" name=\"notifications\">\n      </ion-icon>FEEDBACK\n    </ion-buttons>\n    <!-- <ion-title style=\"text-align:inherit\" >\n      <ion-item lines='none' color=\"primary\">\n            <ion-icon  slot=\"start\"  size=\"30\" style=\"font-size: 1.6em ;margin-top:5px !important;\"  name=\"md-notifications\"></ion-icon>\n\n      <ion-label style=\"text-transform: uppercase;margin-top:5px !important;\">Feedback</ion-label>\n    </ion-item> \n    </ion-title> -->\n  </ion-toolbar>\n</ion-header>\n<!-- <ion-item>\n    <ion-avatar slot=\"start\" >\n        <ion-icon   size=\"32\" style=\"font-size: 1.7em\"  name=\"md-notifications\"></ion-icon>\n      </ion-avatar>\n  <ion-label style=\"text-transform: uppercase;\">My Feedback</ion-label>\n</ion-item> -->\n<ion-content class=\"ion-no-padding\">\n  <!-- <div class=\"clear\"><br></div> -->\n  <ion-list *ngIf=\"feedbacks.length === 0 && fake === 1\">\n    <!-- <ion-item *ngFor=\"let i of [1,2,3,4,5];  let i = index\"  >\n         \n             <ion-label>\n               <h3><ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text></h3>\n               <p><ion-skeleton-text animated style=\"width: 90%\"></ion-skeleton-text></p>\n               <p><ion-skeleton-text animated style=\"width: 80%\"></ion-skeleton-text></p>\n             </ion-label>\n      </ion-item> -->\n    <br>\n    <ion-spinner name=\"lines-small\" style=\"text-align: center; margin-left: 50%; margin-right: 50%;\" color=\"primary\">\n    </ion-spinner>\n  </ion-list>\n  <ion-card *ngIf=\"feedbacks.length === 0 && fake === 0\">\n    <ion-card-content>\n      No feedback...\n    </ion-card-content>\n  </ion-card>\n  <div *ngIf=\"feedbacks.length > 0\">\n    <ion-card *ngFor=\"let item of feedbacks; let i = index;\">\n      <ion-grid>\n        <ion-row>\n          <ion-col col-12 style=\"font-weight: bold; font-size:12px; color: #009e0f; text-transform:uppercase\">\n            <ion-icon name=\"notifications\"></ion-icon> <strong>{{item.subject}}</strong>\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col col-12 style=\"font-size:13px;color: black\">\n            {{item.message}}\n          </ion-col>\n        </ion-row>\n        <ion-row (click)=\"download(item.student_attachment, assets + item.student_attachment)\">\n          <ion-col col-12 style=\"font-size:13px;color: blue\">\n            {{item.student_attachment}}\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col col-6 style=\"font-weight:500;\">\n            <small>Created On: {{this.formatDate(item.sent_date)}}</small>\n          </ion-col>\n          <ion-col col-6 style=\"font-weight:500;\">\n            <small>By: {{item.parent_full_name}}</small>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </ion-card>\n  </div>\n  <ion-fab *ngIf=\"feedback === 'true'\" vertical=\"bottom\" (click)=\"addfeed()\" horizontal=\"end\" slot=\"fixed\">\n    <ion-fab-button color=\"tertiary\">\n      <ion-icon name=\"chatbox-ellipses\"></ion-icon>\n    </ion-fab-button>\n  </ion-fab>\n</ion-content>";
    /***/
  },

  /***/
  "./src/app/list/list.module.ts":
  /*!*************************************!*\
    !*** ./src/app/list/list.module.ts ***!
    \*************************************/

  /*! exports provided: ListPageModule */

  /***/
  function srcAppListListModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ListPageModule", function () {
      return ListPageModule;
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


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _list_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./list.page */
    "./src/app/list/list.page.ts");

    var ListPageModule = function ListPageModule() {
      _classCallCheck(this, ListPageModule);
    };

    ListPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild([{
        path: '',
        component: _list_page__WEBPACK_IMPORTED_MODULE_6__["ListPage"]
      }])],
      declarations: [_list_page__WEBPACK_IMPORTED_MODULE_6__["ListPage"]]
    })], ListPageModule);
    /***/
  },

  /***/
  "./src/app/list/list.page.scss":
  /*!*************************************!*\
    !*** ./src/app/list/list.page.scss ***!
    \*************************************/

  /*! exports provided: default */

  /***/
  function srcAppListListPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xpc3QvbGlzdC5wYWdlLnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/list/list.page.ts":
  /*!***********************************!*\
    !*** ./src/app/list/list.page.ts ***!
    \***********************************/

  /*! exports provided: ListPage */

  /***/
  function srcAppListListPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ListPage", function () {
      return ListPage;
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


    var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/services/auth.service */
    "./src/app/services/auth.service.ts");
    /* harmony import */


    var moment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! moment */
    "./node_modules/moment/moment.js");
    /* harmony import */


    var moment__WEBPACK_IMPORTED_MODULE_4___default =
    /*#__PURE__*/
    __webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_4__);
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _ionic_native_spinner_dialog_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @ionic-native/spinner-dialog/ngx */
    "./node_modules/@ionic-native/spinner-dialog/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var _ionic_native_file_opener_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @ionic-native/file-opener/ngx */
    "./node_modules/@ionic-native/file-opener/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @ionic-native/file-transfer/ngx */
    "./node_modules/@ionic-native/file-transfer/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @ionic-native/file/ngx */
    "./node_modules/@ionic-native/file/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! src/app/services/alert.service */
    "./src/app/services/alert.service.ts");

    var ListPage =
    /*#__PURE__*/
    function () {
      function ListPage(authService, route, router, transfer, file, fileOpener, spinnerDialog, alertService, loadingController) {
        var _this = this;

        _classCallCheck(this, ListPage);

        this.authService = authService;
        this.route = route;
        this.router = router;
        this.transfer = transfer;
        this.file = file;
        this.fileOpener = fileOpener;
        this.spinnerDialog = spinnerDialog;
        this.alertService = alertService;
        this.loadingController = loadingController;
        this.items = [];
        this.spin = 0;
        this.fake = 0;
        setTimeout(function () {
          _this.fake = 0;
        }, 3000);
        this.feedbacks = new Array(); // this.route.queryParams.subscribe(params => {
        //   if (this.router.getCurrentNavigation().extras.state) {
        //     this.data = this.router.getCurrentNavigation().extras.state.details;
        //   }
        // });

        var user = localStorage.getItem('token');
        var u = JSON.parse(user);
        this.data = u;
        this.school = this.data.students[0].school;
        console.log(this.school);
        this.assets = "http://cdn2.eduweb.co.ke/homework_attachments/".concat(this.school, "/documents/");
        console.log(this.assets);
      }

      _createClass(ListPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee() {
            var user, u;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
                    return localStorage.getItem('token');

                  case 2:
                    user = _context.sent;
                    u = JSON.parse(user);
                    this.data = u;
                    this.school = this.data.students[0].school;

                  case 6:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }, {
        key: "ionViewWillEnter",
        value: function ionViewWillEnter() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee2() {
            var _this2 = this;

            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    this.authService.presentLoading(); /// this.spinnerDialog.show();
                    // etTimeout(async () => await this.spinnerDialog.hide(), 3000);

                    this.spin = 1;
                    _context2.next = 4;
                    return this.authService.checkFeed().then(function (feed) {
                      _this2.spin = 0;
                      _this2.feedback = feed;
                    });

                  case 4:
                    _context2.next = 6;
                    return this.authService.news().subscribe(function (news) {
                      _this2.spin = 0;

                      _this2.authService.dismiss();

                      console.log(news);
                      _this2.data = news;
                      _this2.feedbacks = _this2.data.data.feedback[_this2.school];
                      console.log(_this2.feedbacks); // this.assets = `https://${this.school}.eduweb.co.ke/assets/posts/`
                    });

                  case 6:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this);
          }));
        }
      }, {
        key: "addfeed",
        value: function addfeed() {
          var navigationExtras = {};
          this.router.navigate(['feedback'], navigationExtras);
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
            'pptx': 'application/vnd.openxmlformats-officedocument.presentationml.presentation',
            'flv': 'video/x-flv',
            'mp4': 'video/mp4',
            'm3u8': 'application/x-mpegURL',
            'ts': 'video/MP2T',
            '3gp': 'video/3gpp',
            'mov': 'video/quicktime',
            'avi': 'video/x-msvideo',
            'wmv': 'video/x-ms-wmv'
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
          regeneratorRuntime.mark(function _callee3() {
            var _this4 = this;

            var uri, url, _url;

            return regeneratorRuntime.wrap(function _callee3$(_context3) {
              while (1) {
                switch (_context3.prev = _context3.next) {
                  case 0:
                    if (!fileName.includes("mp4")) {
                      _context3.next = 10;
                      break;
                    }

                    uri = filePath.replace("/documents/", "/videos/");
                    _context3.next = 4;
                    return this.authService.presentLoading();

                  case 4:
                    // this.spinnerDialog.show();
                    // const  fileExtn = fileName.split('.').reverse()[0];
                    // const fileMIMEType = this.getMIMEtype(fileExtn);
                    url = encodeURI(uri);
                    console.log(uri);
                    this.fileTransfer = this.transfer.create();
                    this.fileTransfer.download(url, this.file.dataDirectory + fileName, true).then(function (entry) {
                      // here logging our success downloaded file path in mobile.
                      console.log('download completed: ' + entry.toURL()); // open downloaded file
                      // this.downloadFile = entry.toURL();

                      _this4.open(entry.toURL());
                    })["catch"](function (error) {
                      _this4.authService.dismiss(); // this.spinnerDialog.hide();
                      // here logging an error.
                      // if (/\s/.test(fileName)) {
                      //     this.alertService.presentToast('Download failed: File Name has spaces');
                      // }
                      // this.alertService.presentToast('Download failed: Attempting to open multiple documents');


                      _this4.alertService.presentToast('error' + JSON.stringify(error));

                      console.log('download failed: ' + JSON.stringify(error));
                    });
                    _context3.next = 16;
                    break;

                  case 10:
                    _context3.next = 12;
                    return this.authService.presentLoading();

                  case 12:
                    // this.spinnerDialog.show();
                    // const  fileExtn = fileName.split('.').reverse()[0];
                    // const fileMIMEType = this.getMIMEtype(fileExtn);
                    _url = encodeURI(filePath);
                    console.log(filePath);
                    this.fileTransfer = this.transfer.create();
                    this.fileTransfer.download(_url, this.file.dataDirectory + fileName, true).then(function (entry) {
                      // here logging our success downloaded file path in mobile.
                      console.log('download completed: ' + entry.toURL()); // open downloaded file
                      // this.downloadFile = entry.toURL();

                      _this4.open(entry.toURL());
                    })["catch"](function (error) {
                      _this4.authService.dismiss(); // this.spinnerDialog.hide();
                      // here logging an error.
                      // if (/\s/.test(fileName)) {
                      //     this.alertService.presentToast('Download failed: File Name has spaces');
                      // }
                      // this.alertService.presentToast('Download failed: Attempting to open multiple documents');


                      _this4.alertService.presentToast('error' + JSON.stringify(error));

                      console.log('download failed: ' + JSON.stringify(error));
                    });

                  case 16:
                  case "end":
                    return _context3.stop();
                }
              }
            }, _callee3, this);
          }));
        }
      }, {
        key: "formatDate",
        value: function formatDate(date) {
          return moment__WEBPACK_IMPORTED_MODULE_4__(date).format('MMM D, YYYY');
        }
      }]);

      return ListPage;
    }();

    ListPage.ctorParameters = function () {
      return [{
        type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_8__["FileTransfer"]
      }, {
        type: _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_9__["File"]
      }, {
        type: _ionic_native_file_opener_ngx__WEBPACK_IMPORTED_MODULE_7__["FileOpener"]
      }, {
        type: _ionic_native_spinner_dialog_ngx__WEBPACK_IMPORTED_MODULE_6__["SpinnerDialog"]
      }, {
        type: src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_10__["AlertService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["LoadingController"]
      }];
    };

    ListPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-list',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./list.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/list/list.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./list.page.scss */
      "./src/app/list/list.page.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_8__["FileTransfer"], _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_9__["File"], _ionic_native_file_opener_ngx__WEBPACK_IMPORTED_MODULE_7__["FileOpener"], _ionic_native_spinner_dialog_ngx__WEBPACK_IMPORTED_MODULE_6__["SpinnerDialog"], src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_10__["AlertService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["LoadingController"]])], ListPage);
    /***/
  }
}]);
//# sourceMappingURL=list-list-module-es5.js.map