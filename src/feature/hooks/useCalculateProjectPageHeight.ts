import {useEffect, useState} from "react";
import {calculateProjectSectionHeight} from "../views/calculateProjectSectionHeight.ts";
import {projects} from "../../shared/const/projectList.ts";

export default function useCalculateProjectPageHeight() {
  const [gridHeight, setGridHeight] = useState(0);
  useEffect(() => {
    const updateHeight = () => {
      setGridHeight(calculateProjectSectionHeight(projects.length));
    };

    updateHeight();
    window.addEventListener('resize', updateHeight);
    return () => window.removeEventListener('resize', updateHeight);
  }, []);
  return gridHeight;
}