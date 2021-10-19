import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationExtras } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import * as moment from 'moment';
import { MenuController, LoadingController } from '@ionic/angular';
import { SpinnerDialog } from '@ionic-native/spinner-dialog/ngx';
import { FileOpener } from '@ionic-native/file-opener/ngx';
import { FileTransfer, FileTransferObject } from '@ionic-native/file-transfer/ngx';
import { File } from '@ionic-native/file/ngx';
import { AlertService } from 'src/app/services/alert.service';
@Component({
  selector: 'app-list',
  templateUrl: 'list.page.html',
  styleUrls: ['list.page.scss']
})
export class ListPage implements OnInit {
  private selectedItem: any;
  data: any;
  school: any;
  public feedback: any;
  public feedbacks: any;
  public spin: any;
  loading: any;
  fake: any;
  attachments: any;
  assets: any;
  private fileTransfer: FileTransferObject;
  public items: Array<{ title: string; note: string; icon: string }> = [];
  constructor(
    private authService: AuthService,
    private route: ActivatedRoute,
    private router: Router,
    private transfer: FileTransfer,
    private file: File,
    private fileOpener: FileOpener,
    private spinnerDialog: SpinnerDialog,
    private alertService: AlertService,
    public loadingController: LoadingController) {
    this.spin = 0;
    this.fake = 0;
    setTimeout(() => {
      this.fake = 0;
    }, 3000);
    this.feedbacks = new Array();
    // this.route.queryParams.subscribe(params => {
    //   if (this.router.getCurrentNavigation().extras.state) {
    //     this.data = this.router.getCurrentNavigation().extras.state.details;

    //   }
    // });

    const user = localStorage.getItem('token');
    const u = JSON.parse(user);
    this.data = u;
    this.school = this.data.students[0].school;
    console.log(this.school);
    
    this.assets = `http://cdn2.eduweb.co.ke/homework_attachments/${this.school}/documents/`;
    console.log(this.assets);


  }

  async ngOnInit() {
    const user = await localStorage.getItem('token');
    const u = JSON.parse(user);
    this.data = u;
    this.school = this.data.students[0].school;
    


  }
  async ionViewWillEnter() {
    this.authService.presentLoading();
    /// this.spinnerDialog.show();
    // etTimeout(async () => await this.spinnerDialog.hide(), 3000);
    this.spin = 1;
    await this.authService.checkFeed().then(
      feed => {
        this.spin = 0;

        this.feedback = feed;
        
      }
    );

    await this.authService.news().subscribe(
      news => {
        this.spin = 0;
        this.authService.dismiss();
        console.log(news);
        this.data = news;
        this.feedbacks = this.data.data.feedback[this.school];
        console.log(this.feedbacks);
        // this.assets = `https://${this.school}.eduweb.co.ke/assets/posts/`

      }
    );

  }
  addfeed() {
    const navigationExtras: NavigationExtras = {};
    this.router.navigate(['feedback'], navigationExtras);
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
        this.alertService.presentToast(e);
      });
  }
  async download(fileName, filePath) {
    if (fileName.includes("mp4")){
      const uri =  filePath.replace("/documents/", "/videos/");

      await this.authService.presentLoading();
    // this.spinnerDialog.show();
    // const  fileExtn = fileName.split('.').reverse()[0];
    // const fileMIMEType = this.getMIMEtype(fileExtn);
    const url = encodeURI(uri);
    console.log(uri)
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
        // if (/\s/.test(fileName)) {
        //     this.alertService.presentToast('Download failed: File Name has spaces');
        // }
        // this.alertService.presentToast('Download failed: Attempting to open multiple documents');
        this.alertService.presentToast('error'+JSON.stringify(error));
        console.log('download failed: ' + JSON.stringify(error));
    });
    }else{
      await this.authService.presentLoading();
      // this.spinnerDialog.show();
      // const  fileExtn = fileName.split('.').reverse()[0];
      // const fileMIMEType = this.getMIMEtype(fileExtn);
      const url = encodeURI(filePath);
      console.log(filePath)
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
          // if (/\s/.test(fileName)) {
          //     this.alertService.presentToast('Download failed: File Name has spaces');
          // }
          // this.alertService.presentToast('Download failed: Attempting to open multiple documents');
          this.alertService.presentToast('error'+JSON.stringify(error));
          console.log('download failed: ' + JSON.stringify(error));
      });
    }
   
}
  formatDate(date) {
    return moment(date).format('MMM D, YYYY');
  }
  // add back when alpha.4 is out
  // navigate(item) {
  //   this.router.navigate(['/list', JSON.stringify(item)]);
  // }
}
