import React, { useState } from "react";
import { pallete_theme } from "./pallete";
import { components_theme } from "./components";
import { createTheme } from "@mui/material";
import { ThemeContext } from "@bauman-conference-library/interface";

export const deftheme= {
    palette: pallete_theme,
    components: components_theme
}

export const ThemeProvider = ({ children }: any) => {
    const [theme_raw, setTheme] = useState(deftheme)
    return(
        <ThemeContext.Provider value={{ 
            theme: createTheme(theme_raw), 
            setTheme 
        }}>
            { children }
        </ThemeContext.Provider>
    )
} 