
export const typography_theme = {

    h1: {
        fontFamily: '"Brygada 1918"',
        fontSize: 64,
        fontWeight: '600',
        fontStyle: 'normal',
        lineHeight: '72px',
        whiteSpace: 'nowrap'
    },
    title: ({ownerState, theme}:any) => {
        console.log(ownerState)
        console.log(theme)
        return {
            fontSize: '144px'
        }
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
        fontSize_koef?: number;
    }
    interface TypographyPropsVariantOverrides {
        title: true;
    }
}