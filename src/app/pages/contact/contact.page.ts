import { Component, NgZone, OnInit } from '@angular/core';
import { Router, NavigationExtras, ActivatedRoute } from '@angular/router';
import { from } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';
import {AlertService} from 'src/app/services/alert.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.page.html',
  styleUrls: ['./contact.page.scss'],
})
export class ContactPage implements OnInit {

  resources: any;
  school_subdomain: string;
  school_info: any;
  data: any;
  header: any;
  banking_details: any;
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private authService: AuthService,
    private alertService: AlertService,
  ) {
    this.school_info = new Object();
    this.banking_details = new Array();
    this.route.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation().extras.state) {
        this.resources = this.router.getCurrentNavigation().extras.state.details;
        this.school_subdomain = this.resources.students[0].school_subdomain;
      }
    });

  }

  ngOnInit() {

  }

  async ionViewWillEnter() {
    await this.authService.schoolInfo(this.school_subdomain).subscribe(
      info => {
        this.data = info;
        this.school_info = this.data.data;
        this.banking_details = this.school_info.banking_details === undefined ? [] : this.school_info.banking_details;
        this.header = `https://${this.school_subdomain}.eduweb.co.ke/assets/schools/${this.school_info.letterhead}`;
      });
  }

  copyText(accNo: any){
    const selBox = document.createElement('textarea');
    selBox.style.position = 'fixed';
    selBox.style.left = '0';
    selBox.style.top = '0';
    selBox.style.opacity = '0';
    selBox.innerText = accNo;
    document.body.appendChild(selBox);
    selBox.focus();
    selBox.select();
    document.execCommand('copy');
    document.body.removeChild(selBox);
    this.alertService.presentToast('Account number copied to clipboard');
    this.authService.toastController
  }
}

