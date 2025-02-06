import * as React from 'react';
import { motion, AnimatePresence } from "framer-motion"
import { BsCopy } from "react-icons/bs";
import {profilePictureVariants, profileTextVariant} from "../feature/about_me/animations/consts.ts";
import useAboutMe from "../feature/about_me/hooks/useAboutMe.ts";
import {StaticImage} from "gatsby-plugin-image";

export default function AboutMePage() {
  const { showTooltip, mousePosition, copyMail } = useAboutMe()

  return (
    <>
      {/* Section은 주황색으로 감싸는 부분 */}
      <section className="bg-amber-500 flex flex-col" id="AboutMe" aria-label="자기소개">
        {/* 하단 div는 AboutMe 최대 width를 조절하는 용도 */}
        <div className="max-w-5xl mx-auto w-full">
          <h1 className="text-[50px] font-bold text-gray-700 text-center">ABOUT ME</h1>
          <motion.div className="flex flex-col md:flex-row items-center p-4" role="region" aria-label="자기소개 에셋 영역">
            <div className="w-full md:w-1/2 flex justify-center items-center mb-8 md:mb-0">
              <motion.div
                className="w-[250px] h-[250px] rounded-full overflow-hidden"
                initial="initial"
                variants={profilePictureVariants}
                whileInView="animate"
                viewport={{once: true}}
                aria-label="애니메이션 동작 프로필사진"
              >
                <StaticImage
                  src="../assets/profile.jpg"
                  alt="profile"
                  className="w-full h-full object-cover"
                />
              </motion.div>
            </div>
            <motion.div
              className="w-full md:w-1/2"
              initial="initial"
              variants={profileTextVariant}
              whileInView="animate"
              viewport={{once: true}}
            >
              <dl className="m-8">
                <dt className="font-bold text-gray-700 text-xl">이름</dt>
                <dd className="my-3">한지웅</dd>
              </dl>
              <dl className="m-8">
                <dt className="font-bold text-gray-700 text-xl">생년월일</dt>
                <dd className="my-3">1998.01.30</dd>
              </dl>
              <dl className="m-8">
                <dt className="font-bold text-gray-700 text-xl">연락처</dt>
                <dd className="flex my-3">
                  <p>wldnd2977@gmail.com</p>
                  <button
                    aria-label="이메일 주소 복사"
                    onClick={(e : React.MouseEvent) => copyMail(e)}
                  >
                    <BsCopy className="cursor-pointer text-[12px] m-2 mb-1"/>
                  </button>
                </dd>
              </dl>
            </motion.div>
          </motion.div>
        </div>
        <AnimatePresence>
          {showTooltip && (
            <motion.div
              role="status"
              aria-live="polite"
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
      </section>
    </>
)
}