"use strict";(self.webpackChunkreact=self.webpackChunkreact||[]).push([[136,245,485,874,907],{2682:function(e,t,a){a.d(t,{cm:function(){return c},e7:function(){return n},mn:function(){return l},wS:function(){return i}});const n={initial:{scale:.8,opacity:0},animate:{scale:1,opacity:1,transition:{duration:.5}}},l={initial:{opacity:0,y:20},animate:{opacity:1,y:0,transition:{duration:.6}}},c={hidden:{opacity:0},visible:{opacity:1,transition:{staggerChildren:.4}}},i={hidden:{opacity:0,x:50},visible:{opacity:1,x:0,transition:{type:"spring",stiffness:400,damping:30}}}},6991:function(e,t,a){a.r(t),a.d(t,{default:function(){return o}});var n=a(6540),l=a(5142),c=a(8602),i=a(6973),s=a(2682);var r=a(2532);function o(){const{showTooltip:e,mousePosition:t,copyMail:o}=function(){const{0:e,1:t}=(0,n.useState)(!1),{0:a,1:l}=(0,n.useState)({x:0,y:0});return{showTooltip:e,mousePosition:a,copyMail:e=>{l({x:e.clientX,y:e.clientY}),navigator.clipboard.writeText("wldnd2977@gmail.com"),t(!0),setTimeout((()=>t(!1)),1e3)}}}();return n.createElement("div",{className:"bg-amber-500 flex flex-col",id:"AboutMe"},n.createElement("div",{className:"max-w-5xl mx-auto w-full"},n.createElement("h1",{className:"text-[50px] font-bold text-gray-700 text-center"},"ABOUT ME"),n.createElement(l.P.div,{className:"flex flex-col md:flex-row items-center p-4"},n.createElement("div",{className:"w-full md:w-1/2 flex justify-center items-center mb-8 md:mb-0"},n.createElement(l.P.div,{className:"w-[250px] h-[250px] rounded-full overflow-hidden",initial:"initial",variants:s.e7,whileInView:"animate",viewport:{once:!0}},n.createElement(r.S,{src:"../assets/profile.jpg",alt:"profile",className:"w-full h-full object-cover",__imageData:a(3714)}))),n.createElement(l.P.div,{className:"w-full md:w-1/2",initial:"initial",variants:s.mn,whileInView:"animate",viewport:{once:!0}},n.createElement(l.P.div,{className:"m-8"},n.createElement("h1",{className:"font-bold text-gray-700 text-xl"},"이름"),n.createElement("p",{className:"my-3"},"한지웅")),n.createElement(l.P.div,{className:"m-8"},n.createElement("h1",{className:"font-bold text-gray-700 text-xl"},"생년월일"),n.createElement("p",{className:"my-3"},"1998.01.30")),n.createElement(l.P.div,{className:"m-8"},n.createElement("h1",{className:"font-bold text-gray-700 text-xl"},"연락처"),n.createElement("div",{className:"flex my-3"},n.createElement("p",null,"wldnd2977@gmail.com"),n.createElement(i.r6e,{className:"cursor-pointer text-[8px]",onClick:e=>o(e)})))))),n.createElement(c.N,null,e&&n.createElement(l.P.div,{initial:{opacity:0,y:10},animate:{opacity:1,y:0},exit:{opacity:0},className:"fixed bg-gray-800 text-white px-2 py-1 rounded text-sm",style:{left:t.x+10,top:t.y-10,pointerEvents:"none"}},"복사되었습니다!")))}},620:function(e,t,a){a.r(t),a.d(t,{default:function(){return r}});var n=a(6540),l=a(5142),c=a(601),i=a(712),s=a(8027);function r(){return n.createElement("div",{id:"Archive",className:"bg-gray-800 flex flex-col items-center"},n.createElement("h1",{className:"text-[50px] font-bold text-gray-700 text-white"},"ARCHIVE"),n.createElement("div",{className:"flex flex-col md:flex-row items-center p-4"},n.createElement(l.P.div,{className:"bg-white w-[300px] h-[300px] rounded-lg m-8 cursor-pointer",whileHover:{scale:1.1},onClick:()=>window.open("https://github.com/scorchedrice","_blank")},n.createElement("div",{className:"flex justify-center items-center mx-auto"},n.createElement(s.hL4,{className:"text-[40px]"}),n.createElement(c.Uvv,{className:"text-[100px] ml-1"})),n.createElement("div",{className:"mx-4"},n.createElement("div",{className:"text-blue-400 mb-4"},"github.com/scorchedrice"),n.createElement("ul",null,n.createElement("h2",{className:"font-bold mb-2"},"소스 코드 저장소입니다."),n.createElement("li",null,"‣ 개인적으로 진행한 학습 코드"),n.createElement("li",null,"‣ 개인 / 팀 프로젝트 코드 등")))),n.createElement(l.P.div,{className:"bg-white w-[300px] h-[300px] rounded-lg m-8 cursor-pointer",whileHover:{scale:1.1},onClick:()=>window.open("https://scorchedrice.github.io","_blank")},n.createElement("div",{className:"flex justify-center items-center mx-auto"},n.createElement(i.upr,{className:"text-[100px]"})),n.createElement("div",{className:"mx-4"},n.createElement("div",{className:"text-blue-400 mb-4"},"scorchedrice.github.io"),n.createElement("ul",null,n.createElement("h2",{className:"font-bold mb-2"},"기록 및 공유 목적의 블로그입니다."),n.createElement("li",null,"‣ 학습 일기 작성"),n.createElement("li",null,"‣ 학습내용 정리, 내용 공유"),n.createElement("li",null,"‣ 고민하며 성장하는 과정들을 기록"))))))}},2096:function(e,t,a){a.r(t),a.d(t,{default:function(){return i}});var n=a(6540);function l(e){let{name:t,content:a}=e;return n.createElement("div",{className:"w-full bg-white rounded-lg shadow-md p-6 mb-6 transition-all duration-300 hover:shadow-lg"},n.createElement("h2",{className:"text-xl font-semibold text-gray-800 mb-4"},t),n.createElement("ul",{className:"space-y-3"},a.map(((e,t)=>n.createElement("li",{key:t,className:"text-gray-600 flex items-start gap-3"},n.createElement("span",{className:"w-1.5 h-1.5 bg-blue-400 rounded-full mt-2"}),n.createElement("span",{className:"flex-1"},e))))))}const c=[{name:"삼성 청년 SW 아카데미",content:["2024.01 - 2024.12 기간동안 1600시간의 SW 교육을 수료했습니다.","프론트엔드 역할로 세차례의 프로젝트를 진행했습니다."]},{name:"홍익대학교",content:["신소재공학과를 졸업했습니다."]}];function i(){return n.createElement("div",{id:"Education",className:"bg-blue-200 flex flex-col items-center w-full py-12"},n.createElement("h1",{className:"text-[50px] font-bold text-gray-700 mb-8"},"EDUCATION"),n.createElement("div",{className:"container mx-auto px-4"},n.createElement("div",{className:"max-w-3xl mx-auto"},c.map(((e,t)=>n.createElement(l,{key:t,name:e.name,content:e.content}))))))}},7543:function(e,t,a){a.r(t),a.d(t,{default:function(){return l}});var n=a(6540);function l(){return n.createElement("footer",{className:"bg-gray-100 py-3"},n.createElement("div",{className:"container mx-auto px-4"},n.createElement("div",{className:"text-center text-gray-600 text-[8px] my-2"},n.createElement("p",{className:"mb-2"},"Updated. 2025.01.16"),n.createElement("p",{className:"mb-2"},"React, Gatsby, Tailwind CSS 기반으로 제작된 사이트입니다."),n.createElement("p",null,"Copyright © 2025. hanjiwoong all rights reserved."))))}},2812:function(e,t,a){a.r(t),a.d(t,{default:function(){return r}});var n=a(6540),l=a(5142);function c(e){let{skillList:t}=e;return n.createElement("div",{className:"flex flex-wrap"},t.map((e=>n.createElement(l.P.div,{key:e.name,className:"relative m-2 group",whileHover:{scale:1.2}},n.createElement("div",{className:"w-[60px] h-[60px] rounded-full bg-amber-50 flex items-center justify-center"},n.createElement("img",{src:e.Url,alt:`${e.name} icon`,className:"w-[30px] h-[30px] object-contain"})),n.createElement(l.P.div,{className:"absolute -bottom-8 left-1/2 -translate-x-1/2 px-2 py-1 bg-black text-white text-sm rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap"},e.name,n.createElement("div",{className:"absolute -top-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-black rotate-45"}))))))}const i={frontend:[{name:"React",Url:"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg"},{name:"Next.js",Url:"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg"},{name:"Flutter",Url:"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flutter/flutter-original.svg"},{name:"Tailwind",Url:"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg"},{name:"Electron",Url:"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/electron/electron-original.svg"}],backend:[{name:"Nest.js",Url:"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nestjs/nestjs-original.svg"},{name:"Postgres",Url:"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg"}],language:[{name:"HTML5",Url:"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg"},{name:"CSS",Url:"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg"},{name:"JavaScript",Url:"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg"},{name:"TypeScript",Url:"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg"},{name:"Dart",Url:"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/dart/dart-original.svg"},{name:"Python",Url:"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg"}],test:[{name:"Jest",Url:"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jest/jest-plain.svg"}]};var s=a(2682);function r(){const e=[{name:"Language",data:i.language},{name:"Frontend",data:i.frontend},{name:"Backend",data:i.backend},{name:"Testing & Tools",data:i.test}];return n.createElement(l.P.div,{className:"bg-amber-300 flex flex-col items-center",id:"Skills"},n.createElement("h1",{className:"text-[50px] font-bold text-gray-700"},"SKILLS"),n.createElement(l.P.div,{className:"m-4",variants:s.cm,initial:"hidden",whileInView:"visible",viewport:{once:!0}},e.map((e=>{let{name:t,data:a}=e;return n.createElement(l.P.div,{key:t,className:"my-8",variants:s.wS},n.createElement("span",{className:"text-gray-700 font-bold text-[24px]"},t),n.createElement(c,{skillList:a}))}))))}},5616:function(e,t,a){a.r(t),a.d(t,{default:function(){return x}});var n=a(6540),l=a(3795),c=a(6991),i=a(2812),s=a(5142),r=a(1351);function o(){const{0:e,1:t}=(0,n.useState)(!1),a=["AboutMe","Skills","Archive","Projects","Education"];function l(e){const a=document.getElementById(e);if(a){const e=a.getBoundingClientRect().top+window.scrollY-50;window.scrollTo({top:e,behavior:"smooth"}),t(!1)}}return n.createElement(s.P.nav,{className:"fixed top-0 left-0 right-0 z-50 h-[50px] bg-white/95 shadow-md w-[100dvw]"},n.createElement("div",{className:"hidden md:block h-full max-w-4xl mx-auto px-2"},n.createElement("ul",{className:"flex justify-center items-center h-full gap-2"},a.map((e=>n.createElement("li",{key:e,className:"px-2 py-1.5 hover:bg-gray-100 rounded-md cursor-pointer text-gray-700 text-sm transition-colors",onClick:()=>l(e)},e))))),n.createElement("div",{className:"md:hidden px-4"},n.createElement("div",{className:"flex justify-between items-center h-[50px]"},n.createElement("span",{className:"font-medium"},"한지웅's 포트폴리오"),n.createElement("button",{onClick:()=>t(!e),className:"p-2"},e?n.createElement(r.$8F,{size:24}):n.createElement(r.yFL,{size:24}))),n.createElement(s.P.div,{initial:!1,animate:{height:e?"auto":0,opacity:e?1:0},className:"overflow-hidden bg-white shadow-lg"},n.createElement("ul",{className:"py-2"},a.map((e=>n.createElement("li",{key:e,className:"px-4 py-3 hover:bg-gray-100 cursor-pointer text-gray-700 text-sm transition-colors",onClick:()=>l(e)},e)))))))}var m=a(620),d=a(2096),u=a(1620),p=a(312),f=a.n(p),v=a(7543);function x(){return n.createElement(n.Fragment,null,n.createElement(o,null),n.createElement(l.default,null),n.createElement(c.default,null),n.createElement(i.default,null),n.createElement(m.default,null),n.createElement(u.default,null),n.createElement(d.default,null),n.createElement(v.default,null))}"undefined"!=typeof window&&f().setAppElement("#___gatsby")},3714:function(e){e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#080808","images":{"fallback":{"src":"/static/ca8bc112833a0feb1d50f6242923bc0d/5dbe9/profile.jpg","srcSet":"/static/ca8bc112833a0feb1d50f6242923bc0d/8219c/profile.jpg 481w,\\n/static/ca8bc112833a0feb1d50f6242923bc0d/c743b/profile.jpg 962w,\\n/static/ca8bc112833a0feb1d50f6242923bc0d/5dbe9/profile.jpg 1924w","sizes":"(min-width: 1924px) 1924px, 100vw"},"sources":[{"srcSet":"/static/ca8bc112833a0feb1d50f6242923bc0d/871d9/profile.webp 481w,\\n/static/ca8bc112833a0feb1d50f6242923bc0d/9e2c2/profile.webp 962w,\\n/static/ca8bc112833a0feb1d50f6242923bc0d/0480d/profile.webp 1924w","type":"image/webp","sizes":"(min-width: 1924px) 1924px, 100vw"}]},"width":1924,"height":2450}')}}]);
//# sourceMappingURL=component---src-pages-index-tsx-b70c18779816a936167a.js.map