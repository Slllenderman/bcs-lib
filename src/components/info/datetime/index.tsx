import React from 'react'
import { props as iprops, useWidget} from '@bauman-conference-library/interface'
import { theme } from '../../../themes'
import { Container, ThemeProvider, Typography, Box } from '@mui/material'

export const ConferenceDate = (props: iprops.ConferenceDateProps): JSX.Element => {
    
    props = useWidget(props)
    
    const getFormatedDate = (sdate: Date|number, edate: Date|number): String => {
        enum months {
            января, февраля, марта, апреля, мая, июня, 
            июля, августа, сентября, октября, ноября, декабря
        }
        const sddate = new Date(sdate)
        const eddate = new Date(edate)
        const sday: Number = sddate.getDate()
        const eday: Number = eddate.getDate()
        const month: String = months[sddate.getMonth()]
        const year: String = sddate.getFullYear().toString() 
        return eday >= sday && sddate.getMonth() == eddate.getMonth() ? 
               `${sday}–${eday} ${month} ${year}г.` : `${sday} ${month} ${year}г.`
    }
    
    const getFormat = (format: "online" | "offline" | "both"): String => {
        const samples = {
            "offline": "Конференция проходит в очном формате",
            "online": "Конференция проходит в онлайн формате",
            "both": "Конференция проходит в очном и онлайн формате"
        }
        return samples[format]
    }

    const container_css = {
        padding: `56px 56px !important`,
        gap: '36px'
    }

    const date_font = {
        whiteSpace: 'nowrap',
        fontStyle: 'Italic',
        color: 'primary.dark',
        fontWeight: 600
    }

    return (
        !props.visibility ? <></> : 
        <ThemeProvider theme = {theme}>
            <Container variant='accent' sx = {container_css}>
                <Box display='flex' alignItems='center'>
                    <Typography variant='h1' fontK={props.font_size}>
                        {getFormat(props.format)}
                    </Typography>
                </Box>
                <Box display='flex' alignItems='center'>
                    <Typography variant='title' fontK={props.font_size} sx={date_font}>
                        {getFormatedDate(props.start_date, props.end_date)}
                    </Typography>
                </Box>   
            </Container>
        </ThemeProvider>
    )
}