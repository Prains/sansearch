(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[452,773,748,467,222,605,26,846],{4739:function(e,t,r){Promise.resolve().then(r.bind(r,5766))},5766:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return w}});var n=r(9268),s=r(6006);let i=e=>{let{children:t,className:r}=e;return(0,n.jsx)("h1",{className:"text-4xl uppercase"+" ".concat(r||""),children:t})};var a={src:"/_next/static/media/5583949 1.d4f85cbc.png",height:487,width:320,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAICAMAAAAGL8UJAAAAElBMVEXf6erm8PDa5ebT3t/J09Tu+Pf8x4FyAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAJklEQVR4nBXJsRHAQBCEMGDv+2/ZY6UCn1FcbLfYBYyn9DeKILUPB7sASkQCeEgAAAAASUVORK5CYII=",blurWidth:5,blurHeight:8},c=r(6394),l=r.n(c),o=r(6008);let d=e=>{let{placeholder:t,htmlType:r="text",value:s,onChange:i,required:a=!0}=e;return(0,n.jsx)("input",{type:r,placeholder:t,minLength:2,required:a,maxLength:254,value:s,onChange:i,className:"w-[280px] pl-4 py-2 border-darker-orange border rounded-sm rounded-ee-none rounded-es-none lg:w-full lg:py-0 lg:h-[60px] lg:rounded-e-none lg:rounded-es-sm"})};var u=r(4025),h=r(1513),x=r(2082),g=r(6387);let b=e=>{let{searchingZone:t}=e,r=(0,o.useRouter)(),[s,i]=(0,u.Z)(""),a=async e=>{s.trim()&&(e.preventDefault(),"ru"===t&&r.push("".concat(x.Z.sanctionsRussia,"/?search=").concat(s),void 0,{shallow:!0}),"eu"===t&&r.push("".concat(x.Z.sanctionsES,"/?search=").concat(s),void 0,{shallow:!0}),"usa"===t&&r.push("".concat(x.Z.sanctionsUsa,"/?search=").concat(s),void 0,{shallow:!0}))};return(0,n.jsxs)("article",{className:"flex items-center justify-center flex-col lg:flex-row lg:w-full",children:[(0,n.jsx)(d,{value:s,onChange:i,placeholder:"Введите название документа"}),(0,n.jsxs)(h.Z,{onClick:a,type:"secondary",htmlType:"submit",className:"text-white gap-1",children:[(0,n.jsx)(l(),{src:g.RL,alt:"Белая лупа"}),"НАЙТИ"]})]})},p=[{id:"ru",title:"Санкции РФ"},{id:"usa",title:"Санкции США"},{id:"eu",title:"Санкции ЕС"}],m=e=>{let{zone:t,setZone:r}=e,s=e=>e===t&&"!bg-white-orange";return(0,n.jsx)("article",{className:"flex items-center justify-center flex-col mt-[25px] gap-4 lg:flex-row lg:justify-start lg:mt-5",children:p.map(e=>(0,n.jsx)(h.Z,{onClick:()=>r(e.id),className:s(e.id),type:"rounded",children:e.title},e.id))})},f=e=>{let{searchingZone:t,searchingZoneTitle:r}=e,[c,l]=(0,s.useState)(null!=t?t:"ru");return(0,n.jsx)("section",{className:"flex items-center justify-center w-full mt-5",style:{background:"url('".concat(a.src,"')"),backgroundRepeat:"no-repeat",backgroundSize:"cover"},children:(0,n.jsxs)("div",{className:"w-[88%] my-[50px] mx-auto flex items-center justify-center flex-col lg:items-start",children:[(0,n.jsx)(i,{className:"mb-10 lg:mb-5 ".concat(r&&"mx-auto"),children:r||"поиск документа"}),(0,n.jsxs)("form",{className:"lg:w-full",children:[(0,n.jsx)(b,{searchingZone:c}),!t&&(0,n.jsx)(m,{zone:c,setZone:l})]})]})})};var w=f},1513:function(e,t,r){"use strict";var n=r(9268);let s=e=>{let{children:t,onClick:r,className:s,htmlType:i="button",type:a="primary",disabled:c,required:l,...o}=e;return"secondary"===a?(0,n.jsx)("button",{className:"bg-white-orange flex items-center justify-center text-[20px] w-[280px] h-[40px] lg:w-[290px] lg:h-[60px] hover:drop-shadow-roundedButton active:bg-darker-orange"+" ".concat(s),type:i,onClick:r,children:t}):"rounded"===a?(0,n.jsx)("button",{className:" w-[280px] lg:w-[120px] flex items-center justify-center py-3 text-sm leading-[14px] bg-white rounded-xl drop-shadow-roundedButton hover:bg-white-orange active:drop-shadow-none disabled:bg-transparent disabled:text-[#939393] disabled:border disabled:border-[#939393] disabled:border-solid"+" ".concat(s),type:i,onClick:r,required:!0,children:t}):"long"===a?(0,n.jsx)("button",{onClick:r,className:"text-[20px] w-[280px] h-[44px] mb-[16px] text-white-orange bg-white border-[1px] border-white-orange text-white md:rounded-[5px] xl:w-[416px]",...o,children:t}):"long-fill"===a?(0,n.jsx)("button",{onClick:r,className:"text-[20px] w-[280px] h-[44px] mb-[16px] bg-white-orange text-white disabled:text-white-black disabled:bg-white disabled:border-white-black disabled:border-[1px] md:rounded-[5px] xl:w-[416px]",disabled:c,...o,children:t}):(0,n.jsx)("button",{className:"bg-white-orange flex items-center justify-center text-base leading-4 w-[120px] py-[11px] hover:drop-shadow-roundedButton active:bg-darker-orange"+" ".concat(s),type:i,onClick:r,disabled:c,children:t})};t.Z=s},4025:function(e,t,r){"use strict";var n=r(6006);let s=e=>{let[t,r]=(0,n.useState)(e),s=e=>{r(e.target.value)};return[t,s]};t.Z=s},6387:function(e,t,r){"use strict";r.d(t,{dC:function(){return i},pD:function(){return a},m8:function(){return s},$r:function(){return l},Zu:function(){return c},RL:function(){return n}});var n={src:"/_next/static/media/icons8-search 1.b66dcfe8.svg",height:20,width:20,blurWidth:0,blurHeight:0},s={src:"/_next/static/media/done.ba8d67f0.svg",height:22,width:26,blurWidth:0,blurHeight:0},i={src:"/_next/static/media/menu.5c5c11a1.svg",height:19,width:37,blurWidth:0,blurHeight:0},a={src:"/_next/static/media/close.c7731200.svg",height:28,width:28,blurWidth:0,blurHeight:0},c={src:"/_next/static/media/Profile-stroke.68b45e14.svg",height:40,width:40,blurWidth:0,blurHeight:0},l={src:"/_next/static/media/exitButton.250523f8.svg",height:24,width:24,blurWidth:0,blurHeight:0}},2082:function(e,t){"use strict";t.Z={mainpage:"/",sanctionsRussia:"/sanctions/russia",sanctionsUsa:"/sanctions/usa",sanctionsES:"/sanctions/eu",about:"/about",profile:"/profile",document:"/document",privacy:"/privacy-policy",login:"/login",registration:"/register",forgotPassword:"/forgot-password",accessError:"/access-error",backend:"https://sansearch.ru/strapi",controlTest:"/control-test"}}},function(e){e.O(0,[891,667,139,744],function(){return e(e.s=4739)}),_N_E=e.O()}]);