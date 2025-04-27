import { createContext, useContext } from "react";

export const DisabledContext = createContext<boolean>(false);

export interface DisabledContextProps {
  disabled?: boolean;
  children?: React.ReactNode;
}

export const DisabledContextProvider: React.FC<DisabledContextProps> = ({
  children,
  disabled,
}) => {
  const originDisabled = useContext(DisabledContext);
  return (
    <DisabledContext.Provider value={disabled ?? originDisabled}>
      {children}
    </DisabledContext.Provider>
  );
};
