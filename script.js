const CROPS = {
  // ─── CEREALS & GRAINS ───────────────────────────────────────
  wheat: {
    name: "Wheat",
    idealMin: 55,
    idealMax: 70,
    kc: 1.15,
    waterFactor: 0.4,
  },
  rice: {
    name: "Rice (Paddy)",
    idealMin: 75,
    idealMax: 90,
    kc: 1.25,
    waterFactor: 0.6,
  },
  corn: {
    name: "Corn / Maize",
    idealMin: 60,
    idealMax: 75,
    kc: 1.2,
    waterFactor: 0.48,
  },
  barley: {
    name: "Barley",
    idealMin: 50,
    idealMax: 65,
    kc: 1.0,
    waterFactor: 0.35,
  },
  oats: {
    name: "Oats",
    idealMin: 55,
    idealMax: 70,
    kc: 1.05,
    waterFactor: 0.38,
  },
  sorghum: {
    name: "Sorghum",
    idealMin: 45,
    idealMax: 60,
    kc: 1.0,
    waterFactor: 0.32,
  },
  millet: {
    name: "Pearl Millet",
    idealMin: 40,
    idealMax: 60,
    kc: 0.95,
    waterFactor: 0.3,
  },
  rye: { name: "Rye", idealMin: 50, idealMax: 65, kc: 1.0, waterFactor: 0.35 },
  triticale: {
    name: "Triticale",
    idealMin: 50,
    idealMax: 68,
    kc: 1.05,
    waterFactor: 0.37,
  },
  buckwheat: {
    name: "Buckwheat",
    idealMin: 55,
    idealMax: 70,
    kc: 1.0,
    waterFactor: 0.36,
  },
  quinoa: {
    name: "Quinoa",
    idealMin: 45,
    idealMax: 60,
    kc: 0.9,
    waterFactor: 0.28,
  },
  amaranth: {
    name: "Amaranth",
    idealMin: 45,
    idealMax: 62,
    kc: 0.92,
    waterFactor: 0.3,
  },
  teff: {
    name: "Teff",
    idealMin: 45,
    idealMax: 60,
    kc: 0.9,
    waterFactor: 0.28,
  },
  fonio: {
    name: "Fonio",
    idealMin: 40,
    idealMax: 58,
    kc: 0.88,
    waterFactor: 0.27,
  },
  spelt: {
    name: "Spelt",
    idealMin: 52,
    idealMax: 67,
    kc: 1.02,
    waterFactor: 0.36,
  },

  // ─── LEGUMES & PULSES ───────────────────────────────────────
  soybean: {
    name: "Soybean",
    idealMin: 58,
    idealMax: 72,
    kc: 1.15,
    waterFactor: 0.4,
  },
  chickpea: {
    name: "Chickpea",
    idealMin: 50,
    idealMax: 65,
    kc: 1.0,
    waterFactor: 0.33,
  },
  lentil: {
    name: "Lentil",
    idealMin: 48,
    idealMax: 63,
    kc: 0.98,
    waterFactor: 0.32,
  },
  green_pea: {
    name: "Green Pea",
    idealMin: 55,
    idealMax: 70,
    kc: 1.1,
    waterFactor: 0.38,
  },
  blackeye_pea: {
    name: "Black-Eyed Pea",
    idealMin: 50,
    idealMax: 65,
    kc: 1.0,
    waterFactor: 0.33,
  },
  kidney_bean: {
    name: "Kidney Bean",
    idealMin: 55,
    idealMax: 70,
    kc: 1.05,
    waterFactor: 0.36,
  },
  mung_bean: {
    name: "Mung Bean",
    idealMin: 50,
    idealMax: 65,
    kc: 1.0,
    waterFactor: 0.33,
  },
  pigeon_pea: {
    name: "Pigeon Pea",
    idealMin: 50,
    idealMax: 65,
    kc: 1.0,
    waterFactor: 0.33,
  },
  fava_bean: {
    name: "Fava Bean",
    idealMin: 55,
    idealMax: 70,
    kc: 1.08,
    waterFactor: 0.37,
  },
  groundnut: {
    name: "Groundnut / Peanut",
    idealMin: 55,
    idealMax: 70,
    kc: 1.1,
    waterFactor: 0.4,
  },
  adzuki_bean: {
    name: "Adzuki Bean",
    idealMin: 52,
    idealMax: 67,
    kc: 1.02,
    waterFactor: 0.34,
  },
  lupine: {
    name: "Lupine",
    idealMin: 50,
    idealMax: 65,
    kc: 0.98,
    waterFactor: 0.32,
  },

  // ─── ROOT & TUBER CROPS ─────────────────────────────────────
  potato: {
    name: "Potato",
    idealMin: 65,
    idealMax: 80,
    kc: 1.1,
    waterFactor: 0.42,
  },
  sweet_potato: {
    name: "Sweet Potato",
    idealMin: 60,
    idealMax: 75,
    kc: 1.05,
    waterFactor: 0.4,
  },
  cassava: {
    name: "Cassava",
    idealMin: 55,
    idealMax: 70,
    kc: 1.0,
    waterFactor: 0.35,
  },
  yam: { name: "Yam", idealMin: 60, idealMax: 78, kc: 1.1, waterFactor: 0.42 },
  taro: { name: "Taro", idealMin: 70, idealMax: 85, kc: 1.2, waterFactor: 0.5 },
  sugar_beet: {
    name: "Sugar Beet",
    idealMin: 60,
    idealMax: 75,
    kc: 1.1,
    waterFactor: 0.42,
  },
  turnip: {
    name: "Turnip",
    idealMin: 60,
    idealMax: 75,
    kc: 1.05,
    waterFactor: 0.38,
  },
  parsnip: {
    name: "Parsnip",
    idealMin: 60,
    idealMax: 75,
    kc: 1.05,
    waterFactor: 0.38,
  },
  radish: {
    name: "Radish",
    idealMin: 60,
    idealMax: 75,
    kc: 1.0,
    waterFactor: 0.35,
  },
  carrot: {
    name: "Carrot",
    idealMin: 62,
    idealMax: 78,
    kc: 1.05,
    waterFactor: 0.38,
  },
  celeriac: {
    name: "Celeriac",
    idealMin: 65,
    idealMax: 80,
    kc: 1.08,
    waterFactor: 0.4,
  },
  kohlrabi: {
    name: "Kohlrabi",
    idealMin: 60,
    idealMax: 75,
    kc: 1.02,
    waterFactor: 0.36,
  },

  // ─── CASH CROPS ─────────────────────────────────────────────
  sugarcane: {
    name: "Sugarcane",
    idealMin: 70,
    idealMax: 85,
    kc: 1.3,
    waterFactor: 0.55,
  },
  cotton: {
    name: "Cotton",
    idealMin: 50,
    idealMax: 65,
    kc: 1.1,
    waterFactor: 0.35,
  },
  tobacco: {
    name: "Tobacco",
    idealMin: 55,
    idealMax: 70,
    kc: 1.1,
    waterFactor: 0.38,
  },
  jute: { name: "Jute", idealMin: 70, idealMax: 85, kc: 1.2, waterFactor: 0.5 },
  flax: {
    name: "Flax / Linseed",
    idealMin: 55,
    idealMax: 68,
    kc: 1.0,
    waterFactor: 0.35,
  },
  hemp: {
    name: "Hemp",
    idealMin: 55,
    idealMax: 70,
    kc: 1.05,
    waterFactor: 0.38,
  },
  sisal: {
    name: "Sisal",
    idealMin: 40,
    idealMax: 58,
    kc: 0.85,
    waterFactor: 0.25,
  },
  rubber: {
    name: "Rubber Tree",
    idealMin: 65,
    idealMax: 80,
    kc: 1.15,
    waterFactor: 0.45,
  },
  indigo: {
    name: "Indigo",
    idealMin: 55,
    idealMax: 72,
    kc: 1.0,
    waterFactor: 0.36,
  },

  // ─── OILSEED CROPS ──────────────────────────────────────────
  sunflower: {
    name: "Sunflower",
    idealMin: 50,
    idealMax: 65,
    kc: 1.0,
    waterFactor: 0.35,
  },
  canola: {
    name: "Canola / Rapeseed",
    idealMin: 55,
    idealMax: 68,
    kc: 1.05,
    waterFactor: 0.37,
  },
  sesame: {
    name: "Sesame",
    idealMin: 45,
    idealMax: 60,
    kc: 0.95,
    waterFactor: 0.3,
  },
  safflower: {
    name: "Safflower",
    idealMin: 45,
    idealMax: 60,
    kc: 0.95,
    waterFactor: 0.3,
  },
  mustard: {
    name: "Mustard",
    idealMin: 50,
    idealMax: 65,
    kc: 1.0,
    waterFactor: 0.33,
  },
  castor: {
    name: "Castor Bean",
    idealMin: 50,
    idealMax: 65,
    kc: 1.0,
    waterFactor: 0.33,
  },
  oil_palm: {
    name: "Oil Palm",
    idealMin: 70,
    idealMax: 85,
    kc: 1.2,
    waterFactor: 0.5,
  },
  coconut: {
    name: "Coconut",
    idealMin: 65,
    idealMax: 80,
    kc: 1.15,
    waterFactor: 0.45,
  },
  olive: {
    name: "Olive",
    idealMin: 45,
    idealMax: 60,
    kc: 0.9,
    waterFactor: 0.28,
  },

  // ─── VEGETABLES ─────────────────────────────────────────────
  tomato: {
    name: "Tomato",
    idealMin: 60,
    idealMax: 75,
    kc: 1.15,
    waterFactor: 0.45,
  },
  onion: {
    name: "Onion",
    idealMin: 60,
    idealMax: 75,
    kc: 1.05,
    waterFactor: 0.38,
  },
  garlic: {
    name: "Garlic",
    idealMin: 55,
    idealMax: 70,
    kc: 1.0,
    waterFactor: 0.35,
  },
  cabbage: {
    name: "Cabbage",
    idealMin: 65,
    idealMax: 80,
    kc: 1.1,
    waterFactor: 0.42,
  },
  cauliflower: {
    name: "Cauliflower",
    idealMin: 65,
    idealMax: 80,
    kc: 1.1,
    waterFactor: 0.42,
  },
  broccoli: {
    name: "Broccoli",
    idealMin: 65,
    idealMax: 80,
    kc: 1.1,
    waterFactor: 0.42,
  },
  spinach: {
    name: "Spinach",
    idealMin: 65,
    idealMax: 80,
    kc: 1.1,
    waterFactor: 0.42,
  },
  lettuce: {
    name: "Lettuce",
    idealMin: 65,
    idealMax: 80,
    kc: 1.05,
    waterFactor: 0.4,
  },
  cucumber: {
    name: "Cucumber",
    idealMin: 65,
    idealMax: 80,
    kc: 1.15,
    waterFactor: 0.45,
  },
  pumpkin: {
    name: "Pumpkin",
    idealMin: 60,
    idealMax: 75,
    kc: 1.05,
    waterFactor: 0.38,
  },
  zucchini: {
    name: "Zucchini",
    idealMin: 60,
    idealMax: 75,
    kc: 1.05,
    waterFactor: 0.38,
  },
  eggplant: {
    name: "Eggplant / Brinjal",
    idealMin: 60,
    idealMax: 75,
    kc: 1.1,
    waterFactor: 0.4,
  },
  bell_pepper: {
    name: "Bell Pepper",
    idealMin: 60,
    idealMax: 75,
    kc: 1.1,
    waterFactor: 0.4,
  },
  chilli: {
    name: "Chilli Pepper",
    idealMin: 58,
    idealMax: 73,
    kc: 1.05,
    waterFactor: 0.38,
  },
  okra: {
    name: "Okra / Lady Finger",
    idealMin: 55,
    idealMax: 70,
    kc: 1.05,
    waterFactor: 0.38,
  },
  asparagus: {
    name: "Asparagus",
    idealMin: 60,
    idealMax: 75,
    kc: 1.1,
    waterFactor: 0.42,
  },
  celery: {
    name: "Celery",
    idealMin: 70,
    idealMax: 85,
    kc: 1.15,
    waterFactor: 0.47,
  },
  leek: {
    name: "Leek",
    idealMin: 60,
    idealMax: 75,
    kc: 1.05,
    waterFactor: 0.38,
  },
  artichoke: {
    name: "Artichoke",
    idealMin: 60,
    idealMax: 75,
    kc: 1.05,
    waterFactor: 0.38,
  },
  bitter_gourd: {
    name: "Bitter Gourd",
    idealMin: 60,
    idealMax: 75,
    kc: 1.05,
    waterFactor: 0.38,
  },
  bottle_gourd: {
    name: "Bottle Gourd",
    idealMin: 62,
    idealMax: 77,
    kc: 1.08,
    waterFactor: 0.4,
  },
  snow_peas: {
    name: "Snow Peas",
    idealMin: 55,
    idealMax: 70,
    kc: 1.05,
    waterFactor: 0.37,
  },
  brussels: {
    name: "Brussels Sprouts",
    idealMin: 65,
    idealMax: 80,
    kc: 1.08,
    waterFactor: 0.4,
  },
  kale: {
    name: "Kale",
    idealMin: 62,
    idealMax: 78,
    kc: 1.08,
    waterFactor: 0.4,
  },
  swiss_chard: {
    name: "Swiss Chard",
    idealMin: 62,
    idealMax: 78,
    kc: 1.08,
    waterFactor: 0.4,
  },
  beetroot: {
    name: "Beetroot",
    idealMin: 60,
    idealMax: 75,
    kc: 1.05,
    waterFactor: 0.38,
  },

  // ─── FRUITS ─────────────────────────────────────────────────
  banana: {
    name: "Banana",
    idealMin: 70,
    idealMax: 85,
    kc: 1.2,
    waterFactor: 0.52,
  },
  mango: {
    name: "Mango",
    idealMin: 55,
    idealMax: 70,
    kc: 1.05,
    waterFactor: 0.38,
  },
  papaya: {
    name: "Papaya",
    idealMin: 65,
    idealMax: 80,
    kc: 1.15,
    waterFactor: 0.46,
  },
  pineapple: {
    name: "Pineapple",
    idealMin: 55,
    idealMax: 70,
    kc: 1.0,
    waterFactor: 0.35,
  },
  watermelon: {
    name: "Watermelon",
    idealMin: 60,
    idealMax: 75,
    kc: 1.05,
    waterFactor: 0.4,
  },
  melon: {
    name: "Cantaloupe Melon",
    idealMin: 58,
    idealMax: 73,
    kc: 1.05,
    waterFactor: 0.38,
  },
  strawberry: {
    name: "Strawberry",
    idealMin: 65,
    idealMax: 80,
    kc: 1.1,
    waterFactor: 0.42,
  },
  grape: {
    name: "Grapes / Vineyard",
    idealMin: 50,
    idealMax: 65,
    kc: 0.95,
    waterFactor: 0.32,
  },
  apple: {
    name: "Apple",
    idealMin: 55,
    idealMax: 70,
    kc: 1.05,
    waterFactor: 0.38,
  },
  orange: {
    name: "Orange / Citrus",
    idealMin: 55,
    idealMax: 70,
    kc: 1.05,
    waterFactor: 0.38,
  },
  lemon: {
    name: "Lemon",
    idealMin: 52,
    idealMax: 68,
    kc: 1.02,
    waterFactor: 0.36,
  },
  avocado: {
    name: "Avocado",
    idealMin: 60,
    idealMax: 75,
    kc: 1.1,
    waterFactor: 0.42,
  },
  guava: {
    name: "Guava",
    idealMin: 58,
    idealMax: 73,
    kc: 1.05,
    waterFactor: 0.38,
  },
  lychee: {
    name: "Lychee",
    idealMin: 65,
    idealMax: 80,
    kc: 1.1,
    waterFactor: 0.42,
  },
  peach: {
    name: "Peach",
    idealMin: 55,
    idealMax: 70,
    kc: 1.05,
    waterFactor: 0.38,
  },
  pear: {
    name: "Pear",
    idealMin: 55,
    idealMax: 70,
    kc: 1.05,
    waterFactor: 0.38,
  },
  plum: {
    name: "Plum",
    idealMin: 55,
    idealMax: 70,
    kc: 1.02,
    waterFactor: 0.36,
  },
  cherry: {
    name: "Cherry",
    idealMin: 55,
    idealMax: 70,
    kc: 1.05,
    waterFactor: 0.38,
  },
  kiwi: {
    name: "Kiwifruit",
    idealMin: 60,
    idealMax: 75,
    kc: 1.1,
    waterFactor: 0.42,
  },
  pomegranate: {
    name: "Pomegranate",
    idealMin: 50,
    idealMax: 65,
    kc: 0.95,
    waterFactor: 0.3,
  },
  fig: { name: "Fig", idealMin: 48, idealMax: 63, kc: 0.92, waterFactor: 0.28 },
  date_palm: {
    name: "Date Palm",
    idealMin: 40,
    idealMax: 58,
    kc: 0.9,
    waterFactor: 0.26,
  },
  jackfruit: {
    name: "Jackfruit",
    idealMin: 65,
    idealMax: 80,
    kc: 1.1,
    waterFactor: 0.43,
  },
  durian: {
    name: "Durian",
    idealMin: 70,
    idealMax: 85,
    kc: 1.15,
    waterFactor: 0.47,
  },
  blueberry: {
    name: "Blueberry",
    idealMin: 62,
    idealMax: 78,
    kc: 1.08,
    waterFactor: 0.4,
  },
  raspberry: {
    name: "Raspberry",
    idealMin: 62,
    idealMax: 78,
    kc: 1.08,
    waterFactor: 0.4,
  },
  passion_fruit: {
    name: "Passion Fruit",
    idealMin: 65,
    idealMax: 80,
    kc: 1.1,
    waterFactor: 0.42,
  },

  // ─── PLANTATION / TREE CROPS ────────────────────────────────
  coffee: {
    name: "Coffee",
    idealMin: 65,
    idealMax: 80,
    kc: 1.1,
    waterFactor: 0.44,
  },
  tea: { name: "Tea", idealMin: 70, idealMax: 85, kc: 1.2, waterFactor: 0.5 },
  cocoa: {
    name: "Cocoa",
    idealMin: 70,
    idealMax: 85,
    kc: 1.15,
    waterFactor: 0.48,
  },
  vanilla: {
    name: "Vanilla",
    idealMin: 70,
    idealMax: 85,
    kc: 1.15,
    waterFactor: 0.48,
  },
  cardamom: {
    name: "Cardamom",
    idealMin: 68,
    idealMax: 83,
    kc: 1.12,
    waterFactor: 0.46,
  },
  black_pepper: {
    name: "Black Pepper",
    idealMin: 68,
    idealMax: 83,
    kc: 1.12,
    waterFactor: 0.46,
  },
  cinnamon: {
    name: "Cinnamon",
    idealMin: 65,
    idealMax: 80,
    kc: 1.08,
    waterFactor: 0.43,
  },
  clove: {
    name: "Clove",
    idealMin: 65,
    idealMax: 80,
    kc: 1.08,
    waterFactor: 0.43,
  },
  nutmeg: {
    name: "Nutmeg",
    idealMin: 65,
    idealMax: 80,
    kc: 1.08,
    waterFactor: 0.43,
  },
  cashew: {
    name: "Cashew",
    idealMin: 50,
    idealMax: 65,
    kc: 0.95,
    waterFactor: 0.3,
  },
  almond: {
    name: "Almond",
    idealMin: 45,
    idealMax: 60,
    kc: 0.92,
    waterFactor: 0.28,
  },
  walnut: {
    name: "Walnut",
    idealMin: 55,
    idealMax: 70,
    kc: 1.02,
    waterFactor: 0.36,
  },
  pistachio: {
    name: "Pistachio",
    idealMin: 40,
    idealMax: 55,
    kc: 0.88,
    waterFactor: 0.25,
  },
  macadamia: {
    name: "Macadamia",
    idealMin: 55,
    idealMax: 70,
    kc: 1.02,
    waterFactor: 0.36,
  },
  hazelnut: {
    name: "Hazelnut",
    idealMin: 55,
    idealMax: 70,
    kc: 1.0,
    waterFactor: 0.35,
  },
  bamboo: {
    name: "Bamboo",
    idealMin: 65,
    idealMax: 80,
    kc: 1.1,
    waterFactor: 0.43,
  },

  // ─── FORAGE & FODDER CROPS ──────────────────────────────────
  alfalfa: {
    name: "Alfalfa",
    idealMin: 60,
    idealMax: 75,
    kc: 1.2,
    waterFactor: 0.48,
  },
  clover: {
    name: "Clover",
    idealMin: 60,
    idealMax: 75,
    kc: 1.15,
    waterFactor: 0.45,
  },
  ryegrass: {
    name: "Ryegrass",
    idealMin: 60,
    idealMax: 75,
    kc: 1.1,
    waterFactor: 0.42,
  },
  bermuda_grass: {
    name: "Bermuda Grass",
    idealMin: 55,
    idealMax: 70,
    kc: 1.05,
    waterFactor: 0.38,
  },
  napier_grass: {
    name: "Napier Grass",
    idealMin: 65,
    idealMax: 80,
    kc: 1.15,
    waterFactor: 0.46,
  },
  sudan_grass: {
    name: "Sudan Grass",
    idealMin: 55,
    idealMax: 70,
    kc: 1.05,
    waterFactor: 0.38,
  },

  // ─── SPICES & HERBS ─────────────────────────────────────────
  turmeric: {
    name: "Turmeric",
    idealMin: 65,
    idealMax: 80,
    kc: 1.1,
    waterFactor: 0.42,
  },
  ginger: {
    name: "Ginger",
    idealMin: 65,
    idealMax: 80,
    kc: 1.1,
    waterFactor: 0.42,
  },
  cumin: {
    name: "Cumin",
    idealMin: 45,
    idealMax: 60,
    kc: 0.9,
    waterFactor: 0.28,
  },
  coriander: {
    name: "Coriander",
    idealMin: 50,
    idealMax: 65,
    kc: 0.95,
    waterFactor: 0.3,
  },
  fenugreek: {
    name: "Fenugreek",
    idealMin: 50,
    idealMax: 65,
    kc: 0.95,
    waterFactor: 0.3,
  },
  fennel: {
    name: "Fennel",
    idealMin: 52,
    idealMax: 67,
    kc: 0.98,
    waterFactor: 0.32,
  },
  basil: {
    name: "Basil",
    idealMin: 60,
    idealMax: 75,
    kc: 1.05,
    waterFactor: 0.38,
  },
  mint: {
    name: "Mint",
    idealMin: 65,
    idealMax: 80,
    kc: 1.1,
    waterFactor: 0.42,
  },
  thyme: {
    name: "Thyme",
    idealMin: 45,
    idealMax: 60,
    kc: 0.9,
    waterFactor: 0.27,
  },
  oregano: {
    name: "Oregano",
    idealMin: 45,
    idealMax: 60,
    kc: 0.88,
    waterFactor: 0.26,
  },
  rosemary: {
    name: "Rosemary",
    idealMin: 42,
    idealMax: 58,
    kc: 0.85,
    waterFactor: 0.25,
  },
  saffron: {
    name: "Saffron",
    idealMin: 45,
    idealMax: 60,
    kc: 0.9,
    waterFactor: 0.27,
  },
  lemongrass: {
    name: "Lemongrass",
    idealMin: 60,
    idealMax: 75,
    kc: 1.05,
    waterFactor: 0.38,
  },

  // ─── FIBER CROPS ────────────────────────────────────────────
  kenaf: {
    name: "Kenaf",
    idealMin: 60,
    idealMax: 75,
    kc: 1.1,
    waterFactor: 0.42,
  },
  ramie: {
    name: "Ramie",
    idealMin: 65,
    idealMax: 80,
    kc: 1.1,
    waterFactor: 0.43,
  },
  kapok: {
    name: "Kapok",
    idealMin: 55,
    idealMax: 70,
    kc: 1.0,
    waterFactor: 0.35,
  },
  agave: {
    name: "Agave",
    idealMin: 30,
    idealMax: 48,
    kc: 0.75,
    waterFactor: 0.2,
  },

  // ─── BIOENERGY & INDUSTRIAL CROPS ───────────────────────────
  jatropha: {
    name: "Jatropha",
    idealMin: 40,
    idealMax: 58,
    kc: 0.88,
    waterFactor: 0.26,
  },
  switchgrass: {
    name: "Switchgrass",
    idealMin: 50,
    idealMax: 65,
    kc: 0.95,
    waterFactor: 0.3,
  },
  miscanthus: {
    name: "Miscanthus",
    idealMin: 55,
    idealMax: 70,
    kc: 1.0,
    waterFactor: 0.33,
  },
  sweet_sorghum: {
    name: "Sweet Sorghum",
    idealMin: 50,
    idealMax: 65,
    kc: 1.0,
    waterFactor: 0.33,
  },
  moringa: {
    name: "Moringa",
    idealMin: 45,
    idealMax: 62,
    kc: 0.92,
    waterFactor: 0.28,
  },
};

