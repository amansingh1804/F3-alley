const fs = require('fs');
const path = require('path');
const https = require('https');

const brands = [
  { slug: "wow-momo", logoUrl: "https://unavatar.io/instagram/wowmomos" },
  { slug: "cafe-honeyman", logoUrl: "https://unavatar.io/instagram/cafehoneyman" },
  { slug: "nutrahive", logoUrl: "https://unavatar.io/instagram/nutrahive.co" },
  { slug: "a-dough-cookie", logoUrl: "https://unavatar.io/instagram/adoughcookie.in" },
  { slug: "baskin-robbins", logoUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d8/Baskin-Robbins_logo.svg/512px-Baskin-Robbins_logo.svg.png" },
  { slug: "pattikattan-biriyani", logoUrl: "https://unavatar.io/instagram/pattikattanbiriyani" },
  { slug: "chai-bliss", logoUrl: "https://unavatar.io/instagram/chaibliss" },
  { slug: "natraj-chole-bhature", logoUrl: "https://unavatar.io/instagram/natrajcholebhature" },
  { slug: "boom-pizza", logoUrl: "https://unavatar.io/instagram/boompizzabengaluru" },
  { slug: "halwaii", logoUrl: "https://unavatar.io/instagram/halwaiicafe.blr" },
  { slug: "bao", logoUrl: "https://unavatar.io/instagram/baobao.in" },
  { slug: "wunder-waffle-st", logoUrl: "https://unavatar.io/instagram/wunderwafflest.in" },
];

const destDir = path.join(__dirname, 'client', 'public', 'brand_assets');
if (!fs.existsSync(destDir)) fs.mkdirSync(destDir, { recursive: true });

async function downloadImage(url, dest) {
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        return downloadImage(res.headers.location, dest).then(resolve).catch(reject);
      }
      const file = fs.createWriteStream(dest);
      res.pipe(file);
      file.on('finish', () => file.close(resolve));
    }).on('error', (err) => {
      fs.unlink(dest, () => reject(err));
    });
  });
}

async function main() {
  for (const brand of brands) {
    console.log(`Downloading logo for ${brand.slug}...`);
    try {
      await downloadImage(brand.logoUrl, path.join(destDir, `${brand.slug}-logo.png`));
      console.log(`Downloaded ${brand.slug}-logo.png`);
    } catch (e) {
      console.error(`Failed to download logo for ${brand.slug}:`, e.message);
    }
  }
}

main();
