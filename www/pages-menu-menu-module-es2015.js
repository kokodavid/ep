(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-menu-menu-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/menu/menu.page.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/menu/menu.page.html ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n    <ion-toolbar color=\"primary\">\n        <ion-buttons slot=\"start\" style=\"font-size: 14px;\">\n            <ion-back-button text=\"\" icon=\"chevron-back\"></ion-back-button>MEALS MENU\n        </ion-buttons>\n    </ion-toolbar>\n</ion-header>\n<ion-content>\n    <div class=\"table_wrapper\">\n        <p style=\"text-transform: capitalize; text-align: center;\">\n            <b>{{school}} Meal Menu</b>\n        </p>\n        <div *ngIf=\"noMenu == false\">\n            <table border=\"1\" width=100%>\n                <tr width=\"100%\" style=\"font-weight: 400;\">\n                    <th><b>DAYS</b></th>\n                    <th *ngFor=\"let sd of sample_data; let i = index\">\n\n                        <b>{{sd.name}}</b>\n                    </th>\n                </tr>\n                <tr *ngFor=\"let m of meal1; let i = index\">\n                    <td>\n                        {{days[i]}}\n                    </td>\n                    <td>\n                        <div [innerHTML]=\"m.meal\"></div>\n                    </td>\n\n                    <td>\n                <tr *ngFor=\"let s of meal2; let k = index\">\n                    <div *ngIf=\"s.day_name === days[i]\">\n                        <div [innerHTML]=\"s.meal\"></div>\n                    </div>\n                </tr>\n                </td>\n\n\n                </tr>\n\n\n            </table>\n            <!-- <ion-button (click)=\"print()\" size=\"medium\"\n                style=\"background-color: #397C49; border-radius: 4px; font-weight: 500; font-size: 16px; margin-left:auto; margin-right:auto; margin-bottom: 12px; width: 50%;\"\n                expand=\"block\">Download Menu</ion-button> -->\n        </div>\n        <h6 *ngIf=\"noMenu == true\"><i>No meal menu</i></h6>\n\n    </div>\n\n</ion-content>");

/***/ }),

/***/ "./src/app/pages/menu/menu.module.ts":
/*!*******************************************!*\
  !*** ./src/app/pages/menu/menu.module.ts ***!
  \*******************************************/
/*! exports provided: MenuPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuPageModule", function() { return MenuPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/progress-spinner */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-spinner.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/__ivy_ngcc__/fesm2015/ngx-spinner.js");
/* harmony import */ var _menu_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./menu.page */ "./src/app/pages/menu/menu.page.ts");









const routes = [
    {
        path: '',
        component: _menu_page__WEBPACK_IMPORTED_MODULE_8__["MenuPage"]
    }
];
let MenuPageModule = class MenuPageModule {
};
MenuPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonicModule"],
            _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_5__["MatProgressSpinnerModule"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_7__["NgxSpinnerModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_menu_page__WEBPACK_IMPORTED_MODULE_8__["MenuPage"]]
    })
], MenuPageModule);



/***/ }),

