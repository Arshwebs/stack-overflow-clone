import { createContext, useContext } from "react";
const themeContext = createContext();

function ThemeContextProvider(children) {
  return <themeContext.Provider value={""}>{children}</themeContext.Provider>;
}

function useThemeContext() {
  const context = useContext(themeContext);
  if (!context)
    throw new Error(
      "you are trying to access theme context outside of its provider",
    );

  return context;
}

export { useThemeContext, ThemeContextProvider };

export default ThemeContextProvider;
