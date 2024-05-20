import React, { ReactElement } from 'react'
import { Box, ThemeProvider, Typography } from '@mui/material'
import { useTheme } from "../../../themes"

export interface LogoProps {
    img: ReactElement,
    width: string;
    variant: string;
    children: string;
    fontK?: number;
}

export const Logo = (props: LogoProps) => {
    
    const theme = useTheme({})

    return (
        <ThemeProvider theme={theme}>
            <Box display="flex" flexDirection="row" alignItems="center" width={props.width}>
                {
                    props.img
                }
                <Box marginLeft='5%'>
                    <Typography marginLeft="5px" variant={props.variant as any} color='black' fontK={props.fontK ? props.fontK : 1}>
                        {props.children}
                    </Typography>
                </Box>
            </Box>
        </ThemeProvider>
    )
}