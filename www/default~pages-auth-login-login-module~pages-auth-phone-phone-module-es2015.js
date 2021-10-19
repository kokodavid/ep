(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~pages-auth-login-login-module~pages-auth-phone-phone-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/auth/phone/phone.page.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/auth/phone/phone.page.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header style=\"height: 100%; background-color:#397C49;\">\n  <ion-toolbar color=\"primary\" style=\"color:white;\">\n    <ion-buttons slot=\"start\" style=\"font-size: 14px;\">\n      <ion-icon text=\"\" icon=\"chevron-back\" style=\"font-size:1.7em ; color: white;\" (click)=\"dismissRegister()\">\n      </ion-icon>CREATE ACCOUNT\n    </ion-buttons>\n    <!-- <ion-title style=\"text-align: justify;font-size: 14px;\"> &nbsp; CREATE ACCOUNT</ion-title> -->\n    <!-- <ion-buttons slot=\"end\">\n    </ion-buttons>-->\n  </ion-toolbar>\n  <div style=\"height: 40%;\">\n  </div>\n  <!-- <div class=\"main\"> -->\n  <ion-card class=\"ion-no-padding\">\n    <ion-card-content>\n      <div *ngIf=\"code == 0\" style=\"margin: 10px;\">\n        <ion-row class=\"row\">\n          <div class=\"fire-logo\">\n          </div>\n        </ion-row>\n        <form #form=\"ngForm\" (ngSubmit)=\"check(form)\" method=\"post\">\n          <!-- <ion-row>\n                    <ion-col>     -->\n          <ion-item lines=\"none\">\n            <h2 style=\"color:black;font-size: 18px;\"> Enter your phone number</h2>\n            <br>\n            <br>\n          </ion-item>\n          <ion-item>\n            <ion-icon name=\"call\" slot=\"start\"></ion-icon>\n            <ion-input clearInput type=\"tel\" ngModel name=\"phone\" maxlength=\"12\" style=\"color:black; font-size: 20px;\"\n              (ionInput)=\"runTimeChange($event)\" placeholder=\"0700 123 123\" pattern=\"[0-9]{4} [0-9]{3} [0-9]{3}\"\n              value={{value}} padding-horizontal clear-input=\"true\">\n            </ion-input>\n          </ion-item>\n          <!-- </ion-col>\n                   </ion-row> -->\n          <ion-row>\n            <ion-col> </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col col-3></ion-col>\n            <ion-col col-6>\n              <ion-button type=\"submit\" style=\"background-color: #397C49;\" class=\"transition\"><strong\n                  class=\"white\">Continue</strong></ion-button>\n            </ion-col>\n            <ion-col col-3></ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col col-3></ion-col>\n            <ion-col col-6>\n              <ion-button (click)=enterCode() color=\"warning\" style=\"text-transform: none;\">Already have code?\n              </ion-button>\n            </ion-col>\n            <ion-col col-3></ion-col>\n          </ion-row>\n        </form>\n      </div>\n      <div *ngIf=\"code == 1\" style=\"margin: 10px;\">\n        <form #form=\"ngForm\" (ngSubmit)=\"verify(form)\" method=\"post\">\n          <ion-item lines=\"none\">\n            <h2 style=\"color:black;font-size: 18px;\">Enter the code to proceed.</h2>\n            <br>\n            <br>\n          </ion-item>\n          <ion-item>\n            <ion-icon ios=\"ios-alert\" md=\"md-alert\" style=\"margin-right: 15px; color: black;\"></ion-icon>\n            <ion-input clearInput type=\"text\" ngModel name=\"code\" maxlength=\"6\" class=\"code1\"\n              style=\"color:black; font-size: 20px;\" placeholder=\"Enter Code\" padding-horizontal clear-input=\"true\">\n            </ion-input>\n          </ion-item>\n          <ion-row>\n            <ion-col col-3></ion-col>\n            <ion-col col-6>\n              <ion-button type=\"submit\" color=\"warning\" class=\"transition\"><strong class=\"white\">Verify</strong>\n              </ion-button>\n            </ion-col>\n            <ion-col col-3></ion-col>\n          </ion-row>\n        </form>\n      </div>\n      <div *ngIf=\"code == 2\">\n        <form #form=\"ngForm\" (ngSubmit)=\"register(form)\" method=\"post\">\n          <ion-item lines=\"none\">\n            <h2 style=\"color:black;font-size: 18px;\">Enter your Password.</h2>\n            <br>\n            <br>\n          </ion-item>\n          <ion-item>\n            <ion-icon name=\"lock-closed\" slot=\"start\"></ion-icon>\n            <ion-input ngModel type={{type}} name=\"pass\" placeholder=\"Enter Password\" ></ion-input>\n\n            <ion-icon ion-button *ngIf=\"showPasswordText == 1\" name=\"eye\" (click)=\"managePassword()\" slot=\"end\">\n            </ion-icon>\n            <ion-icon ion-button *ngIf=\"showPasswordText == 0\" name=\"eye-off\" (click)=\"managePassword()\" slot=\"end\">\n            </ion-icon>\n          </ion-item>\n\n          <ion-item>\n            <ion-icon name=\"lock-closed\" slot=\"start\"></ion-icon>\n            <ion-input ngModel type={{type}} name=\"repass\" placeholder=\"Confirm Password\" ></ion-input>\n            <ion-icon ion-button *ngIf=\"showPasswordText == 1\" name=\"eye\" (click)=\"managePassword()\" slot=\"end\">\n            </ion-icon>\n            <ion-icon ion-button *ngIf=\"showPasswordText == 0\" name=\"eye-off\" (click)=\"managePassword()\" slot=\"end\">\n            </ion-icon>\n          </ion-item>\n\n          <ion-row>\n            <ion-col col-3></ion-col>\n            <ion-col col-6>\n              <ion-button type=\"submit\" color=\"warning\" class=\"transition\"><strong class=\"white\">Register</strong>\n              </ion-button>\n            </ion-col>\n            <ion-col col-3></ion-col>\n          </ion-row>\n        </form>\n      </div>\n\n    </ion-card-content>\n  </ion-card>\n  <!-- </div> -->\n</ion-header>\n<!-- <ion-content style=\"background-color:#397C49 ;height:100%\" class=\"ion-no-padding\">\n   \n  </ion-content> -->");

