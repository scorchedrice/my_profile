import { motion, AnimatePresence } from "framer-motion"
import Profile from "../assets/profile.jpg";
import { BsCopy } from "react-icons/bs";
import {useState} from "react";

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

  // 복사 함수
  const [showTooltip, setShowTooltip] = useState(false);
  const [mousePosition, setMousePosition] = useState({x:0, y:0});

  const copyMail = (e: React.MouseEvent) => {
    setMousePosition({ x: e.clientX, y: e.clientY });
    navigator.clipboard.writeText("wldnd2977@gmail.com");
    setShowTooltip(true);
    setTimeout(() => setShowTooltip(false), 1000);
  };

  return (
    <div className="h-[100%] bg-amber-500 flex flex-col" id="AboutMe">
      <div className="max-w-5xl mx-auto w-full">
        <h1 className="text-[50px] font-bold text-gray-700 text-center">ABOUT ME</h1>
        <motion.div className="flex flex-col md:flex-row items-center p-4">
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
              <div className="flex">
                <p>wldnd2977@gmail.com</p>
                <BsCopy className="cursor-pointer text-[8px]" onClick={(e : React.MouseEvent) => copyMail(e)} />
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
      <AnimatePresence>
        {showTooltip && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="fixed bg-gray-800 text-white px-2 py-1 rounded text-sm"
            style={{
              left: mousePosition.x + 10,
              top: mousePosition.y - 10,
              pointerEvents: 'none'
            }}
          >
            복사되었습니다!
          </motion.div>
        )}
      </AnimatePresence>
    </div>
)
}