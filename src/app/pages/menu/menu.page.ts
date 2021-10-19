import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Platform, NavController, AlertController } from '@ionic/angular';
import { ActivatedRoute, Router, NavigationExtras } from '@angular/router';
import { FileOpener } from '@ionic-native/file-opener/ngx';
import { FileTransfer, FileTransferObject } from '@ionic-native/file-transfer/ngx';
import { File } from '@ionic-native/file/ngx';
import { SpinnerDialog } from '@ionic-native/spinner-dialog/ngx';
import * as moment from 'moment';
import { SessionService } from 'src/app/services/session.service';
import { StreamingMedia, StreamingVideoOptions } from '@ionic-native/streaming-media/ngx';
import { HttpClient } from '@angular/common/http';
import { DomSanitizer } from '@angular/platform-browser';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { AlertService } from 'src/app/services/alert.service';
import { HTTP, HTTPResponse } from '@ionic-native/http/ngx';
import { DocumentViewer, DocumentViewerOptions } from '@ionic-native/document-viewer/ngx';
import { Screenshot } from '@ionic-native/screenshot/ngx';



@Component({
    selector: 'app-menu ',
    templateUrl: './menu.page.html',
    styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {

    menu: any;
    school: any;
    data: any;
    days: any;
    meal_name: any;
    sample_data: any;
    meal1: any;
    meal2: any;
    noMenu: boolean;

    private fileTransfer: FileTransferObject;


    constructor(
        private transfer: FileTransfer,
        private spinnerDialog: SpinnerDialog,
        private file: File,
        private fileOpener: FileOpener,
        private navCtrl: NavController,
        private authService: AuthService,
        private route: ActivatedRoute,
        private router: Router,
        private sessionService: SessionService,
        public streamingMedia: StreamingMedia,
        public sanitizer: DomSanitizer,
        private http: HttpClient,
        private iab: InAppBrowser,
        private alertService: AlertService,
        private adHTTP: HTTP,
        private document: DocumentViewer,
        private platform: Platform,
        private screenshot: Screenshot,
        // private player: Player
    ) {
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

    async ionViewWillEnter() {
        this.authService.presentLoading();
        await this.authService.getMenu(this.school).subscribe(
            m => {
                
                var day = [];
                var meal_type = [];
                let f = [];

                this.data = m;
                if(this.data.nodata){
                    this.noMenu = true;
                    this.authService.dismiss();
                }else{
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

            }
        );
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

        }
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
        }).catch((error) => { console.log(error) });
    }

    async download(fileName, filePath) {
        this.authService.presentLoading();
        let path = null;
        if (this.platform.is('ios')) {
            path = this.file.documentsDirectory;
        } else {
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
    }

    trunc(text) {
        return text.length > 20 ? `${text.substr(0, 20)}...` : text;
    }

    formatdate(date) {
        // console.log(date);
        return moment(date).format('MMM D, YYYY');

    }
    filterdate(date) {
        return moment(date).year;
    }
    onlyUnique(value, index, self) {
        return self.indexOf(value) === index;
    }
}
