export default function Navigator() {
  return (
    <nav className="fixed top-0 left-0 w-full bg-white/80 backdrop-blur-sm z-50 shadow-sm">
      <div className="max-w-screen-xl mx-auto px-4">
        <div className="flex justify-center items-center h-16 gap-8">
          <a href="#page-1" className="hover:text-blue-500 transition-colors">
            Intro
          </a>
          <a href="#page-2" className="hover:text-blue-500 transition-colors">
            Tech Stack
          </a>
          <a href="#page-3" className="hover:text-blue-500 transition-colors">
            Projects
          </a>
          <a href="#page-4" className="hover:text-blue-500 transition-colors">
            Etc
          </a>
        </div>
      </div>
    </nav>
  )
}