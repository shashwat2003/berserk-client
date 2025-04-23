import type { FontConfig } from "./types";

export const getFontSizeConfig = (height: number): FontConfig["true"] => ({
  size: height,
  lineHeight: height * 1.15,
  weight: 400,
});

export const getFontConfig = (): FontConfig => ({
  xs: getFontSizeConfig(12),
  sm: getFontSizeConfig(14),
  base: getFontSizeConfig(16),
  lg: getFontSizeConfig(18),
  xl: getFontSizeConfig(20),
  "2xl": getFontSizeConfig(24),
  "3xl": getFontSizeConfig(30),
  "4xl": getFontSizeConfig(36),
  "5xl": getFontSizeConfig(48),
  "6xl": getFontSizeConfig(60),
  "7xl": getFontSizeConfig(72),
  "8xl": getFontSizeConfig(96),
  "9xl": getFontSizeConfig(128),
  true: getFontSizeConfig(16),
});
