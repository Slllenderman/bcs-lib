import React, { PropsWithChildren }  from "react";
import { Box, Divider, Typography, ThemeProvider, Grid } from "@mui/material";
import { props as iprops, useWidget } from '@bauman-conference-library/interface'
import { useTheme } from "../../../themes"


export const Footer = (props: PropsWithChildren<iprops.ConferenceFooter>) => {

    props = useWidget(props)
    const theme = useTheme(props)
    
    const getYears = (start_date: Date|number, end_date: Date|number): String => {
        const sdate = new Date(start_date).getFullYear()
        const edate = new Date(end_date).getFullYear()
        if(sdate < edate)
            return `${sdate.toString()}-${edate.toString()}`
        else
            return edate.toString()
    }

    return (
        <ThemeProvider theme={theme}>
            <Box width={props.width}>
                <Divider/>
                <Box marginBottom={`${30 * (props.height ? props.height : 1)}px`} marginTop={`${30 * (props.height ? props.height : 1)}px`} display='flex' flexDirection='column'>
                    <Grid container justifyContent="center" alignItems="center">
                        {                 
                            React.Children.map(props.children, (logo) => (
                                <Grid item xs={4} display='flex' justifyContent='center'>
                                    { logo }
                                </Grid>
                            ))
                        }
                    </Grid>
                </Box>
                <Divider/>
                <Box display='flex' flexDirection='row' justifyItems='start' marginTop={`${30 * (props.height ? props.height : 1)}px`}>
                    <Typography variant="h4" fontK={props.font_size}>
                        Почта для связи: {props.email}
                    </Typography>
                    <Box marginLeft='auto'>
                        <Typography variant='h4' fontK={props.font_size}>
                            { getYears(props.start_date, props.end_date) }
                        </Typography>
                    </Box>
                </Box>
            </Box>
        </ThemeProvider>
    );
}