import React, { ReactElement } from 'react'
import { Box, ThemeProvider, Typography } from '@mui/material'
import { theme } from '../../../themes'

export interface LogoProps {
    img: ReactElement,
    width: string;
    variant: string;
    children: string;
}

export const Logo = (props: LogoProps) => {
    return (
        <ThemeProvider theme={theme}>
            <Box display="flex" flexDirection="row" alignItems="center" width={props.width}>
                {
                    props.img
                }
                <Box marginLeft='5%'>
                    <Typography marginLeft="5px" variant={props.variant as any} color='black'>
                        {props.children}
                    </Typography>
                </Box>
            </Box>
        </ThemeProvider>
    )
}