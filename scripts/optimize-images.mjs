// Builds the web images from the masters in assets-src/images.
// Usage: npm run images
//
// Masters stay out of public/ (and out of the Vercel upload, see .vercelignore).
// Each image is resized locally into AVIF and WebP at a few widths, so the site can
// run with images.unoptimized and never touch the Vercel Image Optimization quota.
import { mkdir, writeFile, copyFile } from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const root = path.resolve(import.meta.dirname, "..");
const src = path.join(root, "assets-src/images");
const out = path.join(root, "public/images");
const manifestFile = path.join(root, "src/content/image-manifest.json");

// widths: output widths in px (capped at the source width). Omitted = native size only.
// Photos get three widths for srcset; cut-outs are already at 1x of the design.
const jobs = [
  { file: "hero.jpg", widths: [640, 960, 1400] },
  { file: "sounditation.jpg", widths: [640, 960, 1200] },
  { file: "soundchronized.jpg", widths: [640, 960, 1400] },
  { file: "soundpuncture.jpg" },
  { file: "workshop.jpg", widths: [640, 960, 1400] },
  { file: "events.jpg", widths: [640, 960, 1400] },
  { file: "branch-soft.png", widths: [1000] },
  { file: "flower.png", widths: [360] },
  { file: "hero-vine.png" },
  { file: "hero-stilllife.png" },
  { file: "logo-blue.png", widths: [200, 400] },
  { file: "logo-cream.png", widths: [160, 320] },
  { file: "deco/bowl-contact.png" },
  { file: "deco/bowl-intro.png" },
  { file: "deco/leaves-tl.png" },
  { file: "deco/leaves-tr.png" },
  { file: "deco/plumeria-a.png" },
  { file: "deco/plumeria-b.png" },
];

const manifest = {};

for (const job of jobs) {
  const input = path.join(src, job.file);
  const meta = await sharp(input).metadata();
  const alpha = meta.hasAlpha;
  const widths = [...new Set((job.widths ?? [meta.width]).map((w) => Math.min(w, meta.width)))];
  const name = job.file.replace(/\.(png|jpe?g)$/, "");
  await mkdir(path.dirname(path.join(out, name)), { recursive: true });

  for (const w of widths) {
    const base = sharp(input).resize({ width: w, withoutEnlargement: true });
    await base.clone().avif({ quality: alpha ? 60 : 55, effort: 6 }).toFile(path.join(out, `${name}-${w}.avif`));
    await base.clone().webp({ quality: alpha ? 82 : 72, alphaQuality: 90, effort: 6 }).toFile(path.join(out, `${name}-${w}.webp`));
  }
  const top = widths.at(-1);
  manifest[name] = { width: top, height: Math.round((meta.height * top) / meta.width), widths };
  console.log(`${name}  ${widths.join(", ")}`);
}

// Paper grain is a tiling CSS background; the PNG is already smaller than WebP.
await copyFile(path.join(src, "grain.png"), path.join(out, "grain.png"));

// Social card, 1200 x 630.
await sharp(path.join(src, "og.jpg"))
  .resize({ width: 1200, height: 630, fit: "cover", position: "attention" })
  .jpeg({ quality: 78, progressive: true, mozjpeg: true })
  .toFile(path.join(out, "og.jpg"));

// App icons (Next.js file conventions).
const logo = path.join(src, "logo-blue.png");
const pad = { top: 4, bottom: 4, left: 4, right: 4, background: { r: 254, g: 246, b: 239, alpha: 1 } };
await sharp(logo).resize(56, 56, { fit: "contain", background: pad.background }).extend(pad).png().toFile(path.join(root, "src/app/icon.png"));
await sharp(logo)
  .resize(156, 156, { fit: "contain", background: pad.background })
  .extend({ ...pad, top: 12, bottom: 12, left: 12, right: 12 })
  .png()
  .toFile(path.join(root, "src/app/apple-icon.png"));

await writeFile(manifestFile, JSON.stringify(manifest, null, 2) + "\n");
console.log(`manifest -> ${path.relative(root, manifestFile)}`);
