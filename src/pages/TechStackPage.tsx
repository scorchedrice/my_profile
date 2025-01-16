<<<<<<< HEAD
// @ts-ignore
import * as React from 'react';
=======
>>>>>>> d256ce2e3063baeb99ce3abba9fda3e8ededb261
import { motion } from "framer-motion";
import Skill from "../widgets/Skill"
import { techStackData } from "../assets/skills/techStack.ts";
import { containerVariants, sectionVariants } from "../feature/animation/variants.ts";

export default function TechStackPage() {
  const sections = [
    { name: "Language", data: techStackData.language },
    { name: "Frontend", data: techStackData.frontend },
    { name: "Backend", data: techStackData.backend },
    { name: "Testing & Tools", data: techStackData.test }
  ];

  return (
    <motion.div className="bg-amber-300 flex flex-col items-center" id="Skills">
      <h1 className="text-[50px] font-bold text-gray-700">SKILLS</h1>
      <motion.div
        className="m-4"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{once: true}}
      >
        {sections.map(({name, data}) => (
          <motion.div
            key={name}
            className="my-8"
            variants={sectionVariants}
          >
            <span className="text-gray-700 font-bold text-[24px]">{name}</span>
            <Skill skillList={data}/>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
}