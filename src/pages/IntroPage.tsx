// @ts-ignore
import * as React from 'react';
import {motion} from "framer-motion"
import { MdKeyboardDoubleArrowDown } from "react-icons/md";
import { useEffect, useRef } from 'react';
import { isMobile } from "../shared/isMobile.ts"
import useScrollAnimations from "../feature/animation/opacity.ts";

// 데이터 다뤄본 경험 이런게 있으면 도움이 많이 되었다.
// 백엔드면 일 경력이 있냐 이런거
// 프로젝트 위주도 좋지만 학습 내용 적어보자.
// 외주 담당하게 된다면 관련 증빙을 받을 수 있냐
// 싸피때 구직 동시에 진행할 것. (하나하나 하기보단 투트랙 쓰리트랙)
// 인터렉티브 외에도 인프라, DB .. 이런것 강조할 수 있냐.
// 코드 작성 + 포장 잘 할 수 있냐.
// 색상 깔끔하게 가로형 pdf화 된 포트폴리오도 필요하다. (대기업의 경우 접근 제한 있는 경우 있음)
// 멘트 => 수정해야함. 왜 집중해? 목표가 보이는게 좋을 것 같다(풀스택 지향). 개발자가 봤을 때 뭐가 좋을 것 같냐.
// Skill 클릭하면 뭐가 나오게하면 좋을 것 같다.
// Education => 싸피 공홈에 들어가면 잘 나와있음.
// 정보처리기사 (base) 1월 4월 시험봐서 따보자.

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
      className="h-[400vh]"
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
              <div className="mb-1">
                <span>전반적인 개발 프로세스를 이해하는</span>
              </div>
              <div>
              <span className="font-bold">풀스택 개발</span>을 추구합니다.
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

