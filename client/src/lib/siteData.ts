export type Brand = {
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
  menuItems?: Omit<Dish, 'brand'>[];
};


export type Dish = {
  name: string;
  brand: string;
  category: string;
  note: string;
  image: string;
  price: string;
};

export type EventItem = {
  title: string;
  date: string;
  time: string;
  location: string;
  description: string;
  image: string;
  tag: string;
};

export const navItems = [
  { label: "The Alley", href: "/about" },
  { label: "Brands", href: "/brands" },
  { label: "What's on", href: "/events" },
  { label: "Food map", href: "/food" },
];

const brandImages = [
  "https://images.unsplash.com/photo-1496116218417-1a781b1c416c?auto=format&fit=crop&w=1100&q=85",
  "https://images.unsplash.com/photo-1552611052-33e04de081de?auto=format&fit=crop&w=1100&q=85",
  "https://images.unsplash.com/photo-1579751626657-72bc17010498?auto=format&fit=crop&w=1100&q=85",
  "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=1100&q=85",
  "https://images.unsplash.com/photo-1551024506-0bccd828d307?auto=format&fit=crop&w=1100&q=85",
  "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=1100&q=85",
  "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?auto=format&fit=crop&w=1100&q=85",
  "https://images.unsplash.com/photo-1570197788417-0e82375c9371?auto=format&fit=crop&w=1100&q=85",
  "https://images.unsplash.com/photo-1626132647523-66f5bf380027?auto=format&fit=crop&w=1100&q=85",
  "https://images.unsplash.com/photo-1589302168068-964664d93dc0?auto=format&fit=crop&w=1100&q=85",
  "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=1100&q=85",
  "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=1100&q=85",
];

const createBrand = (data: Partial<Brand> & { name: string; slug: string; cuisine: string; category: string; description: string; location: string; imageIndex: number; logo: string }): Brand => ({
  ...data,
  image: `/brand_assets/${data.slug}-food.jpg`,
  accent: "#e75f43",
  preliminary: false,
  logo: data.logo,
});

