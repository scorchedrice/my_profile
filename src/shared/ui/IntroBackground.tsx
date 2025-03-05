import {introStyle} from "../styles/introStyles.ts";
import {motion} from "framer-motion";
import useScrollAnimations from "../../feature/hooks/useScrollAnimations.ts";

export default function IntroBackground() {
  const { bgOpacity } = useScrollAnimations()
  return (
    <motion.div
      style={{ opacity: bgOpacity }}
      className={introStyle.background}
    />
  )
}