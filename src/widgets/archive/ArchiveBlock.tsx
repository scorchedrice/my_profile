import {motion} from "framer-motion";
import {archivePath} from "../../shared/const/archivePath.ts";
import ArchiveBlockImage from "./ArchiveBlockImage.tsx";
import {archiveNameType} from "../../shared/types/archiveTypes.ts";
import {archiveStyles} from "../../shared/styles/archiveStyles.ts";
import ArchiveBlockContent from "./ArchiveBlockContent.tsx";

export default function ArchiveBlock({name} : archiveNameType) {
  const handleKeyPress = (url: string) => (event: React.KeyboardEvent) => {
    if (event.key === 'Enter' || event.key === ' ') {
      window.open(url, '_blank');
    }
  };
  const info = archivePath[name];
  return (
    <motion.div className={archiveStyles.block}
                whileHover={{scale: 1.1}}
                onClick={() => window.open(info.url, '_blank')}
                onKeyDown={handleKeyPress(info.url)}
                role="listitem"
                aria-label={`scorchedrice ${name} 주소`}
    >
      <ArchiveBlockImage name={name}/>
      <ArchiveBlockContent name={name} url={info.short_url} summary={info.summary} details={info.details}/>
    </motion.div>
  )
}