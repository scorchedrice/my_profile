import { motion } from "framer-motion"
import Profile from "../assets/profile.jpg";

export default function AboutMePage() {
  const profileVariants = {
    initial: { scale: 0.8, opacity: 0 },
    animate: {
      scale: 1,
      opacity: 1,
      transition: { duration: 0.5 }
    }
  }
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  }

  return (
    <motion.div className="h-[100%] bg-amber-500 flex flex-col md:flex-row items-center p-4" id="AboutMe">
      <div className="w-full md:w-1/2 flex justify-center items-center mb-8 md:mb-0">
        <motion.div
          className="w-40 h-40 rounded-full overflow-hidden"
          initial="initial"
          variants={profileVariants}
          whileInView="animate"
          viewport={{once: true}}
        >
          <img src={Profile} alt="profile" className="w-full h-full object-cover"/>
        </motion.div>
      </div>
      <motion.div
        className="w-full md:w-1/2"
        initial="initial"
        variants={fadeIn}
        whileInView="animate"
        viewport={{once: true}}
      >
        <motion.div className="m-8">
          <h1 className="font-bold text-gray-700 text-lg">이름</h1>
          <p>한지웅</p>
        </motion.div>
        <motion.div className="m-8">
          <h1 className="font-bold text-gray-700 text-lg">생년월일</h1>
          <p>1998.01.30</p>
        </motion.div>
        <motion.div className="m-8">
          <h1 className="font-bold text-gray-700 text-lg">연락처</h1>
          <p>wldnd2977@gmail.com</p>
        </motion.div>
      </motion.div>
    </motion.div>
  )
}