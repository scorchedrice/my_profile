import Frontend from "../widgets/skills/Frontend.tsx";
import Language from "../widgets/skills/Language.tsx";
import Backend from "../widgets/skills/Backend.tsx";
import TestFramework from "../widgets/skills/TestFramework.tsx"

export default function TechStackPage() {
  return (
    <div>
      여기엔 기술 스택을 작성해요.
      <Language/>
      <Frontend/>
      <Backend/>
      <TestFramework/>
    </div>
  )
}