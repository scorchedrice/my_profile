import {useEffect, useState} from "react";
import { projects } from "../../../shared/project/const/myProjectList.ts"

type FilterType = "all" | "team" | "personal";

const CARD_HEIGHT = 400;
const GAP = 32;
 // grid에 따른 height 계산
function calculateGridHeight(totalProjects: number) {
  const getColumnCount = (width: number) => {
    if (width >= 1280) return 3;  // xl breakpoint
    if (width >= 768) return 2;   // md breakpoint
    return 1;
  };

  const width = window.innerWidth;
  const columns = getColumnCount(width);
  const rows = Math.ceil(totalProjects / columns);

  return (CARD_HEIGHT + GAP) * rows - GAP;
}

export default function useProjectFilter() {
  const [projectType, setProjectType] = useState<FilterType>('all');
  const [gridHeight, setGridHeight] = useState(0);
  const filteredProjects = projectType === "all" ? projects : projects.filter(project => project.type === projectType);
  const buttonBaseStyle = "w-full py-2 px-4 rounded-lg transition-all duration-200 text-left";
  const getButtonStyle = (type: string) => {
    return projectType === type
      ? `${buttonBaseStyle} bg-blue-500 text-white shadow-md`
      : `${buttonBaseStyle} hover:bg-gray-100`;
  };

  useEffect(() => {
    const updateHeight = () => {
      setGridHeight(calculateGridHeight(projects.length));
    };

    updateHeight();
    window.addEventListener('resize', updateHeight);
    return () => window.removeEventListener('resize', updateHeight);
  }, []);

  return {
    setProjectType,
    filteredProjects,
    getButtonStyle,
    gridHeight,
  }
}