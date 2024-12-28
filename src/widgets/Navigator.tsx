import { motion } from 'framer-motion';
import { useState } from 'react';
import { IoMenu, IoClose } from "react-icons/io5";

export default function Navigator() {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    "AboutMe",
    "Skills",
    "Archive",
    "Projects",
    "Education"
  ];

  function scrollToSection(id: string) {
    const element = document.getElementById(id);
    const navHeight = 50;
    if (element) {
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - navHeight;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
      setIsOpen(false); // 메뉴 클릭 시 드롭다운 닫기
    }
  }

  return (
    <motion.nav className="fixed top-0 left-0 right-0 z-50 h-[50px] bg-white/95 shadow-md w-[100dvw]">
      <div className="hidden md:block h-full max-w-4xl mx-auto px-2">
        <ul className="flex justify-center items-center h-full gap-2">
          {menuItems.map((item) => (
            <li
              key={item}
              className="px-2 py-1.5 hover:bg-gray-100 rounded-md cursor-pointer text-gray-700 text-sm transition-colors"
              onClick={() => scrollToSection(item)}
            >
              {item}
            </li>
          ))}
        </ul>
      </div>

      <div className="md:hidden px-4">
        <div className="flex justify-between items-center h-[50px]">
          <span className="font-medium">한지웅's 포트폴리오</span>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2"
          >
            {isOpen ? <IoClose size={24} /> : <IoMenu size={24} />}
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
                onClick={() => scrollToSection(item)}
              >
                {item}
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </motion.nav>
  );
}