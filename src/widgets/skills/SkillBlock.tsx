import {motion} from "framer-motion";
import {skillsStyles} from "../../shared/styles/skillsStyles.ts";

export default function SkillBlock({ name , url } : {name : string, url: string}) {
  return (
    <>
      <div className={skillsStyles.block}>
        <img
          src={url}
          alt={`${name} icon`}
          className="w-[30px] h-[30px] object-contain"
        />
      </div>

      {/*툴팁*/}
      <motion.div
        className={skillsStyles.bubbleRectangle}
      >
        {name}
        <div className={skillsStyles.bubbleTriangle}/>
      </motion.div>
    </>
  )
}