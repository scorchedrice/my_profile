import StaticPortfolio from "./StaticPortfolio.tsx";
import StaticBaro from "./StaticBaro.tsx";
import StaticJanyang from "./StaticJanyang.tsx";
import StaticMiruni from "./StaticMiruni.tsx";
import StaticEEUM from "./StaticEEUM.tsx";

export default function StaticImageRender({ imageTitle } : { imageTitle: string }) {
  if (imageTitle === "포트폴리오") return <StaticPortfolio/>
  if (imageTitle === "바로바로") return <StaticBaro/>
  if (imageTitle === "자냥") return <StaticJanyang/>
  if (imageTitle === "미루니") return <StaticMiruni/>
  if (imageTitle === "EEUM-COMPANY") return <StaticEEUM/>
}