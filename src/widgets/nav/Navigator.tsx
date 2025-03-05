import DropDownNav from "./MobileNav.tsx";
import NormalNav from "./NormalNav.tsx";
import {navStyles} from "../../shared/styles/navStyles.ts";

export default function Navigator() {
  return (
    <nav className={navStyles.navBase}>
      {/* width에 따라 아래의 Nav가 선택적으로 나타나게 됩니다. (md:block, md:hidden) */}
      <NormalNav/>
      <DropDownNav/>
    </nav>
  );
}