import {motion} from "framer-motion";
import {aboutMeStyles} from "../../shared/styles/aboutMeStyles.ts";
import {profilePictureVariants} from "../../feature/animations/profileAnimations.ts";
import {StaticImage} from "gatsby-plugin-image";

export default function AboutMeProfile() {
  return (
    <div className={aboutMeStyles.profile}>
      <motion.div
        className={aboutMeStyles.profileImage}
        initial="initial"
        variants={profilePictureVariants}
        whileInView="animate"
        viewport={{once: true}}
        aria-label="애니메이션 동작 프로필사진"
      >
        <StaticImage
          src="../../assets/profile.jpg"
          alt="profile"
          className="w-full h-full object-cover"
        />
      </motion.div>
    </div>
  )
}