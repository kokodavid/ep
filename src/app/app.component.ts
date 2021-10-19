import { NetworkService, ConnectionStatus } from './services/network.service';
import { OfflineManagerService } from './services/offline-manager.service';
import { Component, NgZone, OnInit } from '@angular/core';
import { Platform, NavController, AlertController, MenuController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { AuthService } from './services/auth.service';
import { AlertService } from './services/alert.service';
import { Router, NavigationExtras } from '@angular/router';
import { OneSignal } from '@ionic-native/onesignal/ngx';
import { SpinnerDialog } from '@ionic-native/spinner-dialog/ngx';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AppVersion } from '@ionic-native/app-version/ngx';
import { DeviceUUID } from 'device-uuid';
import { EnvService } from './services/env.service';
import { Device } from '@ionic-native/device/ngx';
import { UniqueDeviceID } from '@ionic-native/unique-device-id/ngx';


// console.log(uuid);
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})

export class AppComponent implements OnInit {
  news: any[];
  students: any[];
  data: any;
  userinfo: any;
  school: any;
  assets: any;
  deviceinfo: any;
  feedback: any;
  info: any;
  version: any;
  versioncode: any;
  os: any;
  constructor(
    private appVersion: AppVersion,
    private spinnerDialog: SpinnerDialog,
    private menu: MenuController,
    private zone: NgZone,
    private router: Router,
    private platform: Platform,
    private http: HttpClient,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private authService: AuthService,
    private env: EnvService,
    private navCtrl: NavController,
    private alertService: AlertService,
    private oneSignal: OneSignal,
    private alertCtrl: AlertController,
    private offlineManager: OfflineManagerService,
    private networkService: NetworkService,
    private device: Device,
    private uniqueDeviceID: UniqueDeviceID,
  ) {
    this.appVersion.getAppName();
    this.appVersion.getPackageName();
    this.versioncode = this.appVersion.getVersionCode();
    this.version = this.version = this.appVersion.getVersionNumber();
    console.log(this.version);
    this.students = new Array();
    this.initializeApp();
    // this.getSession();
    // this.authService.checkFeed().then(
    //   feed => {
    //    // console.log(feed);
    //    this.feedback = feed;
    //   });


  }
  ngOnInit() {
    // this.getSession();

  }
  ionViewWillEnter() {
    // this.zone.run(() => {
    //   // console.log('force update the screen', uuid);
    // });
    // this.getSession();
  }
  initializeApp() {
    // this.splashScreen.show();
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      // this.statusBar.overlaysWebView(true);
      // set status bar to white
      this.statusBar.backgroundColorByHexString('#397C49');
      // Commenting splashScreen Hide, so it won't hide splashScreen before auth check
      this.hideSplash();
      this.networkService.onNetworkChange().subscribe((status: ConnectionStatus) => {
        if (status === ConnectionStatus.Online) {
          // this.offlineManager.checkForEvents().subscribe();
        }
      });
      // console.log(this.students);
      this.setupPush();

      this.authService.getToken();
      this.getSession();
      this.authService.checkFeed().then(
        feed => {
          // console.log(feed);
          this.feedback = feed;
        });

    });
  }

  // When Logout Button is pressed 
  logout() {
    this.authService.presentLoading();
    // localStorage.removeItem('token');
    // this.navCtrl.navigateRoot('/login');
    // this.presentLoading();
    // setTimeout(() => this.spinnerDialog.hide(), 2000);
    const formData = new FormData();
    // localStorage.removeItem('token');
    formData.append('parent_id', this.userinfo.parent_id);
    formData.append('device_user_id', '');
    this.http.post(this.env.API_URL + 'updateDeviceUserId', formData).subscribe((update) => {
      // console.log(update);
      this.info = update;
      if (this.info.response === 'success') {
        localStorage.removeItem('token');
        this.authService.dismiss();
        // this.alertService.presentToast('Logged out succesfully');
        // this.getSession();
        this.navCtrl.navigateRoot('/login');
        // this.spinnerDialog.hide();
      } else {
        this.authService.dismiss();
        localStorage.removeItem('token');

      }
    }
    );
  }
  hideSplash() {
    if (this.splashScreen) {
      setTimeout(() => {
        this.splashScreen.hide();
      }, 2000);
    }
  }

  async presentLoading() {
    // this.spinnerDialog.show();
  }
  toggleMenu() {
    this.menu.close();
    // this.menu.toggle(); // Add this method to your button click function
  }
  getSession() {
    this.authService.checkFeed().then(
      feed => {
        // console.log(feed);
        this.feedback = feed;
      });
    // console.log('here');
    if (localStorage.getItem('token') === null) {
      this.navCtrl.navigateRoot('/login');
    } else {
      const user = localStorage.getItem('token');
      const u = JSON.parse(user);
      this.userinfo = u;
      // console.log(u);
      if (this.userinfo === null) {
        this.router.navigate(['/login']);
      } else {
        this.students = this.userinfo.students === undefined ? [] : this.userinfo.students;
        this.school = this.students[0] === undefined ? [] : this.students[0].school;
        this.assets = `https://${this.school}.eduweb.co.ke/assets/students/`;
        // console.log(this.students, this.assets);
      }
    }
  }
  // student info
  studentData(student) {
    // console.log(student);
    const navigationExtras: NavigationExtras = {
      state: {
        details: student,
      }
    };
    this.router.navigate(['home'], navigationExtras);
  }
  mealMenu() {
    const navigationExtras: NavigationExtras = {
      state: {
        details: this.school,
      }
    }
    this.router.navigate(['menu'], navigationExtras);
  }
  feedbacks() {
    const user = localStorage.getItem('token');
    const u = JSON.parse(user);
    this.userinfo = u;
    // console.log(this.userinfo);
    const navigationExtras: NavigationExtras = {
      state: {
        details: u,
      }
    };
    this.router.navigate(['feed'], navigationExtras);
  }

  contact() {
    const navigationExtras: NavigationExtras = {
      state: {
        details: this.userinfo,
      }
    };
    this.router.navigate(['contact'], navigationExtras);
  }

  change() {
    // console.log(this.userinfo);
    const navigationExtras: NavigationExtras = {
      state: {
        details: this.userinfo,
      }
    };
    this.router.navigate(['changepassword'], navigationExtras);
  }
  comingSoon() {
    this.alertService.presentToast("Under construction, coming soon");
  }
  // push notifications
  setupPush() {
    // I recommend to put these into your environment.ts
    this.oneSignal.startInit('b6987dd6-80c8-40da-83e0-3ada5d55876c', '839327624940');
    this.oneSignal.inFocusDisplaying(this.oneSignal.OSInFocusDisplayOption.None);
    // Notifcation was received in general
    this.oneSignal.handleNotificationReceived().subscribe(data => {
      const msg = data.payload.body;
      const title = data.payload.title;
      const additionalData = data.payload.additionalData;
      this.showAlert(title, msg, additionalData.task);
    });
    // Notification was really clicked/opened
    this.oneSignal.handleNotificationOpened().subscribe(data => {
      // Just a note that the data is a different place here!
      const additionalData = data.notification.payload.additionalData;
      this.showAlert('Notification opened', 'You already read this before', additionalData.task);
    });
    this.oneSignal.endInit();
    this.oneSignal.getIds().then((id) => {
      var identity = id.userId;
      localStorage.setItem('id', identity);
    });
  }
  async showAlert(title, msg, task) {
    // console.log(title, msg, task);
    const alert = await this.alertCtrl.create({
      header: title,
      subHeader: msg,
      buttons: [
        {
          text: `Action: ${task}`,
          handler: () => {
            // E.g: Navigate to a specific screen
          }
        }
      ]
    });
    alert.present();
  }
}