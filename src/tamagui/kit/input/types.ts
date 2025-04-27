import type { ReactNode } from "react";

export type BaseInputExtraProps = {
  addonAfter?: ReactNode;
  addonBefore?: ReactNode;
  allowClear?: boolean | { clearIcon: ReactNode };
  prefix?: ReactNode;
  prefixCls?: string | undefined;
  suffix?: ReactNode;
};
