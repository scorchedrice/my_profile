import { motion } from "framer-motion";
import Skill from "../widgets/Skill"
import { techStackData } from "../assets/skills/techStack.ts";

export default function TechStackPage() {
  // 컨테이너 애니메이션 설정
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.4 // 자식 요소들 사이의 등장 간격
      }
    }
  };

  // 각 섹션의 애니메이션 설정
  const sectionVariants = {
    hidden: {
      opacity: 0,
      x: 50  // 아래에서 위로 올라오는 효과
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 30
      }
    }
  };

  const sections = [
    { name: "Language", data: techStackData.language },
    { name: "Frontend", data: techStackData.frontend },
    { name: "Backend", data: techStackData.backend },
    { name: "Testing & Tools", data: techStackData.test }
  ];

  return (
    <motion.div className="h-[100dvh] bg-amber-300 flex flex-col justify-center items-center">
      <motion.div
        className="m-2"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {sections.map(({ name, data }) => (
          <motion.div
            key={name}
            className="my-3"
            variants={sectionVariants}
          >
            <span className="text-gray-700 font-bold text-[24px]">{name}</span>
            <Skill skillList={data} />
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
}