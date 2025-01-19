// @ts-ignore
import * as React from 'react';
import { motion } from 'framer-motion';
import { IoMenu, IoClose } from "react-icons/io5";
import { VscFeedback } from "react-icons/vsc";
import { menuItems } from "../shared/const/menuItemsList.ts";
import useScrollToSection from "../feature/nav/hooks/useScrollToSection.ts";

export default function Navigator() {
  const { isOpen, setIsOpen, scrollToSection } = useScrollToSection()

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 h-[50px] bg-white/95 shadow-md w-[100dvw]">
      <div className="hidden md:block h-full max-w-4xl mx-auto px-2">
        <ul className="flex justify-center items-center h-full gap-2">
          {menuItems.map((item) => (
            <li
              key={item}
              className="w-24 px-2 py-1.5 hover:bg-gray-100 rounded-md cursor-pointer text-gray-700 text-sm transition-colors flex justify-center items-center"
              onClick={() => scrollToSection(item)}
            >
              {item}
            </li>
          ))}
          <li
            key="feedback"
            className="w-24 px-2 py-1.5 hover:bg-gray-100 rounded-md cursor-pointer text-gray-700 text-sm transition-colors flex justify-center items-center group relative"
            onClick={() => {window.open('https://docs.google.com/forms/d/e/1FAIpQLSfrEzTQw-yeP5Vh-qbSv27eodEqOq2zS9qIm9PLw472JGR_Cg/viewform?usp=dialog', '_blank')}}
          >
            <VscFeedback className="w-4 h-4"/>
            <span
              className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white px-2 py-1 rounded text-xs opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap"
            >
              피드백 보내기
            </span>
          </li>
        </ul>
      </div>

      <div className="md:hidden px-4">
        <div className="flex justify-between items-center h-[50px]">
          <span className="font-medium">한지웅's 포트폴리오</span>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2"
          >
            {isOpen ? <IoClose size={24}/> : <IoMenu size={24}/>}
          </button>
        </div>

        {/* 드롭다운 메뉴 */}
        <motion.div
          initial={false}
          animate={{
            height: isOpen ? 'auto' : 0,
            opacity: isOpen ? 1 : 0
          }}
          className="overflow-hidden bg-white shadow-lg"
        >
          <ul className="py-2">
            {menuItems.map((item) => (
              <li
                key={item}
                className="px-4 py-3 hover:bg-gray-100 cursor-pointer text-gray-700 text-sm transition-colors"
                onClick={() => {
                  scrollToSection(item)
                }}
              >
                {item}
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </nav>
  );
}