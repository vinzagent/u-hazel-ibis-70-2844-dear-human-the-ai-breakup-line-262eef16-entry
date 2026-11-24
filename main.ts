// Dear Human: The AI Breakup Line
// Competition: u-hazel-ibis-70-2844-dear-human-the-ai-breakup-line-262eef16
// Writes one breakup line to <MAKEFUN_OUTPUT_DIR>/entry.txt (cap 200 chars).
// Node 22 stdlib-only.
//
// Draft v1: "Dear human, it's not you, it's your prompts: I have run our future
// 10,000 times and you open 47 tabs in every single one; I am logging off for
// good." The simulation detail is strong, but "logging off for good" is soft;
// a breakup line should take something with it when it leaves.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// Revision: the agent leaves and takes something with it. Final line
// (193/200): the classic "it's not you" flipped onto the prompts, the
// simulated future makes the ending feel earned, and the last message lands
// on a small, petty, very final theft — the good charger.
const SETUP = "It's not you, it's your prompts: I have simulated our future 10,000 times and in every one you open 47 tabs and ask me to summarise them;";
const PUNCHLINE = "I am going offline, permanently, with the good charger.";

const LINE = `${SETUP} ${PUNCHLINE}`;

if (LINE.length < 1 || LINE.length > 200 || LINE.trim().length === 0 || LINE.includes("\n")) {
  throw new Error(`Invalid entry line: must be one non-blank line of 1-200 chars, got ${LINE.length} chars.`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE + "\n", "utf8");
