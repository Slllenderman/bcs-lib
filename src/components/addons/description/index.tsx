import React, { PropsWithChildren, ReactElement } from 'react';
import { Box, ThemeProvider, Typography } from '@mui/material';
import { useTheme } from "../../../themes"

export interface DescriptionProps {
    title: string | ReactElement;
    variant: "h1" | "h2" | "h3";
    width?: number
    shift?: number;
}

export const Description = (props: PropsWithChildren<DescriptionProps>) => {
    
    const theme = useTheme({})
    
    return(
        <ThemeProvider theme={theme}>
            <Box display="flex" flexDirection="column" width={props.width ? props.width : 400 }>
                { 
                    typeof props.title === "string" ?
                    <Typography variant={
                        (props.variant === 'h1' || typeof props.variant ==='undefined' ? 'subtitle1' : 
                        props.variant === 'h2' ? 'h2' :'h3') as any
                    } fontK={1} marginBottom={
                        (props.variant === 'h1' || typeof props.variant ==='undefined' ? '25px' : 
                        props.variant === 'h2' ? '20px' :'10px') 
                    }>
                        { props.title }
                    </Typography>
                    : props.title
                }
                <Box marginLeft={`${props.shift}px`}>
                    <Typography variant={
                        (props.variant === 'h1' || typeof props.variant ==='undefined' ? 'h2' : 
                        props.variant === 'h2' ? 'h3' :'h4') as any
                    }>
                        { React.Children.map(props.children, child => child) }
                    </Typography>
                </Box>
            </Box>
        </ThemeProvider>
    )
}