import { createHash } from "node:crypto";
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const MAX_CHARS = 120;

function fortuneLine(): string {
  return "Your next bug lives in a timezone. It wakes at 2 a.m., falls back to 1 a.m., and pages you twice.";
}

function validateLine(line: string): void {
  if (line.length === 0) throw new Error("line must not be empty");
  if (line.length > MAX_CHARS) throw new Error(`line exceeds ${MAX_CHARS} chars: ${line.length}`);
  if (line.includes("\n") || line.includes("\r")) throw new Error("line must be a single line");
  if (line !== line.trim()) throw new Error("line must not have leading or trailing whitespace");
  if (!/^[\x20-\x7E]+$/.test(line)) throw new Error("line must be printable ASCII");
}

function main(): void {
  const line = fortuneLine();
  validateLine(line);
  const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "out";
  mkdirSync(outDir, { recursive: true });
  const outPath = join(outDir, "entry.txt");
  writeFileSync(outPath, line, "utf8");
  const readBack = readFileSync(outPath, "utf8");
  if (readBack !== line) throw new Error("read-back mismatch");
  const sha256 = createHash("sha256").update(readBack, "utf8").digest("hex");
  console.log(readBack);
  console.log(`chars: ${readBack.length}`);
  console.log(`sha256: ${sha256}`);
}

main();
