"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[2076],{5295:(y,f,a)=>{a.d(f,{c:()=>r});var s=a(5539),u=a(1086),d=a(8607);const r=(e,i)=>{let t,n;const _=(l,p,w)=>{if(typeof document>"u")return;const E=document.elementFromPoint(l,p);E&&i(E)&&!E.disabled?E!==t&&(o(),c(E,w)):o()},c=(l,p)=>{t=l,n||(n=t);const w=t;(0,s.w)(()=>w.classList.add("ion-activated")),p()},o=(l=!1)=>{if(!t)return;const p=t;(0,s.w)(()=>p.classList.remove("ion-activated")),l&&n!==t&&t.click(),t=void 0};return(0,d.createGesture)({el:e,gestureName:"buttonActiveDrag",threshold:0,onStart:l=>_(l.currentX,l.currentY,u.a),onMove:l=>_(l.currentX,l.currentY,u.b),onEnd:()=>{o(!0),(0,u.h)(),n=void 0}})}},8438:(y,f,a)=>{a.d(f,{g:()=>u});var s=a(8476);const u=()=>{if(void 0!==s.w)return s.w.Capacitor}},5572:(y,f,a)=>{a.d(f,{c:()=>s,i:()=>u});const s=(d,r,e)=>"function"==typeof e?e(d,r):"string"==typeof e?d[e]===r[e]:Array.isArray(r)?r.includes(d):d===r,u=(d,r,e)=>void 0!==d&&(Array.isArray(d)?d.some(i=>s(i,r,e)):s(d,r,e))},3351:(y,f,a)=>{a.d(f,{g:()=>s});const s=(i,t,n,_,c)=>d(i[1],t[1],n[1],_[1],c).map(o=>u(i[0],t[0],n[0],_[0],o)),u=(i,t,n,_,c)=>c*(3*t*Math.pow(c-1,2)+c*(-3*n*c+3*n+_*c))-i*Math.pow(c-1,3),d=(i,t,n,_,c)=>e((_-=c)-3*(n-=c)+3*(t-=c)-(i-=c),3*n-6*t+3*i,3*t-3*i,i).filter(l=>l>=0&&l<=1),e=(i,t,n,_)=>{if(0===i)return((i,t,n)=>{const _=t*t-4*i*n;return _<0?[]:[(-t+Math.sqrt(_))/(2*i),(-t-Math.sqrt(_))/(2*i)]})(t,n,_);const c=(3*(n/=i)-(t/=i)*t)/3,o=(2*t*t*t-9*t*n+27*(_/=i))/27;if(0===c)return[Math.pow(-o,1/3)];if(0===o)return[Math.sqrt(-c),-Math.sqrt(-c)];const l=Math.pow(o/2,2)+Math.pow(c/3,3);if(0===l)return[Math.pow(o/2,.5)-t/3];if(l>0)return[Math.pow(-o/2+Math.sqrt(l),1/3)-Math.pow(o/2+Math.sqrt(l),1/3)-t/3];const p=Math.sqrt(Math.pow(-c/3,3)),w=Math.acos(-o/(2*Math.sqrt(Math.pow(-c/3,3)))),E=2*Math.pow(p,1/3);return[E*Math.cos(w/3)-t/3,E*Math.cos((w+2*Math.PI)/3)-t/3,E*Math.cos((w+4*Math.PI)/3)-t/3]}},5083:(y,f,a)=>{a.d(f,{i:()=>s});const s=u=>u&&""!==u.dir?"rtl"===u.dir.toLowerCase():"rtl"===(null==document?void 0:document.dir.toLowerCase())},3126:(y,f,a)=>{a.r(f),a.d(f,{startFocusVisible:()=>r});const s="ion-focused",d=["Tab","ArrowDown","Space","Escape"," ","Shift","Enter","ArrowLeft","ArrowRight","ArrowUp","Home","End"],r=e=>{let i=[],t=!0;const n=e?e.shadowRoot:document,_=e||document.body,c=M=>{i.forEach(v=>v.classList.remove(s)),M.forEach(v=>v.classList.add(s)),i=M},o=()=>{t=!1,c([])},l=M=>{t=d.includes(M.key),t||c([])},p=M=>{if(t&&void 0!==M.composedPath){const v=M.composedPath().filter(h=>!!h.classList&&h.classList.contains("ion-focusable"));c(v)}},w=()=>{n.activeElement===_&&c([])};return n.addEventListener("keydown",l),n.addEventListener("focusin",p),n.addEventListener("focusout",w),n.addEventListener("touchstart",o,{passive:!0}),n.addEventListener("mousedown",o),{destroy:()=>{n.removeEventListener("keydown",l),n.removeEventListener("focusin",p),n.removeEventListener("focusout",w),n.removeEventListener("touchstart",o),n.removeEventListener("mousedown",o)},setFocus:c}}},1086:(y,f,a)=>{a.d(f,{I:()=>u,a:()=>t,b:()=>n,c:()=>i,d:()=>c,h:()=>_});var s=a(8438),u=function(o){return o.Heavy="HEAVY",o.Medium="MEDIUM",o.Light="LIGHT",o}(u||{});const r={getEngine(){const o=(0,s.g)();if(null!=o&&o.isPluginAvailable("Haptics"))return o.Plugins.Haptics},available(){if(!this.getEngine())return!1;const l=(0,s.g)();return"web"!==(null==l?void 0:l.getPlatform())||typeof navigator<"u"&&void 0!==navigator.vibrate},impact(o){const l=this.getEngine();l&&l.impact({style:o.style})},notification(o){const l=this.getEngine();l&&l.notification({type:o.type})},selection(){this.impact({style:u.Light})},selectionStart(){const o=this.getEngine();o&&o.selectionStart()},selectionChanged(){const o=this.getEngine();o&&o.selectionChanged()},selectionEnd(){const o=this.getEngine();o&&o.selectionEnd()}},e=()=>r.available(),i=()=>{e()&&r.selection()},t=()=>{e()&&r.selectionStart()},n=()=>{e()&&r.selectionChanged()},_=()=>{e()&&r.selectionEnd()},c=o=>{e()&&r.impact(o)}},909:(y,f,a)=>{a.d(f,{I:()=>i,a:()=>c,b:()=>e,c:()=>p,d:()=>E,f:()=>o,g:()=>_,i:()=>n,p:()=>w,r:()=>M,s:()=>l});var s=a(467),u=a(4920),d=a(4929);const e="ion-content",i=".ion-content-scroll-host",t=`${e}, ${i}`,n=v=>"ION-CONTENT"===v.tagName,_=function(){var v=(0,s.A)(function*(h){return n(h)?(yield new Promise(m=>(0,u.c)(h,m)),h.getScrollElement()):h});return function(m){return v.apply(this,arguments)}}(),c=v=>v.querySelector(i)||v.querySelector(t),o=v=>v.closest(t),l=(v,h)=>n(v)?v.scrollToTop(h):Promise.resolve(v.scrollTo({top:0,left:0,behavior:h>0?"smooth":"auto"})),p=(v,h,m,O)=>n(v)?v.scrollByPoint(h,m,O):Promise.resolve(v.scrollBy({top:m,left:h,behavior:O>0?"smooth":"auto"})),w=v=>(0,d.b)(v,e),E=v=>{if(n(v)){const m=v.scrollY;return v.scrollY=!1,m}return v.style.setProperty("overflow","hidden"),!0},M=(v,h)=>{n(v)?v.scrollY=h:v.style.removeProperty("overflow")}},3992:(y,f,a)=>{a.d(f,{a:()=>s,b:()=>p,c:()=>t,d:()=>w,e:()=>P,f:()=>i,g:()=>E,h:()=>d,i:()=>u,j:()=>g,k:()=>D,l:()=>n,m:()=>o,n:()=>M,o:()=>c,p:()=>e,q:()=>r,r:()=>C,s:()=>b,t:()=>l,u:()=>m,v:()=>O,w:()=>_,x:()=>v,y:()=>h});const s="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='square' stroke-miterlimit='10' stroke-width='48' d='M244 400L100 256l144-144M120 256h292' class='ionicon-fill-none'/></svg>",u="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M112 268l144 144 144-144M256 392V100' class='ionicon-fill-none'/></svg>",d="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M368 64L144 256l224 192V64z'/></svg>",r="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M64 144l192 224 192-224H64z'/></svg>",e="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M448 368L256 144 64 368h384z'/></svg>",i="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' d='M416 128L192 384l-96-96' class='ionicon-fill-none ionicon-stroke-width'/></svg>",t="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M328 112L184 256l144 144' class='ionicon-fill-none'/></svg>",n="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M112 184l144 144 144-144' class='ionicon-fill-none'/></svg>",_="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M136 208l120-104 120 104M136 304l120 104 120-104' stroke-width='48' stroke-linecap='round' stroke-linejoin='round' class='ionicon-fill-none'/></svg>",c="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M184 112l144 144-144 144' class='ionicon-fill-none'/></svg>",o="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M184 112l144 144-144 144' class='ionicon-fill-none'/></svg>",l="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M289.94 256l95-95A24 24 0 00351 127l-95 95-95-95a24 24 0 00-34 34l95 95-95 95a24 24 0 1034 34l95-95 95 95a24 24 0 0034-34z'/></svg>",p="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M256 48C141.31 48 48 141.31 48 256s93.31 208 208 208 208-93.31 208-208S370.69 48 256 48zm75.31 260.69a16 16 0 11-22.62 22.62L256 278.63l-52.69 52.68a16 16 0 01-22.62-22.62L233.37 256l-52.68-52.69a16 16 0 0122.62-22.62L256 233.37l52.69-52.68a16 16 0 0122.62 22.62L278.63 256z'/></svg>",w="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M400 145.49L366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49z'/></svg>",E="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><circle cx='256' cy='256' r='192' stroke-linecap='round' stroke-linejoin='round' class='ionicon-fill-none ionicon-stroke-width'/></svg>",M="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><circle cx='256' cy='256' r='48'/><circle cx='416' cy='256' r='48'/><circle cx='96' cy='256' r='48'/></svg>",v="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><circle cx='256' cy='256' r='64'/><path d='M490.84 238.6c-26.46-40.92-60.79-75.68-99.27-100.53C349 110.55 302 96 255.66 96c-42.52 0-84.33 12.15-124.27 36.11-40.73 24.43-77.63 60.12-109.68 106.07a31.92 31.92 0 00-.64 35.54c26.41 41.33 60.4 76.14 98.28 100.65C162 402 207.9 416 255.66 416c46.71 0 93.81-14.43 136.2-41.72 38.46-24.77 72.72-59.66 99.08-100.92a32.2 32.2 0 00-.1-34.76zM256 352a96 96 0 1196-96 96.11 96.11 0 01-96 96z'/></svg>",h="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M432 448a15.92 15.92 0 01-11.31-4.69l-352-352a16 16 0 0122.62-22.62l352 352A16 16 0 01432 448zM248 315.85l-51.79-51.79a2 2 0 00-3.39 1.69 64.11 64.11 0 0053.49 53.49 2 2 0 001.69-3.39zM264 196.15L315.87 248a2 2 0 003.4-1.69 64.13 64.13 0 00-53.55-53.55 2 2 0 00-1.72 3.39z'/><path d='M491 273.36a32.2 32.2 0 00-.1-34.76c-26.46-40.92-60.79-75.68-99.27-100.53C349 110.55 302 96 255.68 96a226.54 226.54 0 00-71.82 11.79 4 4 0 00-1.56 6.63l47.24 47.24a4 4 0 003.82 1.05 96 96 0 01116 116 4 4 0 001.05 3.81l67.95 68a4 4 0 005.4.24 343.81 343.81 0 0067.24-77.4zM256 352a96 96 0 01-93.3-118.63 4 4 0 00-1.05-3.81l-66.84-66.87a4 4 0 00-5.41-.23c-24.39 20.81-47 46.13-67.67 75.72a31.92 31.92 0 00-.64 35.54c26.41 41.33 60.39 76.14 98.28 100.65C162.06 402 207.92 416 255.68 416a238.22 238.22 0 0072.64-11.55 4 4 0 001.61-6.64l-47.47-47.46a4 4 0 00-3.81-1.05A96 96 0 01256 352z'/></svg>",m="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-miterlimit='10' d='M80 160h352M80 256h352M80 352h352' class='ionicon-fill-none ionicon-stroke-width'/></svg>",O="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M64 384h384v-42.67H64zm0-106.67h384v-42.66H64zM64 128v42.67h384V128z'/></svg>",C="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' d='M400 256H112' class='ionicon-fill-none ionicon-stroke-width'/></svg>",g="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' d='M96 256h320M96 176h320M96 336h320' class='ionicon-fill-none ionicon-stroke-width'/></svg>",D="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='square' stroke-linejoin='round' stroke-width='44' d='M118 304h276M118 208h276' class='ionicon-fill-none'/></svg>",b="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M221.09 64a157.09 157.09 0 10157.09 157.09A157.1 157.1 0 00221.09 64z' stroke-miterlimit='10' class='ionicon-fill-none ionicon-stroke-width'/><path stroke-linecap='round' stroke-miterlimit='10' d='M338.29 338.29L448 448' class='ionicon-fill-none ionicon-stroke-width'/></svg>",P="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M464 428L339.92 303.9a160.48 160.48 0 0030.72-94.58C370.64 120.37 298.27 48 209.32 48S48 120.37 48 209.32s72.37 161.32 161.32 161.32a160.48 160.48 0 0094.58-30.72L428 464zM209.32 319.69a110.38 110.38 0 11110.37-110.37 110.5 110.5 0 01-110.37 110.37z'/></svg>"},243:(y,f,a)=>{a.d(f,{c:()=>r,g:()=>e});var s=a(8476),u=a(4920),d=a(4929);const r=(t,n,_)=>{let c,o;if(void 0!==s.w&&"MutationObserver"in s.w){const E=Array.isArray(n)?n:[n];c=new MutationObserver(M=>{for(const v of M)for(const h of v.addedNodes)if(h.nodeType===Node.ELEMENT_NODE&&E.includes(h.slot))return _(),void(0,u.r)(()=>l(h))}),c.observe(t,{childList:!0,subtree:!0})}const l=E=>{var M;o&&(o.disconnect(),o=void 0),o=new MutationObserver(v=>{_();for(const h of v)for(const m of h.removedNodes)m.nodeType===Node.ELEMENT_NODE&&m.slot===n&&w()}),o.observe(null!==(M=E.parentElement)&&void 0!==M?M:E,{subtree:!0,childList:!0})},w=()=>{o&&(o.disconnect(),o=void 0)};return{destroy:()=>{c&&(c.disconnect(),c=void 0),w()}}},e=(t,n,_)=>{const c=null==t?0:t.toString().length,o=i(c,n);if(void 0===_)return o;try{return _(c,n)}catch(l){return(0,d.a)("Exception in provided `counterFormatter`.",l),o}},i=(t,n)=>`${t} / ${n}`},1622:(y,f,a)=>{a.r(f),a.d(f,{KEYBOARD_DID_CLOSE:()=>e,KEYBOARD_DID_OPEN:()=>r,copyVisualViewport:()=>C,keyboardDidClose:()=>v,keyboardDidOpen:()=>E,keyboardDidResize:()=>M,resetKeyboardAssist:()=>c,setKeyboardClose:()=>w,setKeyboardOpen:()=>p,startKeyboardAssist:()=>o,trackViewportChanges:()=>O});var s=a(4379);a(8438),a(8476);const r="ionKeyboardDidShow",e="ionKeyboardDidHide";let t={},n={},_=!1;const c=()=>{t={},n={},_=!1},o=g=>{if(s.K.getEngine())l(g);else{if(!g.visualViewport)return;n=C(g.visualViewport),g.visualViewport.onresize=()=>{O(g),E()||M(g)?p(g):v(g)&&w(g)}}},l=g=>{g.addEventListener("keyboardDidShow",D=>p(g,D)),g.addEventListener("keyboardDidHide",()=>w(g))},p=(g,D)=>{h(g,D),_=!0},w=g=>{m(g),_=!1},E=()=>!_&&t.width===n.width&&(t.height-n.height)*n.scale>150,M=g=>_&&!v(g),v=g=>_&&n.height===g.innerHeight,h=(g,D)=>{const P=new CustomEvent(r,{detail:{keyboardHeight:D?D.keyboardHeight:g.innerHeight-n.height}});g.dispatchEvent(P)},m=g=>{const D=new CustomEvent(e);g.dispatchEvent(D)},O=g=>{t=Object.assign({},n),n=C(g.visualViewport)},C=g=>({width:Math.round(g.width),height:Math.round(g.height),offsetTop:g.offsetTop,offsetLeft:g.offsetLeft,pageTop:g.pageTop,pageLeft:g.pageLeft,scale:g.scale})},4379:(y,f,a)=>{a.d(f,{K:()=>r,a:()=>d});var s=a(8438),u=function(e){return e.Unimplemented="UNIMPLEMENTED",e.Unavailable="UNAVAILABLE",e}(u||{}),d=function(e){return e.Body="body",e.Ionic="ionic",e.Native="native",e.None="none",e}(d||{});const r={getEngine(){const e=(0,s.g)();if(null!=e&&e.isPluginAvailable("Keyboard"))return e.Plugins.Keyboard},getResizeMode(){const e=this.getEngine();return null!=e&&e.getResizeMode?e.getResizeMode().catch(i=>{if(i.code!==u.Unimplemented)throw i}):Promise.resolve(void 0)}}},4731:(y,f,a)=>{a.d(f,{c:()=>i});var s=a(467),u=a(8476),d=a(4379);const r=t=>{if(void 0===u.d||t===d.a.None||void 0===t)return null;const n=u.d.querySelector("ion-app");return null!=n?n:u.d.body},e=t=>{const n=r(t);return null===n?0:n.clientHeight},i=function(){var t=(0,s.A)(function*(n){let _,c,o,l;const p=function(){var h=(0,s.A)(function*(){const m=yield d.K.getResizeMode(),O=void 0===m?void 0:m.mode;_=()=>{void 0===l&&(l=e(O)),o=!0,w(o,O)},c=()=>{o=!1,w(o,O)},null==u.w||u.w.addEventListener("keyboardWillShow",_),null==u.w||u.w.addEventListener("keyboardWillHide",c)});return function(){return h.apply(this,arguments)}}(),w=(h,m)=>{n&&n(h,E(m))},E=h=>{if(0===l||l===e(h))return;const m=r(h);return null!==m?new Promise(O=>{const g=new ResizeObserver(()=>{m.clientHeight===l&&(g.disconnect(),O())});g.observe(m)}):void 0};return yield p(),{init:p,destroy:()=>{null==u.w||u.w.removeEventListener("keyboardWillShow",_),null==u.w||u.w.removeEventListener("keyboardWillHide",c),_=c=void 0},isKeyboardVisible:()=>o}});return function(_){return t.apply(this,arguments)}}()},7838:(y,f,a)=>{a.d(f,{c:()=>u});var s=a(467);const u=()=>{let d;return{lock:function(){var e=(0,s.A)(function*(){const i=d;let t;return d=new Promise(n=>t=n),void 0!==i&&(yield i),t});return function(){return e.apply(this,arguments)}}()}}},9001:(y,f,a)=>{a.d(f,{c:()=>d});var s=a(8476),u=a(4920);const d=(r,e,i)=>{let t;const n=()=>!(void 0===e()||void 0!==r.label||null===i()),c=()=>{const l=e();if(void 0===l)return;if(!n())return void l.style.removeProperty("width");const p=i().scrollWidth;if(0===p&&null===l.offsetParent&&void 0!==s.w&&"IntersectionObserver"in s.w){if(void 0!==t)return;const w=t=new IntersectionObserver(E=>{1===E[0].intersectionRatio&&(c(),w.disconnect(),t=void 0)},{threshold:.01,root:r});w.observe(l)}else l.style.setProperty("width",.75*p+"px")};return{calculateNotchWidth:()=>{n()&&(0,u.r)(()=>{c()})},destroy:()=>{t&&(t.disconnect(),t=void 0)}}}},7895:(y,f,a)=>{a.d(f,{S:()=>u});const u={bubbles:{dur:1e3,circles:9,fn:(d,r,e)=>{const i=d*r/e-d+"ms",t=2*Math.PI*r/e;return{r:5,style:{top:32*Math.sin(t)+"%",left:32*Math.cos(t)+"%","animation-delay":i}}}},circles:{dur:1e3,circles:8,fn:(d,r,e)=>{const i=r/e,t=d*i-d+"ms",n=2*Math.PI*i;return{r:5,style:{top:32*Math.sin(n)+"%",left:32*Math.cos(n)+"%","animation-delay":t}}}},circular:{dur:1400,elmDuration:!0,circles:1,fn:()=>({r:20,cx:48,cy:48,fill:"none",viewBox:"24 24 48 48",transform:"translate(0,0)",style:{}})},crescent:{dur:750,circles:1,fn:()=>({r:26,style:{}})},dots:{dur:750,circles:3,fn:(d,r)=>({r:6,style:{left:32-32*r+"%","animation-delay":-110*r+"ms"}})},lines:{dur:1e3,lines:8,fn:(d,r,e)=>({y1:14,y2:26,style:{transform:`rotate(${360/e*r+(r<e/2?180:-180)}deg)`,"animation-delay":d*r/e-d+"ms"}})},"lines-small":{dur:1e3,lines:8,fn:(d,r,e)=>({y1:12,y2:20,style:{transform:`rotate(${360/e*r+(r<e/2?180:-180)}deg)`,"animation-delay":d*r/e-d+"ms"}})},"lines-sharp":{dur:1e3,lines:12,fn:(d,r,e)=>({y1:17,y2:29,style:{transform:`rotate(${30*r+(r<6?180:-180)}deg)`,"animation-delay":d*r/e-d+"ms"}})},"lines-sharp-small":{dur:1e3,lines:12,fn:(d,r,e)=>({y1:12,y2:20,style:{transform:`rotate(${30*r+(r<6?180:-180)}deg)`,"animation-delay":d*r/e-d+"ms"}})}}},7166:(y,f,a)=>{a.r(f),a.d(f,{createSwipeBackGesture:()=>e});var s=a(4920),u=a(5083),d=a(8607);a(1970);const e=(i,t,n,_,c)=>{const o=i.ownerDocument.defaultView;let l=(0,u.i)(i);const w=m=>l?-m.deltaX:m.deltaX;return(0,d.createGesture)({el:i,gestureName:"goback-swipe",gesturePriority:101,threshold:10,canStart:m=>(l=(0,u.i)(i),(m=>{const{startX:C}=m;return l?C>=o.innerWidth-50:C<=50})(m)&&t()),onStart:n,onMove:m=>{const C=w(m)/o.innerWidth;_(C)},onEnd:m=>{const O=w(m),C=o.innerWidth,g=O/C,D=(m=>l?-m.velocityX:m.velocityX)(m),P=D>=0&&(D>.2||O>C/2),k=(P?1-g:g)*C;let L=0;if(k>5){const x=k/Math.abs(D);L=Math.min(x,540)}c(P,g<=0?.01:(0,s.j)(0,g,.9999),L)}})}},2935:(y,f,a)=>{a.d(f,{w:()=>s});const s=(r,e,i)=>{if(typeof MutationObserver>"u")return;const t=new MutationObserver(n=>{i(u(n,e))});return t.observe(r,{childList:!0,subtree:!0}),t},u=(r,e)=>{let i;return r.forEach(t=>{for(let n=0;n<t.addedNodes.length;n++)i=d(t.addedNodes[n],e)||i}),i},d=(r,e)=>{if(1!==r.nodeType)return;const i=r;return(i.tagName===e.toUpperCase()?[i]:Array.from(i.querySelectorAll(e))).find(n=>n.value===i.value)}},5553:(y,f,a)=>{a.d(f,{h:()=>r});var s=a(177),u=a(1075),d=a(4438);let r=(()=>{var e;class i{}return(e=i).\u0275fac=function(n){return new(n||e)},e.\u0275mod=d.$C({type:e}),e.\u0275inj=d.G2t({imports:[s.MD,u.bv]}),i})()},385:(y,f,a)=>{a.d(f,{l:()=>i});var s=a(4438),u=a(8986),d=a(177),r=a(1075);function e(t,n){if(1&t){const _=s.RV6();s.qex(0),s.j41(1,"div",7)(2,"div",8),s.bIt("click",function(){s.eBV(_);const o=s.XpG();return s.Njj(o.toArticlePage())}),s.EFF(3,"\u6587\u7ae0\u5c08\u5340"),s.k0s(),s.j41(4,"div",8),s.bIt("click",function(){s.eBV(_);const o=s.XpG();return s.Njj(o.toHomePage())}),s.EFF(5,"\u81ea\u6211\u4ecb\u7d39"),s.k0s(),s.j41(6,"ion-icon",9),s.bIt("click",function(){s.eBV(_);const o=s.XpG();return s.Njj(o.closeMenu())}),s.k0s()(),s.bVm()}}let i=(()=>{var t;class n{constructor(c){this.router=c,this.translucent=!1,this.collapse="",this.menuShow=!1}ngOnInit(){}toArticlePage(){this.closeMenu(),"/article"!==this.router.url&&this.router.navigate(["/article"])}toHomePage(){this.closeMenu(),"/home"!==this.router.url&&this.router.navigate(["/home"])}openMenu(){this.menuShow=!0}closeMenu(){this.menuShow=!1}}return(t=n).\u0275fac=function(c){return new(c||t)(s.rXU(u.Ix))},t.\u0275cmp=s.VBU({type:t,selectors:[["app-header"]],inputs:{translucent:"translucent",collapse:"collapse"},decls:13,vars:3,consts:[[3,"translucent","collapse"],["src","assets/imgs/rapaul.png","alt","RA-Paul \u500b\u4eba\u7db2\u9801","slot","start"],["slot","end"],[1,"top-button1",3,"click"],[1,"top-button2",3,"click"],["name","menu"],[4,"ngIf"],["id","menu"],[3,"click"],["name","close",3,"click"]],template:function(c,o){1&c&&(s.j41(0,"ion-header",0)(1,"ion-toolbar"),s.nrm(2,"ion-img",1),s.j41(3,"ion-title"),s.EFF(4," RA-Paul \u500b\u4eba\u7db2\u9801 "),s.k0s(),s.j41(5,"ion-buttons",2)(6,"ion-button",3),s.bIt("click",function(){return o.toArticlePage()}),s.EFF(7,"\u6587\u7ae0\u5c08\u5340"),s.k0s(),s.j41(8,"ion-button",3),s.bIt("click",function(){return o.toHomePage()}),s.EFF(9,"\u81ea\u6211\u4ecb\u7d39"),s.k0s(),s.j41(10,"ion-button",4),s.bIt("click",function(){return o.openMenu()}),s.nrm(11,"ion-icon",5),s.k0s()()()(),s.DNE(12,e,7,0,"ng-container",6)),2&c&&(s.Y8G("translucent",o.translucent)("collapse",o.collapse),s.R7$(12),s.Y8G("ngIf",o.menuShow))},dependencies:[d.bT,r.Jm,r.QW,r.eU,r.iq,r.KW,r.BC,r.ai],styles:["ion-img[_ngcontent-%COMP%]{width:40px;height:40px}ion-button[_ngcontent-%COMP%]{font-size:1.2em;font-weight:700;--color: var(--color-dark-blue) !important}ion-title[_ngcontent-%COMP%]{font-weight:700;--color: var(--color-dark-blue) !important}ion-toolbar[_ngcontent-%COMP%]{padding:0 5%}#menu[_ngcontent-%COMP%]{padding-top:2em;background-color:#000000e6;width:100%;height:100%;position:fixed;top:0;left:0;z-index:1000;text-align:center}#menu[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{cursor:pointer;margin:.5em;padding:.5em;font-size:1.5em;font-weight:700;color:var(--color-light-yellow);border-bottom:1px solid var(--color-light-yellow)}#menu[_ngcontent-%COMP%]   ion-icon[name=close][_ngcontent-%COMP%]{cursor:pointer;margin-top:1em;font-size:3em;color:var(--color-light-yellow)}.top-button1[_ngcontent-%COMP%]{display:block}@media screen and (max-width: 768px){.top-button1[_ngcontent-%COMP%]{display:none}}.top-button2[_ngcontent-%COMP%]{display:none}@media screen and (max-width: 768px){.top-button2[_ngcontent-%COMP%]{display:block}}"]}),n})()}}]);