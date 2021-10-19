function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports, __webpack_require__) {
    var map = {
      "./changepassword/changepassword.module": ["./src/app/changepassword/changepassword.module.ts", "changepassword-changepassword-module"],
      "./home/home.module": ["./src/app/home/home.module.ts", "home-home-module"],
      "./list/list.module": ["./src/app/list/list.module.ts", "default~list-list-module~pages-dashboard-dashboard-module~pages-menu-menu-module~pages-news-news-mod~dea7ccc6", "list-list-module"],
      "./pages/auth/forgot-password/forgot-password.module": ["./src/app/pages/auth/forgot-password/forgot-password.module.ts", "default~pages-auth-forgot-password-forgot-password-module~pages-auth-login-login-module", "pages-auth-forgot-password-forgot-password-module"],
      "./pages/auth/login/login.module": ["./src/app/pages/auth/login/login.module.ts", "default~pages-auth-login-login-module~pages-auth-phone-phone-module", "default~pages-auth-forgot-password-forgot-password-module~pages-auth-login-login-module", "pages-auth-login-login-module"],
      "./pages/auth/phone/phone.module": ["./src/app/pages/auth/phone/phone.module.ts", "default~pages-auth-login-login-module~pages-auth-phone-phone-module", "pages-auth-phone-phone-module"],
      "./pages/contact/contact.module": ["./src/app/pages/contact/contact.module.ts", "pages-contact-contact-module"],
      "./pages/dashboard/dashboard.module": ["./src/app/pages/dashboard/dashboard.module.ts", "default~list-list-module~pages-dashboard-dashboard-module~pages-menu-menu-module~pages-news-news-mod~dea7ccc6", "common", "pages-dashboard-dashboard-module"],
      "./pages/details/details.module": ["./src/app/pages/details/details.module.ts", "common", "pages-details-details-module"],
      "./pages/feedback/feedback.module": ["./src/app/pages/feedback/feedback.module.ts", "common", "pages-feedback-feedback-module"],
      "./pages/menu/menu.module": ["./src/app/pages/menu/menu.module.ts", "default~list-list-module~pages-dashboard-dashboard-module~pages-menu-menu-module~pages-news-news-mod~dea7ccc6", "common", "pages-menu-menu-module"],
      "./pages/news/news.module": ["./src/app/pages/news/news.module.ts", "default~list-list-module~pages-dashboard-dashboard-module~pages-menu-menu-module~pages-news-news-mod~dea7ccc6", "common", "pages-news-news-module"],
      "./pages/reports/analysis/analysis.module": ["./src/app/pages/reports/analysis/analysis.module.ts", "default~list-list-module~pages-dashboard-dashboard-module~pages-menu-menu-module~pages-news-news-mod~dea7ccc6", "default~pages-reports-analysis-analysis-module~pages-student-analytics-analytics-module~pages-studen~11d35830", "default~pages-reports-analysis-analysis-module~pages-student-analytics-analytics-module", "pages-reports-analysis-analysis-module"],
      "./pages/reports/fees/fees.module": ["./src/app/pages/reports/fees/fees.module.ts", "pages-reports-fees-fees-module"],
      "./pages/reports/grades/grades.module": ["./src/app/pages/reports/grades/grades.module.ts", "default~list-list-module~pages-dashboard-dashboard-module~pages-menu-menu-module~pages-news-news-mod~dea7ccc6", "common", "pages-reports-grades-grades-module"],
      "./pages/student/analytics/analytics.module": ["./src/app/pages/student/analytics/analytics.module.ts", "default~list-list-module~pages-dashboard-dashboard-module~pages-menu-menu-module~pages-news-news-mod~dea7ccc6", "default~pages-reports-analysis-analysis-module~pages-student-analytics-analytics-module~pages-studen~11d35830", "default~pages-reports-analysis-analysis-module~pages-student-analytics-analytics-module", "common", "pages-student-analytics-analytics-module"],
      "./pages/student/attendance/attendance.module": ["./src/app/pages/student/attendance/attendance.module.ts", "default~list-list-module~pages-dashboard-dashboard-module~pages-menu-menu-module~pages-news-news-mod~dea7ccc6", "common", "pages-student-attendance-attendance-module"],
      "./pages/student/blog/blog.module": ["./src/app/pages/student/blog/blog.module.ts", "default~list-list-module~pages-dashboard-dashboard-module~pages-menu-menu-module~pages-news-news-mod~dea7ccc6", "common", "pages-student-blog-blog-module"],
      "./pages/student/cbcgrading/cbcgrading.module": ["./src/app/pages/student/cbcgrading/cbcgrading.module.ts", "default~list-list-module~pages-dashboard-dashboard-module~pages-menu-menu-module~pages-news-news-mod~dea7ccc6", "default~pages-reports-analysis-analysis-module~pages-student-analytics-analytics-module~pages-studen~11d35830", "common", "pages-student-cbcgrading-cbcgrading-module"],
      "./pages/student/fees/fees.module": ["./src/app/pages/student/fees/fees.module.ts", "default~list-list-module~pages-dashboard-dashboard-module~pages-menu-menu-module~pages-news-news-mod~dea7ccc6", "common", "pages-student-fees-fees-module"],
      "./pages/student/gallery/gallery.module": ["./src/app/pages/student/gallery/gallery.module.ts", "default~list-list-module~pages-dashboard-dashboard-module~pages-menu-menu-module~pages-news-news-mod~dea7ccc6", "common", "pages-student-gallery-gallery-module"],
      "./pages/student/grading/grading.module": ["./src/app/pages/student/grading/grading.module.ts", "default~list-list-module~pages-dashboard-dashboard-module~pages-menu-menu-module~pages-news-news-mod~dea7ccc6", "default~pages-reports-analysis-analysis-module~pages-student-analytics-analytics-module~pages-studen~11d35830", "common", "pages-student-grading-grading-module"],
      "./pages/student/homework/homework.module": ["./src/app/pages/student/homework/homework.module.ts", "default~list-list-module~pages-dashboard-dashboard-module~pages-menu-menu-module~pages-news-news-mod~dea7ccc6", "pages-student-homework-homework-module"],
      "./pages/student/info/info.module": ["./src/app/pages/student/info/info.module.ts", "common", "pages-student-info-info-module"],
      "./pages/student/resources/resources.module": ["./src/app/pages/student/resources/resources.module.ts", "default~list-list-module~pages-dashboard-dashboard-module~pages-menu-menu-module~pages-news-news-mod~dea7ccc6", "common", "pages-student-resources-resources-module"],
      "./pages/student/student.module": ["./src/app/pages/student/student.module.ts", "pages-student-student-module"]
    };

    function webpackAsyncContext(req) {
      if (!__webpack_require__.o(map, req)) {
        return Promise.resolve().then(function () {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        });
      }

      var ids = map[req],
          id = ids[0];
      return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function () {
        return __webpack_require__(id);
      });
    }

    webpackAsyncContext.keys = function webpackAsyncContextKeys() {
      return Object.keys(map);
    };

    webpackAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    module.exports = webpackAsyncContext;
    /***/
  },

  /***/
  "./node_modules/@ionic/core/dist/esm lazy recursive ^\\.\\/.*\\.entry\\.js$ include: \\.entry\\.js$ exclude: \\.system\\.entry\\.js$":
  /*!*****************************************************************************************************************************************!*\
    !*** ./node_modules/@ionic/core/dist/esm lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
    \*****************************************************************************************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesIonicCoreDistEsmLazyRecursiveEntryJs$IncludeEntryJs$ExcludeSystemEntryJs$(module, exports, __webpack_require__) {
    var map = {
      "./ion-action-sheet.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-action-sheet.entry.js", "common", 0],
      "./ion-alert.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-alert.entry.js", "common", 1],
      "./ion-app_8.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-app_8.entry.js", "common", 2],
      "./ion-avatar_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-avatar_3.entry.js", "common", 3],
      "./ion-back-button.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-back-button.entry.js", "common", 4],
      "./ion-backdrop.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-backdrop.entry.js", 5],
      "./ion-button_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-button_2.entry.js", "common", 6],
      "./ion-card_5.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-card_5.entry.js", "common", 7],
      "./ion-checkbox.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-checkbox.entry.js", "common", 8],
      "./ion-chip.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-chip.entry.js", "common", 9],
      "./ion-col_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-col_3.entry.js", 10],
      "./ion-datetime_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-datetime_3.entry.js", "common", 11],
      "./ion-fab_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-fab_3.entry.js", "common", 12],
      "./ion-img.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-img.entry.js", 13],
      "./ion-infinite-scroll_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-infinite-scroll_2.entry.js", 14],
      "./ion-input.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-input.entry.js", "common", 15],
      "./ion-item-option_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-item-option_3.entry.js", "common", 16],
      "./ion-item_8.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-item_8.entry.js", "common", 17],
      "./ion-loading.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-loading.entry.js", "common", 18],
      "./ion-menu_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-menu_3.entry.js", "common", 19],
      "./ion-modal.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-modal.entry.js", "common", 20],
      "./ion-nav_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-nav_2.entry.js", "common", 21],
      "./ion-popover.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-popover.entry.js", "common", 22],
      "./ion-progress-bar.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-progress-bar.entry.js", "common", 23],
      "./ion-radio_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-radio_2.entry.js", "common", 24],
      "./ion-range.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-range.entry.js", "common", 25],
      "./ion-refresher_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-refresher_2.entry.js", "common", 26],
      "./ion-reorder_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-reorder_2.entry.js", "common", 27],
      "./ion-ripple-effect.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-ripple-effect.entry.js", 28],
      "./ion-route_4.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-route_4.entry.js", "common", 29],
      "./ion-searchbar.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-searchbar.entry.js", "common", 30],
      "./ion-segment_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-segment_2.entry.js", "common", 31],
      "./ion-select_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-select_3.entry.js", "common", 32],
      "./ion-slide_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-slide_2.entry.js", 33],
      "./ion-spinner.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-spinner.entry.js", "common", 34],
      "./ion-split-pane.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-split-pane.entry.js", 35],
      "./ion-tab-bar_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-tab-bar_2.entry.js", "common", 36],
      "./ion-tab_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-tab_2.entry.js", "common", 37],
      "./ion-text.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-text.entry.js", "common", 38],
      "./ion-textarea.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-textarea.entry.js", "common", 39],
      "./ion-toast.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-toast.entry.js", "common", 40],
      "./ion-toggle.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-toggle.entry.js", "common", 41],
      "./ion-virtual-scroll.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-virtual-scroll.entry.js", 42]
    };

    function webpackAsyncContext(req) {
      if (!__webpack_require__.o(map, req)) {
        return Promise.resolve().then(function () {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        });
      }

      var ids = map[req],
          id = ids[0];
      return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function () {
        return __webpack_require__(id);
      });
    }

    webpackAsyncContext.keys = function webpackAsyncContextKeys() {
      return Object.keys(map);
    };

    webpackAsyncContext.id = "./node_modules/@ionic/core/dist/esm lazy recursive ^\\.\\/.*\\.entry\\.js$ include: \\.entry\\.js$ exclude: \\.system\\.entry\\.js$";
    module.exports = webpackAsyncContext;
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
  /*!**************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-app>\n  <!-- <ion-split-pane [when]=\"lg\"> -->\n  <ion-menu style=\"font-size:12px; color:black\" (ionWillOpen)=\"getSession()\">\n    <ion-header (click)=\"toggleMenu()\">\n      <ion-toolbar color=\"primary\">\n        <ion-title>Menu </ion-title>\n      </ion-toolbar>\n    </ion-header>\n    <ion-content>\n      <ion-list>\n        <ion-menu-toggle auto-hide=\"false\" class=\"my-custom-menu\">\n          <ion-item [routerDirection]=\"'root'\" [routerLink]=\"['/dashboard']\" auto-hide=\"false\" lines=\"none\"\n            style=\"font-size: 12px;font-weight:500;\">\n            <ion-icon slot=\"start\" name=\"home\"></ion-icon>\n            <ion-label>\n              HOME\n            </ion-label>\n          </ion-item>\n          <ion-item *ngFor=\"let p of students\" (click)=\"studentData(p)\" lines=\"none\"\n            style=\"font-size: 12px;font-weight:500; top:0px;\">\n            <ion-avatar slot=\"start\" *ngIf=\"p.student_image === null\">\n              <ion-icon size=\"32\" style=\"font-size: 2.5em; top:5px;\" name=\"happy-outline\"></ion-icon>\n            </ion-avatar>\n            <ion-avatar slot=\"start\" *ngIf=\"p.student_image !== null\">\n              <img src={{assets+p.student_image}}>\n            </ion-avatar>\n            <ion-label style=\"text-transform: uppercase\">\n              {{p.first_name}} {{p.last_name}}\n            </ion-label>\n          </ion-item>\n          <ion-item (click)=\"mealMenu()\" auto-hide=\"false\" lines=\"none\"\n            style=\"font-size: 12px;font-weight:500;\">\n            <ion-icon slot=\"start\" name=\"fast-food\"></ion-icon>\n            <ion-label>\n              MENU\n            </ion-label>\n          </ion-item>\n      \n          <ion-item auto-hide=\"false\" [routerLink]=\"['/changepassword']\" style=\"font-size: 12px;font-weight:500;\"\n            lines=\"none\">\n            <ion-icon slot=\"start\" name=\"lock-closed\"></ion-icon>\n            <ion-label>\n              CHANGE PASSWORD\n            </ion-label>\n          </ion-item>\n          \n          <ion-item  [routerLink]=\"['/feed']\" auto-hide=\"false\" lines=\"none\"\n            style=\"font-size: 12px;font-weight:500;\">\n            <ion-icon slot=\"start\" name=\"notifications\"></ion-icon>\n            <ion-label>\n              FEEDBACK\n            </ion-label>\n          </ion-item>\n\n          <!-- <ion-item  [routerLink]=\"['/chat']\" auto-hide=\"false\" lines=\"none\"\n            style=\"font-size: 12px;font-weight:500;\">\n            <ion-icon slot=\"start\" name=\"chatbubble\"></ion-icon>\n            <ion-label>\n              CHAT\n            </ion-label>\n          </ion-item> -->\n\n          <ion-item  (click)=\"contact()\" auto-hide=\"false\" lines=\"none\"\n            style=\"font-size: 12px;font-weight:500;\">\n            <ion-icon slot=\"start\" name=\"call\"></ion-icon>\n            <ion-label>\n              SCHOOL CONTACT\n            </ion-label>\n          </ion-item>\n          <ion-item  (click)=\"comingSoon()\" auto-hide=\"false\" lines=\"none\"\n          style=\"font-size: 12px;font-weight:500;\">\n          <ion-icon slot=\"start\" name=\"newspaper\"></ion-icon>\n          <ion-label>\n            TERMS OF SERVICE\n          </ion-label>\n        </ion-item> \n          <ion-item style=\"font-size: 12px;font-weight:500;\">\n            <ion-icon slot=\"start\" name=\"logo-apple-appstore\"></ion-icon>\n            <ion-label>\n              V3.2.83\n            </ion-label>\n          </ion-item>\n          <ion-item (click)=\"logout()\" lines=\"none\" style=\"font-size: 12px;font-weight:500;\">\n            <ion-icon slot=\"start\" name=\"log-out\"></ion-icon>\n            <ion-label>\n              LOGOUT\n            </ion-label>\n          </ion-item>\n        </ion-menu-toggle>\n      </ion-list>\n    </ion-content>\n  </ion-menu>\n  <ion-router-outlet main></ion-router-outlet>\n  <!-- </ion-split-pane> -->\n</ion-app>";
    /***/
  },

  /***/
  "./node_modules/tslib/tslib.es6.js":
  /*!*****************************************!*\
    !*** ./node_modules/tslib/tslib.es6.js ***!
    \*****************************************/

  /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __createBinding, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */

  /***/
  function node_modulesTslibTslibEs6Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__extends", function () {
      return __extends;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__assign", function () {
      return _assign;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__rest", function () {
      return __rest;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__decorate", function () {
      return __decorate;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__param", function () {
      return __param;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__metadata", function () {
      return __metadata;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__awaiter", function () {
      return __awaiter;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__generator", function () {
      return __generator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__createBinding", function () {
      return __createBinding;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__exportStar", function () {
      return __exportStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__values", function () {
      return __values;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__read", function () {
      return __read;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spread", function () {
      return __spread;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () {
      return __spreadArrays;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__await", function () {
      return __await;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () {
      return __asyncGenerator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () {
      return __asyncDelegator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncValues", function () {
      return __asyncValues;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () {
      return __makeTemplateObject;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importStar", function () {
      return __importStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importDefault", function () {
      return __importDefault;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function () {
      return __classPrivateFieldGet;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function () {
      return __classPrivateFieldSet;
    });
    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation.
    
    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.
    
    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */

    /* global Reflect, Promise */


    var _extendStatics = function extendStatics(d, b) {
      _extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (d, b) {
        d.__proto__ = b;
      } || function (d, b) {
        for (var p in b) {
          if (b.hasOwnProperty(p)) d[p] = b[p];
        }
      };

      return _extendStatics(d, b);
    };

    function __extends(d, b) {
      _extendStatics(d, b);

      function __() {
        this.constructor = d;
      }

      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var _assign = function __assign() {
      _assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];

          for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
          }
        }

        return t;
      };

      return _assign.apply(this, arguments);
    };

    function __rest(s, e) {
      var t = {};

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
      }

      if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
      }
      return t;
    }

    function __decorate(decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
      return function (target, key) {
        decorator(target, key, paramIndex);
      };
    }

    function __metadata(metadataKey, metadataValue) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
      function adopt(value) {
        return value instanceof P ? value : new P(function (resolve) {
          resolve(value);
        });
      }

      return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }

        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }

        function step(result) {
          result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }

        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    }

    function __generator(thisArg, body) {
      var _ = {
        label: 0,
        sent: function sent() {
          if (t[0] & 1) throw t[1];
          return t[1];
        },
        trys: [],
        ops: []
      },
          f,
          y,
          t,
          g;
      return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
      }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
        return this;
      }), g;

      function verb(n) {
        return function (v) {
          return step([n, v]);
        };
      }

      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");

        while (_) {
          try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];

            switch (op[0]) {
              case 0:
              case 1:
                t = op;
                break;

              case 4:
                _.label++;
                return {
                  value: op[1],
                  done: false
                };

              case 5:
                _.label++;
                y = op[1];
                op = [0];
                continue;

              case 7:
                op = _.ops.pop();

                _.trys.pop();

                continue;

              default:
                if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                  _ = 0;
                  continue;
                }

                if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                  _.label = op[1];
                  break;
                }

                if (op[0] === 6 && _.label < t[1]) {
                  _.label = t[1];
                  t = op;
                  break;
                }

                if (t && _.label < t[2]) {
                  _.label = t[2];

                  _.ops.push(op);

                  break;
                }

                if (t[2]) _.ops.pop();

                _.trys.pop();

                continue;
            }

            op = body.call(thisArg, _);
          } catch (e) {
            op = [6, e];
            y = 0;
          } finally {
            f = t = 0;
          }
        }

        if (op[0] & 5) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    }

    function __createBinding(o, m, k, k2) {
      if (k2 === undefined) k2 = k;
      o[k2] = m[k];
    }

    function __exportStar(m, exports) {
      for (var p in m) {
        if (p !== "default" && !exports.hasOwnProperty(p)) exports[p] = m[p];
      }
    }

    function __values(o) {
      var s = typeof Symbol === "function" && Symbol.iterator,
          m = s && o[s],
          i = 0;
      if (m) return m.call(o);
      if (o && typeof o.length === "number") return {
        next: function next() {
          if (o && i >= o.length) o = void 0;
          return {
            value: o && o[i++],
            done: !o
          };
        }
      };
      throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }

    function __read(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m) return o;
      var i = m.call(o),
          r,
          ar = [],
          e;

      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
          ar.push(r.value);
        }
      } catch (error) {
        e = {
          error: error
        };
      } finally {
        try {
          if (r && !r.done && (m = i["return"])) m.call(i);
        } finally {
          if (e) throw e.error;
        }
      }

      return ar;
    }

    function __spread() {
      for (var ar = [], i = 0; i < arguments.length; i++) {
        ar = ar.concat(__read(arguments[i]));
      }

      return ar;
    }

    function __spreadArrays() {
      for (var s = 0, i = 0, il = arguments.length; i < il; i++) {
        s += arguments[i].length;
      }

      for (var r = Array(s), k = 0, i = 0; i < il; i++) {
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) {
          r[k] = a[j];
        }
      }

      return r;
    }

    ;

    function __await(v) {
      return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var g = generator.apply(thisArg, _arguments || []),
          i,
          q = [];
      return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i;

      function verb(n) {
        if (g[n]) i[n] = function (v) {
          return new Promise(function (a, b) {
            q.push([n, v, a, b]) > 1 || resume(n, v);
          });
        };
      }

      function resume(n, v) {
        try {
          step(g[n](v));
        } catch (e) {
          settle(q[0][3], e);
        }
      }

      function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
      }

      function fulfill(value) {
        resume("next", value);
      }

      function reject(value) {
        resume("throw", value);
      }

      function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
      }
    }

    function __asyncDelegator(o) {
      var i, p;
      return i = {}, verb("next"), verb("throw", function (e) {
        throw e;
      }), verb("return"), i[Symbol.iterator] = function () {
        return this;
      }, i;

      function verb(n, f) {
        i[n] = o[n] ? function (v) {
          return (p = !p) ? {
            value: __await(o[n](v)),
            done: n === "return"
          } : f ? f(v) : v;
        } : f;
      }
    }

    function __asyncValues(o) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var m = o[Symbol.asyncIterator],
          i;
      return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i);

      function verb(n) {
        i[n] = o[n] && function (v) {
          return new Promise(function (resolve, reject) {
            v = o[n](v), settle(resolve, reject, v.done, v.value);
          });
        };
      }

      function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function (v) {
          resolve({
            value: v,
            done: d
          });
        }, reject);
      }
    }

    function __makeTemplateObject(cooked, raw) {
      if (Object.defineProperty) {
        Object.defineProperty(cooked, "raw", {
          value: raw
        });
      } else {
        cooked.raw = raw;
      }

      return cooked;
    }

    ;

    function __importStar(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) for (var k in mod) {
        if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
      }
      result["default"] = mod;
      return result;
    }

    function __importDefault(mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    }

    function __classPrivateFieldGet(receiver, privateMap) {
      if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
      }

      return privateMap.get(receiver);
    }

    function __classPrivateFieldSet(receiver, privateMap, value) {
      if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
      }

      privateMap.set(receiver, value);
      return value;
    }
    /***/

  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
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


    var _guard_auth_guard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./guard/auth.guard */
    "./src/app/guard/auth.guard.ts"); // import { DataResolverService } from './resolver/data-resolver.service';


    var routes = [{
      path: '',
      redirectTo: 'login',
      pathMatch: 'full'
    }, // { path: 'landing', loadChildren: './pages/landing/landing.module#LandingPageModule' },
    {
      path: 'login',
      loadChildren: './pages/auth/login/login.module#LoginPageModule'
    }, {
      path: 'dashboard',
      loadChildren: './pages/dashboard/dashboard.module#DashboardPageModule',
      canActivate: [_guard_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]]
    }, {
      path: 'home',
      loadChildren: './home/home.module#HomePageModule',
      canActivate: [_guard_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]]
    }, {
      path: 'feed',
      loadChildren: './list/list.module#ListPageModule',
      canActivate: [_guard_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]]
    }, {
      path: 'news',
      loadChildren: './pages/news/news.module#NewsPageModule',
      canActivate: [_guard_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]]
    }, {
      path: 'details',
      loadChildren: './pages/details/details.module#DetailsPageModule',
      canActivate: [_guard_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]]
    }, {
      path: 'feedback',
      loadChildren: './pages/feedback/feedback.module#FeedbackPageModule',
      canActivate: [_guard_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]]
    }, {
      path: 'student',
      loadChildren: './pages/student/student.module#StudentPageModule',
      canActivate: [_guard_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]]
    }, {
      path: 'blog',
      loadChildren: './pages/student/blog/blog.module#BlogPageModule',
      canActivate: [_guard_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]]
    }, {
      path: 'homework',
      loadChildren: './pages/student/homework/homework.module#HomeworkPageModule',
      canActivate: [_guard_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]]
    }, {
      path: 'info',
      loadChildren: './pages/student/info/info.module#InfoPageModule',
      canActivate: [_guard_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]]
    }, {
      path: 'grading',
      loadChildren: './pages/student/grading/grading.module#GradingPageModule',
      canActivate: [_guard_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]]
    }, {
      path: 'cbcgrading',
      loadChildren: './pages/student/cbcgrading/cbcgrading.module#CbcGradingPageModule',
      canActivate: [_guard_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]]
    }, {
      path: 'analytics',
      loadChildren: './pages/student/analytics/analytics.module#AnalyticsPageModule',
      canActivate: [_guard_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]]
    }, {
      path: 'analysis',
      loadChildren: './pages/reports/analysis/analysis.module#AnalysisPageModule',
      canActivate: [_guard_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]]
    }, {
      path: 'fees',
      loadChildren: './pages/student/fees/fees.module#FeesPageModule',
      canActivate: [_guard_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]]
    }, {
      path: 'gallery',
      loadChildren: './pages/student/gallery/gallery.module#GalleryPageModule',
      canActivate: [_guard_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]]
    }, {
      path: 'grades',
      loadChildren: './pages/reports/grades/grades.module#GradesPageModule',
      canActivate: [_guard_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]]
    }, {
      path: 'resources',
      loadChildren: './pages/student/resources/resources.module#ResourcesPageModule',
      canActivate: [_guard_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]]
    }, {
      path: 'attendance',
      loadChildren: './pages/student/attendance/attendance.module#AttendancePageModule',
      canActivate: [_guard_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]]
    }, {
      path: 'feesReport',
      loadChildren: './pages/reports/fees/fees.module#FeesPageModule',
      canActivate: [_guard_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]]
    }, {
      path: 'changepassword',
      loadChildren: './changepassword/changepassword.module#ChangepasswordPageModule',
      canActivate: [_guard_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]]
    }, {
      path: 'phone',
      loadChildren: './pages/auth/phone/phone.module#PhonePageModule'
    }, {
      path: 'contact',
      loadChildren: './pages/contact/contact.module#ContactPageModule',
      canActivate: [_guard_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]]
    }, {
      path: 'menu',
      loadChildren: './pages/menu/menu.module#MenuPageModule',
      canActivate: [_guard_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]]
    }, {
      path: 'forgot-password',
      loadChildren: './pages/auth/forgot-password/forgot-password.module#ForgotPasswordPageModule'
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, {
        preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_2__["PreloadAllModules"]
      })],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], AppRoutingModule);
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _services_network_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./services/network.service */
    "./src/app/services/network.service.ts");
    /* harmony import */


    var _services_offline_manager_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./services/offline-manager.service */
    "./src/app/services/offline-manager.service.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ionic-native/splash-screen/ngx */
    "./node_modules/@ionic-native/splash-screen/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @ionic-native/status-bar/ngx */
    "./node_modules/@ionic-native/status-bar/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var _services_auth_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./services/auth.service */
    "./src/app/services/auth.service.ts");
    /* harmony import */


    var _services_alert_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./services/alert.service */
    "./src/app/services/alert.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _ionic_native_onesignal_ngx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @ionic-native/onesignal/ngx */
    "./node_modules/@ionic-native/onesignal/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var _ionic_native_spinner_dialog_ngx__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @ionic-native/spinner-dialog/ngx */
    "./node_modules/@ionic-native/spinner-dialog/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _ionic_native_app_version_ngx__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @ionic-native/app-version/ngx */
    "./node_modules/@ionic-native/app-version/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var _services_env_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./services/env.service */
    "./src/app/services/env.service.ts");
    /* harmony import */


    var _ionic_native_device_ngx__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! @ionic-native/device/ngx */
    "./node_modules/@ionic-native/device/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var _ionic_native_unique_device_id_ngx__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! @ionic-native/unique-device-id/ngx */
    "./node_modules/@ionic-native/unique-device-id/__ivy_ngcc__/ngx/index.js"); // console.log(uuid);


    var AppComponent =
    /*#__PURE__*/
    function () {
      function AppComponent(appVersion, spinnerDialog, menu, zone, router, platform, http, splashScreen, statusBar, authService, env, navCtrl, alertService, oneSignal, alertCtrl, offlineManager, networkService, device, uniqueDeviceID) {
        _classCallCheck(this, AppComponent);

        this.appVersion = appVersion;
        this.spinnerDialog = spinnerDialog;
        this.menu = menu;
        this.zone = zone;
        this.router = router;
        this.platform = platform;
        this.http = http;
        this.splashScreen = splashScreen;
        this.statusBar = statusBar;
        this.authService = authService;
        this.env = env;
        this.navCtrl = navCtrl;
        this.alertService = alertService;
        this.oneSignal = oneSignal;
        this.alertCtrl = alertCtrl;
        this.offlineManager = offlineManager;
        this.networkService = networkService;
        this.device = device;
        this.uniqueDeviceID = uniqueDeviceID;
        this.appVersion.getAppName();
        this.appVersion.getPackageName();
        this.versioncode = this.appVersion.getVersionCode();
        this.version = this.version = this.appVersion.getVersionNumber();
        console.log(this.version);
        this.students = new Array();
        this.initializeApp(); // this.getSession();
        // this.authService.checkFeed().then(
        //   feed => {
        //    // console.log(feed);
        //    this.feedback = feed;
        //   });
      }

      _createClass(AppComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {// this.getSession();
        }
      }, {
        key: "ionViewWillEnter",
        value: function ionViewWillEnter() {// this.zone.run(() => {
          //   // console.log('force update the screen', uuid);
          // });
          // this.getSession();
        }
      }, {
        key: "initializeApp",
        value: function initializeApp() {
          var _this = this;

          // this.splashScreen.show();
          this.platform.ready().then(function () {
            _this.statusBar.styleDefault(); // this.statusBar.overlaysWebView(true);
            // set status bar to white


            _this.statusBar.backgroundColorByHexString('#397C49'); // Commenting splashScreen Hide, so it won't hide splashScreen before auth check


            _this.hideSplash();

            _this.networkService.onNetworkChange().subscribe(function (status) {
              if (status === _services_network_service__WEBPACK_IMPORTED_MODULE_1__["ConnectionStatus"].Online) {// this.offlineManager.checkForEvents().subscribe();
              }
            }); // console.log(this.students);


            _this.setupPush();

            _this.authService.getToken();

            _this.getSession();

            _this.authService.checkFeed().then(function (feed) {
              // console.log(feed);
              _this.feedback = feed;
            });
          });
        } // When Logout Button is pressed 

      }, {
        key: "logout",
        value: function logout() {
          var _this2 = this;

          this.authService.presentLoading(); // localStorage.removeItem('token');
          // this.navCtrl.navigateRoot('/login');
          // this.presentLoading();
          // setTimeout(() => this.spinnerDialog.hide(), 2000);

          var formData = new FormData(); // localStorage.removeItem('token');

          formData.append('parent_id', this.userinfo.parent_id);
          formData.append('device_user_id', '');
          this.http.post(this.env.API_URL + 'updateDeviceUserId', formData).subscribe(function (update) {
            // console.log(update);
            _this2.info = update;

            if (_this2.info.response === 'success') {
              localStorage.removeItem('token');

              _this2.authService.dismiss(); // this.alertService.presentToast('Logged out succesfully');
              // this.getSession();


              _this2.navCtrl.navigateRoot('/login'); // this.spinnerDialog.hide();

            } else {
              _this2.authService.dismiss();

              localStorage.removeItem('token');
            }
          });
        }
      }, {
        key: "hideSplash",
        value: function hideSplash() {
          var _this3 = this;

          if (this.splashScreen) {
            setTimeout(function () {
              _this3.splashScreen.hide();
            }, 2000);
          }
        }
      }, {
        key: "presentLoading",
        value: function presentLoading() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee() {
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee);
          }));
        }
      }, {
        key: "toggleMenu",
        value: function toggleMenu() {
          this.menu.close(); // this.menu.toggle(); // Add this method to your button click function
        }
      }, {
        key: "getSession",
        value: function getSession() {
          var _this4 = this;

          this.authService.checkFeed().then(function (feed) {
            // console.log(feed);
            _this4.feedback = feed;
          }); // console.log('here');

          if (localStorage.getItem('token') === null) {
            this.navCtrl.navigateRoot('/login');
          } else {
            var user = localStorage.getItem('token');
            var u = JSON.parse(user);
            this.userinfo = u; // console.log(u);

            if (this.userinfo === null) {
              this.router.navigate(['/login']);
            } else {
              this.students = this.userinfo.students === undefined ? [] : this.userinfo.students;
              this.school = this.students[0] === undefined ? [] : this.students[0].school;
              this.assets = "https://".concat(this.school, ".eduweb.co.ke/assets/students/"); // console.log(this.students, this.assets);
            }
          }
        } // student info

      }, {
        key: "studentData",
        value: function studentData(student) {
          // console.log(student);
          var navigationExtras = {
            state: {
              details: student
            }
          };
          this.router.navigate(['home'], navigationExtras);
        }
      }, {
        key: "mealMenu",
        value: function mealMenu() {
          var navigationExtras = {
            state: {
              details: this.school
            }
          };
          this.router.navigate(['menu'], navigationExtras);
        }
      }, {
        key: "feedbacks",
        value: function feedbacks() {
          var user = localStorage.getItem('token');
          var u = JSON.parse(user);
          this.userinfo = u; // console.log(this.userinfo);

          var navigationExtras = {
            state: {
              details: u
            }
          };
          this.router.navigate(['feed'], navigationExtras);
        }
      }, {
        key: "contact",
        value: function contact() {
          var navigationExtras = {
            state: {
              details: this.userinfo
            }
          };
          this.router.navigate(['contact'], navigationExtras);
        }
      }, {
        key: "change",
        value: function change() {
          // console.log(this.userinfo);
          var navigationExtras = {
            state: {
              details: this.userinfo
            }
          };
          this.router.navigate(['changepassword'], navigationExtras);
        }
      }, {
        key: "comingSoon",
        value: function comingSoon() {
          this.alertService.presentToast("Under construction, coming soon");
        } // push notifications

      }, {
        key: "setupPush",
        value: function setupPush() {
          var _this5 = this;

          // I recommend to put these into your environment.ts
          this.oneSignal.startInit('b6987dd6-80c8-40da-83e0-3ada5d55876c', '839327624940');
          this.oneSignal.inFocusDisplaying(this.oneSignal.OSInFocusDisplayOption.None); // Notifcation was received in general

          this.oneSignal.handleNotificationReceived().subscribe(function (data) {
            var msg = data.payload.body;
            var title = data.payload.title;
            var additionalData = data.payload.additionalData;

            _this5.showAlert(title, msg, additionalData.task);
          }); // Notification was really clicked/opened

          this.oneSignal.handleNotificationOpened().subscribe(function (data) {
            // Just a note that the data is a different place here!
            var additionalData = data.notification.payload.additionalData;

            _this5.showAlert('Notification opened', 'You already read this before', additionalData.task);
          });
          this.oneSignal.endInit();
          this.oneSignal.getIds().then(function (id) {
            var identity = id.userId;
            localStorage.setItem('id', identity);
          });
        }
      }, {
        key: "showAlert",
        value: function showAlert(title, msg, task) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee2() {
            var alert;
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    _context2.next = 2;
                    return this.alertCtrl.create({
                      header: title,
                      subHeader: msg,
                      buttons: [{
                        text: "Action: ".concat(task),
                        handler: function handler() {// E.g: Navigate to a specific screen
                        }
                      }]
                    });

                  case 2:
                    alert = _context2.sent;
                    alert.present();

                  case 4:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this);
          }));
        }
      }]);

      return AppComponent;
    }();

    AppComponent.ctorParameters = function () {
      return [{
        type: _ionic_native_app_version_ngx__WEBPACK_IMPORTED_MODULE_13__["AppVersion"]
      }, {
        type: _ionic_native_spinner_dialog_ngx__WEBPACK_IMPORTED_MODULE_11__["SpinnerDialog"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["MenuController"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgZone"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_9__["Router"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"]
      }, {
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_12__["HttpClient"]
      }, {
        type: _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_5__["SplashScreen"]
      }, {
        type: _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_6__["StatusBar"]
      }, {
        type: _services_auth_service__WEBPACK_IMPORTED_MODULE_7__["AuthService"]
      }, {
        type: _services_env_service__WEBPACK_IMPORTED_MODULE_14__["EnvService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"]
      }, {
        type: _services_alert_service__WEBPACK_IMPORTED_MODULE_8__["AlertService"]
      }, {
        type: _ionic_native_onesignal_ngx__WEBPACK_IMPORTED_MODULE_10__["OneSignal"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"]
      }, {
        type: _services_offline_manager_service__WEBPACK_IMPORTED_MODULE_2__["OfflineManagerService"]
      }, {
        type: _services_network_service__WEBPACK_IMPORTED_MODULE_1__["NetworkService"]
      }, {
        type: _ionic_native_device_ngx__WEBPACK_IMPORTED_MODULE_15__["Device"]
      }, {
        type: _ionic_native_unique_device_id_ngx__WEBPACK_IMPORTED_MODULE_16__["UniqueDeviceID"]
      }];
    };

    AppComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
      selector: 'app-root',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./app.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html"))["default"]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_ionic_native_app_version_ngx__WEBPACK_IMPORTED_MODULE_13__["AppVersion"], _ionic_native_spinner_dialog_ngx__WEBPACK_IMPORTED_MODULE_11__["SpinnerDialog"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["MenuController"], _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgZone"], _angular_router__WEBPACK_IMPORTED_MODULE_9__["Router"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"], _angular_common_http__WEBPACK_IMPORTED_MODULE_12__["HttpClient"], _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_5__["SplashScreen"], _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_6__["StatusBar"], _services_auth_service__WEBPACK_IMPORTED_MODULE_7__["AuthService"], _services_env_service__WEBPACK_IMPORTED_MODULE_14__["EnvService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"], _services_alert_service__WEBPACK_IMPORTED_MODULE_8__["AlertService"], _ionic_native_onesignal_ngx__WEBPACK_IMPORTED_MODULE_10__["OneSignal"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"], _services_offline_manager_service__WEBPACK_IMPORTED_MODULE_2__["OfflineManagerService"], _services_network_service__WEBPACK_IMPORTED_MODULE_1__["NetworkService"], _ionic_native_device_ngx__WEBPACK_IMPORTED_MODULE_15__["Device"], _ionic_native_unique_device_id_ngx__WEBPACK_IMPORTED_MODULE_16__["UniqueDeviceID"]])], AppComponent);
    /***/
  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
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


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ionic-native/splash-screen/ngx */
    "./node_modules/@ionic-native/splash-screen/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @ionic-native/status-bar/ngx */
    "./node_modules/@ionic-native/status-bar/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _ionic_native_native_storage_ngx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @ionic-native/native-storage/ngx */
    "./node_modules/@ionic-native/native-storage/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var _ionic_native_onesignal_ngx__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @ionic-native/onesignal/ngx */
    "./node_modules/@ionic-native/onesignal/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var _ionic_native_unique_device_id_ngx__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @ionic-native/unique-device-id/ngx */
    "./node_modules/@ionic-native/unique-device-id/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @ionic-native/in-app-browser/ngx */
    "./node_modules/@ionic-native/in-app-browser/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
    /* harmony import */


    var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! @angular/material/progress-spinner */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-spinner.js");
    /* harmony import */


    var _ionic_native_spinner_dialog_ngx__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! @ionic-native/spinner-dialog/ngx */
    "./node_modules/@ionic-native/spinner-dialog/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var _ionic_native_app_version_ngx__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! @ionic-native/app-version/ngx */
    "./node_modules/@ionic-native/app-version/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! @ionic-native/file-transfer/ngx */
    "./node_modules/@ionic-native/file-transfer/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! @ionic-native/file/ngx */
    "./node_modules/@ionic-native/file/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var _ionic_native_file_opener_ngx__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! @ionic-native/file-opener/ngx */
    "./node_modules/@ionic-native/file-opener/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! @ionic-native/network/ngx */
    "./node_modules/@ionic-native/network/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var _ionic_native_device_ngx__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
    /*! @ionic-native/device/ngx */
    "./node_modules/@ionic-native/device/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var _ng_idle_core__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
    /*! @ng-idle/core */
    "./node_modules/@ng-idle/core/__ivy_ngcc__/fesm2015/ng-idle-core.js");
    /* harmony import */


    var _ionic_native_streaming_media_ngx__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
    /*! @ionic-native/streaming-media/ngx */
    "./node_modules/@ionic-native/streaming-media/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var ionic_tooltips__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
    /*! ionic-tooltips */
    "./node_modules/ionic-tooltips/__ivy_ngcc__/fesm2015/ionic-tooltips.js");
    /* harmony import */


    var _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
    /*! @ionic-native/http/ngx */
    "./node_modules/@ionic-native/http/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var _ionic_native_document_viewer_ngx__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
    /*! @ionic-native/document-viewer/ngx */
    "./node_modules/@ionic-native/document-viewer/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var _ionic_native_screenshot_ngx__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
    /*! @ionic-native/screenshot/ngx */
    "./node_modules/@ionic-native/screenshot/__ivy_ngcc__/ngx/index.js");

    var AppModule_1; // import { Keyboard } from '@ionic-native/keyboard/ngx';
    // import { Uid } from '@ionic-native/uid/ngx';
    // import { AndroidPermissions } from '@ionic-native/android-permissions/ngx';
    // import { IonicImageLoader } from 'ionic-image-loader';
    // import { IonicStorageModule } from '@ionic/storage';

    var AppModule = AppModule_1 =
    /*#__PURE__*/
    function (_ng_idle_core__WEBPAC) {
      _inherits(AppModule, _ng_idle_core__WEBPAC);

      var _super = _createSuper(AppModule);

      function AppModule() {
        _classCallCheck(this, AppModule);

        return _super.apply(this, arguments);
      }

      _createClass(AppModule, [{
        key: "last",
        value: function last(value) {
          if (value !== void 0) {
            this.lastDate = value;
          }

          return this.lastDate;
        }
      }, {
        key: "now",
        value: function now() {
          return this.mockNow || new Date();
        }
      }]);

      return AppModule;
    }(_ng_idle_core__WEBPACK_IMPORTED_MODULE_23__["IdleExpiry"]);

    AppModule = AppModule_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]],
      entryComponents: [],
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_14__["BrowserAnimationsModule"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_15__["MatProgressSpinnerModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"].forRoot(), // IonicStorageModule.forRoot(),
      // IonicImageLoader.forRoot(),
      _app_routing_module__WEBPACK_IMPORTED_MODULE_8__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClientModule"], ionic_tooltips__WEBPACK_IMPORTED_MODULE_25__["TooltipsModule"].forRoot()],
      providers: [_ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_6__["StatusBar"], _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_5__["SplashScreen"], {
        provide: _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouteReuseStrategy"],
        useClass: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicRouteStrategy"]
      }, _ionic_native_native_storage_ngx__WEBPACK_IMPORTED_MODULE_10__["NativeStorage"], _ionic_native_onesignal_ngx__WEBPACK_IMPORTED_MODULE_11__["OneSignal"], _ionic_native_spinner_dialog_ngx__WEBPACK_IMPORTED_MODULE_16__["SpinnerDialog"], _ionic_native_unique_device_id_ngx__WEBPACK_IMPORTED_MODULE_12__["UniqueDeviceID"], _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_21__["Network"], _ionic_native_file_opener_ngx__WEBPACK_IMPORTED_MODULE_20__["FileOpener"], _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_13__["InAppBrowser"], _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_18__["FileTransfer"], _ionic_native_app_version_ngx__WEBPACK_IMPORTED_MODULE_17__["AppVersion"], _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_18__["FileTransferObject"], _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_19__["File"], _ionic_native_device_ngx__WEBPACK_IMPORTED_MODULE_22__["Device"], _ng_idle_core__WEBPACK_IMPORTED_MODULE_23__["Idle"], _ionic_native_streaming_media_ngx__WEBPACK_IMPORTED_MODULE_24__["StreamingMedia"], {
        provide: _ng_idle_core__WEBPACK_IMPORTED_MODULE_23__["IdleExpiry"],
        useClass: AppModule_1
      }, _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_13__["InAppBrowser"], _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_26__["HTTP"], _ionic_native_document_viewer_ngx__WEBPACK_IMPORTED_MODULE_27__["DocumentViewer"], _ionic_native_screenshot_ngx__WEBPACK_IMPORTED_MODULE_28__["Screenshot"] // Keyboard,
      // Uid,
      // AndroidPermissions,
      ],
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
    })], AppModule);
    /***/
  },

  /***/
  "./src/app/guard/auth.guard.ts":
  /*!*************************************!*\
    !*** ./src/app/guard/auth.guard.ts ***!
    \*************************************/

  /*! exports provided: AuthGuard */

  /***/
  function srcAppGuardAuthGuardTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthGuard", function () {
      return AuthGuard;
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


    var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../services/auth.service */
    "./src/app/services/auth.service.ts");

    var AuthGuard =
    /*#__PURE__*/
    function () {
      function AuthGuard(router, authService) {
        _classCallCheck(this, AuthGuard);

        this.router = router;
        this.authService = authService;
        this.session(); // this.canActivate()
      } // test permisions


      _createClass(AuthGuard, [{
        key: "canActivate",
        value: function canActivate(next, state) {
          var user = localStorage.getItem('token');
          var u = JSON.parse(user); // console.log(u);

          if (u !== null) {
            // this.router.navigate(['/dashboard']);
            return true;
          } else {
            this.router.navigate(['/login']);
            return false;
          }
        } // session get 

      }, {
        key: "session",
        value: function session() {
          var user = localStorage.getItem('token');
          var u = JSON.parse(user);

          if (u !== null) {
            // this.router.navigate(['/dashboard']);
            return true;
          } else {
            this.router.navigate(['/login']);
            return false;
          }
        }
      }]);

      return AuthGuard;
    }();

    AuthGuard.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]
      }];
    };

    AuthGuard = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]])], AuthGuard);
    /***/
  },

  /***/
  "./src/app/services/alert.service.ts":
  /*!*******************************************!*\
    !*** ./src/app/services/alert.service.ts ***!
    \*******************************************/

  /*! exports provided: AlertService */

  /***/
  function srcAppServicesAlertServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AlertService", function () {
      return AlertService;
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


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");

    var AlertService =
    /*#__PURE__*/
    function () {
      function AlertService(toastController) {
        _classCallCheck(this, AlertService);

        this.toastController = toastController;
      }

      _createClass(AlertService, [{
        key: "presentToast",
        value: function presentToast(message) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee3() {
            var toast;
            return regeneratorRuntime.wrap(function _callee3$(_context3) {
              while (1) {
                switch (_context3.prev = _context3.next) {
                  case 0:
                    _context3.next = 2;
                    return this.toastController.create({
                      message: message,
                      duration: 2000,
                      position: 'top',
                      color: 'dark'
                    });

                  case 2:
                    toast = _context3.sent;
                    toast.present();

                  case 4:
                  case "end":
                    return _context3.stop();
                }
              }
            }, _callee3, this);
          }));
        }
      }]);

      return AlertService;
    }();

    AlertService.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"]
      }];
    };

    AlertService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"]])], AlertService);
    /***/
  },

  /***/
  "./src/app/services/auth.service.ts":
  /*!******************************************!*\
    !*** ./src/app/services/auth.service.ts ***!
    \******************************************/

  /*! exports provided: AuthService */

  /***/
  function srcAppServicesAuthServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthService", function () {
      return AuthService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _ionic_native_native_storage_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ionic-native/native-storage/ngx */
    "./node_modules/@ionic-native/native-storage/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var _env_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./env.service */
    "./src/app/services/env.service.ts");
    /* harmony import */


    var src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! src/app/services/alert.service */
    "./src/app/services/alert.service.ts");
    /* harmony import */


    var device_uuid__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! device-uuid */
    "./node_modules/device-uuid/index.js");
    /* harmony import */


    var device_uuid__WEBPACK_IMPORTED_MODULE_8___default =
    /*#__PURE__*/
    __webpack_require__.n(device_uuid__WEBPACK_IMPORTED_MODULE_8__);
    /* harmony import */


    var ngx_spinner__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ngx-spinner */
    "./node_modules/ngx-spinner/__ivy_ngcc__/fesm2015/ngx-spinner.js");
    /* harmony import */


    var _ionic_native_unique_device_id_ngx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @ionic-native/unique-device-id/ngx */
    "./node_modules/@ionic-native/unique-device-id/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var _ionic_native_device_ngx__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @ionic-native/device/ngx */
    "./node_modules/@ionic-native/device/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var _ng_idle_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @ng-idle/core */
    "./node_modules/@ng-idle/core/__ivy_ngcc__/fesm2015/ng-idle-core.js");
    /* harmony import */


    var _ionic_native_spinner_dialog_ngx__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @ionic-native/spinner-dialog/ngx */
    "./node_modules/@ionic-native/spinner-dialog/__ivy_ngcc__/ngx/index.js"); // import { Keyboard } from '@ionic-native/keyboard/ngx';
    // import { Uid } from '@ionic-native/uid/ngx';
    // import { AndroidPermissions } from '@ionic-native/android-permissions/ngx';


    var uuid = new device_uuid__WEBPACK_IMPORTED_MODULE_8__["DeviceUUID"]().get();

    var AuthService =
    /*#__PURE__*/
    function () {
      function AuthService(spinnerDialog, spinner, // private keyboard: Keyboard,
      uniqueDeviceID, // private uid: Uid,
      // private androidPermissions: AndroidPermissions,
      http, storage, env, loadingController, navCtrl, alertService, alertCtrl, device, idle, toastController) {
        _classCallCheck(this, AuthService);

        this.spinnerDialog = spinnerDialog;
        this.spinner = spinner;
        this.uniqueDeviceID = uniqueDeviceID;
        this.http = http;
        this.storage = storage;
        this.env = env;
        this.loadingController = loadingController;
        this.navCtrl = navCtrl;
        this.alertService = alertService;
        this.alertCtrl = alertCtrl;
        this.device = device;
        this.idle = idle;
        this.toastController = toastController;
        this.isLoggedIn = false; // isLoading: any;

        this.isLoading = false; // this.getPermission();s
        // this.getUniqueDeviceID();
        // console.log('Device UUID is: ' + this.uiid);

        var user = localStorage.getItem('token');
        this.userdata = user;
        this.auth();
        this.checkSession();
      } // getUniqueDeviceID() {
      //   // tslint:disable-next-line:no-shadowed-variable
      //   this.uniqueDeviceID.get()
      //   .then(( uuid:any ) => {
      //     console.log('this is it: ' +uuid);
      //     return this.http.post(this.env.API_URL + 'parentLogin', uuid);
      //   })
      //   .catch((error: any) => console.log(uuid));
      // }
      //  keyStatus() {
      //   window.addEventListener('keyboardWillShow', () => {
      //     console.log("Keyboard will Show");
      //   });
      //   window.addEventListener('keyboardDidShow', () => {
      //     console.log("Keyboard is Shown");
      //   });
      //   window.addEventListener('keyboardWillHide', () => {
      //     console.log("Keyboard will Hide");
      //   });
      //   window.addEventListener('keyboardDidHide', () => {
      //     console.log("Keyboard is Hidden");
      //   });
      //  }
      //   showKeyboard() {
      //     this.keyboard.isVisible;
      //   }
      //   hideKeyboard() {
      //     this.keyboard.hide();
      //   }
      // get device permission
      // getPermission() {
      //   this.androidPermissions.checkPermission(
      //     this.androidPermissions.PERMISSION.READ_PHONE_STATE
      //   ).then(res => {
      //     if (res.hasPermission) {
      //     } else {
      //     this.androidPermissions.requestPermission(this.androidPermissions.PERMISSION.READ_PHONE_STATE).then(res => {
      //       }).catch(error => {
      //         console.log(error);
      //       });
      //     }
      //   }).catch(error => {
      //     console.log(error);
      //   });
      // }
      // getID_UID(type) {
      //   if (type === "IMEI") {
      //     return this.uid.IMEI;
      //   }else if (type === "ICCID") {
      //     return this.uid.ICCID;
      //   }else if(type === "IMSI"){
      //     return this.uid.IMSI;F
      //     return this.uid.MAC;
      //   }else if(type === "UUID"){
      //     return this.uid.UUID;
      //   }
      // }
      // next function
      //report absenteeism


      _createClass(AuthService, [{
        key: "reportAbsenteeism",
        value: function reportAbsenteeism(student_id, message, reason, start_date, end_date, school, starting, ending) {
          var _this6 = this;

          this.presentLoading();
          var students = [];
          students.push(student_id);
          var start, end;
          var transferObject = {
            "students": students,
            "message": message,
            "reason": reason,
            "starting": start_date,
            "ending": end_date,
            "start_date": starting,
            "end_date": ending,
            "school": school
          };
          console.log(JSON.stringify(transferObject));
          var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
            Accept: 'application/json',
            'Content-Type': 'application/json'
          });
          return this.http.post(this.env.API_URL + "reportAbsenteeism", transferObject, {
            headers: headers
          }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (respose) {
            _this6.dismiss();

            return respose;
          }));
        } //getabsenteeism

      }, {
        key: "getAbsenteeism",
        value: function getAbsenteeism(student_id, school) {
          var header = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({});
          return this.http.get(this.env.API_URL + "getStudentAbsenteeism/".concat(school, "/").concat(student_id), {
            headers: header
          }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (absentDays) {
            return absentDays;
          }));
        } // login 

      }, {
        key: "login",
        value: function login(email, password, deviceid) {
          var _this7 = this;

          if (email === '' && password === '') {
            this.presentAlert2('Password and Username  should not be blank!');
          } else if (email === '' && password !== '') {
            //
            this.presentAlert2('Username filed should not be blank!');
          } else if (email !== '' && password === '') {
            this.presentAlert2('Password field should not be blank!');
          } else {
            this.presentLoading(); // setTimeout(() => this.spinnerDialog.hide(), 3000);

            var formData = new FormData();
            formData.append('user_name', email);
            formData.append('user_pwd', password);
            formData.append('device_user_id', deviceid);
            return this.http.post(this.env.API_URL + 'parentLogin', formData).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (token) {
              _this7.data = token;

              if (_this7.data.response === 'success') {
                var user = _this7.data.data;
                _this7.students = _this7.data.data.students;
                console.log(_this7.students);

                if (_this7.students.length === 0) {
                  _this7.presentAlert('You account does not exist.Please contact respective school for more information.');

                  _this7.dismiss(); // this.spinnerDialog.hide();

                } else {
                  localStorage.setItem('token', JSON.stringify(_this7.data.data));

                  _this7.dismiss(); // this.spinnerDialog.hide();
                  // location.reload(true);


                  _this7.token = _this7.data;
                  _this7.isLoggedIn = true;
                  return token;
                }
              } else {
                _this7.dismiss(); // this.presentAlert('The username/password you entered is incorrect. Please check spelling and/or capitalization');


                _this7.token = null;
                _this7.isLoggedIn = false;
                return token;
              }
            }));
          }
        } // update password

      }, {
        key: "registerPwd",
        value: function registerPwd(password, phone) {
          var _this8 = this;

          if (password === '') {
            this.presentAlert2('Password should field  is required!');
          } else {
            this.presentLoading(); // setTimeout(() => this.spinnerDialog.hide(), 3000);

            var formData = new FormData();
            formData.append('phone', phone);
            formData.append('pwd', password);
            return this.http.post(this.env.API_URL + 'registerPwd', formData).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (token) {
              _this8.data = token;
              console.log(_this8.data);

              if (_this8.data.response === 'success') {
                _this8.dismiss();

                return _this8.data;
              } else {
                _this8.dismiss();

                _this8.presentAlert1(_this8.data.data);

                return _this8.data;
              }
            }));
          }
        } // check phone number for create account

      }, {
        key: "check",
        value: function check(phone) {
          var _this9 = this;

          if (phone === '') {
            this.presentAlert2('Phone number number is required!');
          } else {
            this.presentLoading(); // setTimeout(() => this.spinnerDialog.hide(), 5000);

            return this.http.get(this.env.API_URL + "registrationStatus/".concat(phone)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (t) {
              _this9.data = t;
              console.log(_this9.data);

              if (_this9.data.response === 'success') {
                _this9.dismiss();

                return t;
              } else {
                _this9.dismiss(); // this.presentAlert1(this.data.message);


                return t;
              }
            }));
          }
        } // check phone number for forgot password

      }, {
        key: "checkforgot",
        value: function checkforgot(phone) {
          var _this10 = this;

          if (phone === '') {
            this.presentAlert2('Phone number number is required!');
          } else {
            this.presentLoading(); // setTimeout(() => this.spinnerDialog.hide(), 5000);

            return this.http.get(this.env.API_URL + "forgotPassword/".concat(phone)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (t) {
              _this10.data = t;
              console.log("error" + _this10.data);

              if (_this10.data.response === 'success') {
                _this10.dismiss();

                return t;
              } else {
                _this10.dismiss();

                return t;
              }
            }));
          }
        } // verify phone and code

      }, {
        key: "verify",
        value: function verify(phone, code) {
          var _this11 = this;

          if (code === '') {
            this.presentAlert2('Confirmation code is required!');
          } else {
            this.presentLoading(); // setTimeout(() => this.spinnerDialog.hide(), 3000);

            return this.http.get(this.env.API_URL + "checkRegCode/".concat(phone, "/").concat(code)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (t) {
              _this11.data = t;

              if (_this11.data.response === 'success') {
                _this11.dismiss();

                return t;
              } else {
                _this11.dismiss();

                _this11.presentAlert1(_this11.data.message);

                return t;
              }
            }));
          }
        } // verify password

      }, {
        key: "verifypassword",
        value: function verifypassword(code, phone) {
          var _this12 = this;

          if (code === '') {
            this.presentAlert2('Password is required!');
          } else {
            this.presentLoading(); // setTimeout(() => this.spinnerDialog.hide(), 3000);

            return this.http.get(this.env.API_URL + "confirmTemporaryPassword/".concat(phone, "/").concat(code)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (t) {
              _this12.data = t;

              if (_this12.data.response === 'success') {
                _this12.dismiss();

                return t;
              } else {
                _this12.dismiss();

                _this12.presentAlert1(_this12.data.message);

                console.log(_this12.data.message);
                return t;
              }
            }));
          }
        } // resend onetime password

      }, {
        key: "resend",
        value: function resend(phone) {
          var _this13 = this;

          return this.http.get(this.env.API_URL + "resendOtp/".concat(phone)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (c) {
            _this13.data = c;

            if (_this13.data.response === 'success') {
              _this13.presentAlert2(_this13.data.message);

              return c;
            } else {
              _this13.presentAlert2(_this13.data.message);
            }
          }));
        } // alert any info

      }, {
        key: "presentAlert2",
        value: function presentAlert2(info) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee4() {
            var alert;
            return regeneratorRuntime.wrap(function _callee4$(_context4) {
              while (1) {
                switch (_context4.prev = _context4.next) {
                  case 0:
                    _context4.next = 2;
                    return this.alertCtrl.create({
                      message: info,
                      subHeader: 'Info',
                      buttons: ['Ok']
                    });

                  case 2:
                    alert = _context4.sent;
                    _context4.next = 5;
                    return alert.present();

                  case 5:
                  case "end":
                    return _context4.stop();
                }
              }
            }, _callee4, this);
          }));
        } // alert any info

      }, {
        key: "presentAlert1",
        value: function presentAlert1(info) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee5() {
            var alert;
            return regeneratorRuntime.wrap(function _callee5$(_context5) {
              while (1) {
                switch (_context5.prev = _context5.next) {
                  case 0:
                    _context5.next = 2;
                    return this.alertCtrl.create({
                      message: info,
                      subHeader: 'Info',
                      buttons: ['Ok']
                    });

                  case 2:
                    alert = _context5.sent;
                    _context5.next = 5;
                    return alert.present();

                  case 5:
                  case "end":
                    return _context5.stop();
                }
              }
            }, _callee5, this);
          }));
        } // alert  login

      }, {
        key: "presentAlert",
        value: function presentAlert(info) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee6() {
            var alert;
            return regeneratorRuntime.wrap(function _callee6$(_context6) {
              while (1) {
                switch (_context6.prev = _context6.next) {
                  case 0:
                    _context6.next = 2;
                    return this.alertCtrl.create({
                      message: info,
                      subHeader: 'Login Failed',
                      buttons: ['Ok']
                    });

                  case 2:
                    alert = _context6.sent;
                    _context6.next = 5;
                    return alert.present();

                  case 5:
                  case "end":
                    return _context6.stop();
                }
              }
            }, _callee6, this);
          }));
        } // register(fName: any, lName: any, email: any, password: any) {
        //   return this.http.post(this.env.API_URL + 'auth/register',
        //   {fName: fName, lName: lName, email: email, password: password});
        // }
        // reset password

      }, {
        key: "reset",
        value: function reset(userpass, newpassword) {
          if (userpass == "" && newpassword == "") {
            this.dismiss();
            this.presentAlert1("Passwords cannot be empty");
          } else if (userpass == "" || newpassword == "") {
            this.dismiss();
            this.presentAlert1("Password cannot be empty");
          } else {
            // this.presentLoading();
            var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
              Accept: 'application/json',
              'Content-Type': 'application/json'
            });
            var user = localStorage.getItem('token');
            var u = JSON.parse(user);
            this.dat = u;
            var data = {
              parent_id: this.dat.parent_id,
              user_pwd: userpass,
              new_password: newpassword
            }; // const formData = new FormData();
            // formData.append('parent_id', this.dat.parent_id);
            // formData.append('user_pwd', userpass);
            // formData.append('new_password', newpassword);

            console.log(data);
            return this.http.put(this.env.API_URL + 'updatePassword', data, {
              headers: headers
            });
          }
        } // add feedback

      }, {
        key: "addfeed",
        value: function addfeed(student, tittle, msg, school) {
          // this.presentLoading();
          // setTimeout(() => this.spinnerDialog.hide(), 1000);
          var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
            Accept: 'application/json',
            'Content-Type': 'application/json'
          });
          var user = localStorage.getItem('token');
          var u = JSON.parse(user);
          this.dat = u;
          var data = {
            subject: tittle,
            message: msg,
            message_from: u.first_name + ' ' + u.last_name,
            student_id: student,
            guardian_id: u.school_guardian_id
          };
          console.log(data); // this.dismiss();

          return this.http.post(this.env.API_URL + "addFeedback/".concat(school), data, {
            headers: headers
          });
        } // logout

      }, {
        key: "logout",
        value: function logout() {
          this.idle.stop();
          this.idle.ngOnDestroy(); // this.presentLoading();
          // setTi out(() => this.spinnerDialog.hide(), 2000);

          localStorage.removeItem('token'); // this.alertService.presentToast('Logged out succesfully');

          location.reload();
          this.navCtrl.navigateRoot('/login');
        } // user() {
        //   const headers = new HttpHeaders({
        //   });
        //   return this.http.get<User>(this.env.API_URL + 'auth/user', { headers: headers })
        //   .pipe(
        //     tap(user => {
        //       return user;
        //     })
        //   );
        // }
        // load news

      }, {
        key: "news",
        value: function news() {
          // this.presentLoading();
          // setTimeout(() => this.spinnerDialog.hide(), 500);
          var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({});
          var user = localStorage.getItem('token');
          var u = JSON.parse(user);
          this.dat = u;
          return this.http.get(this.env.API_URL + "getParentStudents/".concat(this.dat.parent_id), {
            headers: headers
          }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (news) {
            return news;
          }));
        } // reload news

      }, {
        key: "reloadnews",
        value: function reloadnews() {
          // this.presentLoading();
          // setTimeout(() => this.spinnerDialog.hide(), 2000);
          var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({});
          var user = localStorage.getItem('token');
          var u = JSON.parse(user);
          this.dat = u;
          return this.http.get(this.env.API_URL + "getParentStudents/".concat(this.dat.parent_id), {
            headers: headers
          }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (news) {
            return news;
          }));
        } // get keys

      }, {
        key: "keys",
        value: function keys(school) {
          var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({});
          return this.http.get(this.env.API_URL + "getGrading2/".concat(school), {
            headers: headers
          }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (x) {
            return x;
          }));
        } // get parent students

      }, {
        key: "getStudents",
        value: function getStudents() {
          // this.presentLoading();
          // setTimeout(() => this.spinnerDialog.hide(), 2000);
          var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({});
          var user = localStorage.getItem('token');
          var u = JSON.parse(user);
          this.dat = u;
          console.log(this.dat.parent_id);
          return this.http.get(this.env.API_URL + "getParentStudents/".concat(this.dat.parent_id), {
            headers: headers
          }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (news) {
            return news;
          }));
        } // get posts

      }, {
        key: "posts",
        value: function posts(school, sid, page) {
          // this.presentLoading();
          // setTimeout(() => this.spinnerDialog.hide(), 2000);
          var header = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({});
          return this.http.get(this.env.API_URL + "getBlog/".concat(school, "/").concat(sid, "/").concat(page), {
            headers: header
          }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (posts) {
            return posts;
          }));
        } // get homeworks

      }, {
        key: "homeworks",
        value: function homeworks(school, sid) {
          var header = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({});
          return this.http.get(this.env.API_URL + "getHomework/".concat(school, "/").concat(sid), {
            headers: header
          }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (homeworks) {
            return homeworks;
          }));
        } //get school details

      }, {
        key: "schoolInfo",
        value: function schoolInfo(school) {
          var header = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({});
          return this.http.get(this.env.API_URL + "getSchDetails/".concat(school), {
            headers: header
          }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (schoolInfo) {
            return schoolInfo;
          }));
        } // START OF EXAMS TABS /////////////////
        // cards(school: any, sid: any) {
        //   // this.presentLoading();
        //   //  setTimeout(() => this.spinnerDialog.hide(), 2000);
        //   const header = new HttpHeaders({
        //   });
        //   return this.http.get(this.env.API_URL + `getStudentReportCards/${school}/${sid}`, { headers: header })
        //     .pipe(
        //       tap(cards => {
        //         return cards;
        //       })
        //     );
        // }
        // new report cards 

      }, {
        key: "cbcreport",
        value: function cbcreport(school, student_id) {
          var header = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({});
          return this.http.get(this.env.API_URL + "getAllStudentCbcReportCardData/".concat(school, "/").concat(student_id), {
            headers: header
          }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (cbcreports) {
            return cbcreports;
          }));
        }
      }, {
        key: "report",
        value: function report(school, sid, tid, cid) {
          var header = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({});
          return this.http.get(this.env.API_URL + "getStudentReportCardData/".concat(school, "/").concat(sid, "/").concat(tid, "/").concat(cid), {
            headers: header
          }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (reports) {
            return reports;
          }));
        }
      }, {
        key: "cards",
        value: function cards(school, sid) {
          var header = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({});
          return this.http.get(this.env.API_URL + "getAllStudentReportCardData/".concat(school, "/").concat(sid), {
            headers: header
          }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (cards) {
            return cards;
          }));
        } //high cards 

      }, {
        key: "highCards",
        value: function highCards(school, student_id) {
          var header = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({});
          return this.http.get(this.env.API_URL + "getAllStudentReportCardDataHigh/".concat(school, "/").concat(student_id), {
            headers: header
          }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (highCards) {
            return highCards;
          }));
        } //get terms 
        // get school information

      }, {
        key: "getschoolihighnfo",
        value: function getschoolihighnfo(school, sid) {
          var header = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({});
          return this.http.get(this.env.API_URL + "getSchoolContactInfo/".concat(school, "/").concat(sid), {
            headers: header
          }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (info) {
            return info;
          }));
        }
      }, {
        key: "getResources",
        value: function getResources(school, sid) {
          var header = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({});
          return this.http.get(this.env.API_URL + "getStudentResources/".concat(school, "/").concat(sid), {
            headers: header
          }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (resources) {
            return resources;
          }));
        } // get exam list

      }, {
        key: "exams",
        value: function exams(school, cid, sid, term) {
          var header = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({});
          return this.http.get(this.env.API_URL + "getStudentExamMarksPortal/".concat(school, "/").concat(sid, "/").concat(cid, "/").concat(term), {
            headers: header
          }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (cards) {
            return cards;
          }));
        } // get examtypes

      }, {
        key: "examsTypes",
        value: function examsTypes(school, cid) {
          var header = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({});
          return this.http.get(this.env.API_URL + "getExamTypes/".concat(school, "/").concat(cid), {
            headers: header
          }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (types) {
            return types;
          }));
        } // get  current term

      }, {
        key: "currentTerm",
        value: function currentTerm(school) {
          var header = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({});
          return this.http.get(this.env.API_URL + "getCurrentTerm/".concat(school), {
            headers: header
          }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (term) {
            return term;
          }));
        } //get school terms

      }, {
        key: "schoolTerm",
        value: function schoolTerm(school, sid) {
          var header = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({});
          return this.http.get(this.env.API_URL + "schoolTerms/".concat(school, "/").concat(sid), {
            headers: header
          }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (school_term) {
            return school_term;
          }));
        } //get class History

      }, {
        key: "classHistory",
        value: function classHistory(school, sid) {
          var header = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({});
          return this.http.get(this.env.API_URL + "getStudentClasses/".concat(school, "/").concat(sid), {
            headers: header
          }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (class_histoy) {
            return class_histoy;
          }));
        }
      }, {
        key: "assessment",
        value: function assessment(school, sid) {
          var header = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({});
          return this.http.get(this.env.API_URL + "getDocReport/".concat(school, "/").concat(sid), {
            headers: header
          }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (types) {
            return types;
          }));
        } // END OF EXAMS TABS
        // START DETAILS TABS

      }, {
        key: "getstudent",
        value: function getstudent(school, sid) {
          var _this14 = this;

          this.presentLoading(); // setTimeout(() => this.spinnerDialog.hide(), 2000);

          var header = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({});
          return this.http.get(this.env.API_URL + "getStudent/".concat(school, "/").concat(sid), {
            headers: header
          }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (s) {
            _this14.dismiss();

            return s;
          }));
        } // END DETAILS TAB
        // FEE TAB

      }, {
        key: "fees",
        value: function fees(school, sid) {
          var header = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({});
          return this.http.get(this.env.API_URL + "getStudentFeeItemsPortal/".concat(school, "/").concat(sid), {
            headers: header
          }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (fees) {
            return fees;
          }));
        } // fee balance

      }, {
        key: "feesBalance",
        value: function feesBalance(school, sid) {
          // this.presentLoading();
          // setTimeout(() => this.spinnerDialog.hide(), 2000);
          var header = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({});
          return this.http.get(this.env.API_URL + "getStudentBalancePortal/".concat(school, "/").concat(sid), {
            headers: header
          }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (fees) {
            return fees;
          }));
        }
      }, {
        key: "Invoices",
        value: function Invoices(school, sid) {
          var header = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({});
          return this.http.get(this.env.API_URL + "getStudentInvoicesPortal/".concat(school, "/").concat(sid), {
            headers: header
          }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (fees) {
            return fees;
          }));
        }
      }, {
        key: "Payments",
        value: function Payments(school, sid) {
          var header = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({});
          return this.http.get(this.env.API_URL + "getStudentPaymentsPortal/".concat(school, "/").concat(sid), {
            headers: header
          }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (fees) {
            return fees;
          }));
        } // fee items

      }, {
        key: "Feeitems",
        value: function Feeitems(school, sid) {
          var header = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({});
          return this.http.get(this.env.API_URL + "getStudentFeeItemsPortal/".concat(school, "/").concat(sid), {
            headers: header
          }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (fees) {
            return fees;
          }));
        } // END OF FEE MANAGEMENTS
        // GALLERY & ALBUMS

      }, {
        key: "gallery",
        value: function gallery(school, sid) {
          // this.presentLoading();
          //  setTimeout(() => this.spinnerDialog.hide(), 2000);
          var header = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({});
          return this.http.get(this.env.API_URL + "getGalleryCommunications/".concat(school, "/").concat(sid), {
            headers: header
          }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (gallery) {
            return gallery;
          }));
        } // END OF GALLERY & ALBUMS
        // FEEDBACK

      }, {
        key: "getToken",
        value: function getToken() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee7() {
            var user, u;
            return regeneratorRuntime.wrap(function _callee7$(_context7) {
              while (1) {
                switch (_context7.prev = _context7.next) {
                  case 0:
                    _context7.next = 2;
                    return localStorage.getItem('token');

                  case 2:
                    user = _context7.sent;
                    u = JSON.parse(user);

                    if (u !== null) {
                      this.token = u;
                      this.isLoggedIn = true;
                    } else {
                      this.token = null;
                      this.isLoggedIn = false;
                    }

                  case 5:
                  case "end":
                    return _context7.stop();
                }
              }
            }, _callee7, this);
          }));
        } // auth or check session

      }, {
        key: "auth",
        value: function auth() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee8() {
            var user, u;
            return regeneratorRuntime.wrap(function _callee8$(_context8) {
              while (1) {
                switch (_context8.prev = _context8.next) {
                  case 0:
                    _context8.next = 2;
                    return localStorage.getItem('token');

                  case 2:
                    user = _context8.sent;
                    u = JSON.parse(user);

                    if (!(u !== null)) {
                      _context8.next = 8;
                      break;
                    }

                    return _context8.abrupt("return", u);

                  case 8:
                    return _context8.abrupt("return", null);

                  case 9:
                  case "end":
                    return _context8.stop();
                }
              }
            }, _callee8);
          }));
        } // gallery list

      }, {
        key: "albums",
        value: function albums(school, studentid) {
          var _this15 = this;

          // this.presentLoading();
          // setTimeout(() => this.spinnerDialog.hide(), 2000);
          var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({});
          return this.http.get(this.env.API_URL + "getParentStudents/".concat(school, "/").concat(studentid), {
            headers: headers
          }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (news) {
            _this15.loading.dismiss();

            return news;
          }));
        } // get session data

      }, {
        key: "checkSession",
        value: function checkSession() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee9() {
            var user, u;
            return regeneratorRuntime.wrap(function _callee9$(_context9) {
              while (1) {
                switch (_context9.prev = _context9.next) {
                  case 0:
                    _context9.next = 2;
                    return localStorage.getItem('token');

                  case 2:
                    user = _context9.sent;
                    u = JSON.parse(user); // console.log(u);

                    if (!(u !== null)) {
                      _context9.next = 9;
                      break;
                    }

                    this.navCtrl.navigateRoot('/dashboard');
                    return _context9.abrupt("return", 1);

                  case 9:
                    this.navCtrl.navigateRoot('/login');
                    return _context9.abrupt("return", 0);

                  case 11:
                  case "end":
                    return _context9.stop();
                }
              }
            }, _callee9, this);
          }));
        } // check if school uses feedback

      }, {
        key: "checkFeed",
        value: function checkFeed() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee10() {
            var user, u, student;
            return regeneratorRuntime.wrap(function _callee10$(_context10) {
              while (1) {
                switch (_context10.prev = _context10.next) {
                  case 0:
                    _context10.next = 2;
                    return localStorage.getItem('token');

                  case 2:
                    user = _context10.sent;
                    u = JSON.parse(user);

                    if (!(u !== null)) {
                      _context10.next = 13;
                      break;
                    }

                    student = u.students[0];

                    if (!(student.use_feedback === 'true')) {
                      _context10.next = 10;
                      break;
                    }

                    return _context10.abrupt("return", 'true');

                  case 10:
                    return _context10.abrupt("return", 'false');

                  case 11:
                    _context10.next = 14;
                    break;

                  case 13:
                    return _context10.abrupt("return", 0);

                  case 14:
                  case "end":
                    return _context10.stop();
                }
              }
            }, _callee10);
          }));
        } // loader

      }, {
        key: "presentLoading1",
        value: function presentLoading1() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee11() {
            var loading;
            return regeneratorRuntime.wrap(function _callee11$(_context11) {
              while (1) {
                switch (_context11.prev = _context11.next) {
                  case 0:
                    _context11.next = 2;
                    return this.loadingController.create({
                      spinner: 'lines-small',
                      cssClass: 'my-class'
                    });

                  case 2:
                    loading = _context11.sent;
                    _context11.next = 5;
                    return loading.present();

                  case 5:
                  case "end":
                    return _context11.stop();
                }
              }
            }, _callee11, this);
          }));
        } // async dismiss() {
        //   await this.loadingController.dismiss();
        // }

      }, {
        key: "presentLoading",
        value: function presentLoading() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee12() {
            var _this16 = this;

            return regeneratorRuntime.wrap(function _callee12$(_context12) {
              while (1) {
                switch (_context12.prev = _context12.next) {
                  case 0:
                    this.isLoading = true;
                    _context12.next = 3;
                    return this.loadingController.create({
                      spinner: 'lines-small',
                      cssClass: 'my-class'
                    }).then(function (a) {
                      a.present().then(function () {
                        console.log('presented');

                        if (!_this16.isLoading) {
                          a.dismiss().then(function () {
                            return console.log('abort presenting');
                          });
                        }
                      });
                    });

                  case 3:
                    return _context12.abrupt("return", _context12.sent);

                  case 4:
                  case "end":
                    return _context12.stop();
                }
              }
            }, _callee12, this);
          }));
        }
      }, {
        key: "dismiss",
        value: function dismiss() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee13() {
            return regeneratorRuntime.wrap(function _callee13$(_context13) {
              while (1) {
                switch (_context13.prev = _context13.next) {
                  case 0:
                    this.isLoading = false;
                    _context13.next = 3;
                    return this.loadingController.dismiss().then(function () {
                      return console.log('dismissed');
                    });

                  case 3:
                    return _context13.abrupt("return", _context13.sent);

                  case 4:
                  case "end":
                    return _context13.stop();
                }
              }
            }, _callee13, this);
          }));
        } // getschool details

      }, {
        key: "getSchool",
        value: function getSchool(school) {
          var header = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({});
          return this.http.get(this.env.API_URL + "getSchoolContactInfo/".concat(school), {
            headers: header
          }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (s) {
            return s;
          }));
        } //get meal menu

      }, {
        key: "getMenu",
        value: function getMenu(school) {
          var header = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({});
          return this.http.get(this.env.API_URL + "getMealsMenu/".concat(school), {
            headers: header
          }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (menu) {
            return menu;
          }));
        }
      }]);

      return AuthService;
    }();

    AuthService.ctorParameters = function () {
      return [{
        type: _ionic_native_spinner_dialog_ngx__WEBPACK_IMPORTED_MODULE_13__["SpinnerDialog"]
      }, {
        type: ngx_spinner__WEBPACK_IMPORTED_MODULE_9__["NgxSpinnerService"]
      }, {
        type: _ionic_native_unique_device_id_ngx__WEBPACK_IMPORTED_MODULE_10__["UniqueDeviceID"]
      }, {
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
      }, {
        type: _ionic_native_native_storage_ngx__WEBPACK_IMPORTED_MODULE_5__["NativeStorage"]
      }, {
        type: _env_service__WEBPACK_IMPORTED_MODULE_6__["EnvService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"]
      }, {
        type: src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_7__["AlertService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"]
      }, {
        type: _ionic_native_device_ngx__WEBPACK_IMPORTED_MODULE_11__["Device"]
      }, {
        type: _ng_idle_core__WEBPACK_IMPORTED_MODULE_12__["Idle"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"]
      }];
    };

    AuthService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
      providedIn: 'root'
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_ionic_native_spinner_dialog_ngx__WEBPACK_IMPORTED_MODULE_13__["SpinnerDialog"], ngx_spinner__WEBPACK_IMPORTED_MODULE_9__["NgxSpinnerService"], _ionic_native_unique_device_id_ngx__WEBPACK_IMPORTED_MODULE_10__["UniqueDeviceID"], _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _ionic_native_native_storage_ngx__WEBPACK_IMPORTED_MODULE_5__["NativeStorage"], _env_service__WEBPACK_IMPORTED_MODULE_6__["EnvService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"], src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_7__["AlertService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"], _ionic_native_device_ngx__WEBPACK_IMPORTED_MODULE_11__["Device"], _ng_idle_core__WEBPACK_IMPORTED_MODULE_12__["Idle"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"]])], AuthService);
    /***/
  },

  /***/
  "./src/app/services/env.service.ts":
  /*!*****************************************!*\
    !*** ./src/app/services/env.service.ts ***!
    \*****************************************/

  /*! exports provided: EnvService */

  /***/
  function srcAppServicesEnvServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EnvService", function () {
      return EnvService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var EnvService = function EnvService() {
      _classCallCheck(this, EnvService);

      this.API_URL = 'https:api.eduweb.co.ke/';
    };

    EnvService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])], EnvService);
    /***/
  },

  /***/
  "./src/app/services/network.service.ts":
  /*!*********************************************!*\
    !*** ./src/app/services/network.service.ts ***!
    \*********************************************/

  /*! exports provided: ConnectionStatus, NetworkService */

  /***/
  function srcAppServicesNetworkServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ConnectionStatus", function () {
      return ConnectionStatus;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NetworkService", function () {
      return NetworkService;
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


    var _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic-native/network/ngx */
    "./node_modules/@ionic-native/network/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");

    var ConnectionStatus;

    (function (ConnectionStatus) {
      ConnectionStatus[ConnectionStatus["Online"] = 0] = "Online";
      ConnectionStatus[ConnectionStatus["Offline"] = 1] = "Offline";
    })(ConnectionStatus || (ConnectionStatus = {}));

    var NetworkService =
    /*#__PURE__*/
    function () {
      function NetworkService(network, toastController, plt) {
        var _this17 = this;

        _classCallCheck(this, NetworkService);

        this.network = network;
        this.toastController = toastController;
        this.plt = plt;
        this.status = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](ConnectionStatus.Offline);
        this.plt.ready().then(function () {
          _this17.initializeNetworkEvents();

          var status = _this17.network.type !== 'none' ? ConnectionStatus.Online : ConnectionStatus.Offline;

          _this17.status.next(status);
        });
      }

      _createClass(NetworkService, [{
        key: "initializeNetworkEvents",
        value: function initializeNetworkEvents() {
          var _this18 = this;

          this.network.onDisconnect().subscribe(function () {
            if (_this18.status.getValue() === ConnectionStatus.Online) {
              console.log('WE ARE OFFLINE');

              _this18.updateNetworkStatus(ConnectionStatus.Offline);
            }
          });
          this.network.onConnect().subscribe(function () {
            if (_this18.status.getValue() === ConnectionStatus.Offline) {
              console.log('WE ARE ONLINE');

              _this18.updateNetworkStatus(ConnectionStatus.Online);
            }
          });
        }
      }, {
        key: "updateNetworkStatus",
        value: function updateNetworkStatus(status) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee14() {
            var connection, colour, toast;
            return regeneratorRuntime.wrap(function _callee14$(_context14) {
              while (1) {
                switch (_context14.prev = _context14.next) {
                  case 0:
                    this.status.next(status);
                    connection = status === ConnectionStatus.Offline ? 'Offline' : 'Online';
                    colour = connection === 'Offline' ? 'danger' : 'success';
                    toast = this.toastController.create({
                      message: "You are now ".concat(connection),
                      duration: 4000,
                      color: colour,
                      position: 'top'
                    });
                    toast.then(function (toast) {
                      return toast.present();
                    });

                  case 5:
                  case "end":
                    return _context14.stop();
                }
              }
            }, _callee14, this);
          }));
        }
      }, {
        key: "onNetworkChange",
        value: function onNetworkChange() {
          return this.status.asObservable();
        }
      }, {
        key: "getCurrentNetworkStatus",
        value: function getCurrentNetworkStatus() {
          return this.status.getValue();
        }
      }]);

      return NetworkService;
    }();

    NetworkService.ctorParameters = function () {
      return [{
        type: _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_2__["Network"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"]
      }];
    };

    NetworkService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_2__["Network"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"]])], NetworkService);
    /***/
  },

  /***/
  "./src/app/services/offline-manager.service.ts":
  /*!*****************************************************!*\
    !*** ./src/app/services/offline-manager.service.ts ***!
    \*****************************************************/

  /*! exports provided: OfflineManagerService */

  /***/
  function srcAppServicesOfflineManagerServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OfflineManagerService", function () {
      return OfflineManagerService;
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


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");

    var STORAGE_REQ_KEY = 'storedreq';

    var OfflineManagerService = function OfflineManagerService( // private storage: Storage,
    http, toastController) {
      _classCallCheck(this, OfflineManagerService);

      this.http = http;
      this.toastController = toastController;
    };

    OfflineManagerService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"]
      }];
    };

    OfflineManagerService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"]])], OfflineManagerService);
    /***/
  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js"); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/platform-browser-dynamic */
    "./node_modules/@angular/platform-browser-dynamic/__ivy_ngcc__/fesm2015/platform-browser-dynamic.js");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
    }

    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])["catch"](function (err) {
      return console.log(err);
    });
    /***/
  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! /Users/kokodavid/Downloads/ep/src/main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map