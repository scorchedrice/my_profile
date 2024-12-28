import {EducationBlock} from "../widgets/education/EducationBlock.tsx";


export default function EducationPage() {
  const educationData = [
    {
      name: "프로그래머스 풀스택 데브코스",
      content: [
        "1월 21일부터 해당 교육프로그램에 참여할 예정입니다.",
      ]
    },
    {
      name: "삼성 청년 SW 아카데미",
      content: [
        "2024.01 - 2024.12 기간동안 1600시간의 SW 교육을 수료했습니다.",
        "프론트엔드 역할로 세차례의 프로젝트를 진행했습니다."
      ]
    },
    {
      name: "홍익대학교",
      content: [
        "신소재공학과를 졸업했습니다.",
      ]
    },
  ];

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