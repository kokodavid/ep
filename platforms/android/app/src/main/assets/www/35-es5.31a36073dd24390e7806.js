function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function _createClass(e,t,n){return t&&_defineProperties(e.prototype,t),n&&_defineProperties(e,n),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{ZIZF:function(e,t,n){"use strict";n.r(t);var o=n("ofXK"),i=n("3Pt+"),r=n("tyNb"),a=n("TEn/"),c=n("mrSG"),l=n("wd/R"),s=n("lGQG"),d=n("te5A"),m=n("B7Rs"),f=n("FAH8"),u=n("5zL6"),p=n("3LUQ"),h=n("fXoL"),v=n("tk/3");function g(e,t){if(1&e){var n=h["\u0275\u0275getCurrentView"]();h["\u0275\u0275elementStart"](0,"ion-list"),h["\u0275\u0275elementStart"](1,"ion-item",13),h["\u0275\u0275listener"]("click",(function(){h["\u0275\u0275restoreView"](n);var e=t.$implicit,o=h["\u0275\u0275nextContext"](3);return o.download(e,o.assets+e)})),h["\u0275\u0275elementStart"](2,"span"),h["\u0275\u0275text"](3),h["\u0275\u0275element"](4,"ion-icon",14),h["\u0275\u0275elementStart"](5,"a",15),h["\u0275\u0275text"](6),h["\u0275\u0275elementEnd"](),h["\u0275\u0275elementEnd"](),h["\u0275\u0275elementEnd"](),h["\u0275\u0275elementEnd"]()}if(2&e){var o=t.$implicit,i=t.index;h["\u0275\u0275advance"](3),h["\u0275\u0275textInterpolate1"](" ",i+1,". "),h["\u0275\u0275advance"](3),h["\u0275\u0275textInterpolate1"](" ",o," ")}}function x(e,t){if(1&e&&(h["\u0275\u0275elementStart"](0,"div",4),h["\u0275\u0275template"](1,g,7,2,"ion-list",12),h["\u0275\u0275elementEnd"]()),2&e){var n=h["\u0275\u0275nextContext"](2);h["\u0275\u0275advance"](1),h["\u0275\u0275property"]("ngForOf",n.attachments)}}function w(e,t){if(1&e&&(h["\u0275\u0275elementStart"](0,"div"),h["\u0275\u0275template"](1,x,2,1,"div",11),h["\u0275\u0275elementEnd"]()),2&e){var n=h["\u0275\u0275nextContext"]();h["\u0275\u0275advance"](1),h["\u0275\u0275property"]("ngIf",n.attachments.length>0)}}function k(e,t){if(1&e){var n=h["\u0275\u0275getCurrentView"]();h["\u0275\u0275elementStart"](0,"ion-fab",16),h["\u0275\u0275listener"]("click",(function(){return h["\u0275\u0275restoreView"](n),h["\u0275\u0275nextContext"]().addfeed()})),h["\u0275\u0275elementStart"](1,"ion-fab-button",17),h["\u0275\u0275element"](2,"ion-icon",18),h["\u0275\u0275elementEnd"](),h["\u0275\u0275elementEnd"]()}}var b,I=((b=function(){function e(t,n,o,i,r,a,c,l,s){var d=this;_classCallCheck(this,e),this.route=t,this.router=n,this.authService=o,this.transfer=i,this.file=r,this.fileOpener=a,this.http=c,this.env=l,this.alertService=s,this.homeworkInfo=new Object,this.route.queryParams.subscribe((function(e){if(d.router.getCurrentNavigation().extras.state){d.homeworkInfo=d.router.getCurrentNavigation().extras.state.details,d.school=d.router.getCurrentNavigation().extras.state.school,d.student_id=d.router.getCurrentNavigation().extras.state.student_id,d.student_name=d.router.getCurrentNavigation().extras.state.student;var t=d.homeworkInfo.attachment?d.homeworkInfo.attachment:null,n=null===t?"":t,o=null===n?null:n.split(",");d.attachments=""!==o[0]?o:[],d.assets="https://".concat(d.school,".eduweb.co.ke/assets/posts/")}}))}return _createClass(e,[{key:"ngOnInit",value:function(){return this.http.get(this.env.API_URL+"getParticularHomework/"+this.school+"/"+this.student_id+"/"+this.homeworkInfo.homework_id).subscribe((function(e){console.log(e)}))}},{key:"ionViewWillEnter",value:function(){return Object(c.a)(this,void 0,void 0,regeneratorRuntime.mark((function e(){var t=this;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.authService.checkFeed().then((function(e){console.log(e),t.feed=e}));case 2:case"end":return e.stop()}}),e,this)})))}},{key:"getMIMEtype",value:function(e){return{txt:"text/plain",docx:"application/vnd.openxmlformats-officedocument.wordprocessingml.document",doc:"application/msword",pdf:"application/pdf",jpg:"image/jpeg",bmp:"image/bmp",png:"image/png",xls:"application/vnd.ms-excel",xlsx:"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",rtf:"application/rtf",ppt:"application/vnd.ms-powerpoint",pptx:"application/vnd.openxmlformats-officedocument.presentationml.presentation"}[e.toLowerCase()]}},{key:"open",value:function(e){var t=this;this.authService.dismiss();var n=e.split(".").reverse()[0],o=this.getMIMEtype(n);console.log(n,o,e),this.fileOpener.showOpenWithDialog(e,o).then((function(){return console.log("File is opened")})).catch((function(e){t.alertService.presentToast(e)}))}},{key:"download",value:function(e,t){return Object(c.a)(this,void 0,void 0,regeneratorRuntime.mark((function n(){var o,i=this;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,this.authService.presentLoading();case 2:o=encodeURI(t),this.fileTransfer=this.transfer.create(),this.fileTransfer.download(o,this.file.dataDirectory+e,!0).then((function(e){console.log("download completed: "+e.toURL()),i.open(e.toURL())})).catch((function(t){i.authService.dismiss(),/\s/.test(e)&&i.alertService.presentToast("Download failed: File Name has spaces"),i.alertService.presentToast("Download failed: Attempting to open multiple documents"),console.log("download failed: "+JSON.stringify(t))}));case 4:case"end":return n.stop()}}),n,this)})))}},{key:"formatDate",value:function(e){return l(e).format("MMM D, YYYY")}},{key:"addfeed",value:function(){this.router.navigate(["feedback"],{state:{subject:this.homeworkInfo.subject_name+" "+this.homeworkInfo.title,studentName:this.student_name,student_id:this.student_id}})}}]),e}()).\u0275fac=function(e){return new(e||b)(h["\u0275\u0275directiveInject"](r.a),h["\u0275\u0275directiveInject"](r.g),h["\u0275\u0275directiveInject"](s.a),h["\u0275\u0275directiveInject"](m.a),h["\u0275\u0275directiveInject"](f.a),h["\u0275\u0275directiveInject"](d.a),h["\u0275\u0275directiveInject"](v.a),h["\u0275\u0275directiveInject"](u.a),h["\u0275\u0275directiveInject"](p.a))},b.\u0275cmp=h["\u0275\u0275defineComponent"]({type:b,selectors:[["app-homework"]],decls:29,vars:8,consts:[["color","primary"],["slot","start",2,"font-size","14px"],["text","","icon","chevron-back"],[2,"text-transform","uppercase"],[1,"ion-no-padding"],["col-12",""],["col-4",""],["col-8",""],[1,"info",2,"font-size","14px",3,"innerHTML"],[4,"ngIf"],["vertical","bottom","horizontal","end","slot","fixed",3,"click",4,"ngIf"],["class","ion-no-padding",4,"ngIf"],[4,"ngFor","ngForOf"],["no-padding","",2,"font-size","14px","color","blue","border-bottom","blue 1px !important",3,"click"],["name","document-attach","md","md-attach"],[2,"color","blue","font-size","13px"],["vertical","bottom","horizontal","end","slot","fixed",3,"click"],["color","tertiary"],["name","chatbox-ellipses"]],template:function(e,t){1&e&&(h["\u0275\u0275elementStart"](0,"ion-header"),h["\u0275\u0275elementStart"](1,"ion-toolbar",0),h["\u0275\u0275elementStart"](2,"ion-buttons",1),h["\u0275\u0275element"](3,"ion-back-button",2),h["\u0275\u0275elementStart"](4,"div",3),h["\u0275\u0275text"](5),h["\u0275\u0275elementEnd"](),h["\u0275\u0275elementEnd"](),h["\u0275\u0275elementEnd"](),h["\u0275\u0275elementEnd"](),h["\u0275\u0275elementStart"](6,"ion-content",4),h["\u0275\u0275elementStart"](7,"ion-card"),h["\u0275\u0275elementStart"](8,"ion-card-content"),h["\u0275\u0275elementStart"](9,"ion-grid"),h["\u0275\u0275elementStart"](10,"ion-row"),h["\u0275\u0275elementStart"](11,"ion-col",5),h["\u0275\u0275elementStart"](12,"strong"),h["\u0275\u0275text"](13,"By :"),h["\u0275\u0275elementEnd"](),h["\u0275\u0275text"](14),h["\u0275\u0275elementEnd"](),h["\u0275\u0275elementEnd"](),h["\u0275\u0275elementStart"](15,"ion-row"),h["\u0275\u0275elementStart"](16,"ion-col",6),h["\u0275\u0275elementStart"](17,"strong"),h["\u0275\u0275text"](18,"Posted:"),h["\u0275\u0275elementEnd"](),h["\u0275\u0275text"](19),h["\u0275\u0275elementEnd"](),h["\u0275\u0275elementStart"](20,"ion-col",7),h["\u0275\u0275elementStart"](21,"strong"),h["\u0275\u0275text"](22,"Due in:"),h["\u0275\u0275elementEnd"](),h["\u0275\u0275text"](23),h["\u0275\u0275elementEnd"](),h["\u0275\u0275elementEnd"](),h["\u0275\u0275elementStart"](24,"ion-row"),h["\u0275\u0275elementStart"](25,"ion-col",5),h["\u0275\u0275element"](26,"div",8),h["\u0275\u0275elementEnd"](),h["\u0275\u0275elementEnd"](),h["\u0275\u0275template"](27,w,2,1,"div",9),h["\u0275\u0275elementEnd"](),h["\u0275\u0275elementEnd"](),h["\u0275\u0275elementEnd"](),h["\u0275\u0275template"](28,k,3,0,"ion-fab",10),h["\u0275\u0275elementEnd"]()),2&e&&(h["\u0275\u0275advance"](5),h["\u0275\u0275textInterpolate2"](" ",t.homeworkInfo.title," ",t.homeworkInfo.subject_name,""),h["\u0275\u0275advance"](9),h["\u0275\u0275textInterpolate1"](" ",t.homeworkInfo.posted_by,""),h["\u0275\u0275advance"](5),h["\u0275\u0275textInterpolate1"](" ",t.formatDate(t.homeworkInfo.assigned_date)," "),h["\u0275\u0275advance"](4),h["\u0275\u0275textInterpolate1"](" ",t.formatDate(t.homeworkInfo.due_date),""),h["\u0275\u0275advance"](3),h["\u0275\u0275property"]("innerHTML",t.homeworkInfo.body,h["\u0275\u0275sanitizeHtml"]),h["\u0275\u0275advance"](1),h["\u0275\u0275property"]("ngIf",t.homeworkInfo.attachment),h["\u0275\u0275advance"](1),h["\u0275\u0275property"]("ngIf","true"===t.feed))},directives:[a.q,a.L,a.g,a.d,a.e,a.l,a.h,a.i,a.p,a.B,a.k,o.i,o.h,a.v,a.t,a.r,a.n,a.o],styles:["ion-segment[_ngcontent-%COMP%]{text-transform:none}ion-segment[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%]{color:#fff;font-size:12px}ion-content[_ngcontent-%COMP%]{font-size:12px}ion-content[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%], ion-content[_ngcontent-%COMP%]   ion-col[_ngcontent-%COMP%]{color:#000;font-size:12px}ion-content[_ngcontent-%COMP%]   ion-list[_ngcontent-%COMP%]   [_ngcontent-%COMP%]::-webkit-scrollbar{display:inline}"]}),b);n.d(t,"HomeworkPageModule",(function(){return _}));var S,C=[{path:"",component:I}],_=((S=function e(){_classCallCheck(this,e)}).\u0275mod=h["\u0275\u0275defineNgModule"]({type:S}),S.\u0275inj=h["\u0275\u0275defineInjector"]({factory:function(e){return new(e||S)},imports:[[o.b,i.FormsModule,a.M,r.i.forChild(C)]]}),S)}}]);