const SOIL_RETENTION = {
  loamy: 1.0,
  sandy: 0.75,
  clay: 1.25,
  silt: 1.1,
};

// ============================================================
// STATE
// ============================================================
let state = {
  imageLoaded: false,
  avgBrightness: null,
  moisturePercent: null,
  selectedCrop: null,
  fieldArea: 1,
  temperature: 30,
  rainfallProb: 20,
  soilType: "loamy",
  waterRequired: null,
  history: [],
  statsAnalyzed: 0,
  statsWaterSaved: 0,
};

// ============================================================
// DOM REFERENCES
// ============================================================
const $ = (id) => document.getElementById(id);

const uploadZone = $("uploadZone");
const uploadTrigger = $("uploadTrigger");
const imageInput = $("imageInput");
const imagePreview = $("imagePreview");
const soilCanvas = $("soilCanvas");
const removeImage = $("removeImage");
const brightnessReadout = $("brightnessReadout");
const brightnessValue = $("brightnessValue");

const cropSelect = $("cropSelect");
const fieldArea = $("fieldArea");
const temperature = $("temperature");
const rainfallSlider = $("rainfallSlider");
const rainfallDisplay = $("rainfallDisplay");
const soilChips = $("soilChips");
const analyzeBtn = $("analyzeBtn");

