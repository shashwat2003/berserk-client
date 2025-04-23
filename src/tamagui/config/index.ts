import { createTamagui, type CreateTamaguiProps } from "tamagui";
import { animations } from "./animations";
import { createFont } from "./fonts";
import { media } from "./media";
import { shorthands } from "./shorthands";
import { themes } from "./themes";
import { tokens } from "./tokens";

export const settings = {
  allowedStyleValues: "somewhat-strict-web",
  autocompleteSpecificTokens: true,
  defaultFont: "body",
  fastSchemeChange: true,
  onlyAllowShorthands: false,
} satisfies CreateTamaguiProps["settings"];

export const defaultConfig = {
  fonts: {
    body: createFont({ platformFontConfig: {} }),
  },
  themes,
  animations,
  tokens,
  media,
  shorthands,
  settings,
} satisfies CreateTamaguiProps;

export const config = createTamagui(defaultConfig);

export type Conf = typeof config;

declare module "tamagui" {
  interface TamaguiCustomConfig extends Conf {}

  // for group types:
  // interface TypeOverride {
  //   groupNames(): 'message'
  // }
}

export * from "./animations";
export * from "./fonts";
export * from "./media";
export * from "./shorthands";
export * from "./themes";
export * from "./tokens";
