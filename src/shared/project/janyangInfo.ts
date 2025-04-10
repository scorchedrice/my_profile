import JanyangMain from "../../assets/projects/janyang/janyang_main.png";
import JanyangCreateAlarm from "../../assets/projects/janyang/janyang_create_alarm.png";
import JanyangEnterMission from "../../assets/projects/janyang/janyang_enter_mission.png";
import JanyangMission from "../../assets/projects/janyang/janyang_mission.png";
import JanyangChangeMission from "../../assets/projects/janyang/janyang_change_mission.png";
import JanyangSoloMission from "../../assets/projects/janyang/janyang_solo_mission.png";

export const janyangInfo = {
  id: 4,
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
        problem: "프로젝트 초기 ReactNative의 Expo로 개발을 시작했으나 빌드가 강제되는 이슈가 있었습니다.",
        solution: "React 사용자에게 친화적인 ReactNative 이지만 원활한 개발환경 구축을 위해선 프레임워크를 변경할 필요가 있었습니다. 알람앱 특성상 FCM을 활용한 푸시 알람 테스트가 중요했는데, Expo 환경에서는 이를 확인하기 위해선 apk 빌드가 강제되었습니다. 이를 해결하기 위해 Flutter로 체제를 전환했으나 Dart 언어 기반으로 동작하는 특성상 팀원들의 추가 학습이 필요한 상황이었습니다. 이에 효율적인 개발 진행을 위해 팀을 두 트랙으로 나누어 운영했습니다. OpenVidu 기반 실시간 화상통신 구현팀은 React로 개발을 진행하고 이를 웹뷰로 통합하는 방식을 채택했으며, UI/UX 담당 팀원들은 Flutter 학습 후 순차적으로 개발에 참여하는 전략을 수립했습니다. 저는 Flutter 개발을 담당하여 앱의 주요 UI/UX 구현을 맡았습니다.",
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
      url: JanyangCreateAlarm,
      caption: "메인 화면 및 알람 생성"
    },
    {
      url: JanyangEnterMission,
      caption: "미션 알람 미션방 진입"
    },
    {
      url: JanyangMission,
      caption: "미션 수행",
    },
    {
      url: JanyangChangeMission,
      caption: "미션 변경",
    },
    {
      url: JanyangSoloMission,
      caption: "AI를 활용한 단독 미션",
    }
  ]
}