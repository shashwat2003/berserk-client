import { isAndroid, isWeb } from "@tamagui/constants";
import { createFont as ogCreateFont, type GenericFont } from "tamagui";
import { getFontConfig } from "./defaults";
import type {
  AvailableFontSizes,
  AvailableFontStyles,
  AvailableFontWeights,
  FontConfig,
  FontSizes,
  PlatformSpecificFont,
} from "./types";

// CONSTANTS

const platform = isWeb ? "web" : isAndroid ? "android" : "ios";

const fontWeightMapping: {
  [key in AvailableFontWeights]: AvailableFontStyles;
} = {
  300: "light",
  400: "regular",
  500: "medium",
  600: "semiBold",
  700: "bold",
};

// HELPERS

const getPlatformFontName = (
  platformFontConfig: PlatformSpecificFont,
  style: AvailableFontStyles,
) => {
  return (
    platformFontConfig[platform]?.[style] ?? (isWeb ? "sans-serif" : "System")
  );
};

const getFontConfigByProp = (
  config: FontConfig,
  prop: keyof FontConfig["true"],
) => {
  return Object.keys(config).reduce((prev, curr) => {
    prev[curr] = config[curr as AvailableFontSizes][prop];
    return prev;
  }, {}) as FontSizes;
};

const getFace = (
  platformFontConfig: PlatformSpecificFont,
): GenericFont["face"] => {
  return Object.keys(fontWeightMapping).reduce((prev, curr) => {
    prev[curr] = {
      normal: getPlatformFontName(platformFontConfig, fontWeightMapping[curr]),
      italic: getPlatformFontName(
        platformFontConfig,
        `${fontWeightMapping[curr]}Italic` as AvailableFontStyles,
      ),
    };
    return prev;
  }, {}) as GenericFont["face"];
};

/**
 * Creates a font configuration object based on the provided platform-specific font configuration
 * and optional size configuration. The font tokens follow tailwind's format e.g. xs, sm, base, lg, etc. (https://tailwindcss.com/docs/font-size)
 *
 * @param params.platformFontConfig - The platform-specific font configuration.
 * @param [params.sizeConfig] - Optional size configuration. If not provided, a default configuration will be used.
 * @returns The created font configuration object.
 */
export const createFont = ({
  platformFontConfig,
  sizeConfig: propSizeConfig,
}: {
  platformFontConfig: PlatformSpecificFont;
  sizeConfig?: FontConfig;
}) => {
  const sizeConfig = propSizeConfig ?? getFontConfig();

  return ogCreateFont({
    family: getPlatformFontName(platformFontConfig, "regular"),
    size: getFontConfigByProp(sizeConfig, "size"),
    lineHeight: getFontConfigByProp(sizeConfig, "lineHeight"),
    weight: getFontConfigByProp(sizeConfig, "weight"),
    ...(isAndroid ? { face: getFace(platformFontConfig) } : {}),
  });
};

export * from "./defaults";
export * from "./types";
