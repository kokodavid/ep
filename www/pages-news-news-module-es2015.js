(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-news-news-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/news/news.page.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/news/news.page.html ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n    <ion-toolbar color=\"primary\">\n        <ion-buttons slot=\"start\" style=\"font-size: 14px;\">\n          <ion-back-button text=\"\" icon=\"chevron-back\"></ion-back-button>MORE INFORMATION\n        </ion-buttons>\n    <!-- <ion-title>MORE INFORMATION</ion-title> -->\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-no-padding\" >\n  <ion-card>\n    <ion-card-header>\n     <!-- {{newsinfo.subject}} -->  \n     \n    </ion-card-header>\n    <div *ngIf = \"newsinfo.subject !== newsinfo.message; else no_subject\">\n    <ion-card-content>\n        <div [innerHTML]=\"newsinfo.subject\"></div> \n        <br>\n        <!-- <div *ngIf = \"(newsinfo.message).includes('vimeo'); else normal_message\"> -->\n          <!-- <iframe src=\"https://player.vimeo.com/video/403128423\" width=\"256\" height=\"144\" frameborder=\"0\" allow=\"autoplay; fullscreen\" allowfullscreen title=\"sample\"></iframe>\n        \n        <ion-button style=\"background-color:#397C49\" (click)=\"inApp()\">Play on Browser</ion-button> -->\n        <!-- </div> -->\n        <div>\n            <div [innerHTML]=\"newsinfo.message\"></div>\n        </div>\n        <br>\n        <p>Posted By {{newsinfo.posted_by}}, {{this.formatdate(newsinfo.creation_date)}}</p>\n    </ion-card-content>\n    </div>\n    <ng-template #no_subject>\n      <ion-card-content>\n        <div [innerHTML]=\"newsinfo.message\"></div><br>\n        <p>Posted By {{newsinfo.posted_by}}, {{this.formatdate(newsinfo.creation_date)}}</p>\n    </ion-card-content>\n    </ng-template>\n  </ion-card>\n  <div *ngIf=\"attachments.length > 0\" class=\"ion-padding\">\n       <ion-list  *ngFor=\"let item of attachments; let i = index; \" >\n         <!-- <ion-item style=\"font-size:14px; color: blue; border-bottom: blue 1px !important\" no-padding >\n          <span> {{i+1}}. <ion-icon ios=\"ios-attach\" md=\"md-attach\"></ion-icon>\n          <a  style=\"color: blue;font-size:13px; text-align: center\" href={{assets+item}}  target=\"_blank\" download={{item}}> {{item}}  </a></span>\n        </ion-item> -->\n        <ion-item style=\"font-size:14px; color: blue; border-bottom: blue 1px !important\" no-padding (click)=\"download(item,assets+item)\">\n          <span> {{i+1}}. <ion-icon name=\"document-attach\" md=\"md-attach\"></ion-icon>\n          <a  style=\"color: blue;font-size:13px; text-align: center\"> {{item}}  </a></span>\n        </ion-item>\n      </ion-list>\n\n    </div>\n\n</ion-content>\n");

/***/ }),

/***/ "./src/app/pages/news/news.module.ts":
/*!*******************************************!*\
  !*** ./src/app/pages/news/news.module.ts ***!
  \*******************************************/
/*! exports provided: NewsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewsPageModule", function() { return NewsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _news_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./news.page */ "./src/app/pages/news/news.page.ts");








const routes = [
    {
        path: '',
        component: _news_page__WEBPACK_IMPORTED_MODULE_7__["NewsPage"]
    }
];
let NewsPageModule = class NewsPageModule {
};
NewsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
            _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"]
        ],
        declarations: [_news_page__WEBPACK_IMPORTED_MODULE_7__["NewsPage"]]
    })
], NewsPageModule);



/***/ }),

