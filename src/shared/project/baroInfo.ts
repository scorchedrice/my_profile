import BaroMain from "../../assets/projects/barobaro/baro_main.png";
import BaroSign from "../../assets/projects/barobaro/baro_sign.png";
import BaroPost from "../../assets/projects/barobaro/baro_post.png";
import BaroDetail from "../../assets/projects/barobaro/baro_detail.png";
import BaroPin from "../../assets/projects/barobaro/baro_pin.png";
import BaroContract1 from "../../assets/projects/barobaro/baro_contract_1.png";
import BaroContract2 from "../../assets/projects/barobaro/baro_contract_2.png";
import BaroContract3 from "../../assets/projects/barobaro/baro_contract_3.png";
import BaroVerification from "../../assets/projects/barobaro/baro_verification.png";

export const baroInfo = {
  id: 3,
    overview: {
  title: "바로바로",
    period: "2024.09 - 2024.11",
    github: "",
    demo: "",
    teamMembers: 6,
    role: "팀 프로젝트, 프론트엔드",
    mainImg: BaroMain,
},
  description: {
    summary: "전자계약서 기반의 공연 물품 대여 중개 플랫폼입니다.",
      motivation: "기존 물품대여는 X.com, 번개장터 등에서 이루어 졌습니다. 하지만 이는 사기 위험성이 높았습니다. 전자계약서를 통해 안정성을 보장하는 서비스를 제공하고자 개발했습니다.",
      mainFeatures: [
      {
        title: "전자계약서",
        content: "사용자가 PIN을 입력하는 과정을 통해 부인방지를 구현했고 전자서명 기능을 구현했습니다."
      },
      {
        title: "실시간 계약 기능",
        content: "실시간 채팅을 구현하고, 대여인과 소유인이 순차적으로 계약 요청 및 계약서 작성이 가능하도록 기능을 구현했습니다."
      },
      {
        title: "계약서 유효성 판단",
        content: "계약서 작성 시 '바로바로'의 워터마크를 삽입합니다. 이를 활용하여 계약서의 진위를 판별할 수 있는 기능을 제공합니다."
      },
    ],
      techStack: {
      frontend: ["Next.js", "TypeScript", "Tailwind CSS", "Zustand", "Jest"],
        tools: ["Git", "GitLab", "Figma"]
    },
    challenges: [
      {
        problem: "프로젝트의 목적인 '법적 효력 보장을 통한 거래 안정성 강화'를 위해선 실제로 법적 효력이 있는 전자계약서 작성이 필요했습니다.",
        solution: "팀원들과 함께 조사를 진행하며 법적 효력이 있는 전자계약서 내용을 구성했습니다. 또한 유효한 거래를 위해 대여자가 거래를 요청하면 서명이 없는 pdf를 생성하고 해당 pdf파일에 순차적으로 PIN번호 입력(부인방지) 후 순차적으로 서명을 진행하는 로직을 구현하고 워터마크를 삽입하여 계약서 진위여부 판단에 활용할 수 있도록 기능을 구현했습니다.",
        solutionSummary: "실제로 법적 효력을 가지는 전자계약서를 작성하기 위해",
      }
    ],
      achievement: [
      "라우팅 아키텍처 설계, 검색 기능, 마이페이지 기능, pdf 유효성 판단 및 제공 기능을 개발했습니다. 이를 통해 Next.js의 아키텍처 및 활용법을 익혔습니다.",
      "Jest를 부분적으로 도입했습니다. 완전한 도입은 아니기에 아쉬움이 남지만, Jest 활용 방법을 익힐 수 있었습니다.",
      "법적 효력이 있는 전자계약서 구성을 위해 고민하는 과정을 통해 개발 외적인 부분에서도 학습할 수 있는 좋은 기회였습니다. 실제로 서비스를 개발할 때 고려해야하는 것이 무엇인지 그 어느때보다 진지하게 고민한 프로젝트입니다."
    ]
  },
  images: [
    {
      url: BaroMain,
      caption: "메인 화면"
    },
    {
      url: BaroSign,
      caption: "회원가입 과정"
    },

    {
      url: BaroPost,
      caption: "게시물 등록 과정"
    },
    {
      url: BaroDetail,
      caption: "게시물 상세 정보"
    },
    {
      url: BaroPin,
      caption: "핀번호 입력 창"
    },
    {
      url: BaroContract1,
      caption: "계약 요청"
    },
    {
      url: BaroContract2,
      caption: "소유자의 승인, 대여자측에게 확인 요청"
    },
    {
      url: BaroContract3,
      caption: "대여자의 계약 확인, 계약성사"
    },
    {
      url: BaroVerification,
      caption: "본인인증"
    }
  ]
}