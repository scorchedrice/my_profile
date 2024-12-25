import { motion } from 'framer-motion';
import { useState } from "react";
import { IoIosNavigate } from "react-icons/io";
import TerminalModal from "./modal/TerminalModal.tsx";

export default function Navigator() {
  const itemVariants = {
    open: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 300, damping: 24 }
    },
    closed: { opacity: 0, y: 20, transition: { duration: 0.2 } }
  };
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.nav
      initial={false}
      animate={isOpen ? "open" : "closed"}
      className="fixed top-4 right-0 z-50 flex flex-col items-end px-4"
    >
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        animate={{ rotate: isOpen ? -225 : 0 }}
        transition={{ duration: 0.3 }}
        className="flex items-center justify-center p-2 hover:text-blue-500"
      >
        <IoIosNavigate className="w-[40px] h-[40px] stroke-white stroke-2" />
      </motion.button>

      <motion.ul
        variants={{
          open: {
            clipPath: "inset(0% 0% 0% 0% round 10px)",
            transition: {
              type: "spring",
              bounce: 0,
              duration: 0.7,
              delayChildren: 0.3,
              staggerChildren: 0.05
            }
          },
          closed: {
            clipPath: "inset(10% 50% 90% 50% round 10px)",
            transition: {
              type: "spring",
              bounce: 0,
              duration: 0.3
            }
          }
        }}
        style={{pointerEvents: isOpen ? "auto" : "none"}}
        className="mt-2 w-48 bg-white rounded-lg shadow-xl py-2"
      >
        <motion.li
          variants={itemVariants}
          className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-gray-700 text-sm"
          onClick={() => {
            document.getElementById("Intro")?.scrollIntoView({behavior: 'smooth'})
            setIsOpen(false)
          }}
        >
          Intro
        </motion.li>
        <motion.li
          variants={itemVariants}
          className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-gray-700 text-sm"
          onClick={() => {
            document.getElementById("AboutMe")?.scrollIntoView({behavior: 'smooth'})
            setIsOpen(false)
          }
          }
        >
          AboutMe
        </motion.li>
        <motion.li
          variants={itemVariants}
          className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-gray-700 text-sm"
          onClick={() => {
            document.getElementById("Skills")?.scrollIntoView({behavior: 'smooth'})
            setIsOpen(false)
          }
          }
        >
          Skills
        </motion.li>
        <motion.li
          variants={itemVariants}
          className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-gray-700 text-sm"
          onClick={() => {
            document.getElementById("Archive")?.scrollIntoView({behavior: 'smooth'})
            setIsOpen(false)
          }
          }
        >
          Archive
        </motion.li>
        <motion.li
          variants={itemVariants}
          className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-gray-700 text-sm"
          onClick={() => {
            document.getElementById("Projects")?.scrollIntoView({behavior: 'smooth'})
            setIsOpen(false)
          }
          }
        >
          Projects
        </motion.li>
        <motion.li
          variants={itemVariants}
          className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-gray-700 text-sm"
          onClick={() => {
            document.getElementById("Education")?.scrollIntoView({behavior: 'smooth'})
            setIsOpen(false)
          }
          }
        >
          Education
        </motion.li>
        <motion.li
          variants={itemVariants}
          className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-gray-700 text-sm"
        >
          <TerminalModal/>
        </motion.li>
      </motion.ul>
    </motion.nav>
  );
}