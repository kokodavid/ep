(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{ZIZF:function(e,t,n){"use strict";n.r(t);var o=n("ofXK"),i=n("3Pt+"),r=n("tyNb"),a=n("TEn/"),s=n("mrSG"),l=n("wd/R"),c=n("lGQG"),d=n("te5A"),m=n("B7Rs"),p=n("FAH8"),h=n("5zL6"),f=n("3LUQ"),u=n("fXoL"),g=n("tk/3");function v(e,t){if(1&e){const e=u["\u0275\u0275getCurrentView"]();u["\u0275\u0275elementStart"](0,"ion-list"),u["\u0275\u0275elementStart"](1,"ion-item",13),u["\u0275\u0275listener"]("click",(function(){u["\u0275\u0275restoreView"](e);const n=t.$implicit,o=u["\u0275\u0275nextContext"](3);return o.download(n,o.assets+n)})),u["\u0275\u0275elementStart"](2,"span"),u["\u0275\u0275text"](3),u["\u0275\u0275element"](4,"ion-icon",14),u["\u0275\u0275elementStart"](5,"a",15),u["\u0275\u0275text"](6),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementEnd"]()}if(2&e){const e=t.$implicit,n=t.index;u["\u0275\u0275advance"](3),u["\u0275\u0275textInterpolate1"](" ",n+1,". "),u["\u0275\u0275advance"](3),u["\u0275\u0275textInterpolate1"](" ",e," ")}}function x(e,t){if(1&e&&(u["\u0275\u0275elementStart"](0,"div",4),u["\u0275\u0275template"](1,v,7,2,"ion-list",12),u["\u0275\u0275elementEnd"]()),2&e){const e=u["\u0275\u0275nextContext"](2);u["\u0275\u0275advance"](1),u["\u0275\u0275property"]("ngForOf",e.attachments)}}function w(e,t){if(1&e&&(u["\u0275\u0275elementStart"](0,"div"),u["\u0275\u0275template"](1,x,2,1,"div",11),u["\u0275\u0275elementEnd"]()),2&e){const e=u["\u0275\u0275nextContext"]();u["\u0275\u0275advance"](1),u["\u0275\u0275property"]("ngIf",e.attachments.length>0)}}function I(e,t){if(1&e){const e=u["\u0275\u0275getCurrentView"]();u["\u0275\u0275elementStart"](0,"ion-fab",16),u["\u0275\u0275listener"]("click",(function(){return u["\u0275\u0275restoreView"](e),u["\u0275\u0275nextContext"]().addfeed()})),u["\u0275\u0275elementStart"](1,"ion-fab-button",17),u["\u0275\u0275element"](2,"ion-icon",18),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementEnd"]()}}let b=(()=>{class e{constructor(e,t,n,o,i,r,a,s,l){this.route=e,this.router=t,this.authService=n,this.transfer=o,this.file=i,this.fileOpener=r,this.http=a,this.env=s,this.alertService=l,this.homeworkInfo=new Object,this.route.queryParams.subscribe(e=>{if(this.router.getCurrentNavigation().extras.state){this.homeworkInfo=this.router.getCurrentNavigation().extras.state.details,this.school=this.router.getCurrentNavigation().extras.state.school,this.student_id=this.router.getCurrentNavigation().extras.state.student_id,this.student_name=this.router.getCurrentNavigation().extras.state.student;const e=this.homeworkInfo.attachment?this.homeworkInfo.attachment:null,t=null===e?"":e,n=null===t?null:t.split(",");this.attachments=""!==n[0]?n:[],this.assets=`https://${this.school}.eduweb.co.ke/assets/posts/`}})}ngOnInit(){return this.http.get(this.env.API_URL+"getParticularHomework/"+this.school+"/"+this.student_id+"/"+this.homeworkInfo.homework_id).subscribe(e=>{console.log(e)})}ionViewWillEnter(){return Object(s.a)(this,void 0,void 0,(function*(){yield this.authService.checkFeed().then(e=>{console.log(e),this.feed=e})}))}getMIMEtype(e){return{txt:"text/plain",docx:"application/vnd.openxmlformats-officedocument.wordprocessingml.document",doc:"application/msword",pdf:"application/pdf",jpg:"image/jpeg",bmp:"image/bmp",png:"image/png",xls:"application/vnd.ms-excel",xlsx:"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",rtf:"application/rtf",ppt:"application/vnd.ms-powerpoint",pptx:"application/vnd.openxmlformats-officedocument.presentationml.presentation"}[e.toLowerCase()]}open(e){this.authService.dismiss();const t=e.split(".").reverse()[0],n=this.getMIMEtype(t);console.log(t,n,e),this.fileOpener.showOpenWithDialog(e,n).then(()=>console.log("File is opened")).catch(e=>{this.alertService.presentToast(e)})}download(e,t){return Object(s.a)(this,void 0,void 0,(function*(){yield this.authService.presentLoading();const n=encodeURI(t);this.fileTransfer=this.transfer.create(),this.fileTransfer.download(n,this.file.dataDirectory+e,!0).then(e=>{console.log("download completed: "+e.toURL()),this.open(e.toURL())}).catch(t=>{this.authService.dismiss(),/\s/.test(e)&&this.alertService.presentToast("Download failed: File Name has spaces"),this.alertService.presentToast("Download failed: Attempting to open multiple documents"),console.log("download failed: "+JSON.stringify(t))})}))}formatDate(e){return l(e).format("MMM D, YYYY")}addfeed(){this.router.navigate(["feedback"],{state:{subject:this.homeworkInfo.subject_name+" "+this.homeworkInfo.title,studentName:this.student_name,student_id:this.student_id}})}}return e.\u0275fac=function(t){return new(t||e)(u["\u0275\u0275directiveInject"](r.a),u["\u0275\u0275directiveInject"](r.g),u["\u0275\u0275directiveInject"](c.a),u["\u0275\u0275directiveInject"](m.a),u["\u0275\u0275directiveInject"](p.a),u["\u0275\u0275directiveInject"](d.a),u["\u0275\u0275directiveInject"](g.a),u["\u0275\u0275directiveInject"](h.a),u["\u0275\u0275directiveInject"](f.a))},e.\u0275cmp=u["\u0275\u0275defineComponent"]({type:e,selectors:[["app-homework"]],decls:29,vars:8,consts:[["color","primary"],["slot","start",2,"font-size","14px"],["text","","icon","chevron-back"],[2,"text-transform","uppercase"],[1,"ion-no-padding"],["col-12",""],["col-4",""],["col-8",""],[1,"info",2,"font-size","14px",3,"innerHTML"],[4,"ngIf"],["vertical","bottom","horizontal","end","slot","fixed",3,"click",4,"ngIf"],["class","ion-no-padding",4,"ngIf"],[4,"ngFor","ngForOf"],["no-padding","",2,"font-size","14px","color","blue","border-bottom","blue 1px !important",3,"click"],["name","document-attach","md","md-attach"],[2,"color","blue","font-size","13px"],["vertical","bottom","horizontal","end","slot","fixed",3,"click"],["color","tertiary"],["name","chatbox-ellipses"]],template:function(e,t){1&e&&(u["\u0275\u0275elementStart"](0,"ion-header"),u["\u0275\u0275elementStart"](1,"ion-toolbar",0),u["\u0275\u0275elementStart"](2,"ion-buttons",1),u["\u0275\u0275element"](3,"ion-back-button",2),u["\u0275\u0275elementStart"](4,"div",3),u["\u0275\u0275text"](5),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementStart"](6,"ion-content",4),u["\u0275\u0275elementStart"](7,"ion-card"),u["\u0275\u0275elementStart"](8,"ion-card-content"),u["\u0275\u0275elementStart"](9,"ion-grid"),u["\u0275\u0275elementStart"](10,"ion-row"),u["\u0275\u0275elementStart"](11,"ion-col",5),u["\u0275\u0275elementStart"](12,"strong"),u["\u0275\u0275text"](13,"By :"),u["\u0275\u0275elementEnd"](),u["\u0275\u0275text"](14),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementStart"](15,"ion-row"),u["\u0275\u0275elementStart"](16,"ion-col",6),u["\u0275\u0275elementStart"](17,"strong"),u["\u0275\u0275text"](18,"Posted:"),u["\u0275\u0275elementEnd"](),u["\u0275\u0275text"](19),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementStart"](20,"ion-col",7),u["\u0275\u0275elementStart"](21,"strong"),u["\u0275\u0275text"](22,"Due in:"),u["\u0275\u0275elementEnd"](),u["\u0275\u0275text"](23),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementStart"](24,"ion-row"),u["\u0275\u0275elementStart"](25,"ion-col",5),u["\u0275\u0275element"](26,"div",8),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementEnd"](),u["\u0275\u0275template"](27,w,2,1,"div",9),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementEnd"](),u["\u0275\u0275template"](28,I,3,0,"ion-fab",10),u["\u0275\u0275elementEnd"]()),2&e&&(u["\u0275\u0275advance"](5),u["\u0275\u0275textInterpolate2"](" ",t.homeworkInfo.title," ",t.homeworkInfo.subject_name,""),u["\u0275\u0275advance"](9),u["\u0275\u0275textInterpolate1"](" ",t.homeworkInfo.posted_by,""),u["\u0275\u0275advance"](5),u["\u0275\u0275textInterpolate1"](" ",t.formatDate(t.homeworkInfo.assigned_date)," "),u["\u0275\u0275advance"](4),u["\u0275\u0275textInterpolate1"](" ",t.formatDate(t.homeworkInfo.due_date),""),u["\u0275\u0275advance"](3),u["\u0275\u0275property"]("innerHTML",t.homeworkInfo.body,u["\u0275\u0275sanitizeHtml"]),u["\u0275\u0275advance"](1),u["\u0275\u0275property"]("ngIf",t.homeworkInfo.attachment),u["\u0275\u0275advance"](1),u["\u0275\u0275property"]("ngIf","true"===t.feed))},directives:[a.q,a.L,a.g,a.d,a.e,a.l,a.h,a.i,a.p,a.B,a.k,o.i,o.h,a.v,a.t,a.r,a.n,a.o],styles:["ion-segment[_ngcontent-%COMP%]{text-transform:none}ion-segment[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%]{color:#fff;font-size:12px}ion-content[_ngcontent-%COMP%]{font-size:12px}ion-content[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%], ion-content[_ngcontent-%COMP%]   ion-col[_ngcontent-%COMP%]{color:#000;font-size:12px}ion-content[_ngcontent-%COMP%]   ion-list[_ngcontent-%COMP%]   [_ngcontent-%COMP%]::-webkit-scrollbar{display:inline}"]}),e})();n.d(t,"HomeworkPageModule",(function(){return k}));const S=[{path:"",component:b}];let k=(()=>{class e{}return e.\u0275mod=u["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=u["\u0275\u0275defineInjector"]({factory:function(t){return new(t||e)},imports:[[o.b,i.FormsModule,a.M,r.i.forChild(S)]]}),e})()}}]);