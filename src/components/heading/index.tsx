import { Box, Typography, Link } from "@mui/material";
import { Link as RouterLink } from 'react-router-dom';
import React  from "react";
import { props as iprops } from "@bauman-conference-library/interface";
import { BMSTU_buiding_icon }from './bmstu_building_icon';


export const Heading = (props: iprops.ConferenceHeadingProps): JSX.Element => {

    function getTitle(title: String) {
        const arr_title = title.split(' ');
        const part1 = arr_title[0] + ' ' + arr_title[1];
        const part2 = arr_title.slice(2).join(' ');
        const color = {
            color: "#22BEC5"
        }
        return <span><span style={color}> {part1}</span> {part2}</span>;
    }
    const heading = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    };

    const text = {
        marginTop: "26px",
        marginBottom: "40px",
        display: "flex",
        flexDirection: "column",
        gap: '16px'
    };

    const subtitle_typography = {
        fontFamily: 'Inter',
        fontSize: "20px",
        fontWeight: '400',
        lineHeight: '24.2px',
        textAlign: 'center',
        textTransform: "uppercase",
        color: "#8B8B8B"
    };

    const title_typography = {
        fontFamily: 'Brygada 1918',
        fontStyle: "Italic",
        fontSize: "44px",
        fontWeight: '600',
        lineHeight: '51.48px',
        textAlign: 'center',
    };


    const take_part_container = {
        padding: "16px 59.5px",
        backgroundColor: "#22BEC5",
    }

    const take_part = {
        fontFamily: 'Inter',
        fontSize: "24px",
        fontWeight: '500',
        lineHeight: '29px',
        color: "#FFFFFF",
        textDecoration: "none",
    }
    return (
        <Box sx={ heading }>
            <Box>
                <BMSTU_buiding_icon/>
            </Box>
            <Box sx = { text }>
                <Typography variant="subtitle1" sx={ subtitle_typography }> { props.subtitle } </Typography>
                <Typography variant="h1" sx ={ title_typography }> {getTitle(props.title || "")}
                </Typography>
            </Box>
            <Box style={take_part_container}>
                <Link to={ props.part_href } component={ RouterLink } style={ take_part }> Участвовать </Link>
            </Box>
        </Box>
    );
}