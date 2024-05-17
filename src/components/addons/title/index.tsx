import React from "react";
import { Typography } from "@mui/material";

export const Title = (props: { children: string }) => {
    
    const words: string[] = props.children.split(' ');
    
    return (
        <Typography variant="title">
            <Typography variant="title" colored={true}>
                { words.slice(0, 2) }
            </Typography>
            { words.slice(2, words.length) }
        </Typography>
    )
}