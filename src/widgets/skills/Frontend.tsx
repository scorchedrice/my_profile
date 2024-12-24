export default function Frontend() {
  return (
    <div className="flex justify-center h-[140px] gap-8">
      <div className="flex flex-col items-center">
        <div className="w-[80px] h-[80px]">
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg"/>
        </div>
        <span className="text-center mt-2 font-medium">React</span>
      </div>
      <div className="flex flex-col items-center">
        <div className="w-[80px] h-[80px]">
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg"/>
        </div>
        <span className="text-center mt-2 font-medium">Next.js</span>
      </div>
      <div className="flex flex-col items-center">
        <div className="w-[80px] h-[80px]">
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flutter/flutter-original.svg"/>
        </div>
        <span className="text-center mt-2 font-medium">Flutter</span>
      </div>
    </div>
  )
}
