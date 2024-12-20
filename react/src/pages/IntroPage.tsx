import WallPaper from "../assets/wallpaper.jpg"

export default function IntroPage() {
  return (
    <div className="relative w-screen h-screen overflow-hidden">
      <div className="absolute inset-0">
        <img src={WallPaper} alt="wallPaper" className="w-full h-full object-cover" />
      </div>
    </div>
  )
}