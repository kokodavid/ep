(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~pages-auth-forgot-password-forgot-password-module~pages-auth-login-login-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/auth/forgot-password/forgot-password.page.html":
/*!************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/auth/forgot-password/forgot-password.page.html ***!
  \************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header style=\" background-color:#397C49;height: 100%;\">\n  <ion-toolbar color=\"primary\" style=\"color:white;\">\n    <ion-buttons slot=\"start\" style=\"font-size: 14px;\">\n      <ion-icon text=\"\" icon=\"chevron-back\" style=\"font-size:1.8em ; color: white; right: 0px;\"\n        (click)=\"dismissRegister()\"></ion-icon>RESET PASSWORD\n    </ion-buttons>\n    <!-- <ion-title style=\"text-align: justify;font-size: 14px\"> &nbsp;RESET PASSWORD</ion-title> -->\n  </ion-toolbar>\n  <div style=\"height: 25%;\">\n  </div>\n  <!-- <div class=\"main\"> -->\n\n  <ion-card>\n    <ion-card-content>\n      <div style=\"margin-top: 30px; margin-bottom: 30px; margin-left: 10px;margin-right: 10px;\" *ngIf=\"code == 0\">\n        <ion-row class=\"row\">\n          <div class=\"fire-logo\">\n          </div>\n        </ion-row>\n        <form #form=\"ngForm\" (ngSubmit)=\"check(form)\" method=\"post\">\n          <ion-item lines=\"none\">\n            <h2 style=\"color:black;font-size: 20px;\"> Enter your phone number</h2>\n            <br>\n            <br>\n          </ion-item>\n          <ion-item>\n            <ion-icon name=\"call\" slot=\"start\"></ion-icon>\n            <ion-input clearInput type=\"tel\" ngModel name=\"phone\" maxlength=\"12\" style=\"color:black; font-size: 20px;\"\n              (ionInput)=\"runTimeChange($event)\" placeholder=\"0700 123 123\" pattern=\"[0-9]{4} [0-9]{3} [0-9]{3}\"\n              value={{value}} padding-horizontal clear-input=\"true\">\n            </ion-input>\n          </ion-item>\n          <ion-row>\n            <ion-col> </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col col-3></ion-col>\n            <ion-col col-6>\n              <ion-button type=\"submit\" style=\"background-color: #397C49; width: 200pt;\" class=\"transition\"><strong\n                  class=\"white\">Continue</strong></ion-button>\n            </ion-col>\n            <ion-col col-3></ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col col-3></ion-col>\n            <ion-col col-6>\n              <ion-button (click)=enterCode() color=\"warning\" style=\"text-transform: none; width: 200pt\">Already have code?</ion-button>\n            </ion-col>\n            <ion-col col-3></ion-col>\n          </ion-row>\n        </form>\n      </div>\n\n      <div style=\"margin-top: 30px; margin-bottom: 30px; margin-left: 10px;margin-right: 10px;\" *ngIf=\"code == 1\">\n        <form #form=\"ngForm\" (ngSubmit)=\"verify(form)\" method=\"post\">\n          <ion-item lines=\"none\">\n            <h2 style=\"color:black;font-size: 18px;\"> Enter Temporary Password Received.</h2>\n            <br>\n            <br>\n          </ion-item>\n          <ion-item>\n            <ion-icon name=\"lock\" slot=\"start\"></ion-icon>\n            <ion-input clearInput type=\"text\" ngModel name=\"code\" maxlength=\"20\" style=\"color:black; font-size: 20px;\"\n              placeholder=\"Enter Password\" value={{value}} class=\"ion-padding-horizontal\" clear-input=\"true\">\n            </ion-input>\n          </ion-item>\n          <!-- <ion-row class=\"row\">\n              <div class=\"fire-logo\">\n                <ion-text class=\"ion-padding\">\n                  <h3 no-margin margin-vertical text-center>Enter Temporary Password Received.</h3>\n                </ion-text>\n              </div>\n            </ion-row>\n            <ion-row>\n                <ion-col>    \n                <ion-input clearInput type=\"text\" ngModel name=\"code\" maxlength=\"20\" class=\"input ion-padding-horizontal\"  placeholder=\"Enter Password\"   clear-input=\"true\">\n                </ion-input>\n                </ion-col>\n               </ion-row> -->\n\n          <ion-row>\n            <ion-col col-4></ion-col>\n            <ion-col col-4>\n              <ion-button type=\"submit\" color=\"warning\">Reset Password</ion-button>\n            </ion-col>\n            <ion-col col-4></ion-col>\n          </ion-row>\n        </form>\n\n      </div>\n    </ion-card-content>\n  </ion-card>\n  <!-- </div> -->\n</ion-header>\n<!-- <ion-content class=\"ion-no-padding\" style=\" background-color:#397C49 ; height: 100%;\">\n    \n</ion-content> -->");

/***/ }),

