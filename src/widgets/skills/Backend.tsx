export default function Backend() {
  return (
    <div className="flex justify-center h-[140px] gap-8">
      <div className="flex flex-col items-center">
        <div className="w-[80px] h-[80px]">
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nestjs/nestjs-original.svg"/>
        </div>
        <span className="text-center mt-2 font-medium">Nest.js</span>
      </div>
      <div className="flex flex-col items-center">
        <div className="w-[80px] h-[80px]">
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg"/>
        </div>
        <span className="text-center mt-2 font-medium">Postgres</span>
      </div>
    </div>
  )
}