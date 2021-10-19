function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-student-gallery-gallery-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/student/gallery/gallery.page.html":
  /*!***********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/student/gallery/gallery.page.html ***!
    \***********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesStudentGalleryGalleryPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\" style=\"font-size: 14px;\">\n      <ion-back-button text=\"\" icon=\"chevron-back\"></ion-back-button>GALLERY\n    </ion-buttons>\n    <!-- <ion-title style=\"font-size:14px;\">GALLERY</ion-title> -->\n  </ion-toolbar>\n  <ion-item lines=\"none\">\n    <ion-avatar slot=\"start\" *ngIf=\"assets !==1\">\n      <img src={{assets}}>\n    </ion-avatar>\n    <ion-avatar slot=\"start\" *ngIf=\"assets === 1\">\n      <ion-icon size=\"32\" style=\"font-size: 2em\" name=\"happy-outline\"></ion-icon>\n    </ion-avatar>\n    <ion-label style=\"text-transform: uppercase;\">{{student.first_name}} {{student.middle_name}} {{student.last_name}}\n    </ion-label>\n  </ion-item>\n</ion-header>\n\n<ion-content class=\"ion-no-padding\">\n  <ion-list *ngIf=\"galleries.length === 0 && fake === 1\">\n    <br>\n    <ion-spinner name=\"lines-small\" style=\"text-align: center; margin-left: 50%; margin-right: 50%;\" color=\"primary\">\n    </ion-spinner>\n  </ion-list>\n  <ion-card *ngIf=\"galleries.length == 0 && fake === 0 \">\n    <ion-item>\n      No gallery.\n    </ion-item>\n  </ion-card>\n  <div *ngFor=\"let r of galleries;  let i = index\">\n    <ion-card>\n      <ion-grid>\n        <ion-row>\n          <ion-col col-6 style=\"color: #009e0f; font-weight: bold;text-transform: uppercase;font-size: 12px;\">\n            <!-- <div [innerHTML]=\"item.subject\" ></div>  -->\n            <ion-icon ios=\"ios-albums\" md=\"md-albums\" style=\"color:black\"></ion-icon> {{r.subject}}\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col col-12>\n              <div [innerHTML]=\"r.message\"></div>\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col col-6>\n            <small>Created On: {{this.formatDate(r.creation_date)}}</small>\n          </ion-col>\n          <ion-col col-6>\n            <small>By: {{r.posted_by}}</small>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </ion-card>\n  </div>\n  <ion-fab *ngIf=\"feedback === 'true'\" vertical=\"bottom\" (click)=\"addfeed()\" horizontal=\"end\" slot=\"fixed\">\n    <ion-fab-button color=\"tertiary\">\n      <ion-icon name=\"chatbox-ellipses\"></ion-icon>\n    </ion-fab-button>\n  </ion-fab>\n</ion-content>";
    /***/
  },

  /***/
  "./src/app/pages/student/gallery/gallery.module.ts":
  /*!*********************************************************!*\
    !*** ./src/app/pages/student/gallery/gallery.module.ts ***!
    \*********************************************************/

  /*! exports provided: GalleryPageModule */

  /***/
  function srcAppPagesStudentGalleryGalleryModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GalleryPageModule", function () {
      return GalleryPageModule;
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


    var _gallery_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./gallery.page */
    "./src/app/pages/student/gallery/gallery.page.ts");

    var routes = [{
      path: '',
      component: _gallery_page__WEBPACK_IMPORTED_MODULE_6__["GalleryPage"]
    }];

    var GalleryPageModule = function GalleryPageModule() {
      _classCallCheck(this, GalleryPageModule);
    };

    GalleryPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)],
      declarations: [_gallery_page__WEBPACK_IMPORTED_MODULE_6__["GalleryPage"]]
    })], GalleryPageModule);
    /***/
  },

  /***/
  "./src/app/pages/student/gallery/gallery.page.scss":
  /*!*********************************************************!*\
    !*** ./src/app/pages/student/gallery/gallery.page.scss ***!
    \*********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesStudentGalleryGalleryPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-content {\n  font-size: 12px;\n  color: black;\n}\nion-content ion-card {\n  color: black;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9rb2tvZGF2aWQvRG93bmxvYWRzL2VwL3NyYy9hcHAvcGFnZXMvc3R1ZGVudC9nYWxsZXJ5L2dhbGxlcnkucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9zdHVkZW50L2dhbGxlcnkvZ2FsbGVyeS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxlQUFBO0VBQ0EsWUFBQTtBQ0NKO0FEQUk7RUFDSSxZQUFBO0FDRVIiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9zdHVkZW50L2dhbGxlcnkvZ2FsbGVyeS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29udGVudHtcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgY29sb3I6YmxhY2s7XG4gICAgaW9uLWNhcmR7XG4gICAgICAgIGNvbG9yOmJsYWNrO1xuICAgIH1cbn0iLCJpb24tY29udGVudCB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgY29sb3I6IGJsYWNrO1xufVxuaW9uLWNvbnRlbnQgaW9uLWNhcmQge1xuICBjb2xvcjogYmxhY2s7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/pages/student/gallery/gallery.page.ts":
  /*!*******************************************************!*\
    !*** ./src/app/pages/student/gallery/gallery.page.ts ***!
    \*******************************************************/

  /*! exports provided: GalleryPage */

  /***/
  function srcAppPagesStudentGalleryGalleryPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GalleryPage", function () {
      return GalleryPage;
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


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var moment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! moment */
    "./node_modules/moment/moment.js");
    /* harmony import */


    var moment__WEBPACK_IMPORTED_MODULE_4___default =
    /*#__PURE__*/
    __webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_4__);
    /* harmony import */


    var src_app_services_session_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/services/session.service */
    "./src/app/services/session.service.ts");

    var GalleryPage =
    /*#__PURE__*/
    function () {
      function GalleryPage(authService, route, router, session) {
        var _this = this;

        _classCallCheck(this, GalleryPage);

        this.authService = authService;
        this.route = route;
        this.router = router;
        this.session = session;
        this.segment = 'summary';
        this.galleries = new Array();
        this.fake = 1;
        setTimeout(function () {
          _this.fake = 0;
        }, 3000);
        this.session.sessionTimeOut();
        this.route.queryParams.subscribe(function (params) {
          if (_this.router.getCurrentNavigation().extras.state) {
            _this.student = _this.router.getCurrentNavigation().extras.state.details;
            _this.assets = _this.student.student_image === null ? 1 : "https://".concat(_this.student.school, ".eduweb.co.ke/assets/students/").concat(_this.student.student_image);
          }
        });
      }

      _createClass(GalleryPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
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
                      _this2.feedback = feed;
                    });

                  case 2:
                    _context.next = 4;
                    return this.authService.gallery(this.student.school, this.student.student_id).subscribe(function (galleries) {
                      _this2.data1 = galleries;
                      _this2.galleries = _this2.data1.data === undefined ? [] : _this2.data1.data;
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
        key: "segmentChanged",
        value: function segmentChanged(ev) {// console.log('Segment changed', ev);
        }
      }, {
        key: "formatDate",
        value: function formatDate(date) {
          return moment__WEBPACK_IMPORTED_MODULE_4__(date).format('MMM D, YYYY');
        }
      }, {
        key: "addfeed",
        value: function addfeed() {
          var navigationExtras = {};
          this.router.navigate(['feedback'], navigationExtras);
        }
      }, {
        key: "albums",
        value: function albums(album) {
          console.log(album);
          var navigationExtras = {
            state: {
              details: album,
              student: this.student
            }
          };
          this.router.navigate(['details'], navigationExtras);
        }
      }]);

      return GalleryPage;
    }();

    GalleryPage.ctorParameters = function () {
      return [{
        type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }, {
        type: src_app_services_session_service__WEBPACK_IMPORTED_MODULE_5__["SessionService"]
      }];
    };

    GalleryPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-gallery',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./gallery.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/student/gallery/gallery.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./gallery.page.scss */
      "./src/app/pages/student/gallery/gallery.page.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], src_app_services_session_service__WEBPACK_IMPORTED_MODULE_5__["SessionService"]])], GalleryPage);
    /***/
  }
}]);
//# sourceMappingURL=pages-student-gallery-gallery-module-es5.js.map