/***/ "./src/app/pages/auth/forgot-password/forgot-password.page.scss":
/*!**********************************************************************!*\
  !*** ./src/app/pages/auth/forgot-password/forgot-password.page.scss ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".main {\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  background-color: #397C49;\n}\n\n@media screen and (min-width: 767px) {\n  ion-card {\n    width: 600px;\n    margin-left: auto;\n    margin-right: auto;\n    margin-top: 10px;\n    margin-top: auto;\n  }\n}\n\nion-card {\n  --background: #fff;\n  margin: 0px;\n  width: 100%;\n}\n\n.phone {\n  letter-spacing: 8px;\n  -webkit-padding-end: 0;\n  --padding-end: 0;\n  font-size: 1.2em !important;\n  font-weight: 500;\n  text-align: center;\n  color: black;\n  border-radius: 9px;\n  background-color: #f0f0f0;\n  border: 1px solid #d2d2d2;\n}\n\n.code {\n  letter-spacing: 12px;\n  -webkit-padding-end: 0;\n  --padding-end: 0;\n  font-weight: 500;\n  text-align: center;\n  font-size: 20px;\n  color: black;\n  border-radius: 12px;\n  background-color: #f0f0f0;\n  border: 1px solid #d2d2d2;\n}\n\nh3 {\n  color: black;\n  font-size: 16px;\n  font-weight: 500;\n}\n\n.input {\n  background-color: #f0f0f0;\n  border: 1px solid #d2d2d2;\n  border-radius: 9px;\n  font-size: 1.2em !important;\n}\n\n.otpinput {\n  letter-spacing: 30px;\n  -webkit-padding-end: 0;\n  --padding-end: 0;\n  font-size: 30px;\n  border: none;\n  background: white;\n}\n\n.white {\n  color: white;\n}\n\n.OTP-border ion-col div {\n  border-bottom: 1px solid;\n}\n\n.small {\n  font-size: 13px;\n}\n\n.small a {\n  text-decoration: unset !important;\n}\n\n.logo {\n  width: 1.25em !important;\n}\n\n.grid {\n  height: 100vh;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n}\n\n.row {\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n}\n\n.img-logo {\n  height: 70px;\n  width: 120px;\n}\n\n.fire-logo {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  padding-bottom: 30px;\n}\n\n.bold {\n  font-weight: bold;\n}\n\n.block {\n  display: block;\n}\n\n.transition {\n  background: linear-gradient(to right, #f57c00 14%, #ffca00 96%);\n}\n\n.btn-color {\n  color: #ffa000 !important;\n}\n\n.error {\n  color: red;\n  text-align: center;\n  display: block;\n  font-weight: bold;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9rb2tvZGF2aWQvRG93bmxvYWRzL2VwL3NyYy9hcHAvcGFnZXMvYXV0aC9mb3Jnb3QtcGFzc3dvcmQvZm9yZ290LXBhc3N3b3JkLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvYXV0aC9mb3Jnb3QtcGFzc3dvcmQvZm9yZ290LXBhc3N3b3JkLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFlBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtFQUNBLHlCQUFBO0FDQ0o7O0FEQ0U7RUFDRTtJQUNFLFlBQUE7SUFDQSxpQkFBQTtJQUNBLGtCQUFBO0lBQ0EsZ0JBQUE7SUFDQSxnQkFBQTtFQ0VKO0FBQ0Y7O0FERUU7RUFDRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0FDQUo7O0FER0U7RUFDRSxtQkFBQTtFQUNBLHNCQUFBO0VBQ0EsZ0JBQUE7RUFDQSwyQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFFQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtFQUNBLHlCQUFBO0FDREo7O0FER0U7RUFDRSxvQkFBQTtFQUNBLHNCQUFBO0VBQ0EsZ0JBQUE7RUFFQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0EseUJBQUE7QUNESjs7QURHQTtFQUNJLFlBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUNBSjs7QURHRTtFQUNFLHlCQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLDJCQUFBO0FDQUo7O0FERUU7RUFDRSxvQkFBQTtFQUNBLHNCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0FDQ0o7O0FEQ0U7RUFDRSxZQUFBO0FDRUo7O0FERU07RUFDRSx3QkFBQTtBQ0NSOztBRElFO0VBQ0UsZUFBQTtBQ0RKOztBREVJO0VBQ0UsaUNBQUE7QUNBTjs7QURNRTtFQUNFLHdCQUFBO0FDSEo7O0FES0U7RUFDRSxhQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7QUNGSjs7QURJRTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0FDREo7O0FER0U7RUFDRSxZQUFBO0VBQ0EsWUFBQTtBQ0FKOztBREVFO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLG9CQUFBO0FDQ0o7O0FEQ0U7RUFDRSxpQkFBQTtBQ0VKOztBREFFO0VBQ0UsY0FBQTtBQ0dKOztBRERFO0VBQ0UsK0RBQUE7QUNJSjs7QURGRTtFQUNFLHlCQUFBO0FDS0o7O0FESEU7RUFDRSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7QUNNSiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2F1dGgvZm9yZ290LXBhc3N3b3JkL2ZvcmdvdC1wYXNzd29yZC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWFpbiB7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAgIzM5N0M0OTtcbiAgfVxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjdweCkge1xuICAgIGlvbi1jYXJkIHtcbiAgICAgIHdpZHRoOiA2MDBweDtcbiAgICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICAgICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICAgICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICAgIG1hcmdpbi10b3A6IGF1dG87XG4gICAgICAvL21hcmdpbjogYXV0bztcbiAgICB9XG4gIH1cblxuICBpb24tY2FyZCB7XG4gICAgLS1iYWNrZ3JvdW5kOiAjZmZmO1xuICAgIG1hcmdpbjogMHB4O1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG5cbiAgLnBob25lIHtcbiAgICBsZXR0ZXItc3BhY2luZzogOHB4O1xuICAgIC13ZWJraXQtcGFkZGluZy1lbmQ6IDA7XG4gICAgLS1wYWRkaW5nLWVuZDogMDtcbiAgICBmb250LXNpemU6IDEuMmVtICFpbXBvcnRhbnQ7XG4gICAgZm9udC13ZWlnaHQ6NTAwO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAvLyBmb250LXNpemU6IDE4cHg7XG4gICAgY29sb3I6IGJsYWNrO1xuICAgIGJvcmRlci1yYWRpdXM6IDlweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjQwLCAyNDAsIDI0MCk7XG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiKDIxMCwgMjEwLCAyMTApO1xuICB9XG4gIC5jb2RlIHtcbiAgICBsZXR0ZXItc3BhY2luZzogMTJweDtcbiAgICAtd2Via2l0LXBhZGRpbmctZW5kOiAwO1xuICAgIC0tcGFkZGluZy1lbmQ6IDA7XG4gICAgLy9mb250LXNpemU6IDEuMmVtICFpbXBvcnRhbnQ7XG4gICAgZm9udC13ZWlnaHQ6NTAwO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gICAgY29sb3I6IGJsYWNrO1xuICAgIGJvcmRlci1yYWRpdXM6IDEycHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI0MCwgMjQwLCAyNDApO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYigyMTAsIDIxMCwgMjEwKTtcbiAgfVxuaDN7XG4gICAgY29sb3I6YmxhY2s7XG4gICAgZm9udC1zaXplOjE2cHg7XG4gICAgZm9udC13ZWlnaHQ6NTAwO1xuXG59XG4gIC5pbnB1dCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI0MCwgMjQwLCAyNDApO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYigyMTAsIDIxMCwgMjEwKTtcbiAgICBib3JkZXItcmFkaXVzOiA5cHg7XG4gICAgZm9udC1zaXplOiAxLjJlbSAhaW1wb3J0YW50O1xuICB9XG4gIC5vdHBpbnB1dCB7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDMwcHg7XG4gICAgLXdlYmtpdC1wYWRkaW5nLWVuZDogMDtcbiAgICAtLXBhZGRpbmctZW5kOiAwO1xuICAgIGZvbnQtc2l6ZTogMzBweDtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgYmFja2dyb3VuZDogd2hpdGU7XG4gIH1cbiAgLndoaXRlIHtcbiAgICBjb2xvcjogd2hpdGU7XG4gIH1cbiAgLk9UUC1ib3JkZXIge1xuICAgIGlvbi1jb2wge1xuICAgICAgZGl2IHtcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICBcbiAgLnNtYWxsIHtcbiAgICBmb250LXNpemU6IDEzcHg7XG4gICAgYSB7XG4gICAgICB0ZXh0LWRlY29yYXRpb246IHVuc2V0ICFpbXBvcnRhbnQ7XG4gICAgfVxuICB9XG4gIC8vIC5idXR0b24tY29sb3Ige1xuICAvLyAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWlvbi1jb2xvci1teXRoZW1lKTtcbiAgLy8gfVxuICAubG9nbyB7XG4gICAgd2lkdGg6IDEuMjVlbSAhaW1wb3J0YW50O1xuICB9XG4gIC5ncmlkIHtcbiAgICBoZWlnaHQ6IDEwMHZoO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgfVxuICAucm93IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIH1cbiAgLmltZy1sb2dvIHtcbiAgICBoZWlnaHQ6IDcwcHg7XG4gICAgd2lkdGg6IDEyMHB4O1xuICB9XG4gIC5maXJlLWxvZ28ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHBhZGRpbmctYm90dG9tOiAzMHB4O1xuICB9XG4gIC5ib2xkIHtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgfVxuICAuYmxvY2sge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICB9XG4gIC50cmFuc2l0aW9uIHtcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICNmNTdjMDAgMTQlLCAjZmZjYTAwIDk2JSk7XG4gIH1cbiAgLmJ0bi1jb2xvciB7XG4gICAgY29sb3I6ICNmZmEwMDAgIWltcG9ydGFudDtcbiAgfVxuICAuZXJyb3Ige1xuICAgIGNvbG9yOiByZWQ7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICB9IiwiLm1haW4ge1xuICBoZWlnaHQ6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzk3QzQ5O1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjdweCkge1xuICBpb24tY2FyZCB7XG4gICAgd2lkdGg6IDYwMHB4O1xuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICAgIG1hcmdpbi1yaWdodDogYXV0bztcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgIG1hcmdpbi10b3A6IGF1dG87XG4gIH1cbn1cbmlvbi1jYXJkIHtcbiAgLS1iYWNrZ3JvdW5kOiAjZmZmO1xuICBtYXJnaW46IDBweDtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5waG9uZSB7XG4gIGxldHRlci1zcGFjaW5nOiA4cHg7XG4gIC13ZWJraXQtcGFkZGluZy1lbmQ6IDA7XG4gIC0tcGFkZGluZy1lbmQ6IDA7XG4gIGZvbnQtc2l6ZTogMS4yZW0gIWltcG9ydGFudDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjb2xvcjogYmxhY2s7XG4gIGJvcmRlci1yYWRpdXM6IDlweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YwZjBmMDtcbiAgYm9yZGVyOiAxcHggc29saWQgI2QyZDJkMjtcbn1cblxuLmNvZGUge1xuICBsZXR0ZXItc3BhY2luZzogMTJweDtcbiAgLXdlYmtpdC1wYWRkaW5nLWVuZDogMDtcbiAgLS1wYWRkaW5nLWVuZDogMDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDIwcHg7XG4gIGNvbG9yOiBibGFjaztcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YwZjBmMDtcbiAgYm9yZGVyOiAxcHggc29saWQgI2QyZDJkMjtcbn1cblxuaDMge1xuICBjb2xvcjogYmxhY2s7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cblxuLmlucHV0IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YwZjBmMDtcbiAgYm9yZGVyOiAxcHggc29saWQgI2QyZDJkMjtcbiAgYm9yZGVyLXJhZGl1czogOXB4O1xuICBmb250LXNpemU6IDEuMmVtICFpbXBvcnRhbnQ7XG59XG5cbi5vdHBpbnB1dCB7XG4gIGxldHRlci1zcGFjaW5nOiAzMHB4O1xuICAtd2Via2l0LXBhZGRpbmctZW5kOiAwO1xuICAtLXBhZGRpbmctZW5kOiAwO1xuICBmb250LXNpemU6IDMwcHg7XG4gIGJvcmRlcjogbm9uZTtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG59XG5cbi53aGl0ZSB7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLk9UUC1ib3JkZXIgaW9uLWNvbCBkaXYge1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQ7XG59XG5cbi5zbWFsbCB7XG4gIGZvbnQtc2l6ZTogMTNweDtcbn1cbi5zbWFsbCBhIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bnNldCAhaW1wb3J0YW50O1xufVxuXG4ubG9nbyB7XG4gIHdpZHRoOiAxLjI1ZW0gIWltcG9ydGFudDtcbn1cblxuLmdyaWQge1xuICBoZWlnaHQ6IDEwMHZoO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLnJvdyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4uaW1nLWxvZ28ge1xuICBoZWlnaHQ6IDcwcHg7XG4gIHdpZHRoOiAxMjBweDtcbn1cblxuLmZpcmUtbG9nbyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwYWRkaW5nLWJvdHRvbTogMzBweDtcbn1cblxuLmJvbGQge1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLmJsb2NrIHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbi50cmFuc2l0aW9uIHtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjZjU3YzAwIDE0JSwgI2ZmY2EwMCA5NiUpO1xufVxuXG4uYnRuLWNvbG9yIHtcbiAgY29sb3I6ICNmZmEwMDAgIWltcG9ydGFudDtcbn1cblxuLmVycm9yIHtcbiAgY29sb3I6IHJlZDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBkaXNwbGF5OiBibG9jaztcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59Il19 */");

