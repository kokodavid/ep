import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { SessionService } from 'src/app/services/session.service';
import { ActivatedRoute, Router, NavigationExtras } from '@angular/router';
import * as moment from 'moment';
import { ThrowStmt } from '@angular/compiler';
import { DomSanitizer, SafeResourceUrl } from "@angular/platform-browser";
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { Device } from '@ionic-native/device/ngx'
import { FileOpener } from '@ionic-native/file-opener/ngx';
import { FileTransfer, FileTransferObject } from '@ionic-native/file-transfer/ngx';
import { File } from '@ionic-native/file/ngx';
import { AlertService } from 'src/app/services/alert.service';


@Component({
    selector: 'app-resources',
    templateUrl: './resources.page.html',
    styleUrls: ['./resources.page.scss']
})

export class ResourcesPage implements OnInit {
    data: any;
    feedback: any;
    fake: any;
    student: any;
    assets: any;
    resources: any;
    school: any;
    value: any;
    vidUrl: SafeResourceUrl;
    comId: any;
    platform: any;
    link: any;
    private fileTransfer: FileTransferObject;

    constructor(
        private authService: AuthService,
        private sessionService: SessionService,
        private route: ActivatedRoute,
        private router: Router,
        private domSanitizer: DomSanitizer,
        private iap: InAppBrowser,
        private device: Device,
        private transfer: FileTransfer,
        private file: File,
        private fileOpener: FileOpener,
        private alertService: AlertService,
    ) {
        this.resources = new Array();
        this.fake = 1;
        setTimeout(() => {
            this.fake = 0;
        }, 6000);
        this.sessionService.sessionTimeOut();
        this.route.queryParams.subscribe(params => {
            if (this.router.getCurrentNavigation().extras.state) {
                this.student = this.router.getCurrentNavigation().extras.state.details;
                this.value = this.router.getCurrentNavigation().extras.state.resource;
                this.school = this.student.school;
                this.assets = this.student.student_image === null ? 1 :
                    `https://${this.student.school}.eduweb.co.ke/assets/students/${this.student.student_image}`;
                this.link = `https://cdn.eduweb.co.ke/resources/${this.school}/documents/`;

                // https://cdn.eduweb.co.ke/resources/kingsinternational/documents/SOCIAL%20STUDIES%20HOLYDAY%20HOMEWORK%20STD%207%202020.docx
  
            }

        });

    }
    ngOnInit() {
        this.platform = this.device.platform;
        console.log(this.platform)

    }
    async ionViewWillEnter() {
        await this.authService.checkFeed().then(
            feed => {
                this.feedback = feed;
            }
        )
        await this.authService.getResources(this.student.school, this.student.student_id).subscribe(
            resource => {
                this.data = resource;
                this.resources = this.data.data !== undefined ? this.data.data : [];
                // console.log(JSON.stringify(this.resources));
                var vid_id = this.resources.map(a => a.vimeo_path);
                this.resources.forEach((item, index) => {
                    // this.vidUrl = this.domSanitizer.bypassSecurityTrustResourceUrl(`https://player.vimeo.com/${video.vimeo_path}`);
                    // let sanitized_path = this.domSanitizer.bypassSecurityTrustResourceUrl(`https://player.vimeo.com/video/${item.vimeo_path}`);
                    let mypath = `https://player.vimeo.com/video/${item.vimeo_path}`;
                    this.vidUrl = this.domSanitizer.bypassSecurityTrustResourceUrl(mypath);
                    // let sanitized_path : SafeResourceUrl;
                    item['vimeo_path_full'] = this.vidUrl

                });

            }
        );

        // this.resources = this.value[this.student.school] !== undefined ? this.value[this.student.school] : [];
        // console.log(JSON.stringify(this.resources));

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
        // if(/\s/.test(filePath)){
        //     const shortName = filePath.split(' ').join('%');
        //     console.log(shortName);

        //     await this.authService.presentLoading();
        //     // this.spinnerDialog.show();
        //     // const  fileExtn = fileName.split('.').reverse()[0];
        //     // const fileMIMEType = this.getMIMEtype(fileExtn);
        //     const url = encodeURI(shortName);
        //     this.fileTransfer = this.transfer.create();
        //     this.fileTransfer.download(url, this.file.dataDirectory + shortName, true).then((entry) => {
        //         // here logging our success downloaded file path in mobile.
        //         console.log('download completed: ' + entry.toURL());
        //         // open downloaded file
        //         // this.downloadFile = entry.toURL();
        //         this.open(entry.toURL());
        //     }).catch((error) => {
        //         this.authService.dismiss();
        //         // this.spinnerDialog.hide();
        //         // here logging an error.
        //         if (/\s/.test(fileName)) {
        //             this.alertService.presentToast('Download failed: File Name has spaces');
        //         }
        //         this.alertService.presentToast('Download failed: Attempting to open multiple documents');
        //         console.log('download failed: ' + JSON.stringify(error));
        //     });
        // }else{
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
                this.alertService.presentToast('Download failed: File not found' );
                console.log('download failed: File not found');
            });
        // }
       
    }



    formatDate(date) {
        return moment(date).format('MMM D, YYYY');
    }
    addfeed() {
        const navigationExtras: NavigationExtras = {};
        this.router.navigate(['feedback'], navigationExtras);
    }
}
