import Frontend from "../../widgets/skills/Frontend.tsx";
import Backend from "../../widgets/skills/Backend.tsx";
import TestFramework from "../../widgets/skills/TestFramework.tsx";
import Language from "../../widgets/skills/Language.tsx";

export default function renderSkillComponent(nowActive : string) {
  switch (nowActive) {
    case 'Frontend':
      return <Frontend />;
    case 'Backend':
      return <Backend />;
    case 'Testing':
      return <TestFramework />;
    case 'Language':
      return <Language />;
  }
};