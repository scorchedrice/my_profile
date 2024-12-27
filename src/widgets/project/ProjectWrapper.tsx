import { motion } from "framer-motion";
import baroMain from "../../assets/project/barobaro/baro_main.png"
import JanyangMain from "../../assets/project/janyang/janyang_main.png"

export default function ProjectWrapper() {
  // 프로젝트 데이터 배열로 관리
  const projects = [
    { id: 1, title: "바로바로", description: "여기엔 설명이 들어갑니다.", img: baroMain, skill: ['next.js', 'zustand', 'typeScript'] },
    { id: 2, title: "자냥", description: "여기엔 설명이 들어갑니다.", img: JanyangMain, skill: ['flutter', 'dart']},
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 justify-items-center">
        {projects.map((project) => (
          <motion.div
            key={project.id}
            className="bg-white w-full max-w-[600px] h-[300px] rounded-lg cursor-pointer
                     shadow-md hover:shadow-xl transition-shadow"
            whileHover={{scale: 1.02}}
            // onClick으로 모달 띄우기
          >
            <div className="flex flex-col sm:flex-row h-full">
              <div className="w-full sm:w-[200px] h-[200px] sm:h-full rounded-t-lg sm:rounded-l-lg sm:rounded-tr-none">
                <img src={project.img} alt={`${project.title} thumbnail`} className="w-full h-full object-contain"/>
              </div>
              <div className="p-4 flex-1">
                <h2 className="text-xl font-bold mb-2">{project.title}</h2>
                <p>{project.description}</p>
              </div>
            </div>
            <div className="absolute inset-0 bg-black/50 opacity-0 hover:opacity-100
                          transition-opacity duration-300 rounded-lg
                          flex items-center justify-center">
              <span className="text-white text-lg font-semibold">자세히 보기</span>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}