/***/ "./src/app/pages/menu/menu.page.scss":
/*!*******************************************!*\
  !*** ./src/app/pages/menu/menu.page.scss ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-content {\n  font-size: 13px;\n}\nion-content table tr:nth-child(even) {\n  background-color: #ddd;\n}\nion-content table th {\n  background-color: #000;\n  color: white;\n}\nion-content table th, ion-content table td {\n  padding: 5px;\n  text-align: left;\n}\nion-content .table_wrapper {\n  display: block;\n  overflow-x: auto;\n  white-space: nowrap;\n}\nion-content h6 {\n  text-align: center;\n  color: #397C49;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9rb2tvZGF2aWQvRG93bmxvYWRzL2VwL3NyYy9hcHAvcGFnZXMvbWVudS9tZW51LnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvbWVudS9tZW51LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQW9CUSxlQUFBO0FDbEJSO0FEQVE7RUFBb0Isc0JBQUE7QUNHNUI7QURGUTtFQUNJLHNCQUFBO0VBQ0EsWUFBQTtBQ0laO0FERlU7RUFDRSxZQUFBO0VBQ0EsZ0JBQUE7QUNJWjtBRENRO0VBQ0ksY0FBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUNDWjtBREdBO0VBQ0Usa0JBQUE7RUFDQSxjQUFBO0FDREYiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9tZW51L21lbnUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbnRlbnR7XG4gICAgdGFibGV7XG4gICAgICAgIHRyOm50aC1jaGlsZChldmVuKSB7YmFja2dyb3VuZC1jb2xvcjogI2RkZDt9ICAgIFxuICAgICAgICB0aCB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwO1xuICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICAgIH1cbiAgICAgICAgICB0aCwgdGQge1xuICAgICAgICAgICAgcGFkZGluZzogNXB4O1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgICAgICB9XG4gICAgICAgICAgXG4gICAgICAgICBcbiAgICAgICAgfVxuICAgICAgICAudGFibGVfd3JhcHBlcntcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgb3ZlcmZsb3cteDogYXV0bztcbiAgICAgICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgICAgIH1cbiAgICAgICAgLy8gZm9udC1mYW1pbHk6IC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgJ1NlZ29lIFVJJywgUm9ib3RvLCBPeHlnZW4sIFVidW50dSwgQ2FudGFyZWxsLCAnT3BlbiBTYW5zJywgJ0hlbHZldGljYSBOZXVlJywgc2Fucy1zZXJpZjtcbiAgICAgICAgZm9udC1zaXplOiAxM3B4O1xuaDZ7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6ICMzOTdDNDk7XG59XG4gICAgICAgIFxufVxuIiwiaW9uLWNvbnRlbnQge1xuICBmb250LXNpemU6IDEzcHg7XG59XG5pb24tY29udGVudCB0YWJsZSB0cjpudGgtY2hpbGQoZXZlbikge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGRkO1xufVxuaW9uLWNvbnRlbnQgdGFibGUgdGgge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwO1xuICBjb2xvcjogd2hpdGU7XG59XG5pb24tY29udGVudCB0YWJsZSB0aCwgaW9uLWNvbnRlbnQgdGFibGUgdGQge1xuICBwYWRkaW5nOiA1cHg7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG59XG5pb24tY29udGVudCAudGFibGVfd3JhcHBlciB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBvdmVyZmxvdy14OiBhdXRvO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xufVxuaW9uLWNvbnRlbnQgaDYge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGNvbG9yOiAjMzk3QzQ5O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/pages/menu/menu.page.ts":
/*!*****************************************!*\
  !*** ./src/app/pages/menu/menu.page.ts ***!
  \*****************************************/
/*! exports provided: MenuPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuPage", function() { return MenuPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ionic_native_file_opener_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/file-opener/ngx */ "./node_modules/@ionic-native/file-opener/__ivy_ngcc__/ngx/index.js");
/* harmony import */ var _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/file-transfer/ngx */ "./node_modules/@ionic-native/file-transfer/__ivy_ngcc__/ngx/index.js");
/* harmony import */ var _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/file/ngx */ "./node_modules/@ionic-native/file/__ivy_ngcc__/ngx/index.js");
/* harmony import */ var _ionic_native_spinner_dialog_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic-native/spinner-dialog/ngx */ "./node_modules/@ionic-native/spinner-dialog/__ivy_ngcc__/ngx/index.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var src_app_services_session_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/services/session.service */ "./src/app/services/session.service.ts");
/* harmony import */ var _ionic_native_streaming_media_ngx__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ionic-native/streaming-media/ngx */ "./node_modules/@ionic-native/streaming-media/__ivy_ngcc__/ngx/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ionic-native/in-app-browser/ngx */ "./node_modules/@ionic-native/in-app-browser/__ivy_ngcc__/ngx/index.js");
/* harmony import */ var src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! src/app/services/alert.service */ "./src/app/services/alert.service.ts");
/* harmony import */ var _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @ionic-native/http/ngx */ "./node_modules/@ionic-native/http/__ivy_ngcc__/ngx/index.js");
/* harmony import */ var _ionic_native_document_viewer_ngx__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @ionic-native/document-viewer/ngx */ "./node_modules/@ionic-native/document-viewer/__ivy_ngcc__/ngx/index.js");
/* harmony import */ var _ionic_native_screenshot_ngx__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @ionic-native/screenshot/ngx */ "./node_modules/@ionic-native/screenshot/__ivy_ngcc__/ngx/index.js");



















