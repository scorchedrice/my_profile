export default function Language() {
  return (
    <div className="flex justify-center h-[140px] gap-8">
      <div className="flex flex-col items-center">
        <div className="w-[80px] h-[80px]">
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg"/>
        </div>
        <span className="text-center mt-2 font-medium">TypeScript</span>
      </div>
      <div className="flex flex-col items-center">
        <div className="w-[80px] h-[80px]">
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg"/>
        </div>
        <span className="text-center mt-2 font-medium">JavaScript</span>
      </div>
      <div className="flex flex-col items-center">
        <div className="w-[80px] h-[80px]">
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/dart/dart-original.svg"/>
        </div>
        <span className="text-center mt-2 font-medium">Dart</span>
      </div>
    </div>
  )
}