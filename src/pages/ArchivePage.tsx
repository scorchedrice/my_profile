// @ts-ignore
import * as React from 'react';
import { motion } from "framer-motion";
import { DiGithubFull } from "react-icons/di";
import { SiGithubpages } from "react-icons/si";
import { FaGithub } from "react-icons/fa";

export default function ArchivePage() {
  // 키보드 조작 기능 추가
  const handleKeyPress = (url: string) => (event: React.KeyboardEvent) => {
    if (event.key === 'Enter' || event.key === ' ') {
      window.open(url, '_blank');
    }
  };

  return (
    <section id="Archive" className="bg-gray-800 flex flex-col items-center" aria-label="아카이브 섹션">
      <h1 className="text-[50px] font-bold text-gray-700 text-white">ARCHIVE</h1>
      <div className="flex flex-col md:flex-row items-center p-4" role="list" aria-label="아카이브 주소 모음">
        <motion.div className="bg-gray-50 w-[300px] h-[300px] rounded-lg m-8 cursor-pointer"
                    whileHover={{scale: 1.1}}
                    onClick={() => window.open('https://github.com/scorchedrice', '_blank')}
                    onKeyDown={handleKeyPress('https://github.com/scorchedrice')}
                    role="listitem"
                    aria-label="scorchedrice 깃허브 주소"
        >
          <div className="flex justify-center items-center mx-auto">
            <FaGithub className="text-[40px]"/>
            <DiGithubFull className="text-[100px] ml-1"/>
          </div>
          <div className="mx-4">
            <div className="text-blue-600 mb-4">
              github.com/scorchedrice
            </div>
            <ul aria-label="github 소개">
              <li className="font-bold mb-2">소스 코드 저장소입니다.</li>
              <li>‣ 개인적으로 진행한 학습 코드</li>
              <li>‣ 개인 / 팀 프로젝트 코드 등</li>
            </ul>
          </div>
        </motion.div>
        <motion.div className="bg-gray-50 w-[300px] h-[300px] rounded-lg m-8 cursor-pointer"
                    whileHover={{scale: 1.1}}
                    onClick={() => window.open('https://scorchedrice.github.io', '_blank')}
                    onKeyDown={handleKeyPress('https://scorchedrice.github.io')}
                    aria-label="git 블로그 주소"
                    role="listitem"
        >
          <div className="flex justify-center items-center mx-auto">
            <SiGithubpages className="text-[100px]"/>
          </div>
          <div className="mx-4">
            <div className="text-blue-600 mb-4">
              scorchedrice.github.io
            </div>
            <ul aria-label="블로그 소개">
              <li className="font-bold mb-2">기록 및 공유 목적의 블로그입니다.</li>
              <li>‣ 학습 일기 작성</li>
              <li>‣ 학습내용 정리, 내용 공유</li>
              <li>‣ 고민하며 성장하는 과정들을 기록</li>
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  )
}