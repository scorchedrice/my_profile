// @ts-ignore
import * as React from 'react';
import {EducationBlock} from "../widgets/education/EducationBlock.tsx";
import { educationData } from "../shared/const/educationList.ts";

export default function EducationPage() {
  return (
    <section id="Education" className="bg-blue-200 flex flex-col items-center w-full py-12">
      <h1 className="text-[50px] font-bold text-gray-700 mb-8">EDUCATION</h1>
      <div className="container mx-auto px-4">
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