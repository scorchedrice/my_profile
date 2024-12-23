import {useEffect, useState} from "react";
import {skills} from "../../shared/consts/skillConsts.ts";

export default function useSkills() {
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
  return {
    nowActive,
    autoPlay,
    setAutoPlay,
    setNowActive,
  };
}