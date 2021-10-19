import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { ActivatedRoute, Router, NavigationExtras } from '@angular/router';
import * as moment from 'moment';
import { SessionService } from 'src/app/services/session.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.page.html',
  styleUrls: ['./gallery.page.scss'],
})
export class GalleryPage implements OnInit {
  segment: any;
  data: any;
  data1: any;
  posts: any;
  galleries: any;
  student: any;
  school: any;
  assets: any;
  feedback: any;
  fake: any;
  constructor(
    private authService: AuthService,
    private route: ActivatedRoute,
    private router: Router,
    private session: SessionService) {
    this.segment = 'summary';
    this.galleries = new Array();
    this.fake = 1;
    setTimeout(() => {
      this.fake = 0;
    }, 3000);
    this.session.sessionTimeOut();
    this.route.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation().extras.state) {
        this.student = this.router.getCurrentNavigation().extras.state.details;
        this.assets = this.student.student_image === null ? 1 :
          `https://${this.student.school}.eduweb.co.ke/assets/students/${this.student.student_image}`;
      }
    });
  }

  ngOnInit() {
  }
  async ionViewWillEnter() {
    await this.authService.checkFeed().then(
      feed => {
        console.log(feed);
        this.feedback = feed;
      }
    );
    await this.authService.gallery(this.student.school, this.student.student_id).subscribe(
      galleries => {
        this.data1 = galleries;
        this.galleries = this.data1.data === undefined ? [] : this.data1.data;
      }
    );
  }
  segmentChanged(ev: any) {
    // console.log('Segment changed', ev);
  }
  formatDate(date) {
    return moment(date).format('MMM D, YYYY');
  }
  addfeed() {
    const navigationExtras: NavigationExtras = {};
    this.router.navigate(['feedback'], navigationExtras);
  }
  albums(album) {
    console.log(album);
    const navigationExtras: NavigationExtras = {
      state: {
        details: album,
        student: this.student,
      }
    };
    this.router.navigate(['details'], navigationExtras);
  }
  // format(date) {
  //   return moment(date).format('MMM D, YYYY');
  // }
}
