(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-student-fees-fees-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/student/fees/fees.page.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/student/fees/fees.page.html ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar color=\"primary\">\n      <ion-buttons slot=\"start\" style=\"font-size: 14px;\">\n          <ion-back-button text=\"\" icon=\"chevron-back\"></ion-back-button>PAYMENTS & INVOICES\n        </ion-buttons>\n    <!-- <ion-title style=\"font-size:14px;\">PAYMENTS & INVOICES</ion-title> -->\n  </ion-toolbar>\n  <ion-item>\n      <ion-avatar slot=\"start\" *ngIf=\"assets !==1\">\n          <img src={{assets}}>\n        </ion-avatar>\n        <ion-avatar slot=\"start\" *ngIf=\"assets === 1\">\n            <ion-icon   size=\"32\" style=\"font-size: 2em\"  name=\"happy-outline\"></ion-icon>\n          </ion-avatar>\n          <ion-label style=\"text-transform: uppercase;\">{{student.first_name}} {{student.middle_name}} {{student.last_name}}</ion-label>\n    </ion-item>\n  <ion-segment (ionChange)=\"segmentChanged($event)\" [(ngModel)]=\"segment\"  value=\"details\"  mode=\"md\">\n      <ion-segment-button value=\"summary\">\n        <ion-label>Summary</ion-label>\n      </ion-segment-button>\n      <ion-segment-button value=\"invoices\">\n        <ion-label>Invoices</ion-label>\n      </ion-segment-button>\n      <ion-segment-button value=\"payments\">\n      <ion-label>Payments</ion-label>\n      </ion-segment-button>\n        <ion-segment-button value=\"feeItems\">\n          <ion-label>Fee Items</ion-label>\n        </ion-segment-button>\n    </ion-segment>\n</ion-header>\n\n<ion-content class=\"ion-no-padding\">\n  <div style=\"height: 5px;\"></div>\n\n    <div [ngSwitch]=\"segment\" >\n     \n        <div *ngSwitchCase=\"'summary'\" >\n         \n          <ion-grid>\n            <ion-row class=\"summary\">\n              <ion-col col-4 class=\"credit\" style=\"border: 2px white solid !important;\">\n                Credit<br>\n                {{this.fn(balance.total_credit)}}\n              </ion-col>\n                <ion-col col-4 class=\"balance\" style=\"border: 2px white solid !important;\">\n                    Balance<br>\n                    {{this.fn(balance.balance)}}\n          </ion-col>\n            </ion-row>\n          </ion-grid>\n          <ion-list *ngIf=\"summary.length === 0 && fake === 1\">\n              <br>\n              <ion-spinner   name=\"lines-small\" style=\"text-align: center; margin-left: 50%; margin-right: 50%;\" color=\"primary\"></ion-spinner>\n              </ion-list>\n          <ion-item *ngIf=\"summary.length == 0 && fake === 0 \">\n              No fee summaries.\n        </ion-item>\n        <ion-item *ngFor=\"let item of summary;  let i = index\">\n            <ion-grid>\n                <ion-row>\n                  <ion-col col-6>\n                    <strong>{{item.fee_item}}</strong>\n                  </ion-col>\n                  <ion-col col-6 class=\"bal\" >\n                    <strong>{{this.fn(item.balance)}} {{item.currency}}</strong>\n                    </ion-col>\n                </ion-row>\n                <ion-row>\n                <ion-col col-6>\n                    <small>Opening : {{item.total_due}}</small>\n                  </ion-col>\n                  <ion-col col-6 class=\"center\">\n                      <small>Paid: {{this.fn(item.total_paid)}} {{item.currency}}</small>\n                    </ion-col>\n                </ion-row>\n              </ion-grid>\n        </ion-item>\n        </div>\n\n          <div *ngSwitchCase=\"'invoices'\" class=\"ion-no-padding\"> \n              <ion-list *ngIf=\"invoices.length === 0 && fake === 1\">\n                  <br>\n                  <ion-spinner   name=\"lines-small\" style=\"text-align: center; margin-left: 50%; margin-right: 50%; \" color=\"primary\"></ion-spinner>\n                  </ion-list>\n              <ion-item *ngIf=\"invoices.length == 0 && fake === 0 \">\n                  No invoices.\n            </ion-item>\n            <ion-item *ngFor=\"let item of invoices;  let i = index\">\n                <ion-grid>\n                    <ion-row>\n                      <ion-col col-6 item-left>\n                        <strong> INV#{{item.inv_id}}</strong>\n                      </ion-col>\n                      <ion-col col-6  *ngIf=\"item.balance < 0\" class=\"bal\">\n                        <strong>{{this.fn(item.balance)}} {{item.currency}}</strong>\n                        </ion-col>\n                        <ion-col col-6 *ngIf=\"item.balance == 0 \" class=\"paid center\">\n                            {{this.fn(item.balance)}} {{item.currency}}\n                         </ion-col>\n                    </ion-row>\n                    <ion-row>\n                        <ion-col col-6>\n                            <small>Inv Date: {{this.formatDate(item.inv_date)}}</small>\n                        </ion-col>\n                        <ion-col col-6 class=\"center\">\n                            <small>Due Date: {{this.formatDate(item.due_date)}}</small>\n                          </ion-col>\n                      </ion-row>\n                    <ion-row>\n                    <ion-col col-6>\n                        <small>Inv Total:  {{item.total_due}}</small>\n                      </ion-col>\n                      <ion-col col-6 class=\"center\">\n                          <small>Amt Paid: {{this.fn(item.total_paid)}} {{item.currency}}</small>\n                        </ion-col>\n                    </ion-row>\n                  </ion-grid>\n            </ion-item>\n           \n          </div> \n\n          <div *ngSwitchCase=\"'payments'\" class=\"ion-no-padding\">\n              <ion-list *ngIf=\"payments.length === 0 && fake === 1\">\n                  <br>\n                  <ion-spinner   name=\"lines-small\" style=\"text-align: center; margin-left: 50%; margin-right: 50%;\" color=\"primary\"></ion-spinner>\n                </ion-list>\n              <ion-item *ngIf=\"payments.length == 0 && fake === 0 \">\n                  No payments records.\n            </ion-item>\n            <ion-item *ngFor=\"let item of payments;  let i = index\">\n                <ion-grid>\n                    <ion-row>\n                      <ion-col col-6>\n                        <strong>Receipt No#{{item.payment_id}}</strong>\n                      </ion-col>\n                      <ion-col col-6 class=\"center\">\n                          <strong>{{this.fn(item.amount)}} {{item.currency}}</strong>\n                        </ion-col>\n                    </ion-row>\n                    <ion-row>\n                        <ion-col col-6>\n                            <strong>Received: {{this.formatDate(item.payment_date)}}</strong>\n                        </ion-col>\n                        <ion-col col-6 class=\"center\">\n                            <strong> {{item.payment_method}} </strong>\n                          </ion-col>\n                      </ion-row>\n                    <ion-row>\n                    <ion-col col-12>\n                        <small>Applied To:  {{item.applied_to}}</small>\n                      </ion-col>\n                    </ion-row>\n                    <ion-row>\n                        <ion-col col-12>\n                            <small> Applied Unapplied:  {{this.fn(item.unapplied_amount)}}</small>\n                          </ion-col>\n                        </ion-row>\n                  </ion-grid>\n            </ion-item>\n                \n        </div>\n          <div *ngSwitchCase=\"'feeItems'\" class=\"ion-no-padding\">\n              <ion-list *ngIf=\"feeitems.length === 0 && fake === 1\">\n                  <br>\n                  <ion-spinner   name=\"lines-small\" style=\"text-align: center; margin-left: 50%; margin-right: 50%;\" color=\"primary\"></ion-spinner>\n                  </ion-list>\n              <ion-item *ngIf=\"feeitems.length == 0 &&  fake === 0 \">\n                  No fee items.\n            </ion-item>\n            <ion-item *ngFor=\"let item of feeitems;  let i = index\">\n                <ion-grid>\n                    <ion-row>\n                      <ion-col col-6>\n                        {{item.fee_item}}\n                      </ion-col>\n                      <ion-col col-6 class=\"center\">\n                          {{this.fn(item.amount)}} {{item.currency}}/{{item.frequency}}\n                        </ion-col>\n                    </ion-row>\n                  </ion-grid>\n            </ion-item>\n           </div>\n           \n        </div>\n        <ion-fab *ngIf=\"feedback === 'true'\" vertical=\"bottom\" (click)=\"addfeed()\" horizontal=\"end\" slot=\"fixed\" >\n          <ion-fab-button  color=\"tertiary\">\n              <ion-icon name=\"chatbox-ellipses\"></ion-icon>\n          </ion-fab-button>\n        </ion-fab>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/pages/student/fees/fees.module.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/student/fees/fees.module.ts ***!
  \***************************************************/
/*! exports provided: FeesPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeesPageModule", function() { return FeesPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _fees_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./fees.page */ "./src/app/pages/student/fees/fees.page.ts");







