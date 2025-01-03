// 포폴 페이지
import Portfolio from "../../../assets/project/portfolio/portfolio.png";

// 바로바로
import baroMain from "../../../assets/project/barobaro/baro_main.png";

// 자냥
import JanyangMain from "../../../assets/project/janyang/janyang_main.png";
import {baroInfo} from "../info/baroInfo.ts";
import {janyangInfo} from "../info/janyangInfo.ts";
import {portfolioInfo} from "../info/portfolioInfo.ts";

export const projects = [
  {
    id: 1,
    title: "포트폴리오",
    description: "현재 보고계시는 페이지입니다.",
    img: Portfolio,
    skill: ['React', 'TypeScript', 'Tailwind'],
    type: "personal"
  },
  {
    id: 2,
    title: "바로바로",
    description: "전자계약서 기반 물품 대여 플랫폼입니다.",
    img: baroMain,
    skill: ['Next.js', 'Zustand', 'TypeScript', 'Tailwind'],
    type: "team"
  },
  {
    id: 3,
    title: "자냥",
    description: "미션 참여형 알람앱입니다.",
    img: JanyangMain,
    skill: ['Flutter', 'Dart'],
    type: "team"
  },
];

export const projectsDetail = [
  portfolioInfo,
  baroInfo,
  janyangInfo,
]