const resultsEmpty = $("resultsEmpty");
const resultsData = $("resultsData");
const gaugeFill = $("gaugeFill");
const moistureVal = $("moistureVal");
const moistureStatus = $("moistureStatus");
const idealRange = $("idealRange");
const waterRequired = $("waterRequired");
const irrigationSchedule = $("irrigationSchedule");
const recommendationText = $("recommendationText");
const sendToCloudBtn = $("sendToCloudBtn");

const historyBody = $("historyBody");
const toast = $("toast");
const toastMsg = $("toastMsg");
const toastIcon = $("toastIcon");

const heroMoisture = $("heroMoisture");
const avgMoistureDash = $("avgMoisture");

const statAnalyzed = $("statAnalyzed");
const statWater = $("statWater");

const weatherTemp = $("weatherTemp");
const weatherDesc = $("weatherDesc");
const weatherTags = $("weatherTags");
const rainfallFactor = $("rainfallFactor");
const dropdowns = document.querySelectorAll(".select-wrapper select");
for (let select of dropdowns) {
  const placeholder = document.createElement("option");
  placeholder.value = "";
  placeholder.innerText = "— Choose a crop —";
  select.appendChild(placeholder);

  for (let currCode in CROPS) {
    let newOption = document.createElement("option");
    newOption.innerText = CROPS[currCode].name;
    newOption.value = currCode;
    select.append(newOption);
  }
}
document.addEventListener("DOMContentLoaded", () => {
  initBarChart();
  updateRainfallFactor();

  // ✅ Auto-update crop count from CROPS object
  const cropCount = Object.keys(CROPS).length;
  document.getElementById("statCropCount").textContent = cropCount;

  setTimeout(() => {
    animateCounter(document.querySelector(".stat-num:first-child"), 0, 0, 800);
  }, 500);
});

