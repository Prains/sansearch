(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{5434:function(e,t,r){Promise.resolve().then(r.bind(r,5766)),Promise.resolve().then(r.bind(r,7421)),Promise.resolve().then(r.bind(r,4561)),Promise.resolve().then(r.t.bind(r,2011,23)),Promise.resolve().then(r.bind(r,1785)),Promise.resolve().then(r.bind(r,3032)),Promise.resolve().then(r.bind(r,5082)),Promise.resolve().then(r.bind(r,5718))},7421:function(e,t,r){"use strict";r.r(t);var s=r(9268),n=r(2082),i=r(5846),a=r.n(i),l=r(1513),c=r(2258);let o=()=>{let e=(0,c.Z)();return(0,s.jsx)(a(),{href:e?n.Z.mainpage:n.Z.login,children:(0,s.jsx)(l.Z,{type:"secondary",className:"text-white uppercase",children:"Попробовать"})})};t.default=o},4561:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return o}});var s=r(9268),n=r(6394),i=r.n(n),a=r(6387);let l=e=>{let{text:t}=e;return(0,s.jsxs)("li",{className:"flex flex-row items-start mb-[18px] last:mb-0",children:[(0,s.jsx)(i(),{className:"w-[20px] h-[20px] mt-[4px] mr-[9px] lg:h-[26px] lg:w-[26px] lg:mr-[18px]",src:a.m8,alt:"начало пункта в виде галочки"}),(0,s.jsx)("p",{className:"text-[16px] leading-[156%] lg:text-[24px]",children:t})]})},c=e=>{let{list:t}=e;return(0,s.jsx)("ul",{className:"max-w-[90%] mt-[28px] mb-[30px] lg:my-[52px]",children:null==t?void 0:t.map((e,t)=>(0,s.jsx)(l,{text:e},t))})};var o=c},5766:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return w}});var s=r(9268),n=r(6006);let i=e=>{let{children:t,className:r}=e;return(0,s.jsx)("h1",{className:"text-4xl uppercase"+" ".concat(r||""),children:t})};var a={src:"/_next/static/media/5583949 1.d4f85cbc.png",height:487,width:320,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAICAMAAAAGL8UJAAAAElBMVEXf6erm8PDa5ebT3t/J09Tu+Pf8x4FyAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAJklEQVR4nBXJsRHAQBCEMGDv+2/ZY6UCn1FcbLfYBYyn9DeKILUPB7sASkQCeEgAAAAASUVORK5CYII=",blurWidth:5,blurHeight:8},l=r(6394),c=r.n(l),o=r(6008);let d=e=>{let{placeholder:t,htmlType:r="text",value:n,onChange:i,required:a=!0}=e;return(0,s.jsx)("input",{type:r,placeholder:t,minLength:2,required:a,maxLength:254,value:n,onChange:i,className:"w-[280px] pl-4 py-2 border-darker-orange border rounded-sm rounded-ee-none rounded-es-none lg:w-full lg:py-0 lg:h-[60px] lg:rounded-e-none lg:rounded-es-sm"})};var u=r(4025),h=r(1513),x=r(2082),g=r(6387);let p=e=>{let{searchingZone:t}=e,r=(0,o.useRouter)(),[n,i]=(0,u.Z)(""),a=async e=>{n.trim()&&(e.preventDefault(),"ru"===t&&r.push("".concat(x.Z.sanctionsRussia,"/?search=").concat(n),void 0,{shallow:!0}),"eu"===t&&r.push("".concat(x.Z.sanctionsES,"/?search=").concat(n),void 0,{shallow:!0}),"usa"===t&&r.push("".concat(x.Z.sanctionsUsa,"/?search=").concat(n),void 0,{shallow:!0}))};return(0,s.jsxs)("article",{className:"flex items-center justify-center flex-col lg:flex-row lg:w-full",children:[(0,s.jsx)(d,{value:n,onChange:i,placeholder:"Введите название документа"}),(0,s.jsxs)(h.Z,{onClick:a,type:"secondary",htmlType:"submit",className:"text-white gap-1",children:[(0,s.jsx)(c(),{src:g.RL,alt:"Белая лупа"}),"НАЙТИ"]})]})},b=[{id:"ru",title:"Санкции РФ"},{id:"usa",title:"Санкции США"},{id:"eu",title:"Санкции ЕС"}],m=e=>{let{zone:t,setZone:r}=e,n=e=>e===t&&"!bg-white-orange";return(0,s.jsx)("article",{className:"flex items-center justify-center flex-col mt-[25px] gap-4 lg:flex-row lg:justify-start lg:mt-5",children:b.map(e=>(0,s.jsx)(h.Z,{onClick:()=>r(e.id),className:n(e.id),type:"rounded",children:e.title},e.id))})},f=e=>{let{searchingZone:t,searchingZoneTitle:r}=e,[l,c]=(0,n.useState)(null!=t?t:"ru");return(0,s.jsx)("section",{className:"flex items-center justify-center w-full mt-5",style:{background:"url('".concat(a.src,"')"),backgroundRepeat:"no-repeat",backgroundSize:"cover"},children:(0,s.jsxs)("div",{className:"w-[88%] my-[50px] mx-auto flex items-center justify-center flex-col lg:items-start",children:[(0,s.jsx)(i,{className:"mb-10 lg:mb-5 ".concat(r&&"mx-auto"),children:r||"поиск документа"}),(0,s.jsxs)("form",{className:"lg:w-full",children:[(0,s.jsx)(p,{searchingZone:l}),!t&&(0,s.jsx)(m,{zone:l,setZone:c})]})]})})};var w=f},1513:function(e,t,r){"use strict";var s=r(9268);let n=e=>{let{children:t,onClick:r,className:n,htmlType:i="button",type:a="primary",disabled:l,required:c,...o}=e;return"secondary"===a?(0,s.jsx)("button",{className:"bg-white-orange flex items-center justify-center text-[20px] w-[280px] h-[40px] lg:w-[290px] lg:h-[60px] hover:drop-shadow-roundedButton active:bg-darker-orange"+" ".concat(n),type:i,onClick:r,children:t}):"rounded"===a?(0,s.jsx)("button",{className:" w-[280px] lg:w-[120px] flex items-center justify-center py-3 text-sm leading-[14px] bg-white rounded-xl drop-shadow-roundedButton hover:bg-white-orange active:drop-shadow-none disabled:bg-transparent disabled:text-[#939393] disabled:border disabled:border-[#939393] disabled:border-solid"+" ".concat(n),type:i,onClick:r,required:!0,children:t}):"long"===a?(0,s.jsx)("button",{onClick:r,className:"text-[20px] w-[280px] h-[44px] mb-[16px] text-white-orange bg-white border-[1px] border-white-orange text-white md:rounded-[5px] xl:w-[416px]",...o,children:t}):"long-fill"===a?(0,s.jsx)("button",{onClick:r,className:"text-[20px] w-[280px] h-[44px] mb-[16px] bg-white-orange text-white disabled:text-white-black disabled:bg-white disabled:border-white-black disabled:border-[1px] md:rounded-[5px] xl:w-[416px]",disabled:l,...o,children:t}):(0,s.jsx)("button",{className:"bg-white-orange flex items-center justify-center text-base leading-4 w-[120px] py-[11px] hover:drop-shadow-roundedButton active:bg-darker-orange"+" ".concat(n),type:i,onClick:r,disabled:l,children:t})};t.Z=n},2258:function(e,t,r){"use strict";var s=r(6628);let n=()=>{let{user:e,status:t}=(0,s.v9)(e=>e.user);return"loading"!==t&&(e||"resolved"!==t)?e:null};t.Z=n},4025:function(e,t,r){"use strict";var s=r(6006);let n=e=>{let[t,r]=(0,s.useState)(e),n=e=>{r(e.target.value)};return[t,n]};t.Z=n},6387:function(e,t,r){"use strict";r.d(t,{dC:function(){return i},pD:function(){return a},m8:function(){return n},$r:function(){return c},Zu:function(){return l},RL:function(){return s}});var s={src:"/_next/static/media/icons8-search 1.b66dcfe8.svg",height:20,width:20,blurWidth:0,blurHeight:0},n={src:"/_next/static/media/done.ba8d67f0.svg",height:22,width:26,blurWidth:0,blurHeight:0},i={src:"/_next/static/media/menu.5c5c11a1.svg",height:19,width:37,blurWidth:0,blurHeight:0},a={src:"/_next/static/media/close.c7731200.svg",height:28,width:28,blurWidth:0,blurHeight:0},l={src:"/_next/static/media/Profile-stroke.68b45e14.svg",height:40,width:40,blurWidth:0,blurHeight:0},c={src:"/_next/static/media/exitButton.250523f8.svg",height:24,width:24,blurWidth:0,blurHeight:0}},2082:function(e,t){"use strict";t.Z={mainpage:"/",sanctionsRussia:"/sanctions/russia",sanctionsUsa:"/sanctions/usa",sanctionsES:"/sanctions/eu",about:"/about",profile:"/profile",document:"/document",privacy:"/privacy-policy",login:"/login",registration:"/register",forgotPassword:"/forgot-password",accessError:"/access-error",backend:"https://sansearch.ru/strapi",controlTest:"/control-test"}},3032:function(e,t,r){"use strict";r.r(t),t.default={src:"/_next/static/media/access-card-form-svgrepo-com 1.8107b20c.svg",height:100,width:100,blurWidth:0,blurHeight:0}},5718:function(e,t,r){"use strict";r.r(t),t.default={src:"/_next/static/media/financial-report-svgrepo-com 1.b6c9bbdf.svg",height:100,width:100,blurWidth:0,blurHeight:0}},1785:function(e,t,r){"use strict";r.r(t),t.default={src:"/_next/static/media/internet-speed-svgrepo-com 1.ee750226.svg",height:100,width:100,blurWidth:0,blurHeight:0}},5082:function(e,t,r){"use strict";r.r(t),t.default={src:"/_next/static/media/platform-program-svgrepo-com.4c5ba009.svg",height:100,width:100,blurWidth:0,blurHeight:0}},5846:function(e,t,r){e.exports=r(414)}},function(e){e.O(0,[891,414,628,667,139,744],function(){return e(e.s=5434)}),_N_E=e.O()}]);