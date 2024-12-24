// import Frontend from "../../widgets/skills/Frontend.tsx";
import Backend from "../../widgets/skills/Backend.tsx";
import TestFramework from "../../widgets/skills/TestFramework.tsx";
import Language from "../../widgets/skills/Language.tsx";
import Skill from "../../widgets/skills/Skill.tsx";
import { techStackData } from "../../assets/skills/techStack.ts"

export default function renderSkillComponent(nowActive : string) {
  switch (nowActive) {
    case 'Frontend':
      return <Skill skillList={techStackData.frontend} />;
    case 'Backend':
      return <Backend />;
    case 'Testing & Tools':
      return <TestFramework />;
    case 'Language':
      return <Language />;
  }
};