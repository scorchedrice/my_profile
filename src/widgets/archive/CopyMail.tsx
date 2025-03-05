import {AnimatePresence, motion} from "framer-motion";
import useAboutMe from "../../feature/hooks/useAboutMe.ts";
import {BsCopy} from "react-icons/bs";

export default function CopyButton() {
  const { showTooltip, mousePosition, copyMail } = useAboutMe()
  return (
    <>
      <button
        aria-label="이메일 주소 복사"
        onClick={(e : React.MouseEvent) => copyMail(e)}
      >
        <BsCopy className="cursor-pointer text-[12px] m-2 mb-1"/>
      </button>
      <AnimatePresence>
        {showTooltip && (
          <motion.div
            role="status"
            aria-live="polite"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="fixed bg-gray-800 text-white px-2 py-1 rounded text-sm"
            style={{
              left: mousePosition.x + 10,
              top: mousePosition.y - 10,
              pointerEvents: 'none'
            }}
          >
            복사되었습니다!
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
