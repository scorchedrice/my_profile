import {archiveStyles} from "../shared/styles/archiveStyles.ts";
import ArchiveBlock from "../widgets/archive/ArchiveBlock.tsx";

export default function ArchivePage() {
  return (
    <section id="Archive" className={archiveStyles.section} aria-label="아카이브 섹션">
      <h1 className={archiveStyles.title}>ARCHIVE</h1>
      <div className={archiveStyles.content} role="list" aria-label="아카이브 주소 모음">
        <ArchiveBlock name="github"/>
        <ArchiveBlock name="blog"/>
      </div>
    </section>
  )
}