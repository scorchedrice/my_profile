import {useState} from "react";

export default function useAboutMe() {
  const [showTooltip, setShowTooltip] = useState(false);
  const [mousePosition, setMousePosition] = useState({x:0, y:0});

  const copyMail = (e: React.MouseEvent) => {
    setMousePosition({ x: e.clientX, y: e.clientY });
    navigator.clipboard.writeText("wldnd2977@gmail.com");
    setShowTooltip(true);
    setTimeout(() => setShowTooltip(false), 1000);
  };

  return ({
    showTooltip,
    mousePosition,
    copyMail,
  })

}