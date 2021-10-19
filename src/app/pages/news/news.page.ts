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



@Component({
  selector: 'app-news',
  templateUrl: './news.page.html',
  styleUrls: ['./news.page.scss'],
})
export class NewsPage implements OnInit {
  newsinfo: any;
  attachments: any;
  school: any;
  assets: any;
  downloadFile: any;
  date: any;
  safeUrl: any;
  errorString: any;
  response: any;
  vidUrl: any;
  vid_id: any;
  student_id: any;
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
    private platform:Platform,
    // private player: Player
  ) {
    this.newsinfo = new Object();
    this.sessionService.sessionTimeOut();

    this.route.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation().extras.state) {
        this.newsinfo = this.router.getCurrentNavigation().extras.state.details;
        this.school = this.router.getCurrentNavigation().extras.state.school;
        this.student_id = this.router.getCurrentNavigation().extras.state.student_id;
        if (this.newsinfo === null || this.newsinfo === undefined) {
          this.navCtrl.navigateRoot('/dashboard');
        } else {
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

  async download(fileName, filePath) {
   this.authService.presentLoading();
    let path = null;
    if(this.platform.is('ios')){
      path = this.file.documentsDirectory;
    }else{
      path = this.file.dataDirectory;
    }
    const url = encodeURI(filePath);

    const trans = this.transfer.create();

    trans.download(url,path+fileName,true).then(entry=>{
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
    return moment(date).format('MMM D, YYYY');

  }
  filterdate(date) {
    return moment(date).year;
  }
}
