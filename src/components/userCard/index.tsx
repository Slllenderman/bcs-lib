import React from "react";
import { Box, CardMedia, Typography } from "@mui/material";
import { props as iprops } from "@bauman-conference-library/interface";

export const UserCard = (props: iprops.ConferenceUserCard) => {

    const userCard = {
        width: "268px"
    }
    const post_typography = {
        fontFamily: 'Inter',
        fontSize: "24px",
        fontWeight: '500',
        lineHeight: '29px',
        paddingBottom: "32px"
    }

    const initials = {
        fontFamily: 'Inter',
        fontSize: "20px",
        fontWeight: '500',
        lineHeight: '24px',
        paddingTop: "32px"
    }

    const info = {
        fontFamily: 'Inter',
        fontSize: "16px",
        fontWeight: '400',
        lineHeight: '19px',
        paddingTop: "16px"
    }

    return (
        <Box sx={ userCard }>
            <Typography variant="h5" sx={ post_typography }> { props.post } </Typography>
            <CardMedia
                sx={{ height: 329, width: 268}}
                image={ String(props.image) }   
                title="green iguana"
            />
            <Typography variant="h6" sx={ initials }>{ props.initials }</Typography>
            <Typography variant="body1" sx={ info }> { props.info } </Typography>
        </Box>
    );
}