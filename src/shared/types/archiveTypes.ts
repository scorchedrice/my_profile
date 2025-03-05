import {archivePath} from "../const/archivePath.ts";

export type archiveNameType = {
  name : keyof typeof archivePath;
}