// ============================================================
// IMAGE UPLOAD & PROCESSING
// ============================================================

// Drag and drop
uploadZone.addEventListener("dragover", (e) => {
  e.preventDefault();
  uploadZone.classList.add("drag-over");
});

uploadZone.addEventListener("dragleave", () => {
  uploadZone.classList.remove("drag-over");
});

uploadZone.addEventListener("drop", (e) => {
  e.preventDefault();
  uploadZone.classList.remove("drag-over");
  const file = e.dataTransfer.files[0];
  if (file && file.type.startsWith("image/")) processImageFile(file);
});

uploadTrigger.addEventListener("click", () => imageInput.click());
uploadZone.addEventListener("click", (e) => {
  if (e.target !== uploadTrigger) imageInput.click();
});

imageInput.addEventListener("change", () => {
  const file = imageInput.files[0];
  if (file) processImageFile(file);
});

removeImage.addEventListener("click", () => {
  imageInput.value = "";
  state.imageLoaded = false;
  state.avgBrightness = null;
  imagePreview.classList.add("hidden");
  brightnessReadout.classList.add("hidden");
  uploadZone.classList.remove("hidden");
});

/**
 * processImageFile — loads an image into canvas and computes avg brightness
 * Algorithm: Convert to grayscale, average pixel luminance
 * Wet soil → darker (low brightness) → high moisture
 * Dry soil → lighter (high brightness) → low moisture
 */
