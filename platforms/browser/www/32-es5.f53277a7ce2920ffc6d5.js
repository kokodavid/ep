function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function _createClass(e,t,n){return t&&_defineProperties(e.prototype,t),n&&_defineProperties(e,n),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{TNmF:function(e,t,n){"use strict";n.r(t);var a=n("ofXK"),r=n("3Pt+"),o=n("tyNb"),i=n("TEn/"),l=n("mrSG"),s=n("lGQG"),c=n("wd/R"),d=n("IfdK"),m=n("fXoL");function u(e,t){if(1&e&&(m["\u0275\u0275elementStart"](0,"ion-avatar",10),m["\u0275\u0275element"](1,"img",11),m["\u0275\u0275elementEnd"]()),2&e){var n=m["\u0275\u0275nextContext"]();m["\u0275\u0275advance"](1),m["\u0275\u0275propertyInterpolate"]("src",n.assets,m["\u0275\u0275sanitizeUrl"])}}function f(e,t){1&e&&(m["\u0275\u0275elementStart"](0,"ion-avatar",10),m["\u0275\u0275element"](1,"ion-icon",12),m["\u0275\u0275elementEnd"]())}function p(e,t){1&e&&(m["\u0275\u0275elementStart"](0,"ion-list"),m["\u0275\u0275element"](1,"br"),m["\u0275\u0275element"](2,"ion-spinner",13),m["\u0275\u0275elementEnd"]())}function v(e,t){1&e&&(m["\u0275\u0275elementStart"](0,"ion-card"),m["\u0275\u0275elementStart"](1,"ion-item"),m["\u0275\u0275text"](2," No gallery. "),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementEnd"]())}function g(e,t){if(1&e&&(m["\u0275\u0275elementStart"](0,"div"),m["\u0275\u0275elementStart"](1,"ion-card"),m["\u0275\u0275elementStart"](2,"ion-grid"),m["\u0275\u0275elementStart"](3,"ion-row"),m["\u0275\u0275elementStart"](4,"ion-col",14),m["\u0275\u0275element"](5,"ion-icon",15),m["\u0275\u0275text"](6),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementStart"](7,"ion-row"),m["\u0275\u0275elementStart"](8,"ion-col",16),m["\u0275\u0275element"](9,"div",17),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementStart"](10,"ion-row"),m["\u0275\u0275elementStart"](11,"ion-col",18),m["\u0275\u0275elementStart"](12,"small"),m["\u0275\u0275text"](13),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementStart"](14,"ion-col",18),m["\u0275\u0275elementStart"](15,"small"),m["\u0275\u0275text"](16),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementEnd"]()),2&e){var n=t.$implicit,a=m["\u0275\u0275nextContext"]();m["\u0275\u0275advance"](6),m["\u0275\u0275textInterpolate1"](" ",n.subject," "),m["\u0275\u0275advance"](3),m["\u0275\u0275property"]("innerHTML",n.message,m["\u0275\u0275sanitizeHtml"]),m["\u0275\u0275advance"](4),m["\u0275\u0275textInterpolate1"]("Created On: ",a.formatDate(n.creation_date),""),m["\u0275\u0275advance"](3),m["\u0275\u0275textInterpolate1"]("By: ",n.posted_by,"")}}function h(e,t){if(1&e){var n=m["\u0275\u0275getCurrentView"]();m["\u0275\u0275elementStart"](0,"ion-fab",19),m["\u0275\u0275listener"]("click",(function(){return m["\u0275\u0275restoreView"](n),m["\u0275\u0275nextContext"]().addfeed()})),m["\u0275\u0275elementStart"](1,"ion-fab-button",20),m["\u0275\u0275element"](2,"ion-icon",21),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementEnd"]()}}var b,y=((b=function(){function e(t,n,a,r){var o=this;_classCallCheck(this,e),this.authService=t,this.route=n,this.router=a,this.session=r,this.segment="summary",this.galleries=new Array,this.fake=1,setTimeout((function(){o.fake=0}),3e3),this.session.sessionTimeOut(),this.route.queryParams.subscribe((function(e){o.router.getCurrentNavigation().extras.state&&(o.student=o.router.getCurrentNavigation().extras.state.details,o.assets=null===o.student.student_image?1:"https://".concat(o.student.school,".eduweb.co.ke/assets/students/").concat(o.student.student_image))}))}return _createClass(e,[{key:"ngOnInit",value:function(){}},{key:"ionViewWillEnter",value:function(){return Object(l.a)(this,void 0,void 0,regeneratorRuntime.mark((function e(){var t=this;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.authService.checkFeed().then((function(e){console.log(e),t.feedback=e}));case 2:return e.next=4,this.authService.gallery(this.student.school,this.student.student_id).subscribe((function(e){t.data1=e,t.galleries=void 0===t.data1.data?[]:t.data1.data}));case 4:case"end":return e.stop()}}),e,this)})))}},{key:"segmentChanged",value:function(e){}},{key:"formatDate",value:function(e){return c(e).format("MMM D, YYYY")}},{key:"addfeed",value:function(){this.router.navigate(["feedback"],{})}},{key:"albums",value:function(e){console.log(e),this.router.navigate(["details"],{state:{details:e,student:this.student}})}}]),e}()).\u0275fac=function(e){return new(e||b)(m["\u0275\u0275directiveInject"](s.a),m["\u0275\u0275directiveInject"](o.a),m["\u0275\u0275directiveInject"](o.g),m["\u0275\u0275directiveInject"](d.a))},b.\u0275cmp=m["\u0275\u0275defineComponent"]({type:b,selectors:[["app-gallery"]],decls:15,vars:9,consts:[["color","primary"],["slot","start",2,"font-size","14px"],["text","","icon","chevron-back"],["lines","none"],["slot","start",4,"ngIf"],[2,"text-transform","uppercase"],[1,"ion-no-padding"],[4,"ngIf"],[4,"ngFor","ngForOf"],["vertical","bottom","horizontal","end","slot","fixed",3,"click",4,"ngIf"],["slot","start"],[3,"src"],["size","32","name","happy-outline",2,"font-size","2em"],["name","lines-small","color","primary",2,"text-align","center","margin-left","50%","margin-right","50%"],["col-6","",2,"color","#009e0f","font-weight","bold","text-transform","uppercase","font-size","12px"],["ios","ios-albums","md","md-albums",2,"color","black"],["col-12",""],[3,"innerHTML"],["col-6",""],["vertical","bottom","horizontal","end","slot","fixed",3,"click"],["color","tertiary"],["name","chatbox-ellipses"]],template:function(e,t){1&e&&(m["\u0275\u0275elementStart"](0,"ion-header"),m["\u0275\u0275elementStart"](1,"ion-toolbar",0),m["\u0275\u0275elementStart"](2,"ion-buttons",1),m["\u0275\u0275element"](3,"ion-back-button",2),m["\u0275\u0275text"](4,"GALLERY "),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementStart"](5,"ion-item",3),m["\u0275\u0275template"](6,u,2,1,"ion-avatar",4),m["\u0275\u0275template"](7,f,2,0,"ion-avatar",4),m["\u0275\u0275elementStart"](8,"ion-label",5),m["\u0275\u0275text"](9),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementStart"](10,"ion-content",6),m["\u0275\u0275template"](11,p,3,0,"ion-list",7),m["\u0275\u0275template"](12,v,3,0,"ion-card",7),m["\u0275\u0275template"](13,g,17,4,"div",8),m["\u0275\u0275template"](14,h,3,0,"ion-fab",9),m["\u0275\u0275elementEnd"]()),2&e&&(m["\u0275\u0275advance"](6),m["\u0275\u0275property"]("ngIf",1!==t.assets),m["\u0275\u0275advance"](1),m["\u0275\u0275property"]("ngIf",1===t.assets),m["\u0275\u0275advance"](2),m["\u0275\u0275textInterpolate3"]("",t.student.first_name," ",t.student.middle_name," ",t.student.last_name," "),m["\u0275\u0275advance"](2),m["\u0275\u0275property"]("ngIf",0===t.galleries.length&&1===t.fake),m["\u0275\u0275advance"](1),m["\u0275\u0275property"]("ngIf",0==t.galleries.length&&0===t.fake),m["\u0275\u0275advance"](1),m["\u0275\u0275property"]("ngForOf",t.galleries),m["\u0275\u0275advance"](1),m["\u0275\u0275property"]("ngIf","true"===t.feedback))},directives:[i.q,i.L,i.g,i.d,i.e,i.t,a.i,i.u,i.l,a.h,i.c,i.r,i.v,i.H,i.h,i.p,i.B,i.k,i.n,i.o],styles:["ion-content[_ngcontent-%COMP%]{font-size:12px;color:#000}ion-content[_ngcontent-%COMP%]   ion-card[_ngcontent-%COMP%]{color:#000}"]}),b);n.d(t,"GalleryPageModule",(function(){return E}));var x,k=[{path:"",component:y}],E=((x=function e(){_classCallCheck(this,e)}).\u0275mod=m["\u0275\u0275defineNgModule"]({type:x}),x.\u0275inj=m["\u0275\u0275defineInjector"]({factory:function(e){return new(e||x)},imports:[[a.b,r.FormsModule,i.M,o.i.forChild(k)]]}),x)}}]);