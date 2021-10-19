function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-contact-contact-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/contact/contact.page.html":
  /*!***************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/contact/contact.page.html ***!
    \***************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesContactContactPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n    <ion-toolbar color=\"primary\">\n        <ion-buttons slot=\"start\" style=\"font-size: 14px;\">\n            <ion-back-button text=\"\" icon=\"chevron-back\"></ion-back-button>School Contact\n        </ion-buttons>\n        <!-- <ion-title style=\"text-transform: uppercase\">Report Card</ion-title> -->\n    </ion-toolbar>\n</ion-header>\n\n<ion-content>\n    <ion-item>\n        <img src={{header}} />\n    </ion-item>\n    <div style=\"margin: 15px;\">\n        <ion-item lines=\"none\">\n            <ion-icon name=\"school\" slot=\"start\"></ion-icon>\n\n            {{school_info.school_name}}\n        </ion-item>\n        <ion-item lines=\"none\">\n            <ion-icon name=\"earth\" slot=\"start\"></ion-icon>\n            <p style=\"font-size: normal;\"> {{school_info.address_1}}, {{school_info.address_2}}, {{school_info.country}}\n            </p>\n\n        </ion-item>\n        <ion-item lines=\"none\">\n            <ion-icon name=\"mail\" slot=\"start\"></ion-icon>\n            <a href=\"mailto:{{school_info.email_address}}\" style=\"font-size: normal;\">{{school_info.email_address}}</a>\n        </ion-item>\n        <ion-item lines=\"none\">\n            <ion-icon name=\"call\" slot=\"start\"></ion-icon>\n            <a href=\"tel:{{school_info.phone_number}}\">{{school_info.phone_number}}</a>\n        </ion-item>\n        <ion-item lines=\"none\">\n            <ion-icon name=\"cash\" slot=\"start\"></ion-icon>\n            <p>Payment information</p>\n\n        </ion-item>\n        <div *ngFor=\"let bd of banking_details\">\n            <ion-item lines=\"none\" *ngIf=\"bd.active === true\">\n                <ul style=\"font-size: small; list-style: none; \">\n                <li>{{bd.name}}</li>\n                <li>{{bd.branch}}</li>\n                <li>{{bd.acc_name}}</li>\n                <li (click)=\"copyText(bd.acc_number)\" style=\"color: #397C49;\">{{bd.acc_number}}</li>\n                </ul>\n            </ion-item>\n        </div>\n    </div>\n</ion-content>";
    /***/
  },

  /***/
  "./src/app/pages/contact/contact.module.ts":
  /*!*************************************************!*\
    !*** ./src/app/pages/contact/contact.module.ts ***!
    \*************************************************/

  /*! exports provided: ContactPageModule */

  /***/
  function srcAppPagesContactContactModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ContactPageModule", function () {
      return ContactPageModule;
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


    var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material/progress-spinner */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-spinner.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var ngx_spinner__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ngx-spinner */
    "./node_modules/ngx-spinner/__ivy_ngcc__/fesm2015/ngx-spinner.js");
    /* harmony import */


    var _contact_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./contact.page */
    "./src/app/pages/contact/contact.page.ts");

    var routes = [{
      path: '',
      component: _contact_page__WEBPACK_IMPORTED_MODULE_8__["ContactPage"]
    }];

    var ContactPageModule = function ContactPageModule() {
      _classCallCheck(this, ContactPageModule);
    };

    ContactPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonicModule"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_5__["MatProgressSpinnerModule"], ngx_spinner__WEBPACK_IMPORTED_MODULE_7__["NgxSpinnerModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)],
      declarations: [_contact_page__WEBPACK_IMPORTED_MODULE_8__["ContactPage"]]
    })], ContactPageModule);
    /***/
  },

  /***/
  "./src/app/pages/contact/contact.page.scss":
  /*!*************************************************!*\
    !*** ./src/app/pages/contact/contact.page.scss ***!
    \*************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesContactContactPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-content {\n  font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Oxygen, Ubuntu, Cantarell, \"Open Sans\", \"Helvetica Neue\", sans-serif;\n}\nion-content .h5 {\n  font-weight: 400;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9rb2tvZGF2aWQvRG93bmxvYWRzL2VwL3NyYy9hcHAvcGFnZXMvY29udGFjdC9jb250YWN0LnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvY29udGFjdC9jb250YWN0LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHdJQUFBO0FDQ0o7QURDSTtFQUNJLGdCQUFBO0FDQ1IiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9jb250YWN0L2NvbnRhY3QucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbnRlbnR7XG4gICAgZm9udC1mYW1pbHk6IC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgJ1NlZ29lIFVJJywgUm9ib3RvLCBPeHlnZW4sIFVidW50dSwgQ2FudGFyZWxsLCAnT3BlbiBTYW5zJywgJ0hlbHZldGljYSBOZXVlJywgc2Fucy1zZXJpZjtcblxuICAgIC5oNXtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICB9XG59IiwiaW9uLWNvbnRlbnQge1xuICBmb250LWZhbWlseTogLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCBcIlNlZ29lIFVJXCIsIFJvYm90bywgT3h5Z2VuLCBVYnVudHUsIENhbnRhcmVsbCwgXCJPcGVuIFNhbnNcIiwgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBzYW5zLXNlcmlmO1xufVxuaW9uLWNvbnRlbnQgLmg1IHtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/pages/contact/contact.page.ts":
  /*!***********************************************!*\
    !*** ./src/app/pages/contact/contact.page.ts ***!
    \***********************************************/

  /*! exports provided: ContactPage */

  /***/
  function srcAppPagesContactContactPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ContactPage", function () {
      return ContactPage;
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


    var src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/services/alert.service */
    "./src/app/services/alert.service.ts");

    var ContactPage =
    /*#__PURE__*/
    function () {
      function ContactPage(router, route, authService, alertService) {
        var _this = this;

        _classCallCheck(this, ContactPage);

        this.router = router;
        this.route = route;
        this.authService = authService;
        this.alertService = alertService;
        this.school_info = new Object();
        this.banking_details = new Array();
        this.route.queryParams.subscribe(function (params) {
          if (_this.router.getCurrentNavigation().extras.state) {
            _this.resources = _this.router.getCurrentNavigation().extras.state.details;
            _this.school_subdomain = _this.resources.students[0].school_subdomain;
          }
        });
      }

      _createClass(ContactPage, [{
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
                    return this.authService.schoolInfo(this.school_subdomain).subscribe(function (info) {
                      _this2.data = info;
                      _this2.school_info = _this2.data.data;
                      _this2.banking_details = _this2.school_info.banking_details === undefined ? [] : _this2.school_info.banking_details;
                      _this2.header = "https://".concat(_this2.school_subdomain, ".eduweb.co.ke/assets/schools/").concat(_this2.school_info.letterhead);
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
        key: "copyText",
        value: function copyText(accNo) {
          var selBox = document.createElement('textarea');
          selBox.style.position = 'fixed';
          selBox.style.left = '0';
          selBox.style.top = '0';
          selBox.style.opacity = '0';
          selBox.innerText = accNo;
          document.body.appendChild(selBox);
          selBox.focus();
          selBox.select();
          document.execCommand('copy');
          document.body.removeChild(selBox);
          this.alertService.presentToast('Account number copied to clipboard');
          this.authService.toastController;
        }
      }]);

      return ContactPage;
    }();

    ContactPage.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }, {
        type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]
      }, {
        type: src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_4__["AlertService"]
      }];
    };

    ContactPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-contact',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./contact.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/contact/contact.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./contact.page.scss */
      "./src/app/pages/contact/contact.page.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"], src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_4__["AlertService"]])], ContactPage);
    /***/
  }
}]);
//# sourceMappingURL=pages-contact-contact-module-es5.js.map