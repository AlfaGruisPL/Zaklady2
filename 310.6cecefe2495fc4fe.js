"use strict";(self.webpackChunkPanelZakladu=self.webpackChunkPanelZakladu||[]).push([[310],{9537:(M,P,i)=>{i.d(P,{w:()=>e});var r=i(9212),c=i(7695);let e=(()=>{class d{constructor(m){this.registerPage_=m}static#e=this.\u0275fac=function(f){return new(f||d)(r.Y36(c.m))};static#t=this.\u0275cmp=r.Xpm({type:d,selectors:[["app-register-page-save-button"]],standalone:!0,features:[r.jDz],decls:2,vars:0,consts:[[1,"saveContainer"],["type","button","value","Zapisz",1,"domyslnyButtonZapisz",3,"click"]],template:function(f,s){1&f&&(r.TgZ(0,"div",0)(1,"input",1),r.NdJ("click",function(){return s.registerPage_.saveData()}),r.qZA()())},styles:[".saveContainer[_ngcontent-%COMP%]{width:100%;display:flex;justify-content:right;padding-right:20px}"]})}return d})()},6310:(M,P,i)=>{i.r(P),i.d(P,{RegisterPageRouterModule:()=>ie,routes:()=>Z});var r=i(9584),c=i(6814),e=i(9212);const d=["app-first-template-menu",""],z=()=>["/panelPracownika/registerPage/firstTemplate"];let m=(()=>{class t{ngOnInit(){}static#e=this.\u0275fac=function(a){return new(a||t)};static#t=this.\u0275cmp=e.Xpm({type:t,selectors:[["","app-first-template-menu",""]],standalone:!0,features:[e.jDz],attrs:d,decls:2,vars:2,consts:[[3,"routerLink"]],template:function(a,o){1&a&&(e.TgZ(0,"a",0),e._uU(1," Podstawowe\n"),e.qZA()),2&a&&e.Q6J("routerLink",e.DdM(1,z))},dependencies:[c.ez,r.rH],styles:["[_nghost-%COMP%]{display:contents}"]})}return t})();const f=["app-second-template-menu",""],x=()=>["/panelPracownika/registerPage/secondTemplate/default"],g=()=>["/panelPracownika/registerPage/secondTemplate/subpages"],T=()=>["/panelPracownika/registerPage/secondTemplate/registrationVisits"],b=()=>["/panelPracownika/registerPage/secondTemplate/footer"];let U=(()=>{class t{ngOnInit(){}static#e=this.\u0275fac=function(a){return new(a||t)};static#t=this.\u0275cmp=e.Xpm({type:t,selectors:[["","app-second-template-menu",""]],standalone:!0,features:[e.jDz],attrs:f,decls:8,vars:12,consts:[[1,"Atag",3,"routerLinkActive","routerLink"]],template:function(a,o){1&a&&(e.TgZ(0,"a",0),e._uU(1,"Strona g\u0142\xf3wna"),e.qZA(),e.TgZ(2,"a",0),e._uU(3,"Podstrony"),e.qZA(),e.TgZ(4,"a",0),e._uU(5,"Formularz rejestracji"),e.qZA(),e.TgZ(6,"a",0),e._uU(7," Stopka\n"),e.qZA()),2&a&&(e.Q6J("routerLinkActive","active")("routerLink",e.DdM(8,x)),e.xp6(2),e.Q6J("routerLinkActive","active")("routerLink",e.DdM(9,g)),e.xp6(2),e.Q6J("routerLinkActive","active")("routerLink",e.DdM(10,T)),e.xp6(2),e.Q6J("routerLinkActive","active")("routerLink",e.DdM(11,b)))},dependencies:[c.ez,r.rH,r.Od],styles:["[_nghost-%COMP%]{display:contents}"]})}return t})();var y=i(7695);function R(t,l){1&t&&e._UZ(0,"div",4)}function j(t,l){1&t&&e._UZ(0,"div",5)}const A=()=>["/panelPracownika/registerPage/settings"];let S=(()=>{class t{constructor(n){this.registerPage_=n}static#e=this.\u0275fac=function(a){return new(a||t)(e.Y36(y.m))};static#t=this.\u0275cmp=e.Xpm({type:t,selectors:[["app-register-page-menu"]],standalone:!0,features:[e.jDz],decls:5,vars:5,consts:[[1,"registerPageMenu"],[1,"registerPageMenuFirstLink",3,"routerLinkActive","routerLink"],["app-first-template-menu","","id","divWithATag",4,"ngIf"],["app-second-template-menu","","id","divWithATag2",4,"ngIf"],["app-first-template-menu","","id","divWithATag"],["app-second-template-menu","","id","divWithATag2"]],template:function(a,o){1&a&&(e.TgZ(0,"div",0)(1,"a",1),e._uU(2," Ustawienia og\xf3lne "),e.qZA(),e.YNc(3,R,1,0,"div",2)(4,j,1,0,"div",3),e.qZA()),2&a&&(e.xp6(1),e.Q6J("routerLinkActive","active")("routerLink",e.DdM(4,A)),e.xp6(2),e.Q6J("ngIf","template1"==o.registerPage_.selectedTemplate),e.xp6(1),e.Q6J("ngIf","template2"==o.registerPage_.selectedTemplate))},dependencies:[c.ez,c.O5,r.rH,r.Od,m,U],styles:[".registerPageMenu{width:100%;display:flex;overflow-x:hidden}@media (max-width: 800px){.registerPageMenu{flex-wrap:wrap;justify-items:stretch}}.registerPageMenu a{display:flex;justify-content:center;align-items:center;flex-grow:10;height:50px;background:#e1e1e1;box-shadow:0 0 5px 3px inset #00000026;padding-left:20px;padding-right:20px;border:1px solid rgba(84,84,84,.85);transition:.5s;font-size:16px;color:#333;text-decoration:none;z-index:2;top:0;position:relative}@media (max-width: 800px){.registerPageMenu a{font-size:12px;padding:0 10px;height:30px}}.registerPageMenu a:hover{background:#c8c8c8;cursor:pointer}.registerPageMenu a.registerPageMenuFirstLink{flex-grow:2;z-index:1;position:relative}.registerPageMenu a.active{background:white;color:#000;z-index:5;position:relative;scale:1.15}\n"],encapsulation:2})}return t})(),D=(()=>{class t{constructor(n){this.registerPage_=n}ngOnInit(){this.registerPage_.fetchData()}static#e=this.\u0275fac=function(a){return new(a||t)(e.Y36(y.m))};static#t=this.\u0275cmp=e.Xpm({type:t,selectors:[["app-register-page"]],standalone:!0,features:[e.jDz],decls:6,vars:0,consts:[[1,"naglowekZolty"],[1,"naglowek1Wzoltym"],[1,"panelZakladu"]],template:function(a,o){1&a&&(e.TgZ(0,"div",0)(1,"span",1),e._uU(2,"Ustawiania strony reprezentacyjnej"),e.qZA()(),e.TgZ(3,"div",2),e._UZ(4,"app-register-page-menu")(5,"router-outlet"),e.qZA())},dependencies:[c.ez,r.lC,S],styles:["[_nghost-%COMP%]{display:flex;flex-direction:column;flex-grow:2000;overflow-y:auto}.panelZakladu[_ngcontent-%COMP%]{display:flex;flex-grow:999;flex-direction:column}.formContainer[_ngcontent-%COMP%]{flex-grow:1;min-height:50vh;display:flex;flex-direction:column;justify-content:space-between}h3.settingsSubTitle[_ngcontent-%COMP%]{padding:5px 5px 0;color:#343434}h4.settingsSubTitle[_ngcontent-%COMP%]{padding:3px;font-size:22px;color:#646464}h4.settingsSubTitle[_ngcontent-%COMP%]:not(:first-of-type){margin-top:15px;border-top:2px dashed rgba(165,42,42,.25)}"]})}return t})();var v=i(8581),_=i(95),w=i(6890),J=i(836),O=i(8180),L=i(6593),k=i(7191);function F(t,l){if(1&t&&e._UZ(0,"iframe",2),2&t){const n=e.oxw();e.Q6J("src",n.bezpiecznyLink,e.uOi)}}let I=(()=>{class t{constructor(n,a){this.sanitizer=n,this.danePodreczne_=a,this.randomIframeNumber=123,this.linkDoPodlgadu="",this.bezpiecznyLink="",this.env=v.N}ngOnInit(){""!=this.danePodreczne_.danePodreczneObiekt.identyfikatorZakladu&&this.pobierz(),this.danePodreczne_.danePodreczneObserveble.pipe((0,J.T)(1),(0,O.q)(1)).subscribe(n=>{this.pobierz()})}pobierz(){this.linkDoPodlgadu=0==this.env.production?"https://"+this.danePodreczne_.danePodreczneObiekt.identyfikatorZakladu+".fenek.tech/?dummyVar="+this.randomIframeNumber:"https://"+this.danePodreczne_.danePodreczneObiekt.identyfikatorZakladu+".mojzaklad.pl/?dummyVar="+this.randomIframeNumber,this.bezpiecznyLink=this.sanitizer.bypassSecurityTrustResourceUrl(this.linkDoPodlgadu)}OdswiezPodglad(){this.randomIframeNumber=Math.round(1e6*Math.random()),this.bezpiecznyLink=this.sanitizer.bypassSecurityTrustResourceUrl(this.linkDoPodlgadu)}static#e=this.\u0275fac=function(a){return new(a||t)(e.Y36(L.H7),e.Y36(k.v))};static#t=this.\u0275cmp=e.Xpm({type:t,selectors:[["app-register-page-iframe"]],standalone:!0,features:[e.jDz],decls:4,vars:1,consts:[[1,"iframe-container"],["frameborder","0",3,"src",4,"ngIf"],["frameborder","0",3,"src"]],template:function(a,o){1&a&&(e.TgZ(0,"h3"),e._uU(1,"Podgl\u0105d strony reklamowej:"),e.qZA(),e.TgZ(2,"div",0),e.YNc(3,F,1,1,"iframe",1),e.qZA()),2&a&&(e.xp6(3),e.Q6J("ngIf",o.linkDoPodlgadu.length>6))},dependencies:[c.O5],styles:['@charset "UTF-8";.iframe-container[_ngcontent-%COMP%]{position:relative;margin:auto;width:350px;background:rgba(245,245,245,.69);height:800px;max-height:80vh;overflow:hidden}.iframe-container[_ngcontent-%COMP%]   iframe[_ngcontent-%COMP%]{width:2820px;height:7000px;zoom:.35;-moz-transform:scale(.35);-moz-transform-origin:0 0;-o-transform:scale(.35);-o-transform-origin:0 0;-webkit-transform:scale(.35);-webkit-transform-origin:0 0;scale:.35;pointer-events:none}.iframe-container[_ngcontent-%COMP%]   .click-blocker[_ngcontent-%COMP%]{position:absolute;top:0;left:0;width:100%;height:100%;pointer-events:auto;background-color:transparent;opacity:0;z-index:1}']})}return t})();var Q=i(8915),N=i(9537),E=i(3866),Y=i(3132),B=i(9160);const K=["style",""];function W(t,l){1&t&&e._uU(0,"Status strony reprezentacyjnej:")}const H=()=>({standalone:!0});function X(t,l){if(1&t){const n=e.EpF();e.TgZ(0,"ui-switch",7),e.NdJ("ngModelChange",function(o){e.CHM(n);const p=e.oxw();return e.KtG(p.registerPage_.data.stronaReklamowaPrzelacznik=o)}),e.qZA()}if(2&t){const n=e.oxw();e.Q6J("ngModel",n.registerPage_.data.stronaReklamowaPrzelacznik)("ngModelOptions",e.DdM(2,H))}}function G(t,l){1&t&&e._uU(0,"Szablon:")}function V(t,l){if(1&t){const n=e.EpF();e.TgZ(0,"select",8),e.NdJ("change",function(o){e.CHM(n);const p=e.oxw();return e.KtG(p.changeTemplate(o.target))}),e.TgZ(1,"option",9),e._uU(2,"Szablon 1"),e.qZA(),e.TgZ(3,"option",10),e._uU(4,"Szablon 2"),e.qZA()(),e._uU(5)}if(2&t){const n=e.oxw();e.Q6J("value",n.registerPage_.selectedTemplate),e.xp6(5),e.hij(" ",n.registerPage_.selectedTemplate," ")}}function q(t,l){1&t&&e._uU(0,"Adres strony reklamowej:")}function $(t,l){if(1&t&&(e.TgZ(0,"a",11),e._uU(1),e.qZA()),2&t){const n=e.oxw();e.Q6J("href","http://"+n.danePodreczne_.danePodreczneObiekt.identyfikatorZakladu+".mojzaklad.pl",e.LSH),e.xp6(1),e.hij("www.",n.danePodreczne_.danePodreczneObiekt.identyfikatorZakladu,".mojzaklad.pl")}}function ee(t,l){1&t&&(e._uU(0,"S\u0142owa kluczowe: "),e.TgZ(1,"span",12),e._uU(2,"(Oddzielone przecinkami)"),e.qZA())}function te(t,l){if(1&t){const n=e.EpF();e.TgZ(0,"input",13),e.NdJ("ngModelChange",function(o){e.CHM(n);const p=e.oxw();return e.KtG(p.registerPage_.data.keywords=o)}),e.qZA()}if(2&t){const n=e.oxw();e.Q6J("ngModel",n.registerPage_.data.keywords)}}function ne(t,l){1&t&&e._uU(0,"Opis dla google:")}function ae(t,l){if(1&t){const n=e.EpF();e.TgZ(0,"textarea",14),e.NdJ("ngModelChange",function(o){e.CHM(n);const p=e.oxw();return e.KtG(p.registerPage_.data.miniDescription=o)}),e._uU(1," "),e.qZA()}if(2&t){const n=e.oxw();e.Q6J("ngModel",n.registerPage_.data.miniDescription)}}const Z=[{path:"",component:D,children:[{path:"settings",component:(()=>{class t{constructor(n,a,o){this.registerPage_=n,this.danePodreczne_=a,this.universalPrompt=o,this.odswiez=new e.vpe,this.environment=v.N,this.undefined=void 0}changeTemplate(n){const a=n.value,o=this.registerPage_.selectedTemplate;this.registerPage_.selectedTemplate="",setTimeout(()=>{this.registerPage_.selectedTemplate=o},10);const p=this.universalPrompt.open("Czy na pewno chcesz zmieni\u0107 szablon?","Zmiana szablonu powoduje utrat\u0119 ustawie\u0144 szablonu i jego danych.");p.addButton("Nie",{defaultNo:!0}),p.addButton("Tak",{defaultYes:!0}).pipe((0,O.q)(1)).subscribe(re=>{this.registerPage_.selectedTemplate=a})}static#e=this.\u0275fac=function(a){return new(a||t)(e.Y36(y.m),e.Y36(k.v),e.Y36(B.S))};static#t=this.\u0275cmp=e.Xpm({type:t,selectors:[["red","style",""]],outputs:{odswiez:"odswiez"},standalone:!0,features:[e.jDz],attrs:K,decls:22,vars:3,consts:[[1,"leftRightContainer"],[1,"left"],[1,"settingsSubTitle"],[3,"short"],["TemplateId","label"],["TemplateId","setting"],[1,"right"],["checkedLabel","W\u0142\u0105czona","uncheckedLabel","Wy\u0142\u0105czona",1,"przelacznikPublicznePrywatne",3,"ngModel","ngModelOptions","ngModelChange"],[3,"value","change"],["value","template1"],["value","template2"],[2,"font-weight","bold",3,"href"],[2,"color","#3c3c3c"],[3,"ngModel","ngModelChange"],[2,"width","100%",3,"ngModel","ngModelChange"]],template:function(a,o){1&a&&(e.TgZ(0,"div",0)(1,"div",1)(2,"h3",2),e._uU(3,"Ustawienia og\xf3lne:"),e.qZA(),e.TgZ(4,"app-template-setting",3),e.YNc(5,W,1,0,"ng-template",4)(6,X,1,3,"ng-template",5),e.qZA(),e.TgZ(7,"app-template-setting",3),e.YNc(8,G,1,0,"ng-template",4)(9,V,6,2,"ng-template",5),e.qZA(),e.TgZ(10,"app-template-setting",3),e.YNc(11,q,1,0,"ng-template",4)(12,$,2,2,"ng-template",5),e.qZA(),e.TgZ(13,"app-template-setting"),e.YNc(14,ee,3,0,"ng-template",4)(15,te,1,1,"ng-template",5),e.qZA(),e.TgZ(16,"app-template-setting"),e.YNc(17,ne,1,0,"ng-template",4)(18,ae,2,1,"ng-template",5),e.qZA(),e._UZ(19,"app-register-page-save-button"),e.qZA(),e.TgZ(20,"div",6),e._UZ(21,"app-register-page-iframe"),e.qZA()()),2&a&&(e.xp6(4),e.Q6J("short",!0),e.xp6(3),e.Q6J("short",!0),e.xp6(3),e.Q6J("short",!0))},dependencies:[_.u5,_.YN,_.Kr,_.Fj,_.JJ,_.On,_.UX,c.ez,w.S,w.o,I,Q.FP,N.w,E.y,Y.u],styles:["[_nghost-%COMP%]{display:block;height:100%}.toRight[_ngcontent-%COMP%]{text-align:right;width:100%;padding:15px 25px 0 0}.leftRightContainer[_ngcontent-%COMP%]{display:flex;width:100%;height:100%}.leftRightContainer[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%]{width:calc(100% - 350px);flex-shrink:1}@media (max-width: 1000px){.leftRightContainer[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%]{width:100%}}.leftRightContainer[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%]{z-index:10;background:rgba(229,229,229,.56);width:350px;flex-shrink:10;text-align:center;height:100%}@media (max-width: 1000px){.leftRightContainer[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%]{display:none}}","[_nghost-%COMP%]{display:flex;flex-direction:column;flex-grow:2000;overflow-y:auto}.panelZakladu[_ngcontent-%COMP%]{display:flex;flex-grow:999;flex-direction:column}.formContainer[_ngcontent-%COMP%]{flex-grow:1;min-height:50vh;display:flex;flex-direction:column;justify-content:space-between}h3.settingsSubTitle[_ngcontent-%COMP%]{padding:5px 5px 0;color:#343434}h4.settingsSubTitle[_ngcontent-%COMP%]{padding:3px;font-size:22px;color:#646464}h4.settingsSubTitle[_ngcontent-%COMP%]:not(:first-of-type){margin-top:15px;border-top:2px dashed rgba(165,42,42,.25)}"]})}return t})()},{path:"firstTemplate",loadChildren:()=>i.e(472).then(i.bind(i,9472)).then(t=>t.routes)},{path:"secondTemplate",loadChildren:()=>i.e(90).then(i.bind(i,9090)).then(t=>t.routes)},{path:"**",redirectTo:"settings",pathMatch:"full"}]}];let ie=(()=>{class t{static#e=this.\u0275fac=function(a){return new(a||t)};static#t=this.\u0275mod=e.oAB({type:t});static#n=this.\u0275inj=e.cJS({imports:[r.Bz.forChild(Z),r.Bz]})}return t})()},3132:(M,P,i)=>{i.d(P,{u:()=>f});var r=i(3866),c=i(6814),e=i(9212);function d(s,x){1&s&&e.GkF(0)}function z(s,x){1&s&&e.GkF(0)}const m=s=>({short:s});let f=(()=>{class s{constructor(){this.short=!1}ngAfterContentInit(){this.templates?.forEach(u=>{switch(u.id){case"setting":this.setting=u.template;break;case"label":this.label=u.template}})}static#e=this.\u0275fac=function(g){return new(g||s)};static#t=this.\u0275cmp=e.Xpm({type:s,selectors:[["app-template-setting"]],contentQueries:function(g,h,T){if(1&g&&e.Suo(T,r.y,4),2&g){let C;e.iGM(C=e.CRH())&&(h.templates=C)}},inputs:{short:"short"},standalone:!0,features:[e.jDz],decls:6,vars:8,consts:[[1,"settingPanelContainer",3,"ngClass"],[1,"descritpionPanel",3,"ngClass"],[4,"ngTemplateOutlet"],[1,"inputPanel"]],template:function(g,h){1&g&&(e.TgZ(0,"div",0)(1,"div",1)(2,"label"),e.YNc(3,d,1,0,"ng-container",2),e.qZA()(),e.TgZ(4,"div",3),e.YNc(5,z,1,0,"ng-container",2),e.qZA()()),2&g&&(e.Q6J("ngClass",e.VKq(4,m,h.short)),e.xp6(1),e.Q6J("ngClass",e.VKq(6,m,h.short)),e.xp6(2),e.Q6J("ngTemplateOutlet",h.label),e.xp6(2),e.Q6J("ngTemplateOutlet",h.setting))},dependencies:[c.tP,c.mk],styles:[".settingPanelContainer[_ngcontent-%COMP%]{display:flex;column-gap:10px;border-top:1px solid rgba(162,162,162,.54)}@media (max-width: 800px){.settingPanelContainer[_ngcontent-%COMP%]{flex-direction:column}.settingPanelContainer.short[_ngcontent-%COMP%]{flex-direction:row}}.settingPanelContainer[_ngcontent-%COMP%]   .descritpionPanel[_ngcontent-%COMP%]{border-right:1px solid rgba(162,162,162,.54);display:flex;width:240px;align-items:center;padding-left:10px;box-sizing:border-box;flex-shrink:0}@media (max-width: 800px){.settingPanelContainer[_ngcontent-%COMP%]   .descritpionPanel[_ngcontent-%COMP%]{padding-right:10px;width:100%;border-right:none}.settingPanelContainer[_ngcontent-%COMP%]   .descritpionPanel.short[_ngcontent-%COMP%]{width:50%}}.settingPanelContainer[_ngcontent-%COMP%]   .descritpionPanel[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{font-weight:700;padding:4px}.settingPanelContainer[_ngcontent-%COMP%]   .inputPanel[_ngcontent-%COMP%]{box-sizing:border-box;padding:4px 30px 4px 4px;flex-grow:10}@media (max-width: 800px){.settingPanelContainer[_ngcontent-%COMP%]   .inputPanel[_ngcontent-%COMP%]{width:100%;padding-left:10px}}  input{width:550px}@media (max-width: 800px){  input{width:100%}}"]})}return s})()}}]);