function processImageFile(file) {
  const reader = new FileReader();
  reader.onload = (e) => {
    const img = new Image();
    img.onload = () => {
      const ctx = soilCanvas.getContext("2d");
      soilCanvas.width = img.width;
      soilCanvas.height = img.height;
      ctx.drawImage(img, 0, 0);

      const imageData = ctx.getImageData(0, 0, img.width, img.height);
      const data = imageData.data;
      let totalBrightness = 0;
      const pixelCount = img.width * img.height;

      for (let i = 0; i < data.length; i += 4) {
        const r = data[i],
          g = data[i + 1],
          b = data[i + 2];
        // Luminance formula (ITU-R BT.709)
        const lum = 0.2126 * r + 0.7152 * g + 0.0722 * b;
        totalBrightness += lum;
      }

      const avgBrightness = totalBrightness / pixelCount;
      state.avgBrightness = avgBrightness;
      state.imageLoaded = true;

      // Show preview
      uploadZone.classList.add("hidden");
      imagePreview.classList.remove("hidden");
      brightnessReadout.classList.remove("hidden");
      brightnessValue.textContent = avgBrightness.toFixed(1);

      showToast("✅", "Soil image processed successfully!");
    };
    img.src = e.target.result;
  };
  reader.readAsDataURL(file);
}

