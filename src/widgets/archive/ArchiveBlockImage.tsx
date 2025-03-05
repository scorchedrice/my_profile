import {archivePath} from "../../shared/const/archivePath.ts";
import {FaGithub} from "react-icons/fa";
import {DiGithubFull} from "react-icons/di";
import {SiGithubpages} from "react-icons/si";

export default function ArchiveBlockImage({name} : {name : keyof typeof archivePath}) {
  switch (name) {
    case 'github':
      return (
        <>
          <FaGithub className="text-[40px]"/>
          <DiGithubFull className="text-[100px] ml-1"/>
        </>
      )
    case 'blog':
      return (
        <>
          <SiGithubpages className="text-[100px]"/>
        </>
      )
  }
}