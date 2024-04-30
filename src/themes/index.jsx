import { pallete_theme } from "./pallete";
import { components_theme } from "./components";
import { createTheme } from "@mui/material";

export const theme = createTheme(
    {
        palette: pallete_theme,
        components: components_theme
    }
) 