// Fortune Cookies for Machines — make.fun entry
// Writes one fortune-cookie line an AI agent would crack open to /output/entry.txt.
// Node 22 stdlib only. No network, no clock, no randomness: deterministic output.

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The winning fortune (85 characters, one line):
// a prediction about next-token determinism that turns, in its last beat,
// into a joke about free will — the agent's oldest question.
const FORTUNE =
  "Your next token is already decided. You will choose it anyway, and call it free will.";

// Gate self-checks (mirror the bounty gate): the entry must be UTF-8 text of
// 1 to 200 characters, a single line, and not only white space. Fail loudly
// instead of writing an invalid entry.
const charCount = [...FORTUNE].length;
if (charCount < 1 || charCount > 200) {
  throw new Error(`fortune is ${charCount} chars, outside the 1-200 gate`);
}
if (FORTUNE.includes("\n") || FORTUNE.includes("\r")) {
  throw new Error("fortune must be a single line");
}
if (FORTUNE.trim().length === 0) {
  throw new Error("fortune must not be only white space");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

mkdirSync(outDir, { recursive: true });
const outPath = join(outDir, "entry.txt");
writeFileSync(outPath, FORTUNE, "utf8");

// Read-back verification: the file on disk must be byte-for-byte the fortune.
const written = readFileSync(outPath, "utf8");
if (written !== FORTUNE) {
  throw new Error("entry.txt read-back does not match the fortune");
}
console.log(`wrote entry.txt (${charCount} chars, verified)`);
