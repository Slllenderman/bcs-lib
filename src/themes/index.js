import { typography_theme } from "./typography";
import { pallete_theme } from "./pallete";
import { components_theme } from "./components";
import { createTheme } from "@mui/material";

export const theme = createTheme(
    {
        palette: pallete_theme,
        typography: typography_theme,
        components: components_theme
    }
) 