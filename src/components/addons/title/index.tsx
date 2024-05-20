import React from "react";
import { Typography, ThemeProvider, Box } from "@mui/material"
import { useTheme } from "../../../themes"

export const Title = (props: { children: string, brushCount: number, align?: string, fontK?: number}) => {
    
    const words: string[] = props.children.split(' ').map((word) => word.concat(' '));
    const brush_border = Math.min(words.length, props.brushCount);
    const theme = useTheme({})

    return (
        <ThemeProvider theme={theme}>
            <Box alignItems={props.align}>
                <Typography variant="subtitle1" colored={true} display="inline" fontK={props.fontK ? props.fontK : 1}>
                        { words.slice(0, brush_border) }
                </Typography>
                <Typography variant="subtitle1" display="inline" fontK={props.fontK ? props.fontK : 1}>
                    { words.slice(brush_border, words.length) }
                </Typography>
            </Box>
        </ThemeProvider>
    )
}