import fs from 'fs';
import path from 'path';

const siteDataPath = path.join(process.cwd(), 'client', 'src', 'lib', 'siteData.ts');
let siteData = fs.readFileSync(siteDataPath, 'utf8');

// Replace Brand type
const brandTypeReplacement = `export type Brand = {
  name: string;
  slug: string;
  cuisine: string;
  category: string;
  description: string;
  location: string;
  image: string;
  accent: string;
  preliminary?: boolean;
  logo: string;
  openingHours?: string;
  signatureItems?: string;
  priceRange?: string;
  vegNonVeg?: string;
  dineIn?: string;
  instagram?: string;
  contact?: string;
  specialOffers?: string;
  menuLink?: string;
  zomatoLink?: string;
  swiggyLink?: string;
  websiteLink?: string;
};`;
siteData = siteData.replace(/export type Brand = {[\s\S]*?};\n/, brandTypeReplacement + '\n');

// Replace createBrand and brands array
const newBrandsContent = `const createBrand = (data: Partial<Brand> & { name: string; slug: string; cuisine: string; category: string; description: string; location: string; imageIndex: number; logo: string }): Brand => ({
  ...data,
  image: brandImages[data.imageIndex],
  accent: "#e75f43",
  preliminary: false,
});

export const brands: Brand[] = [
  createBrand({
    name: "WOW! MOMO / WOW CHINA", slug: "wow-momo", cuisine: "Fast Food, Chinese, Tibetan", category: "Fast Food", description: "Wow! Momo specializes in momos, innovative dumpling variations, and Asian-inspired fast food.", location: "GF 4", imageIndex: 0, logo: "https://unavatar.io/instagram/wowmomos", openingHours: "10 AM to 3 AM", signatureItems: "Khou suey, Chicken Lollipop, Chicken Darjeeling and Chicken Himalaya Momo", priceRange: "₹99 to ₹300", vegNonVeg: "Both Vegetarian and Non-Vegetarian", dineIn: "All Available"
  }),
  createBrand({
    name: "CAFÉ HONEYMAN", slug: "cafe-honeyman", cuisine: "Food and Beverage", category: "Desserts", description: "Cafe Honeyman focuses entirely on zero refined sugar products sweetened with pure natural honey.", location: "FF 6", imageIndex: 5, logo: "https://unavatar.io/instagram/cafehoneyman", openingHours: "11 AM to 11 PM", signatureItems: "Exotic Ice Creams, Burgers, Waffles", priceRange: "₹200 to ₹600", vegNonVeg: "Both Vegetarian and Non-Vegetarian", dineIn: "All Available", instagram: "https://www.instagram.com/honeymancafe_bengaluru", contact: "+91 9886426595", zomatoLink: "https://www.zomato.com/bangalore/cafe-honeyman-bommasandra-bangalore/order", swiggyLink: "https://www.swiggy.com/city/bangalore/cafe-honeyman-neeladri-nagar-electronic-city-rest1420129", specialOffers: "Combos Happy hours on weekdays up to 25% Off"
  }),
  createBrand({
    name: "NUTRAHIVE", slug: "nutrahive", cuisine: "Healthy Food, Continental", category: "Healthy Food", description: "NutraHive offers a thoughtfully curated menu of flavor-driven, nutritious options.", location: "FF 4", imageIndex: 10, logo: "https://unavatar.io/instagram/nutrahive", openingHours: "11 AM to 11 PM", signatureItems: "Chicken steak with creamy garlic sauce, One-Pan Veggie Pasta, Avocado Bliss Toast, Smoked Paneer and Apple Salad", priceRange: "₹99 to ₹299", vegNonVeg: "Both Vegetarian and Non-Vegetarian", dineIn: "All Available", menuLink: "https://www.nutrahive.co/menu", zomatoLink: "https://www.zomato.com/bangalore/nutrahive-1-electronic-city-bangalore", swiggyLink: "https://www.swiggy.com/city/bangalore/nutrahive-electronic-city-rest1423081", instagram: "https://www.instagram.com/nutrahive.co/", contact: "+91 6309717817"
  }),
  createBrand({
    name: "A DOUGH COOKIE", slug: "a-dough-cookie", cuisine: "Cookies and Desserts", category: "Desserts", description: "Freshly baked in small batches using premium ingredients, delivering rich flavours and soft textures.", location: "GF 7", imageIndex: 6, logo: "https://unavatar.io/instagram/adoughcookie.in", openingHours: "11 AM to 11 PM", signatureItems: "Skillet cookie with softy and cookie tins", priceRange: "₹60 to ₹1800", vegNonVeg: "Vegetarian", dineIn: "All Available", websiteLink: "https://www.adoughcookie.com/", zomatoLink: "https://zomato.onelink.me/xqzv/fxsq1q37", swiggyLink: "https://www.swiggy.com/menu/1403330?source=sharing"
  }),
  createBrand({
    name: "BASKIN ROBBINS", slug: "baskin-robbins", cuisine: "Ice-creams, deserts, sundaes", category: "Desserts", description: "The world's largest chain of ice-cream specialty shops, famous for its iconic “31 flavors” concept.", location: "GF 1", imageIndex: 7, logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d8/Baskin-Robbins_logo.svg/512px-Baskin-Robbins_logo.svg.png", openingHours: "11 AM to 12 PM", signatureItems: "More than 35 flavors, cheesecake sundaes, brownie sundaes, sizzling brownies, tiramisu cheesecake, roll cakes, celebration ice-cream cakes, waffle sundaes, fruit cream sundaes, hot fudge toppings", priceRange: "Starts from ₹76", vegNonVeg: "100% Veg", dineIn: "All Available", instagram: "https://www.instagram.com/baskinrobbinsin?stkn=bGFoMnBpb3UxZHg4", contact: "8049585142", specialOffers: "1. Any sundaes at rs 150 on every month 15th. 2. 31% discount on 31th of every month. 3. BR reward program"
  }),
  createBrand({
    name: "PATTIKATTAN BIRIYANI", slug: "pattikattan-biriyani", cuisine: "SOUTH INDIAN CUISINE", category: "Biryani", description: "Authentic Tamil Nadu style food in Bangalore.", location: "SHOP 6", imageIndex: 9, logo: "https://unavatar.io/instagram/pattikattanbiriyani", openingHours: "12 PM to 11 PM", signatureItems: "CHETTINADU STARTERS, DINDIGUL BIRIYANI, MADURAI PAROTTA VARITIES", priceRange: "₹250 to ₹400", vegNonVeg: "Veg & Non-Vegetarian", dineIn: "All Available", menuLink: "https://drive.google.com/drive/folders/1ZRbMQ8ECnIz5ZmAHF6WJ-DxOSAa2wM9H?usp=sharing", zomatoLink: "https://www.zomato.com/bangalore/pattikattan-biryani-electronic-city-bangalore/order", swiggyLink: "https://www.swiggy.com/menu/1372890?source=sharing", instagram: "https://www.instagram.com/pattikattanbiriyani/?hl=en", contact: "+91 80953 77803", specialOffers: "EXTRA 5% DISCOUNT FOR ROYALTY CARD HOLDER"
  }),
  createBrand({
    name: "CHAI BLISS", slug: "chai-bliss", cuisine: "Chai, Snacks & North Indian", category: "Café / Coffee", description: "Chai Bliss outlet serving chai, bubble tea, snacks, Maggi, sandwiches and North Indian food items.", location: "F3 Alley", imageIndex: 1, logo: "https://unavatar.io/instagram/chaibliss", openingHours: "8:00 AM to 11:00 PM", signatureItems: "Dum Chai, Ginger Jasmine Boba Tea, Kiwi Strawberry Boba Tea, Mango Peach Boba Tea, Plain Maggi, Cheese Maggi, Veg Cheese Maggi, Veggie Feast Sandwich", priceRange: "₹20 to ₹129", vegNonVeg: "Only Vegetarian", dineIn: "All Available", websiteLink: "https://ownly.food/app/brand/BR440051", contact: "8328856009"
  }),
  createBrand({
    name: "NATRAJ CHOLE BHATURE", slug: "natraj-chole-bhature", cuisine: "North Indian", category: "North Indian", description: "Popular North Indian vegetarian food outlet known for Delhi-style chole bhature.", location: "GF 8", imageIndex: 8, logo: "https://unavatar.io/instagram/natrajcholebhature", openingHours: "9:00 AM to 10:00 PM", signatureItems: "Chole Bhature & Sweet Lassi", priceRange: "₹45 to ₹260", vegNonVeg: "Vegetarian", dineIn: "All Available", zomatoLink: "https://www.zomato.com/bangalore/natraj-chole-bhature-1-electronic-city-bangalore/order", swiggyLink: "https://www.swiggy.com/city/bangalore/natraj-chole-bhature-electronic-city-rest1424617", instagram: "https://www.instagram.com/natrajcholebhature?stkn=emZtM3NpOW94Y3do", contact: "7019063120"
  }),
  createBrand({
    name: "BOOM PIZZA", slug: "boom-pizza", cuisine: "PIZZA, GARLIC BREADS", category: "Pizza", description: "Neapolitan wood fired pizza.", location: "G 11", imageIndex: 2, logo: "https://unavatar.io/instagram/boompizzabengaluru", openingHours: "11:30 AM to 12:00 AM", signatureItems: "VERDURE PIZZA, MEAT LOVERS PIZZA, PANEER BUTTER MASALA PIZZA, OG PEPPERONI PIZZA", priceRange: "₹99 onwards", vegNonVeg: "Both Veg and Non Veg", dineIn: "All Available", contact: "9663395781"
  }),
  createBrand({
    name: "HALWAII", slug: "halwaii", cuisine: "Sweets, Snacks, Savories", category: "Sweets & snacks", description: "Halwaii – Taste of Kolkata in Silicon Valley.", location: "GF 3", imageIndex: 11, logo: "https://unavatar.io/instagram/halwaii", openingHours: "9:00 AM to 10:30 PM", signatureItems: "Sweets, Snacks, Savories, Tandoor", priceRange: "Price on Request", vegNonVeg: "Vegetarian", dineIn: "All Available", swiggyLink: "https://swiggy.com", instagram: "https://instagram.com/Halwaiicafe.blr", contact: "+91 9900006256", specialOffers: "Everything is at special launch price"
  }),
  createBrand({
    name: "BAO", slug: "bao", cuisine: "Pan Asian", category: "Asian", description: "Fluffy Soft Bao's made fresh with Fillings and Toppings that are indulgent and delicious.", location: "GF 9", imageIndex: 3, logo: "https://unavatar.io/instagram/baobao_blr", openingHours: "11 AM to 11 PM", signatureItems: "Dynamite Chicken Bao, Spicy Dan Noodles, Fudgy Boost, Korean Spicy Tenders", priceRange: "₹200 to ₹350", vegNonVeg: "Vegetarian & Non-Vegetarian", dineIn: "All Available", menuLink: "https://drive.google.com/file/d/1By-E3u4cB_xEKpJME-dOrbC3vMNakpN3/view?usp=drive_link", swiggyLink: "https://www.swiggy.com/direct/brand/41648?source=swiggy-direct&subSource=generic", instagram: "https://www.instagram.com/baobao.in?stkn=MjA2cW5mY3pvdWd3", contact: "+91-99168 67801, +91-95002 39208", specialOffers: "Happy Hours : 12pm - 6pm (Mon-Thurs), Wings Thursday"
  }),
  createBrand({
    name: "WUNDER WAFFLE ST.", slug: "wunder-waffle-st", cuisine: "Dessert, Continental, Waffles", category: "Desserts", description: "Your go-to destination for sweet cravings and refreshing brews!", location: "GF 09", imageIndex: 4, logo: "https://unavatar.io/instagram/wunderwafflest", openingHours: "12:00 PM to 11:00 PM", signatureItems: "Oreo Cookie Crumble Waffle, Belgium Hazelnut Chocolate Waffle, Espresso Bubble Tea, Mango Popping Boba", priceRange: "₹150 to ₹300", vegNonVeg: "Vegetarian & Vegan Options", dineIn: "Dine-In, Takeaway & Home Delivery", menuLink: "https://drive.google.com/file/d/1vMbbGbyChWbuJlaeGpylSS55rSAhpzVL/view?usp=drive_link", swiggyLink: "https://www.swiggy.com/menu/1373429?source=sharing", instagram: "https://www.instagram.com/wunderwafflest.in?stkn=ODI5b2xkejBoYWVk", contact: "+91-99168 67801, +91-95002 39208", specialOffers: "Happy Hours : 12pm - 6pm (Mon-Thurs), Popping Wednesday, Bubbly Monday"
  }),
];`;

siteData = siteData.replace(/const createBrand = [\s\S]*?\];/, newBrandsContent);

// Add general info
const generalInfo = `
export const generalVenueInfo = {
  phone: "+91 9113617904",
  whatsapp: "+91 9113617904",
  email: "f3alley369@gmail.com",
  googleMapsLink: "https://share.google/kUrvtUq5i1UqoQeXK",
  address: "f3 alley, 1st cross road, Neeladri Road, Electronic city phase 1, Bengaluru, Karnataka, 560100",
  landmark: "Gate no. 1 (Exit from Gate no. 2)",
  parking: "Balaji Bhavan Basement Parking",
  nearestMetro: "VM47+GF5, Service Rd, Konappana Agrahara, Electronic City",
  nearestBusStop: "Neeladri Nagar Bus Stop and Wipro Gate Bus Stop",
  distanceAirport: "83 Kms",
  distanceRailway: "Heelalige Railway Station 8 to 11 kms"
};
`;
siteData += generalInfo;

fs.writeFileSync(siteDataPath, siteData);
