import {menuItems} from "../../shared/const/menuItemsList.ts";
import {VscFeedback} from "react-icons/vsc";
import useScrollToSection from "../../feature/hooks/useScrollToSection.ts";
import {feedBackUrl} from "../../shared/const/navConst.ts";
import {navStyles} from "../../shared/styles/navStyles.ts";

export default function NormalNav() {
  const { scrollToSection } = useScrollToSection()
  return (
    <div className="hidden md:block h-full max-w-4xl mx-auto px-2">
      <ul className="flex justify-center items-center h-full gap-2">
        {menuItems.map((item) => (
          <li
            key={item}
            className={navStyles.button}
            onClick={() => scrollToSection(item)}
          >
            {item}
          </li>
        ))}
        <li
          key="feedback"
          className={`${navStyles.button} group relative`}
          onClick={() => {window.open(feedBackUrl, '_blank')}}
        >
          <VscFeedback className="w-4 h-4"/>
          <span
            className={navStyles.feedback}
          >
              피드백 보내기
            </span>
        </li>
      </ul>
    </div>
  )
}