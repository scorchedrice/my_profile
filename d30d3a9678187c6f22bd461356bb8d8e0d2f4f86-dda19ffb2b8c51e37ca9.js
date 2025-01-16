/*! For license information please see d30d3a9678187c6f22bd461356bb8d8e0d2f4f86-dda19ffb2b8c51e37ca9.js.LICENSE.txt */
(self.webpackChunkreact=self.webpackChunkreact||[]).push([[857],{411:function(e,t,n){var o;!function(){"use strict";var a=!("undefined"==typeof window||!window.document||!window.document.createElement),l={canUseDOM:a,canUseWorkers:"undefined"!=typeof Worker,canUseEventListeners:a&&!(!window.addEventListener&&!window.attachEvent),canUseViewport:a&&!!window.screen};void 0===(o=function(){return l}.call(t,n,t,e))||(e.exports=o)}()},6566:function(e,t){t.polyfill=e=>e},8705:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return L}});var o=n(6540),a=n(8602),l=n(5142);function r(e){let{skills:t}=e;return o.createElement("div",{className:"flex flex-wrap gap-1 w-full"},t.map(((e,t)=>o.createElement("div",{key:t,className:"flex items-center bg-gray-100 rounded-md px-2 py-0.5"},o.createElement("span",{className:"text-xs"},e)))))}var s=n(638),i=n.p+"static/baro_main-c11fc29537114cbd21aca3c322d02bf4.png";const c={id:2,overview:{title:"바로바로",period:"2024.09 - 2024.11",github:"",demo:"",teamMembers:6,role:"팀 프로젝트, 프론트엔드",mainImg:i},description:{summary:"전자계약서 기반의 공연 물품 대여 중개 플랫폼입니다.",motivation:"기존 물품대여는 X.com, 번개장터 등에서 이루어 졌습니다. 하지만 이는 사기 위험성이 높았습니다. 전자계약서를 통해 안정성을 보장하는 서비스를 제공하고자 개발했습니다.",mainFeatures:[{title:"전자계약서",content:"사용자가 PIN을 입력하는 과정을 통해 부인방지를 구현했고 전자서명 기능을 구현했습니다."},{title:"실시간 계약 기능",content:"실시간 채팅을 구현하고, 대여인과 소유인이 순차적으로 계약 요청 및 계약서 작성이 가능하도록 기능을 구현했습니다."},{title:"계약서 유효성 판단",content:"계약서 작성 시 '바로바로'의 워터마크를 삽입합니다. 이를 활용하여 계약서의 진위를 판별할 수 있는 기능을 제공합니다."}],techStack:{frontend:["Next.js","TypeScript","Tailwind CSS","Zustand","Jest"],tools:["Git","GitLab","Figma"]},challenges:[{problem:"프로젝트의 목적인 '법적 효력 보장을 통한 거래 안정성 강화'를 위해선 실제로 법적 효력이 있는 전자계약서 작성이 필요했습니다.",solution:"팀원들과 함께 조사를 진행하며 법적 효력이 있는 전자계약서 내용을 구성했습니다. 또한 유효한 거래를 위해 대여자가 거래를 요청하면 서명이 없는 pdf를 생성하고 해당 pdf파일에 순차적으로 PIN번호 입력(부인방지) 후 순차적으로 서명을 진행하는 로직을 구현하고 워터마크를 삽입하여 계약서 진위여부 판단에 활용할 수 있도록 기능을 구현했습니다.",solutionSummary:"실제로 법적 효력을 가지는 전자계약서를 작성하기 위해"}],achievement:["라우팅 아키텍처 설계, 검색 기능, 마이페이지 기능, pdf 유효성 판단 및 제공 기능을 개발했습니다. 이를 통해 Next.js의 아키텍처 및 활용법을 익혔습니다.","Jest를 부분적으로 도입했습니다. 완전한 도입은 아니기에 아쉬움이 남지만, Jest 활용 방법을 익힐 수 있었습니다.","법적 효력이 있는 전자계약서 구성을 위해 고민하는 과정을 통해 개발 외적인 부분에서도 학습할 수 있는 좋은 기회였습니다. 실제로 서비스를 개발할 때 고려해야하는 것이 무엇인지 그 어느때보다 진지하게 고민한 프로젝트입니다."]},images:[{url:i,caption:"메인 화면"},{url:n.p+"static/baro_sign-8251f0d2e0f7a14e7913436d07c3db7d.png",caption:"회원가입 과정"},{url:n.p+"static/baro_post-f443448e57fc018e58c3634a761ffd0f.png",caption:"게시물 등록 과정"},{url:n.p+"static/baro_detail-70c0cbd5fd33862076db3004850c9950.png",caption:"게시물 상세 정보"},{url:n.p+"static/baro_pin-3651bf2448b8a7a914cf0fea6123b154.png",caption:"핀번호 입력 창"},{url:n.p+"static/baro_contract_1-5a237ae27529d1d35cb5de1c72081527.png",caption:"계약 요청"},{url:n.p+"static/baro_contract_2-a2057d0afc9aedc80c97eb82475a6869.png",caption:"소유자의 승인, 대여자측에게 확인 요청"},{url:n.p+"static/baro_contract_3-fcd499435adccfd6797533d42876e0a5.png",caption:"대여자의 계약 확인, 계약성사"},{url:n.p+"static/baro_verification-0ae81bcde8c5c77554dfbbed2eabf608.png",caption:"본인인증"}]};const u={id:3,overview:{title:"자냥",period:"2024.08 - 2024.09",github:"",demo:"",teamMembers:6,role:"팀 프로젝트, 프론트엔드",mainImg:n.p+"static/janyang_main-bd44166808f2c242dda9b77291ccac7c.png"},description:{summary:"친구들과 함께할 수 있는 미션 참여형 알람앱입니다.",motivation:"일어나기 힘든 아침시간, 즐겁게 일어날 수 있는 방법 없을까? 라는 고민에서 시작한 프로젝트입니다.",mainFeatures:[{title:"미션 수행",content:"알람이 울리면 해당 알람방에 속해있던 인원들은 미션을 수행할 수 있습니다. 미션방(화상회의방)에 입장하면 수행할 미션을 선택하고 친구들과 함께 미션을 수행할 수 있습니다. 미션 수행 여부는 투표를 통해 결정합니다."},{title:"1인 모드",content:"AI를 활용하여 혼자서도 미션을 수행할 수 있도록 기능을 구현했습니다. 해당하는 미션을 혼자 수행하고 AI에 판독을 요청하면 Base64로 해당 정보를 받은 ChatGPT가 이를 판별하고 결과를 반환하는 로직을 통해 이를 구현했습니다."},{title:"필터링 기능",content:"서로의 얼굴을 공유하는 것이 부담으로 느껴지는 사용자를 위해 얼굴을 필터링 할 수 있는 기능을 개발했습니다. 해당 기능을 켜면 얼굴이 캐릭터로 필터링됩니다."},{title:"알람 생성",content:"미션알람과 일반알람을 별개로 생성할 수 있도록 하였습니다. 미션 알람의 미션 수행시간과 다른 알람이 겹치는 것을 방지하기 위한 기능을 추가 구현했습니다."},{title:"다크모드 & 라이트모드",content:"접속 시간대에 따라 자동으로 적용되며 사용자가 직접 변경할 수 있습니다."},{title:"Lottie를 활용한 Animated Logo",content:"다크모드와 라이트모드에 따라 고양이 눈의 동공이 변화하도록 기능을 구현했습니다. 또한 무작위의 시간에 무작위의 방향으로 눈동자가 움직이는 기능을 추가하여 사용자가 즐겁게 앱을 사용할 수 있도록 기능을 개발했습니다."},{title:"미션 수행 정보 제공",content:"최근 7일/30일간 미션 수행정도, 미션방 별 미션 수행도 그래프 등의 정보를 제공합니다."}],techStack:{frontend:["Flutter","Dart","GetX"],tools:["Git","GitLab","AndroidStudio","Lottie","Figma"]},challenges:[{problem:"프로젝트 초기 ReactNative의 Expo로 개발을 시작했으나 빌드 속도의 이슈가 있었습니다.",solution:"React 사용자에게 친화적인 ReactNative 이지만 원활한 개발환경 구축을 위해선 프레임워크를 변경할 필요가 있었습니다. Flutter로 체제를 전환했으나 Dart 언어 기반으로 동작하는 특성상 팀원들의 추가 학습이 필요한 상황이었습니다. 이에 효율적인 개발 진행을 위해 팀을 두 트랙으로 나누어 운영했습니다. OpenVidu 기반 실시간 화상통신 구현팀은 React로 개발을 진행하고 이를 웹뷰로 통합하는 방식을 채택했으며, UI/UX 담당 팀원들은 Flutter 학습 후 순차적으로 개발에 참여하는 전략을 수립했습니다. 저는 Flutter 개발을 담당하여 앱의 주요 UI/UX 구현을 맡았습니다.",solutionSummary:"원활한 개발 환경 구축을 위해"}],achievement:["Flutter라는 크로스 플랫폼 프레임워크를 활용한 네이티브 모바일 앱 개발 경험을 쌓았습니다.","UI/UX를 구현하는 역할을 담당했으며 Dark & Light 모드, Animated Logo (Lottie), 튜토리얼모드, 미션 참여도 기반의 그래프 제공 기능을 개발했습니다. 사용자 경험을 높이기 위한 방법은 무엇이 있을까 고민하며 관련 역량을 키웠습니다.","AI를 활용하여 더 높은 수준의 프로젝트를 완성할 수 있었다고 생각합니다. AI를 활용하여 1인 미션참여의 경우에도 미션 수행 장면을 분석하여 미션 성공 여부를 판별할 수 있도록 기능을 구현했습니다."]},images:[{url:n.p+"static/janyang_create_alarm-14862d4c3de1a292197e5b6a478d2bb0.png",caption:"메인 화면 및 알람 생성"},{url:n.p+"static/janyang_enter_mission-d13a65671e27e3e6b9397331c437684a.png",caption:"미션 알람 미션방 진입"},{url:n.p+"static/janyang_mission-cc0c876a95f2af73d4ac7331e3385a39.png",caption:"미션 수행"},{url:n.p+"static/janyang_change_mission-b28d319bcda0736c9559e3dc20a9b62b.png",caption:"미션 변경"},{url:n.p+"static/janyang_solo_mission-27826b28f67655c26d6c559149d7bc28.png",caption:"AI를 활용한 단독 미션"}]};var d=n.p+"static/portfolio-275c870c18df1ea53680bea5240e2a17.png";const f={id:1,overview:{title:"포트폴리오",period:"2024.12-진행중",github:"https://github.com/scorchedrice/my_profile",demo:"https://scorchedrice.github.io/my_profile",teamMembers:1,role:"개인 프로젝트",mainImg:d},description:{summary:"React와 TypeScript를 활용한 포트폴리오 웹사이트입니다.",motivation:"저만의 포트폴리오 사이트를 가지고 싶어 제작했습니다.",mainFeatures:[{title:"프로젝트 구조",content:"FSD구조를 채택했습니다."},{title:"인터렉션 작업",content:"framer-motion을 활용하여 애니메이션 기능을 추가했습니다."},{title:"프로젝트 필터링",content:"개인/팀 프로젝트를 구분하여 볼 수 있습니다, 추후 백엔드 프로젝트 경험이 생기면 기술 역할 별 필터링 기능도 추가할 예정입니다."}],techStack:{frontend:["React","TypeScript","Tailwind CSS","Framer Motion"],deployment:["Github Action"],tools:["Git","GitHub"]},challenges:[{problem:"프로젝트 필터링 기능으로 스크롤 길이가 계속 변화하는 이슈가 있었습니다.",solution:"모든 프로젝트가 표시될 때의 height를 계산하여 변화하지 않는 height를 가지도록 했습니다.",solutionSummary:"스크롤 사이즈를 예상하는 함수를 추가하여 불필요한 스크롤 길이 변화 이슈 해결"}],achievement:["framer-motion을 활용해 컴포넌트 단위로 애니메이션을 적용할 수 있었습니다. 간단한 조작으로 사용자 인터렉션을 제공할 수 있어 재미있는 경험이었습니다.","React로 개발한 프로젝트를 Github Action을 활용하여 github pages로 배포하는 경험을 쌓았습니다."]},images:[{url:d,caption:"메인 화면"}]};var p=n.p+"static/miruniDiary-81e7b748cfa351da621384798645992d.png",m=n.p+"static/miruniMain-994891754398ad8b0b2cd7e2701f9ff9.png",h=n.p+"static/miruniOCR-395e1ced493ec635b261303f525c466f.png",v=n.p+"static/miruniStudy-b5450536b35c5c74b4113c4e061adeed.png",b=n.p+"static/miruniStudy_start-cad6512bd840ed6fe3f71a126fb01761.png";const y=[{id:1,title:"포트폴리오",description:"현재 보고계시는 페이지입니다.",img:"project/portfolio/portfolio.png",skill:["React","TypeScript","Tailwind"],type:"personal"},{id:2,title:"바로바로",description:"전자계약서 기반 물품 대여 플랫폼입니다.",img:"project/barobaro/baro_main.png",skill:["Next.js","Zustand","TypeScript","Tailwind"],type:"team"},{id:3,title:"자냥",description:"미션 참여형 알람앱입니다.",img:"project/janyang/janyang_main.png",skill:["Flutter","Dart"],type:"team"},{id:4,title:"미루니",description:"학습보조 데스크탑 앱입니다.",img:"project/miruni/miruniMain.png",skill:["Electron","React","TypeScript"],type:"team"}],g=[f,c,u,{id:4,overview:{title:"미루니",period:"2024.11 - 2024.12",github:"",demo:"",teamMembers:5,role:"팀 프로젝트, 프론트엔드",mainImg:m},description:{summary:"학습 보조 데스크탑앱 서비스입니다.",motivation:"숏폼의 발달 등 다양한 이유로 집중하기 정말 어려운 지금, 집중환경을 조성하고 학습내용을 관리해주는 서비스가 있다면 좋지 않을까? 라는 생각에서 시작한 프로젝트입니다.",mainFeatures:[{title:"집중도 판별",content:"웹캠을 활용하여 집중도를 판별합니다. Python MediaPipe를 활용했습니다."},{title:"학습내용 정리",content:"언제 어떤 학습을 진행했는지 Github 잔디 형식으로 정보를 보여줍니다. 학습이 끝난 경우엔 OCR과 ChatGPT를 활용하여 정리된 내용을 보여줍니다."},{title:"함께하는 학습",content:"소속된 그룹원들과 함께 학습을 진행할 수 있습니다. 몇명이 학습을 진행중인지 확인할 수 있습니다."}],techStack:{frontend:["Electron","React","TypeScript"],tools:["Git","GitLab","Figma"]},challenges:[{problem:"OCR정보를 Text로 전환하여 가지고 있다가 묶음 단위로 서버에 전송하는 방식으로 방법을 수정했습니다.",solution:"OCR 이미지를 계속 저장하고 있는 것, 매번 OCR 처리 요청을 보내는 것은 부담이였습니다.",solutionSummary:"효율적인 OCR 처리를 위해"},{problem:"Electron의 경우 main process에서 데이터 통신이 진행되어야합니다.",solution:"하지만 개발을 진행할 때 이를 고려하지 않고 개발을 진행했었습니다. 일반적인 웹 개발과 동일하게 개발을 진행하였기에 오류가 발생하였습니다. 이를 해결하기 위해 renderer process → main process → API 요청 → main process → renderer process의 순서로 IPC 통신을 활용한 API 요청 로직을 구현했습니다..",solutionSummary:"IPC 통신"}],achievement:["Electron이라는 새로운 프레임워크 관련 내용을 학습할 수 있었습니다.","IPC 통신에 대해 알 수 있었습니다.","React를 활용하더라도 사용하는 프레임워크에 따라 개발 방식이 많이 바뀔 수 있다는 것을 경험을 통해 깨달았습니다."]},images:[{url:m,caption:"메인 화면"},{url:h,caption:"OCR 처리 결과"},{url:b,caption:"학습 시작"},{url:v,caption:"학습"},{url:p,caption:"학습 회고"}]}],E=400,O=32;function C(){const{0:e,1:t}=(0,o.useState)("all"),{0:n,1:a}=(0,o.useState)(0),l="all"===e?y:y.filter((t=>t.type===e)),r="w-full py-2 px-4 rounded-lg transition-all duration-200 text-left";return(0,o.useEffect)((()=>{const e=()=>{a(function(e){const t=(o=window.innerWidth,o>=1280?3:o>=768?2:1),n=Math.ceil(e/t);var o;return(E+O)*n-O}(y.length))};return e(),window.addEventListener("resize",e),()=>window.removeEventListener("resize",e)}),[]),{setProjectType:t,filteredProjects:l,getButtonStyle:t=>e===t?`${r} bg-blue-500 text-white shadow-md`:`${r} hover:bg-gray-100`,gridHeight:n}}var w=n(312),x=n.n(w),N=n(9197),S=n(8027),_=n(6512);function M(e){let{overview:t,onClose:n}=e;const{title:a,period:l,github:r,demo:s,teamMembers:i,role:c,mainImg:u}=t;return o.createElement("div",{className:"relative w-full"},o.createElement("div",{className:"flex flex-col items-center"},o.createElement("h1",{className:"text-[30px] my-2"},a),o.createElement("div",{className:"flex text-[12px] my-2"},o.createElement("div",{className:"mx-2"},l),o.createElement("div",{className:"mx-2"},i,"인 (",c,")")),o.createElement("div",null,o.createElement("img",{src:u,alt:`${a}_mainImage`,className:"max-w-[300px] max-h-[300px] object-contain"}))),o.createElement("div",{className:"absolute top-0 right-1 flex flex-col text-[40px]"},o.createElement("button",{type:"button",onClick:()=>n()},o.createElement(_.cmI,null)),""!==r&&o.createElement("button",{type:"button",className:"my-2",onClick:()=>window.open(r,"_blank")},o.createElement(S.hL4,null)),""!==s&&o.createElement("button",{type:"button",className:"my-2",onClick:()=>window.open(s,"_blank")},o.createElement(N.AnD,null))))}function j(e){let{description:t}=e;return o.createElement(o.Fragment,null,o.createElement("div",{className:"my-2 flex flex-col items-center"},o.createElement("h3",{className:"text-[20px]"},t.summary),o.createElement("h4",null,t.motivation)),o.createElement("br",null),o.createElement("hr",{className:"w-[95%] border-t border-gray-200"}),o.createElement("br",null),o.createElement("div",{className:"w-[80%]"},o.createElement("h2",{className:"text-[30px] font-bold"},"💡 핵심기능"),o.createElement("ul",{className:"m-5 space-y-4"},t.mainFeatures.map(((e,t)=>o.createElement("li",{key:t,className:"flex flex-col gap-2"},o.createElement("h3",{className:"text-xl font-semibold"},e.title),o.createElement("p",{className:"text-gray-700"},e.content))))),o.createElement("br",null),o.createElement("h2",{className:"text-[30px] font-bold"},"🪄 사용한 기술"),o.createElement("div",{className:"m-5 space-y-4"},Object.entries(t.techStack).map((e=>{let[t,n]=e;return o.createElement("div",{key:t,className:"flex flex-col gap-2"},o.createElement("h3",{className:"text-xl font-semibold capitalize"},t),o.createElement("div",{className:"flex flex-wrap gap-2"},n.map((e=>o.createElement("span",{key:e,className:"px-3 py-1 bg-gray-100 rounded-full text-gray-700"},e)))))}))),o.createElement("br",null),o.createElement("h2",{className:"text-[30px] font-bold"},"🛠️ 트러블 슈팅"),o.createElement("div",{className:"m-5 space-y-4"},t.challenges.map(((e,t)=>o.createElement("div",{key:t,className:"flex flex-col gap-2"},o.createElement("h3",{className:"text-xl font-semibold underline"},e.solutionSummary),o.createElement("p",{className:"text-gray-700"},e.problem),o.createElement("p",{className:"text-gray-700"},e.solution))))),o.createElement("br",null),o.createElement("h2",{className:"text-[30px] font-bold"},"🎯 성과"),o.createElement("div",{className:"m-5 space-y-4"},t.achievement.map(((e,t)=>o.createElement("div",{key:t,className:"flex flex-col gap-2"},o.createElement("div",{className:"flex gap-2"},o.createElement("span",{className:"text-gray-700"},"•"),o.createElement("p",{className:"text-gray-700"},e)))))),o.createElement("br",null)))}const R={overlay:{backgroundColor:"rgba(0, 0, 0, 0.9)",zIndex:50,display:"flex",alignItems:"center",justifyContent:"center"},content:{position:"absolute",inset:0,border:"none",background:"transparent",overflow:"hidden",padding:0,width:"100vw",height:"100vh"}};function k(e){let{images:t}=e;const{0:n,1:a}=(0,o.useState)(null);return o.createElement("div",{className:"w-[80%]"},o.createElement("h2",{className:"text-[30px] font-bold"},"💻 결과물 사진"),o.createElement("div",{className:"m-5"},o.createElement("div",{className:"grid grid-cols-2 gap-4"},t.map(((e,t)=>o.createElement("div",{key:t,className:"flex flex-col items-center gap-2"},o.createElement("div",{className:"w-full h-[300px] flex items-center justify-center rounded-lg overflow-hidden cursor-pointer hover:bg-gray-100 transition-colors",onClick:()=>a(e)},o.createElement("img",{src:e.url,alt:e.caption,className:"w-full h-full object-contain"})),o.createElement("p",{className:"text-gray-700 text-center"},e.caption)))))),o.createElement(x(),{isOpen:null!==n,onRequestClose:()=>a(null),style:R,contentLabel:"Image Modal"},o.createElement("div",{className:"w-full h-full flex items-center justify-center cursor-pointer",onClick:()=>a(null)},o.createElement("img",{src:null==n?void 0:n.url,alt:null==n?void 0:n.caption,className:"max-w-[95vw] max-h-[95vh] object-contain"}))))}function T(e){let{projectId:t,onClose:n}=e;const a=g.find((e=>e.id===t));return a?o.createElement("div",{className:"w-[80dvw] h-[80dvh] max-w-[1200px] flex flex-col items-center"},o.createElement(M,{overview:a.overview,onClose:n}),o.createElement(j,{description:a.description}),o.createElement(k,{images:a.images})):o.createElement("div",null,"찾을 수 없습니다.")}var A=n(4810),P=n(2532);function F(){const{setProjectType:e,getButtonStyle:t,filteredProjects:n,gridHeight:i}=C(),{0:c,1:u}=(0,o.useState)(!1),{0:d,1:f}=(0,o.useState)(1);function p(){u(!1)}const m=(0,A.GR)("3617527643");console.log("Query result:",m),console.log("Project images:",n.map((e=>e.img)));const h=(0,o.useMemo)((()=>m.allFile.nodes.reduce(((e,t)=>{var n;return null!==(n=t.childImageSharp)&&void 0!==n&&n.gatsbyImageData&&(e[t.relativePath]=(0,P.c)(t)),e}),{})),[m]);return o.createElement(o.Fragment,null,o.createElement(x(),{isOpen:c,onRequestClose:p,style:{content:{top:"50%",left:"50%",right:"auto",bottom:"auto",marginRight:"-50%",transform:"translate(-50%, -50%)"}}},o.createElement(T,{projectId:d,onClose:p})),o.createElement("div",{className:"container mx-auto px-4 py-8"},o.createElement("div",{className:"flex flex-col lg:flex-row gap-8"},o.createElement("div",{className:"w-full lg:w-64 bg-white rounded-lg shadow-md p-4 h-fit"},o.createElement("div",{className:"space-y-2"},o.createElement("button",{className:t("all"),onClick:()=>e("all")},"All"),o.createElement("button",{className:t("team"),onClick:()=>e("team")},"Team"),o.createElement("button",{className:t("personal"),onClick:()=>e("personal")},"Personal"))),o.createElement("div",{className:"flex-1"},o.createElement("div",{className:"grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 justify-items-center",style:{minHeight:`${i}px`}},o.createElement(a.N,{mode:"sync"},n.map((e=>o.createElement(l.P.div,{key:e.id,layout:!0,initial:{opacity:0,scale:.95},animate:{opacity:1,scale:1},exit:{opacity:0,scale:.95},transition:{opacity:{duration:.4,ease:"easeOut"},scale:{duration:.3,ease:"easeOut"},layout:{duration:.3}},className:"bg-white w-full max-w-[400px] rounded-lg cursor-pointer shadow-md hover:shadow-xl transition-shadow h-[400px]",whileHover:{scale:1.02,transition:{duration:.2}}},o.createElement("div",{className:"h-[200px] w-full rounded-t-lg overflow-hidden"},o.createElement(P.G,{image:h[e.img],alt:`${e.title} thumbnail`,className:"w-full h-full",loading:"eager",onLoad:()=>{console.log(`imageLoaded: ${e.title}`)}})),o.createElement("div",{className:"p-6 flex flex-col h-[200px] my-1 justify-between"},o.createElement("div",{className:"flex items-center gap-2"},o.createElement("h2",{className:"text-xl font-bold"},e.title),o.createElement("button",{type:"button",className:"flex items-center gap-1 px-2 text-sm border border-gray-700 rounded-[4px] hover:bg-gray-100 transition-colors",onClick:()=>{!async function(e){f(e),u(!0)}(e.id)}},o.createElement(s.lAD,null),"README")),o.createElement("p",{className:"mb-4"},e.description),o.createElement(r,{skills:e.skill})))))))))))}function L(){return o.createElement("div",{id:"Projects",className:"bg-blue-400 flex flex-col items-center"},o.createElement("h1",{className:"text-[50px] font-bold text-gray-700"},"PROJECTS"),o.createElement(F,null))}},1720:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.bodyOpenClassName=t.portalClassName=void 0;var o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},a=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),l=n(6540),r=m(l),s=m(n(961)),i=m(n(5556)),c=m(n(9090)),u=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}(n(4081)),d=n(834),f=m(d),p=n(6566);function m(e){return e&&e.__esModule?e:{default:e}}function h(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}var v=t.portalClassName="ReactModalPortal",b=t.bodyOpenClassName="ReactModal__Body--open",y=d.canUseDOM&&void 0!==s.default.createPortal,g=function(e){return document.createElement(e)},E=function(){return y?s.default.createPortal:s.default.unstable_renderSubtreeIntoContainer};function O(e){return e()}var C=function(e){function t(){var e,n,a;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var l=arguments.length,i=Array(l),u=0;u<l;u++)i[u]=arguments[u];return n=a=h(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(i))),a.removePortal=function(){!y&&s.default.unmountComponentAtNode(a.node);var e=O(a.props.parentSelector);e&&e.contains(a.node)?e.removeChild(a.node):console.warn('React-Modal: "parentSelector" prop did not returned any DOM element. Make sure that the parent element is unmounted to avoid any memory leaks.')},a.portalRef=function(e){a.portal=e},a.renderPortal=function(e){var n=E()(a,r.default.createElement(c.default,o({defaultStyles:t.defaultStyles},e)),a.node);a.portalRef(n)},h(a,n)}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),a(t,[{key:"componentDidMount",value:function(){d.canUseDOM&&(y||(this.node=g("div")),this.node.className=this.props.portalClassName,O(this.props.parentSelector).appendChild(this.node),!y&&this.renderPortal(this.props))}},{key:"getSnapshotBeforeUpdate",value:function(e){return{prevParent:O(e.parentSelector),nextParent:O(this.props.parentSelector)}}},{key:"componentDidUpdate",value:function(e,t,n){if(d.canUseDOM){var o=this.props,a=o.isOpen,l=o.portalClassName;e.portalClassName!==l&&(this.node.className=l);var r=n.prevParent,s=n.nextParent;s!==r&&(r.removeChild(this.node),s.appendChild(this.node)),(e.isOpen||a)&&!y&&this.renderPortal(this.props)}}},{key:"componentWillUnmount",value:function(){if(d.canUseDOM&&this.node&&this.portal){var e=this.portal.state,t=Date.now(),n=e.isOpen&&this.props.closeTimeoutMS&&(e.closesAt||t+this.props.closeTimeoutMS);n?(e.beforeClose||this.portal.closeWithTimeout(),setTimeout(this.removePortal,n-t)):this.removePortal()}}},{key:"render",value:function(){return d.canUseDOM&&y?(!this.node&&y&&(this.node=g("div")),E()(r.default.createElement(c.default,o({ref:this.portalRef,defaultStyles:t.defaultStyles},this.props)),this.node)):null}}],[{key:"setAppElement",value:function(e){u.setElement(e)}}]),t}(l.Component);C.propTypes={isOpen:i.default.bool.isRequired,style:i.default.shape({content:i.default.object,overlay:i.default.object}),portalClassName:i.default.string,bodyOpenClassName:i.default.string,htmlOpenClassName:i.default.string,className:i.default.oneOfType([i.default.string,i.default.shape({base:i.default.string.isRequired,afterOpen:i.default.string.isRequired,beforeClose:i.default.string.isRequired})]),overlayClassName:i.default.oneOfType([i.default.string,i.default.shape({base:i.default.string.isRequired,afterOpen:i.default.string.isRequired,beforeClose:i.default.string.isRequired})]),appElement:i.default.oneOfType([i.default.instanceOf(f.default),i.default.instanceOf(d.SafeHTMLCollection),i.default.instanceOf(d.SafeNodeList),i.default.arrayOf(i.default.instanceOf(f.default))]),onAfterOpen:i.default.func,onRequestClose:i.default.func,closeTimeoutMS:i.default.number,ariaHideApp:i.default.bool,shouldFocusAfterRender:i.default.bool,shouldCloseOnOverlayClick:i.default.bool,shouldReturnFocusAfterClose:i.default.bool,preventScroll:i.default.bool,parentSelector:i.default.func,aria:i.default.object,data:i.default.object,role:i.default.string,contentLabel:i.default.string,shouldCloseOnEsc:i.default.bool,overlayRef:i.default.func,contentRef:i.default.func,id:i.default.string,overlayElement:i.default.func,contentElement:i.default.func},C.defaultProps={isOpen:!1,portalClassName:v,bodyOpenClassName:b,role:"dialog",ariaHideApp:!0,closeTimeoutMS:0,shouldFocusAfterRender:!0,shouldCloseOnEsc:!0,shouldCloseOnOverlayClick:!0,shouldReturnFocusAfterClose:!0,preventScroll:!1,parentSelector:function(){return document.body},overlayElement:function(e,t){return r.default.createElement("div",e,t)},contentElement:function(e,t){return r.default.createElement("div",e,t)}},C.defaultStyles={overlay:{position:"fixed",top:0,left:0,right:0,bottom:0,backgroundColor:"rgba(255, 255, 255, 0.75)"},content:{position:"absolute",top:"40px",left:"40px",right:"40px",bottom:"40px",border:"1px solid #ccc",background:"#fff",overflow:"auto",WebkitOverflowScrolling:"touch",borderRadius:"4px",outline:"none",padding:"20px"}},(0,p.polyfill)(C),t.default=C},9090:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},l=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),r=n(6540),s=v(n(5556)),i=h(n(7791)),c=v(n(7067)),u=h(n(4081)),d=h(n(4838)),f=n(834),p=v(f),m=v(n(9628));function h(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}function v(e){return e&&e.__esModule?e:{default:e}}n(7727);var b={overlay:"ReactModal__Overlay",content:"ReactModal__Content"},y=0,g=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.setOverlayRef=function(e){n.overlay=e,n.props.overlayRef&&n.props.overlayRef(e)},n.setContentRef=function(e){n.content=e,n.props.contentRef&&n.props.contentRef(e)},n.afterClose=function(){var e=n.props,t=e.appElement,o=e.ariaHideApp,a=e.htmlOpenClassName,l=e.bodyOpenClassName,r=e.parentSelector,s=r&&r().ownerDocument||document;l&&d.remove(s.body,l),a&&d.remove(s.getElementsByTagName("html")[0],a),o&&y>0&&0===(y-=1)&&u.show(t),n.props.shouldFocusAfterRender&&(n.props.shouldReturnFocusAfterClose?(i.returnFocus(n.props.preventScroll),i.teardownScopedFocus()):i.popWithoutFocus()),n.props.onAfterClose&&n.props.onAfterClose(),m.default.deregister(n)},n.open=function(){n.beforeOpen(),n.state.afterOpen&&n.state.beforeClose?(clearTimeout(n.closeTimer),n.setState({beforeClose:!1})):(n.props.shouldFocusAfterRender&&(i.setupScopedFocus(n.node),i.markForFocusLater()),n.setState({isOpen:!0},(function(){n.openAnimationFrame=requestAnimationFrame((function(){n.setState({afterOpen:!0}),n.props.isOpen&&n.props.onAfterOpen&&n.props.onAfterOpen({overlayEl:n.overlay,contentEl:n.content})}))})))},n.close=function(){n.props.closeTimeoutMS>0?n.closeWithTimeout():n.closeWithoutTimeout()},n.focusContent=function(){return n.content&&!n.contentHasFocus()&&n.content.focus({preventScroll:!0})},n.closeWithTimeout=function(){var e=Date.now()+n.props.closeTimeoutMS;n.setState({beforeClose:!0,closesAt:e},(function(){n.closeTimer=setTimeout(n.closeWithoutTimeout,n.state.closesAt-Date.now())}))},n.closeWithoutTimeout=function(){n.setState({beforeClose:!1,isOpen:!1,afterOpen:!1,closesAt:null},n.afterClose)},n.handleKeyDown=function(e){(function(e){return"Tab"===e.code||9===e.keyCode})(e)&&(0,c.default)(n.content,e),n.props.shouldCloseOnEsc&&function(e){return"Escape"===e.code||27===e.keyCode}(e)&&(e.stopPropagation(),n.requestClose(e))},n.handleOverlayOnClick=function(e){null===n.shouldClose&&(n.shouldClose=!0),n.shouldClose&&n.props.shouldCloseOnOverlayClick&&(n.ownerHandlesClose()?n.requestClose(e):n.focusContent()),n.shouldClose=null},n.handleContentOnMouseUp=function(){n.shouldClose=!1},n.handleOverlayOnMouseDown=function(e){n.props.shouldCloseOnOverlayClick||e.target!=n.overlay||e.preventDefault()},n.handleContentOnClick=function(){n.shouldClose=!1},n.handleContentOnMouseDown=function(){n.shouldClose=!1},n.requestClose=function(e){return n.ownerHandlesClose()&&n.props.onRequestClose(e)},n.ownerHandlesClose=function(){return n.props.onRequestClose},n.shouldBeClosed=function(){return!n.state.isOpen&&!n.state.beforeClose},n.contentHasFocus=function(){return document.activeElement===n.content||n.content.contains(document.activeElement)},n.buildClassName=function(e,t){var o="object"===(void 0===t?"undefined":a(t))?t:{base:b[e],afterOpen:b[e]+"--after-open",beforeClose:b[e]+"--before-close"},l=o.base;return n.state.afterOpen&&(l=l+" "+o.afterOpen),n.state.beforeClose&&(l=l+" "+o.beforeClose),"string"==typeof t&&t?l+" "+t:l},n.attributesFromObject=function(e,t){return Object.keys(t).reduce((function(n,o){return n[e+"-"+o]=t[o],n}),{})},n.state={afterOpen:!1,beforeClose:!1},n.shouldClose=null,n.moveFromContentToOverlay=null,n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),l(t,[{key:"componentDidMount",value:function(){this.props.isOpen&&this.open()}},{key:"componentDidUpdate",value:function(e,t){this.props.isOpen&&!e.isOpen?this.open():!this.props.isOpen&&e.isOpen&&this.close(),this.props.shouldFocusAfterRender&&this.state.isOpen&&!t.isOpen&&this.focusContent()}},{key:"componentWillUnmount",value:function(){this.state.isOpen&&this.afterClose(),clearTimeout(this.closeTimer),cancelAnimationFrame(this.openAnimationFrame)}},{key:"beforeOpen",value:function(){var e=this.props,t=e.appElement,n=e.ariaHideApp,o=e.htmlOpenClassName,a=e.bodyOpenClassName,l=e.parentSelector,r=l&&l().ownerDocument||document;a&&d.add(r.body,a),o&&d.add(r.getElementsByTagName("html")[0],o),n&&(y+=1,u.hide(t)),m.default.register(this)}},{key:"render",value:function(){var e=this.props,t=e.id,n=e.className,a=e.overlayClassName,l=e.defaultStyles,r=e.children,s=n?{}:l.content,i=a?{}:l.overlay;if(this.shouldBeClosed())return null;var c={ref:this.setOverlayRef,className:this.buildClassName("overlay",a),style:o({},i,this.props.style.overlay),onClick:this.handleOverlayOnClick,onMouseDown:this.handleOverlayOnMouseDown},u=o({id:t,ref:this.setContentRef,style:o({},s,this.props.style.content),className:this.buildClassName("content",n),tabIndex:"-1",onKeyDown:this.handleKeyDown,onMouseDown:this.handleContentOnMouseDown,onMouseUp:this.handleContentOnMouseUp,onClick:this.handleContentOnClick,role:this.props.role,"aria-label":this.props.contentLabel},this.attributesFromObject("aria",o({modal:!0},this.props.aria)),this.attributesFromObject("data",this.props.data||{}),{"data-testid":this.props.testId}),d=this.props.contentElement(u,r);return this.props.overlayElement(c,d)}}]),t}(r.Component);g.defaultProps={style:{overlay:{},content:{}},defaultStyles:{}},g.propTypes={isOpen:s.default.bool.isRequired,defaultStyles:s.default.shape({content:s.default.object,overlay:s.default.object}),style:s.default.shape({content:s.default.object,overlay:s.default.object}),className:s.default.oneOfType([s.default.string,s.default.object]),overlayClassName:s.default.oneOfType([s.default.string,s.default.object]),parentSelector:s.default.func,bodyOpenClassName:s.default.string,htmlOpenClassName:s.default.string,ariaHideApp:s.default.bool,appElement:s.default.oneOfType([s.default.instanceOf(p.default),s.default.instanceOf(f.SafeHTMLCollection),s.default.instanceOf(f.SafeNodeList),s.default.arrayOf(s.default.instanceOf(p.default))]),onAfterOpen:s.default.func,onAfterClose:s.default.func,onRequestClose:s.default.func,closeTimeoutMS:s.default.number,shouldFocusAfterRender:s.default.bool,shouldCloseOnOverlayClick:s.default.bool,shouldReturnFocusAfterClose:s.default.bool,preventScroll:s.default.bool,role:s.default.string,contentLabel:s.default.string,aria:s.default.object,data:s.default.object,children:s.default.node,shouldCloseOnEsc:s.default.bool,overlayRef:s.default.func,contentRef:s.default.func,id:s.default.string,overlayElement:s.default.func,contentElement:s.default.func,testId:s.default.string},t.default=g,e.exports=t.default},4081:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.resetState=function(){s&&(s.removeAttribute?s.removeAttribute("aria-hidden"):null!=s.length?s.forEach((function(e){return e.removeAttribute("aria-hidden")})):document.querySelectorAll(s).forEach((function(e){return e.removeAttribute("aria-hidden")})));s=null},t.log=function(){0},t.assertNodeList=i,t.setElement=function(e){var t=e;if("string"==typeof t&&r.canUseDOM){var n=document.querySelectorAll(t);i(n,t),t=n}return s=t||s},t.validateElement=c,t.hide=function(e){var t=!0,n=!1,o=void 0;try{for(var a,l=c(e)[Symbol.iterator]();!(t=(a=l.next()).done);t=!0){a.value.setAttribute("aria-hidden","true")}}catch(r){n=!0,o=r}finally{try{!t&&l.return&&l.return()}finally{if(n)throw o}}},t.show=function(e){var t=!0,n=!1,o=void 0;try{for(var a,l=c(e)[Symbol.iterator]();!(t=(a=l.next()).done);t=!0){a.value.removeAttribute("aria-hidden")}}catch(r){n=!0,o=r}finally{try{!t&&l.return&&l.return()}finally{if(n)throw o}}},t.documentNotReadyOrSSRTesting=function(){s=null};var o,a=n(9771),l=(o=a)&&o.__esModule?o:{default:o},r=n(834);var s=null;function i(e,t){if(!e||!e.length)throw new Error("react-modal: No elements were found for selector "+t+".")}function c(e){var t=e||s;return t?Array.isArray(t)||t instanceof HTMLCollection||t instanceof NodeList?t:[t]:((0,l.default)(!1,["react-modal: App element is not defined.","Please use `Modal.setAppElement(el)` or set `appElement={el}`.","This is needed so screen readers don't see main content","when modal is opened. It is not recommended, but you can opt-out","by setting `ariaHideApp={false}`."].join(" ")),[])}},7727:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.resetState=function(){for(var e=[r,s],t=0;t<e.length;t++){var n=e[t];n&&(n.parentNode&&n.parentNode.removeChild(n))}r=s=null,i=[]},t.log=function(){console.log("bodyTrap ----------"),console.log(i.length);for(var e=[r,s],t=0;t<e.length;t++){var n=e[t]||{};console.log(n.nodeName,n.className,n.id)}console.log("edn bodyTrap ----------")};var o,a=n(9628),l=(o=a)&&o.__esModule?o:{default:o};var r=void 0,s=void 0,i=[];function c(){0!==i.length&&i[i.length-1].focusContent()}l.default.subscribe((function(e,t){r||s||((r=document.createElement("div")).setAttribute("data-react-modal-body-trap",""),r.style.position="absolute",r.style.opacity="0",r.setAttribute("tabindex","0"),r.addEventListener("focus",c),(s=r.cloneNode()).addEventListener("focus",c)),(i=t).length>0?(document.body.firstChild!==r&&document.body.insertBefore(r,document.body.firstChild),document.body.lastChild!==s&&document.body.appendChild(s)):(r.parentElement&&r.parentElement.removeChild(r),s.parentElement&&s.parentElement.removeChild(s))}))},4838:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.resetState=function(){var e=document.getElementsByTagName("html")[0];for(var t in n)a(e,n[t]);var l=document.body;for(var r in o)a(l,o[r]);n={},o={}},t.log=function(){0};var n={},o={};function a(e,t){e.classList.remove(t)}t.add=function(e,t){return a=e.classList,l="html"==e.nodeName.toLowerCase()?n:o,void t.split(" ").forEach((function(e){!function(e,t){e[t]||(e[t]=0),e[t]+=1}(l,e),a.add(e)}));var a,l},t.remove=function(e,t){return a=e.classList,l="html"==e.nodeName.toLowerCase()?n:o,void t.split(" ").forEach((function(e){!function(e,t){e[t]&&(e[t]-=1)}(l,e),0===l[e]&&a.remove(e)}));var a,l}},7791:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.resetState=function(){r=[]},t.log=function(){0},t.handleBlur=c,t.handleFocus=u,t.markForFocusLater=function(){r.push(document.activeElement)},t.returnFocus=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=null;try{return void(0!==r.length&&(t=r.pop()).focus({preventScroll:e}))}catch(n){console.warn(["You tried to return focus to",t,"but it is not in the DOM anymore"].join(" "))}},t.popWithoutFocus=function(){r.length>0&&r.pop()},t.setupScopedFocus=function(e){s=e,window.addEventListener?(window.addEventListener("blur",c,!1),document.addEventListener("focus",u,!0)):(window.attachEvent("onBlur",c),document.attachEvent("onFocus",u))},t.teardownScopedFocus=function(){s=null,window.addEventListener?(window.removeEventListener("blur",c),document.removeEventListener("focus",u)):(window.detachEvent("onBlur",c),document.detachEvent("onFocus",u))};var o,a=n(2411),l=(o=a)&&o.__esModule?o:{default:o};var r=[],s=null,i=!1;function c(){i=!0}function u(){if(i){if(i=!1,!s)return;setTimeout((function(){s.contains(document.activeElement)||((0,l.default)(s)[0]||s).focus()}),0)}}},9628:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.log=function(){console.log("portalOpenInstances ----------"),console.log(o.openInstances.length),o.openInstances.forEach((function(e){return console.log(e)})),console.log("end portalOpenInstances ----------")},t.resetState=function(){o=new n};var n=function e(){var t=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.register=function(e){-1===t.openInstances.indexOf(e)&&(t.openInstances.push(e),t.emit("register"))},this.deregister=function(e){var n=t.openInstances.indexOf(e);-1!==n&&(t.openInstances.splice(n,1),t.emit("deregister"))},this.subscribe=function(e){t.subscribers.push(e)},this.emit=function(e){t.subscribers.forEach((function(n){return n(e,t.openInstances.slice())}))},this.openInstances=[],this.subscribers=[]},o=new n;t.default=o},834:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.canUseDOM=t.SafeNodeList=t.SafeHTMLCollection=void 0;var o,a=n(411);var l=((o=a)&&o.__esModule?o:{default:o}).default,r=l.canUseDOM?window.HTMLElement:{};t.SafeHTMLCollection=l.canUseDOM?window.HTMLCollection:{},t.SafeNodeList=l.canUseDOM?window.NodeList:{},t.canUseDOM=l.canUseDOM;t.default=r},7067:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){var n=(0,l.default)(e);if(!n.length)return void t.preventDefault();var o=void 0,a=t.shiftKey,s=n[0],i=n[n.length-1],c=r();if(e===c){if(!a)return;o=i}i!==c||a||(o=s);s===c&&a&&(o=i);if(o)return t.preventDefault(),void o.focus();var u=/(\bChrome\b|\bSafari\b)\//.exec(navigator.userAgent);if(null==u||"Chrome"==u[1]||null!=/\biPod\b|\biPad\b/g.exec(navigator.userAgent))return;var d=n.indexOf(c);d>-1&&(d+=a?-1:1);if(void 0===(o=n[d]))return t.preventDefault(),void(o=a?i:s).focus();t.preventDefault(),o.focus()};var o,a=n(2411),l=(o=a)&&o.__esModule?o:{default:o};function r(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:document;return e.activeElement.shadowRoot?r(e.activeElement.shadowRoot):e.activeElement}e.exports=t.default},2411:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function e(t){var n=[].slice.call(t.querySelectorAll("*"),0).reduce((function(t,n){return t.concat(n.shadowRoot?e(n.shadowRoot):[n])}),[]);return n.filter(s)};var n="none",o="contents",a=/^(input|select|textarea|button|object|iframe)$/;function l(e){var t=e.offsetWidth<=0&&e.offsetHeight<=0;if(t&&!e.innerHTML)return!0;try{var a=window.getComputedStyle(e),l=a.getPropertyValue("display");return t?l!==o&&function(e,t){return"visible"!==t.getPropertyValue("overflow")||e.scrollWidth<=0&&e.scrollHeight<=0}(e,a):l===n}catch(r){return console.warn("Failed to inspect element style"),!1}}function r(e,t){var n=e.nodeName.toLowerCase();return(a.test(n)&&!e.disabled||"a"===n&&e.href||t)&&function(e){for(var t=e,n=e.getRootNode&&e.getRootNode();t&&t!==document.body;){if(n&&t===n&&(t=n.host.parentNode),l(t))return!1;t=t.parentNode}return!0}(e)}function s(e){var t=e.getAttribute("tabindex");null===t&&(t=void 0);var n=isNaN(t);return(n||t>=0)&&r(e,!n)}e.exports=t.default},312:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o,a=n(1720),l=(o=a)&&o.__esModule?o:{default:o};t.default=l.default,e.exports=t.default},9771:function(e){"use strict";var t=function(){};e.exports=t}}]);
//# sourceMappingURL=d30d3a9678187c6f22bd461356bb8d8e0d2f4f86-dda19ffb2b8c51e37ca9.js.map