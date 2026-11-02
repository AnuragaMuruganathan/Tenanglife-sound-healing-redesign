// One-off downloader for the original TenangLife assets hosted on Wix.
// Usage: node scripts/fetch-assets.mjs
import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";

const root = path.resolve(import.meta.dirname, "..");
const media = "https://static.wixstatic.com/media";
const ufonts = "https://static.wixstatic.com/ufonts";

// [output file, source url]. Crops mirror the ones the live site applies.
const images = [
  ["logo-blue.png", `${media}/8eee9a_1553753888574dbd92abae0a25b743f2~mv2.png`],
  ["logo-cream.png", `${media}/8eee9a_d378bbbcd47b47bb9ae80d04663233ad~mv2.png`],
  ["branch-soft.png", `${media}/8eee9a_04adbcd6d8024608be6d6bba87ac0584~mv2.png`],
  ["hero.png", `${media}/abe643_7b1634f37695441e8fd70e415ef2d3b3~mv2.png`],
  ["sounditation.png", `${media}/abe643_51e14b0623d04a89a41ce6a34bd69bd4~mv2.png/v1/crop/x_142,y_0,w_1440,h_961/sounditation.png`],
  ["soundchronized.jpg", `${media}/abe643_4ef8bff70cbd444db318c7885d39d837~mv2.jpg/v1/crop/x_0,y_749,w_2250,h_1502/soundchronized.jpg`],
  ["soundpuncture.jpg", `${media}/abe643_5ed20b69bd044c5a9f8576400656582e~mv2.jpg`],
  ["workshop.jpg", `${media}/abe643_7186680974ac4485830069b97c8b1fc0~mv2.jpg`],
  ["events.png", `${media}/abe643_c377da68136644c087ca368293ce37d4~mv2.png/v1/crop/x_1,y_0,w_1846,h_1232/events.png`],
  ["og.jpg", `${media}/abe643_ec8907a31cc548068fb7fc300b71f09d~mv2.jpg`],
  ["flower-icon.png", `${media}/abe643_8b43e2d78b594534b2beb34a5ed45ff2~mv2.png`],
];

// TT Chocolates, as uploaded to the Wix site.
const fonts = [
  ["tt-chocolates-light.woff2", `${ufonts}/fbd475_c5fbc0611e494305b3a665f6ee9ed394/woff2/file.woff2`],
  ["tt-chocolates-light-italic.woff2", `${ufonts}/fbd475_77fa740d5db84a66bc719f9ad7f013c4/woff2/file.woff2`],
  ["tt-chocolates-medium.woff2", `${ufonts}/fbd475_6ca03b3004db4abf8e0c9248ff3121d8/woff2/file.woff2`],
  ["tt-chocolates-medium-italic.woff2", `${ufonts}/fbd475_4fb1237ae1d540f998f71b05d94a9825/woff2/file.woff2`],
  ["tt-chocolates-trl-light.woff2", `${ufonts}/3c84b8_678c7d8c058344e489e2f946b7e6eea5/woff2/file.woff2`],
  ["tt-chocolates-trl-regular.woff2", `${ufonts}/3c84b8_49e8e425476440629e18150f50965311/woff2/file.woff2`],
  ["tt-chocolates-trl-demibold.woff2", `${ufonts}/3c84b8_174249628eed403a85343838059acec1/woff2/file.woff2`],
];

async function save(dir, [name, url]) {
  const res = await fetch(url, { headers: { "user-agent": "Mozilla/5.0" } });
  if (!res.ok) throw new Error(`${res.status} ${url}`);
  const buf = Buffer.from(await res.arrayBuffer());
  await writeFile(path.join(dir, name), buf);
  console.log(`${name}  ${(buf.length / 1024).toFixed(0)} KB`);
}

const imgDir = path.join(root, "assets-src/images");
const fontDir = path.join(root, "src/fonts");
await mkdir(imgDir, { recursive: true });
await mkdir(fontDir, { recursive: true });
await Promise.all(images.map((i) => save(imgDir, i)));
await Promise.all(fonts.map((f) => save(fontDir, f)));
