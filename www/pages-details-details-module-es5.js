function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-details-details-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/details/details.page.html":
  /*!***************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/details/details.page.html ***!
    \***************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesDetailsDetailsPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n    <ion-toolbar color=\"primary\">\n        <ion-buttons slot=\"start\" style=\"font-size: 14px;\">\n            <ion-back-button text=\"\" icon='chevron-back'></ion-back-button>PHOTOS & ALBUMS\n          </ion-buttons>\n    <!-- <ion-title>PHOTOS & ALBUMS</ion-title> -->\n  </ion-toolbar>\n</ion-header>\n<ion-content class=\"ion-no-padding\">\n  <ion-card *ngIf=\"galleries.length === 0\">\n    <ion-card-content>\n      No photos on this album...\n    </ion-card-content>\n  </ion-card>\n\n    <ion-grid *ngIf=\"galleries.length > 0\">\n        <ion-row>\n          <ion-col  *ngFor=\"let photo of galleries;\" col-12 >\n            <!-- <ion-card>\n              <ion-card-content> -->\n            <a [href]=\"photo.src\">{{photo.src}}</a>\n            <!-- </ion-card-content>\n            </ion-card> -->\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/pages/details/details.module.ts":
  /*!*************************************************!*\
    !*** ./src/app/pages/details/details.module.ts ***!
    \*************************************************/

  /*! exports provided: DetailsPageModule */

  /***/
  function srcAppPagesDetailsDetailsModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DetailsPageModule", function () {
      return DetailsPageModule;
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


    var _details_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./details.page */
    "./src/app/pages/details/details.page.ts");

    var routes = [{
      path: '',
      component: _details_page__WEBPACK_IMPORTED_MODULE_6__["DetailsPage"]
    }];

    var DetailsPageModule = function DetailsPageModule() {
      _classCallCheck(this, DetailsPageModule);
    };

    DetailsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)],
      declarations: [_details_page__WEBPACK_IMPORTED_MODULE_6__["DetailsPage"]]
    })], DetailsPageModule);
    /***/
  },

  /***/
  "./src/app/pages/details/details.page.scss":
  /*!*************************************************!*\
    !*** ./src/app/pages/details/details.page.scss ***!
    \*************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesDetailsDetailsPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".img {\n  height: 100px;\n  min-width: 100px;\n  border-radius: 4px;\n  padding: 0;\n  -o-object-fit: cover;\n     object-fit: cover;\n  margin: 0 auto;\n}\n\nion-col {\n  background-color: #eee;\n  border: 2px white solid !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9rb2tvZGF2aWQvRG93bmxvYWRzL2VwL3NyYy9hcHAvcGFnZXMvZGV0YWlscy9kZXRhaWxzLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvZGV0YWlscy9kZXRhaWxzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVJLGFBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLG9CQUFBO0tBQUEsaUJBQUE7RUFDQSxjQUFBO0FDQUo7O0FESUE7RUFDSSxzQkFBQTtFQUNBLGtDQUFBO0FDREoiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9kZXRhaWxzL2RldGFpbHMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmltZ3tcbiAgICAgXG4gICAgaGVpZ2h0OiAxMDBweDtcbiAgICBtaW4td2lkdGg6IDEwMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICBwYWRkaW5nOjA7XG4gICAgb2JqZWN0LWZpdDogY292ZXI7XG4gICAgbWFyZ2luOiAwIGF1dG87XG5cblxufVxuaW9uLWNvbHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiNlZWU7XG4gICAgYm9yZGVyOiAycHggd2hpdGUgc29saWQgIWltcG9ydGFudDtcbn0iLCIuaW1nIHtcbiAgaGVpZ2h0OiAxMDBweDtcbiAgbWluLXdpZHRoOiAxMDBweDtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBwYWRkaW5nOiAwO1xuICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgbWFyZ2luOiAwIGF1dG87XG59XG5cbmlvbi1jb2wge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlO1xuICBib3JkZXI6IDJweCB3aGl0ZSBzb2xpZCAhaW1wb3J0YW50O1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/pages/details/details.page.ts":
  /*!***********************************************!*\
    !*** ./src/app/pages/details/details.page.ts ***!
    \***********************************************/

  /*! exports provided: DetailsPage */

  /***/
  function srcAppPagesDetailsDetailsPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DetailsPage", function () {
      return DetailsPage;
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


    var src_app_services_session_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/services/session.service */
    "./src/app/services/session.service.ts");

    var DetailsPage =
    /*#__PURE__*/
    function () {
      function DetailsPage(route, router, authService, sessionService) {
        var _this = this;

        _classCallCheck(this, DetailsPage);

        this.route = route;
        this.router = router;
        this.authService = authService;
        this.sessionService = sessionService;
        this.galleries = new Array();
        this.route.queryParams.subscribe(function (params) {
          if (_this.router.getCurrentNavigation().extras.state) {
            _this.gallerydata = _this.router.getCurrentNavigation().extras.state.details;
            _this.student = _this.router.getCurrentNavigation().extras.state.student;
            console.log(_this.gallerydata);
            var filename = _this.gallerydata.attachment ? _this.gallerydata.attachment : null;
            var files = filename === null ? '' : filename;
            var name = files.replace(/ /g, '%20');
            var nameArr = name === null ? null : name.split(',');
            var nameArr1 = nameArr[0] !== '' ? nameArr : [];
            console.log(nameArr1);
            _this.galleries = nameArr1.map(function (v, i) {
              _this.assets = "https://".concat(_this.student.school, ".eduweb.co.ke/assets/posts/").concat(v);
              return {
                id: i,
                src: _this.assets
              };
            });
            console.log("another one " + JSON.stringify(_this.galleries));
          }
        });
        this.sessionService.sessionTimeOut();
      }

      _createClass(DetailsPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return DetailsPage;
    }();

    DetailsPage.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]
      }, {
        type: src_app_services_session_service__WEBPACK_IMPORTED_MODULE_4__["SessionService"]
      }];
    };

    DetailsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-details',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./details.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/details/details.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./details.page.scss */
      "./src/app/pages/details/details.page.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"], src_app_services_session_service__WEBPACK_IMPORTED_MODULE_4__["SessionService"]])], DetailsPage);
    /***/
  }
}]);
//# sourceMappingURL=pages-details-details-module-es5.js.map