export const brands: Brand[] = [
  createBrand({
    name: "WOW! MOMO", slug: "wow-momo", cuisine: "Tibetan, Momos", category: "Fast Food", description: "Wow! Momo specializes in momos and innovative dumpling variations.", location: "GF 4", imageIndex: 0, logo: "/logos/wow-momo.png", openingHours: "10 AM to 3 AM", signatureItems: "Chicken Darjeeling and Chicken Himalaya Momo", priceRange: "₹99 to ₹300", vegNonVeg: "Both Vegetarian and Non-Vegetarian", dineIn: "All Available"
  }),
  createBrand({
    name: "WOW! CHINA", slug: "wow-china", cuisine: "Fast Food, Chinese", category: "Fast Food", description: "Wow! China offers delicious Asian-inspired fast food including noodles, rice bowls, and starters.", location: "GF 4", imageIndex: 0, logo: "/logos/wow-china.png", openingHours: "10 AM to 3 AM", signatureItems: "Khou suey, Chicken Lollipop", priceRange: "₹99 to ₹300", vegNonVeg: "Both Vegetarian and Non-Vegetarian", dineIn: "All Available"
  }),
  createBrand({
    name: "CAFÉ HONEYMAN", slug: "cafe-honeyman", cuisine: "Food and Beverage", category: "Desserts", description: "Cafe Honeyman focuses entirely on zero refined sugar products sweetened with pure natural honey.", location: "FF 6", imageIndex: 5, logo: "/logos/honeyman.png", openingHours: "11 AM to 11 PM", signatureItems: "Exotic Ice Creams, Burgers, Waffles", priceRange: "₹200 to ₹600", vegNonVeg: "Both Vegetarian and Non-Vegetarian", dineIn: "All Available", instagram: "https://www.instagram.com/honeymancafe_bengaluru", contact: "+91 9886426595", zomatoLink: "https://www.zomato.com/bangalore/cafe-honeyman-bommasandra-bangalore/order", swiggyLink: "https://www.swiggy.com/city/bangalore/cafe-honeyman-neeladri-nagar-electronic-city-rest1420129", specialOffers: "Combos Happy hours on weekdays up to 25% Off"
  }),
  createBrand({
    name: "NUTRAHIVE", slug: "nutrahive", cuisine: "Healthy Food, Continental", category: "Healthy Food", description: "NutraHive offers a thoughtfully curated menu of flavor-driven, nutritious options.", location: "FF 4", imageIndex: 10, logo: "/logos/nutrahive.png", openingHours: "11 AM to 11 PM", signatureItems: "Chicken steak with creamy garlic sauce, One-Pan Veggie Pasta, Avocado Bliss Toast, Smoked Paneer and Apple Salad", priceRange: "₹99 to ₹299", vegNonVeg: "Both Vegetarian and Non-Vegetarian", dineIn: "All Available", menuLink: "https://www.nutrahive.co/menu", zomatoLink: "https://www.zomato.com/bangalore/nutrahive-1-electronic-city-bangalore", swiggyLink: "https://www.swiggy.com/city/bangalore/nutrahive-electronic-city-rest1423081", instagram: "https://www.instagram.com/nutrahive.co/", contact: "+91 6309717817"
  }),
  createBrand({
    name: "A DOUGH COOKIE", slug: "a-dough-cookie", cuisine: "Cookies and Desserts", category: "Desserts", description: "Freshly baked in small batches using premium ingredients, delivering rich flavours and soft textures.", location: "GF 7", imageIndex: 6, logo: "/logos/a-dough-cookie.png", openingHours: "11 AM to 11 PM", signatureItems: "Skillet cookie with softy and cookie tins", priceRange: "₹60 to ₹1800", vegNonVeg: "Vegetarian", dineIn: "All Available", websiteLink: "https://www.adoughcookie.com/", zomatoLink: "https://zomato.onelink.me/xqzv/fxsq1q37", swiggyLink: "https://www.swiggy.com/menu/1403330?source=sharing"
  }),
  createBrand({
    name: "BASKIN ROBBINS", slug: "baskin-robbins", cuisine: "Ice-creams, deserts, sundaes", category: "Desserts", description: "The world's largest chain of ice-cream specialty shops, famous for its iconic “31 flavors” concept.", location: "GF 1", imageIndex: 7, logo: "/logos/baskin-robbins.jpg", openingHours: "11 AM to 12 PM", signatureItems: "More than 35 flavors, cheesecake sundaes, brownie sundaes, sizzling brownies, tiramisu cheesecake, roll cakes, celebration ice-cream cakes, waffle sundaes, fruit cream sundaes, hot fudge toppings", priceRange: "Starts from ₹76", vegNonVeg: "100% Veg", dineIn: "All Available", instagram: "https://www.instagram.com/baskinrobbinsin?stkn=bGFoMnBpb3UxZHg4", contact: "8049585142", specialOffers: "1. Any sundaes at rs 150 on every month 15th. 2. 31% discount on 31th of every month. 3. BR reward program",
    menuItems: [
      { name: "Mississippi Mud - Croissant Cone Sundae", category: "Iconic Chocolate", note: "Flaky, buttery Croissant with Mississippi Mud ice cream, topped with chocolate syrup & chocolate chips.", price: "₹205", image: "" },
      { name: "Chocolate - Choco Lava Cake Dessert", category: "Iconic Chocolate", note: "Warm, gooey Lava Cake with molten chocolate in the core served with a scoop of Chocolate ice cream & toppings.", price: "₹195", image: "" },
      { name: "Vanilla Affair - Brownie Dessert", category: "Iconic Chocolate", note: "Brownie with Vanilla ice cream, topped with hot fudge or butterscotch sauce.", price: "₹195", image: "" },
      { name: "Chocolate Lovers - Waffle Sundae", category: "Iconic Chocolate", note: "Toasty Waffle served with Dutch Chocolate ice cream, gooey brownie chunks, chocolate chips, butterscotch & chocolate sauce.", price: "₹325", image: "" },
      { name: "Vanilla - Sizzling Brownie Dessert", category: "Iconic Chocolate", note: "Gooey Brownie, topped with Vanilla ice cream, almond crunch, drizzled with chocolate sauce.", price: "₹220", image: "" },
      { name: "Iranian Pista Kulfi Sundae", category: "Popular Classics & Nuts", note: "Classic malai kulfi with a layer of vanilla ice cream and Iranian pistachio slivers, topped with rose drizzle and creamy condensed milk.", price: "₹200", image: "" },
      { name: "Golden Ferrero Sundae", category: "Popular Classics & Nuts", note: "Irresistible Gold Medal Ribbon ice cream crowned with chocolate sauce, Ferrero Rocher crumble, whipped cream and a cherry on top.", price: "₹205", image: "" },
      { name: "Nutty Professor", category: "Popular Classics & Nuts", note: "Roasted Californian Almond ice cream with nuts, almonds, cashews and raisins topped with hot fudge sauce and a swirl of whipped cream.", price: "₹240", image: "" },
      { name: "Butterscotch Ribbon - Hot Fudgy Cookie Dessert", category: "Popular Classics & Nuts", note: "Warm, fudgy chocolate chip cookie topped with Butterscotch Ribbon ice cream, warm chocolate sauce and almond crunch.", price: "₹220", image: "" },
      { name: "Biscoff - Cheesecake Dessert", category: "Popular Classics & Nuts", note: "Baked Cheesecake topped with Biscoff ice cream, caramel sauce & whipped cream.", price: "₹300", image: "" },
      { name: "Mango & Cream - Gelato Sundae", category: "Fruity Summer Specials", note: "Italian Mango & Cream Gelato with mango compote, angel cake cubes, decadent sauces.", price: "₹205", image: "" },
      { name: "Vanilla with Mango Sauce - Cheesecake Dessert", category: "Fruity Summer Specials", note: "Baked Cheesecake with Vanilla ice cream & mango topping.", price: "₹300", image: "" },
      { name: "Banana 'N Strawberry - Fruit Cream Sundae", category: "Fruity Summer Specials", note: "Banana 'N Strawberry ice cream layered with a blend of fruits & fruit toppings.", price: "₹210", image: "" },
      { name: "Tiramisu Cheesecake Sundae", category: "All New Indulgent Desserts", note: "Velvety Tiramisu Cheesecake served with Biscoff ice cream topped with butterscotch sauce & biscuit crumble.", price: "₹350", image: "" },
      { name: "Chocolate Muffin Sundae", category: "All New Indulgent Desserts", note: "Decadent Double Chocolate Muffin served with the iconic Mississippi Mud ice cream topped with hot fudge, almond bits & choco chips.", price: "₹340", image: "" },
      { name: "Blueberry Muffin Sundae", category: "All New Indulgent Desserts", note: "Centre-filled Blueberry Crumble Muffin paired with Blueberry Cheesecake Gelato topped with blueberry sauce & wheat crispies.", price: "₹325", image: "" },
      { name: "Walnut Brownie Sundae", category: "All New Indulgent Desserts", note: "Oh-so-fudgy Walnut Brownie paired with Cookies 'N Cream ice cream topped with hot fudge & cookie crumble.", price: "₹275", image: "" },
      { name: "Dubai Chocolate Gelato Sundae", category: "All New Indulgent Desserts", note: "Dubai Chocolate Gelato topped with fudgy chocolate sauce, crispy kataifi & chocolate chips.", price: "₹210", image: "" }
    ]
  }),
  createBrand({
    name: "PATTIKATTAN BIRIYANI", slug: "pattikattan-biriyani", cuisine: "SOUTH INDIAN CUISINE", category: "Biryani", description: "Authentic Tamil Nadu style food in Bangalore.", location: "SHOP 6", imageIndex: 9, logo: "/logos/pattikattan-biriyani.png", openingHours: "12 PM to 11 PM", signatureItems: "CHETTINADU STARTERS, DINDIGUL BIRIYANI, MADURAI PAROTTA VARITIES", priceRange: "₹250 to ₹400", vegNonVeg: "Veg & Non-Vegetarian", dineIn: "All Available", menuLink: "https://drive.google.com/drive/folders/1ZRbMQ8ECnIz5ZmAHF6WJ-DxOSAa2wM9H?usp=sharing", zomatoLink: "https://www.zomato.com/bangalore/pattikattan-biryani-electronic-city-bangalore/order", swiggyLink: "https://www.swiggy.com/menu/1372890?source=sharing", instagram: "https://www.instagram.com/pattikattanbiriyani/?hl=en", contact: "+91 80953 77803", specialOffers: "EXTRA 5% DISCOUNT FOR ROYALTY CARD HOLDER"
  }),
  createBrand({
    name: "CHAI BLISS", slug: "chai-bliss", cuisine: "Chai, Snacks & North Indian", category: "Café / Coffee", description: "Chai Bliss outlet serving chai, bubble tea, snacks, Maggi, sandwiches and North Indian food items.", location: "F3 Alley", imageIndex: 1, logo: "/logos/chai-bliss.png", openingHours: "8:00 AM to 11:00 PM", signatureItems: "Dum Chai, Ginger Jasmine Boba Tea, Kiwi Strawberry Boba Tea, Mango Peach Boba Tea, Plain Maggi, Cheese Maggi, Veg Cheese Maggi, Veggie Feast Sandwich", priceRange: "₹20 to ₹129", vegNonVeg: "Only Vegetarian", dineIn: "All Available", websiteLink: "https://ownly.food/app/brand/BR440051", contact: "8328856009"
  }),
  createBrand({
    name: "NATRAJ CHOLE BHATURE", slug: "natraj-chole-bhature", cuisine: "North Indian", category: "North Indian", description: "Popular North Indian vegetarian food outlet known for Delhi-style chole bhature.", location: "GF 8", imageIndex: 8, logo: "/logos/natraj-chole-bhature.jpg", openingHours: "9:00 AM to 10:00 PM", signatureItems: "Chole Bhature & Sweet Lassi", priceRange: "₹45 to ₹260", vegNonVeg: "Vegetarian", dineIn: "All Available", zomatoLink: "https://www.zomato.com/bangalore/natraj-chole-bhature-1-electronic-city-bangalore/order", swiggyLink: "https://www.swiggy.com/city/bangalore/natraj-chole-bhature-electronic-city-rest1424617", instagram: "https://www.instagram.com/natrajcholebhature?stkn=emZtM3NpOW94Y3do", contact: "7019063120"
  }),
  createBrand({
    name: "BOOM PIZZA", slug: "boom-pizza", cuisine: "PIZZA, GARLIC BREADS", category: "Pizza", description: "Neapolitan wood fired pizza.", location: "G 11", imageIndex: 2, logo: "/logos/boom-pizza.png", openingHours: "11:30 AM to 12:00 AM", signatureItems: "VERDURE PIZZA, MEAT LOVERS PIZZA, PANEER BUTTER MASALA PIZZA, OG PEPPERONI PIZZA", priceRange: "₹99 onwards", vegNonVeg: "Both Veg and Non Veg", dineIn: "All Available", contact: "9663395781"
  }),
  createBrand({
    name: "HALWAII", slug: "halwaii", cuisine: "Sweets, Snacks, Savories", category: "Sweets & snacks", description: "Halwaii – Taste of Kolkata in Silicon Valley.", location: "GF 3", imageIndex: 11, logo: "/logos/halwaii-logo.png", openingHours: "9:00 AM to 10:30 PM", signatureItems: "Sweets, Snacks, Savories, Tandoor", priceRange: "Price on Request", vegNonVeg: "Vegetarian", dineIn: "All Available", swiggyLink: "https://swiggy.com", instagram: "https://instagram.com/Halwaiicafe.blr", contact: "+91 9900006256", specialOffers: "Everything is at special launch price"
  }),
  createBrand({
    name: "BAO", slug: "bao", cuisine: "Pan Asian", category: "Asian", description: "Fluffy Soft Bao's made fresh with Fillings and Toppings that are indulgent and delicious.", location: "GF 9", imageIndex: 3, logo: "/logos/bao-bao.jpg", openingHours: "11 AM to 11 PM", signatureItems: "Dynamite Chicken Bao, Spicy Dan Noodles, Fudgy Boost, Korean Spicy Tenders", priceRange: "₹200 to ₹350", vegNonVeg: "Vegetarian & Non-Vegetarian", dineIn: "All Available", menuLink: "https://drive.google.com/file/d/1By-E3u4cB_xEKpJME-dOrbC3vMNakpN3/view?usp=drive_link", swiggyLink: "https://www.swiggy.com/direct/brand/41648?source=swiggy-direct&subSource=generic", instagram: "https://www.instagram.com/baobao.in?stkn=MjA2cW5mY3pvdWd3", contact: "+91-99168 67801, +91-95002 39208", specialOffers: "Happy Hours : 12pm - 6pm (Mon-Thurs), Wings Thursday"
  }),
  createBrand({
    name: "WUNDER WAFFLE ST.", slug: "wunder-waffle-st", cuisine: "Dessert, Continental, Waffles", category: "Desserts", description: "Your go-to destination for sweet cravings and refreshing brews!", location: "GF 09", imageIndex: 4, logo: "/logos/wunder-waffle-st.jpg", openingHours: "12:00 PM to 11:00 PM", signatureItems: "Oreo Cookie Crumble Waffle, Belgium Hazelnut Chocolate Waffle, Espresso Bubble Tea, Mango Popping Boba", priceRange: "₹150 to ₹300", vegNonVeg: "Vegetarian & Vegan Options", dineIn: "Dine-In, Takeaway & Home Delivery", menuLink: "https://drive.google.com/file/d/1vMbbGbyChWbuJlaeGpylSS55rSAhpzVL/view?usp=drive_link", swiggyLink: "https://www.swiggy.com/menu/1373429?source=sharing", instagram: "https://www.instagram.com/wunderwafflest.in?stkn=ODI5b2xkejBoYWVk", contact: "+91-99168 67801, +91-95002 39208", specialOffers: "Happy Hours : 12pm - 6pm (Mon-Thurs), Popping Wednesday, Bubbly Monday"
  }),
];