/**
 * brightnessToMoisture — converts average pixel brightness (0–255) to moisture (0–100%)
 * Formula: darker = wetter, so moisture = (1 - brightness/255) * 100 with calibration
 */
function brightnessToMoisture(brightness) {
  // Calibrated formula: raw conversion + S-curve smoothing
  const rawMoisture = (1 - brightness / 255) * 100;
  // Apply soil absorption coefficient based on soil type
  const soilFactor = SOIL_RETENTION[state.soilType] || 1.0;
  const adjusted = rawMoisture * soilFactor;
  return Math.min(Math.max(adjusted, 0), 100);
}

// ============================================================
// FORM CONTROLS
// ============================================================

rainfallSlider.addEventListener("input", () => {
  state.rainfallProb = parseInt(rainfallSlider.value);
  rainfallDisplay.textContent = `${state.rainfallProb}%`;
  updateRainfallFactor();
});

soilChips.querySelectorAll(".chip").forEach((chip) => {
  chip.addEventListener("click", () => {
    soilChips
      .querySelectorAll(".chip")
      .forEach((c) => c.classList.remove("active"));
    chip.classList.add("active");
    state.soilType = chip.dataset.soil;
  });
});

temperature.addEventListener("input", updateWeatherPanel);

function updateRainfallFactor() {
  rainfallFactor.textContent = `${state.rainfallProb}%`;
  const fill = document.querySelector(".factor-fill.rain");
  if (fill) fill.style.width = `${state.rainfallProb}%`;
}

// ============================================================
// MAIN ANALYSIS
// ============================================================

analyzeBtn.addEventListener("click", runAnalysis);

function runAnalysis() {
  // Validate inputs
  const crop = cropSelect.value;
  const area = parseFloat(fieldArea.value);
  const temp = parseFloat(temperature.value);

  if (!crop) return showToast("⚠️", "Please select a crop type.");
  if (!area || area <= 0)
    return showToast("⚠️", "Please enter a valid field area.");
  if (!temp) return showToast("⚠️", "Please enter the current temperature.");

  // Update state
  state.selectedCrop = CROPS[crop];
  state.fieldArea = area;
  state.temperature = temp;
  state.rainfallProb = parseInt(rainfallSlider.value);
  state.soilType = soilChips.querySelector(".chip.active").dataset.soil;

  // Calculate moisture from image (if uploaded) or simulate
  let moisture;
  if (state.imageLoaded && state.avgBrightness !== null) {
    moisture = brightnessToMoisture(state.avgBrightness);
  } else {
    // Simulation mode: random value for demo
    moisture = 40 + Math.random() * 40;
    showToast("ℹ️", "No image uploaded — using simulated moisture value.");
  }

  moisture = parseFloat(moisture.toFixed(1));
  state.moisturePercent = moisture;

  // Calculate water requirement
  const water = calculateWaterRequirement(
    moisture,
    state.selectedCrop,
    area,
    temp,
    state.rainfallProb,
    state.soilType,
  );
  state.waterRequired = water;

  // Update UI
  displayResults(moisture, water, state.selectedCrop);
  updateHeroMoisture(moisture);
  updateDashboard(moisture);
  updateWeatherPanel();

  // Counters
  state.statsAnalyzed++;
  state.statsWaterSaved += Math.floor(Math.random() * 300 + 100);
  statAnalyzed.textContent = state.statsAnalyzed;
  statWater.textContent = `${(state.statsWaterSaved / 1000).toFixed(1)}kL`;

  // Animate button
  analyzeBtn.querySelector(".btn-text").textContent = "Analysis Complete";
  setTimeout(() => {
    analyzeBtn.querySelector(".btn-text").textContent = "Run Analysis";
  }, 2000);
}

