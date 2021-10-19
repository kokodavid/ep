import { Component, OnInit, Inject } from '@angular/core';
import { ActivatedRoute, Router, NavigationExtras } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { NavController } from '@ionic/angular';
import * as moment from 'moment';
import { AuthService } from 'src/app/services/auth.service';
import { FileOpener } from '@ionic-native/file-opener/ngx';
import { FileTransfer, FileTransferObject } from '@ionic-native/file-transfer/ngx';
import { File } from '@ionic-native/file/ngx';
import { EnvService } from 'src/app/services/env.service';
import { AlertService } from 'src/app/services/alert.service';

@Component({
    selector: 'app-homework',
    templateUrl: './homework.page.html',
    styleUrls: ['./homework.page.scss']
})
//7401d099f0fc693bf578b465e4e9902912741e54

export class HomeworkPage implements OnInit {
    homeworkInfo: any;
    school: any;
    attachments: any;
    assets: any;
    student: any;
    student_id: any;
    student_name: any;
    feed: any;
    private fileTransfer: FileTransferObject;



    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private authService: AuthService,
        private transfer: FileTransfer,
        private file: File,
        private fileOpener: FileOpener,
        private http: HttpClient,
        private env: EnvService,
        private alertService: AlertService,
    ) {
        this.homeworkInfo = new Object();
        this.route.queryParams.subscribe(params => {
            if (this.router.getCurrentNavigation().extras.state) {
                this.homeworkInfo = this.router.getCurrentNavigation().extras.state.details;
                this.school = this.router.getCurrentNavigation().extras.state.school;
                this.student_id = this.router.getCurrentNavigation().extras.state.student_id;
                this.student_name = this.router.getCurrentNavigation().extras.state.student;
                const filename = this.homeworkInfo.attachment ? this.homeworkInfo.attachment : null;
                const files = filename === null ? '' : filename;
                const name = files; // .replace(/ /g, '%20');
                const nameArr = name === null ? null : name.split(',');
                this.attachments = nameArr[0] !== '' ? nameArr : [];
                this.assets = `https://${this.school}.eduweb.co.ke/assets/posts/`;

            }
        })
    }

    ngOnInit() {

        return this.http.get(this.env.API_URL + 'getParticularHomework/' + this.school + '/' + this.student_id + '/' + this.homeworkInfo.homework_id).subscribe((response) => {
            console.log(response);
        });


    }
    async ionViewWillEnter() {
        await this.authService.checkFeed().then(
            feed => {
                console.log(feed);
                this.feed = feed;
            }
        )
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
            'pptx': 'application/vnd.openxmlformats-officedocument.presentationml.presentation'
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
                this.alertService.presentToast(e);
            });
    }
    async download(fileName, filePath) {
        await this.authService.presentLoading();
        // this.spinnerDialog.show();
        // const  fileExtn = fileName.split('.').reverse()[0];
        // const fileMIMEType = this.getMIMEtype(fileExtn);
        const url = encodeURI(filePath);
        this.fileTransfer = this.transfer.create();
        this.fileTransfer.download(url, this.file.dataDirectory + fileName, true).then((entry) => {
            // here logging our success downloaded file path in mobile.
            console.log('download completed: ' + entry.toURL());
            // open downloaded file
            // this.downloadFile = entry.toURL();
            this.open(entry.toURL());
        }).catch((error) => {
            this.authService.dismiss();
            // this.spinnerDialog.hide();
            // here logging an error.
            if (/\s/.test(fileName)) {
                this.alertService.presentToast('Download failed: File Name has spaces');
            }
            this.alertService.presentToast('Download failed: Attempting to open multiple documents');
            console.log('download failed: ' + JSON.stringify(error));
        });
    }


    formatDate(date) {
        return moment(date).format('MMM D, YYYY');
    }

    // add feed
    addfeed() {
        const navigationExtras: NavigationExtras = {
            state: {
                subject: this.homeworkInfo.subject_name + ' ' + this.homeworkInfo.title,
                studentName: this.student_name,
                student_id: this.student_id,
            }
        };
        this.router.navigate(['feedback'], navigationExtras);
    }
}
