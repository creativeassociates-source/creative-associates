// scripts/convert-webp.js
import sharp from "sharp";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const inputDir = path.join(__dirname, "..", "public", "works");
const outputDir = inputDir;

if (!fs.existsSync(inputDir)) {
  console.error("❌ public/works フォルダが存在しません");
  process.exit(1);
}

(async () => {
  const files = fs.readdirSync(inputDir);

  for (const file of files) {
    const ext = path.extname(file).toLowerCase();
    const base = path.basename(file, ext);

    // JPEG / PNG 以外はスキップ！
    if (![".jpg", ".jpeg", ".png"].includes(ext)) {
      console.log(`⚠ スキップ：${file}（対応していない形式）`);
      continue;
    }

    const inputPath = path.join(inputDir, file);
    const outputPath = path.join(outputDir, `${base}.webp`);

    try {
      await sharp(inputPath)
        .webp({ quality: 80 })
        .toFile(outputPath);

      console.log(`✔ 変換成功：${file} → ${base}.webp`);
    } catch (err) {
      console.error(`❌ 変換失敗：${file}`);
      console.error(err);
    }
  }

  console.log("🎉 webp 変換が完了しました");
})();
