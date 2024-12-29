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
      period: "2024.09 - 2024.11",
      github: "",
      demo: "",
      teamMembers: 6,
      role: "팀 프로젝트, 프론트엔드",
      mainImg: baroMain,
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
        url: baroMain,
        caption: "메인 화면"
      }
    ]
  },
  {
    id: 3,
    overview: {
      title: "자냥",
      period: "2024.08 - 2024.09",
      github: "",
      demo: "",
      teamMembers: 6,
      role: "팀 프로젝트, 프론트엔드",
      mainImg: JanyangMain,
    },
    description: {
      summary: "친구들과 함께할 수 있는 미션 참여형 알람앱입니다.",
      motivation: "일어나기 힘든 아침시간, 즐겁게 일어날 수 있는 방법 없을까? 라는 고민에서 시작한 프로젝트입니다.",
      mainFeatures: [
        {
          title: "미션 수행",
          content: "알람이 울리면 해당 알람방에 속해있던 인원들은 미션을 수행할 수 있습니다. 미션방(화상회의방)에 입장하면 수행할 미션을 선택하고 친구들과 함께 미션을 수행할 수 있습니다. 미션 수행 여부는 투표를 통해 결정합니다."
        },
        {
          title: "1인 모드",
          content: "AI를 활용하여 혼자서도 미션을 수행할 수 있도록 기능을 구현했습니다. 해당하는 미션을 혼자 수행하고 AI에 판독을 요청하면 Base64로 해당 정보를 받은 ChatGPT가 이를 판별하고 결과를 반환하는 로직을 통해 이를 구현했습니다."
        },
        {
          title: "필터링 기능",
          content: "서로의 얼굴을 공유하는 것이 부담으로 느껴지는 사용자를 위해 얼굴을 필터링 할 수 있는 기능을 개발했습니다. 해당 기능을 켜면 얼굴이 캐릭터로 필터링됩니다."
        },
        {
          title: "알람 생성",
          content: "미션알람과 일반알람을 별개로 생성할 수 있도록 하였습니다. 미션 알람의 미션 수행시간과 다른 알람이 겹치는 것을 방지하기 위한 기능을 추가 구현했습니다."
        },
        {
          title: "다크모드 & 라이트모드",
          content: "접속 시간대에 따라 자동으로 적용되며 사용자가 직접 변경할 수 있습니다."
        },
        {
          title: "Lottie를 활용한 Animated Logo",
          content: "다크모드와 라이트모드에 따라 고양이 눈의 동공이 변화하도록 기능을 구현했습니다. 또한 무작위의 시간에 무작위의 방향으로 눈동자가 움직이는 기능을 추가하여 사용자가 즐겁게 앱을 사용할 수 있도록 기능을 개발했습니다."
        },
        {
          title: "미션 수행 정보 제공",
          content: "최근 7일/30일간 미션 수행정도, 미션방 별 미션 수행도 그래프 등의 정보를 제공합니다."
        },
      ],
      techStack: {
        frontend: ["Flutter", "Dart", "GetX"],
        tools: ["Git", "GitLab", "AndroidStudio", "Lottie", "Figma"]
      },
      challenges: [
        {
          problem: "프로젝트 초기 ReactNative의 Expo로 개발을 시작했으나 빌드 속도의 이슈가 있었습니다.",
          solution: "React 사용자에게 친화적인 ReactNative 이지만 원활한 개발환경 구축을 위해선 프레임워크를 변경할 필요가 있었습니다. Flutter로 체제를 전환했으나 Dart 언어 기반으로 동작하는 특성상 팀원들의 추가 학습이 필요한 상황이었습니다. 이에 효율적인 개발 진행을 위해 팀을 두 트랙으로 나누어 운영했습니다. OpenVidu 기반 실시간 화상통신 구현팀은 React로 개발을 진행하고 이를 웹뷰로 통합하는 방식을 채택했으며, UI/UX 담당 팀원들은 Flutter 학습 후 순차적으로 개발에 참여하는 전략을 수립했습니다. 저는 Flutter 개발을 담당하여 앱의 주요 UI/UX 구현을 맡았습니다.",
          solutionSummary: "원활한 개발 환경 구축을 위해",
        }
      ],
      achievement: [
        "Flutter라는 크로스 플랫폼 프레임워크를 활용한 네이티브 모바일 앱 개발 경험을 쌓았습니다.",
        "UI/UX를 구현하는 역할을 담당했으며 Dark & Light 모드, Animated Logo (Lottie), 튜토리얼모드, 미션 참여도 기반의 그래프 제공 기능을 개발했습니다. 사용자 경험을 높이기 위한 방법은 무엇이 있을까 고민하며 관련 역량을 키웠습니다.",
        "AI를 활용하여 더 높은 수준의 프로젝트를 완성할 수 있었다고 생각합니다. AI를 활용하여 1인 미션참여의 경우에도 미션 수행 장면을 분석하여 미션 성공 여부를 판별할 수 있도록 기능을 구현했습니다."
      ]
    },
    images: [
      {
        url: JanyangMain,
        caption: "메인 화면"
      }
    ]
  },
]