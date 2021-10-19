import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AlertController, NavController, LoadingController } from '@ionic/angular';
import { tap } from 'rxjs/operators';
import { NativeStorage } from '@ionic-native/native-storage/ngx';
import { EnvService } from './env.service';
import { User } from '../models/user';
import { AlertService } from 'src/app/services/alert.service';
import { DeviceUUID } from 'device-uuid';
import { NgxSpinnerService } from 'ngx-spinner';
import { UniqueDeviceID } from '@ionic-native/unique-device-id/ngx';
import { Device } from '@ionic-native/device/ngx';
import { Idle, IdleExpiry, DEFAULT_INTERRUPTSOURCES } from '@ng-idle/core'
import { ToastController } from '@ionic/angular'

// import { Keyboard } from '@ionic-native/keyboard/ngx';

// import { Uid } from '@ionic-native/uid/ngx';
// import { AndroidPermissions } from '@ionic-native/android-permissions/ngx';
import { SpinnerDialog } from '@ionic-native/spinner-dialog/ngx';
const uuid = new DeviceUUID().get();
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isLoggedIn = false;
  token: any;
  data: any;
  userdata: any;
  dat: any;
  uiid: any;
  students: any;
  timeout: any;
  resources: any;
  term_id: any;
  // isLoading: any;
  isLoading = false;
  loading: HTMLIonLoadingElement;
  androidPermissions: any;
  uid: any;
  constructor(
    private spinnerDialog: SpinnerDialog,
    private spinner: NgxSpinnerService,
    // private keyboard: Keyboard,
    private uniqueDeviceID: UniqueDeviceID,
    // private uid: Uid,
    // private androidPermissions: AndroidPermissions,
    private http: HttpClient,
    private storage: NativeStorage,
    private env: EnvService,
    public loadingController: LoadingController,
    private navCtrl: NavController,
    private alertService: AlertService,
    private alertCtrl: AlertController,
    private device: Device,
    private idle: Idle,
    public toastController: ToastController,
  ) {
    // this.getPermission();s
    // this.getUniqueDeviceID();
    // console.log('Device UUID is: ' + this.uiid);
    const user = localStorage.getItem('token');
    this.userdata = user;
    this.auth();
    this.checkSession();


  }



  // getUniqueDeviceID() {

  //   // tslint:disable-next-line:no-shadowed-variable
  //   this.uniqueDeviceID.get()
  //   .then(( uuid:any ) => {
  //     console.log('this is it: ' +uuid);
  //     return this.http.post(this.env.API_URL + 'parentLogin', uuid);

  //   })
  //   .catch((error: any) => console.log(uuid));
  // }
  //  keyStatus() {
  //   window.addEventListener('keyboardWillShow', () => {
  //     console.log("Keyboard will Show");
  //   });
  //   window.addEventListener('keyboardDidShow', () => {
  //     console.log("Keyboard is Shown");
  //   });
  //   window.addEventListener('keyboardWillHide', () => {
  //     console.log("Keyboard will Hide");
  //   });
  //   window.addEventListener('keyboardDidHide', () => {
  //     console.log("Keyboard is Hidden");
  //   });
  //  }
  //   showKeyboard() {
  //     this.keyboard.isVisible;
  //   }
  //   hideKeyboard() {
  //     this.keyboard.hide();
  //   }


  // get device permission
  // getPermission() {
  //   this.androidPermissions.checkPermission(
  //     this.androidPermissions.PERMISSION.READ_PHONE_STATE
  //   ).then(res => {
  //     if (res.hasPermission) {

  //     } else {
  //     this.androidPermissions.requestPermission(this.androidPermissions.PERMISSION.READ_PHONE_STATE).then(res => {
  //       }).catch(error => {
  //         console.log(error);

  //       });
  //     }
  //   }).catch(error => {
  //     console.log(error);
  //   });
  // }
  // getID_UID(type) {
  //   if (type === "IMEI") {
  //     return this.uid.IMEI;
  //   }else if (type === "ICCID") {
  //     return this.uid.ICCID;
  //   }else if(type === "IMSI"){
  //     return this.uid.IMSI;F
  //     return this.uid.MAC;
  //   }else if(type === "UUID"){
  //     return this.uid.UUID;
  //   }
  // }
  // next function
  //report absenteeism
  reportAbsenteeism(student_id: any, message: any,
    reason: any, start_date: any, end_date: any,
    school: any, starting: any, ending: any) {
    this.presentLoading();
    var students: Array<Number> = [];
    students.push(student_id)
    var start, end;


    const transferObject = {
      "students": students,
      "message": message,
      "reason": reason,
      "starting": start_date,
      "ending": end_date,
      "start_date": starting,
      "end_date": ending,
      "school": school
    };
    console.log(JSON.stringify(transferObject));
    const headers = new HttpHeaders({
      Accept: 'application/json',
      'Content-Type': 'application/json',
    });
    return this.http.post(this.env.API_URL + `reportAbsenteeism`, transferObject, { headers: headers })
      .pipe(
        tap(respose => {
          this.dismiss();
          return respose;
        })
      )
  }
  //getabsenteeism
  getAbsenteeism(student_id: any, school: any) {
    const header = new HttpHeaders({
    });
    return this.http.get(this.env.API_URL + `getStudentAbsenteeism/${school}/${student_id}`, { headers: header })
      .pipe(
        tap(absentDays => {
          return absentDays;
        })
      );
  }
  // login 
  login(email: any, password: any, deviceid: any) {
    if (email === '' && password === '') {
      this.presentAlert2('Password and Username  should not be blank!');
    } else if (email === '' && password !== '') {
      //
      this.presentAlert2('Username filed should not be blank!');
    } else if (email !== '' && password === '') {
      this.presentAlert2('Password field should not be blank!');
    } else {
      this.presentLoading();
      // setTimeout(() => this.spinnerDialog.hide(), 3000);
      const formData = new FormData();
      formData.append('user_name', email);
      formData.append('user_pwd', password);
      formData.append('device_user_id', deviceid);
      return this.http.post(this.env.API_URL + 'parentLogin', formData
      ).pipe(
        tap(token => {
          this.data = token;
          if (this.data.response === 'success') {
            const user = this.data.data;
            this.students = this.data.data.students;
            console.log(this.students);
            if (this.students.length === 0) {

              this.presentAlert('You account does not exist.Please contact respective school for more information.');
              this.dismiss();
              // this.spinnerDialog.hide();
            } else {
              localStorage.setItem('token', JSON.stringify(this.data.data));
              this.dismiss();
              // this.spinnerDialog.hide();
              // location.reload(true);
              this.token = this.data;
              this.isLoggedIn = true;
              return token;
            }
          } else {
            this.dismiss();
            // this.presentAlert('The username/password you entered is incorrect. Please check spelling and/or capitalization');
            this.token = null;
            this.isLoggedIn = false;
            return token;
          }

        }),
      );

    }
  }
  // update password
  registerPwd(password: any, phone: any) {
    if (password === '') {
      this.presentAlert2('Password should field  is required!');
    } else {
      this.presentLoading();
      // setTimeout(() => this.spinnerDialog.hide(), 3000);
      const formData = new FormData();
      formData.append('phone', phone);
      formData.append('pwd', password);
      return this.http.post(this.env.API_URL + 'registerPwd', formData
      ).pipe(
        tap(token => {
          this.data = token;
          console.log(this.data);
          if (this.data.response === 'success') {
            this.dismiss();
            return this.data;
          } else {
            this.dismiss();
            this.presentAlert1(this.data.data);
            return this.data;
          }
        }),
      );
    }
  }
  // check phone number for create account
  check(phone: any) {
    if (phone === '') {
      this.presentAlert2('Phone number number is required!');
    } else {
      this.presentLoading();
      // setTimeout(() => this.spinnerDialog.hide(), 5000);
      return this.http.get(this.env.API_URL + `registrationStatus/${phone}`
      ).pipe(
        tap(t => {
          this.data = t;
          console.log(this.data);
          if (this.data.response === 'success') {
            this.dismiss();
            return t;
          } else {
            this.dismiss();
            // this.presentAlert1(this.data.message);
            return t;
          }
        }),
      );
    }
  }
  // check phone number for forgot password
  checkforgot(phone: any) {
    if (phone === '') {
      this.presentAlert2('Phone number number is required!');
    } else {
      this.presentLoading();
      // setTimeout(() => this.spinnerDialog.hide(), 5000);
      return this.http.get(this.env.API_URL + `forgotPassword/${phone}`
      ).pipe(
        tap(t => {
          this.data = t;

          console.log("error" + this.data);
          if (this.data.response === 'success') {
            this.dismiss();
            return t;
          } else {
            this.dismiss();
            return t;
          }
        }),
      );
    }
  }
  // verify phone and code
  verify(phone: any, code: any) {
    if (code === '') {
      this.presentAlert2('Confirmation code is required!');
    } else {
      this.presentLoading();
      // setTimeout(() => this.spinnerDialog.hide(), 3000);
      return this.http.get(this.env.API_URL + `checkRegCode/${phone}/${code}`
      ).pipe(
        tap(t => {
          this.data = t;
          if (this.data.response === 'success') {
            this.dismiss();
            return t;
          } else {
            this.dismiss();
            this.presentAlert1(this.data.message);
            return t;
          }
        }),
      );
    }
  }
  // verify password
  verifypassword(code: any, phone: any) {
    if (code === '') {
      this.presentAlert2('Password is required!');
    } else {
      this.presentLoading();
      // setTimeout(() => this.spinnerDialog.hide(), 3000);
      return this.http.get(this.env.API_URL + `confirmTemporaryPassword/${phone}/${code}`
      ).pipe(
        tap(t => {
          this.data = t;
          if (this.data.response === 'success') {
            this.dismiss();
            return t;
          } else {
            this.dismiss();
            this.presentAlert1(this.data.message);
            console.log(this.data.message);
            return t;
          }
        }),
      );
    }
  }
  // resend onetime password
  resend(phone: any) {
    return this.http.get(this.env.API_URL + `resendOtp/${phone}`).pipe(
      tap(c => {
        this.data = c;
        if (this.data.response === 'success') {
          this.presentAlert2(this.data.message);
          return c;
        } else {
          this.presentAlert2(this.data.message);
        }
      })
    )
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
  // alert any info
  async presentAlert1(info) {
    const alert = await this.alertCtrl.create({
      message: info,
      subHeader: 'Info',
      buttons: ['Ok']
    });
    await alert.present();
  }
  // alert  login
  async presentAlert(info) {
    const alert = await this.alertCtrl.create({
      message: info,
      subHeader: 'Login Failed',
      buttons: ['Ok'],
    });
    await alert.present();
  }
  // register(fName: any, lName: any, email: any, password: any) {
  //   return this.http.post(this.env.API_URL + 'auth/register',
  //   {fName: fName, lName: lName, email: email, password: password});
  // }
  // reset password
  reset(userpass: any, newpassword: any) {
    if (userpass == "" && newpassword == "") {
      this.dismiss();
      this.presentAlert1("Passwords cannot be empty")
    } else if (userpass == "" || newpassword == "") {
      this.dismiss();
      this.presentAlert1("Password cannot be empty")
    } else {
      // this.presentLoading();
      const headers = new HttpHeaders({
        Accept: 'application/json',
        'Content-Type': 'application/json',
      });
      const user = localStorage.getItem('token');
      const u = JSON.parse(user);
      this.dat = u;

      const data = {
        parent_id: this.dat.parent_id,
        user_pwd: userpass,
        new_password: newpassword,
      };
      // const formData = new FormData();
      // formData.append('parent_id', this.dat.parent_id);
      // formData.append('user_pwd', userpass);
      // formData.append('new_password', newpassword);
      console.log(data);
      return this.http.put(this.env.API_URL + 'updatePassword', data, { headers: headers });
    }
  }
  // add feedback
  addfeed(student: any, tittle: any, msg: any, school: any) {
    // this.presentLoading();
    // setTimeout(() => this.spinnerDialog.hide(), 1000);
    const headers = new HttpHeaders({
      Accept: 'application/json',
      'Content-Type': 'application/json',
    });
    const user = localStorage.getItem('token');
    const u = JSON.parse(user);
    this.dat = u;
    const data = {
      subject: tittle,
      message: msg,
      message_from: u.first_name + ' ' + u.last_name,
      student_id: student,
      guardian_id: u.school_guardian_id,
    };

    console.log(data);

    // this.dismiss();
    return this.http.post(this.env.API_URL + `addFeedback/${school}`, data, { headers: headers }
    );
  }

  // logout
  logout() {
    this.idle.stop();
    this.idle.ngOnDestroy();
    // this.presentLoading();
    // setTi out(() => this.spinnerDialog.hide(), 2000);
    localStorage.removeItem('token');
    // this.alertService.presentToast('Logged out succesfully');
    location.reload();
    this.navCtrl.navigateRoot('/login');
  }
  // user() {
  //   const headers = new HttpHeaders({
  //   });
  //   return this.http.get<User>(this.env.API_URL + 'auth/user', { headers: headers })
  //   .pipe(
  //     tap(user => {
  //       return user;
  //     })
  //   );
  // }
  // load news



  news() {
    // this.presentLoading();
    // setTimeout(() => this.spinnerDialog.hide(), 500);
    const headers = new HttpHeaders({});
    const user = localStorage.getItem('token');
    const u = JSON.parse(user);
    this.dat = u;
    return this.http.get(this.env.API_URL + `getParentStudents/${this.dat.parent_id}`, { headers: headers })
      .pipe(
        tap(news => {
          return news;
        })
      );
  }
  // reload news
  reloadnews() {
    // this.presentLoading();
    // setTimeout(() => this.spinnerDialog.hide(), 2000);
    const headers = new HttpHeaders({
    });
    const user = localStorage.getItem('token');
    const u = JSON.parse(user);
    this.dat = u;
    return this.http.get(this.env.API_URL + `getParentStudents/${this.dat.parent_id}`, { headers: headers })
      .pipe(
        tap(news => {
          return news;
        })
      );
  }
  // get keys
  keys(school: any) {
    const headers = new HttpHeaders({
    });
    return this.http.get(this.env.API_URL + `getGrading2/${school}`, { headers: headers })
      .pipe(
        tap(x => {
          return x;
        })
      );
  }
  // get parent students
  getStudents() {
    // this.presentLoading();
    // setTimeout(() => this.spinnerDialog.hide(), 2000);
    const headers = new HttpHeaders({
    });
    const user = localStorage.getItem('token');
    const u = JSON.parse(user);
    this.dat = u;
    console.log(this.dat.parent_id);
    return this.http.get(this.env.API_URL + `getParentStudents/${this.dat.parent_id}`, { headers: headers })
      .pipe(
        tap(news => {
          return news;
        })
      );
  }
  // get posts
  posts(school: any, sid: any, page: any) {
    // this.presentLoading();
    // setTimeout(() => this.spinnerDialog.hide(), 2000);
    const header = new HttpHeaders({});
    return this.http.get(this.env.API_URL + `getBlog/${school}/${sid}/${page}`, { headers: header })
      .pipe(
        tap(posts => {
          return posts;
        })
      );
  }
  // get homeworks
  homeworks(school: any, sid: any) {
    const header = new HttpHeaders({
    });
    return this.http.get(this.env.API_URL + `getHomework/${school}/${sid}`, { headers: header })
      .pipe(
        tap(homeworks => {
          return homeworks;
        })
      );
  }

  //get school details
  schoolInfo(school: any) {
    const header = new HttpHeaders({
    });

    return this.http.get(this.env.API_URL + `getSchDetails/${school}`, { headers: header })
      .pipe(
        tap(schoolInfo => {
          return schoolInfo;
        })
      )
  }
  // START OF EXAMS TABS /////////////////
  // cards(school: any, sid: any) {
  //   // this.presentLoading();
  //   //  setTimeout(() => this.spinnerDialog.hide(), 2000);
  //   const header = new HttpHeaders({
  //   });
  //   return this.http.get(this.env.API_URL + `getStudentReportCards/${school}/${sid}`, { headers: header })
  //     .pipe(
  //       tap(cards => {
  //         return cards;
  //       })
  //     );
  // }

  // new report cards 

  cbcreport(school: any, student_id: any){
      const header =new HttpHeaders({});
      return this.http.get(this.env.API_URL  +`getAllStudentCbcReportCardData/${school}/${student_id}`,{headers: header})
      .pipe(
        tap( cbcreports => {
            return cbcreports;
        })
      );
  }

  report(school: any, sid: any, tid: any, cid: any) {
    const header = new HttpHeaders({
    });
    return this.http.get(this.env.API_URL + `getStudentReportCardData/${school}/${sid}/${tid}/${cid}`, { headers: header })
      .pipe(
        tap(reports => {
          return reports;

        })
      );
  }

  cards(school: any, sid: any) {
    const header = new HttpHeaders({});
    return this.http.get(this.env.API_URL + `getAllStudentReportCardData/${school}/${sid}`, { headers: header })
      .pipe(
        tap(cards => {
          return cards;
        })
      );
  }

  //high cards 
  highCards(school: any, student_id: any) {
    const header = new HttpHeaders({});
    return this.http.get(this.env.API_URL + `getAllStudentReportCardDataHigh/${school}/${student_id}`, { headers: header })
      .pipe(
        tap(highCards => {
          return highCards;
        })
      )
  }

  //get terms 


  // get school information
  getschoolihighnfo(school: any, sid: any) {
    const header = new HttpHeaders({
    });
    return this.http.get(this.env.API_URL + `getSchoolContactInfo/${school}/${sid}`, { headers: header })
      .pipe(
        tap(info => {
          return info;
        })
      );
  }

  getResources(school: any, sid: any) {
    const header = new HttpHeaders({
    });
    return this.http.get(this.env.API_URL + `getStudentResources/${school}/${sid}`, { headers: header })
      .pipe(
        tap(resources => {
          return resources;
        })
      );
  }
  // get exam list
  exams(school: any, cid: any, sid: any, term: any) {
    const header = new HttpHeaders({
    });
    return this.http.get(this.env.API_URL + `getStudentExamMarksPortal/${school}/${sid}/${cid}/${term}`, { headers: header })
      .pipe(
        tap(cards => {
          return cards;
        })
      );
  }
  // get examtypes
  examsTypes(school: any, cid: any) {
    const header = new HttpHeaders({
    });
    return this.http.get(this.env.API_URL + `getExamTypes/${school}/${cid}`, { headers: header })
      .pipe(
        tap(types => {
          return types;
        })
      );
  }
  // get  current term
  currentTerm(school: any) {
    const header = new HttpHeaders({
    });
    return this.http.get(this.env.API_URL + `getCurrentTerm/${school}`, { headers: header })
      .pipe(
        tap(term => {
          return term;
        })
      );
  }
  //get school terms
  schoolTerm(school: any, sid: any) {
    const header = new HttpHeaders({

    });
    return this.http.get(this.env.API_URL + `schoolTerms/${school}/${sid}`, { headers: header })
      .pipe(
        tap(school_term => {
          return school_term;
        })
      )
  }
  //get class History
  classHistory(school: any, sid: any) {
    const header = new HttpHeaders({});
    return this.http.get(this.env.API_URL + `getStudentClasses/${school}/${sid}`, { headers: header })
      .pipe(
        tap(class_histoy => {
          return class_histoy;
        })
      )
  }

  assessment(school: any, sid: any) {
    const header = new HttpHeaders({
    });
    return this.http.get(this.env.API_URL + `getDocReport/${school}/${sid}`, { headers: header })
      .pipe(
        tap(types => {
          return types;
        })
      );
  }

  // END OF EXAMS TABS
  // START DETAILS TABS
  getstudent(school: any, sid: any) {
    this.presentLoading();
    // setTimeout(() => this.spinnerDialog.hide(), 2000);
    const header = new HttpHeaders({
    });
    return this.http.get(this.env.API_URL + `getStudent/${school}/${sid}`, { headers: header })
      .pipe(
        tap(s => {
          this.dismiss();
          return s;
        })
      );
  }
  // END DETAILS TAB
  // FEE TAB
  fees(school: any, sid: any) {
    const header = new HttpHeaders({
    });
    return this.http.get(this.env.API_URL + `getStudentFeeItemsPortal/${school}/${sid}`, { headers: header })
      .pipe(
        tap(fees => {
          return fees;
        })
      );
  }
  // fee balance
  feesBalance(school: any, sid: any) {
    // this.presentLoading();
    // setTimeout(() => this.spinnerDialog.hide(), 2000);
    const header = new HttpHeaders({
    });
    return this.http.get(this.env.API_URL + `getStudentBalancePortal/${school}/${sid}`, { headers: header })
      .pipe(
        tap(fees => {
          return fees;
        })
      );
  }
  Invoices(school: any, sid: any) {
    const header = new HttpHeaders({
    });
    return this.http.get(this.env.API_URL + `getStudentInvoicesPortal/${school}/${sid}`, { headers: header })
      .pipe(
        tap(fees => {
          return fees;
        })
      );
  }
  Payments(school: any, sid: any) {
    const header = new HttpHeaders({
    });
    return this.http.get(this.env.API_URL + `getStudentPaymentsPortal/${school}/${sid}`, { headers: header })
      .pipe(
        tap(fees => {
          return fees;
        })
      );
  }
  // fee items
  Feeitems(school: any, sid: any) {
    const header = new HttpHeaders({
    });
    return this.http.get(this.env.API_URL + `getStudentFeeItemsPortal/${school}/${sid}`, { headers: header })
      .pipe(
        tap(fees => {
          return fees;
        })
      );
  }
  // END OF FEE MANAGEMENTS
  // GALLERY & ALBUMS
  gallery(school: any, sid: any) {
    // this.presentLoading();
    //  setTimeout(() => this.spinnerDialog.hide(), 2000);
    const header = new HttpHeaders({
    });
    return this.http.get(this.env.API_URL + `getGalleryCommunications/${school}/${sid}`, { headers: header })
      .pipe(
        tap(gallery => {
          return gallery;
        })
      );
  }
  // END OF GALLERY & ALBUMS

  // FEEDBACK
  async getToken() {
    const user = await localStorage.getItem('token');
    const u = JSON.parse(user);

    if (u !== null) {
      this.token = u;
      this.isLoggedIn = true;
    } else {
      this.token = null;
      this.isLoggedIn = false;
    }
  }
  // auth or check session
  async auth() {
    const user = await localStorage.getItem('token');
    const u = JSON.parse(user);
    if (u !== null) {
      return u;
    } else {
      return null;
    }
  }

  // gallery list
  albums(school: any, studentid: any) {
    // this.presentLoading();
    // setTimeout(() => this.spinnerDialog.hide(), 2000);
    const headers = new HttpHeaders({
    });
    return this.http.get(this.env.API_URL + `getParentStudents/${school}/${studentid}`, { headers: headers })
      .pipe(
        tap(news => {
          this.loading.dismiss();
          return news;
        })
      );
  }
  // get session data
  async checkSession() {
    const user = await localStorage.getItem('token');
    const u = JSON.parse(user);
    // console.log(u);
    if (u !== null) {
      this.navCtrl.navigateRoot('/dashboard');
      return 1;
    } else {
      this.navCtrl.navigateRoot('/login');
      return 0;
    }
  }

  // check if school uses feedback
  async checkFeed() {
    const user = await localStorage.getItem('token');
    const u = JSON.parse(user);
    if (u !== null) {
      const student = u.students[0];
      if (student.use_feedback === 'true') {
        return 'true';
      } else {
        return 'false';
      }
    } else {
      return 0;
    }
  }
  // loader
  async presentLoading1() {
    const loading = await this.loadingController.create({
      spinner: 'lines-small',
      cssClass: 'my-class',
    });
    await loading.present();
    // this.loadingController.create({
    //   spinner: 'lines-small',
    //   cssClass: 'my-class',
    //   // message: 'This Loader Will Auto Hide in 2 Seconds',
    //   // duration: 3000
    // }).then((res) => {
    //   res.present();
    //   // res.onDidDismiss().then((dis) => {
    //   //   console.log('Loading dismissed! after 2 Seconds');
    //   // });
    // });
    // this.spinnerDialog.show(null, null, {overlayOpacity: 0});
    // this.spinnerDialog.show();
  }
  // async dismiss() {
  //   await this.loadingController.dismiss();
  // }
  async presentLoading() {
    this.isLoading = true;
    return await this.loadingController.create({
      spinner: 'lines-small',
      cssClass: 'my-class',
      // duration: 5000,
    }).then(a => {
      a.present().then(() => {
        console.log('presented');
        if (!this.isLoading) {
          a.dismiss().then(() => console.log('abort presenting'));
        }
      });
    });
  }

  async dismiss() {
    this.isLoading = false;
    return await this.loadingController.dismiss().then(() => console.log('dismissed'));
  }
  // getschool details
  getSchool(school: any) {
    const header = new HttpHeaders({
    });
    return this.http.get(this.env.API_URL + `getSchoolContactInfo/${school}`, { headers: header })
      .pipe(
        tap(s => {
          return s;
        })
      );

  }

  //get meal menu
  getMenu(school: any) {
    const header = new HttpHeaders({});

    return this.http.get(this.env.API_URL + `getMealsMenu/${school}`, { headers: header })
      .pipe(
        tap(menu => {
          return menu;
        }
        )
      );
  }
}
