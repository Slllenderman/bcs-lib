import React, { PropsWithChildren }  from "react";
import { Box, Divider, Typography, ThemeProvider } from "@mui/material";
import { props as iprops, useWidget } from '@bauman-conference-library/interface'
import { theme } from '../../../themes'

export const Footer = (props: PropsWithChildren<iprops.ConferenceFooter>) => {

    props = useWidget(props)

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
            <Box>
                <Divider/>
                <Box marginBottom='30px' marginTop='30px' display='flex' flexDirection='column'>
                    {
                        React.Children.map(props.children, (logo) => (
                            <Box display='flex' flexDirection='row' gap='150px' justifyItems='center' margin='0 auto'>
                                { logo }
                            </Box>
                        ))
                    }
                </Box>
                <Divider/>
                <Box display='flex' flexDirection='row' justifyItems='start' marginTop='30px'>
                    <Typography variant="h4">
                        Почта для связи: {props.email}
                    </Typography>
                    <Box marginLeft='auto'>
                        <Typography variant='h4'>
                            { getYears(props.start_date, props.end_date) }
                        </Typography>
                    </Box>
                </Box>
            </Box>
        </ThemeProvider>
    );
}