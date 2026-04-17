import { createContext, useContext } from "react";

export const themeContext = createContext({
    themeMod: "light",
    darkTheme: () => {},
    lighTheme: () =>  {},
})

export const ThemeProvider = themeContext.Provider

export default function useTheme () {
    return useContext(themeContext)
}