export const ColorPalette = {
  fontDark: "#101727",
  fontLight: "#f0f0f0",
  darkMode: "#383838",
  lightMode: "#ffffff",
  purple: "#b624ff",
  red: "#ff3131",
  orange: "#ff9318",
  orangeDark: "#ff9500",
  blue: "#29b6f6",
} as const satisfies Record<string, string>;

export const themeConfig: { [key: string]: { primaryColor: string; secondaryColor?: string } } = {
  "Dark Purple": {
    // Default dark theme
    primaryColor: ColorPalette.purple,
  },
  "Light Purple": {
    // Default light theme
    primaryColor: ColorPalette.purple,
    secondaryColor: "#edeef6",
  },
  "Dark Blue": {
    primaryColor: "#106cff",
    secondaryColor: "#090815",
  },
  "Light Blue": {
    primaryColor: "#278ad2",
    secondaryColor: "#dddaf6",
  },
  "Dark Pink": {
    primaryColor: "#f2369d",
    secondaryColor: "#191218",
  },
  "Light Pink": {
    primaryColor: "#e5369a",
    secondaryColor: "#ffe3ff",
  },
  "Blush Blossom": {
    primaryColor: "#EC407A",
    secondaryColor: "#FCE4EC",
  },
  Cheesecake: {
    primaryColor: "#E14C94",
    secondaryColor: "#FDF0D5",
  },
  "Mystic Coral": {
    primaryColor: "#ff7b9c",
    secondaryColor: "#4a2333",
  },
  "Dark Orange": {
    primaryColor: "#FF5631",
    secondaryColor: "#0D0D0D",
  },
  "Light Orange": {
    primaryColor: "#F26E56",
    secondaryColor: "#F6F6F6",
  },
  Aurora: {
    primaryColor: "#00e952",
    secondaryColor: "#011926",
  },
  "Elden Lord": {
    // Erdtree amber-gold on the ashen darkness of the Lands Between
    primaryColor: "#c8a84b",
    secondaryColor: "#1a1208",
  },
  Sekiro: {
    // Sakura petals falling on Ashina — Isshin's final stand under the storm-dark sky
    primaryColor: "#d4687a",
    secondaryColor: "#100d1a",
  },
  "Isshin Ashina": {
    // Sword Saint Isshin — the crimson haori of Ashina's founder blazing against the tempest sky,
    // lightning spear in hand and the divine Dragon's Tear falling through storm-black clouds
    primaryColor: "#e63946",
    secondaryColor: "#0b0f1e",
  },
};
