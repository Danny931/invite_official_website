(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[644],{62174:function(e,A,t){Promise.resolve().then(t.t.bind(t,81749,23)),Promise.resolve().then(t.t.bind(t,25250,23)),Promise.resolve().then(t.bind(t,99514)),Promise.resolve().then(t.bind(t,17073)),Promise.resolve().then(t.bind(t,19309)),Promise.resolve().then(t.bind(t,25017)),Promise.resolve().then(t.bind(t,14768)),Promise.resolve().then(t.bind(t,79985)),Promise.resolve().then(t.bind(t,40094)),Promise.resolve().then(t.bind(t,1300)),Promise.resolve().then(t.bind(t,88916)),Promise.resolve().then(t.bind(t,29249)),Promise.resolve().then(t.bind(t,67917)),Promise.resolve().then(t.bind(t,8360)),Promise.resolve().then(t.bind(t,69351)),Promise.resolve().then(t.bind(t,76709)),Promise.resolve().then(t.bind(t,96029)),Promise.resolve().then(t.bind(t,84274))},24930:function(e,A,t){"use strict";Object.defineProperty(A,"__esModule",{value:!0}),Object.defineProperty(A,"default",{enumerable:!0,get:function(){return i}});let s=t(21024);t(2265);let r=s._(t(84795));function n(e){return{default:(null==e?void 0:e.default)||e}}function i(e,A){let t=r.default,s={loading:e=>{let{error:A,isLoading:t,pastDelay:s}=e;return null}};"function"==typeof e&&(s.loader=e),Object.assign(s,A);let i=s.loader;return t({...s,loader:()=>null!=i?i().then(n):Promise.resolve(n(()=>null))})}("function"==typeof A.default||"object"==typeof A.default&&null!==A.default)&&void 0===A.default.__esModule&&(Object.defineProperty(A.default,"__esModule",{value:!0}),Object.assign(A.default,A),e.exports=A.default)},67447:function(e,A,t){"use strict";Object.defineProperty(A,"__esModule",{value:!0}),function(e,A){for(var t in A)Object.defineProperty(e,t,{enumerable:!0,get:A[t]})}(A,{unstable_getImgProps:function(){return o},default:function(){return l}});let s=t(21024),r=t(38630),n=t(76184),i=t(81749),a=s._(t(10536)),o=e=>{(0,n.warnOnce)("Warning: unstable_getImgProps() is experimental and may change or be removed at any time. Use at your own risk.");let{props:A}=(0,r.getImgProps)(e,{defaultLoader:a.default,imgConf:{deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!0}});for(let[e,t]of Object.entries(A))void 0===t&&delete A[e];return{props:A}},l=i.Image},16005:function(e,A,t){"use strict";function s(e){let{children:A}=e;return A}Object.defineProperty(A,"__esModule",{value:!0}),Object.defineProperty(A,"NoSSR",{enumerable:!0,get:function(){return s}}),t(46491)},84795:function(e,A,t){"use strict";Object.defineProperty(A,"__esModule",{value:!0}),Object.defineProperty(A,"default",{enumerable:!0,get:function(){return n}});let s=t(21024)._(t(2265)),r=t(16005),n=function(e){let A=Object.assign({loader:null,loading:null,ssr:!0},e);function t(e){let t=A.loading,n=s.default.createElement(t,{isLoading:!0,pastDelay:!0,error:null}),i=A.ssr?s.default.Fragment:r.NoSSR,a=A.lazy;return s.default.createElement(s.default.Suspense,{fallback:n},s.default.createElement(i,null,s.default.createElement(a,e)))}return A.lazy=s.default.lazy(A.loader),t.displayName="LoadableComponent",t}},8360:function(e,A,t){"use strict";t.r(A);var s=t(57437),r=t(2265),n=t(65500),i=t(4327);A.default=e=>{let{title:A,style_2:t=!1}=e,[a,o]=(0,r.useState)(!1);(0,n.Z)(a);let l=e=>{e&&o(!0)};return(0,s.jsxs)(s.Fragment,{children:[!t&&(0,s.jsx)(i.df,{onChange:l,as:"span",className:"sub-title tg__animate-text",children:A}),t&&(0,s.jsx)(i.df,{onChange:l,as:"p",className:"tg__animate-text style2",children:A})]})}},69351:function(e,A,t){"use strict";t.r(A);var s=t(57437);t(2265);var r=t(24930),n=t.n(r),i=t(93300);let a=e=>{let{expiryTimestamp:A}=e,{seconds:t,minutes:r,hours:n,days:a}=(0,i.useTimer)({expiryTimestamp:A});return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)("div",{className:"time-count day",children:[(0,s.jsx)("span",{children:a}),"Day"]}),(0,s.jsxs)("div",{className:"time-count hour",children:[(0,s.jsx)("span",{children:n}),"hour"]}),(0,s.jsxs)("div",{className:"time-count min",children:[(0,s.jsx)("span",{children:r}),"min"]}),(0,s.jsxs)("div",{className:"time-count sec",children:[(0,s.jsx)("span",{suppressHydrationWarning:!0,children:t}),"sec"]})]})};A.default=n()(()=>Promise.resolve(a),{ssr:!1})},76709:function(e,A,t){"use strict";t.r(A),t.d(A,{default:function(){return u}});var s=t(57437);t(2265);var r=t(61396),n=t.n(r),i=t(16691),a=t.n(i),o=()=>(0,s.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1116.562",height:"163.37",viewBox:"0 0 1116.562 163.37",children:(0,s.jsx)("path",{className:"background-path",d:"M708,1784l28-27s4.11-5.76,18-6,702-1,702-1a37.989,37.989,0,0,1,16,9c7.47,7.08,37,33,37,33s9.02,9.47,9,18,0,42,0,42-0.19,9.43-11,19-32,30-32,30-5.53,11.76-21,12-985,0-985,0a42.511,42.511,0,0,1-26-13c-11.433-12.14-34-32-34-32s-6.29-5.01-7-17,0-43,0-43-1-5.42,12-18,34-32,34-32,10.4-8.28,19-8,76,0,76,0a44.661,44.661,0,0,1,21,11c9.268,8.95,22,22,22,22Z",transform:"translate(-401.563 -1749.875)"})}),l=t(93300),u=e=>{let{item:A,index:t}=e,r=new Date(A.coming_time),{seconds:i,minutes:u,hours:c,days:d}=(0,l.useTimer)({expiryTimestamp:r});return(0,s.jsxs)("div",{className:"tournament__list-item wow fadeInUp","data-wow-delay":".".concat(t+2,"s"),children:[(0,s.jsx)(o,{}),(0,s.jsxs)("div",{className:"tournament__list-content",children:[(0,s.jsx)("div",{className:"tournament__list-thumb",children:(0,s.jsx)(n(),{href:"/tournament-details",children:(0,s.jsx)(a(),{src:A.thumb,alt:"thumb",style:{width:"auto",height:"auto"}})})}),(0,s.jsxs)("div",{className:"tournament__list-name",children:[(0,s.jsx)("h5",{className:"team-name",children:A.team_name}),(0,s.jsx)("span",{className:"status",children:A.status})]}),(0,s.jsxs)("div",{className:"tournament__list-prize",children:[(0,s.jsx)("h6",{className:"title",children:"Prize"}),(0,s.jsx)("i",{className:"fas fa-trophy"}),(0,s.jsxs)("span",{children:["$",A.box_price]})]}),(0,s.jsxs)("div",{className:"tournament__list-time",children:[(0,s.jsx)("h6",{className:"title",children:"Time"}),(0,s.jsx)("i",{className:"fas fa-clock"}),(0,s.jsxs)("span",{suppressHydrationWarning:!0,children:[c,"h : ",u,"m : ",i,"s"]})]}),(0,s.jsx)("div",{className:"tournament__list-live",children:(0,s.jsxs)(n(),{href:A.live_link,target:"_blank",children:["Live now ",(0,s.jsx)("i",{className:"far fa-play-circle"})]})})]})]})}},65500:function(e,A,t){"use strict";var s=t(2265);A.Z=e=>(console.log("isShow",e),(0,s.useEffect)(()=>{if(e){document.querySelectorAll(".tg__animate-text").forEach(e=>{let A=e.innerText,t=parseInt(e.getAttribute("data-wait"))||0,s=(parseInt(e.getAttribute("data-speed"))||4)/100;e.innerHTML="<em>321...</em>",e.classList.add("ready");let r=A.split("");e.innerHTML="",setTimeout(()=>{r.forEach((A,t)=>{let r=document.createElement("span");r.textContent=A,r.style.animationDelay=t*s+"s",e.appendChild(r)})},t)});let e=()=>{let e=window.innerWidth<768;document.querySelectorAll(".roadMap__list li").forEach(A=>{e?(A.classList.add("mobileView"),A.classList.remove("tg__animate-text")):(A.classList.remove("mobileView"),A.classList.add("tg__animate-text"))})};return e(),window.addEventListener("resize",e),()=>{window.removeEventListener("resize",e)}}},[e]),null)},99514:function(e,A,t){"use strict";t.r(A),A.default={src:"/_next/static/media/breadcrumb_bg01.a8c09773.jpg",height:561,width:1920,blurDataURL:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAIACAMBIgACEQEDEQH/xAAoAAEBAAAAAAAAAAAAAAAAAAAABwEBAQAAAAAAAAAAAAAAAAAAAQL/2gAMAwEAAhADEAAAAJSLP//EABcQAAMBAAAAAAAAAAAAAAAAAAABMoH/2gAIAQEAAT8AVYf/xAAVEQEBAAAAAAAAAAAAAAAAAAAAAf/aAAgBAgEBPwCv/8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAgBAwEBPwB//9k=",blurWidth:8,blurHeight:2}},17073:function(e,A,t){"use strict";t.r(A),A.default={src:"/_next/static/media/breadcrumb_bg03.650b3394.jpg",height:565,width:1920,blurDataURL:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAIACAMBIgACEQEDEQH/xAAnAAEBAAAAAAAAAAAAAAAAAAAABwEBAAAAAAAAAAAAAAAAAAAAAv/aAAwDAQACEAMQAAAAlAZ//8QAFRABAQAAAAAAAAAAAAAAAAAAAEL/2gAIAQEAAT8Ap//EABURAQEAAAAAAAAAAAAAAAAAAAAB/9oACAECAQE/AK//xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oACAEDAQE/AH//2Q==",blurWidth:8,blurHeight:2}},19309:function(e,A,t){"use strict";t.r(A),A.default={src:"/_next/static/media/tournament_bg.269afef2.jpg",height:944,width:1920,blurDataURL:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAQACAMBIgACEQEDEQH/xAAoAAEBAAAAAAAAAAAAAAAAAAAABwEBAQAAAAAAAAAAAAAAAAAAAgP/2gAMAwEAAhADEAAAAJOKD//EABQQAQAAAAAAAAAAAAAAAAAAAAD/2gAIAQEAAT8Af//EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAIAQIBAT8Af//EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAIAQMBAT8Af//Z",blurWidth:8,blurHeight:4}},25017:function(e,A,t){"use strict";t.r(A),A.default={src:"/_next/static/media/breadcrumb_img01.cd69dd4d.png",height:412,width:402,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAA8klEQVR42mOYGlDHyAAEe7a/ZT537CTbpZvnWE7vvsDOAATXFyozMvz/ep/p////LPsmljhcW9+uAZI4MCHV78jCBaIMIACUZL1+/Yb0/hLnmtV+zvuWt7X37/ST2HtsZZfxrqOf2RhA4Mnebt3NTgwn16WI/T8+x+r/fFGG/+fbvXJfHN7LzdB14bnmxjk9axflpfyZGC/xf30Nw/9GN8f/a2tTrizYsrOAIXHDceEJZeVOS1etsVpe6dOypVJ/w/wJDd6z29ocGyfM1WUgCLLXHmOsCwpiWtrfxlwVnca8a9Ucpm2rFrEsaqxmXrB8PRMAQOFr2CGLqqEAAAAASUVORK5CYII=",blurWidth:8,blurHeight:8}},14768:function(e,A,t){"use strict";t.r(A),A.default={src:"/_next/static/media/breadcrumb_img03.5b21d25a.png",height:344,width:407,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAHCAYAAAA1WQxeAAAA2ElEQVR42mNABpP/r+FVuJWSw7DbLxrEL90YzsTwbL+Hw9vD7oYNLp3sDAcizjBs9/5vsdDoh81U30SwrgdbHCNfbvSxZvj/n61pgfXz8hjB/7YZYv/NanVv////nxGs6PFcWbupp1NtorZ4P4opVvivn2Pzvzrb8ALc7pcHV1r///+fqb43pat+au7/9s7U/5OytLfeWz/fBKzg9o615z+cObh9TymD9+x2v//9KSL/96dzznt+bGc4xPVpcXJ7Fs40+JzPIHGuiOHZhRyhw09zBWQZGBgYAGp7XPiJSa0pAAAAAElFTkSuQmCC",blurWidth:8,blurHeight:7}},88916:function(e,A,t){"use strict";t.r(A),A.default={src:"/_next/static/media/tournament01.be4a0d36.jpg",height:40,width:40,blurDataURL:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAgACAMBIgACEQEDEQH/xAAoAAEBAAAAAAAAAAAAAAAAAAAABQEBAQAAAAAAAAAAAAAAAAAABAX/2gAMAwEAAhADEAAAALAqj//EABwQAAIBBQEAAAAAAAAAAAAAAAEDAgAFERQiQf/aAAgBAQABPwDWdG6TcHsKgkcA8Z9BFf/EABoRAAICAwAAAAAAAAAAAAAAAAECAAMEEVP/2gAIAQIBAT8AwmNgv31af//EABoRAQABBQAAAAAAAAAAAAAAAAEAAgMRElL/2gAIAQMBAT8Ardi3ngJ//9k=",blurWidth:8,blurHeight:8}},29249:function(e,A,t){"use strict";t.r(A),A.default={src:"/_next/static/media/tournament02.3ebc323e.jpg",height:40,width:40,blurDataURL:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAgACAMBIgACEQEDEQH/xAAnAAEBAAAAAAAAAAAAAAAAAAAABQEBAAAAAAAAAAAAAAAAAAAABv/aAAwDAQACEAMQAAAAkA4k/8QAIBAAAAQGAwAAAAAAAAAAAAAAAQIREgAEBRQhIzNDcv/aAAgBAQABPwAhKYE0t9oA7V63M4vS5j//xAAbEQABBAMAAAAAAAAAAAAAAAABAAIDIwQiMf/aAAgBAgEBPwDIgFVjxoOFf//EABoRAAEFAQAAAAAAAAAAAAAAAAQAAQIjMTL/2gAIAQMBAT8AGInbnbr/2Q==",blurWidth:8,blurHeight:8}},67917:function(e,A,t){"use strict";t.r(A),A.default={src:"/_next/static/media/tournament03.445b19fb.jpg",height:40,width:40,blurDataURL:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAgACAMBIgACEQEDEQH/xAAoAAEBAAAAAAAAAAAAAAAAAAAABAEBAQAAAAAAAAAAAAAAAAAAAAH/2gAMAwEAAhADEAAAAJRH/8QAHRABAAEDBQAAAAAAAAAAAAAAAgEDERIABAUGUf/aAAgBAQABPwBl0eybdHksKZkQqaMk4I2t4tf/xAAXEQADAQAAAAAAAAAAAAAAAAAAAUFx/9oACAECAQE/AFdP/8QAFxEAAwEAAAAAAAAAAAAAAAAAAAFBcf/aAAgBAwEBPwBzD//Z",blurWidth:8,blurHeight:8}},79985:function(e,A,t){"use strict";t.r(A),A.default={src:"/_next/static/media/tournament_thumb01.e9561b5b.png",height:248,width:210,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAcAAAAICAYAAAA1BOUGAAAAqklEQVR42lWMKw7CQBCGp00wKEiaEARoBBqDAwzhFjzCFSqqOAAn4DZcod2KGrIzU4FvmlA2y0yKaEfMn++bB3wyOH8NPBsDhyoNx5rK6kHa2hnwIvIqDVaayuqhzoKRbCfQKWX14HII/2InF6wp2PqquA/aYRS7fOgbM4uV6+ImvvsuhWVPIOKGCKclvSbm7SNCuxW3YOa5Dk9EdBVISsajtXaPRBdmfvwAp5RrWeH+n90AAAAASUVORK5CYII=",blurWidth:7,blurHeight:8}},40094:function(e,A,t){"use strict";t.r(A),A.default={src:"/_next/static/media/tournament_thumb02.1fee9d4f.png",height:215,width:201,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAcAAAAICAYAAAA1BOUGAAAAzElEQVR42mOAgfOXrhy4ef1GyXcGht3fTNSS4RJH9x4wPXPl+v9nS+f+/ybE8P+HlsJuuOSRIycSz52/+P9tcdD3r9oM/38qizz8yMDABdF55HjUuYuX/7+pT/vzVQOoU03i1hsGBlaw5LGdu5XOX7v5/9GOLd++iTH8/26isZoBGVy+dCX74pfvqt8YGFKB2BAseOP6Hcnbt+4L37vzWOj6hauSYJf/+S9w79ptaYabN+82ACVLb928lwlUmHj76s3IOzfvVd+9+7AMAEDobSUt1UpoAAAAAElFTkSuQmCC",blurWidth:7,blurHeight:8}},1300:function(e,A,t){"use strict";t.r(A),A.default={src:"/_next/static/media/tournament_thumb03.9c27e088.png",height:199,width:221,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAHCAYAAAA1WQxeAAAArUlEQVR42iXNsS6DYRhA4ef9vp8gqaQSxNAwu5Su7sNkMZi6uAAX4j7EajOJiKXi1zZEv75SHU5ylpMT0+FTRUtxHdykTGKCW7KWg4/zhhpyiC7YWntQQrQCyThpKR+SNSuMoYMYxNTCQHHvf+hUNYV4NAnkmYs7vNjUI1x+ei6x7Gc7sRfR3tuqvf1kPdnejeq3O97/bv2si+V8fkX0UeILh5m5kPkapYwy8+gPwmZE+zxl6RkAAAAASUVORK5CYII=",blurWidth:8,blurHeight:7}},16691:function(e,A,t){e.exports=t(67447)},93300:function(e,A,t){var s;"undefined"!=typeof self&&self,e.exports=(s=t(2265),(()=>{"use strict";var e={156:e=>{e.exports=s}},A={};function t(s){var r=A[s];if(void 0!==r)return r.exports;var n=A[s]={exports:{}};return e[s](n,n.exports,t),n.exports}t.d=(e,A)=>{for(var s in A)t.o(A,s)&&!t.o(e,s)&&Object.defineProperty(e,s,{enumerable:!0,get:A[s]})},t.o=(e,A)=>Object.prototype.hasOwnProperty.call(e,A),t.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var r={};return(()=>{t.r(r),t.d(r,{default:()=>u,useStopwatch:()=>o,useTime:()=>l,useTimer:()=>a});var e=t(156);class A{static expiryTimestamp(e){let A=new Date(e).getTime()>0;return A||console.warn("react-timer-hook: { useTimer } Invalid expiryTimestamp settings",e),A}static onExpire(e){let A=e&&"function"==typeof e;return e&&!A&&console.warn("react-timer-hook: { useTimer } Invalid onExpire settings function",e),A}}class s{static getTimeFromSeconds(e){let A=Math.ceil(e);return{totalSeconds:A,seconds:Math.floor(A%60),minutes:Math.floor(A%3600/60),hours:Math.floor(A%86400/3600),days:Math.floor(A/86400)}}static getSecondsFromExpiry(e,A){let t=e-(new Date).getTime();if(t>0){let e=t/1e3;return A?Math.round(e):e}return 0}static getSecondsFromPrevTime(e,A){let t=(new Date).getTime()-e;if(t>0){let e=t/1e3;return A?Math.round(e):e}return 0}static getSecondsFromTimeNow(){let e=new Date;return e.getTime()/1e3-60*e.getTimezoneOffset()}static getFormattedTimeFromSeconds(e,A){let{seconds:t,minutes:r,hours:n}=s.getTimeFromSeconds(e),i="",a=n;return"12-hour"===A&&(i=n>=12?"pm":"am",a=n%12),{seconds:t,minutes:r,hours:a,ampm:i}}}function n(A,t){let s=(0,e.useRef)();(0,e.useEffect)(()=>{s.current=A}),(0,e.useEffect)(()=>{if(!t)return()=>{};let e=setInterval(()=>{s.current&&s.current()},t);return()=>clearInterval(e)},[t])}function i(e){if(!A.expiryTimestamp(e))return null;let t=s.getSecondsFromExpiry(e),r=Math.floor(1e3*(t-Math.floor(t)));return r>0?r:1e3}function a(){let{expiryTimestamp:t,onExpire:r,autoStart:a=!0}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},[o,l]=(0,e.useState)(t),[u,c]=(0,e.useState)(s.getSecondsFromExpiry(o)),[d,g]=(0,e.useState)(a),[h,m]=(0,e.useState)(a),[f,p]=(0,e.useState)(i(o)),b=(0,e.useCallback)(()=>{A.onExpire(r)&&r(),g(!1),p(null)},[r]),E=(0,e.useCallback)(()=>{g(!1)},[]),C=(0,e.useCallback)(function(e){let A=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];p(i(e)),m(A),g(A),l(e),c(s.getSecondsFromExpiry(e))},[]),v=(0,e.useCallback)(()=>{let e=new Date;e.setMilliseconds(e.getMilliseconds()+1e3*u),C(e)},[u,C]),w=(0,e.useCallback)(()=>{h?(c(s.getSecondsFromExpiry(o)),g(!0)):v()},[o,h,v]);return n(()=>{1e3!==f&&p(1e3);let e=s.getSecondsFromExpiry(o);c(e),e<=0&&b()},d?f:null),{...s.getTimeFromSeconds(u),start:w,pause:E,resume:v,restart:C,isRunning:d}}function o(){let{autoStart:A,offsetTimestamp:t}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},[r,i]=(0,e.useState)(s.getSecondsFromExpiry(t,!0)||0),[a,o]=(0,e.useState)(new Date),[l,u]=(0,e.useState)(r+s.getSecondsFromPrevTime(a||0,!0)),[c,d]=(0,e.useState)(A);n(()=>{u(r+s.getSecondsFromPrevTime(a,!0))},c?1e3:null);let g=(0,e.useCallback)(()=>{let e=new Date;o(e),d(!0),u(r+s.getSecondsFromPrevTime(e,!0))},[r]),h=(0,e.useCallback)(()=>{i(l),d(!1)},[l]),m=(0,e.useCallback)(function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,A=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],t=s.getSecondsFromExpiry(e,!0)||0,r=new Date;o(r),i(t),d(A),u(t+s.getSecondsFromPrevTime(r,!0))},[]);return{...s.getTimeFromSeconds(l),start:g,pause:h,reset:m,isRunning:c}}function l(){let{format:A}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},[t,r]=(0,e.useState)(s.getSecondsFromTimeNow());return n(()=>{r(s.getSecondsFromTimeNow())},1e3),{...s.getFormattedTimeFromSeconds(t,A)}}function u(A){if((0,e.useEffect)(()=>{console.warn("react-timer-hook: default export useTimer is deprecated, use named exports { useTimer, useStopwatch, useTime } instead")},[]),A.expiryTimestamp){let e=a(A);return{...e,startTimer:e.start,stopTimer:e.pause,resetTimer:()=>{}}}let t=o(A);return{...t,startTimer:t.start,stopTimer:t.pause,resetTimer:t.reset}}})(),r})())},4327:function(e,A,t){"use strict";t.d(A,{df:function(){return c}});var s=t(2265),r=Object.defineProperty,n=(e,A,t)=>A in e?r(e,A,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[A]=t,i=(e,A,t)=>(n(e,"symbol"!=typeof A?A+"":A,t),t),a=new Map,o=new WeakMap,l=0,u=void 0,c=class extends s.Component{constructor(e){super(e),i(this,"node",null),i(this,"_unobserveCb",null),i(this,"handleNode",e=>{!this.node||(this.unobserve(),e||this.props.triggerOnce||this.props.skip||this.setState({inView:!!this.props.initialInView,entry:void 0})),this.node=e||null,this.observeNode()}),i(this,"handleChange",(e,A)=>{e&&this.props.triggerOnce&&this.unobserve(),"function"!=typeof this.props.children||this.setState({inView:e,entry:A}),this.props.onChange&&this.props.onChange(e,A)}),this.state={inView:!!e.initialInView,entry:void 0}}componentDidMount(){this.unobserve(),this.observeNode()}componentDidUpdate(e){(e.rootMargin!==this.props.rootMargin||e.root!==this.props.root||e.threshold!==this.props.threshold||e.skip!==this.props.skip||e.trackVisibility!==this.props.trackVisibility||e.delay!==this.props.delay)&&(this.unobserve(),this.observeNode())}componentWillUnmount(){this.unobserve()}observeNode(){if(!this.node||this.props.skip)return;let{threshold:e,root:A,rootMargin:t,trackVisibility:s,delay:r,fallbackInView:n}=this.props;this._unobserveCb=function(e,A,t={},s=u){if(void 0===window.IntersectionObserver&&void 0!==s){let r=e.getBoundingClientRect();return A(s,{isIntersecting:s,target:e,intersectionRatio:"number"==typeof t.threshold?t.threshold:0,time:0,boundingClientRect:r,intersectionRect:r,rootBounds:r}),()=>{}}let{id:r,observer:n,elements:i}=function(e){let A=Object.keys(e).sort().filter(A=>void 0!==e[A]).map(A=>{var t;return`${A}_${"root"===A?(t=e.root)?(o.has(t)||(l+=1,o.set(t,l.toString())),o.get(t)):"0":e[A]}`}).toString(),t=a.get(A);if(!t){let s;let r=new Map,n=new IntersectionObserver(A=>{A.forEach(A=>{var t;let n=A.isIntersecting&&s.some(e=>A.intersectionRatio>=e);e.trackVisibility&&void 0===A.isVisible&&(A.isVisible=n),null==(t=r.get(A.target))||t.forEach(e=>{e(n,A)})})},e);s=n.thresholds||(Array.isArray(e.threshold)?e.threshold:[e.threshold||0]),t={id:A,observer:n,elements:r},a.set(A,t)}return t}(t),c=i.get(e)||[];return i.has(e)||i.set(e,c),c.push(A),n.observe(e),function(){c.splice(c.indexOf(A),1),0===c.length&&(i.delete(e),n.unobserve(e)),0===i.size&&(n.disconnect(),a.delete(r))}}(this.node,this.handleChange,{threshold:e,root:A,rootMargin:t,trackVisibility:s,delay:r},n)}unobserve(){this._unobserveCb&&(this._unobserveCb(),this._unobserveCb=null)}render(){let{children:e}=this.props;if("function"==typeof e){let{inView:A,entry:t}=this.state;return e({inView:A,entry:t,ref:this.handleNode})}let{as:A,triggerOnce:t,threshold:r,root:n,rootMargin:i,onChange:a,skip:o,trackVisibility:l,delay:u,initialInView:c,fallbackInView:d,...g}=this.props;return s.createElement(A||"div",{ref:this.handleNode,...g},e)}}}},function(e){e.O(0,[218,453,749,27,971,938,744],function(){return e(e.s=62174)}),_N_E=e.O()}]);