(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[777],{1777:function(e,t,r){Promise.resolve().then(r.t.bind(r,6996,23)),Promise.resolve().then(r.t.bind(r,9297,23)),Promise.resolve().then(r.t.bind(r,2666,23)),Promise.resolve().then(r.t.bind(r,190,23)),Promise.resolve().then(r.bind(r,5766)),Promise.resolve().then(r.bind(r,9589))},5766:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return v}});var s=r(9268),n=r(6006);let i=e=>{let{children:t,className:r}=e;return(0,s.jsx)("h1",{className:"text-4xl uppercase"+" ".concat(r||""),children:t})};var l={src:"/_next/static/media/5583949 1.d4f85cbc.png",height:487,width:320,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAICAMAAAAGL8UJAAAAElBMVEXf6erm8PDa5ebT3t/J09Tu+Pf8x4FyAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAJklEQVR4nBXJsRHAQBCEMGDv+2/ZY6UCn1FcbLfYBYyn9DeKILUPB7sASkQCeEgAAAAASUVORK5CYII=",blurWidth:5,blurHeight:8},a=r(6394),c=r.n(a),o=r(6008);let d=e=>{let{placeholder:t,htmlType:r="text",value:n,onChange:i,required:l=!0}=e;return(0,s.jsx)("input",{type:r,placeholder:t,minLength:2,required:l,maxLength:254,value:n,onChange:i,className:"w-[280px] pl-4 py-2 border-darker-orange border rounded-sm rounded-ee-none rounded-es-none lg:w-full lg:py-0 lg:h-[60px] lg:rounded-e-none lg:rounded-es-sm"})};var u=r(4025),x=r(1513),h=r(2082),p=r(6387);let g=e=>{let{searchingZone:t}=e,r=(0,o.useRouter)(),[n,i]=(0,u.Z)(""),l=async e=>{n.trim()&&(e.preventDefault(),"ru"===t&&r.push("".concat(h.Z.sanctionsRussia,"/?search=").concat(n),void 0,{shallow:!0}),"eu"===t&&r.push("".concat(h.Z.sanctionsES,"/?search=").concat(n),void 0,{shallow:!0}),"usa"===t&&r.push("".concat(h.Z.sanctionsUsa,"/?search=").concat(n),void 0,{shallow:!0}))};return(0,s.jsxs)("article",{className:"flex items-center justify-center flex-col lg:flex-row lg:w-full",children:[(0,s.jsx)(d,{value:n,onChange:i,placeholder:"Введите название документа"}),(0,s.jsxs)(x.Z,{onClick:l,type:"secondary",htmlType:"submit",className:"text-white gap-1",children:[(0,s.jsx)(c(),{src:p.RL,alt:"Белая лупа"}),"НАЙТИ"]})]})},m=[{id:"ru",title:"Санкции РФ"},{id:"usa",title:"Санкции США"},{id:"eu",title:"Санкции ЕС"}],b=e=>{let{zone:t,setZone:r}=e,n=e=>e===t&&"!bg-white-orange";return(0,s.jsx)("article",{className:"flex items-center justify-center flex-col mt-[25px] gap-4 lg:flex-row lg:justify-start lg:mt-5",children:m.map(e=>(0,s.jsx)(x.Z,{onClick:()=>r(e.id),className:n(e.id),type:"rounded",children:e.title},e.id))})},f=e=>{let{searchingZone:t,searchingZoneTitle:r}=e,[a,c]=(0,n.useState)(null!=t?t:"ru");return(0,s.jsx)("section",{className:"flex items-center justify-center w-full mt-5",style:{background:"url('".concat(l.src,"')"),backgroundRepeat:"no-repeat",backgroundSize:"cover"},children:(0,s.jsxs)("div",{className:"w-[88%] my-[50px] mx-auto flex items-center justify-center flex-col lg:items-start",children:[(0,s.jsx)(i,{className:"mb-10 lg:mb-5 ".concat(r&&"mx-auto"),children:r||"поиск документа"}),(0,s.jsxs)("form",{className:"lg:w-full",children:[(0,s.jsx)(g,{searchingZone:a}),!t&&(0,s.jsx)(b,{zone:a,setZone:c})]})]})})};var v=f},9589:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return j}});var s=r(9268),n=r(6006),i=r(5846),l=r.n(i),a=r(2082);let c=e=>{var t,r;let{document:n}=e;return(0,s.jsx)("li",{className:"mb-[10px] lg:mb-[30px]",children:(0,s.jsxs)(l(),{href:a.Z.document+"/"+n.id,className:"line-clamp-4 lg:line-clamp-2",children:[(null==n?void 0:null===(t=n.attributes)||void 0===t?void 0:t.title)&&(0,s.jsx)("strong",{className:"text-[14px] lg:text-[20px]",children:n.attributes.title}),(null==n?void 0:null===(r=n.attributes)||void 0===r?void 0:r.description)&&(0,s.jsx)("p",{className:"inline ml-[10px] text-[14px] lg:text-[20px]",children:n.attributes.description})]})})},o=e=>{let{slicedDocuments:t}=e;return(0,s.jsx)("ul",{className:"list-disc mt-[20px] mb-[40px]",children:null==t?void 0:t.map(e=>(0,s.jsx)(c,{document:e},e.id))})};var d=r(6394),u=r.n(d);let x=e=>{let{isCurrentPage:t,onClick:r,children:n,disabled:i=!1,...l}=e,a="flex items-center justify-center w-full h-full font-text text-[16px] leading-[20px] bg-white rounded-[2px] hover:border-[2px] hover:border-white-orange ".concat(i&&"hover:!border-white","  ").concat(t&&"bg-white-orange hover:!border-white-orange");return(0,s.jsx)("li",{className:"flex items-center justify-center w-[32px] h-[32px] mx-[2px]  cursor-pointer",children:(0,s.jsx)("button",{className:a,onClick:r,disabled:i,...l,children:n})})},h=(e,t,r)=>{let s=t*r,n=e.slice(s-r,s);return n};var p={src:"/_next/static/media/arrow-active.3273d14a.svg",height:12,width:8,blurWidth:0,blurHeight:0},g={src:"/_next/static/media/arrow-disabled.79e52e4f.svg",height:12,width:8,blurWidth:0,blurHeight:0};let m=e=>{let t,{documents:r,setSlicedDocuments:i}=e,[l,a]=(0,n.useState)(1),c=[],o=e=>a(e),d=Math.ceil(r.length/10);for(let e=1;e<=d;e++)c.push(e);let m=e=>{o(e),i(h(r,e,10))};return(0,n.useEffect)(()=>{i(h(r,l,10))},[l]),(0,s.jsx)("nav",{className:"flex items-center justify-center gap-2",children:(0,s.jsxs)("ul",{className:"flex flex-row items-center",children:[(0,s.jsx)(x,{disabled:1===l,onClick:()=>o(e=>e-1),children:(0,s.jsx)(u(),{className:"fill-green-500",src:1===l?g:p,alt:"стрелочка назад"})}),(t=Array.from({length:d},(e,t)=>t+1),d>7&&(t=l<=4?[...t.slice(0,5),"...",d]:l>=d-5+2?[1,"...",...t.slice(-5)]:[1,"...",...t.slice(l-2,l+1),"...",d]),t.map((e,t)=>"..."===e?(0,s.jsx)(x,{disabled:!0,children:e},t):(0,s.jsx)(x,{onClick:()=>m(e),isCurrentPage:l===e,disabled:l===e,children:e},t))),(0,s.jsx)(x,{disabled:l===c.length,onClick:()=>o(e=>e+1),children:(0,s.jsx)(u(),{className:"scale-x-[-1]",src:l===c.length?g:p,alt:"стрелочка вперед"})})]})})};var b=r(6008);let f=(e,t)=>{let r=e.filter(e=>{var r,s,n,i;return!!((null==e?void 0:null===(r=e.attributes)||void 0===r?void 0:null===(s=r.title)||void 0===s?void 0:s.toLowerCase().includes(t.toLowerCase()))||(null==e?void 0:null===(n=e.attributes)||void 0===n?void 0:null===(i=n.description)||void 0===i?void 0:i.toLowerCase().includes(t.toLowerCase())))});return r},v=e=>{let{search:t}=e;return t?(0,s.jsxs)("p",{className:"text-[20px] mt-[-26px] mb-[20px] lg:mt-[-52px] lg:text-[28px]",children:["Результаты поиска по запросу: ",(0,s.jsx)("i",{children:t})]}):(0,s.jsx)("p",{className:"text-[20px] mt-[-26px] mb-[20px] lg:mt-[-52px] lg:text-[28px]",children:"Результаты поиска"})},w=e=>{let{documents:t}=e,[r,i]=(0,n.useState)(t),[l,a]=(0,n.useState)(r.slice(0,10)),c=(0,b.useSearchParams)(),d=c.get("search");return(0,n.useEffect)(()=>{if(null===d)return;let e=f(t,d);a(e.slice(0,10)),i(e)},[d]),(0,s.jsxs)("div",{className:"w-[88%] mx-auto",children:[(0,s.jsx)(v,{search:d}),0===l.length?(0,s.jsx)("p",{children:"Документов не найдено"}):(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(o,{slicedDocuments:l}),(0,s.jsx)(m,{documents:r,setSlicedDocuments:a})]})]})};var j=w},1513:function(e,t,r){"use strict";var s=r(9268);let n=e=>{let{children:t,onClick:r,className:n,htmlType:i="button",type:l="primary",disabled:a,required:c,...o}=e;return"secondary"===l?(0,s.jsx)("button",{className:"bg-white-orange flex items-center justify-center text-[20px] w-[280px] h-[40px] lg:w-[290px] lg:h-[60px] hover:drop-shadow-roundedButton active:bg-darker-orange"+" ".concat(n),type:i,onClick:r,children:t}):"rounded"===l?(0,s.jsx)("button",{className:" w-[280px] lg:w-[120px] flex items-center justify-center py-3 text-sm leading-[14px] bg-white rounded-xl drop-shadow-roundedButton hover:bg-white-orange active:drop-shadow-none disabled:bg-transparent disabled:text-[#939393] disabled:border disabled:border-[#939393] disabled:border-solid"+" ".concat(n),type:i,onClick:r,required:!0,children:t}):"long"===l?(0,s.jsx)("button",{onClick:r,className:"text-[20px] w-[280px] h-[44px] mb-[16px] text-white-orange bg-white border-[1px] border-white-orange text-white md:rounded-[5px] xl:w-[416px]",...o,children:t}):"long-fill"===l?(0,s.jsx)("button",{onClick:r,className:"text-[20px] w-[280px] h-[44px] mb-[16px] bg-white-orange text-white disabled:text-white-black disabled:bg-white disabled:border-white-black disabled:border-[1px] md:rounded-[5px] xl:w-[416px]",disabled:a,...o,children:t}):(0,s.jsx)("button",{className:"bg-white-orange flex items-center justify-center text-base leading-4 w-[120px] py-[11px] hover:drop-shadow-roundedButton active:bg-darker-orange"+" ".concat(n),type:i,onClick:r,disabled:a,children:t})};t.Z=n},4025:function(e,t,r){"use strict";var s=r(6006);let n=e=>{let[t,r]=(0,s.useState)(e),n=e=>{r(e.target.value)};return[t,n]};t.Z=n},6387:function(e,t,r){"use strict";r.d(t,{dC:function(){return i},pD:function(){return l},m8:function(){return n},$r:function(){return c},Zu:function(){return a},RL:function(){return s}});var s={src:"/_next/static/media/icons8-search 1.b66dcfe8.svg",height:20,width:20,blurWidth:0,blurHeight:0},n={src:"/_next/static/media/done.ba8d67f0.svg",height:22,width:26,blurWidth:0,blurHeight:0},i={src:"/_next/static/media/menu.5c5c11a1.svg",height:19,width:37,blurWidth:0,blurHeight:0},l={src:"/_next/static/media/close.c7731200.svg",height:28,width:28,blurWidth:0,blurHeight:0},a={src:"/_next/static/media/Profile-stroke.68b45e14.svg",height:40,width:40,blurWidth:0,blurHeight:0},c={src:"/_next/static/media/exitButton.250523f8.svg",height:24,width:24,blurWidth:0,blurHeight:0}},2666:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{suspense:function(){return n},NoSSR:function(){return i}}),r(6927),r(6006);let s=r(8131);function n(){let e=Error(s.NEXT_DYNAMIC_NO_SSR_CODE);throw e.digest=s.NEXT_DYNAMIC_NO_SSR_CODE,e}function i(e){let{children:t}=e;return t}},2082:function(e,t){"use strict";t.Z={mainpage:"/",sanctionsRussia:"/sanctions/russia",sanctionsUsa:"/sanctions/usa",sanctionsES:"/sanctions/eu",about:"/about",profile:"/profile",document:"/document",privacy:"/privacy-policy",login:"/login",registration:"/register",forgotPassword:"/forgot-password",accessError:"/access-error",backend:"https://sansearch.ru/strapi",controlTest:"/control-test"}},5846:function(e,t,r){e.exports=r(414)}}]);