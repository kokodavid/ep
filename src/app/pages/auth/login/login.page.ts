import { Component, OnInit } from '@angular/core';
import {AlertController, ModalController, NavController, MenuController } from '@ionic/angular';
import { PhonePage } from '../phone/phone.page';
import { ForgotPasswordPage } from '../forgot-password/forgot-password.page';
import { NgForm } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { AlertService } from 'src/app/services/alert.service';
import { SpinnerDialog } from '@ionic-native/spinner-dialog/ngx';
import { NgLocalization } from '@angular/common';
import { ToastController } from '@ionic/angular';
import { UniqueDeviceID } from '@ionic-native/unique-device-id/ngx';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { EnvService } from '../../../services/env.service';
import { Device } from '@ionic-native/device/ngx';
import { Plugins } from '@capacitor/core';
import { Router, NavigationExtras, ActivatedRoute } from '@angular/router';


const { SplashScreen } = Plugins;
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  componentDidLoad() {
    SplashScreen.hide();
  }
  public showPasswordText: any;
  public type: any;
  data: any;
  dat: any;
  user: any;
  pass: any;
  remember: any;
  checked: any;
  students: any;
  resources: any;
  constructor(
    private modalController: ModalController,
    private authService: AuthService,
    private navCtrl: NavController,
    private alertService: AlertService,
    private menu: MenuController,
    private spinnerDialog: SpinnerDialog,
    public toastController: ToastController,
    private uniqueDeviceID: UniqueDeviceID,
    private http: HttpClient,
    private env: EnvService,
    private device: Device,
    private router: Router,
    private alertCtrl: AlertController,
  ) {
    this.menu.enable(false);
    this.showPasswordText = 0;
    this.checked = 1;
    this.dat = {};
    const creds = localStorage.getItem('credentials');
    const c = JSON.parse(creds);
    if (c === null) {
      this.dat = {};
    } else {
      this.dat = c;
    }

  }
  ngOnInit() {
    this.type = 'password';
  }

  managePassword() {
    if (this.showPasswordText === 0) {
      this.showPasswordText = 1;
      this.type = 'text';
      // console.log(this.showPasswordText);
    } else if (this.showPasswordText === 1) {
      this.showPasswordText = 0;
      this.type = 'password';
      // console.log(this.showPasswordText);

    }
  } 
  check() {
    const creds = localStorage.getItem('credentials');
    const c = JSON.parse(creds);
    if (c === null) {
      this.dat = {};
    } else {
      this.dat = c;
    }
    console.log(c);
    // console.log(stat);
    if (this.checked === 0) {
      this.checked = 1;
      this.pass = this.dat.password ? this.dat.password : '';
      this.user = this.dat.username ? this.dat.username : '';
      this.showPasswordText = 0;
      this.type = 'password';
    } else if (this.checked === 1) {
      this.checked = 0;
      this.showPasswordText = 0;
      this.type = 'password';
      this.pass = this.dat.password;
      this.user = this.dat.username;

    }
    console.log(this.pass);
    console.log(this.checked);
  }

  // Dismiss Login Modal
  dismissLogin() {
    this.modalController.dismiss();
  }
  loader() {
    this.spinnerDialog.hide();
  }
  async phone() {
    this.authService.presentLoading();
    // this.spinnerDialog.show();
    // setTimeout(async () => this.spinnerDialog.hide(), 800);
    const phoneModal = await this.modalController.create({
      component: PhonePage
    });
    this.authService.dismiss();
    return await phoneModal.present();
  }
  async forgot() {
    this.authService.presentLoading();
    // this.spinnerDialog.show();
    // setTimeout(async () => this.spinnerDialog.hide(), 800);
    const forgotModal = await this.modalController.create({
      component: ForgotPasswordPage
    });
    this.authService.dismiss();
    return await forgotModal.present();
  }
    // alert any info
    async presentAlert2(info) {
      const alert = await this.alertCtrl.create({
        message: info,
        subHeader: 'Info',
        buttons: ['Ok'],
      });
      await alert.present();
    }

  login(form: NgForm) {
    // this.uniqueDeviceID.get()
    // .then((uuid: any) => {
    //   localStorage.setItem('device_id', uuid)
    // }
    // ).catch((error: any) => console.log(error));
  
    // console.log(form.value);
    var device_id = localStorage.getItem('id');
    // if (device_id != null && device_id.length>30) {
      this.authService.login(form.value.username, form.value.password, device_id).subscribe(data => {
        this.data = data;
        console.log(this.data);
        if (this.data.response === 'success') {
          this.students = this.data.data.students;
          // console.log(JSON.stringify(this.students));
          if (this.students.length === 0) {
            console.log('no students records to show');
          } else {
            // this.alertService.presentToast('Loggedin  Successfully');
            const creds = {
              username: form.value.username,
              password: form.value.password,
              device_user_id: device_id,
            };
            localStorage.setItem('credentials', JSON.stringify(creds));
            const navigationExtras: NavigationExtras = {
              state: {
                details: this.data.data.resources,
              }
            };
            this.router.navigate(['dashboard'], navigationExtras);
          }
        }else {
          this.presentAlert2(this.data.data);
          // console.log('success but no redirection');

        }
      },
        error => {
          this.authService.dismiss();
          console.log(error);
          this.presentAlert2("Inactive user. Please contact respective school for more information.");
        },
        () => {
          //this.navCtrl.navigateRoot('/dashboard');
        }
      );
    // }else{
    //   this.authService.presentAlert1("An error occured. Kindly restart the app and try again.\nIf it persists make sure you are using latest version and call school.")
    // }

  }
}

