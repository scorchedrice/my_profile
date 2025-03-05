import {motion} from "framer-motion"
import {introStyle} from "../shared/styles/introStyles.ts";
import {MainComment} from "../widgets/intro/IntroComment.tsx";
import IntroComments from "../widgets/intro/IntroComments.tsx";
import IntroDoubleArrowDown from "../widgets/intro/IntroDoubleArrowDown.tsx";
import IntroBackground from "../widgets/intro/IntroBackground.tsx";

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

