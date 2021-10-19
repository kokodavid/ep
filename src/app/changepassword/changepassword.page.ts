import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationExtras } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { NgForm } from '@angular/forms';
import { AlertService } from 'src/app/services/alert.service';
import { ModalController, NavController } from '@ionic/angular';


@Component({
  selector: 'app-changepassword',
  templateUrl: './changepassword.page.html',
  styleUrls: ['./changepassword.page.scss'],
})
export class ChangepasswordPage implements OnInit {
  data: any;
  response: any;
  type: any;
  newtype: any;
  showPasswordText: any;
  showNewText: any;
  shortPass: any;
  sameAsOld: any;
  notSame: any;
  isEmpty: any;
  constructor(
    private authService: AuthService,
    private route: ActivatedRoute,
    private router: Router,
    private navCtrl: NavController,
    private alertService: AlertService) {
    // this.feedback = new Array();
    this.route.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation().extras.state) {
        this.data = this.router.getCurrentNavigation().extras.state.details;
        console.log(this.data);
        // t his.school = this.data.school;
      }
    });
    this.showPasswordText = 0;
    this.showNewText = 0;
    this.type = 'password';
    this.newtype = 'password';
    this.shortPass = false;
    this.sameAsOld = false;
    this.notSame = false;
    this.isEmpty = false;
  }

  ngOnInit() {

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
  managenewPassword() {
    if (this.showNewText === 0) {
      this.showNewText = 1;
      this.newtype = 'text';
      // console.log(this.showPasswordText);
    } else if (this.showNewText === 1) {
      this.showNewText = 0;
      this.newtype = 'password';
      // console.log(this.showPasswordText);

    }
  }
  reset(form: NgForm) {
    this.authService.presentLoading();
    if (form.value.newpassword.length < 8 || !/\d/.test(form.value.newpassword)) {
      this.authService.dismiss();
      this.shortPass = true;
    } else if (form.value.oldpass === form.value.newpassword) {
      this.authService.dismiss();
      this.sameAsOld = true;
    } else if (form.value.newpassword !== form.value.repassword) {
      this.authService.dismiss();
      this.notSame = true;
    } else {
      this.shortPass = false;
      this.sameAsOld = false;
      this.notSame = false;
      this.authService.reset(form.value.oldpass, form.value.newpassword).subscribe(
        data => {
          this.response = data;
          console.log(this.response);
          if (this.response.response === 'success') {
            this.authService.dismiss();
            this.alertService.presentToast('Password changed successfully...');
            this.navCtrl.navigateRoot('/dashboard');
          } else {
            this.authService.dismiss();
            this.authService.presentAlert1(this.response.data);
          }
        },
        error => {
          this.authService.dismiss();
          console.log(error);
        },
        () => {
        }
      );
      
    }
  }

}
