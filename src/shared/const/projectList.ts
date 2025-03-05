// 포폴
import {portfolioInfo} from "../project/info/portfolioInfo.ts";

// 바로바로
import {baroInfo} from "../project/info/baroInfo.ts";

// 자냥
import {janyangInfo} from "../project/info/janyangInfo.ts";

// 미루니
import {miruniInfo} from "../project/info/miruniInfo.ts";

export const projects = [
  {
    id: 1,
    title: "포트폴리오",
    description: "현재 보고계시는 페이지입니다.",
    skill: ['Gatsby', 'TypeScript', 'Tailwind'],
    type: "personal"
  },
  {
    id: 2,
    title: "바로바로",
    description: "전자계약서 기반 물품 대여 플랫폼입니다.",
    skill: ['Next.js', 'Zustand', 'TypeScript', 'Tailwind'],
    type: "team"
  },
  {
    id: 3,
    title: "자냥",
    description: "미션 참여형 알람앱입니다.",
    skill: ['Flutter', 'Dart'],
    type: "team"
  },
  {
    id: 4,
    title: "미루니",
    description: "학습보조 데스크탑 앱입니다.",
    skill: ['Electron', 'React', 'TypeScript'],
    type: "team"
  }
];

export const projectsDetail = [
  portfolioInfo,
  baroInfo,
  janyangInfo,
  miruniInfo,
]