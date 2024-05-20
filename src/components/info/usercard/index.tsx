import React from "react";
import { Box, CardMedia, Typography, ThemeProvider } from "@mui/material";
import { props as iprops, useWidget, useTheme } from "@bauman-conference-library/interface";

export const UserCard = (props: iprops.ConferenceUserCard) => {

    props = useWidget(props)
    const theme = useTheme(props)
    
    return (
        <ThemeProvider theme={theme}>
            <Box width='270px'>
                <Typography variant="h2" weighted={true} marginBlock='20px'> 
                    { props.post } 
                </Typography>
                <CardMedia
                    sx={{ height: 329, width: 268}}
                    image={ String(props.image) }   
                    title="green iguana"
                />
                <Typography variant="h3" marginTop='20px'> { props.initials }</Typography>
                <Typography variant="h5"> { props.info } </Typography>
            </Box>
        </ThemeProvider>
    );
}