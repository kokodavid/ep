(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{TNmF:function(e,t,n){"use strict";n.r(t);var a=n("ofXK"),o=n("3Pt+"),i=n("tyNb"),r=n("TEn/"),l=n("mrSG"),s=n("lGQG"),d=n("wd/R"),c=n("IfdK"),m=n("fXoL");function u(e,t){if(1&e&&(m["\u0275\u0275elementStart"](0,"ion-avatar",10),m["\u0275\u0275element"](1,"img",11),m["\u0275\u0275elementEnd"]()),2&e){const e=m["\u0275\u0275nextContext"]();m["\u0275\u0275advance"](1),m["\u0275\u0275propertyInterpolate"]("src",e.assets,m["\u0275\u0275sanitizeUrl"])}}function f(e,t){1&e&&(m["\u0275\u0275elementStart"](0,"ion-avatar",10),m["\u0275\u0275element"](1,"ion-icon",12),m["\u0275\u0275elementEnd"]())}function p(e,t){1&e&&(m["\u0275\u0275elementStart"](0,"ion-list"),m["\u0275\u0275element"](1,"br"),m["\u0275\u0275element"](2,"ion-spinner",13),m["\u0275\u0275elementEnd"]())}function h(e,t){1&e&&(m["\u0275\u0275elementStart"](0,"ion-card"),m["\u0275\u0275elementStart"](1,"ion-item"),m["\u0275\u0275text"](2," No gallery. "),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementEnd"]())}function g(e,t){if(1&e&&(m["\u0275\u0275elementStart"](0,"div"),m["\u0275\u0275elementStart"](1,"ion-card"),m["\u0275\u0275elementStart"](2,"ion-grid"),m["\u0275\u0275elementStart"](3,"ion-row"),m["\u0275\u0275elementStart"](4,"ion-col",14),m["\u0275\u0275element"](5,"ion-icon",15),m["\u0275\u0275text"](6),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementStart"](7,"ion-row"),m["\u0275\u0275elementStart"](8,"ion-col",16),m["\u0275\u0275element"](9,"div",17),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementStart"](10,"ion-row"),m["\u0275\u0275elementStart"](11,"ion-col",18),m["\u0275\u0275elementStart"](12,"small"),m["\u0275\u0275text"](13),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementStart"](14,"ion-col",18),m["\u0275\u0275elementStart"](15,"small"),m["\u0275\u0275text"](16),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementEnd"]()),2&e){const e=t.$implicit,n=m["\u0275\u0275nextContext"]();m["\u0275\u0275advance"](6),m["\u0275\u0275textInterpolate1"](" ",e.subject," "),m["\u0275\u0275advance"](3),m["\u0275\u0275property"]("innerHTML",e.message,m["\u0275\u0275sanitizeHtml"]),m["\u0275\u0275advance"](4),m["\u0275\u0275textInterpolate1"]("Created On: ",n.formatDate(e.creation_date),""),m["\u0275\u0275advance"](3),m["\u0275\u0275textInterpolate1"]("By: ",e.posted_by,"")}}function v(e,t){if(1&e){const e=m["\u0275\u0275getCurrentView"]();m["\u0275\u0275elementStart"](0,"ion-fab",19),m["\u0275\u0275listener"]("click",(function(){return m["\u0275\u0275restoreView"](e),m["\u0275\u0275nextContext"]().addfeed()})),m["\u0275\u0275elementStart"](1,"ion-fab-button",20),m["\u0275\u0275element"](2,"ion-icon",21),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementEnd"]()}}let b=(()=>{class e{constructor(e,t,n,a){this.authService=e,this.route=t,this.router=n,this.session=a,this.segment="summary",this.galleries=new Array,this.fake=1,setTimeout(()=>{this.fake=0},3e3),this.session.sessionTimeOut(),this.route.queryParams.subscribe(e=>{this.router.getCurrentNavigation().extras.state&&(this.student=this.router.getCurrentNavigation().extras.state.details,this.assets=null===this.student.student_image?1:`https://${this.student.school}.eduweb.co.ke/assets/students/${this.student.student_image}`)})}ngOnInit(){}ionViewWillEnter(){return Object(l.a)(this,void 0,void 0,(function*(){yield this.authService.checkFeed().then(e=>{console.log(e),this.feedback=e}),yield this.authService.gallery(this.student.school,this.student.student_id).subscribe(e=>{this.data1=e,this.galleries=void 0===this.data1.data?[]:this.data1.data})}))}segmentChanged(e){}formatDate(e){return d(e).format("MMM D, YYYY")}addfeed(){this.router.navigate(["feedback"],{})}albums(e){console.log(e),this.router.navigate(["details"],{state:{details:e,student:this.student}})}}return e.\u0275fac=function(t){return new(t||e)(m["\u0275\u0275directiveInject"](s.a),m["\u0275\u0275directiveInject"](i.a),m["\u0275\u0275directiveInject"](i.g),m["\u0275\u0275directiveInject"](c.a))},e.\u0275cmp=m["\u0275\u0275defineComponent"]({type:e,selectors:[["app-gallery"]],decls:15,vars:9,consts:[["color","primary"],["slot","start",2,"font-size","14px"],["text","","icon","chevron-back"],["lines","none"],["slot","start",4,"ngIf"],[2,"text-transform","uppercase"],[1,"ion-no-padding"],[4,"ngIf"],[4,"ngFor","ngForOf"],["vertical","bottom","horizontal","end","slot","fixed",3,"click",4,"ngIf"],["slot","start"],[3,"src"],["size","32","name","happy-outline",2,"font-size","2em"],["name","lines-small","color","primary",2,"text-align","center","margin-left","50%","margin-right","50%"],["col-6","",2,"color","#009e0f","font-weight","bold","text-transform","uppercase","font-size","12px"],["ios","ios-albums","md","md-albums",2,"color","black"],["col-12",""],[3,"innerHTML"],["col-6",""],["vertical","bottom","horizontal","end","slot","fixed",3,"click"],["color","tertiary"],["name","chatbox-ellipses"]],template:function(e,t){1&e&&(m["\u0275\u0275elementStart"](0,"ion-header"),m["\u0275\u0275elementStart"](1,"ion-toolbar",0),m["\u0275\u0275elementStart"](2,"ion-buttons",1),m["\u0275\u0275element"](3,"ion-back-button",2),m["\u0275\u0275text"](4,"GALLERY "),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementStart"](5,"ion-item",3),m["\u0275\u0275template"](6,u,2,1,"ion-avatar",4),m["\u0275\u0275template"](7,f,2,0,"ion-avatar",4),m["\u0275\u0275elementStart"](8,"ion-label",5),m["\u0275\u0275text"](9),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementStart"](10,"ion-content",6),m["\u0275\u0275template"](11,p,3,0,"ion-list",7),m["\u0275\u0275template"](12,h,3,0,"ion-card",7),m["\u0275\u0275template"](13,g,17,4,"div",8),m["\u0275\u0275template"](14,v,3,0,"ion-fab",9),m["\u0275\u0275elementEnd"]()),2&e&&(m["\u0275\u0275advance"](6),m["\u0275\u0275property"]("ngIf",1!==t.assets),m["\u0275\u0275advance"](1),m["\u0275\u0275property"]("ngIf",1===t.assets),m["\u0275\u0275advance"](2),m["\u0275\u0275textInterpolate3"]("",t.student.first_name," ",t.student.middle_name," ",t.student.last_name," "),m["\u0275\u0275advance"](2),m["\u0275\u0275property"]("ngIf",0===t.galleries.length&&1===t.fake),m["\u0275\u0275advance"](1),m["\u0275\u0275property"]("ngIf",0==t.galleries.length&&0===t.fake),m["\u0275\u0275advance"](1),m["\u0275\u0275property"]("ngForOf",t.galleries),m["\u0275\u0275advance"](1),m["\u0275\u0275property"]("ngIf","true"===t.feedback))},directives:[r.q,r.L,r.g,r.d,r.e,r.t,a.i,r.u,r.l,a.h,r.c,r.r,r.v,r.H,r.h,r.p,r.B,r.k,r.n,r.o],styles:["ion-content[_ngcontent-%COMP%]{font-size:12px;color:#000}ion-content[_ngcontent-%COMP%]   ion-card[_ngcontent-%COMP%]{color:#000}"]}),e})();n.d(t,"GalleryPageModule",(function(){return x}));const S=[{path:"",component:b}];let x=(()=>{class e{}return e.\u0275mod=m["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=m["\u0275\u0275defineInjector"]({factory:function(t){return new(t||e)},imports:[[a.b,o.FormsModule,r.M,i.i.forChild(S)]]}),e})()}}]);