let MenuPage = class MenuPage {
    constructor(transfer, spinnerDialog, file, fileOpener, navCtrl, authService, route, router, sessionService, streamingMedia, sanitizer, http, iab, alertService, adHTTP, document, platform, screenshot) {
        this.transfer = transfer;
        this.spinnerDialog = spinnerDialog;
        this.file = file;
        this.fileOpener = fileOpener;
        this.navCtrl = navCtrl;
        this.authService = authService;
        this.route = route;
        this.router = router;
        this.sessionService = sessionService;
        this.streamingMedia = streamingMedia;
        this.sanitizer = sanitizer;
        this.http = http;
        this.iab = iab;
        this.alertService = alertService;
        this.adHTTP = adHTTP;
        this.document = document;
        this.platform = platform;
        this.screenshot = screenshot;
        this.menu = new Array();
        this.data = new Array();
        this.days = new Array();
        this.meal_name = new Array();
        this.sample_data = new Array();
        this.meal1 = new Array();
        this.meal2 = new Array();
        this.route.queryParams.subscribe(params => {
            if (this.router.getCurrentNavigation().extras.state) {
                this.school = this.router.getCurrentNavigation().extras.state.details;
            }
        });
    }
    ngOnInit() {
    }
    ionViewWillEnter() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.authService.presentLoading();
            yield this.authService.getMenu(this.school).subscribe(m => {
                var day = [];
                var meal_type = [];
                let f = [];
                this.data = m;
                if (this.data.nodata) {
                    this.noMenu = true;
                    this.authService.dismiss();
                }
                else {
                    this.authService.dismiss();
                    this.noMenu = false;
                }
                this.menu = this.data.data.menu == undefined ? [] : this.data.data.menu;
                console.log("menu>>>", m);
                this.days = this.menu.filter(el => {
                    day.push(el.day_name);
                    meal_type.push(el.break_name);
                });
                var days_of_the_week = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
                this.days = day.filter(this.onlyUnique);
                // console.log(this.days);
                console.log(days_of_the_week);
                this.days.sort(function (a, b) {
                    return days_of_the_week.indexOf(a) - days_of_the_week.indexOf(b);
                });
                // console.log("formatted>>>" + this.days);
                this.meal_name = meal_type.filter(this.onlyUnique);
                this.meal_name.forEach(element => {
                    const name = element;
                    f = [];
                    for (var ii = 0; ii < this.menu.length; ii++) {
                        // console.log(this.menu[ii])
                        if (this.menu[ii].break_name == element) {
                            f.push(this.menu[ii]);
                        }
                    }
                    const meal_data = {
                        name,
                        meal: f.filter(this.onlyUnique)
                    };
                    this.sample_data.push(meal_data);
                });
                // console.log(this.sample_data);
                for (var jj = 0; jj < this.sample_data.length; jj++) {
                }
                this.meal1 = this.sample_data[0].meal == undefined ? [] : this.sample_data[0].meal;
                this.meal2 = this.sample_data[1].meal == undefined ? [] : this.sample_data[1].meal;
            });
        });
    }
    getMIMEtype(extn) {
        let ext = extn.toLowerCase();
        let MIMETypes = {
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
    open(file) {
        this.authService.dismiss();
        // this.spinnerDialog.hide();
        const fileExtn = file.split('.').reverse()[0];
        const fileMIMEType = this.getMIMEtype(fileExtn);
        console.log(fileExtn, fileMIMEType, file);
        this.fileOpener.showOpenWithDialog(file, fileMIMEType)
            .then(() => console.log('File is opened'))
            .catch(e => {
            this.authService.dismiss();
            this.alertService.presentToast(e);
        });
    }
    print() {
        this.screenshot.save('jpg', 80, 'myscreenshot.jpg').then((success) => {
            console.log(success);
        }).catch((error) => { console.log(error); });
    }
    download(fileName, filePath) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.authService.presentLoading();
            let path = null;
            if (this.platform.is('ios')) {
                path = this.file.documentsDirectory;
            }
            else {
                path = this.file.dataDirectory;
            }
            const url = encodeURI(filePath);
            const trans = this.transfer.create();
            trans.download(url, path + fileName, true).then(entry => {
                let downUrl = entry.toURL();
                this.authService.dismiss();
                this.open(downUrl);
                // this.document.viewDocument(url,'application/pdf',{});
            });
            // const reqOptions: any = {
            //   method: 'get',
            //   responseType: 'blob'
            // };
            // let res: HTTPResponse = await this.adHTTP.sendRequest(filePath, reqOptions);
            // let blob: Blob = res.data;
            // await this.file.writeFile(filePath, fileName, blob, { replace: true });
        });
    }
    trunc(text) {
        return text.length > 20 ? `${text.substr(0, 20)}...` : text;
    }
    formatdate(date) {
        // console.log(date);
        return moment__WEBPACK_IMPORTED_MODULE_9__(date).format('MMM D, YYYY');
    }
    filterdate(date) {
        return moment__WEBPACK_IMPORTED_MODULE_9__(date).year;
    }
    onlyUnique(value, index, self) {
        return self.indexOf(value) === index;
    }
};
MenuPage.ctorParameters = () => [
    { type: _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_6__["FileTransfer"] },
    { type: _ionic_native_spinner_dialog_ngx__WEBPACK_IMPORTED_MODULE_8__["SpinnerDialog"] },
    { type: _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_7__["File"] },
    { type: _ionic_native_file_opener_ngx__WEBPACK_IMPORTED_MODULE_5__["FileOpener"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"] },
    { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: src_app_services_session_service__WEBPACK_IMPORTED_MODULE_10__["SessionService"] },
    { type: _ionic_native_streaming_media_ngx__WEBPACK_IMPORTED_MODULE_11__["StreamingMedia"] },
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_13__["DomSanitizer"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_12__["HttpClient"] },
    { type: _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_14__["InAppBrowser"] },
    { type: src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_15__["AlertService"] },
    { type: _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_16__["HTTP"] },
    { type: _ionic_native_document_viewer_ngx__WEBPACK_IMPORTED_MODULE_17__["DocumentViewer"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"] },
    { type: _ionic_native_screenshot_ngx__WEBPACK_IMPORTED_MODULE_18__["Screenshot"] }
];
MenuPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-menu ',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./menu.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/menu/menu.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./menu.page.scss */ "./src/app/pages/menu/menu.page.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_6__["FileTransfer"],
        _ionic_native_spinner_dialog_ngx__WEBPACK_IMPORTED_MODULE_8__["SpinnerDialog"],
        _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_7__["File"],
        _ionic_native_file_opener_ngx__WEBPACK_IMPORTED_MODULE_5__["FileOpener"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"],
        src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
        _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
        src_app_services_session_service__WEBPACK_IMPORTED_MODULE_10__["SessionService"],
        _ionic_native_streaming_media_ngx__WEBPACK_IMPORTED_MODULE_11__["StreamingMedia"],
        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_13__["DomSanitizer"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_12__["HttpClient"],
        _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_14__["InAppBrowser"],
        src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_15__["AlertService"],
        _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_16__["HTTP"],
        _ionic_native_document_viewer_ngx__WEBPACK_IMPORTED_MODULE_17__["DocumentViewer"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"],
        _ionic_native_screenshot_ngx__WEBPACK_IMPORTED_MODULE_18__["Screenshot"]])
], MenuPage);



/***/ })

}]);
//# sourceMappingURL=pages-menu-menu-module-es2015.js.map