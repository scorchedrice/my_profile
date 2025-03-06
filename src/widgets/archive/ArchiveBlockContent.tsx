import {archiveStyles} from "../../shared/styles/archiveStyles.ts";
import {ArchiveBlockContentProps} from "../../shared/types/archiveTypes.ts";

export default function ArchiveBlockContent({ name, url, summary, details } : ArchiveBlockContentProps) {
  return (
    <div className="mx-4">
      <div className={archiveStyles.link}>
        {url}
      </div>
      <ul aria-label={`${name} 소개`}>
        <li className="font-bold mb-2">{summary}</li>
        {details.map((content, index) => {
          return (
            <li key={`${name} description-${index}`}>
              ‣ {content}
            </li>
          )
        })}
      </ul>
    </div>
  )
}