import {footerStyles} from "../shared/styles/footerStyles.ts";
import {footerText} from "../shared/const/footerText.ts";

export default function FooterPage() {
  return (
    <footer className={footerStyles.section}>
      <p className="mb-2">
        Updated. {footerText.updateDate}
      </p>
      <p className="mb-2">
        {footerText.madeBy}를 기반으로 제작된 사이트입니다.
      </p>
      <p>
        {footerText.copyRight}
      </p>
    </footer>
  )
}