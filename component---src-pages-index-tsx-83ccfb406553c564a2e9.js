"use strict";(self.webpackChunkreact=self.webpackChunkreact||[]).push([[53,245,485,874,907],{1759:function(e,t,a){a.r(t),a.d(t,{default:function(){return m}});var n=a(6540),l=a(5142),c=a(8602),i=a(6973);const s={initial:{scale:.8,opacity:0},animate:{scale:1,opacity:1,transition:{duration:.5}}},r={initial:{opacity:0,y:20},animate:{opacity:1,y:0,transition:{duration:.6}}};var o=a(2532);function m(){const{showTooltip:e,mousePosition:t,copyMail:m}=function(){const{0:e,1:t}=(0,n.useState)(!1),{0:a,1:l}=(0,n.useState)({x:0,y:0});return{showTooltip:e,mousePosition:a,copyMail:e=>{l({x:e.clientX,y:e.clientY}),navigator.clipboard.writeText("wldnd2977@gmail.com"),t(!0),setTimeout((()=>t(!1)),1e3)}}}();return n.createElement(n.Fragment,null,n.createElement("section",{className:"bg-amber-500 flex flex-col",id:"AboutMe"},n.createElement("div",{className:"max-w-5xl mx-auto w-full"},n.createElement("h1",{className:"text-[50px] font-bold text-gray-700 text-center"},"ABOUT ME"),n.createElement(l.P.div,{className:"flex flex-col md:flex-row items-center p-4"},n.createElement("div",{className:"w-full md:w-1/2 flex justify-center items-center mb-8 md:mb-0"},n.createElement(l.P.div,{className:"w-[250px] h-[250px] rounded-full overflow-hidden",initial:"initial",variants:s,whileInView:"animate",viewport:{once:!0}},n.createElement(o.S,{src:"../assets/profile.jpg",alt:"profile",className:"w-full h-full object-cover",__imageData:a(3714)}))),n.createElement(l.P.div,{className:"w-full md:w-1/2",initial:"initial",variants:r,whileInView:"animate",viewport:{once:!0}},n.createElement(l.P.div,{className:"m-8"},n.createElement("h1",{className:"font-bold text-gray-700 text-xl"},"이름"),n.createElement("p",{className:"my-3"},"한지웅")),n.createElement(l.P.div,{className:"m-8"},n.createElement("h1",{className:"font-bold text-gray-700 text-xl"},"생년월일"),n.createElement("p",{className:"my-3"},"1998.01.30")),n.createElement(l.P.div,{className:"m-8"},n.createElement("h1",{className:"font-bold text-gray-700 text-xl"},"연락처"),n.createElement("div",{className:"flex my-3"},n.createElement("p",null,"wldnd2977@gmail.com"),n.createElement(i.r6e,{className:"cursor-pointer text-[8px]",onClick:e=>m(e)})))))),n.createElement(c.N,null,e&&n.createElement(l.P.div,{initial:{opacity:0,y:10},animate:{opacity:1,y:0},exit:{opacity:0},className:"fixed bg-gray-800 text-white px-2 py-1 rounded text-sm",style:{left:t.x+10,top:t.y-10,pointerEvents:"none"}},"복사되었습니다!"))))}},620:function(e,t,a){a.r(t),a.d(t,{default:function(){return r}});var n=a(6540),l=a(5142),c=a(601),i=a(712),s=a(8027);function r(){return n.createElement("section",{id:"Archive",className:"bg-gray-800 flex flex-col items-center"},n.createElement("h1",{className:"text-[50px] font-bold text-gray-700 text-white"},"ARCHIVE"),n.createElement("div",{className:"flex flex-col md:flex-row items-center p-4"},n.createElement(l.P.div,{className:"bg-white w-[300px] h-[300px] rounded-lg m-8 cursor-pointer",whileHover:{scale:1.1},onClick:()=>window.open("https://github.com/scorchedrice","_blank")},n.createElement("div",{className:"flex justify-center items-center mx-auto"},n.createElement(s.hL4,{className:"text-[40px]"}),n.createElement(c.Uvv,{className:"text-[100px] ml-1"})),n.createElement("div",{className:"mx-4"},n.createElement("div",{className:"text-blue-400 mb-4"},"github.com/scorchedrice"),n.createElement("ul",null,n.createElement("h2",{className:"font-bold mb-2"},"소스 코드 저장소입니다."),n.createElement("li",null,"‣ 개인적으로 진행한 학습 코드"),n.createElement("li",null,"‣ 개인 / 팀 프로젝트 코드 등")))),n.createElement(l.P.div,{className:"bg-white w-[300px] h-[300px] rounded-lg m-8 cursor-pointer",whileHover:{scale:1.1},onClick:()=>window.open("https://scorchedrice.github.io","_blank")},n.createElement("div",{className:"flex justify-center items-center mx-auto"},n.createElement(i.upr,{className:"text-[100px]"})),n.createElement("div",{className:"mx-4"},n.createElement("div",{className:"text-blue-400 mb-4"},"scorchedrice.github.io"),n.createElement("ul",null,n.createElement("h2",{className:"font-bold mb-2"},"기록 및 공유 목적의 블로그입니다."),n.createElement("li",null,"‣ 학습 일기 작성"),n.createElement("li",null,"‣ 학습내용 정리, 내용 공유"),n.createElement("li",null,"‣ 고민하며 성장하는 과정들을 기록"))))))}},2746:function(e,t,a){a.r(t),a.d(t,{default:function(){return i}});var n=a(6540);function l(e){let{name:t,content:a}=e;return n.createElement("div",{className:"w-full bg-white rounded-lg shadow-md p-6 mb-6 transition-all duration-300 hover:shadow-lg"},n.createElement("h2",{className:"text-xl font-semibold text-gray-800 mb-4"},t),n.createElement("ul",{className:"space-y-3"},a.map(((e,t)=>n.createElement("li",{key:t,className:"text-gray-600 flex items-start gap-3"},n.createElement("span",{className:"w-1.5 h-1.5 bg-blue-400 rounded-full mt-2"}),n.createElement("span",{className:"flex-1"},e))))))}const c=[{name:"삼성 청년 SW 아카데미",content:["2024.01 - 2024.12 기간동안 1600시간의 SW 교육을 수료했습니다.","프론트엔드 역할로 세차례의 프로젝트를 진행했습니다."]},{name:"홍익대학교",content:["신소재공학과를 졸업했습니다."]}];function i(){return n.createElement("section",{id:"Education",className:"bg-blue-200 flex flex-col items-center w-full py-12"},n.createElement("h1",{className:"text-[50px] font-bold text-gray-700 mb-8"},"EDUCATION"),n.createElement("div",{className:"container mx-auto px-4"},n.createElement("div",{className:"max-w-3xl mx-auto"},c.map(((e,t)=>n.createElement(l,{key:t,name:e.name,content:e.content}))))))}},7543:function(e,t,a){a.r(t),a.d(t,{default:function(){return l}});var n=a(6540);function l(){return n.createElement("footer",{className:"bg-gray-100 py-3"},n.createElement("div",{className:"container mx-auto px-4"},n.createElement("div",{className:"text-center text-gray-600 text-[8px] my-2"},n.createElement("p",{className:"mb-2"},"Updated. 2025.01.20"),n.createElement("p",{className:"mb-2"},"React, Gatsby, Tailwind CSS 기반으로 제작된 사이트입니다."),n.createElement("p",null,"Copyright © 2025. hanjiwoong all rights reserved."))))}},4723:function(e,t,a){a.r(t),a.d(t,{default:function(){return o}});var n=a(6540),l=a(5142);function c(e){let{skillList:t}=e;return n.createElement("div",{className:"flex flex-wrap"},t.map((e=>n.createElement(l.P.div,{key:e.name,className:"relative m-2 group",whileHover:{scale:1.2}},n.createElement("div",{className:"w-[60px] h-[60px] rounded-full bg-amber-50 flex items-center justify-center"},n.createElement("img",{src:e.Url,alt:`${e.name} icon`,className:"w-[30px] h-[30px] object-contain"})),n.createElement(l.P.div,{className:"absolute -bottom-8 left-1/2 -translate-x-1/2 px-2 py-1 bg-black text-white text-sm rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap"},e.name,n.createElement("div",{className:"absolute -top-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-black rotate-45"}))))))}const i={frontend:[{name:"React",Url:"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg"},{name:"Next.js",Url:"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg"},{name:"Flutter",Url:"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flutter/flutter-original.svg"},{name:"Tailwind",Url:"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg"},{name:"Electron",Url:"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/electron/electron-original.svg"},{name:"Gatsby",Url:"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/gatsby/gatsby-original.svg"}],backend:[{name:"Nest.js",Url:"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nestjs/nestjs-original.svg"},{name:"Postgres",Url:"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg"}],language:[{name:"HTML5",Url:"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg"},{name:"CSS",Url:"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg"},{name:"JavaScript",Url:"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg"},{name:"TypeScript",Url:"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg"},{name:"Dart",Url:"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/dart/dart-original.svg"},{name:"Python",Url:"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg"}],test:[{name:"Jest",Url:"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jest/jest-plain.svg"}]},s={hidden:{opacity:0},visible:{opacity:1,transition:{staggerChildren:.4}}},r={hidden:{opacity:0,x:50},visible:{opacity:1,x:0,transition:{type:"spring",stiffness:400,damping:30}}};function o(){const e=[{name:"Language",data:i.language},{name:"Frontend",data:i.frontend},{name:"Backend",data:i.backend},{name:"Testing & Tools",data:i.test}];return n.createElement(l.P.section,{className:"bg-amber-300 flex flex-col items-center",id:"Skills"},n.createElement("h1",{className:"text-[50px] font-bold text-gray-700"},"SKILLS"),n.createElement(l.P.div,{className:"m-4",variants:s,initial:"hidden",whileInView:"visible",viewport:{once:!0}},e.map((e=>{let{name:t,data:a}=e;return n.createElement(l.P.div,{key:t,className:"my-8",variants:r},n.createElement("span",{className:"text-gray-700 font-bold text-[24px]"},t),n.createElement(c,{skillList:a}))}))))}},9477:function(e,t,a){a.r(t),a.d(t,{Head:function(){return h},default:function(){return E}});var n=a(6540),l=a(6634),c=a(1759),i=a(4723),s=a(5142),r=a(1351),o=a(1406);const m=["AboutMe","Skills","Archive","Projects","Education"];function d(){const{isOpen:e,setIsOpen:t,scrollToSection:a}=function(){const{0:e,1:t}=(0,n.useState)(!1);return{scrollToSection:function(e){const a=document.getElementById(e);if(a){const l=a.getBoundingClientRect().top+window.scrollY-50,c=500,i=window.scrollY,s=l-i;let r;function o(e){r||(r=e);const t=e-r,a=Math.min(t/c,1),n=a<.5?2*a*a:1-Math.pow(-2*a+2,2)/2;window.scrollTo(0,i+s*n),t<c&&requestAnimationFrame(o)}try{requestAnimationFrame(o),t(!1)}catch(n){console.log("scroll to section error:",n),window.scrollTo(0,l),t(!1)}}},setIsOpen:t,isOpen:e}}();return n.createElement("nav",{className:"fixed top-0 left-0 right-0 z-50 h-[50px] bg-white/95 shadow-md w-[100dvw]"},n.createElement("div",{className:"hidden md:block h-full max-w-4xl mx-auto px-2"},n.createElement("ul",{className:"flex justify-center items-center h-full gap-2"},m.map((e=>n.createElement("li",{key:e,className:"w-24 px-2 py-1.5 hover:bg-gray-100 rounded-md cursor-pointer text-gray-700 text-sm transition-colors flex justify-center items-center",onClick:()=>a(e)},e))),n.createElement("li",{key:"feedback",className:"w-24 px-2 py-1.5 hover:bg-gray-100 rounded-md cursor-pointer text-gray-700 text-sm transition-colors flex justify-center items-center group relative",onClick:()=>{window.open("https://docs.google.com/forms/d/e/1FAIpQLSfrEzTQw-yeP5Vh-qbSv27eodEqOq2zS9qIm9PLw472JGR_Cg/viewform?usp=dialog","_blank")}},n.createElement(o.Kyq,{className:"w-4 h-4"}),n.createElement("span",{className:"absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white px-2 py-1 rounded text-xs opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap"},"피드백 보내기")))),n.createElement("div",{className:"md:hidden px-4"},n.createElement("div",{className:"flex justify-between items-center h-[50px]"},n.createElement("span",{className:"font-medium"},"한지웅's 포트폴리오"),n.createElement("button",{onClick:()=>t(!e),className:"p-2"},e?n.createElement(r.$8F,{size:24}):n.createElement(r.yFL,{size:24}))),n.createElement(s.P.div,{initial:!1,animate:{height:e?"auto":0,opacity:e?1:0},className:"overflow-hidden bg-white shadow-lg"},n.createElement("ul",{className:"py-2"},m.map((e=>n.createElement("li",{key:e,className:"px-4 py-3 hover:bg-gray-100 cursor-pointer text-gray-700 text-sm transition-colors",onClick:()=>{a(e)}},e)))))))}var p=a(620),u=a(2746),f=a(6391),g=a(312),v=a.n(g),x=a(7543);function h(){return n.createElement(n.Fragment,null,n.createElement("title",null,"한지웅의 프로필/포트폴리오"),n.createElement("meta",{name:"description",content:"FE개발자 한지웅의 프로필/포트폴리오 페이지입니다."}),n.createElement("meta",{name:"keywords",content:"프론트엔드,FE,Frontend,개발자,리액트,React,개츠비,Gatsby,타입스크립트,포트폴리오,한지웅,TypeScript"}),n.createElement("meta",{name:"author",content:"한지웅,scorchedrice"}),n.createElement("meta",{name:"robots",content:"index,follow"}),n.createElement("meta",{name:"language",content:"Korean"}),n.createElement("meta",{name:"viewport",content:"width=device-width, initial-scale=1.0"}),n.createElement("meta",{httpEquiv:"Content-Type",content:"text/html; charset=utf-8"}),n.createElement("meta",{property:"og:title",content:"FE개발자 한지웅의 포트폴리오"}),n.createElement("meta",{property:"og:description",content:"FE개발자 한지웅의 포트폴리오입니다"}),n.createElement("meta",{property:"og:type",content:"website"}))}function E(){return n.createElement(n.Fragment,null,n.createElement("header",null,n.createElement(d,null)),n.createElement("main",null,n.createElement(l.default,null),n.createElement(c.default,null),n.createElement(i.default,null),n.createElement(p.default,null),n.createElement(f.default,null),n.createElement(u.default,null)),n.createElement(x.default,null))}"undefined"!=typeof window&&v().setAppElement("#___gatsby")},3714:function(e){e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#080808","images":{"fallback":{"src":"/my_profile/static/ca8bc112833a0feb1d50f6242923bc0d/5dbe9/profile.jpg","srcSet":"/my_profile/static/ca8bc112833a0feb1d50f6242923bc0d/8219c/profile.jpg 481w,\\n/my_profile/static/ca8bc112833a0feb1d50f6242923bc0d/c743b/profile.jpg 962w,\\n/my_profile/static/ca8bc112833a0feb1d50f6242923bc0d/5dbe9/profile.jpg 1924w","sizes":"(min-width: 1924px) 1924px, 100vw"},"sources":[{"srcSet":"/my_profile/static/ca8bc112833a0feb1d50f6242923bc0d/871d9/profile.webp 481w,\\n/my_profile/static/ca8bc112833a0feb1d50f6242923bc0d/9e2c2/profile.webp 962w,\\n/my_profile/static/ca8bc112833a0feb1d50f6242923bc0d/0480d/profile.webp 1924w","type":"image/webp","sizes":"(min-width: 1924px) 1924px, 100vw"}]},"width":1924,"height":2450}')}}]);
//# sourceMappingURL=component---src-pages-index-tsx-83ccfb406553c564a2e9.js.map