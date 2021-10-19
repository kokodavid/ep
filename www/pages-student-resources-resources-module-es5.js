function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-student-resources-resources-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/student/resources/resources.page.html":
  /*!***************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/student/resources/resources.page.html ***!
    \***************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesStudentResourcesResourcesPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n    <ion-toolbar color=\"primary\">\n        <ion-buttons slot=\"start\" style=\"font-size: 14px;\">\n            <ion-back-button text=\"\" icon=\"chevron-back\"></ion-back-button>RESOURCES\n        </ion-buttons>\n        <!-- <ion-title style=\"font-size:14px;\">GALLERY</ion-title> -->\n    </ion-toolbar>\n    <ion-item lines=\"none\">\n        <ion-avatar slot=\"start\" *ngIf=\"assets !==1\">\n            <img src={{assets}}>\n        </ion-avatar>\n        <ion-avatar slot=\"start\" *ngIf=\"assets === 1\">\n            <ion-icon size=\"32\" style=\"font-size: 2em\" name=\"happy-outline\"></ion-icon>\n        </ion-avatar>\n        <ion-label style=\"text-transform: uppercase;\">{{student.first_name}} {{student.middle_name}}\n            {{student.last_name}}\n        </ion-label>\n    </ion-item>\n</ion-header>\n\n<ion-content class=\"ion-no-padding\">\n\n    <ion-list *ngIf=\"resources.length === 0 && fake === 1\">\n        <br>\n        <ion-spinner name=\"lines-small\" style=\"text-align: center; margin-left: 50%; margin-right: 50%;\"\n            color=\"primary\">\n        </ion-spinner>\n    </ion-list>\n\n    <ion-card *ngIf=\"resources.length === 0 && fake === 0\">\n        <ion-item>\n            No Resources\n        </ion-item>\n    </ion-card>\n    <div class=\"info\" *ngIf=\"resources.length > 0\">\n        <div *ngFor=\"let r of resources; let i = index\">\n            <ion-item>\n                <div *ngIf=\"r.file_name.includes('mp4'); else doc\">\n                    <ion-icon name=\"videocam\" style=\"position: relative; color: black;\"></ion-icon>\n                </div>\n                <ng-template #doc>\n                    <ion-icon name=\"document-text\" style=\"position: relative; color: black;\"></ion-icon>\n                </ng-template>\n                <ion-grid>\n                    <ion-row>\n                        <ion-col class=\"info\" col-6\n                            style=\"color:#009e0f; font-weight:bold; text-transform: uppercase; font-size: 12px;\">\n                            {{r.resource_name}}\n                        </ion-col>\n                    </ion-row>\n                    <ion-row>\n                        <ion-col class=\"info\" style=\"font-size: 14px;\" col-6>\n                            {{r.additional_text}}\n                        </ion-col>\n                    </ion-row>\n                    <div *ngIf=\"r.resource_type === 'VIDEO'\">\n                        <ion-row>\n                            <div *ngIf=\"platform === 'iOS'; else android\">\n                                <iframe [src]='r.vimeo_path_full' width=\"100%\" height=\"100%\" frameborder=\"0\"\n                                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture; fullscreen\"\n                                    allowfullscreen></iframe>\n                                \n                            </div>\n                            <ng-template #android>\n                                <a href=\"https://player.vimeo.com/video/{{r.vimeo_path}}\"\n                                    style=\"font-size:14px; padding: 08px; color: blue; text-decoration:none; border-bottom: blue 1px !important\">{{r.file_name}}</a>\n                            </ng-template>\n                        </ion-row>\n                    </div>\n                    <div *ngIf=\"r.resource_type === 'DOCUMENT'\">\n                        <ion-row style=\"font-size:14px; padding: 08px; color: blue; border-bottom: blue 1px !important\"\n                            (click)=\"download(r.file_name,link + r.file_name)\">\n                            {{r.file_name}}\n                        </ion-row>\n                    </div>\n                    <ion-row>\n                        <ion-col col-12>\n                            <!-- <p (click)=play(r.vimeo_path) style=\"color: blue;\">https://player.vimeo.com/video/{{r.vimeo_path}}</p> -->\n\n                        </ion-col>\n                    </ion-row>\n\n                    <ion-row>\n                        <ion-col col-12>\n                            <small>{{this.formatDate(r.creation_date)}}, By {{r.teacher_name}}</small>\n                        </ion-col>\n                    </ion-row>\n                </ion-grid>\n            </ion-item>\n        </div>\n    </div>\n    <ion-fab *ngIf=\"feedback === 'true'\" vertical=\"bottom\" (click)=\"addfeed()\" horizontal=\"end\" slot=\"fixed\">\n        <ion-fab-button color=\"tertiary\">\n            <ion-icon name=\"chatbox-ellipses\"></ion-icon>\n        </ion-fab-button>\n    </ion-fab>\n</ion-content>";
    /***/
  },

  /***/
  "./src/app/pages/student/resources/resources.module.ts":
  /*!*************************************************************!*\
    !*** ./src/app/pages/student/resources/resources.module.ts ***!
    \*************************************************************/

  /*! exports provided: ResourcesPageModule */

  /***/
  function srcAppPagesStudentResourcesResourcesModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ResourcesPageModule", function () {
      return ResourcesPageModule;
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


    var _resources_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./resources.page */
    "./src/app/pages/student/resources/resources.page.ts");

    var routes = [{
      path: '',
      component: _resources_page__WEBPACK_IMPORTED_MODULE_6__["ResourcesPage"]
    }];

    var ResourcesPageModule = function ResourcesPageModule() {
      _classCallCheck(this, ResourcesPageModule);
    };

    ResourcesPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)],
      declarations: [_resources_page__WEBPACK_IMPORTED_MODULE_6__["ResourcesPage"]]
    })], ResourcesPageModule);
    /***/
  },

  /***/
  "./src/app/pages/student/resources/resources.page.scss":
  /*!*************************************************************!*\
    !*** ./src/app/pages/student/resources/resources.page.scss ***!
    \*************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesStudentResourcesResourcesPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3N0dWRlbnQvcmVzb3VyY2VzL3Jlc291cmNlcy5wYWdlLnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/pages/student/resources/resources.page.ts":
  /*!***********************************************************!*\
    !*** ./src/app/pages/student/resources/resources.page.ts ***!
    \***********************************************************/

  /*! exports provided: ResourcesPage */

  /***/
  function srcAppPagesStudentResourcesResourcesPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ResourcesPage", function () {
      return ResourcesPage;
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


    var src_app_services_session_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/services/session.service */
    "./src/app/services/session.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var moment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! moment */
    "./node_modules/moment/moment.js");
    /* harmony import */


    var moment__WEBPACK_IMPORTED_MODULE_5___default =
    /*#__PURE__*/
    __webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_5__);
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @ionic-native/in-app-browser/ngx */
    "./node_modules/@ionic-native/in-app-browser/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var _ionic_native_device_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @ionic-native/device/ngx */
    "./node_modules/@ionic-native/device/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var _ionic_native_file_opener_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @ionic-native/file-opener/ngx */
    "./node_modules/@ionic-native/file-opener/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @ionic-native/file-transfer/ngx */
    "./node_modules/@ionic-native/file-transfer/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @ionic-native/file/ngx */
    "./node_modules/@ionic-native/file/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! src/app/services/alert.service */
    "./src/app/services/alert.service.ts");

    var ResourcesPage =
    /*#__PURE__*/
    function () {
      function ResourcesPage(authService, sessionService, route, router, domSanitizer, iap, device, transfer, file, fileOpener, alertService) {
        var _this = this;

        _classCallCheck(this, ResourcesPage);

        this.authService = authService;
        this.sessionService = sessionService;
        this.route = route;
        this.router = router;
        this.domSanitizer = domSanitizer;
        this.iap = iap;
        this.device = device;
        this.transfer = transfer;
        this.file = file;
        this.fileOpener = fileOpener;
        this.alertService = alertService;
        this.resources = new Array();
        this.fake = 1;
        setTimeout(function () {
          _this.fake = 0;
        }, 6000);
        this.sessionService.sessionTimeOut();
        this.route.queryParams.subscribe(function (params) {
          if (_this.router.getCurrentNavigation().extras.state) {
            _this.student = _this.router.getCurrentNavigation().extras.state.details;
            _this.value = _this.router.getCurrentNavigation().extras.state.resource;
            _this.school = _this.student.school;
            _this.assets = _this.student.student_image === null ? 1 : "https://".concat(_this.student.school, ".eduweb.co.ke/assets/students/").concat(_this.student.student_image);
            _this.link = "https://cdn.eduweb.co.ke/resources/".concat(_this.school, "/documents/"); // https://cdn.eduweb.co.ke/resources/kingsinternational/documents/SOCIAL%20STUDIES%20HOLYDAY%20HOMEWORK%20STD%207%202020.docx
          }
        });
      }

      _createClass(ResourcesPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.platform = this.device.platform;
          console.log(this.platform);
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
                      _this2.feedback = feed;
                    });

                  case 2:
                    _context.next = 4;
                    return this.authService.getResources(this.student.school, this.student.student_id).subscribe(function (resource) {
                      _this2.data = resource;
                      _this2.resources = _this2.data.data !== undefined ? _this2.data.data : []; // console.log(JSON.stringify(this.resources));

                      var vid_id = _this2.resources.map(function (a) {
                        return a.vimeo_path;
                      });

                      _this2.resources.forEach(function (item, index) {
                        // this.vidUrl = this.domSanitizer.bypassSecurityTrustResourceUrl(`https://player.vimeo.com/${video.vimeo_path}`);
                        // let sanitized_path = this.domSanitizer.bypassSecurityTrustResourceUrl(`https://player.vimeo.com/video/${item.vimeo_path}`);
                        var mypath = "https://player.vimeo.com/video/".concat(item.vimeo_path);
                        _this2.vidUrl = _this2.domSanitizer.bypassSecurityTrustResourceUrl(mypath); // let sanitized_path : SafeResourceUrl;

                        item['vimeo_path_full'] = _this2.vidUrl;
                      });
                    });

                  case 4:
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

                      _this4.alertService.presentToast('Download failed: File not found');

                      console.log('download failed: File not found');
                    }); // }

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
          return moment__WEBPACK_IMPORTED_MODULE_5__(date).format('MMM D, YYYY');
        }
      }, {
        key: "addfeed",
        value: function addfeed() {
          var navigationExtras = {};
          this.router.navigate(['feedback'], navigationExtras);
        }
      }]);

      return ResourcesPage;
    }();

    ResourcesPage.ctorParameters = function () {
      return [{
        type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]
      }, {
        type: src_app_services_session_service__WEBPACK_IMPORTED_MODULE_3__["SessionService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
      }, {
        type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["DomSanitizer"]
      }, {
        type: _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_7__["InAppBrowser"]
      }, {
        type: _ionic_native_device_ngx__WEBPACK_IMPORTED_MODULE_8__["Device"]
      }, {
        type: _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_10__["FileTransfer"]
      }, {
        type: _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_11__["File"]
      }, {
        type: _ionic_native_file_opener_ngx__WEBPACK_IMPORTED_MODULE_9__["FileOpener"]
      }, {
        type: src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_12__["AlertService"]
      }];
    };

    ResourcesPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-resources',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./resources.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/student/resources/resources.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./resources.page.scss */
      "./src/app/pages/student/resources/resources.page.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"], src_app_services_session_service__WEBPACK_IMPORTED_MODULE_3__["SessionService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["DomSanitizer"], _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_7__["InAppBrowser"], _ionic_native_device_ngx__WEBPACK_IMPORTED_MODULE_8__["Device"], _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_10__["FileTransfer"], _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_11__["File"], _ionic_native_file_opener_ngx__WEBPACK_IMPORTED_MODULE_9__["FileOpener"], src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_12__["AlertService"]])], ResourcesPage);
    /***/
  }
}]);
//# sourceMappingURL=pages-student-resources-resources-module-es5.js.map