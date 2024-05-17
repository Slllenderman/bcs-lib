import React, { PropsWithChildren, ReactElement } from 'react';
import { Box, Typography } from '@mui/material';

export const Description = (props: PropsWithChildren<{ title: string | ReactElement, shift?: number}>) => {
    return(
        <Box display="flex" flexDirection="column">
            { 
                typeof props.title === "string" ?
                <Typography variant='subtitle1' marginBottom="20px">
                    { props.title }
                </Typography>
                : props.title
            }
            <Box marginLeft={props.shift}>
                {
                    React.Children.map(props.children, child => child)
                }
            </Box>
        </Box>
    )
}