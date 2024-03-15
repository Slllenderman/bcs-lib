import { createTheme } from '@mui/material'


export const theme = createTheme({
    palette: {
        primary: {
            main: "#E7F3F5",
            dark: "#22BEC5",
        }
    },
    typography: {
        fontFamily: [
            '"Brygada 1918"',
            'Inter',
            'sans-serif'
        ].join(',')
    }
});


