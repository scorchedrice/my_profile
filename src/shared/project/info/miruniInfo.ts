import miruniDiary from "../../../assets/project/miruni/miruniDiary.png"
import miruniMain from "../../../assets/project/miruni/miruniMain.png"
import miruniOCR from "../../../assets/project/miruni/miruniOCR.png"
import miruniStudy from "../../../assets/project/miruni/miruniStudy.png"
import miruniStudyStart from "../../../assets/project/miruni/miruniStudy_start.png"


export const miruniInfo = {
  id: 4,
  overview: {
    title: "미루니",
    period: "2024.11 - 2024.12",
    github: "",
    demo: "",
    teamMembers: 5,
    role: "팀 프로젝트, 프론트엔드",
    mainImg: miruniMain,
  },
  description: {
    summary: "학습 보조 데스크탑앱 서비스입니다.",
    motivation: "숏폼의 발달 등 다양한 이유로 집중하기 정말 어려운 지금, 집중환경을 조성하고 학습내용을 관리해주는 서비스가 있다면 좋지 않을까? 라는 생각에서 시작한 프로젝트입니다.",
    mainFeatures: [
      {
        title: "집중도 판별",
        content: "웹캠을 활용하여 집중도를 판별합니다. Python MediaPipe를 활용했습니다."
      },
      {
        title: "학습내용 정리",
        content: "언제 어떤 학습을 진행했는지 Github 잔디 형식으로 정보를 보여줍니다. 학습이 끝난 경우엔 OCR과 ChatGPT를 활용하여 정리된 내용을 보여줍니다."
      },
      {
        title: "함께하는 학습",
        content: "소속된 그룹원들과 함께 학습을 진행할 수 있습니다. 몇명이 학습을 진행중인지 확인할 수 있습니다."
      },
    ],
    techStack: {
      frontend: ["Electron", "React", "TypeScript"],
      tools: ["Git", "GitLab", "Figma"]
    },
    challenges: [
      {
        problem: "OCR정보를 Text로 전환하여 가지고 있다가 묶음 단위로 서버에 전송하는 방식으로 방법을 수정했습니다.",
        solution: "OCR 이미지를 계속 저장하고 있는 것, 매번 OCR 처리 요청을 보내는 것은 부담이였습니다.",
        solutionSummary: "효율적인 OCR 처리를 위해",
      },
      {
        problem: "Electron의 경우 main process에서 데이터 통신이 진행되어야합니다.",
        solution: "하지만 개발을 진행할 때 이를 고려하지 않고 개발을 진행했었습니다. 일반적인 웹 개발과 동일하게 개발을 진행하였기에 오류가 발생하였습니다. 이를 해결하기 위해 renderer process → main process → API 요청 → main process → renderer process의 순서로 IPC 통신을 활용한 API 요청 로직을 구현했습니다..",
        solutionSummary: "IPC 통신",
      }
    ],
    achievement: [
      "Electron이라는 새로운 프레임워크 관련 내용을 학습할 수 있었습니다.",
      "IPC 통신에 대해 알 수 있었습니다.",
      "React를 활용하더라도 사용하는 프레임워크에 따라 개발 방식이 많이 바뀔 수 있다는 것을 경험을 통해 깨달았습니다."
    ]
  },
  images: [
    {
      url: miruniMain,
      caption: "메인 화면"
    },
    {
      url: miruniOCR,
      caption: "OCR 처리 결과"
    },

    {
      url: miruniStudyStart,
      caption: "학습 시작"
    },
    {
      url: miruniStudy,
      caption: "학습"
    },
    {
      url: miruniDiary,
      caption: "학습 회고"
    },
  ]
}