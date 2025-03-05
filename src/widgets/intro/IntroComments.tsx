import {motion} from "framer-motion";
import {introStyle} from "../../shared/styles/introStyles.ts";
import {FirstComment, LastComment, SecondComment} from "./IntroComment.tsx";
import useScrollAnimations from "../../feature/hooks/useScrollAnimations.ts";

export default function IntroComments() {
  const { text1Opacity, text2Opacity, text3Opacity } = useScrollAnimations()
  return (
    <div className="relative h-32 w-full">
      <motion.div
        style={{opacity: text1Opacity}}
        className={introStyle.comment}
      >
        <FirstComment/>
      </motion.div>

      <motion.div
        style={{opacity: text2Opacity}}
        className={introStyle.comment}
      >
        <SecondComment/>
      </motion.div>

      <motion.div
        style={{opacity: text3Opacity}}
        className={introStyle.comment}
      >
        <LastComment/>
      </motion.div>
    </div>
  )
}