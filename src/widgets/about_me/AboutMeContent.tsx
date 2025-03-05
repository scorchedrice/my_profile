import {motion} from "framer-motion";
import {profileTextVariant} from "../../feature/animations/profileAnimations.ts";
import {aboutMeStyles} from "../../shared/styles/aboutMeStyles.ts";
import CopyButton from "../archive/CopyMail.tsx";

export default function AboutMeContent() {
  return (
    <motion.div
      className="w-full md:w-1/2"
      initial="initial"
      variants={profileTextVariant}
      whileInView="animate"
      viewport={{once: true}}
    >
      <dl className="m-8">
        <dt className={aboutMeStyles.contentTitle}>이름</dt>
        <dd className="my-3">한지웅</dd>
      </dl>
      <dl className="m-8">
        <dt className={aboutMeStyles.contentTitle}>생년월일</dt>
        <dd className="my-3">1998.01.30</dd>
      </dl>
      <dl className="m-8">
        <dt className={aboutMeStyles.contentTitle}>연락처</dt>
        <dd className="flex my-3">
          <p>wldnd2977@gmail.com</p>
          <CopyButton/>
        </dd>
      </dl>
    </motion.div>
  )
}