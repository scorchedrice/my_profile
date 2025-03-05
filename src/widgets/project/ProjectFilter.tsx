import useProjectFilter from "../../feature/hooks/useProjectFilter.ts";
import {useSetFilterType} from "../../shared/stores/useProjectFilterStore.ts";

export default function ProjectFilter() {
  const {
    getButtonStyle,
  } = useProjectFilter()
  const setProjectType = useSetFilterType();

  return (
    <div className="w-full lg:w-64 bg-white rounded-lg shadow-md p-4 h-fit">
      <div className="space-y-2">
        <button
          className={getButtonStyle("all")}
          onClick={() => setProjectType("all")}
        >
          All
        </button>
        <button
          className={getButtonStyle("team")}
          onClick={() => setProjectType("team")}
        >
          Team
        </button>
        <button
          className={getButtonStyle("personal")}
          onClick={() => setProjectType("personal")}
        >
          Personal
        </button>
      </div>
    </div>
  )
}