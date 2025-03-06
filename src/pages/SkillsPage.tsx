import { motion } from "framer-motion";
import SkillBlocks from "../widgets/skills/SkillBlocks.tsx"

import { skillsParentVariants, skillsChildVariants } from "../feature/animations/skillAnimations.ts";
import {skillCategoryList} from "../shared/const/skillCategoryList.ts";
import {skillsStyles} from "../shared/styles/skillsStyles.ts";

export default function SkillsPage() {
  return (
    <motion.section className={skillsStyles.section} id="SkillsPage">
      <h1 className={skillsStyles.title}>SKILLS</h1>
      <motion.div
        className="m-4"
        variants={skillsParentVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{once: true}}
      >
        {skillCategoryList.map(({name, data}) => (
          <motion.div
            key={name}
            className="my-8"
            variants={skillsChildVariants}
          >
            <span className={skillsStyles.field}>{name}</span>
            <SkillBlocks skillList={data}/>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
}