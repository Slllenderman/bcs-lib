import React  from "react";
import { Box, Typography, ThemeProvider, Button } from "@mui/material";
import { props as iprops, useWidget } from "@bauman-conference-library/interface";
import { BMSTU_buiding_icon } from './bmstu_building_icon';
import { Title } from '../../addons/title'
import { theme } from '../../../themes'

export const Heading = (props: iprops.ConferenceHeadingProps): JSX.Element => {

    props = useWidget(props)

    return (
        <ThemeProvider theme={theme}>
            <Box display='flex' flexDirection='column' alignItems='center'>
                <BMSTU_buiding_icon></BMSTU_buiding_icon>
                <Box display='flex' flexDirection='column' textAlign='center' marginTop='26px' marginBottom='40px'>
                    <Typography variant="h2" textTransform='uppercase' color='gray' marginBottom='16px'> 
                        { props.subtitle } 
                    </Typography>
                    <Title brushCount={2} align="center">
                        {props.title}
                    </Title>
                </Box>
                <Button variant="contained" href={props.part_href}>
                    <Typography variant='h2' color='white' margin='0 30px 0 30px'>
                        Участвовать
                    </Typography>
                </Button>
            </Box>
        </ThemeProvider>
    );
}