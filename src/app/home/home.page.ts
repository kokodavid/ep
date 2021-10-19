import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationExtras } from '@angular/router';
import { Platform, NavController, AlertController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth.service'
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  data: any;
  data1: any;
  assets: any;
  student: any;
  school: any;
  resource: any;
  terms: any;
  class_history: any;
  class_id: any;
  term_ids: any;
  reportcards: any;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private navCtrl: NavController,
    private authService: AuthService,

  ) {
    this.terms = new Array();
    this.class_history = new Array();
    this.class_id = new Array();
    this.term_ids = new Array();
    this.reportcards = new Array();
    this.route.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation().extras.state) {
        this.data = this.router.getCurrentNavigation().extras.state.details;
        this.resource = this.router.getCurrentNavigation().extras.state.resources;
        if (this.data === null || this.data === undefined) {
          this.navCtrl.navigateRoot('/dashboard');
        } else {
          this.school = this.data.school;
        
          this.assets = `https://${this.school}.eduweb.co.ke/assets/students/`;
        }
      }
    });
  }
  ngOnInit() {
    
  }
  posts(student) {
    // console.log(student);
    const navigationExtras: NavigationExtras = {
      state: {
        details: student,
      }
    };
    this.router.navigate(['blog'], navigationExtras);
  }
  details(student) {
    // console.log(student);
    const navigationExtras: NavigationExtras = {
      state: {
        details: student,
      }
    };
    this.router.navigate(['info'], navigationExtras);
  }
  fees(student) {
    // console.log(student);
    const navigationExtras: NavigationExtras = {
      state: {
        details: student,
      }
    };
    this.router.navigate(['fees'], navigationExtras);
  }
  onlyUnique(value, index, self) {
    return self.indexOf(value) === index;
  }
  grades(student) {
    //term ids
    // this.term_ids = [];
    // this.class_id = [];
    // for (var c of this.terms) {
    //   let t = c.term_id;
    //   let s = c.class_id;
    //   this.term_ids.push(t)
    //   this.class_id.push(s)
    // // }
    // // var x = this.class_id.filter(this.onlyUnique);
    // // var y = this.term_ids.filter(this.onlyUnique);
    const navigationExtras: NavigationExtras = {
      state:{
        details:student,
      }
    };   
    this.router.navigate(['grading'], navigationExtras);
  }

  cbcgrades(student) {
    //term ids
    // this.term_ids = [];
    // this.class_id = [];
    // for (var c of this.terms) {
    //   let t = c.term_id;
    //   let s = c.class_id;
    //   this.term_ids.push(t)
    //   this.class_id.push(s)
    // // }
    // // var x = this.class_id.filter(this.onlyUnique);
    // // var y = this.term_ids.filter(this.onlyUnique);
    const navigationExtras: NavigationExtras = {
      state:{
        details:student,
      }
    };   
    this.router.navigate(['cbcgrading'], navigationExtras);
  }
  analytics(student){
    const navigationExtras: NavigationExtras = {
      state:{
        details: student,
      }
    }
    this.router.navigate(['analytics'],navigationExtras);
  }
  attendance(student){
    const navigationExtras : NavigationExtras ={
      state:{
        details: student,
      }
    }
    console.log(student)
    this.router.navigate(['attendance'], navigationExtras);
  }
  albums(student) {
    // console.log(student);
    const navigationExtras: NavigationExtras = {
      state: {
        details: student,
      }
    };
    this.router.navigate(['gallery'], navigationExtras);
  }
  resources(student) {
    const navigationExtras: NavigationExtras = {
      state: {
        details: student,
        resource: this.resource
      }
    };
    this.router.navigate(['resources'], navigationExtras);
  }
}