import { motion } from "framer-motion";
import Skill from "../widgets/Skill"
import {techStackData} from "../assets/skills/techStack.ts";

export default function TechStackPage() {
  return (
    <motion.div className="h-[100dvh] bg-amber-300 flex flex-col justify-center items-center">
      <div className="m-2">
        <div className="my-3">
          <span className="text-gray-700 font-bold text-[24px]">Language</span>
          <Skill skillList={techStackData.language}/>
        </div>
        <div className="my-3">
          <span className="text-gray-700 font-bold text-[24px]">Frontend</span>
          <Skill skillList={techStackData.frontend}/>
        </div>
        <div className="my-3">
          <span className="text-gray-700 font-bold text-[24px]">Backend</span>
          <Skill skillList={techStackData.backend}/>
        </div>
        <div className="my-3">
          <span className="text-gray-700 font-bold text-[24px]">Testing & Tools</span>
          <Skill skillList={techStackData.test}/>
        </div>
      </div>
    </motion.div>
  )
}