const routes = [
    {
        path: '',
        component: _fees_page__WEBPACK_IMPORTED_MODULE_6__["FeesPage"]
    }
];
let FeesPageModule = class FeesPageModule {
};
FeesPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_fees_page__WEBPACK_IMPORTED_MODULE_6__["FeesPage"]]
    })
], FeesPageModule);



/***/ }),

/***/ "./src/app/pages/student/fees/fees.page.scss":
/*!***************************************************!*\
  !*** ./src/app/pages/student/fees/fees.page.scss ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-segment ion-label {\n  color: white;\n  font-size: 12px;\n}\n\nion-icon {\n  font-size: 24px;\n  font-weight: 600;\n}\n\nion-card-header {\n  color: black;\n  font-size: 16px;\n  font-weight: 700;\n  background-color: #ddd;\n}\n\nion-card-content {\n  color: black;\n  font-size: 13px;\n}\n\nion-col {\n  margin-top: -2px;\n  color: black;\n  font-size: 12px;\n  border-left: 0px;\n  font-weight: 450;\n}\n\nion-row {\n  margin-top: -5px;\n}\n\n.info {\n  color: black;\n  font-size: 14px;\n  font-weight: 500;\n  font-weight: 500;\n}\n\n.credit {\n  align-items: center;\n  background-color: #97bba7;\n  color: #46a162;\n  font-weight: 500;\n  text-align: center;\n  font-size: 14px;\n}\n\n.balance {\n  text-align: center;\n  background-color: #ccafaf;\n  color: #7e4646;\n  font-weight: 500;\n  font-size: 14px;\n}\n\n.areas {\n  text-align: center;\n  background-color: #ccafaf;\n  color: #7e4646;\n  font-size: 14px;\n}\n\nion-item {\n  display: inline-block;\n  width: 100%;\n  margin-bottom: -2px;\n  font-size: 13px;\n  color: black;\n  font-weight: 450;\n}\n\n.bal {\n  text-align: right;\n  color: #7e4646;\n  font-size: 16px;\n  font-weight: 600;\n}\n\n.center {\n  text-align: right;\n}\n\n.paid {\n  color: #009e0f;\n  font-size: 16px;\n  font-weight: 600;\n}\n\n.summary {\n  align-items: center;\n  background-color: #eee;\n  margin-bottom: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9rb2tvZGF2aWQvRG93bmxvYWRzL2VwL3NyYy9hcHAvcGFnZXMvc3R1ZGVudC9mZWVzL2ZlZXMucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9zdHVkZW50L2ZlZXMvZmVlcy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUk7RUFDSSxZQUFBO0VBQ0EsZUFBQTtBQ0RSOztBREtBO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0FDRko7O0FESUE7RUFDSSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0Esc0JBQUE7QUNESjs7QURHQTtFQUNJLFlBQUE7RUFDQSxlQUFBO0FDQUo7O0FER0E7RUFDSSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtBQ0FKOztBREVBO0VBQ0ksZ0JBQUE7QUNDSjs7QURDQTtFQUNJLFlBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtBQ0VKOztBREFBO0VBQ0ksbUJBQUE7RUFDQSx5QkFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtBQ0dKOztBRENBO0VBQ0ksa0JBQUE7RUFFQSx5QkFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7QUNDSjs7QURFQTtFQUNJLGtCQUFBO0VBRUEseUJBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtBQ0FKOztBREdBO0VBQ0kscUJBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0FDQUo7O0FERUE7RUFDSSxpQkFBQTtFQUNBLGNBQUE7RUFFQSxlQUFBO0VBQ0EsZ0JBQUE7QUNBSjs7QURHQTtFQUNJLGlCQUFBO0FDQUo7O0FEUUE7RUFDSSxjQUFBO0VBRUEsZUFBQTtFQUNBLGdCQUFBO0FDTko7O0FEU0E7RUFDQSxtQkFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7QUNOQSIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3N0dWRlbnQvZmVlcy9mZWVzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1zZWdtZW50e1xuICAgIC8vY29sb3I6d2hpdGU7XG4gICAgaW9uLWxhYmVse1xuICAgICAgICBjb2xvcjp3aGl0ZTtcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgIH1cbn1cblxuaW9uLWljb257XG4gICAgZm9udC1zaXplOiAyNHB4O1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG5pb24tY2FyZC1oZWFkZXJ7XG4gICAgY29sb3I6YmxhY2s7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2RkZDtcbn1cbmlvbi1jYXJkLWNvbnRlbnR7XG4gICAgY29sb3I6YmxhY2s7XG4gICAgZm9udC1zaXplOiAxM3B4O1xuXG59XG5pb24tY29se1xuICAgIG1hcmdpbi10b3A6IC0ycHg7XG4gICAgY29sb3I6YmxhY2s7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICAgIGJvcmRlci1sZWZ0OiAwcHg7XG4gICAgZm9udC13ZWlnaHQ6IDQ1MDtcbn1cbmlvbi1yb3d7XG4gICAgbWFyZ2luLXRvcDogLTVweDtcbn1cbi5pbmZve1xuICAgIGNvbG9yOmJsYWNrO1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG4uY3JlZGl0e1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE1MSwgMTg3LCAxNjcpO1xuICAgIGNvbG9yOnJnYig3MCwgMTYxLCA5OCk7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuXG59XG5cbi5iYWxhbmNle1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAvL2FsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIwNCwgMTc1LCAxNzUpO1xuICAgIGNvbG9yOnJnYigxMjYsIDcwLCA3MCk7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICBmb250LXNpemU6IDE0cHg7XG59XG5cbi5hcmVhc3tcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgLy9hbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGJhY2tncm91bmQtY29sb3I6cmdiKDIwNCwgMTc1LCAxNzUpO1xuICAgIGNvbG9yOnJnYigxMjYsIDcwLCA3MCk7XG4gICAgZm9udC1zaXplOiAxNHB4O1xufVxuXG5pb24taXRlbXtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgd2lkdGg6MTAwJTtcbiAgICBtYXJnaW4tYm90dG9tOiAtMnB4O1xuICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICBjb2xvcjpibGFjaztcbiAgICBmb250LXdlaWdodDogNDUwO1xufVxuLmJhbHtcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICBjb2xvcjogcmdiKDEyNiwgNzAsIDcwKTtcbiAgICAvL2FsaWduLWl0ZW1zOiBmbGV4LWVuZDtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBcbn1cbi5jZW50ZXJ7XG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgLy8gY29sb3I6IHJnYigxMjYsIDcwLCA3MCk7XG4gICAgLy8gLy9hbGlnbi1pdGVtczogZmxleC1lbmQ7XG4gICAgLy8gZm9udC1zaXplOiAxNnB4O1xuICAgIC8vIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgXG59XG5cbi5wYWlke1xuICAgIGNvbG9yOiAjMDA5ZTBmO1xuICAgIC8vYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIFxufVxuLnN1bW1hcnl7XG5hbGlnbi1pdGVtczogY2VudGVyO1xuYmFja2dyb3VuZC1jb2xvcjojZWVlO1xubWFyZ2luLWJvdHRvbTogMTBweDtcbi8vbWFyZ2luOiAxMHB4O1xuXG59XG4iLCJpb24tc2VnbWVudCBpb24tbGFiZWwge1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtc2l6ZTogMTJweDtcbn1cblxuaW9uLWljb24ge1xuICBmb250LXNpemU6IDI0cHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG5cbmlvbi1jYXJkLWhlYWRlciB7XG4gIGNvbG9yOiBibGFjaztcbiAgZm9udC1zaXplOiAxNnB4O1xuICBmb250LXdlaWdodDogNzAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGRkO1xufVxuXG5pb24tY2FyZC1jb250ZW50IHtcbiAgY29sb3I6IGJsYWNrO1xuICBmb250LXNpemU6IDEzcHg7XG59XG5cbmlvbi1jb2wge1xuICBtYXJnaW4tdG9wOiAtMnB4O1xuICBjb2xvcjogYmxhY2s7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgYm9yZGVyLWxlZnQ6IDBweDtcbiAgZm9udC13ZWlnaHQ6IDQ1MDtcbn1cblxuaW9uLXJvdyB7XG4gIG1hcmdpbi10b3A6IC01cHg7XG59XG5cbi5pbmZvIHtcbiAgY29sb3I6IGJsYWNrO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG5cbi5jcmVkaXQge1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjOTdiYmE3O1xuICBjb2xvcjogIzQ2YTE2MjtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDE0cHg7XG59XG5cbi5iYWxhbmNlIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2NhZmFmO1xuICBjb2xvcjogIzdlNDY0NjtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuXG4uYXJlYXMge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtY29sb3I6ICNjY2FmYWY7XG4gIGNvbG9yOiAjN2U0NjQ2O1xuICBmb250LXNpemU6IDE0cHg7XG59XG5cbmlvbi1pdGVtIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luLWJvdHRvbTogLTJweDtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBjb2xvcjogYmxhY2s7XG4gIGZvbnQtd2VpZ2h0OiA0NTA7XG59XG5cbi5iYWwge1xuICB0ZXh0LWFsaWduOiByaWdodDtcbiAgY29sb3I6ICM3ZTQ2NDY7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cblxuLmNlbnRlciB7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xufVxuXG4ucGFpZCB7XG4gIGNvbG9yOiAjMDA5ZTBmO1xuICBmb250LXNpemU6IDE2cHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG5cbi5zdW1tYXJ5IHtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VlZTtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/pages/student/fees/fees.page.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/student/fees/fees.page.ts ***!
  \*************************************************/
