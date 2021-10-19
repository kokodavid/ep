import { Component, OnInit } from '@angular/core';
import { ModalController, NavController, MenuController, AlertController } from '@ionic/angular';
import { NgForm } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { AlertService } from 'src/app/services/alert.service';
import { Keyboard } from '@ionic-native/keyboard/ngx';
import { Device } from '@ionic-native/device/ngx';
import { UniqueDeviceID } from '@ionic-native/unique-device-id/ngx';
declare var SMSReceive: any;

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.page.html',
  styleUrls: ['./forgot-password.page.scss'],
})
export class ForgotPasswordPage implements OnInit {
  code: any;
  data: any;
  masks: any;
  phone: any;
  value: any;
  deviceid: any;
  constructor(
    //private keyboard: Keyboard,
    private modalController: ModalController,
    private authService: AuthService,
    private navCtrl: NavController,
    private alertCtrl: AlertController,
    private alertService: AlertService,
    private device: Device,
    private menu: MenuController,
    private uniqueDeviceID: UniqueDeviceID,
  ) {
    this.value = 0;
    this.menu.enable(false);
    this.code = 0;
  }

  ngOnInit() {

  }
  check(form: NgForm) {
    const x = form.value.phone;
    const ph = x.toString().replace(/\s/g, '');
    localStorage.setItem('phone', ph);
    this.authService.checkforgot(ph).subscribe(data => {
      this.data = data;
      console.log(this.data.response);
      if (this.data.response === 'Success') {
        this.code = 1;
        this.phone = form.value.phone;

        // const temp_code = String(this.data.temporary-code);

      } else if (this.data.status.includes("SMS resent")) {

        this.errmsg(this.data.message);
        this.phone = form.value.phone;
        this.code = 1;
      } else {
        this.errmsg(this.data.message);
      }
    },
      error => {
        this.authService.dismiss();
        this.errmsg("\tError!\nCould not send request, consult school.");
        console.log(error);
        // this.errmsg('Error occured while trying to reset your password  please try again later...');
        // console.log(error);
      },
    );
  }
  async errmsg(info) {
    const alert = await this.alertCtrl.create({
      message: info,
      subHeader: 'Info',
      buttons: ['Ok']
    });
    await alert.present();
  }
  runTimeChange(x) {
    // const e = this.value;
    let e = x.target.value;
    console.log(e.length);
    if (e.length === 4 || e.length === 8) {
      this.value = e + ' ';
      console.log(this.value);
    } else {
      this.value = this.value;
    }
  }


  verify(form: NgForm) {
    const x = this.phone;
    const ph = localStorage.getItem('phone');;

    this.authService.verifypassword(form.value.code, ph).subscribe(data => {
      this.data = data;
      if (this.data.response === 'Success') {
        console.log(form.value);
        this.authService.login(ph, form.value.code, this.deviceid).subscribe(res => {
          // console.log(data);
          this.data = res;
          if (this.data.response === 'success') {
            // this.alertService.presentToast('Loggedin  Successfully');
            if (ph) {
              const creds = {
                username: ph,
                password: form.value.code,
                device_user_id: this.deviceid,
              };
              localStorage.setItem('credentials', JSON.stringify(creds));
              this.dismissRegister();
            }
          } else {
            this.dismissRegister();
          }
        },
          error => {
            console.log(error);
          },
          () => {
            this.navCtrl.navigateRoot('/dashboard');
          }
        );

      }
    },
      error => {
        // this.dismissLogin();
        console.log(error);
      },
    );

  }
  register(form: NgForm) {
    if (form.value.pass === form.value.repass) {
      console.log(form.value);
      this.authService.registerPwd(form.value.pass, this.phone).subscribe(data => {
        this.data = data;
        if (this.data.response === 'sucesss') {
          this.dismissRegister();
          // this.code = 2;
          // this.phone = form.value.phone;
        } else { }
      },
        error => {
          // this.dismissLogin();
          console.log(error);
        },
        // () => {
        //   //this.dismissLogin();
        //   this.navCtrl.navigateRoot('/dashboard');
        // }
      );
    } else {

    }
  }
  resend() {
    this.authService.resend(this.phone).subscribe(data => {
      this.data = data;
      if (this.data.response === 'success') {
        this.code = 1;
        this.errmsg(this.data.response);
      } else {
        this.errmsg(this.data.response);
        this.code = 0;
      }
    })

  }
  enterCode() {
    if (localStorage.getItem('phone') !== null) {
      this.code = 1;
    } else {
      this.authService.presentAlert1('Phone number not recorded, request code again.')
      this.code = 0;
    }

  }
  numberWithSpaces(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
  }
  dismissRegister() {
    this.modalController.dismiss();
  }
}
