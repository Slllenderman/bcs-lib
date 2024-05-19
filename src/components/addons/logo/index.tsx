import React, { ReactElement } from 'react'
import { Box, ThemeProvider, Typography } from '@mui/material'
import { theme } from '../../../themes'

interface LogoProps {
    img: string | ReactElement,
    width: string;
    variant: string;
    children: string;
}

export const Logo = (props: LogoProps) => {
    return (
        <ThemeProvider theme={theme}>
            <Box display="flex" flexDirection="row" alignItems="center" width={props.width}>
                {
                    typeof props.img === 'string' ?
                    <img width='20%' height='20%' src={props.img}/> :
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