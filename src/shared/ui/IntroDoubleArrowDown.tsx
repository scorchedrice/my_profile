import {motion} from "framer-motion";
import {scrollTextAnimation} from "../../feature/animations/introScrollAnimation.ts";
import {MdKeyboardDoubleArrowDown} from "react-icons/md";

export default function IntroDoubleArrowDown() {
  return (
    <motion.div
      animate={scrollTextAnimation}
      className="absolute bottom-10 text-[50px] text-purple-900"
    >
      <MdKeyboardDoubleArrowDown/>
    </motion.div>
  )
}