import { Link as RouterLink } from 'react-router-dom'

export const link_theme = {
    MuiLink: {
        styleOverrides: {
            root: {
                underline: 'none',
                color: 'black'
            }
        }, 
        defaultProps: {
            variant: 'h3'
        }
    }
}