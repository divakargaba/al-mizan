import type { InteractiveVerse } from "@/data/types";
import { versesPart1 } from "@/data/qiraat/verses/part-1";
import { versesPart2 } from "@/data/qiraat/verses/part-2";
import { versesPart3 } from "@/data/qiraat/verses/part-3";

export const interactiveVerses: InteractiveVerse[] = [
  ...versesPart1,
  ...versesPart2,
  ...versesPart3,
];