const foodImages = [brandImages[0], brandImages[1], brandImages[2], brandImages[4], brandImages[6], brandImages[10]];
const listedDish = (name: string, brand: string, category: string, brandSlug: string, price: string): Dish => ({
  name,
  brand,
  category,
  note: "Signature Item",
  image: `/brand_assets/${brandSlug}-food.jpg`,
  price,
});

export const dishes: Dish[] = [
  listedDish("Khou suey", "WOW! CHINA", "Chinese", "wow-china", "₹99-₹300"),
  listedDish("Chicken Darjeeling Momo", "WOW! MOMO", "Tibetan", "wow-momo", "₹99-₹300"),
  listedDish("Exotic Ice Creams", "CAFÉ HONEYMAN", "Desserts", "cafe-honeyman", "₹200-₹600"),
  listedDish("Chicken steak with creamy garlic sauce", "NUTRAHIVE", "Healthy Food", "nutrahive", "₹99-₹299"),
  listedDish("Skillet cookie with softy", "A DOUGH COOKIE", "Desserts", "a-dough-cookie", "₹60-₹1800"),
  listedDish("Ice Cream", "BASKIN ROBBINS", "Desserts", "baskin-robbins", "₹76+"),
  listedDish("Dum Chai", "CHAI BLISS", "Café / Coffee", "chai-bliss", "₹20-₹129"),
  listedDish("Chole Bhature", "NATRAJ CHOLE BHATURE", "North Indian", "natraj-chole-bhature", "₹45-₹260"),
  listedDish("Verdure Pizza", "BOOM PIZZA", "Pizza", "boom-pizza", "₹99+"),
];

