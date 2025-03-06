import {footerStyles} from "../shared/styles/footerStyles.ts";
import {footerConst} from "../shared/const/footerConst.ts";

export default function FooterPage() {
  return (
    <footer className={footerStyles.section}>
      <p>
        Updated. {footerConst.updateDate}
      </p>
      <p className="my-2">
        {footerConst.madeBy}를 기반으로 제작된 사이트입니다.
      </p>
      <p>
        {footerConst.copyRight}
      </p>
    </footer>
  )
}