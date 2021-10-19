import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationExtras } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { SessionService } from 'src/app/services/session.service';
@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {
  student: any;
  assets: any;
  data: any;
  gallerydata: any;
  galleries: any[];
    constructor(
      private route: ActivatedRoute, 
      private router: Router, 
      private authService: AuthService, 
      private sessionService: SessionService) {
      this.galleries = new Array();
      this.route.queryParams.subscribe(params => {
        if (this.router.getCurrentNavigation().extras.state) {
          this.gallerydata = this.router.getCurrentNavigation().extras.state.details;
          this.student = this.router.getCurrentNavigation().extras.state.student;
          console.log(this.gallerydata);
          const filename = this.gallerydata.attachment ? this.gallerydata.attachment:null ;
          const files = filename === null ? '' :  filename;
          const name = files.replace(/ /g, '%20');
          const nameArr = name === null ? null : name.split(',');
          const nameArr1 = nameArr[0] !== '' ? nameArr : [];
          console.log(nameArr1);
          this.galleries = nameArr1.map((v, i) => {
            this.assets = `https://${this.student.school}.eduweb.co.ke/assets/posts/${v}`;
            return { id: i, src: this.assets };
            });
          console.log("another one "+JSON.stringify(this.galleries));
      }
      });
      this.sessionService.sessionTimeOut();
  }

  ngOnInit() {
  }
  // async ionViewWillEnter() {
  //   // await this.authService.albums(this.student.school, this.student.student_id).subscribe(
  //   //   news => {
  //   //    // console.log(news);
  //   //     this.data = news;
  //   //    // this.feedback = this.data.data.feedback[this.school];
  //   //   }
  //   // );
  // }
}
