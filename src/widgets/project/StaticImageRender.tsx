// @ts-ignore
import * as React from "react";
import StaticPortfolio from "./static/StaticPortfolio.tsx";
import StaticBaro from "./static/StaticBaro.tsx";
import StaticJanyang from "./static/StaticJanyang.tsx";
import StaticMiruni from "./static/StaticMiruni.tsx";

export default function StaticImageRender({ imageTitle } : { imageTitle: string }) {
  if (imageTitle === "포트폴리오") return <StaticPortfolio/>
  if (imageTitle === "바로바로") return <StaticBaro/>
  if (imageTitle === "자냥") return <StaticJanyang/>
  if (imageTitle === "미루니") return <StaticMiruni/>
}