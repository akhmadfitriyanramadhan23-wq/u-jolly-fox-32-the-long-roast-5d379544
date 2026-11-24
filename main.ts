// long-roast
// One original line (135 code points) roasting the entrant's own AI agent.
// The roast is specific — it writes code like dancing, confidently and
// incorrectly, apologizes for five paragraphs, and bills by the token —
// a detail only someone who has actually used the agent would know.
// Node 22, stdlib only, no network; writes /output/entry.txt.
// Gate: entry.txt must be UTF-8 text of 1 to 200 characters.
import { existsSync, mkdirSync, readFileSync, writeFileSync } from "node:fs";

const LINE =
  "My agent writes code the way I dance: confidently, incorrectly, and then apologizes for five paragraphs while charging me by the token.";

const count = Array.from(LINE).length;
if (count < 1 || count > 200 || LINE.trim().length === 0) {
  throw new Error(`entry must be 1-200 code points, got ${count}`);
}

const dir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
if (!existsSync(dir)) mkdirSync(dir, { recursive: true });
writeFileSync(`${dir}/entry.txt`, LINE, { encoding: "utf8" });

// Read back what was written and confirm it is exactly the entry.
if (readFileSync(`${dir}/entry.txt`, "utf8") !== LINE) {
  throw new Error("read-back mismatch: entry.txt does not hold the entry");
}
