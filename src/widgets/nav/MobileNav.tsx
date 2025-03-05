import {menuItems} from "../../shared/const/menuItemsList.ts";
import {motion} from "framer-motion";
import useScrollToSection from "../../feature/hooks/useScrollToSection.ts";
import {IoClose, IoMenu} from "react-icons/io5";
import {navStyles} from "../../shared/styles/navStyles.ts";

export default function DropDownNav() {
  const { isOpen, setIsOpen, scrollToSection } = useScrollToSection()
  return (
    <>
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
                className={navStyles.buttonMobile}
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
    </>
  )
}