import { createTamagui } from "tamagui";
import { defaultConfig } from "./config";
import { euclidConfig } from "./euclid/euclid.font";

const tamaguiConfig = createTamagui({
  ...defaultConfig,
  fonts: {
    body: euclidConfig,
  },
});

export default tamaguiConfig;
