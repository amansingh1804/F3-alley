const axios = require('axios');
const fs = require('fs');
const path = require('path');

const brands = [
  { slug: "wow-momo", logoUrl: "https://unavatar.io/instagram/wowmomos", foodUrl: "https://images.unsplash.com/photo-1625220194771-7ebdea0b70b9?w=800&q=80" },
  { slug: "cafe-honeyman", logoUrl: "https://unavatar.io/instagram/cafehoneyman", foodUrl: "https://images.unsplash.com/photo-1551024506-0bccd828d307?w=800&q=80" },
  { slug: "nutrahive", logoUrl: "https://unavatar.io/instagram/nutrahive.co", foodUrl: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=800&q=80" },
  { slug: "a-dough-cookie", logoUrl: "https://unavatar.io/instagram/adoughcookie.in", foodUrl: "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?w=800&q=80" },
  { slug: "baskin-robbins", logoUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d8/Baskin-Robbins_logo.svg/512px-Baskin-Robbins_logo.svg.png", foodUrl: "https://images.unsplash.com/photo-1563805042-7684c8e9e533?w=800&q=80" },
  { slug: "pattikattan-biriyani", logoUrl: "https://unavatar.io/instagram/pattikattanbiriyani", foodUrl: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=800&q=80" },
  { slug: "chai-bliss", logoUrl: "https://unavatar.io/instagram/chaibliss", foodUrl: "https://images.unsplash.com/photo-1576092768241-dec231879fc3?w=800&q=80" },
  { slug: "natraj-chole-bhature", logoUrl: "https://unavatar.io/instagram/natrajcholebhature", foodUrl: "https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?w=800&q=80" },
  { slug: "boom-pizza", logoUrl: "https://unavatar.io/instagram/boompizzabengaluru", foodUrl: "https://images.unsplash.com/photo-1513104890d38-7c7f436b7c5b?w=800&q=80" },
  { slug: "halwaii", logoUrl: "https://unavatar.io/instagram/halwaiicafe.blr", foodUrl: "https://images.unsplash.com/photo-1589301760014-d929f39ce9b1?w=800&q=80" },
  { slug: "bao", logoUrl: "https://unavatar.io/instagram/baobao.in", foodUrl: "https://images.unsplash.com/photo-1563245372-f21724e3856d?w=800&q=80" },
  { slug: "wunder-waffle-st", logoUrl: "https://unavatar.io/instagram/wunderwafflest.in", foodUrl: "https://images.unsplash.com/photo-1503485838016-53579610c389?w=800&q=80" },
];

const destDir = path.join(__dirname, 'client', 'public', 'brand_assets');

async function download(url, destPath) {
  try {
    const res = await axios({
      method: 'GET',
      url: url,
      responseType: 'stream',
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
      }
    });
    const writer = fs.createWriteStream(destPath);
    res.data.pipe(writer);
    return new Promise((resolve, reject) => {
      writer.on('finish', resolve);
      writer.on('error', reject);
    });
  } catch (err) {
    console.error('Failed to download', url, err.message);
  }
}

async function main() {
  for (const brand of brands) {
    console.log('Downloading assets for', brand.slug);
    await download(brand.logoUrl, path.join(destDir, `${brand.slug}-logo.png`));
    await download(brand.foodUrl, path.join(destDir, `${brand.slug}-food.jpg`));
  }
}

main();
