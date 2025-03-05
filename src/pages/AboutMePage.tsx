import { motion } from "framer-motion"
import {aboutMeStyles} from "../shared/styles/aboutMeStyles.ts";
import AboutMeContent from "../shared/ui/AboutMeContent.tsx";
import AboutMeProfile from "../shared/ui/AboutMeProfile.tsx";

export default function AboutMePage() {
  return (
    <>
      <section className={aboutMeStyles.section} id="AboutMe" aria-label="자기소개">
        <h1 className={aboutMeStyles.title}>ABOUT ME</h1>
        <div className={aboutMeStyles.contentWrapper}>
          <motion.div className={aboutMeStyles.content} role="region" aria-label="자기소개 에셋 영역">
            <AboutMeProfile/>
            <AboutMeContent/>
          </motion.div>
        </div>
      </section>
    </>
)
}