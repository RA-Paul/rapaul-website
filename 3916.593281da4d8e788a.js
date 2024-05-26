"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[3916],{3916:(M,d,r)=>{r.r(d),r.d(d,{ExperiencePageModule:()=>E});var a=r(177),g=r(4341),p=r(1075),l=r(8986),e=r(4438),s=r(6898),m=r(385);function x(n,i){if(1&n){const o=e.RV6();e.qex(0),e.j41(1,"div",8),e.bIt("click",function(){e.eBV(o);const c=e.XpG();return e.Njj(c.open())}),e.j41(2,"a"),e.EFF(3," \u524d\u5f80\u5c08\u6848 "),e.nrm(4,"ion-icon",9),e.k0s()(),e.bVm()}}let u=(()=>{var n;class i{constructor(){this.experience={title:"",description:"",link:"",image:"",date:"",tags:[]}}ngOnInit(){}open(){this.experience.link&&window.open(this.experience.link,"_blank")}}return(n=i).\u0275fac=function(t){return new(t||n)},n.\u0275cmp=e.VBU({type:n,selectors:[["app-experience-card"]],inputs:{experience:"experience"},decls:12,vars:5,consts:[["id","card"],["id","image"],["alt","experience image",3,"src"],["id","content"],[1,"title"],[1,"description"],[1,"date"],[4,"ngIf"],[1,"link",3,"click"],["name","arrow-forward"]],template:function(t,c){1&t&&(e.j41(0,"div",0)(1,"div",1),e.nrm(2,"img",2),e.k0s(),e.j41(3,"div",3)(4,"article")(5,"div",4),e.EFF(6),e.k0s(),e.j41(7,"div",5),e.EFF(8),e.k0s(),e.j41(9,"div",6),e.EFF(10),e.k0s(),e.DNE(11,x,5,0,"ng-container",7),e.k0s()()()),2&t&&(e.R7$(2),e.Y8G("src",c.experience.image,e.B4B),e.R7$(4),e.JRh(c.experience.title),e.R7$(2),e.JRh(c.experience.description),e.R7$(2),e.JRh(c.experience.date),e.R7$(),e.Y8G("ngIf",c.experience.link))},dependencies:[a.bT,p.iq],styles:["#card[_ngcontent-%COMP%]{background-color:#fff;border-radius:10px;margin:1em;box-shadow:5px 5px #01a48f;padding:1em 1em 2em}#image[_ngcontent-%COMP%]{padding:5px}#image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%;border-radius:10px}.title[_ngcontent-%COMP%]{font-size:1.8em;font-weight:700;margin-bottom:.5em}.description[_ngcontent-%COMP%]{text-wrap:wrap;white-space:pre-wrap}.date[_ngcontent-%COMP%]{margin-top:.2em;text-align:right;font-size:.8em;color:var(--color-gray)}#content[_ngcontent-%COMP%]{padding:5px;color:#000}.link[_ngcontent-%COMP%]{margin-top:.2em;cursor:pointer;text-align:right}.link[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{display:flex;align-items:center;float:right}"]}),i})();var C=r(2905);function h(n,i){if(1&n&&(e.qex(0),e.nrm(1,"app-experience-card",3),e.bVm()),2&n){const o=i.$implicit;e.R7$(),e.Y8G("experience",o)}}const v=[{path:"",component:(()=>{var n;class i{constructor(t){this.experienceService=t,this.experience_list=[]}ngOnInit(){this.experience_list=this.experienceService.getExperienceList()}}return(n=i).\u0275fac=function(t){return new(t||n)(e.rXU(s.y))},n.\u0275cmp=e.VBU({type:n,selectors:[["app-experience"]],decls:12,vars:1,consts:[["id","row"],[1,"title"],[4,"ngFor","ngForOf"],[3,"experience"]],template:function(t,c){1&t&&(e.nrm(0,"app-header"),e.j41(1,"ion-content")(2,"div",0)(3,"div")(4,"div",1)(5,"span"),e.EFF(6,"\u5c08\u6848\u4ecb\u7d39"),e.k0s()(),e.j41(7,"div"),e.DNE(8,h,2,1,"ng-container",2),e.k0s()(),e.j41(9,"div"),e.nrm(10,"app-about"),e.k0s()()(),e.EFF(11,"\ns\n")),2&t&&(e.R7$(8),e.Y8G("ngForOf",c.experience_list))},dependencies:[a.Sq,p.W9,m.l,u,C.B],styles:["ion-content[_ngcontent-%COMP%]{--background: var(--color-dark-blue);--padding-bottom: 2em;--padding-start: 5%;--padding-end: 5%}#row[_ngcontent-%COMP%]{width:100%;display:grid;grid-template-columns:calc(100% - 350px) 350px}#row[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(1){height:200px;padding-top:2em}#row[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(2){padding:2em 1em}@media screen and (max-width: 768px){#row[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(2){display:none}}@media screen and (max-width: 768px){#row[_ngcontent-%COMP%]{display:block}}.title[_ngcontent-%COMP%]{width:100%;font-size:2.5em;color:var(--color-light-yellow);text-align:center}.title[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{border-top:2px solid var(--color-light-yellow);border-bottom:2px solid var(--color-light-yellow)}"]}),i})()}];let P=(()=>{var n;class i{}return(n=i).\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.$C({type:n}),n.\u0275inj=e.G2t({imports:[l.iI.forChild(v),l.iI]}),i})();var f=r(5553);let E=(()=>{var n;class i{}return(n=i).\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.$C({type:n}),n.\u0275inj=e.G2t({imports:[a.MD,g.YN,p.bv,P,f.h]}),i})()}}]);