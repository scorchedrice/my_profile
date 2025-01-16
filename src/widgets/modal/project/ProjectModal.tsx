// @ts-ignore
import * as React from 'react';
import ProjectOverview from "../../project/detail/ProjectOverview.tsx";
import {projectsDetail} from "../../../shared/project/const/myProjectList.ts";
import ProjectDescription from "../../project/detail/ProjectDescription.tsx";
import ProjectImages from "../../project/detail/ProjectImages.tsx";

export default function ProjectModal({projectId, onClose} : {projectId : number, onClose : () => void}) {
  const projectDetail = projectsDetail.find(project => project.id === projectId);
  if (!projectDetail) {
    return (
      <div>
        찾을 수 없습니다.
      </div>
    )
  }

  return (
    <div className="w-[80dvw] h-[80dvh] max-w-[1200px] flex flex-col items-center">
      <ProjectOverview overview={projectDetail.overview} onClose={onClose} />
      <ProjectDescription description={projectDetail.description} />
      <ProjectImages images={projectDetail.images}/>
    </div>
  )
}