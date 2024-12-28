import Portfolio from "../../../assets/project/portfolio/portfolio.png";
import baroMain from "../../../assets/project/barobaro/baro_main.png";
import JanyangMain from "../../../assets/project/janyang/janyang_main.png";

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
  {
    id: 1,
    overview: {
      title: "포트폴리오",
      period: "2024.12-진행중",
      github: "https://github.com/scorchedrice/my_profile",
      demo: "https://scorchedrice.github.io/my_profile",
      teamMembers: 1,
      role: "개인 프로젝트",
      mainImg: Portfolio,
    },
    description: {
      summary: "React와 TypeScript를 활용한 포트폴리오 웹사이트입니다.",
      motivation: "저만의 포트폴리오 사이트를 가지고 싶어 제작했습니다.",
      mainFeatures: [
        {
          title: "프로젝트 구조",
          content: "FSD구조를 채택했습니다."
        },
        {
          title: "인터렉션 작업",
          content: "framer-motion을 활용하여 애니메이션 기능을 추가했습니다."
        },
        {
          title: "프로젝트 필터링",
          content: "개인/팀 프로젝트를 구분하여 볼 수 있습니다, 추후 백엔드 프로젝트 경험이 생기면 기술 역할 별 필터링 기능도 추가할 예정입니다."
        },
      ],
      techStack: {
        frontend: ["React", "TypeScript", "Tailwind CSS", "Framer Motion"],
        deployment: ["Github Action"],
        tools: ["Git", "GitHub"]
      },
      challenges: [
        {
          problem: "프로젝트 필터링 기능으로 스크롤 길이가 계속 변화하는 이슈가 있었습니다.",
          solution: "모든 프로젝트가 표시될 때의 height를 계산하여 변화하지 않는 height를 가지도록 했습니다.",
          solutionSummary: "스크롤 사이즈를 예상하는 함수를 추가하여 불필요한 스크롤 길이 변화 이슈 해결",
        }
      ],
      achievement: [
        "framer-motion을 활용해 컴포넌트 단위로 애니메이션을 적용할 수 있었습니다. 간단한 조작으로 사용자 인터렉션을 제공할 수 있어 재미있는 경험이었습니다.",
        "React로 개발한 프로젝트를 Github Action을 활용하여 github pages로 배포하는 경험을 쌓았습니다."
      ]
    },
    images: [
      {
        url: Portfolio,
        caption: "메인 화면"
      }
    ]
  },
  {
    id: 2,
    overview: {
      title: "바로바로",
      period: "2024.12 - 현재 진행중",
      github: "https://github.com/scorchedrice/my_profile",
      demo: "https://scorchedrice.github.io/my_profile",
      teamMembers: 6,
      role: "팀 프로젝트, 프론트엔드",
      mainImg: baroMain,
    },
    description: {
      summary: "React와 TypeScript를 활용한 포트폴리오 웹사이트입니다.",
      motivation: "노션과 같은 템플릿 소스를 활용할 수 있지만, 저만의 포트폴리오 사이트를 가지고 싶어 제작했습니다.",
      mainFeatures: [
        {
          title: "프로젝트 구조",
          content: "FSD구조를 채택했습니다."
        },
        {
          title: "인터렉션 작업",
          content: "framer-motion을 활용하여 애니메이션 기능을 추가했습니다."
        },
        {
          title: "프로젝트 필터링",
          content: "개인/팀 프로젝트를 구분하여 볼 수 있습니다, 추후 백엔드 프로젝트 경험이 생기면 기술 역할 별 필터링 기능도 추가할 예정입니다."
        },
      ],
      techStack: {
        frontend: ["React", "TypeScript", "Tailwind CSS", "Framer Motion"],
        deployment: ["Github Action"],
        tools: ["Git", "GitHub"]
      },
      challenges: [
        {
          problem: "프로젝트 필터링 기능으로 스크롤 길이가 계속 변화하는 이슈가 있었습니다.",
          solution: "모든 프로젝트가 표시될 때의 height를 계산하여 변화하지 않는 height를 가지도록 했습니다.",
          solutionSummary: "스크롤 사이즈를 예상하는 함수를 추가하여 불필요한 스크롤 길이 변화 이슈 해결",
        }
      ],
      achievement: [
        "framer-motion을 활용한 반응형 웹 디자인 구현"
      ]
    },
    images: [
      {
        url: Portfolio,
        caption: "메인 화면"
      }
    ]
  },
  {
    id: 3,
    overview: {
      title: "자냥",
      period: "2024.12 - 현재 진행중",
      github: "https://github.com/scorchedrice/my_profile",
      demo: "https://scorchedrice.github.io/my_profile",
      teamMembers: 1,
      role: "개인 프로젝트",
      mainImg: JanyangMain,
    },
    description: {
      summary: "React와 TypeScript를 활용한 포트폴리오 웹사이트입니다.",
      motivation: "노션과 같은 템플릿 소스를 활용할 수 있지만, 저만의 포트폴리오 사이트를 가지고 싶어 제작했습니다.",
      mainFeatures: [
        {
          title: "프로젝트 구조",
          content: "FSD구조를 채택했습니다."
        },
        {
          title: "인터렉션 작업",
          content: "framer-motion을 활용하여 애니메이션 기능을 추가했습니다."
        },
        {
          title: "프로젝트 필터링",
          content: "개인/팀 프로젝트를 구분하여 볼 수 있습니다, 추후 백엔드 프로젝트 경험이 생기면 기술 역할 별 필터링 기능도 추가할 예정입니다."
        },
      ],
      techStack: {
        frontend: ["React", "TypeScript", "Tailwind CSS", "Framer Motion"],
        deployment: ["Github Action"],
        tools: ["Git", "GitHub"]
      },
      challenges: [
        {
          problem: "프로젝트 필터링 기능으로 스크롤 길이가 계속 변화하는 이슈가 있었습니다.",
          solution: "모든 프로젝트가 표시될 때의 height를 계산하여 변화하지 않는 height를 가지도록 했습니다.",
          solutionSummary: "스크롤 사이즈를 예상하는 함수를 추가하여 불필요한 스크롤 길이 변화 이슈 해결",
        }
      ],
      achievement: [
        "framer-motion을 활용한 반응형 웹 디자인 구현"
      ]
    },
    images: [
      {
        url: Portfolio,
        caption: "메인 화면"
      }
    ]
  },
]