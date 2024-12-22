import {useEffect, useState} from "react";
import Frontend from "./Frontend";
import Backend from "./Backend";
import TestFramework from "./TestFramework.tsx";
import Language from "./Language";
import { MdAutorenew } from "react-icons/md";

export default function Skills() {
  // 현재 보여줄 기술 역량
  const skills = ['Language', 'Frontend', 'Backend', 'Testing']
  const [nowActive, setNowActive] = useState('Language');
  const [autoPlay, setAutoPlay] = useState(true);

  useEffect(() => {
    let intervalId: number | null = null;

    if (autoPlay) {
      intervalId = window.setInterval(() => {
        setNowActive((prev) => {
          const currentIndex = skills.indexOf(prev);
          const nextIndex = (currentIndex + 1) % skills.length;
          return skills[nextIndex];
        });
      }, 10000);
    }
    return () => {
      if (intervalId) window.clearInterval(intervalId)
    };
  }, [autoPlay])

  function renderSkillComponent() {
    switch (nowActive) {
      case 'Frontend':
        return <Frontend />;
      case 'Backend':
        return <Backend />;
      case 'Testing':
        return <TestFramework />;
      case 'Language':
        return <Language />;
      default:
        return <Language />;
    }
  };

  return (
    <>
      <div className="w-[500px] max-w-6xl mx-auto p-6 space-y-6">
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
          {renderSkillComponent()}
        </div>
      </div>
      <button type="button" onClick={() => setAutoPlay(!autoPlay)}>
        <MdAutorenew
          className="animate-spin [animation-duration:3s]"
          style={{ animationPlayState: autoPlay ? 'running' : 'paused' }}
        />
      </button>
    </>
  )
}