/***/ }),

/***/ "./src/app/pages/auth/forgot-password/forgot-password.page.ts":
/*!********************************************************************!*\
  !*** ./src/app/pages/auth/forgot-password/forgot-password.page.ts ***!
  \********************************************************************/
/*! exports provided: ForgotPasswordPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgotPasswordPage", function() { return ForgotPasswordPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/alert.service */ "./src/app/services/alert.service.ts");
/* harmony import */ var _ionic_native_device_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/device/ngx */ "./node_modules/@ionic-native/device/__ivy_ngcc__/ngx/index.js");
/* harmony import */ var _ionic_native_unique_device_id_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/unique-device-id/ngx */ "./node_modules/@ionic-native/unique-device-id/__ivy_ngcc__/ngx/index.js");







let ForgotPasswordPage = class ForgotPasswordPage {
    constructor(
    //private keyboard: Keyboard,
    modalController, authService, navCtrl, alertCtrl, alertService, device, menu, uniqueDeviceID) {
        this.modalController = modalController;
        this.authService = authService;
        this.navCtrl = navCtrl;
        this.alertCtrl = alertCtrl;
        this.alertService = alertService;
        this.device = device;
        this.menu = menu;
        this.uniqueDeviceID = uniqueDeviceID;
        this.value = 0;
        this.menu.enable(false);
        this.code = 0;
    }
    ngOnInit() {
    }
    check(form) {
        const x = form.value.phone;
        const ph = x.toString().replace(/\s/g, '');
        localStorage.setItem('phone', ph);
        this.authService.checkforgot(ph).subscribe(data => {
            this.data = data;
            console.log(this.data.response);
            if (this.data.response === 'Success') {
                this.code = 1;
                this.phone = form.value.phone;
                // const temp_code = String(this.data.temporary-code);
            }
            else if (this.data.status.includes("SMS resent")) {
                this.errmsg(this.data.message);
                this.phone = form.value.phone;
                this.code = 1;
            }
            else {
                this.errmsg(this.data.message);
            }
        }, error => {
            this.authService.dismiss();
            this.errmsg("\tError!\nCould not send request, consult school.");
            console.log(error);
            // this.errmsg('Error occured while trying to reset your password  please try again later...');
            // console.log(error);
        });
    }
    errmsg(info) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertCtrl.create({
                message: info,
                subHeader: 'Info',
                buttons: ['Ok']
            });
            yield alert.present();
        });
    }
    runTimeChange(x) {
        // const e = this.value;
        let e = x.target.value;
        console.log(e.length);
        if (e.length === 4 || e.length === 8) {
            this.value = e + ' ';
            console.log(this.value);
        }
        else {
            this.value = this.value;
        }
    }
    verify(form) {
        const x = this.phone;
        const ph = localStorage.getItem('phone');
        ;
        this.authService.verifypassword(form.value.code, ph).subscribe(data => {
            this.data = data;
            if (this.data.response === 'Success') {
                console.log(form.value);
                this.authService.login(ph, form.value.code, this.deviceid).subscribe(res => {
                    // console.log(data);
                    this.data = res;
                    if (this.data.response === 'success') {
                        // this.alertService.presentToast('Loggedin  Successfully');
                        if (ph) {
                            const creds = {
                                username: ph,
                                password: form.value.code,
                                device_user_id: this.deviceid,
                            };
                            localStorage.setItem('credentials', JSON.stringify(creds));
                            this.dismissRegister();
                        }
                    }
                    else {
                        this.dismissRegister();
                    }
                }, error => {
                    console.log(error);
                }, () => {
                    this.navCtrl.navigateRoot('/dashboard');
                });
            }
        }, error => {
            // this.dismissLogin();
            console.log(error);
        });
    }
    register(form) {
        if (form.value.pass === form.value.repass) {
            console.log(form.value);
            this.authService.registerPwd(form.value.pass, this.phone).subscribe(data => {
                this.data = data;
                if (this.data.response === 'sucesss') {
                    this.dismissRegister();
                    // this.code = 2;
                    // this.phone = form.value.phone;
                }
                else { }
            }, error => {
                // this.dismissLogin();
                console.log(error);
            });
        }
        else {
        }
    }
    resend() {
        this.authService.resend(this.phone).subscribe(data => {
            this.data = data;
            if (this.data.response === 'success') {
                this.code = 1;
                this.errmsg(this.data.response);
            }
            else {
                this.errmsg(this.data.response);
                this.code = 0;
            }
        });
    }
    enterCode() {
        if (localStorage.getItem('phone') !== null) {
            this.code = 1;
        }
        else {
            this.authService.presentAlert1('Phone number not recorded, request code again.');
            this.code = 0;
        }
    }
    numberWithSpaces(x) {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
    }
    dismissRegister() {
        this.modalController.dismiss();
    }
};
ForgotPasswordPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] },
    { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"] },
    { type: src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_4__["AlertService"] },
    { type: _ionic_native_device_ngx__WEBPACK_IMPORTED_MODULE_5__["Device"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"] },
    { type: _ionic_native_unique_device_id_ngx__WEBPACK_IMPORTED_MODULE_6__["UniqueDeviceID"] }
];
ForgotPasswordPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-forgot-password',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./forgot-password.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/auth/forgot-password/forgot-password.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./forgot-password.page.scss */ "./src/app/pages/auth/forgot-password/forgot-password.page.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"],
        src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"],
        src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_4__["AlertService"],
        _ionic_native_device_ngx__WEBPACK_IMPORTED_MODULE_5__["Device"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"],
        _ionic_native_unique_device_id_ngx__WEBPACK_IMPORTED_MODULE_6__["UniqueDeviceID"]])
], ForgotPasswordPage);



/***/ })

}]);
//# sourceMappingURL=default~pages-auth-forgot-password-forgot-password-module~pages-auth-login-login-module-es2015.js.map