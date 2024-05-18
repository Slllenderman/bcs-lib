import React, { PropsWithChildren, ReactElement } from 'react';
import { Box, ThemeProvider, Typography } from '@mui/material';
import { theme } from '../../../themes'

interface DescriptionProps {
    title: string | ReactElement;
    variant: "h1" | "h2" | "h3";
    width?: number
    shift?: number;
}

export const Description = (props: PropsWithChildren<DescriptionProps>) => {
    return(
        <ThemeProvider theme={theme}>
            <Box display="flex" flexDirection="column" width={props.width ? props.width : 400 }>
                { 
                    typeof props.title === "string" ?
                    <Typography variant='subtitle1' fontK={1} marginBottom="20px">
                        { props.title }
                    </Typography>
                    : props.title
                }
                <Box marginLeft={`${props.shift}px`}>
                    {
                        React.Children.map(props.children, child => child)
                    }
                </Box>
            </Box>
        </ThemeProvider>
    )
}