import IntroPage from "../../pages/IntroPage.tsx";
import TechStackPage from "../../pages/TechStackPage.tsx";
import ProjectPage from "../../pages/ProjectPage.tsx";
import EtcPage from "../../pages/EtcPage.tsx";

// 사용할 SECTION들을 저장합니다.
export const SECTIONS = [
  { id: 'intro', component: IntroPage },
  { id: 'tech-stack', component: TechStackPage },
  { id: 'projects', component: ProjectPage },
  { id: 'etc', component: EtcPage }
]


