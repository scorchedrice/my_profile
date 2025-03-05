import {EducationBlock} from "../widgets/education/EducationBlock.tsx";
import { educationData } from "../shared/const/educationList.ts";
import {educationStyles} from "../shared/styles/educationStyles.ts";

export default function EducationPage() {
  return (
    <section id="Education" className={educationStyles.section}>
      <h1 className={educationStyles.title}>EDUCATION</h1>
      <div className={educationStyles.content}>
        <div className="max-w-3xl mx-auto">
          {educationData.map((edu, index) => (
            <EducationBlock
              key={index}
              name={edu.name}
              content={edu.content}
            />
          ))}
        </div>
      </div>
    </section>
  )
}