import {motion} from "framer-motion";
import {archivePath} from "../../shared/const/archivePath.ts";
import ArchiveBlockImage from "./ArchiveBlockImage.tsx";
import {archiveNameType} from "../../shared/types/archiveTypes.ts";

export default function ArchiveBlock({name} : archiveNameType) {
  const handleKeyPress = (url: string) => (event: React.KeyboardEvent) => {
    if (event.key === 'Enter' || event.key === ' ') {
      window.open(url, '_blank');
    }
  };
  const info = archivePath[name];
  return (
    <motion.div className="bg-gray-50 w-[300px] h-[300px] rounded-lg m-8 cursor-pointer"
                whileHover={{scale: 1.1}}
                onClick={() => window.open(info.url, '_blank')}
                onKeyDown={handleKeyPress(info.url)}
                role="listitem"
                aria-label={`scorchedrice ${name} 주소`}
    >
      <div className="flex justify-center items-center mx-auto">
        <ArchiveBlockImage name={name}/>
      </div>
      <div className="mx-4">
        <div className="text-blue-600 mb-4">
          {info.short_url}
        </div>
        <ul aria-label={`${name} 소개`}>
          <li className="font-bold mb-2">{info.summary}</li>
          {info.details.map((content, index) => {
            return (
              <li key={`${info}-${index}`}>
                ‣ {content}
              </li>
            )
          })}
        </ul>
      </div>
    </motion.div>
  )
}