export const events: EventItem[] = [
  {
    title: "Acoustic Friday Nights",
    date: "Every Friday",
    time: "7:00 PM - 10:00 PM",
    tag: "Live Music",
    location: "Main Stage Area",
    image: "https://images.unsplash.com/photo-1516280440502-a2fc986d5e53?auto=format&fit=crop&w=800&q=80",
    description: "Start your weekend right with live acoustic performances from local artists. Grab a drink and your favorite food, and enjoy the vibe."
  },
  {
    title: "Big Screen Match Day",
    date: "Saturday Nights",
    time: "8:00 PM Onwards",
    tag: "Sports Screening",
    location: "The Alley Courtyard",
    image: "https://images.unsplash.com/photo-1614027164847-1b28cfe1df60?auto=format&fit=crop&w=800&q=80",
    description: "Watch the biggest football and cricket matches live on our massive screens. The energy is electric!"
  },
  {
    title: "Mid-week Retro Arcade",
    date: "Every Wednesday",
    time: "5:00 PM - 11:00 PM",
    tag: "Gaming & Fun",
    location: "Arcade Zone",
    image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=800&q=80",
    description: "Challenge your friends to classic retro games. High scores of the night win free desserts from participating brands!"
  }
];

export const offers: { title: string; note: string; label: string; color: string }[] = [
  { title: "Student Thursdays", note: "Show your valid college ID and get a flat 15% discount across all food stalls.", label: "15% OFF", color: "pink" },
  { title: "Midnight Cravings", note: "Grab a 1+1 deal on select desserts from A Dough Cookie and Baskin Robbins after 10 PM.", label: "1+1 DEAL", color: "lime" },
  { title: "Lunch Combo", note: "Special express lunch bowls starting at just ₹149 from Wow! China and Wow! Momo.", label: "₹149 ONLY", color: "orange" },
];

