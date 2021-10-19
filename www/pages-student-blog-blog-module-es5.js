function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-student-blog-blog-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/student/blog/blog.page.html":
  /*!*****************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/student/blog/blog.page.html ***!
    \*****************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesStudentBlogBlogPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\" style=\"font-size: 14px;\">\n      <ion-back-button text=\"\" icon=\"chevron-back\">\n\n      </ion-back-button>HOMEWORK & POSTS\n    </ion-buttons>\n    <!-- <ion-title style=\"font-size:14px;\">POSTS & HOMEWORK</ion-title> -->\n  </ion-toolbar>\n  <ion-item>\n    <ion-avatar slot=\"start\" *ngIf=\"assets !==1\">\n      <img src={{assets}}>\n    </ion-avatar>\n    <ion-avatar slot=\"start\" *ngIf=\"assets === 1\">\n      <ion-icon size=\"32\" style=\"font-size: 2em\" name=\"happy-outline\"></ion-icon>\n    </ion-avatar>\n    <ion-label style=\"text-transform: uppercase;\">{{student.first_name}} {{student.middle_name}} {{student.last_name}}\n    </ion-label>\n  </ion-item>\n  <ion-segment (ionChange)=\"segmentChanged($event)\" [(ngModel)]=\"segment\" value=\"homeworks\" mode=\"md\">\n    <ion-segment-button value=\"homeworks\">\n      <ion-label>Homework</ion-label>\n    </ion-segment-button>\n    <ion-segment-button value=\"posts\">\n      <ion-label>Posts</ion-label>\n    </ion-segment-button>\n  </ion-segment>\n</ion-header>\n<ion-content scrollY=\"true\" class=\"ion-no-padding\">\n  <div [ngSwitch]=\"segment\">\n    <div *ngSwitchCase=\"'posts'\">\n      <ion-card *ngIf=\"posts.length == 0 && fake === 0\">\n        <ion-card-content>\n          No posts for this student.\n        </ion-card-content>\n      </ion-card>\n      <ion-list *ngIf=\"posts.length === 0 && fake === 1\">\n        <br>\n        <ion-spinner name=\"lines-small\" style=\"text-align: center; margin-left: 50%; margin-right: 50%;\"\n          color=\"primary\"></ion-spinner>\n        <!-- <ion-item *ngFor=\"let i of [1,2,3,4,5,6,7,8,9,10];  let i = index\"  >\n                      <ion-avatar slot=\"start\" >\n                         <ion-skeleton-text animated></ion-skeleton-text>\n                       </ion-avatar>\n                       <ion-label>\n                         <h3><ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text></h3>\n                         <p><ion-skeleton-text animated style=\"width: 90%\"></ion-skeleton-text></p>\n                         <p><ion-skeleton-text animated style=\"width: 80%\"></ion-skeleton-text></p>\n                       </ion-label>\n                </ion-item> -->\n      </ion-list>\n      <ion-list *ngIf=\"posts.length > 0\">\n        <ion-card *ngFor=\"let p of posts;  let i = index\">\n          <ion-card-header>\n            <!-- {{p.title}}  -->\n            <p>Posted On: {{p.creation_date}} by {{p.posted_by}}</p>\n            <p>Posted On: {{p.creation_date}} by {{p.posted_by}}</p>\n          </ion-card-header>\n          <ion-card-content>\n            <div [innerHTML]=\"p.body\"></div>\n          </ion-card-content>\n        </ion-card>\n      </ion-list>\n    </div>\n    <div *ngSwitchCase=\"'homeworks'\">\n      <ion-list>\n        <ion-list-header>\n          <ion-button size=\"small\" style=\"color: black;\" (click)=filterHomework()>FILTER <ion-icon slot=\"end\"\n              name=\"chevron-down\"></ion-icon>\n          </ion-button>\n        </ion-list-header>\n\n        <div id=\"filter\" hidden style=\"padding-left: 8px; padding-right: 8px;\">\n          <ion-item>\n            <ion-label>Subject</ion-label>\n            <ion-select [value]=\"all\" placeholder=\"All\" cancelText=\"Cancel\" okText=\"Ok\" [(ngModel)]=\"subjects\"\n              (ionChange)=\"onChange($event)\">\n              <ion-select-option value=\"all\">All</ion-select-option>\n              <div *ngFor=\"let s of subjectName; let i = index\">\n                <ion-select-option style=\"font-size:small;\" value=\"{{s.subject_name}}\">{{s.subject_name}}\n                </ion-select-option>\n              </div>\n\n            </ion-select>\n          </ion-item>\n\n          <div>\n            <ion-row>\n              <ion-col col-2>\n                <ion-item>\n                  <ion-label>Period</ion-label>\n                </ion-item>\n              </ion-col>\n              <ion-col col-10>\n                <ion-item>\n                  <ion-label>From</ion-label>\n                  <ion-datetime displayFormat=\"DD MMM YYYY\" min=\"{{min_date}}\" max=\"{{max_date}}\"\n                    placeholder=\"{{today}}\" [(ngModel)]=\"from_date\" (ngModelChange)=\"fromDate($event)\" doneText=\"Ok\"\n                    cancelText=\"Cancel\">\n                  </ion-datetime>\n                </ion-item>\n                <ion-item>\n                  <ion-label>To</ion-label>\n                  <ion-datetime displayFormat=\"DD MMM YYYY\" min=\"{{min_date}}\" max=\"{{max_date}}\"\n                    placeholder=\"{{today}}\" [(ngModel)]=\"date\" (ngModelChange)=\"selectDate($event)\" doneText=\"Ok\"\n                    cancelText=\"Cancel\">\n                  </ion-datetime>\n                </ion-item>\n\n              </ion-col>\n            </ion-row>\n          </div>\n          <ion-item>\n            <ion-button slot=\"end\" color=\"dark\" (click)=\"filter()\">Filter</ion-button>\n          </ion-item>\n        </div>\n      </ion-list>\n      <ion-list *ngIf=\"homeworks.length === 0 && fake === 1\">\n        <br>\n        <ion-spinner name=\"lines-small\" style=\"text-align: center; margin-left: 50%; margin-right: 50%;\"\n          color=\"primary\"></ion-spinner>\n      </ion-list>\n      <ion-card *ngIf=\"homeworks.length == 0 && fake === 0 \">\n        <ion-card-content>\n          No homework for this student.\n        </ion-card-content>\n      </ion-card>\n      <!-- <ion-list *ngIf=\"posts.length === 0 && fake === 1\">\n                <ion-item *ngFor=\"let i of [1,2];  let i = index\"  >\n                      <ion-avatar slot=\"start\" >\n                         <ion-skeleton-text animated></ion-skeleton-text>\n                       </ion-avatar>\n                       <ion-label>\n                         <h3><ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text></h3>\n                         <p><ion-skeleton-text animated style=\"width: 90%\"></ion-skeleton-text></p>\n                         <p><ion-skeleton-text animated style=\"width: 80%\"></ion-skeleton-text></p>\n                       </ion-label>\n                </ion-item>\n                </ion-list> -->\n      <!-- <ion-list *ngIf=\"homeworks.length > 0\">\n        <div *ngFor=\"let h of homeworks;  let i = index\">\n          <ion-grid>\n            <ion-row (click)=\"openHomework(h,this.school)\">\n              <ion-col style=\"text-transform: uppercase; font-size: 12px;\"> {{h.title}}\n                ({{h.subject_name}})</ion-col>\n\n            </ion-row>\n\n          </ion-grid>\n        </div>\n      </ion-list>\n       -->\n\n      <div *ngIf=\"homeworks.length > 0\">\n        <div *ngFor=\"let h of homeworks; let i = index\">\n          <ion-list style=\"padding: 0px;\">\n            <div *ngIf=\"h.seen === true; else not_seen\">\n                <ion-item  (click)=\"openHomework(h,this.school)\" style=\"padding: 10px;\">\n                  <ion-icon style=\"top:0px; color:#397C49;position: relative;\" size=\"32\" name=\"book\" slot=\"start\">\n                  </ion-icon>\n                  <div style=\"min-width: 100%; text-transform: uppercase; font-size: 12px; color:#397C49\">\n                    {{h.title}} ({{h.subject_name}})\n                    <div class=\"news\"><small>{{this.formatDate(h.assigned_date)}} By {{h.posted_by}}</small> </div>\n                  </div>\n                </ion-item>\n            </div>\n            <ng-template #not_seen>\n              \n                <ion-item  (click)=\"openHomework(h,this.school)\" style=\"padding: 10px;\">\n                  <ion-icon style=\"top:0px; color:black;position: relative;\" size=\"32\" name=\"book\" slot=\"start\">\n                  </ion-icon>\n                  <div style=\"min-width: 100%; text-transform: uppercase; font-size: 12px; color: black\">\n                    {{h.title}} ({{h.subject_name}})\n                    <div class=\"news\"><small>{{this.formatDate(h.assigned_date)}} By {{h.posted_by}}</small> </div>\n                  </div>\n                </ion-item>\n\n            </ng-template>\n          </ion-list>\n        </div>\n      </div>\n    </div>\n\n  </div>\n  <ion-fab *ngIf=\"feedback === 'true'\" vertical=\"bottom\" (click)=\"addfeed()\" horizontal=\"end\" slot=\"fixed\">\n    <ion-fab-button color=\"tertiary\">\n      <ion-icon name=\"chatbox-ellipses\"></ion-icon>\n    </ion-fab-button>\n  </ion-fab>\n</ion-content>";
    /***/
  },

  /***/
  "./src/app/pages/student/blog/blog.module.ts":
  /*!***************************************************!*\
    !*** ./src/app/pages/student/blog/blog.module.ts ***!
    \***************************************************/

  /*! exports provided: BlogPageModule */

  /***/
  function srcAppPagesStudentBlogBlogModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BlogPageModule", function () {
      return BlogPageModule;
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


    var _blog_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./blog.page */
    "./src/app/pages/student/blog/blog.page.ts");

    var routes = [{
      path: '',
      component: _blog_page__WEBPACK_IMPORTED_MODULE_6__["BlogPage"]
    }];

    var BlogPageModule = function BlogPageModule() {
      _classCallCheck(this, BlogPageModule);
    };

    BlogPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)],
      declarations: [_blog_page__WEBPACK_IMPORTED_MODULE_6__["BlogPage"]]
    })], BlogPageModule);
    /***/
  },

  /***/
  "./src/app/pages/student/blog/blog.page.scss":
  /*!***************************************************!*\
    !*** ./src/app/pages/student/blog/blog.page.scss ***!
    \***************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesStudentBlogBlogPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-segment {\n  text-transform: none;\n}\nion-segment ion-label {\n  color: white;\n  font-size: 12px;\n}\nion-content {\n  font-size: 12px;\n}\nion-content ion-col {\n  color: black;\n  font-size: 12px;\n}\nion-content .info {\n  color: black;\n}\nion-content ion-list {\n  -webkit-transform: translateZ(0) translate3d(0px, 0px, 0px);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9rb2tvZGF2aWQvRG93bmxvYWRzL2VwL3NyYy9hcHAvcGFnZXMvc3R1ZGVudC9ibG9nL2Jsb2cucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9zdHVkZW50L2Jsb2cvYmxvZy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxvQkFBQTtBQ0NKO0FEQ0k7RUFDSSxZQUFBO0VBQ0EsZUFBQTtBQ0NSO0FERUE7RUFDSSxlQUFBO0FDQ0o7QURBSTtFQUNJLFlBQUE7RUFDQSxlQUFBO0FDRVI7QURBSTtFQUNJLFlBQUE7QUNFUjtBREFJO0VBQ0ksMkRBQUE7QUNFUiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3N0dWRlbnQvYmxvZy9ibG9nLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1zZWdtZW50e1xuICAgIHRleHQtdHJhbnNmb3JtOm5vbmUgO1xuICAgIC8vY29sb3I6d2hpdGU7XG4gICAgaW9uLWxhYmVse1xuICAgICAgICBjb2xvcjp3aGl0ZTtcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgIH1cbn1cbmlvbi1jb250ZW50e1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICBpb24tY29se1xuICAgICAgICBjb2xvcjpibGFjaztcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgIH1cbiAgICAuaW5mb3tcbiAgICAgICAgY29sb3I6YmxhY2s7XG4gICAgfVxuICAgIGlvbi1saXN0e1xuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWigwKSB0cmFuc2xhdGUzZCgwcHgsIDBweCwgMHB4KTtcbiAgICB9XG5cblxufVxuLy8gLmxvYWRlcntcbi8vIFx0YmFja2dyb3VuZDogI2YyMGQ0OSAhaW1wb3J0YW50O1xuLy8gXHRib3JkZXItcmFkaXVzOjEwMHB4O1xuLy8gXHRoZWlnaHQ6MjBweDtcbi8vIFx0cHtcbi8vIFx0XHR0ZXh0LWFsaWduOmNlbnRlcjtcbi8vIFx0XHRjb2xvcjp3aGl0ZSAhaW1wb3J0YW50O1xuLy8gXHRcdHRleHQtYWxpZ246Y2VudGVyO1xuLy8gXHR9XG4vLyB9XG5cbi8vIGlvbi1jYXJkLWhlYWRlcntcbiAgICBcbi8vIH0iLCJpb24tc2VnbWVudCB7XG4gIHRleHQtdHJhbnNmb3JtOiBub25lO1xufVxuaW9uLXNlZ21lbnQgaW9uLWxhYmVsIHtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LXNpemU6IDEycHg7XG59XG5cbmlvbi1jb250ZW50IHtcbiAgZm9udC1zaXplOiAxMnB4O1xufVxuaW9uLWNvbnRlbnQgaW9uLWNvbCB7XG4gIGNvbG9yOiBibGFjaztcbiAgZm9udC1zaXplOiAxMnB4O1xufVxuaW9uLWNvbnRlbnQgLmluZm8ge1xuICBjb2xvcjogYmxhY2s7XG59XG5pb24tY29udGVudCBpb24tbGlzdCB7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVaKDApIHRyYW5zbGF0ZTNkKDBweCwgMHB4LCAwcHgpO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/pages/student/blog/blog.page.ts":
  /*!*************************************************!*\
    !*** ./src/app/pages/student/blog/blog.page.ts ***!
    \*************************************************/

  /*! exports provided: BlogPage */

  /***/
  function srcAppPagesStudentBlogBlogPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BlogPage", function () {
      return BlogPage;
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
    /* harmony import */


    var src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/app/services/alert.service */
    "./src/app/services/alert.service.ts");

    var BlogPage =
    /*#__PURE__*/
    function () {
      function BlogPage(authService, route, router, session, alert) {
        var _this = this;

        _classCallCheck(this, BlogPage);

        this.authService = authService;
        this.route = route;
        this.router = router;
        this.session = session;
        this.alert = alert;
        this.hidden = true;
        this.filtered = 0;
        this.segment = 'homeworks';
        this.posts = new Array();
        this.homeworks = new Array();
        this.fake = 1;
        this.all = "all";
        setTimeout(function () {
          _this.fake = 0;
        }, 3000);
        this.session.sessionTimeOut();
        this.route.queryParams.subscribe(function (params) {
          if (_this.router.getCurrentNavigation().extras.state) {
            _this.student = _this.router.getCurrentNavigation().extras.state.details;
            console.log(_this.student);
            _this.assets = _this.student.student_image === null ? 1 : "https://".concat(_this.student.school, ".eduweb.co.ke/assets/students/").concat(_this.student.student_image);
          }
        });
        this.today = moment__WEBPACK_IMPORTED_MODULE_4__().format("DD MMM YYYY");
        this.min_date = 2019;
        this.max_date = 2020;
      }

      _createClass(BlogPage, [{
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
                    return this.authService.posts(this.student.school, this.student.student_id, 1).subscribe(function (posts) {
                      // console.log(news);
                      _this2.data = posts;
                      _this2.posts = _this2.data.data.posts === undefined ? [] : _this2.data.data.posts;
                    });

                  case 4:
                    _context.next = 6;
                    return this.authService.homeworks(this.student.school, this.student.student_id).subscribe(function (homeworks) {
                      // console.log(homeworks.data);
                      _this2.data1 = homeworks;
                      _this2.homeworks = _this2.data1.data.homework === undefined ? [] : _this2.data1.data.homework;
                      _this2.subjectName = _this2.data1.data.subjects === undefined ? [] : _this2.data1.data.subjects;
                      console.log(JSON.stringify(_this2.homeworks));
                    });

                  case 6:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }, {
        key: "onChange",
        value: function onChange($event) {
          var _this3 = this;

          this.subject = $event.target.value;

          if (this.subject === 'all') {
            this.homeworks = this.data1.data.homework === undefined ? [] : this.data1.data.homework;
          } else {
            this.homeworks = this.data1.data.homework === undefined ? [] : this.data1.data.homework;
            this.homeworks = this.homeworks.filter(function (homeworks) {
              return homeworks.subject_name === _this3.subject;
            });
          }
        }
      }, {
        key: "fromDate",
        value: function fromDate($event) {
          if (this.subject === 'undefined') {
            this.alert.presentToast('Subject cannot be null');
          } else {
            this.ok = new Date($event).getTime();
            localStorage.setItem('from', this.ok);
          }
        }
      }, {
        key: "selectDate",
        value: function selectDate($event) {
          this.to = new Date($event).getTime();
          this.from = this.ok;
          localStorage.setItem('to', this.to);
        }
      }, {
        key: "filter",
        value: function filter() {
          var _this4 = this;

          var f = Number(localStorage.getItem('from')) - 86400000;
          var t = Number(localStorage.getItem('to'));
          console.log("from " + f + " to " + t);
          this.homeworks = this.data1.data.homework === undefined ? [] : this.data1.data.homework;
          var filtered = this.homeworks.filter(function (homeworks) {
            // var range = new Date(homeworks.assigned_date_formated);
            var formated_dates = homeworks.assigned_date.substr(0, 10);
            var range = new Date(formated_dates).getTime();

            if (_this4.subject === 'all') {
              return range >= f && range <= t && homeworks.subject_name;
            } else {
              return range >= f && range <= t && homeworks.subject_name === _this4.subject;
            }
          });
          this.homeworks = filtered;
        }
      }, {
        key: "formatDate",
        value: function formatDate(date) {
          return moment__WEBPACK_IMPORTED_MODULE_4__(date).format('MMM D, YYYY');
        }
      }, {
        key: "segmentChanged",
        value: function segmentChanged(ev) {// console.log('Segment changed', ev);
        }
      }, {
        key: "filterHomework",
        value: function filterHomework() {
          if (this.hidden == true) {
            document.getElementById('filter').hidden = false;
            this.hidden = false;
          } else {
            document.getElementById('filter').hidden = true;
            this.hidden = true;
            this.homeworks = this.data1.data.homework === undefined ? [] : this.data1.data.homework;
          }
        }
      }, {
        key: "addfeed",
        value: function addfeed() {
          var navigationExtras = {};
          this.router.navigate(['feedback'], navigationExtras);
        }
      }, {
        key: "openHomework",
        value: function openHomework(homeworks, school) {
          var navigationExtras = {
            state: {
              details: homeworks,
              school: this.student.school,
              student_id: this.student.student_id,
              student: this.student.first_name + " " + this.student.last_name
            }
          };
          this.router.navigate(['homework'], navigationExtras);
        }
      }]);

      return BlogPage;
    }();

    BlogPage.ctorParameters = function () {
      return [{
        type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }, {
        type: src_app_services_session_service__WEBPACK_IMPORTED_MODULE_5__["SessionService"]
      }, {
        type: src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_6__["AlertService"]
      }];
    };

    BlogPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-blog',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./blog.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/student/blog/blog.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./blog.page.scss */
      "./src/app/pages/student/blog/blog.page.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], src_app_services_session_service__WEBPACK_IMPORTED_MODULE_5__["SessionService"], src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_6__["AlertService"]])], BlogPage);
    /***/
  }
}]);
//# sourceMappingURL=pages-student-blog-blog-module-es5.js.map