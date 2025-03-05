import { motion } from "framer-motion";
import { SkillProps } from "../../shared/types/skillTypes.ts";
import SkillBlock from "./SkillBlock.tsx";

export default function SkillBlocks({ skillList }: SkillProps) {
  return (
    <div className="flex flex-wrap">
      {skillList.map((skill) => (
        <motion.div
          key={skill.name}
          className="relative m-2 group"
          whileHover={{scale: 1.2}}
        >
          <SkillBlock name={skill.name} url={skill.Url}/>
        </motion.div>
      ))}
    </div>
  );
}