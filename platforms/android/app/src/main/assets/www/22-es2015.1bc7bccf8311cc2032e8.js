(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{QVr5:function(e,t,n){"use strict";n.r(t);var o=n("ofXK"),i=n("3Pt+"),s=n("tyNb"),r=n("TEn/"),a=n("mrSG"),l=n("lGQG"),c=n("EnSQ"),d=n("3LUQ"),m=n("IfdK"),u=n("fXoL");function p(e,t){1&e&&(u["\u0275\u0275elementStart"](0,"ion-list"),u["\u0275\u0275element"](1,"ion-spinner",9),u["\u0275\u0275elementEnd"]())}function g(e,t){if(1&e){const e=u["\u0275\u0275getCurrentView"]();u["\u0275\u0275elementStart"](0,"div"),u["\u0275\u0275elementStart"](1,"ion-item",10),u["\u0275\u0275elementStart"](2,"ion-label",11),u["\u0275\u0275text"](3,"Student(s)"),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementStart"](4,"ion-input",12),u["\u0275\u0275listener"]("ngModelChange",(function(t){return u["\u0275\u0275restoreView"](e),u["\u0275\u0275nextContext"]().student_name=t})),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementStart"](5,"ion-item",10),u["\u0275\u0275elementStart"](6,"ion-label",11),u["\u0275\u0275text"](7,"Subject "),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementStart"](8,"ion-input",13),u["\u0275\u0275listener"]("ngModelChange",(function(t){return u["\u0275\u0275restoreView"](e),u["\u0275\u0275nextContext"]().subject=t})),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementStart"](9,"ion-item",10),u["\u0275\u0275elementStart"](10,"ion-label",11),u["\u0275\u0275text"](11,"Message"),u["\u0275\u0275elementEnd"](),u["\u0275\u0275element"](12,"ion-textarea",14),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementStart"](13,"ion-list"),u["\u0275\u0275elementStart"](14,"ion-row"),u["\u0275\u0275element"](15,"ion-col",15),u["\u0275\u0275elementStart"](16,"ion-col",15),u["\u0275\u0275elementStart"](17,"ion-button",16),u["\u0275\u0275text"](18,"SEND FEEDBACK"),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementEnd"](),u["\u0275\u0275element"](19,"ion-col",15),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementEnd"]()}if(2&e){const e=u["\u0275\u0275nextContext"]();u["\u0275\u0275advance"](4),u["\u0275\u0275property"]("ngModel",e.student_name),u["\u0275\u0275advance"](4),u["\u0275\u0275property"]("ngModel",e.subject)}}function h(e,t){if(1&e&&(u["\u0275\u0275elementStart"](0,"ion-select-option",22),u["\u0275\u0275elementStart"](1,"small"),u["\u0275\u0275text"](2),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementEnd"]()),2&e){const e=t.$implicit;u["\u0275\u0275propertyInterpolate"]("value",e.student_id),u["\u0275\u0275advance"](2),u["\u0275\u0275textInterpolate"](e.first_name+" "+e.last_name)}}function f(e,t){if(1&e&&(u["\u0275\u0275elementStart"](0,"ion-item",10),u["\u0275\u0275elementStart"](1,"ion-label",17),u["\u0275\u0275text"](2,"Student(s)"),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementStart"](3,"ion-select",18),u["\u0275\u0275template"](4,h,3,2,"ion-select-option",19),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementStart"](5,"ion-item",10),u["\u0275\u0275elementStart"](6,"ion-label",17),u["\u0275\u0275text"](7,"Subject"),u["\u0275\u0275elementEnd"](),u["\u0275\u0275element"](8,"ion-input",20),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementStart"](9,"ion-item",10),u["\u0275\u0275elementStart"](10,"ion-label",11),u["\u0275\u0275text"](11,"Message"),u["\u0275\u0275elementEnd"](),u["\u0275\u0275element"](12,"ion-textarea",21),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementStart"](13,"ion-list"),u["\u0275\u0275elementStart"](14,"ion-row"),u["\u0275\u0275element"](15,"ion-col",15),u["\u0275\u0275element"](16,"ion-col",15),u["\u0275\u0275elementStart"](17,"ion-col",15),u["\u0275\u0275elementStart"](18,"ion-button",16),u["\u0275\u0275text"](19,"SEND FEEDBACK"),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementEnd"]()),2&e){const e=u["\u0275\u0275nextContext"]();u["\u0275\u0275advance"](4),u["\u0275\u0275property"]("ngForOf",e.students)}}let S=(()=>{class e{constructor(e,t,n,o,i,s,r){this.alertService=e,this.dataService=t,this.authService=n,this.navCtrl=o,this.sessionService=i,this.router=s,this.route=r,this.fake=0,this.sessionService.sessionTimeOut(),this.refferences=this.router.getCurrentNavigation().extras.state,console.log(this.refferences),null!=this.router.getCurrentNavigation().extras.state&&(this.student_name=this.router.getCurrentNavigation().extras.state.studentName,this.subject=this.router.getCurrentNavigation().extras.state.subject,this.student_id=this.router.getCurrentNavigation().extras.state.student_id),this.students=new Array}ngOnInit(){}ionViewWillEnter(){return Object(a.a)(this,void 0,void 0,(function*(){this.authService.presentLoading(),yield this.authService.getStudents().subscribe(e=>{this.authService.dismiss(),this.data=e,this.students=this.data.data.students,this.school=this.students[0].school})}))}post(e){this.authService.presentLoading(),null!=this.refferences?("number"!=typeof e.value.student&&(e.value.student=this.student_id),this.authService.addfeed(e.value.student,e.value.subject,e.value.message,this.school).subscribe(e=>{this.response=e,this.response.response?(this.authService.dismiss(),this.navCtrl.navigateRoot("/dashboard"),this.alertService.presentToast(this.response.data)):this.alertService.presentToast("Error Occured while posting your feedback...")},e=>{this.authService.dismiss(),console.log(e)},()=>{})):this.authService.addfeed(e.value.student,e.value.subject,e.value.message,this.school).subscribe(e=>{this.response=e,console.log(this.response),this.response.response?(this.authService.dismiss(),this.navCtrl.navigateRoot("/dashboard"),this.alertService.presentToast(this.response.data)):this.alertService.presentToast("Error Occured while posting your feedback...")},e=>{this.authService.dismiss(),console.log(e)},()=>{})}}return e.\u0275fac=function(t){return new(t||e)(u["\u0275\u0275directiveInject"](d.a),u["\u0275\u0275directiveInject"](c.a),u["\u0275\u0275directiveInject"](l.a),u["\u0275\u0275directiveInject"](r.R),u["\u0275\u0275directiveInject"](m.a),u["\u0275\u0275directiveInject"](s.g),u["\u0275\u0275directiveInject"](s.a))},e.\u0275cmp=u["\u0275\u0275defineComponent"]({type:e,selectors:[["app-feedback"]],decls:12,vars:3,consts:[["color","primary"],["slot","start",2,"font-size","14px"],["text","","icon","chevron-back"],[1,""],[4,"ngIf"],["method","post",3,"ngSubmit"],["form","ngForm"],[4,"ngIf","ngIfElse"],["empty_subject",""],["name","lines-small",2,"text-align","center","margin-left","50%","margin-right","50%"],["lines","none"],["position","stacked"],["type","text","name","student",3,"ngModel","ngModelChange"],["type","text","name","subject",3,"ngModel","ngModelChange"],["ngModel","","name","message","maxlength","500"],["col-4",""],["type","submit","color","warning"],["position","stacked",2,"margin-bottom","5px"],["multiple","true","ngModel","","name","student"],[3,"value",4,"ngFor","ngForOf"],["ngModel","","name","subject"],["ngModel","","cols","20","rows","7","placeholder","Type message...","name","message","maxlength","500"],[3,"value"]],template:function(e,t){if(1&e){const e=u["\u0275\u0275getCurrentView"]();u["\u0275\u0275elementStart"](0,"ion-header"),u["\u0275\u0275elementStart"](1,"ion-toolbar",0),u["\u0275\u0275elementStart"](2,"ion-buttons",1),u["\u0275\u0275element"](3,"ion-back-button",2),u["\u0275\u0275text"](4,"ADD FEEDBACK "),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementStart"](5,"ion-content",3),u["\u0275\u0275template"](6,p,2,0,"ion-list",4),u["\u0275\u0275elementStart"](7,"form",5,6),u["\u0275\u0275listener"]("ngSubmit",(function(){u["\u0275\u0275restoreView"](e);const n=u["\u0275\u0275reference"](8);return t.post(n)})),u["\u0275\u0275template"](9,g,20,2,"div",7),u["\u0275\u0275template"](10,f,20,1,"ng-template",null,8,u["\u0275\u0275templateRefExtractor"]),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementEnd"]()}if(2&e){const e=u["\u0275\u0275reference"](11);u["\u0275\u0275advance"](6),u["\u0275\u0275property"]("ngIf",0===t.students.length&&1===t.fake),u["\u0275\u0275advance"](3),u["\u0275\u0275property"]("ngIf",null!=t.refferences)("ngIfElse",e)}},directives:[r.q,r.L,r.g,r.d,r.e,r.l,o.i,i["\u0275angular_packages_forms_forms_y"],i.NgControlStatusGroup,i.NgForm,r.v,r.H,r.t,r.u,r.s,r.W,i.NgControlStatus,i.NgModel,r.J,i.MaxLengthValidator,r.B,r.k,r.f,r.E,r.V,o.h,r.F],styles:["ion-content[_ngcontent-%COMP%]{background-color:#d3d3d3}ion-content[_ngcontent-%COMP%], ion-textarea[_ngcontent-%COMP%]{font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Open Sans,Helvetica Neue,sans-serif}ion-textarea[_ngcontent-%COMP%]{border:1px solid #708090;padding:10px;border-radius:10px}ion-textarea[_ngcontent-%COMP%]   [_ngcontent-%COMP%]::-moz-placeholder{font-style:italic!important}ion-textarea[_ngcontent-%COMP%]   [_ngcontent-%COMP%]::placeholder{font-style:italic!important}ion-label[_ngcontent-%COMP%]{margin-left:10px;font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Open Sans,Helvetica Neue,sans-serif!important}ion-input[_ngcontent-%COMP%]{padding-left:10px!important}ion-input[_ngcontent-%COMP%], ion-select[_ngcontent-%COMP%]{border:1px solid #708090;border-radius:8px;font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Open Sans,Helvetica Neue,sans-serif}ion-select[_ngcontent-%COMP%]{padding:10px}"]}),e})();n.d(t,"FeedbackPageModule",(function(){return b}));const v=[{path:"",component:S}];let b=(()=>{class e{}return e.\u0275mod=u["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=u["\u0275\u0275defineInjector"]({factory:function(t){return new(t||e)},imports:[[o.b,i.FormsModule,r.M,s.i.forChild(v)]]}),e})()}}]);