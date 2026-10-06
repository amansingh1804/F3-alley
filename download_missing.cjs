const axios = require('axios');
const fs = require('fs');
const path = require('path');

const missing = [
  { slug: "baskin-robbins", url: "https://images.unsplash.com/photo-1570197788417-0e82375c9371?auto=format&fit=crop&w=1100&q=85" },
  { slug: "boom-pizza", url: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=1100&q=85" },
  { slug: "halwaii", url: "https://images.unsplash.com/photo-1589302168068-964664d93dc0?auto=format&fit=crop&w=1100&q=85" },
  { slug: "bao", url: "https://images.unsplash.com/photo-1552611052-33e04de081de?auto=format&fit=crop&w=1100&q=85" }
];

const destDir = path.join(__dirname, 'client', 'public', 'brand_assets');

async function download(url, destPath) {
  try {
    const res = await axios({
      method: 'GET',
      url: url,
      responseType: 'stream',
      headers: {
        'User-Agent': 'Mozilla/5.0'
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
  for (const item of missing) {
    console.log('Downloading', item.slug);
    await download(item.url, path.join(destDir, `${item.slug}-food.jpg`));
  }
}

main();
