import {archivePath} from "../../shared/const/archivePath.ts";
import {FaGithub} from "react-icons/fa";
import {DiGithubFull} from "react-icons/di";
import {SiGithubpages} from "react-icons/si";
import {archiveStyles} from "../../shared/styles/archiveStyles.ts";

export default function ArchiveBlockImage({name} : {name : keyof typeof archivePath}) {
  switch (name) {
    case 'github':
      return (
        <div className={archiveStyles.blockImage}>
          <FaGithub className="text-[40px]"/>
          <DiGithubFull className="text-[100px] ml-1"/>
        </div>
      )
    case 'blog':
      return (
        <div className={archiveStyles.blockImage}>
          <SiGithubpages className="text-[100px]"/>
        </div>
      )
  }
}