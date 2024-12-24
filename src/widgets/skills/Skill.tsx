type SkillItem = {
  name: string;
  Url: string;
}

type SkillProps = {
  skillList: SkillItem[];
}

export default function Skill({ skillList }: SkillProps) {  // 수정: 구조 분해 할당으로 skillList를 받음
  return (
    <div className="w-full">
      <div className="grid grid-cols-4 gap-4">
        {skillList.map((skill) => (
          <div key={skill.name} className="flex flex-col items-center">
              <img
                src={skill.Url}
                alt={`${skill.name} icon`}
                className="w-12 h-12 object-contain"
              />
            <span className="text-center mt-2 font-medium text-sm truncate w-full">
              {skill.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}