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
      <div className="w-[400px] max-w-[440px] mx-auto p-6 space-y-6">
        <div className="bg-transparent rounded-lg shadow-md">
          <div className="flex">
            {skills.map((skill) => (
              <button
                key={skill}
                onClick={() => setNowActive(skill)}
                className={`w-1/4 py-2 rounded-t-lg transition-colors ${
                  nowActive === skill
                    ? "bg-white text-black"
                    : "bg-gray-100 hover:bg-gray-200 text-gray-700"
                }`}
              >
                {skill}
              </button>
            ))}
          </div>
          {/* 컨텐츠 영역 */}
          <div className="min-h-[400px] p-6 bg-white rounded-b-md">
            {renderSkillComponent(nowActive)}
          </div>
        </div>
      </div>
    </>
  )
}