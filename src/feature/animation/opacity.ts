import {useScroll, useTransform} from "framer-motion";

const { scrollYProgress } = useScroll();
export const text1Opacity = useTransform(scrollYProgress, [0, 0.1, 0.15], [1, 1, 0]);
export const text2Opacity = useTransform(scrollYProgress, [0.15, 0.2, 0.25, 0.3], [0, 1, 1, 0]);
export const text3Opacity = useTransform(scrollYProgress, [0.3, 0.35, 0.4, 0.45], [0, 1, 1, 0]);
export const bgOpacity = useTransform(scrollYProgress, [0, 0.9, 1], [1, 1, 0]);