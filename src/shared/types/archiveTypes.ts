import {archivePath} from "../const/archivePath.ts";

export interface archiveNameType {
  name : keyof typeof archivePath;
}

export interface ArchiveBlockContentProps extends archiveNameType {
  url : string;
  summary : string;
  details : string[];
}