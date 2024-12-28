import {EducationBlock} from "../widgets/education/EducationBlock.tsx";
import { educationData } from "../shared/education/const/educationList.ts";

export default function EducationPage() {
  return (
    <div id="Education" className="bg-blue-200 flex flex-col items-center" >
      <h1 className="text-[50px] font-bold text-gray-700 ml-8">EDUCATION</h1>
      <div className="space-y-6">
        {educationData.map((edu, index) => (
          <EducationBlock
            key={index}
            name={edu.name}
            content={edu.content}
          />
        ))}
      </div>
    </div>
  )
}