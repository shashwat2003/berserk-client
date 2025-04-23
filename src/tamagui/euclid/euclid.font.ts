import { createFont, type PlatformSpecificFont } from "../config";

const euclidWebFont = "Euclid Circular B, sans-serif";

const euclidPlatformSpecificFont: PlatformSpecificFont = {
  ios: {
    regular: "EuclidCircularB-Regular",
    regularItalic: "EuclidCircularB-Italic",
    bold: "EuclidCircularB-Bold",
    boldItalic: "EuclidCircularB-BoldItalic",
    semiBold: "EuclidCircularB-SemiBold",
    semiBoldItalic: "EuclidCircularB-SemiBoldItalic",
    medium: "EuclidCircularB-Medium",
    mediumItalic: "EuclidCircularB-MediumItalic",
    light: "EuclidCircularB-Light",
    lightItalic: "EuclidCircularB-LightItalic",
  },
  android: {
    regular: "EuclidCircularB-Regular",
    regularItalic: "EuclidCircularB-Italic",
    bold: "EuclidCircularB-Bold",
    boldItalic: "EuclidCircularB-BoldItalic",
    semiBold: "EuclidCircularB-SemiBold",
    semiBoldItalic: "EuclidCircularB-SemiBoldItalic",
    medium: "EuclidCircularB-Medium",
    mediumItalic: "EuclidCircularB-MediumItalic",
    light: "EuclidCircularB-Light",
    lightItalic: "EuclidCircularB-LightItalic",
  },
  web: {
    regular: euclidWebFont,
    regularItalic: euclidWebFont,
    bold: euclidWebFont,
    boldItalic: euclidWebFont,
    semiBold: euclidWebFont,
    semiBoldItalic: euclidWebFont,
    medium: euclidWebFont,
    mediumItalic: euclidWebFont,
    light: euclidWebFont,
    lightItalic: euclidWebFont,
  },
};

export const euclidConfig = createFont({
  platformFontConfig: euclidPlatformSpecificFont,
});