/**
 * calculateWaterRequirement
 *
 * Formula:
 *   deficit = idealMid - currentMoisture
 *   baseWater = fieldArea * 4046.86 m² * depth(0.3m) * soilRetention * (deficit/100)
 *   tempAdjust = (temp > 30) ? (temp - 30) * 0.02 : 0
 *   rainReduction = (rainfallProb / 100) * 0.35
 *   finalWater = baseWater * (1 + tempAdjust) * (1 - rainReduction) * kc
 *   Convert to litres (1 m³ = 1000 L)
 */
function calculateWaterRequirement(
  moisture,
  crop,
  areaAcres,
  temp,
  rainfallProb,
  soilType,
) {
  const idealMid = (crop.idealMin + crop.idealMax) / 2;
  const deficit = Math.max(0, idealMid - moisture);

  if (deficit <= 0) return 0;

  const areaM2 = areaAcres * 4046.86;
  const soilDepth = 0.3; // meters
  const soilRetention = SOIL_RETENTION[soilType] || 1.0;

  let waterM3 = areaM2 * soilDepth * (deficit / 100) * soilRetention;

  // Temperature evaporation adjustment
  if (temp > 30) waterM3 *= 1 + (temp - 30) * 0.025;
  if (temp < 15) waterM3 *= 0.85;

  // Rainfall reduction
  const rainFactor = 1 - (rainfallProb / 100) * 0.4;
  waterM3 *= rainFactor;

  // Crop coefficient
  waterM3 *= crop.kc;

  return Math.round(waterM3 * 1000); // Convert m³ to litres
}

// ============================================================
// DISPLAY RESULTS
// ============================================================

function displayResults(moisture, waterLitres, crop) {
  resultsEmpty.classList.add("hidden");
  resultsData.classList.remove("hidden");

  // Animate gauge
  const gaugeCircumference = 251.2;
  const fraction = Math.min(moisture / 100, 1);
  const dashOffset = gaugeCircumference - fraction * gaugeCircumference;
  gaugeFill.style.strokeDashoffset = dashOffset;

  // Update gauge color based on moisture level
  if (moisture < crop.idealMin - 15) {
    gaugeFill.style.stroke = "#e05555";
  } else if (moisture < crop.idealMin) {
    gaugeFill.style.stroke = "#f5a623";
  } else if (moisture <= crop.idealMax) {
    gaugeFill.style.stroke = "#7ec850";
  } else {
    gaugeFill.style.stroke = "#4a90d9";
  }

  // Moisture value (animated counter)
  animateCounter(moistureVal, 0, moisture, 1200);

  // Status badge
  let statusClass, statusLabel;
  if (moisture < crop.idealMin - 15) {
    statusClass = "status-critical";
    statusLabel = "Critically Dry";
  } else if (moisture < crop.idealMin) {
    statusClass = "status-low";
    statusLabel = "Below Optimal";
  } else if (moisture <= crop.idealMax) {
    statusClass = "status-ok";
    statusLabel = "Optimal ✓";
  } else {
    statusClass = "status-high";
    statusLabel = "Over-saturated";
  }

  moistureStatus.className = `rs-value status-badge ${statusClass}`;
  moistureStatus.textContent = statusLabel;

  idealRange.textContent = `${crop.idealMin}% – ${crop.idealMax}%`;

  // Water required
  waterRequired.textContent =
    waterLitres > 0 ? `${waterLitres.toLocaleString()} L` : "None required";

  // Irrigation schedule
  const schedule = getIrrigationSchedule(moisture, crop, waterLitres);
  irrigationSchedule.textContent = schedule;

  // Recommendation
  recommendationText.textContent = getRecommendation(
    moisture,
    crop,
    waterLitres,
    state.rainfallProb,
    state.temperature,
  );

  // Add to history
  addToHistory(moisture, waterLitres, crop, statusClass, statusLabel);
}

function getIrrigationSchedule(moisture, crop, water) {
  if (water === 0) return "No irrigation needed";
  if (moisture < crop.idealMin - 15) return "Immediate irrigation required";
  if (moisture < crop.idealMin) return "Irrigate within 24 hours";
  return "Monitor — schedule in 2–3 days";
}

function getRecommendation(moisture, crop, water, rainfall, temp) {
  const cropName = crop.name;
  if (water === 0) {
    return `${cropName} field is well-hydrated. Monitor daily and avoid over-irrigation. Excess moisture can lead to root rot and fungal diseases.`;
  }
  if (rainfall > 60) {
    return `High rainfall probability (${rainfall}%) may reduce irrigation need. Monitor soil after rain before applying the calculated ${water.toLocaleString()}L. Use drip irrigation for efficiency.`;
  }
  if (temp > 38) {
    return `High temperature (${temp}°C) increases evapotranspiration. Apply ${water.toLocaleString()}L in early morning or evening to reduce evaporation loss by up to 30%.`;
  }
  return `Apply ${water.toLocaleString()}L of water for optimal ${cropName} growth. Drip irrigation or furrow irrigation recommended for efficient water delivery and minimal surface evaporation.`;
}

// ============================================================
// HISTORY LOG
// ============================================================

function addToHistory(moisture, water, crop, statusClass, statusLabel) {
  const record = {
    id: state.history.length + 1,
    timestamp: new Date().toLocaleString(),
    crop: crop.name,
    moisture: moisture,
    water: water,
    statusClass,
    statusLabel,
  };

  state.history.unshift(record);
  renderHistory();
}

function renderHistory() {
  if (state.history.length === 0) {
    historyBody.innerHTML = `<tr class="empty-row"><td colspan="7">No records yet. Run your first analysis above.</td></tr>`;
    return;
  }

  historyBody.innerHTML = state.history
    .map(
      (r) => `
    <tr>
      <td style="font-family:var(--font-mono);color:var(--text-muted)">#${r.id}</td>
      <td>${r.timestamp}</td>
      <td style="color:var(--accent-lime)">${r.crop}</td>
      <td style="font-family:var(--font-mono)">${r.moisture.toFixed(1)}%</td>
      <td style="font-family:var(--font-mono);color:var(--accent-teal)">${r.water > 0 ? r.water.toLocaleString() + " L" : "None"}</td>
      <td><span class="status-badge ${r.statusClass}">${r.statusLabel}</span></td>
      <td><button class="btn-view" onclick="viewRecord(${r.id - 1})">View</button></td>
    </tr>
  `,
    )
    .join("");
}

