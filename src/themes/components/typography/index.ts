import { title_variants } from "./title";
import { h_variants } from "./h";

export const typography_theme = {
    MuiTypography: {
        styleOverrides: {
            root: {
                fontFamily: 'Inter',
                color: 'black',
            }
        },
        variants: [
            ...title_variants,
            ...h_variants
        ]
    }
}

declare module '@mui/material/styles' 
{
    interface TypographyVariants {
        title: React.CSSProperties;
    }

    interface TypographyVariantsOptions {
        title?: React.CSSProperties;
    }
}

declare module '@mui/material'
{
    interface TypographyOwnProps {
        fontK?: number;
        colored?: boolean;
        weighted?: boolean;
    }
    interface TypographyPropsVariantOverrides {
        title: true;
    }
}