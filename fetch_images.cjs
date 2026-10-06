const axios = require('axios');
const cheerio = require('cheerio');
const fs = require('fs');
const path = require('path');
const https = require('https');

const brands = [
  { slug: "wow-momo", link: "https://www.zomato.com/bangalore/wow-momo-1-electronic-city-bangalore/order" }, // Guessed Zomato link
  { slug: "cafe-honeyman", link: "https://www.zomato.com/bangalore/cafe-honeyman-bommasandra-bangalore/order" },
  { slug: "nutrahive", link: "https://www.zomato.com/bangalore/nutrahive-1-electronic-city-bangalore" },
  { slug: "a-dough-cookie", link: "https://www.adoughcookie.com/" },
  { slug: "pattikattan-biriyani", link: "https://www.zomato.com/bangalore/pattikattan-biryani-electronic-city-bangalore/order" },
  { slug: "natraj-chole-bhature", link: "https://www.zomato.com/bangalore/natraj-chole-bhature-1-electronic-city-bangalore/order" },
  { slug: "boom-pizza", link: "https://www.zomato.com/bangalore/boom-pizza-1-electronic-city-bangalore/order" }, // Guessed Zomato link
  { slug: "bao", link: "https://www.swiggy.com/direct/brand/41648?source=swiggy-direct&subSource=generic" },
];

const destDir = path.join(__dirname, 'client', 'public', 'brand_assets');
if (!fs.existsSync(destDir)) fs.mkdirSync(destDir, { recursive: true });

async function downloadImage(url, dest) {
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      if (res.statusCode === 301 || res.statusCode === 302 || res.statusCode === 307 || res.statusCode === 308) {
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

async function scrapeOgImage(url) {
  try {
    const res = await axios.get(url, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/115.0.0.0 Safari/537.36',
        'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8',
        'Accept-Language': 'en-US,en;q=0.5'
      }
    });
    const $ = cheerio.load(res.data);
    let ogImage = $('meta[property="og:image"]').attr('content');
    if (!ogImage) {
      ogImage = $('img').first().attr('src');
    }
    return ogImage;
  } catch (err) {
    console.error(`Failed to fetch ${url}:`, err.message);
    return null;
  }
}

async function main() {
  for (const brand of brands) {
    console.log(`Processing ${brand.slug}...`);
    const imgUrl = await scrapeOgImage(brand.link);
    if (imgUrl) {
      console.log(`Found image for ${brand.slug}: ${imgUrl}`);
      try {
        const ext = imgUrl.split('?')[0].split('.').pop().toLowerCase() || 'jpg';
        const safeExt = ['jpg', 'jpeg', 'png', 'webp', 'gif'].includes(ext) ? ext : 'jpg';
        await downloadImage(imgUrl, path.join(destDir, `${brand.slug}.${safeExt}`));
        console.log(`Downloaded ${brand.slug}.${safeExt}`);
      } catch (e) {
        console.error(`Failed to download image for ${brand.slug}:`, e.message);
      }
    } else {
      console.log(`No image found for ${brand.slug}`);
    }
  }
}

main();
