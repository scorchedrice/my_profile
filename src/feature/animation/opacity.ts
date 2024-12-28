import {useScroll, useTransform} from "framer-motion";

export default function useScrollAnimations() {
  const { scrollYProgress } = useScroll();
  return {
    text1Opacity : useTransform(scrollYProgress, [0, 0.1, 0.15], [1, 1, 0]),
    text2Opacity : useTransform(scrollYProgress, [0.15, 0.2, 0.25, 0.3], [0, 1, 1, 0]),
    text3Opacity : useTransform(scrollYProgress, [0.3, 0.35, 0.4, 0.45], [0, 1, 1, 0]),
    bgOpacity : useTransform(scrollYProgress, [0, 0.9, 1], [1, 1, 0]),
  }
}