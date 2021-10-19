import { Directive, Attribute, Component, OnInit } from '@angular/core';
import { ModalController, NavController, MenuController } from '@ionic/angular';
import { NgForm } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { AlertService } from 'src/app/services/alert.service';
import { Device } from '@ionic-native/device/ngx';
import { UniqueDeviceID } from '@ionic-native/unique-device-id/ngx';


@Component({
  selector: 'app-phone',
  templateUrl: './phone.page.html',
  styleUrls: ['./phone.page.scss'],
})
export class PhonePage implements OnInit {
  code: any;
  data: any;
  masks: any;
  phone: any;
  value: any;
  deviceid: any;
  showPasswordText: any;
  type: any;
  phoneNumber: any = '';
  constructor(
    private modalController: ModalController,
    private authService: AuthService,
    private navCtrl: NavController,
    private alertService: AlertService,
    private menu: MenuController,
    private device: Device,) {
    this.menu.enable(false);
    this.value = 0;
    this.code = 0;
    this.showPasswordText = 0;
    this.masks = {
      phoneNumber: ['(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/],
      // cardNumber: [/\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/],
      // cardExpiry: [/[0-1]/, /\d/, '/', /[1-2]/, /\d/],
      // orderCode: [/[a-zA-z]/, ':', /\d/, /\d/, /\d/, /\d/],
    };
  }

  ngOnInit() {
    this.type = 'password';
  }

  check(form: NgForm) {
    const x = form.value.phone;
    const ph = x.toString().replace(/\s/g, '');
    localStorage.setItem("phone",ph);
    // console.log(ph);
    this.authService.check(ph).subscribe(data => {
      this.data = data;
      console.log(this.data);
      // console.log(form.value.phone, this.data.response);
      if (this.data.response === 'Success') {
        this.code = 1;
        console.log(this.code);
        this.phone = form.value.phone;
      }
    },
      error => {
        this.authService.dismiss();
        this.authService.presentAlert1(error);
        console.log(error);
      },
      // () => {
      //   //this.dismissLogin();
      //   this.navCtrl.navigateRoot('/dashboard');
      // }
    );

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

  enterCode(){
    
    if(localStorage.getItem("phone") !== null){
      this.code=1;
    }else{
      this.authService.presentAlert1("Phone number not recorded. Kindly register again.")
    }
  }
  verify(form: NgForm) {
    const x = this.phone;
    const ph = localStorage.getItem("phone");
    if(ph !== null){
    this.authService.verify(ph, form.value.code).subscribe(data => {
      this.data = data;
      console.log(this.data);
      if (this.data.response === 'success') {
        this.code = 2;
        this.phone = this.phone;
      }
    },
      error => {
        this.authService.presentAlert1(this.data.message);
        console.log(error);
      },
    );
    }else{
      this.authService.presentAlert1("Phone number was not recorded. Kindly register again");
    }
  }
  runTimeChange(x) {
    // const e = this.value;
    let e = x.target.value;
    if (e.length === 4 || e.length === 8) {
      this.value = e + ' ';
    } else {
      this.value = this.value;
    }
    // ToDo
  }
  register(form: NgForm) {
    this.deviceid = localStorage.getItem('id');
    this.phone  = localStorage.getItem('phone');
    const x = this.phone;
    const ph = x.toString().replace(/\s/g, '');
    if(form.value.pass.length < 8 || !/\d/.test(form.value.pass)){
      this.authService.presentAlert1("Password needs to be at least 8 characters long and include a digit.")
    }else if(form.value.pass !== form.value.repass){
      this.authService.dismiss();
      this.authService.presentAlert1("Passwords do not match");
    }else if (form.value.pass === form.value.repass) {
      this.authService.registerPwd(form.value.pass, ph).subscribe(data => {
        this.data = data;
        if (this.data.response === 'success') {
          this.alertService.presentToast('Registered Successfully you will now be logged in automatically.');
          this.login(ph, form.value.pass, this.deviceid);
        }
      },
        error => {
          console.log(error);
        },
        // () => {
        //   this.navCtrl.navigateRoot('/dashboard');
        // }
      );
    }  else {
      
    }

  }
  login(ph, pass, deviceid) {
    this.authService.login(ph, pass, deviceid).subscribe(data => {
      this.data = data;
      if (this.data.response === 'success') {
        // this.alertService.presentToast('Loggedin  Successfully');
        const creds = {
          username: ph,
          password: pass
        };
        localStorage.setItem('credentials', JSON.stringify(creds));
      } else {

      }
    },
      error => {
        console.log(error);
      },
      () => {
        this.dismissRegister();
        this.navCtrl.navigateRoot('/dashboard');
      }
    );
  }
  dismissRegister() {
    this.modalController.dismiss();
  }
}
