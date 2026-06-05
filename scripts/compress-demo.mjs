import { spawnSync } from "node:child_process";
import { createRequire } from "node:module";
import { existsSync, renameSync, statSync, unlinkSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..");
const require = createRequire(import.meta.url);
const ffmpegPath = require("@ffmpeg-installer/ffmpeg").path;

const input =
  process.argv[2] ?? path.join(root, "public", "demo.source.mp4");
const output = path.join(root, "public", "demo.mp4");
const tmp = path.join(root, "public", "demo.compressed.mp4");

if (!existsSync(input)) {
  console.error(`Input not found: ${input}`);
  process.exit(1);
}

const args = [
  "-hide_banner",
  "-y",
  "-i",
  input,
  "-an",
  "-vf",
  "scale=1280:-2:flags=lanczos",
  "-c:v",
  "libx264",
  "-crf",
  "28",
  "-preset",
  "slow",
  "-movflags",
  "+faststart",
  "-pix_fmt",
  "yuv420p",
  tmp,
];

console.log(`Encoding ${input} → ${output}`);
const result = spawnSync(ffmpegPath, args, { stdio: "inherit" });
if (result.status !== 0) {
  process.exit(result.status ?? 1);
}

if (existsSync(output)) {
  unlinkSync(output);
}
renameSync(tmp, output);

const mb = (statSync(output).size / 1024 / 1024).toFixed(2);
console.log(`Done: ${output} (${mb} MB)`);
