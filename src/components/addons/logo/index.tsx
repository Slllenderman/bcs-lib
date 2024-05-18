import React from 'react'
import { Box, ThemeProvider, Typography } from '@mui/material'
import { theme } from '../../../themes'

export const Logo = (props: { img_size: number, variant: string, img_src: string, title: string }) => {
    return (
        <ThemeProvider theme={theme}>
            <Box display="flex" flexDirection="row" alignItems="center">
                <img width={props.img_size} height={props.img_size} src={props.img_src}></img>
                <Typography marginLeft="5px" variant={props.variant as any}>
                    {props.title}
                </Typography>
            </Box>
        </ThemeProvider>
    )
}