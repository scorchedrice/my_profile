import {ProjectDetailType} from "../../../shared/types/globalTypes.ts";

type DescriptionProps = Pick<ProjectDetailType, 'description'>

export default function ProjectDescription({ description }: DescriptionProps) {
  return (
    <>
      <div className="my-2 flex flex-col items-center">
        <h3 className="text-[20px]">{description.summary}</h3>
        <h4>{description.motivation}</h4>
      </div>
      <br/>
      <hr className="w-[95%] border-t border-gray-200"/>
      <br/>
      <div className="w-[80%]">
        {/*프로젝트의 핵심 기능*/}
        <h2 className="text-[30px] font-bold">💡핵심기능</h2>
        <ul className="m-5 space-y-4">
          {description.mainFeatures.map((feature, index) => (
            <li key={index} className="flex flex-col gap-2">
              <h3 className="text-xl font-semibold">{feature.title}</h3>
              <p className="text-gray-700">{feature.content}</p>
            </li>
          ))}
        </ul>
        <br/>
        {/*기술 스택*/}
        <h2 className="text-[30px] font-bold">🪄사용한 기술</h2>
        <div className="m-5 space-y-4">
          {Object.entries(description.techStack).map(([category, technologies]) => (
            <div key={category} className="flex flex-col gap-2">
              <h3 className="text-xl font-semibold capitalize">
                {category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-gray-100 rounded-full text-gray-700"
                  >
              {tech}
            </span>
                ))}
              </div>
            </div>
          ))}
        </div>
        {/*트러블슈팅*/}
        <br/>
        <h2 className="text-[30px] font-bold">🛠️트러블 슈팅</h2>
        <div className="m-5 space-y-4">
          {description.challenges.map((feature, index) => (
            <div key={index} className="flex flex-col gap-2">
              <h3 className="text-xl font-semibold underline">{feature.solutionSummary}</h3>
              <p className="text-gray-700">{feature.problem}</p>
              <p className="text-gray-700">{feature.solution}</p>
            </div>
          ))}
        </div>
        {/* 성과 */}
        <br/>
        <h2 className="text-[30px] font-bold">🎯성과</h2>
        <div className="m-5 space-y-4">
          {description.achievement.map((feature, index) => (
            <div key={index} className="flex flex-col gap-2">
              <div className="flex gap-2">
                <span className="text-gray-700">•</span>
                <p className="text-gray-700">{feature}</p>
              </div>
            </div>
          ))}
        </div>
        <br/>
      </div>
    </>

  )
}