import React  from "react";
import { Box, Typography, ThemeProvider, Button } from "@mui/material";
import { props as iprops, useWidget } from "@bauman-conference-library/interface";
import { BMSTU_buiding_icon } from './bmstu_building_icon';
import { Title } from '../../addons/title'
import { useTheme } from "../../../themes"

export const Heading = (props: iprops.ConferenceHeadingProps): JSX.Element => {

    props = useWidget(props)
    const theme = useTheme(props)
    
    return (
        !props.visibility ? <></> :
        <ThemeProvider theme={theme}>
            <Box display='flex' flexDirection='column' alignItems='center' width={props.width}>
                <BMSTU_buiding_icon></BMSTU_buiding_icon>
                <Box display='flex' flexDirection='column' textAlign='center' 
                    marginTop={`${26 * (props.height ? props.height : 1)}px`} 
                    marginBottom={`${40 * (props.height ? props.height : 1)}px`}>
                    <Typography variant="h2" textTransform='uppercase' color='gray' 
                                marginBottom={`${16 * (props.height ? props.height : 1)}px`} fontK={props.font_size}> 
                        { props.subtitle } 
                    </Typography>
                    <Title brushCount={2} align="center" fontK={props.font_size}>
                        { props.title }
                    </Title>
                </Box>
                <Button variant="contained" href={props.part_href}>
                    <Typography variant='h2' color='white' 
                                margin={`0 ${30 * (props.height ? props.height : 1)}px 0 
                                ${30 * (props.height ? props.height : 1)}px`} 
                                fontK={props.font_size}>
                        Участвовать
                    </Typography>
                </Button>
            </Box>
        </ThemeProvider> 
    );
}