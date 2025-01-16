import * as React from 'react';
import { motion, AnimatePresence } from "framer-motion"
import Profile from "../assets/profile.jpg";
import { BsCopy } from "react-icons/bs";
import {profilePictureVariants, profileTextVariant} from "../feature/animation/variants.ts";
import useAboutMe from "../feature/hooks/useAboutMe.ts";

export default function AboutMePage() {
  const { showTooltip, mousePosition, copyMail } = useAboutMe()

  return (
    <div className="bg-amber-500 flex flex-col" id="AboutMe">
      <div className="max-w-5xl mx-auto w-full">
        <h1 className="text-[50px] font-bold text-gray-700 text-center">ABOUT ME</h1>
        <motion.div className="flex flex-col md:flex-row items-center p-4">
          <div className="w-full md:w-1/2 flex justify-center items-center mb-8 md:mb-0">
            <motion.div
              className="w-[250px] h-[250px] rounded-full overflow-hidden"
              initial="initial"
              variants={profilePictureVariants}
              whileInView="animate"
              viewport={{once: true}}
            >
              <img src={Profile} alt="profile" className="w-full h-full object-cover"/>
            </motion.div>
          </div>
          <motion.div
            className="w-full md:w-1/2"
            initial="initial"
            variants={profileTextVariant}
            whileInView="animate"
            viewport={{once: true}}
          >
            <motion.div className="m-8">
              <h1 className="font-bold text-gray-700 text-xl">이름</h1>
              <p className="my-3">한지웅</p>
            </motion.div>
            <motion.div className="m-8">
              <h1 className="font-bold text-gray-700 text-xl">생년월일</h1>
              <p className="my-3">1998.01.30</p>
            </motion.div>
            <motion.div className="m-8">
              <h1 className="font-bold text-gray-700 text-xl">연락처</h1>
              <div className="flex my-3">
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