import { MdAutorenew } from "react-icons/md";
import { skills } from "../../shared/consts/skillConsts.ts"
import useSkills from "../../feature/hooks/useSkills.ts";
import renderSkillComponent from "../../shared/functions/renderSkillComponent.tsx";

export default function Skills() {
  const { nowActive, autoPlay, setAutoPlay, setNowActive } = useSkills();

  return (
    <>
      <div>
        <span className="text-5xl font-bold text-gray-500 mx-2">Tech Stack</span>
        <button type="button" onClick={() => setAutoPlay(!autoPlay)}>
          <MdAutorenew
            className="animate-spin [animation-duration:3s] size-[20px]"
            style={{animationPlayState: autoPlay ? 'running' : 'paused'}}
          />
        </button>
      </div>
      <div className="w-[500px] max-w-[500px] mx-auto p-6 space-y-6">
        <div className="flex items-center justify-between">
          <div className="flex gap-3">
            {skills.map((skill) => (
              <button
                key={skill}
                onClick={() => setNowActive(skill)}
                className={`px-4 py-2 rounded-lg transition-colors ${
                  nowActive === skill
                    ? "bg-blue-500 text-white"
                    : "bg-gray-100 hover:bg-gray-200 text-gray-700"
                }`}
              >
                {skill}
              </button>
            ))}
          </div>
        </div>
        <div className="min-h-[400px] bg-white rounded-lg shadow-md p-6">
          {renderSkillComponent(nowActive)}
        </div>
      </div>
    </>
  )
}