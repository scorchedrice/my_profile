import { motion } from "framer-motion";

type SkillItem = {
  name: string;
  Url: string;
  description?: string;
}

type SkillProps = {
  skillList: SkillItem[];
}

export default function Skill({ skillList }: SkillProps) {  // 수정: 구조 분해 할당으로 skillList를 받음
  return (
    <div className="flex flex-wrap">
      {skillList.map((skill) => (
        <motion.div
          key={skill.name}
          className="relative m-2 group"
          whileHover={{scale: 1.2}}
        >
          <div className="w-[60px] h-[60px] rounded-full bg-amber-50 flex items-center justify-center">
            <img
              src={skill.Url}
              alt={`${skill.name} icon`}
              className="w-[30px] h-[30px] object-contain"
            />
          </div>

          {/*툴팁*/}
          <motion.div
            className="absolute -bottom-8 left-1/2 -translate-x-1/2 px-2 py-1 bg-black text-white text-sm rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap"
          >
            {skill.name}
            <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-black rotate-45"/>
          </motion.div>
        </motion.div>
      ))}
    </div>
  );
}