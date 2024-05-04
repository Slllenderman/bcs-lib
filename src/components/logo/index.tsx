import React from 'react'
import { props as iprops } from '@bauman-conference-library/interface'
import { Box, ThemeProvider, Typography } from '@mui/material'
import { theme } from '../../themes'

export const Logo = (props: iprops.ConferenceLogo) => {
    return (
        <ThemeProvider theme={theme}>
            <Box display="flex" flexDirection="row" alignItems="center">
                <img width={props.img_size} height={props.img_size} src={props.img_src}></img>
                <Typography marginLeft="5px" variant={props.variant as any} fontSize_koef={props.font_size}>
                    {props.title}
                </Typography>
            </Box>
        </ThemeProvider>
    )
}