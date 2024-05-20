import React from "react";
import { Box, CardMedia, Typography, ThemeProvider } from "@mui/material";
import { props as iprops, useWidget } from "@bauman-conference-library/interface";
import { useTheme } from "../../../themes"

export const UserCard = (props: iprops.ConferenceUserCard) => {

    props = useWidget(props)
    const theme = useTheme(props)
    
    return (
        !props.visibility ? <></> :
        <ThemeProvider theme={theme}>
            <Box width={`${270 * ( props.width ? props.width : 1)}px`}>
                <Typography variant="h2" weighted={true} 
                            marginBlock={`${20 * ( props.height ? props.height : 1)}px`} fontK={props.font_size}> 
                    { props.post } 
                </Typography>
                <CardMedia
                    sx={{ height: 329 * ( props.height ? props.height : 1), width: 268 * ( props.width ? props.width : 1)}}
                    image={ String(props.image) }   
                    title="green iguana"
                />
                <Typography variant="h3" marginTop={`${20 * ( props.height ? props.height : 1)}px`}  fontK={props.font_size}> { props.initials }</Typography>
                <Typography variant="h5" fontK={props.font_size}> { props.info } </Typography>
            </Box>
        </ThemeProvider>
    );
}