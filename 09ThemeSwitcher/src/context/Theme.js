import React, {createContext, useContext} from "react";

export const ThemeContext = createContext({
    themeMode: 'light', 
    darkTheme: () => {}, 
    lightTheme: () => {}, 
})

export const ThemeContextProvider = ThemeContext.Provider

// Now instead of using useState for individually accessing the variables and methods in ThemeContext we can directly get them throught useTheme
export default function useTheme () {
    return useContext(ThemeContext)
}