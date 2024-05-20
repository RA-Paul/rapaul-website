"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[1452],{1452:(O,a,o)=>{o.r(a),o.d(a,{ArticlePageModule:()=>A});var l=o(177),g=o(4341),d=o(1075),s=o(8986),t=o(4438),p=o(8956),m=o(385);class u{constructor(){this.title="",this.link="",this.image="",this.description="",this.pubDate=""}}let v=(()=>{var e;class i{constructor(){this.article=new u}ngOnInit(){}open(n){window.open(n,"_blank")}}return(e=i).\u0275fac=function(n){return new(n||e)},e.\u0275cmp=t.VBU({type:e,selectors:[["app-article-card"]],inputs:{article:"article"},decls:14,vars:4,consts:[["id","card",3,"click"],[1,"img-container"],["alt","article image",3,"src"],[1,"title"],[1,"description"],[1,"date"]],template:function(n,c){1&n&&(t.j41(0,"div",0),t.bIt("click",function(){return c.open(c.article.link)}),t.j41(1,"div",1),t.nrm(2,"img",2),t.k0s(),t.j41(3,"div")(4,"div")(5,"div",3)(6,"span"),t.EFF(7),t.k0s()(),t.j41(8,"div",4)(9,"div"),t.EFF(10),t.k0s()(),t.j41(11,"div",5)(12,"div"),t.EFF(13),t.k0s()()()()()),2&n&&(t.R7$(2),t.Y8G("src",c.article.image,t.B4B),t.R7$(5),t.JRh(c.article.title),t.R7$(3),t.JRh(c.article.description),t.R7$(3),t.JRh(c.article.pubDate))},styles:["#card[_ngcontent-%COMP%]{background-color:#fff;border-radius:10px;margin:1em;box-shadow:5px 5px #01a48f;padding:1em 1em 2em;cursor:pointer}#card[_ngcontent-%COMP%]:hover{background-color:var(--color-light-yellow)}.title[_ngcontent-%COMP%]{font-size:1.8em;font-weight:700;margin-bottom:.5em}.description[_ngcontent-%COMP%]{font-size:1.2em;margin-bottom:1em}.description[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:2;overflow:hidden;color:var(--color-gray)}.date[_ngcontent-%COMP%]{float:right;font-size:1.2em;color:var(--color-gray)}"]}),i})();var h=o(2905);function C(e,i){if(1&e&&(t.qex(0),t.nrm(1,"app-article-card",3),t.bVm()),2&e){const r=i.$implicit;t.R7$(),t.Y8G("article",r)}}const P=[{path:"",component:(()=>{var e;class i{constructor(n){this.articleService=n,this.articleList=[]}ngOnInit(){this.getArticleList()}getArticleList(){this.articleList=this.articleService.getArticleList()}}return(e=i).\u0275fac=function(n){return new(n||e)(t.rXU(p.q))},e.\u0275cmp=t.VBU({type:e,selectors:[["app-article"]],decls:12,vars:1,consts:[["id","row"],[1,"title"],[4,"ngFor","ngForOf"],[3,"article"]],template:function(n,c){1&n&&(t.nrm(0,"app-header"),t.j41(1,"ion-content")(2,"div",0)(3,"div")(4,"div",1)(5,"span"),t.EFF(6,"\u6587\u7ae0\u5c08\u5340"),t.k0s()(),t.j41(7,"div"),t.DNE(8,C,2,1,"ng-container",2),t.k0s()(),t.j41(9,"div"),t.nrm(10,"app-about"),t.k0s()()(),t.EFF(11,"\ns\n")),2&n&&(t.R7$(8),t.Y8G("ngForOf",c.articleList))},dependencies:[l.Sq,d.W9,m.l,v,h.B],styles:["ion-content[_ngcontent-%COMP%]{--background: var(--color-dark-blue);--padding-bottom: 2em;--padding-start: 5%;--padding-end: 5%}#row[_ngcontent-%COMP%]{width:100%;display:grid;grid-template-columns:calc(100% - 350px) 350px}#row[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(1){height:200px;padding-top:2em}#row[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(2){padding:2em 1em}@media screen and (max-width: 768px){#row[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(2){display:none}}@media screen and (max-width: 768px){#row[_ngcontent-%COMP%]{display:block}}.title[_ngcontent-%COMP%]{width:100%;font-size:2.5em;color:var(--color-light-yellow);text-align:center}.title[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{border-top:2px solid var(--color-light-yellow);border-bottom:2px solid var(--color-light-yellow)}"]}),i})()}];let f=(()=>{var e;class i{}return(e=i).\u0275fac=function(n){return new(n||e)},e.\u0275mod=t.$C({type:e}),e.\u0275inj=t.G2t({imports:[s.iI.forChild(P),s.iI]}),i})();var M=o(5553);let A=(()=>{var e;class i{}return(e=i).\u0275fac=function(n){return new(n||e)},e.\u0275mod=t.$C({type:e}),e.\u0275inj=t.G2t({imports:[l.MD,g.YN,d.bv,f,M.h]}),i})()}}]);