// @ts-ignore
import * as React from 'react';
import { motion } from "framer-motion";
import { DiGithubFull } from "react-icons/di";
import { SiGithubpages } from "react-icons/si";
import { FaGithub } from "react-icons/fa";

export default function ArchivePage() {
  return (
    <div id="Archive" className="bg-gray-800 flex flex-col items-center">
      <h1 className="text-[50px] font-bold text-gray-700 text-white">ARCHIVE</h1>
      <div className="flex flex-col md:flex-row items-center p-4" >
        <motion.div className="bg-white w-[300px] h-[300px] rounded-lg m-8 cursor-pointer"
                    whileHover={{scale: 1.1}}
                    onClick={() => window.open('https://github.com/scorchedrice', '_blank')}
        >
          <div className="flex justify-center items-center mx-auto">
            <FaGithub className="text-[40px]"/>
            <DiGithubFull className="text-[100px] ml-1"/>
          </div>
          <div className="mx-4">
            <div className="text-blue-400 mb-4">
              github.com/scorchedrice
            </div>
            <ul>
              <h2 className="font-bold mb-2">소스 코드 저장소입니다.</h2>
              <li>‣ 개인적으로 진행한 학습 코드</li>
              <li>‣ 개인 / 팀 프로젝트 코드 등</li>
            </ul>
          </div>
        </motion.div>
        <motion.div className="bg-white w-[300px] h-[300px] rounded-lg m-8 cursor-pointer"
                    whileHover={{scale: 1.1}}
                    onClick={() => window.open('https://scorchedrice.github.io', '_blank')}>
          <div className="flex justify-center items-center mx-auto">
            <SiGithubpages className="text-[100px]"/>
          </div>
          <div className="mx-4">
            <div className="text-blue-400 mb-4">
              scorchedrice.github.io
            </div>
            <ul>
              <h2 className="font-bold mb-2">기록 및 공유 목적의 블로그입니다.</h2>
              <li>‣ 학습 일기 작성</li>
              <li>‣ 학습내용 정리, 내용 공유</li>
              <li>‣ 고민하며 성장하는 과정들을 기록</li>
            </ul>
          </div>
        </motion.div>
      </div>
    </div>
  )
}