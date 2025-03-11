import EEUMLogo from "../../assets/projects/eeum/eeum_logo_bg_white.png"

export const eeumInfo = {
  id: 1,
  overview: {
    title: "EEUM COMPANY 홍보 페이지 (개발 진행중)",
    period: "2025.03-미완성",
    github: "",
    demo: "https://www.eeum.company",
    teamMembers: 2,
    role: "2인 프로젝트",
    mainImg: EEUMLogo,
  },
  description: {
    summary: "출장 서비스 스타트업 EEUM COMPANY의 홍보 페이지입니다.",
    motivation: "프리랜서로 로고제작, 웹 개발 및 운영을 담당하고 있습니다.",
    mainFeatures: [
      {
        title: "프로젝트 구조",
        content: "FSD구조를 채택했습니다."
      },
      {
        title: "eeum.company",
        content: "Vercel을 활용하여 배포를 진행했습니다."
      },
    ],
    techStack: {
      frontend: ["Next.js", "TypeScript", "Tailwind CSS"],
      deployment: ["Github Action", "Vercel"],
      tools: ["Git", "GitHub"]
    },
    challenges: [
      {
        problem: "Cloudflare worker 환경에서 NextJS 기능을 온전히 사용할 수 없었습니다.",
        solution: "Cloudflare는 빠른 속도를 가지고 비용이 저렴하다는 장점이 있지만 worker 환경에서는 비동기 로직이 global scope로 선언되는 것이 제한되기에 Dynamic Route, server component 로 구현하는 api 등의 next 기능 구현 복잡도가 높습니다. " +
          "또한 추가적인 Wrangler 설정이 필요합니다. 따라서 온전한 기능구현 및 유지보수성 개선을 목적으로 NextJS 친화적인 Vercel로 배포 플랫폼을 변경했습니다.",
        solutionSummary: "Cloudflare → Vercel",
      },
    ],
    achievement: [
      "Vercel을 활용하여 배포하는 경험을 통해 프론트엔드 배포 역량을 키웠습니다.",
      "프리랜서로 개발을 진행하며 브랜드 사이트 개발에 대한 경험을 쌓았습니다."
    ]
  },
  images: [
    {
      url: EEUMLogo,
      caption: "로고"
    }
  ]
}