/***/ "./src/app/pages/news/news.page.scss":
/*!*******************************************!*\
  !*** ./src/app/pages/news/news.page.scss ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-content ion-card-content {\n  color: black;\n}\nion-content ion-card-header {\n  color: black;\n}\na {\n  color: blue;\n}\na:link {\n  color: blue;\n}\na:visited {\n  color: #999999;\n}\na:hover {\n  color: #2b5aa1;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9rb2tvZGF2aWQvRG93bmxvYWRzL2VwL3NyYy9hcHAvcGFnZXMvbmV3cy9uZXdzLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvbmV3cy9uZXdzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDSTtFQUNDLFlBQUE7QUNBTDtBREVJO0VBQ0ksWUFBQTtBQ0FSO0FESUE7RUFBSSxXQUFBO0FDQUo7QURHQTtFQUNBLFdBQUE7QUNBQTtBREVBO0VBQ0EsY0FBQTtBQ0NBO0FEQ0E7RUFDQSxjQUFBO0FDRUEiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9uZXdzL25ld3MucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbnRlbnR7XG4gICAgaW9uLWNhcmQtY29udGVudHtcbiAgICAgY29sb3I6IGJsYWNrO1xuICAgIH1cbiAgICBpb24tY2FyZC1oZWFkZXJ7XG4gICAgICAgIGNvbG9yOiBibGFjaztcbiAgICB9XG59XG5cbmEgeyBjb2xvcjogYmx1ZTtcbn1cblxuYTpsaW5rIHtcbmNvbG9yOmJsdWU7XG59XG5hOnZpc2l0ZWQge1xuY29sb3I6ICM5OTk5OTk7XG59XG5hOmhvdmVyIHtcbmNvbG9yOiAjMmI1YWExO1xufSAiLCJpb24tY29udGVudCBpb24tY2FyZC1jb250ZW50IHtcbiAgY29sb3I6IGJsYWNrO1xufVxuaW9uLWNvbnRlbnQgaW9uLWNhcmQtaGVhZGVyIHtcbiAgY29sb3I6IGJsYWNrO1xufVxuXG5hIHtcbiAgY29sb3I6IGJsdWU7XG59XG5cbmE6bGluayB7XG4gIGNvbG9yOiBibHVlO1xufVxuXG5hOnZpc2l0ZWQge1xuICBjb2xvcjogIzk5OTk5OTtcbn1cblxuYTpob3ZlciB7XG4gIGNvbG9yOiAjMmI1YWExO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/pages/news/news.page.ts":
/*!*****************************************!*\
  !*** ./src/app/pages/news/news.page.ts ***!
  \*****************************************/
/*! exports provided: NewsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewsPage", function() { return NewsPage; });
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


















let NewsPage = class NewsPage {
    constructor(transfer, spinnerDialog, file, fileOpener, navCtrl, authService, route, router, sessionService, streamingMedia, sanitizer, http, iab, alertService, adHTTP, document, platform) {
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
        this.newsinfo = new Object();
        this.sessionService.sessionTimeOut();
        this.route.queryParams.subscribe(params => {
            if (this.router.getCurrentNavigation().extras.state) {
                this.newsinfo = this.router.getCurrentNavigation().extras.state.details;
                this.school = this.router.getCurrentNavigation().extras.state.school;
                this.student_id = this.router.getCurrentNavigation().extras.state.student_id;
                if (this.newsinfo === null || this.newsinfo === undefined) {
                    this.navCtrl.navigateRoot('/dashboard');
                }
                else {
                    const filename = this.newsinfo.attachment ? this.newsinfo.attachment : null;
                    const files = filename === null ? '' : filename;
                    const name = files; // .replace(/ /g, '%20');
                    const nameArr = name === null ? null : name.split(',');
                    this.attachments = nameArr[0] !== '' ? nameArr : [];
                    console.log("here" + JSON.stringify(this.newsinfo));
                    this.assets = `https://${this.school}.eduweb.co.ke/assets/posts/`;
                }
            }
        });
    }
    ngOnInit() {
        console.log("student id " + this.student_id);
        this.http.get(`https://api.eduweb.co.ke/getParticularCommunication/${this.school}/${this.student_id}/${this.newsinfo.com_id}`).subscribe((response) => {
            console.log(response);
        });
        // //vimeo response
        // this.http.get(`https://vimeo.com/api/oembed.json?url=https://vimeo.com/${this.vid_id}`).subscribe((response) => {
        //   console.log(response);
        //   // const player = new Player ('handstick',{
        //   //   id: response.video_id,
        //   //   wi
        //   // })
        // });
        // this.vidUrl = `https://player.vimeo.com/video/${this.vid_id}`;
        // this.safeUrl = this.sanitizer.bypassSecurityTrustHtml(this.vidUrl);
    }
    // inApp(){
    //   this.iab.create(`https://player.vimeo.com/video/${this.safeUrl}`,`_system`);
    // }
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
    openFileHandler() {
        this.fileOpener.open(this.downloadFile, '')
            .then(() => console.log('File is opened'))
            .catch(e => console.log('Error opening file', e));
    }
    trunc(text) {
        return text.length > 20 ? `${text.substr(0, 20)}...` : text;
    }
    /// format date
    formatdate(date) {
        // console.log(date);
        return moment__WEBPACK_IMPORTED_MODULE_9__(date).format('MMM D, YYYY');
    }
    filterdate(date) {
        return moment__WEBPACK_IMPORTED_MODULE_9__(date).year;
    }
};
NewsPage.ctorParameters = () => [
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
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"] }
];
NewsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-news',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./news.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/news/news.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./news.page.scss */ "./src/app/pages/news/news.page.scss")).default]
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
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"]])
], NewsPage);



/***/ })

}]);
//# sourceMappingURL=pages-news-news-module-es2015.js.map