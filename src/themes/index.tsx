import React, { useState, createContext, useContext } from "react";
import { pallete_theme } from "./pallete";
import { components_theme } from "./components";
import { createTheme } from "@mui/material";

export const ThemeContext = createContext({})

export const useTheme = (props: any): any => {
    const { theme, setTheme }: any = useContext(ThemeContext)
    if(typeof props.theme !== 'undefined'){
        let new_theme = theme
        if(typeof props.theme.first_basecolor !== 'undefined')
            new_theme.palette.primary.main = props.theme.first_basecolor
        if(typeof props.theme.second_basecolor !== 'undefined')
            new_theme.palette.primary.dark = props.theme.second_basecolor
        if(typeof props.theme.third_basecolor !== 'undefined')
            new_theme.palette.primary.light = props.theme.third_basecolor
        if(typeof props.first_typography !== 'undefined'){
            if(typeof props.first_typography.font !== 'undefined')
                new_theme.components.MuiTypography.styleOverrides.root.fontFamily = props.first_typography.font
        }
        setTheme(new_theme)
    }
    return theme
}
 
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