/*! exports provided: FeesPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeesPage", function() { return FeesPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var src_app_services_session_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/session.service */ "./src/app/services/session.service.ts");






let FeesPage = class FeesPage {
    constructor(authService, route, router, session) {
        this.authService = authService;
        this.route = route;
        this.router = router;
        this.session = session;
        this.segment = 'summary';
        this.invoices = new Array();
        this.payments = new Array();
        this.feeitems = new Array();
        this.summary = new Array();
        this.balance = new Object();
        this.fake = 1;
        setTimeout(() => {
            this.fake = 0;
        }, 3000);
        this.session.sessionTimeOut();
        this.route.queryParams.subscribe(params => {
            if (this.router.getCurrentNavigation().extras.state) {
                this.student = this.router.getCurrentNavigation().extras.state.details;
                this.assets = this.student.student_image === null ? 1 :
                    `https://${this.student.school}.eduweb.co.ke/assets/students/${this.student.student_image}`;
            }
        });
    }
    ngOnInit() {
    }
    ionViewWillEnter() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.authService.checkFeed().then(feed => {
                console.log(feed);
                this.feedback = feed;
            });
            yield this.authService.feesBalance(this.student.school, this.student.student_id).subscribe(balance => {
                // console.log(news);
                this.data = balance;
                if (this.data.nodata) {
                    this.balance = {};
                    this.summary = [];
                }
                else {
                    this.balance = this.data.data.fee_summary;
                    this.summary = this.data.data.fees;
                }
                // console.log(this.summary);
            });
            yield this.authService.Feeitems(this.student.school, this.student.student_id).subscribe(feeitems => {
                // console.log(homeworks.data);
                this.data1 = feeitems;
                if (this.data1.nodata) {
                    this.feeitems = [];
                }
                else {
                    this.feeitems = this.data1.data;
                }
                // console.log(this.feeitems);
            });
            yield this.authService.Invoices(this.student.school, this.student.student_id).subscribe(item => {
                // console.log(news);
                this.data4 = item;
                if (this.data4.nodata) {
                    this.invoices = [];
                }
                else {
                    const data = this.data4.data;
                    this.invoices = data.reverse();
                }
                // console.log(this.invoices);
            });
            yield this.authService.Payments(this.student.school, this.student.student_id).subscribe(items => {
                // console.log(homeworks.data);
                this.data3 = items;
                console.log(this.data3);
                if (this.data3.nodata) {
                    this.payments = [];
                }
                else {
                    const data = this.data3.data;
                    this.payments = data.reverse();
                }
                // console.log(this.payments);
            });
        });
    }
    segmentChanged(ev) {
        // console.log('Segment changed', ev);
    }
    formatDate(date) {
        return moment__WEBPACK_IMPORTED_MODULE_4__(date).format('MMM D, YYYY');
    }
    fn(n) {
        const num = isNaN(n) ? 0 : Math.abs(n);
        return num.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, '$1,');
    }
    addfeed() {
        const navigationExtras = {};
        this.router.navigate(['feedback'], navigationExtras);
    }
};
FeesPage.ctorParameters = () => [
    { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: src_app_services_session_service__WEBPACK_IMPORTED_MODULE_5__["SessionService"] }
];
FeesPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-fees',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./fees.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/student/fees/fees.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./fees.page.scss */ "./src/app/pages/student/fees/fees.page.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], src_app_services_session_service__WEBPACK_IMPORTED_MODULE_5__["SessionService"]])
], FeesPage);



/***/ })

}]);
//# sourceMappingURL=pages-student-fees-fees-module-es2015.js.map