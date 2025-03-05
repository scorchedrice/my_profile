import {motion} from "framer-motion"
import {introStyle} from "../shared/styles/introStyles.ts";
import {MainComment} from "../shared/ui/IntroComments.tsx";
import IntroComments from "../widgets/intro/IntroComments.tsx";
import IntroDoubleArrowDown from "../shared/ui/IntroDoubleArrowDown.tsx";
import IntroBackground from "../shared/ui/IntroBackground.tsx";

export default function IntroPage() {
  return (
    <section
      className={introStyle.section}
      id="Intro"
    >
      <div
        className={introStyle.viewport}
      >
        <IntroBackground/>
        <motion.div className={introStyle.commentWrapper}>
          <MainComment/>
          <IntroComments/>
          <IntroDoubleArrowDown/>
        </motion.div>
      </div>
    </section>
  );
}

