import React, { ReactElement } from "react";
import { Box, Typography, ThemeProvider } from '@mui/material';
import { useTheme } from "../../../themes";

export interface InfoListProps {
    items: Array<string | ReactElement> 
    gap: number
    padding?: string
    upplevel?: number 
    accent?: boolean
}

export const InfoList = (props: InfoListProps) => {
    const theme = useTheme({})

    return(
        <ThemeProvider theme={theme}>
            <Box display='flex' flexDirection='column' gap={`${props.gap}px`} padding={props.padding} sx={{backgroundColor: props.accent ? '#E7F3F5' : 'transparent'}}>
                {
                    props.items.map((item, index) => 
                        <Box>
                            {
                                typeof item === 'string' ?
                                <Typography variant="h3">
                                    { `${props.upplevel ? `${props.upplevel}.` : ''}${index + 1}. ${item}` }
                                </Typography> :
                                item
                            }
                        </Box>
                    )
                }
            </Box>
        </ThemeProvider>
    )
}