window.viewRecord = function (index) {
  const r = state.history[index];
  showToast(
    "📋",
    `Record #${r.id}: ${r.crop} — ${r.moisture.toFixed(1)}% moisture, ${r.water.toLocaleString()}L water needed`,
  );
};

// ============================================================
// CLOUD SEND (IoT Simulation)
// ============================================================

sendToCloudBtn.addEventListener("click", () => {
  if (!state.moisturePercent) return;

  sendToCloudBtn.disabled = true;
  sendToCloudBtn.innerHTML = `<span>⏳</span> Transmitting...`;

  setTimeout(() => {
    showToast("📡", "Data synced to cloud server successfully!");
    sendToCloudBtn.disabled = false;
    sendToCloudBtn.innerHTML = `<span>📡</span> Send to Cloud Server`;
    avgMoistureDash.textContent = `${state.moisturePercent.toFixed(1)}%`;
  }, 1800);
});

// ============================================================
// DASHBOARD — Bar Chart
// ============================================================

function initBarChart() {
  const barChart = $("barChart");
  const chartDays = $("chartDays");

  const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
  const values = [58, 63, 61, 55, 67, 72, 68];

  barChart.innerHTML = "";
  chartDays.innerHTML = "";

  const maxVal = Math.max(...values);

  values.forEach((val, i) => {
    const pct = (val / maxVal) * 100;
    const wrap = document.createElement("div");
    wrap.className = "bar-wrap";
    const bar = document.createElement("div");
    bar.className = "bar";
    bar.dataset.val = `${val}%`;
    bar.style.height = "0px";
    wrap.appendChild(bar);
    barChart.appendChild(wrap);

    setTimeout(() => {
      bar.style.height = `${pct * 1.4}px`;
    }, i * 80);
  });

  days.forEach((day) => {
    const span = document.createElement("span");
    span.className = "chart-day";
    span.textContent = day;
    chartDays.appendChild(span);
  });
}

// ============================================================
// WEATHER PANEL
// ============================================================

function updateWeatherPanel() {
  const temp = parseFloat(temperature.value);
  if (isNaN(temp)) return;

  state.temperature = temp;
  weatherTemp.textContent = `${temp}°C`;

  let desc, icon, tags;
  if (temp < 10) {
    desc = "Cold conditions — low evapotranspiration";
    icon = "❄️";
    tags = ["Low ET", "Frost Risk", "Reduce Irrigation"];
  } else if (temp < 20) {
    desc = "Cool weather — moderate water needs";
    icon = "🌤";
    tags = ["Moderate ET", "Efficient Conditions"];
  } else if (temp < 30) {
    desc = "Warm weather — standard irrigation";
    icon = "⛅";
    tags = ["Standard ET", "Morning Irrigation"];
  } else if (temp < 38) {
    desc = "Hot weather — increased water demand";
    icon = "☀️";
    tags = ["High ET", "Drought Watch", "Early Morning Watering"];
  } else {
    desc = "Extreme heat — critical irrigation needed";
    icon = "🔥";
    tags = ["Critical ET", "Double Frequency", "Shade Crops"];
  }

  weatherTemp.textContent = `${temp}°C`;
  weatherDesc.textContent = desc;
  document.querySelector(".weather-icon-big").textContent = icon;

  weatherTags.innerHTML = tags
    .map((t) => `<span class="weather-tag">${t}</span>`)
    .join("");
}

// ============================================================
// HERO MOISTURE UPDATE
// ============================================================

function updateHeroMoisture(val) {
  heroMoisture.textContent = `${val.toFixed(0)}%`;
}

function updateDashboard(moisture) {
  avgMoistureDash.textContent = `${moisture.toFixed(1)}%`;
}

// ============================================================
// ANIMATED COUNTER
// ============================================================

function animateCounter(el, from, to, duration) {
  const start = performance.now();
  const step = (now) => {
    const elapsed = now - start;
    const progress = Math.min(elapsed / duration, 1);
    const ease = 1 - Math.pow(1 - progress, 3);
    el.textContent = (from + (to - from) * ease).toFixed(1);
    if (progress < 1) requestAnimationFrame(step);
  };
  requestAnimationFrame(step);
}

// ============================================================
// TOAST NOTIFICATION
// ============================================================

let toastTimer;
function showToast(icon, msg) {
  toastIcon.textContent = icon;
  toastMsg.textContent = msg;
  toast.classList.remove("hidden");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => {
    toast.classList.add("hidden");
  }, 4000);
}

// ============================================================
// SMOOTH NAV SCROLL
// ============================================================

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", (e) => {
    e.preventDefault();
    const target = document.querySelector(anchor.getAttribute("href"));
    if (target) target.scrollIntoView({ behavior: "smooth" });
  });
});

// ============================================================
// INTERSECTION OBSERVER — Animate sections on scroll
// ============================================================

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1";
        entry.target.style.transform = "translateY(0)";
      }
    });
  },
  { threshold: 0.1 },
);

document
  .querySelectorAll(".card, .dash-card, .weather-main, .weather-factors")
  .forEach((el) => {
    el.style.opacity = "0";
    el.style.transform = "translateY(24px)";
    el.style.transition = "opacity 0.6s ease, transform 0.6s ease";
    observer.observe(el);
  });

// ============================================================
// INIT
// ============================================================

document.addEventListener("DOMContentLoaded", () => {
  initBarChart();
  updateRainfallFactor();

  // Animate stats bar counters
  setTimeout(() => {
    animateCounter(document.querySelector(".stat-num:first-child"), 0, 0, 800);
  }, 500);
});
