import { projects } from "../../shared/const/projectList.ts"
import {useFilterType} from "../../shared/stores/useProjectFilterStore.ts";
import {filterStyles} from "../../shared/styles/projectStyles.ts";

export default function useProjectFilter() {
  const projectType = useFilterType();
  const filteredProjects = projectType === "all" ? projects : projects.filter(project => project.type === projectType);
  const getButtonStyle = (type: string) => {
    return projectType === type
      ? filterStyles.selectedButton
      : filterStyles.noneSelectedButton;
  };

  return {
    filteredProjects,
    getButtonStyle,
  }
}