import { iconSizes } from "./iconSizes";
import { spacing } from "./spacing";
import { zIndices } from "./zIndices";

const radius = { ...spacing, true: spacing.md, full: "calc(infinity * 1px)" };
const space = { ...spacing, true: spacing.md };
const size = { ...space, true: spacing["8xl"] };
const zIndex = { ...zIndices, true: zIndices.default };
const icon = { ...iconSizes, true: iconSizes[24] };

export const tokens = {
  radius,
  zIndex,
  space,
  size,
  icon,
};
