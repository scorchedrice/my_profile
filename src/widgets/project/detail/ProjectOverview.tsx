import {OverviewProps} from "../../../shared/types/projectTypes.ts";
import { FaLink } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { IoIosClose } from "react-icons/io";

export default function ProjectOverview({ overview, onClose } : OverviewProps ) {
  const { title, period, github, demo, teamMembers, role, mainImg } = overview;
  return (
    <div className="relative w-full">
      <div className="flex flex-col items-center">
        <h1 className="text-[30px] my-2">{title}</h1>
        <div className="flex text-[12px] my-2">
          <div className="mx-2">
            {period}
          </div>
          <div className="mx-2">
            {teamMembers}인 ({role})
          </div>
        </div>
        <img src={mainImg} alt="main" width="300px"/>
      </div>
      <div className="absolute top-0 right-1 flex flex-col text-[40px]">
        <button
          type = "button"
          onClick={() => onClose()}
        >
          <IoIosClose/>
        </button>
        {github !== "" && (
          <button
            type="button"
            className="my-2"
            onClick={() => window.open(github, '_blank')}
          >
            <FaGithub/>
          </button>
        )}
        {demo !== "" && (
          <button type="button" className="my-2" onClick={() => window.open(demo, '_blank')}>
            <FaLink/>
          </button>
        )}
      </div>
    </div>
  )
}