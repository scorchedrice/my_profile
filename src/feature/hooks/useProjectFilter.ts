import {useState} from "react";
import { projects } from "../../shared/project/const/myProjectList.ts"

type FilterType = "all" | "team" | "personal";

export default function useProjectFilter() {
  const [projectType, setProjectType] = useState<FilterType>('all');
  const filteredProjects = projectType === "all" ? projects : projects.filter(project => project.type === projectType);
  const buttonBaseStyle = "w-full py-2 px-4 rounded-lg transition-all duration-200 text-left";
  const getButtonStyle = (type: string) => {
    return projectType === type
      ? `${buttonBaseStyle} bg-blue-500 text-white shadow-md`
      : `${buttonBaseStyle} hover:bg-gray-100`;
  };

  return {
    setProjectType,
    filteredProjects,
    getButtonStyle,
  }
}