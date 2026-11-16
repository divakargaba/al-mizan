import type { TimelineMilestone } from "@/data/types";
import { timelinePart1 } from "@/data/timeline/part-1";
import { timelinePart2 } from "@/data/timeline/part-2";
import { timelinePart3 } from "@/data/timeline/part-3";
import { timelinePart4 } from "@/data/timeline/part-4";

/** All milestones, in ascending order of `yearCE` (t01 … t20). */
export const timeline: TimelineMilestone[] = [
  ...timelinePart1,
  ...timelinePart2,
  ...timelinePart3,
  ...timelinePart4,
];
