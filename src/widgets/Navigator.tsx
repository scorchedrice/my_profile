import TerminalModal from "./modal/TerminalModal.tsx";

export default function Navigator() {
  return (
    <nav className="fixed top-0 left-0 w-full bg-white/80 backdrop-blur-sm z-50 shadow-sm">
      <div className="max-w-screen-xl mx-auto px-4">
        <div className="flex justify-center items-center h-16 gap-8">
          <a href="#intro" className="hover:text-blue-500 transition-colors">
            Intro
          </a>
          <a href="#tech-stack" className="hover:text-blue-500 transition-colors">
            Tech Stack
          </a>
          <a href="#projects" className="hover:text-blue-500 transition-colors">
            Projects
          </a>
          <a href="#etc" className="hover:text-blue-500 transition-colors">
            Etc
          </a>
          <TerminalModal/>
        </div>
      </div>
    </nav>
  )
}