/***/ }),

/***/ "./src/app/pages/auth/phone/phone.page.scss":
/*!**************************************************!*\
  !*** ./src/app/pages/auth/phone/phone.page.scss ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".main {\n  min-height: 100%;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  background-color: #397C49;\n}\n\n@media screen and (min-width: 767px) {\n  ion-card {\n    width: 600px;\n  }\n}\n\nion-icon {\n  color: black;\n}\n\nion-card {\n  --background: #fff;\n  margin: 0px;\n  width: 100%;\n}\n\n.phone {\n  letter-spacing: 8px;\n  -webkit-padding-end: 0;\n  --padding-end: 0;\n  font-size: 1.2em !important;\n  font-weight: 500;\n  text-align: center;\n  color: black;\n  border-radius: 9px;\n  background-color: #f0f0f0;\n  border: 1px solid #d2d2d2;\n}\n\n.code {\n  letter-spacing: 12px;\n  -webkit-padding-end: 0;\n  --padding-end: 0;\n  font-weight: 500;\n  text-align: center;\n  font-size: 20px;\n  color: black;\n  border-radius: 12px;\n  background-color: #f0f0f0;\n  border: 1px solid #d2d2d2;\n}\n\nh3 {\n  color: black;\n  font-size: 16px;\n  font-weight: 500;\n}\n\n.input {\n  background-color: #f0f0f0;\n  border: 1px solid #d2d2d2;\n  border-radius: 9px;\n  font-size: 0.9em !important;\n}\n\n.otpinput {\n  letter-spacing: 30px;\n  -webkit-padding-end: 0;\n  --padding-end: 0;\n  font-size: 30px;\n  border: none;\n  background: white;\n}\n\n.white {\n  color: white;\n}\n\n.OTP-border ion-col div {\n  border-bottom: 1px solid;\n}\n\n.small {\n  font-size: 13px;\n}\n\n.small a {\n  text-decoration: unset !important;\n}\n\n.button-color {\n  background-color: var(--ion-color-mytheme);\n}\n\n.logo {\n  width: 1.25em !important;\n}\n\n.grid {\n  height: 100vh;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n}\n\n.row {\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n}\n\n.img-logo {\n  height: 70px;\n  width: 120px;\n}\n\n.fire-logo {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  padding-bottom: 30px;\n}\n\n.bold {\n  font-weight: bold;\n}\n\n.block {\n  display: block;\n}\n\n.transition {\n  background: linear-gradient(to right, #f57c00 14%, #ffca00 96%);\n}\n\n.btn-color {\n  color: #ffa000;\n}\n\n.error {\n  color: red;\n  text-align: center;\n  display: block;\n  font-weight: bold;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9rb2tvZGF2aWQvRG93bmxvYWRzL2VwL3NyYy9hcHAvcGFnZXMvYXV0aC9waG9uZS9waG9uZS5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2F1dGgvcGhvbmUvcGhvbmUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZ0JBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtFQUNBLHlCQUFBO0FDQ0o7O0FERUU7RUFDRTtJQUNFLFlBQUE7RUNDSjtBQUNGOztBREtBO0VBQ0UsWUFBQTtBQ0hGOztBREtFO0VBQ0Usa0JBQUE7RUFJQSxXQUFBO0VBQ0EsV0FBQTtBQ0xKOztBRFFFO0VBQ0UsbUJBQUE7RUFDQSxzQkFBQTtFQUNBLGdCQUFBO0VBQ0EsMkJBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBRUEsWUFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSx5QkFBQTtBQ05KOztBRFFFO0VBQ0Usb0JBQUE7RUFDQSxzQkFBQTtFQUNBLGdCQUFBO0VBRUEsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtFQUNBLHlCQUFBO0FDTko7O0FEUUE7RUFDSSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FDTEo7O0FEUUU7RUFDRSx5QkFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSwyQkFBQTtBQ0xKOztBRE9FO0VBQ0Usb0JBQUE7RUFDQSxzQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtBQ0pKOztBRE1FO0VBQ0UsWUFBQTtBQ0hKOztBRE9NO0VBQ0Usd0JBQUE7QUNKUjs7QURTRTtFQUNFLGVBQUE7QUNOSjs7QURPSTtFQUNFLGlDQUFBO0FDTE47O0FEUUU7RUFDRSwwQ0FBQTtBQ0xKOztBRE9FO0VBQ0Usd0JBQUE7QUNKSjs7QURNRTtFQUNFLGFBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtBQ0hKOztBREtFO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7QUNGSjs7QURJRTtFQUNFLFlBQUE7RUFDQSxZQUFBO0FDREo7O0FER0U7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0Esb0JBQUE7QUNBSjs7QURFRTtFQUNFLGlCQUFBO0FDQ0o7O0FEQ0U7RUFDRSxjQUFBO0FDRUo7O0FEQUU7RUFDRSwrREFBQTtBQ0dKOztBRERFO0VBQ0UsY0FBQTtBQ0lKOztBREZFO0VBQ0UsVUFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0FDS0oiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9hdXRoL3Bob25lL3Bob25lLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYWluIHtcbiAgICBtaW4taGVpZ2h0OiAxMDAlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzk3QzQ5O1xuICB9XG4gIFxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjdweCkge1xuICAgIGlvbi1jYXJkIHtcbiAgICAgIHdpZHRoOiA2MDBweDtcbiAgICAvLyAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICAgIC8vICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICAgIC8vICAgbWFyZ2luLXRvcDogMHB4O1xuICAgICAgLy9tYXJnaW46IGF1dG87XG4gICAgfVxuICB9XG5pb24taWNvbntcbiAgY29sb3I6IGJsYWNrO1xufVxuICBpb24tY2FyZCB7XG4gICAgLS1iYWNrZ3JvdW5kOiAjZmZmO1xuICAgIC8vYm94LXNoYWRvdzogbm9uZTtcbiAgICAvLy13ZWJraXQtYm94LXNoYWRvdzogbm9uZTtcbiAgICAvL292ZXJmbG93Om5vbmU7XG4gICAgbWFyZ2luOiAwcHg7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cblxuICAucGhvbmUge1xuICAgIGxldHRlci1zcGFjaW5nOiA4cHg7XG4gICAgLXdlYmtpdC1wYWRkaW5nLWVuZDogMDtcbiAgICAtLXBhZGRpbmctZW5kOiAwO1xuICAgIGZvbnQtc2l6ZTogMS4yZW0gIWltcG9ydGFudDtcbiAgICBmb250LXdlaWdodDo1MDA7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIC8vIGZvbnQtc2l6ZTogMThweDtcbiAgICBjb2xvcjogYmxhY2s7XG4gICAgYm9yZGVyLXJhZGl1czogOXB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNDAsIDI0MCwgMjQwKTtcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2IoMjEwLCAyMTAsIDIxMCk7XG4gIH1cbiAgLmNvZGUge1xuICAgIGxldHRlci1zcGFjaW5nOiAxMnB4O1xuICAgIC13ZWJraXQtcGFkZGluZy1lbmQ6IDA7XG4gICAgLS1wYWRkaW5nLWVuZDogMDtcbiAgICAvL2ZvbnQtc2l6ZTogMS4yZW0gIWltcG9ydGFudDtcbiAgICBmb250LXdlaWdodDo1MDA7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICBjb2xvcjogYmxhY2s7XG4gICAgYm9yZGVyLXJhZGl1czogMTJweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjQwLCAyNDAsIDI0MCk7XG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiKDIxMCwgMjEwLCAyMTApO1xuICB9XG5oM3tcbiAgICBjb2xvcjpibGFjaztcbiAgICBmb250LXNpemU6MTZweDtcbiAgICBmb250LXdlaWdodDo1MDA7XG5cbn1cbiAgLmlucHV0IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjQwLCAyNDAsIDI0MCk7XG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiKDIxMCwgMjEwLCAyMTApO1xuICAgIGJvcmRlci1yYWRpdXM6IDlweDtcbiAgICBmb250LXNpemU6IDAuOWVtICFpbXBvcnRhbnQ7XG4gIH1cbiAgLm90cGlucHV0IHtcbiAgICBsZXR0ZXItc3BhY2luZzogMzBweDtcbiAgICAtd2Via2l0LXBhZGRpbmctZW5kOiAwO1xuICAgIC0tcGFkZGluZy1lbmQ6IDA7XG4gICAgZm9udC1zaXplOiAzMHB4O1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgfVxuICAud2hpdGUge1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgfVxuICAuT1RQLWJvcmRlciB7XG4gICAgaW9uLWNvbCB7XG4gICAgICBkaXYge1xuICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQ7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIFxuICAuc21hbGwge1xuICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICBhIHtcbiAgICAgIHRleHQtZGVjb3JhdGlvbjogdW5zZXQgIWltcG9ydGFudDtcbiAgICB9XG4gIH1cbiAgLmJ1dHRvbi1jb2xvciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLW15dGhlbWUpO1xuICB9XG4gIC5sb2dvIHtcbiAgICB3aWR0aDogMS4yNWVtICFpbXBvcnRhbnQ7XG4gIH1cbiAgLmdyaWQge1xuICAgIGhlaWdodDogMTAwdmg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB9XG4gIC5yb3cge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgfVxuICAuaW1nLWxvZ28ge1xuICAgIGhlaWdodDogNzBweDtcbiAgICB3aWR0aDogMTIwcHg7XG4gIH1cbiAgLmZpcmUtbG9nbyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgcGFkZGluZy1ib3R0b206IDMwcHg7XG4gIH1cbiAgLmJvbGQge1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICB9XG4gIC5ibG9jayB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gIH1cbiAgLnRyYW5zaXRpb24ge1xuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgI2Y1N2MwMCAxNCUsICNmZmNhMDAgOTYlKTtcbiAgfVxuICAuYnRuLWNvbG9yIHtcbiAgICBjb2xvcjogI2ZmYTAwMDtcbiAgfVxuICAuZXJyb3Ige1xuICAgIGNvbG9yOiByZWQ7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICB9IiwiLm1haW4ge1xuICBtaW4taGVpZ2h0OiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzM5N0M0OTtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY3cHgpIHtcbiAgaW9uLWNhcmQge1xuICAgIHdpZHRoOiA2MDBweDtcbiAgfVxufVxuaW9uLWljb24ge1xuICBjb2xvcjogYmxhY2s7XG59XG5cbmlvbi1jYXJkIHtcbiAgLS1iYWNrZ3JvdW5kOiAjZmZmO1xuICBtYXJnaW46IDBweDtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5waG9uZSB7XG4gIGxldHRlci1zcGFjaW5nOiA4cHg7XG4gIC13ZWJraXQtcGFkZGluZy1lbmQ6IDA7XG4gIC0tcGFkZGluZy1lbmQ6IDA7XG4gIGZvbnQtc2l6ZTogMS4yZW0gIWltcG9ydGFudDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjb2xvcjogYmxhY2s7XG4gIGJvcmRlci1yYWRpdXM6IDlweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YwZjBmMDtcbiAgYm9yZGVyOiAxcHggc29saWQgI2QyZDJkMjtcbn1cblxuLmNvZGUge1xuICBsZXR0ZXItc3BhY2luZzogMTJweDtcbiAgLXdlYmtpdC1wYWRkaW5nLWVuZDogMDtcbiAgLS1wYWRkaW5nLWVuZDogMDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDIwcHg7XG4gIGNvbG9yOiBibGFjaztcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YwZjBmMDtcbiAgYm9yZGVyOiAxcHggc29saWQgI2QyZDJkMjtcbn1cblxuaDMge1xuICBjb2xvcjogYmxhY2s7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cblxuLmlucHV0IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YwZjBmMDtcbiAgYm9yZGVyOiAxcHggc29saWQgI2QyZDJkMjtcbiAgYm9yZGVyLXJhZGl1czogOXB4O1xuICBmb250LXNpemU6IDAuOWVtICFpbXBvcnRhbnQ7XG59XG5cbi5vdHBpbnB1dCB7XG4gIGxldHRlci1zcGFjaW5nOiAzMHB4O1xuICAtd2Via2l0LXBhZGRpbmctZW5kOiAwO1xuICAtLXBhZGRpbmctZW5kOiAwO1xuICBmb250LXNpemU6IDMwcHg7XG4gIGJvcmRlcjogbm9uZTtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG59XG5cbi53aGl0ZSB7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLk9UUC1ib3JkZXIgaW9uLWNvbCBkaXYge1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQ7XG59XG5cbi5zbWFsbCB7XG4gIGZvbnQtc2l6ZTogMTNweDtcbn1cbi5zbWFsbCBhIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bnNldCAhaW1wb3J0YW50O1xufVxuXG4uYnV0dG9uLWNvbG9yIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLW15dGhlbWUpO1xufVxuXG4ubG9nbyB7XG4gIHdpZHRoOiAxLjI1ZW0gIWltcG9ydGFudDtcbn1cblxuLmdyaWQge1xuICBoZWlnaHQ6IDEwMHZoO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLnJvdyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4uaW1nLWxvZ28ge1xuICBoZWlnaHQ6IDcwcHg7XG4gIHdpZHRoOiAxMjBweDtcbn1cblxuLmZpcmUtbG9nbyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwYWRkaW5nLWJvdHRvbTogMzBweDtcbn1cblxuLmJvbGQge1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLmJsb2NrIHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbi50cmFuc2l0aW9uIHtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjZjU3YzAwIDE0JSwgI2ZmY2EwMCA5NiUpO1xufVxuXG4uYnRuLWNvbG9yIHtcbiAgY29sb3I6ICNmZmEwMDA7XG59XG5cbi5lcnJvciB7XG4gIGNvbG9yOiByZWQ7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/pages/auth/phone/phone.page.ts":
/*!************************************************!*\
  !*** ./src/app/pages/auth/phone/phone.page.ts ***!
  \************************************************/
