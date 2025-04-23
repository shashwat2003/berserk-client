export type AvailableFonts = "euclid" | "inter";

export type AvailableFontStyles =
  | "bold"
  | "boldItalic"
  | "regular"
  | "regularItalic"
  | "semiBold"
  | "semiBoldItalic"
  | "medium"
  | "mediumItalic"
  | "light"
  | "lightItalic";

export type CustomFontSizes =
  | "xs"
  | "sm"
  | "base"
  | "lg"
  | "xl"
  | "2xl"
  | "3xl"
  | "4xl"
  | "5xl"
  | "6xl"
  | "7xl"
  | "8xl"
  | "9xl";

export type AvailableFontSizes = CustomFontSizes | "true";

export type PlatformSpecificFont = {
  ios?: {
    [key in AvailableFontStyles]: string;
  };
  android?: {
    [key in AvailableFontStyles]: string;
  };
  web?: {
    [key in AvailableFontStyles]: string;
  };
};

export type FontConfig = {
  [key in AvailableFontSizes]: {
    size: number;
    lineHeight: number;
    weight: number;
  };
};

export type AvailableFontWeights = 300 | 400 | 500 | 600 | 700;

export type FontSizes = {
  [key in AvailableFontSizes]: number;
};
