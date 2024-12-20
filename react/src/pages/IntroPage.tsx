import Terminal from "../widgets/Terminal"
import WallPaper from "../assets/wallpaper.jpg"

export default function IntroPage() {
  return (
    <div className="relative w-screen h-screen overflow-hidden">
      <div className="absolute inset-0">
        <img src={WallPaper} alt="wallPaper" className="w-full h-full object-cover" />
      </div>
      <div className="relative w-full h-full z-40 flex justify-center items-center">
        <Terminal/>
      </div>
    </div>
  )
}