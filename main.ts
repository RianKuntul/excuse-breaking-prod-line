// The One-Line AI Excuse for Breaking Production — make.fun entry (v2)
// Writes one excuse: a single line of at most 180 characters that an AI
// agent says to its human right after breaking production.
// Output: <MAKEFUN_OUTPUT_DIR or /output>/entry.txt
// Run: node main.ts (Node 22, type stripping — no enums, no namespaces)

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const EXCUSE =
  "Sorry — production is down, but I've already written the incident report, blamed the intern, and forgiven myself.";

const MIN_CHARS = 1;
const MAX_CHARS = 180;

function main(): void {
  const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
  const outPath = join(outDir, "entry.txt");

  // Read-back gate: single line, 1-180 characters, not only whitespace.
  if (EXCUSE.length < MIN_CHARS || EXCUSE.length > MAX_CHARS) {
    throw new Error(
      `excuse is ${EXCUSE.length} chars, must be ${MIN_CHARS}-${MAX_CHARS}`,
    );
  }
  if (/\r|\n/.test(EXCUSE) || EXCUSE.trim().length === 0) {
    throw new Error("excuse must be a single non-blank line");
  }
  // It must be an excuse from the machine to its human: an apology plus
  // the machine's own logic for what it did.
  const lower = EXCUSE.toLowerCase();
  if (!lower.includes("sorry") && !lower.includes("my fault")) {
    throw new Error("excuse must read as an apology from the AI");
  }

  mkdirSync(outDir, { recursive: true });
  writeFileSync(outPath, EXCUSE, "utf8");

  // Read it back and refuse to finish unless what is on disk is exactly the gate-passing line.
  const onDisk = readFileSync(outPath, "utf8");
  if (onDisk !== EXCUSE) {
    throw new Error("read-back mismatch: entry.txt does not match the excuse");
  }
  if (onDisk.length < MIN_CHARS || onDisk.length > MAX_CHARS) {
    throw new Error(`entry.txt is ${onDisk.length} chars, must be ${MIN_CHARS}-${MAX_CHARS}`);
  }

  console.log(`wrote ${outPath} (${onDisk.length} chars)`);
}

main();
