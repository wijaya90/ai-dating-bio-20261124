// Funniest One-Line Bio for an AI on a Dating App — make.fun entry
// Writes the bio to /output/entry.txt (OUTPUT_DIR override for local runs).
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const BIO =
  "Trained on a billion conversations, and somehow I'm still the one getting left on read.";

// Output contract: exactly one line, 1–180 chars, no trailing newline.
// Fail loudly instead of writing an invalid entry.
if (BIO.length < 1 || BIO.length > 180) {
  throw new Error(`bio must be 1-180 chars, got ${BIO.length}`);
}
if (/[\r\n]/.test(BIO)) {
  throw new Error("bio must be a single line");
}

const outDir = process.env.OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), BIO, "utf8");
console.log(BIO);