/*! exports provided: PhonePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PhonePage", function() { return PhonePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/alert.service */ "./src/app/services/alert.service.ts");
/* harmony import */ var _ionic_native_device_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/device/ngx */ "./node_modules/@ionic-native/device/__ivy_ngcc__/ngx/index.js");






let PhonePage = class PhonePage {
    constructor(modalController, authService, navCtrl, alertService, menu, device) {
        this.modalController = modalController;
        this.authService = authService;
        this.navCtrl = navCtrl;
        this.alertService = alertService;
        this.menu = menu;
        this.device = device;
        this.phoneNumber = '';
        this.menu.enable(false);
        this.value = 0;
        this.code = 0;
        this.showPasswordText = 0;
        this.masks = {
            phoneNumber: ['(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/],
        };
    }
    ngOnInit() {
        this.type = 'password';
    }
    check(form) {
        const x = form.value.phone;
        const ph = x.toString().replace(/\s/g, '');
        localStorage.setItem("phone", ph);
        // console.log(ph);
        this.authService.check(ph).subscribe(data => {
            this.data = data;
            console.log(this.data);
            // console.log(form.value.phone, this.data.response);
            if (this.data.response === 'Success') {
                this.code = 1;
                console.log(this.code);
                this.phone = form.value.phone;
            }
        }, error => {
            this.authService.dismiss();
            this.authService.presentAlert1(error);
            console.log(error);
        });
    }
    managePassword() {
        if (this.showPasswordText === 0) {
            this.showPasswordText = 1;
            this.type = 'text';
            // console.log(this.showPasswordText);
        }
        else if (this.showPasswordText === 1) {
            this.showPasswordText = 0;
            this.type = 'password';
            // console.log(this.showPasswordText);
        }
    }
    enterCode() {
        if (localStorage.getItem("phone") !== null) {
            this.code = 1;
        }
        else {
            this.authService.presentAlert1("Phone number not recorded. Kindly register again.");
        }
    }
    verify(form) {
        const x = this.phone;
        const ph = localStorage.getItem("phone");
        if (ph !== null) {
            this.authService.verify(ph, form.value.code).subscribe(data => {
                this.data = data;
                console.log(this.data);
                if (this.data.response === 'success') {
                    this.code = 2;
                    this.phone = this.phone;
                }
            }, error => {
                this.authService.presentAlert1(this.data.message);
                console.log(error);
            });
        }
        else {
            this.authService.presentAlert1("Phone number was not recorded. Kindly register again");
        }
    }
    runTimeChange(x) {
        // const e = this.value;
        let e = x.target.value;
        if (e.length === 4 || e.length === 8) {
            this.value = e + ' ';
        }
        else {
            this.value = this.value;
        }
        // ToDo
    }
    register(form) {
        this.deviceid = localStorage.getItem('id');
        this.phone = localStorage.getItem('phone');
        const x = this.phone;
        const ph = x.toString().replace(/\s/g, '');
        if (form.value.pass.length < 8 || !/\d/.test(form.value.pass)) {
            this.authService.presentAlert1("Password needs to be at least 8 characters long and include a digit.");
        }
        else if (form.value.pass !== form.value.repass) {
            this.authService.dismiss();
            this.authService.presentAlert1("Passwords do not match");
        }
        else if (form.value.pass === form.value.repass) {
            this.authService.registerPwd(form.value.pass, ph).subscribe(data => {
                this.data = data;
                if (this.data.response === 'success') {
                    this.alertService.presentToast('Registered Successfully you will now be logged in automatically.');
                    this.login(ph, form.value.pass, this.deviceid);
                }
            }, error => {
                console.log(error);
            });
        }
        else {
        }
    }
    login(ph, pass, deviceid) {
        this.authService.login(ph, pass, deviceid).subscribe(data => {
            this.data = data;
            if (this.data.response === 'success') {
                // this.alertService.presentToast('Loggedin  Successfully');
                const creds = {
                    username: ph,
                    password: pass
                };
                localStorage.setItem('credentials', JSON.stringify(creds));
            }
            else {
            }
        }, error => {
            console.log(error);
        }, () => {
            this.dismissRegister();
            this.navCtrl.navigateRoot('/dashboard');
        });
    }
    dismissRegister() {
        this.modalController.dismiss();
    }
};
PhonePage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] },
    { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] },
    { type: src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_4__["AlertService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"] },
    { type: _ionic_native_device_ngx__WEBPACK_IMPORTED_MODULE_5__["Device"] }
];
PhonePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-phone',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./phone.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/auth/phone/phone.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./phone.page.scss */ "./src/app/pages/auth/phone/phone.page.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"],
        src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"],
        src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_4__["AlertService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"],
        _ionic_native_device_ngx__WEBPACK_IMPORTED_MODULE_5__["Device"]])
], PhonePage);



/***/ })

}]);
//# sourceMappingURL=default~pages-auth-login-login-module~pages-auth-phone-phone-module-es2015.js.map