import {motion} from "framer-motion"
import { MdKeyboardDoubleArrowDown } from "react-icons/md";
import { useEffect, useRef } from 'react';
import { isMobile } from "../shared/isMobile.ts"
import useScrollAnimations from "../feature/animation/opacity.ts";

export default function IntroPage() {
  const vhRef = useRef(0);

  // 모바일에서 실제 viewport height 계산
  useEffect(() => {
    const setVh = () => {
      if (isMobile) {
        vhRef.current = window.innerHeight * 0.01;
        document.documentElement.style.setProperty('--vh', `${vhRef.current}px`);
      }
    };

    setVh();

    window.addEventListener('resize', setVh);
    return () => window.removeEventListener('resize', setVh);
  }, []);

  const { text1Opacity, text2Opacity, text3Opacity, bgOpacity } = useScrollAnimations()

  const scrollTextAnimation = {
    y: [0, -20, 0],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut",
    }
  }

  return (
    <div
      className="h-[300vh]"
      id="Intro"
    >
      <div
        className="sticky top-0 w-full"
        style={{ height: isMobile ? 'calc(var(--vh, 1vh) * 100)' : '100vh' }}
      >
        {/*배경*/}
        <motion.div
          style={{ opacity: bgOpacity }}
          className="absolute inset-0 bg-gradient-to-br from-purple-300 via-purple-200 to-pink-200"
        />

        <motion.div className="relative w-full h-full flex flex-col justify-center items-center px-4">
          <div className="text-xl sm:text-3xl text-purple-900 mb-8 text-center">
            프론트엔드 개발자 <span className="font-bold">한지웅</span>입니다.
          </div>

          <div className="relative h-32 w-full">
            <motion.div
              style={{opacity: text1Opacity}}
              className="absolute left-1/2 -translate-x-1/2 sm:text-2xl text-purple-900 flex flex-col w-full items-center text-center"
            >
              <div className="my-1">
                "팀의 성공이 곧 나의 성공"이라는 가치관으로
              </div>
              <div>
                <span className="font-bold">팀과 함께 성장</span>하는 것을 추구하고
              </div>
            </motion.div>

            <motion.div
              style={{opacity: text2Opacity}}
              className="absolute left-1/2 -translate-x-1/2 sm:text-2xl text-purple-900 flex flex-col w-full items-center text-center"
            >
              <div className="my-1">
                다양한 기술들을 학습하며
              </div>
              <div>
                <span className="font-bold">전반적인 개발 프로세스를 이해하는 것</span>에 집중합니다.
              </div>
            </motion.div>

            <motion.div
              style={{opacity: text3Opacity}}
              className="absolute left-1/2 -translate-x-1/2 sm:text-2xl text-purple-900 flex flex-col w-full items-center text-center"
            >
              <div className="my-1">
                아래로 스크롤하여
              </div>
              <div>
                <span className="font-bold">저에 대해 더 알아보세요</span>
              </div>
            </motion.div>
          </div>

          <motion.div
            animate={scrollTextAnimation}
            className="absolute bottom-10 text-[50px] text-purple-900"
          >
            <MdKeyboardDoubleArrowDown/>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}