export const gallery = [
  { src: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1200&q=85", alt: "Warmly lit food hall interior", tag: "The space", tall: true },
  { src: "https://images.unsplash.com/photo-1515003197210-e0cd71810b5f?auto=format&fit=crop&w=1200&q=85", alt: "Friends sharing a meal", tag: "The people", tall: false },
  { src: "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?auto=format&fit=crop&w=1200&q=85", alt: "Colorful plated food", tag: "The food", tall: true },
  { src: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=1200&q=85", alt: "Crowd at a live event", tag: "The nights", tall: false },
];

export const facilities = ["Multiple food brands", "Movie Screenings", "Arcade / Gaming", "Takeaway from participating outlets", "Food, people & experience"];

export const faqItems = [
  { question: "Where is F3 Alley?", answer: "F3 Alley is located at 1st cross road, Neeladri Road, Electronic city phase 1, Bengaluru, Karnataka, 560100. Nearest Metro: VM47+GF5. Nearest Bus Stop: Neeladri Nagar Bus Stop and Wipro Gate Bus Stop." },
  { question: "What can I eat at F3 Alley?", answer: "The directory includes momos, Chinese and Indo-Chinese food, wood-fired pizza, bao, waffles, café food, cookies, ice cream, North Indian street food, biryani, healthy bowls, traditional sweets, and more." },
  { question: "Are the brand listings confirmed?", answer: "Yes! The current directory features our officially confirmed brand line-up. Operating hours are generally 11 AM to 11 PM, 7 days a week." },
  { question: "Are events and offers live?", answer: "Check our events and offers pages for the latest updates on sports screenings, gaming, promotions, and new activities." },
];

export const venueAddress = "f3 alley, 1st cross road, Neeladri Road, Electronic city phase 1, Bengaluru, Karnataka, 560100";
export const venueAddressShort = "Neeladri Road · Electronic City Phase I · Bengaluru 560100";
export const venueHours = "11:00 AM – 11:00 PM (All 7 days a week)";
export const imageUrl = (url: string, width = 1400) => `${url}&w=${width}`;

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
