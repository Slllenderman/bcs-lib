import React from 'react'
import { props as iprops } from '@bauman-conference-library/interface'
import { theme } from '../../theme'
import { Container, ThemeProvider, Typography, Box } from '@mui/material'


export const ConferenceDate = (props: iprops.ConferenceDateProps): JSX.Element => {
    
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
    
    const getFormat = (format: iprops.ConferenceFormat): String => {
        const samples = [
            "Конференция проходит в очном формате",
            "Конференция проходит в онлайн формате",
            "Конференция проходит в очном и онлайн формате"
        ]
        return samples[format]
    }

    const width: number = 1130 * props.size

    const container_css = { 
        width: width, 
        padding: `${56 * props.height}px ${Math.min(width * 0.05, 125)}px !important`,
        borderRadius: "3px", 
        backgroundColor: 'primary.main', 
        display: 'flex', 
        justifyContent: 'center',
        alignContent: 'center',
        flexDirection: 'row',
        gap: '36px',
        maxWidth: '1500px !important'
    }

    const format_typography = {
        fontFamily: 'Inter',
        fontSize: 24 * props.font_size,
        fontWeight: '400',
        lineHeight: '29px',
        display: 'inline'
    }

    const date_typography = {
        fontFamily: '"Brygada 1918"',
        fontSize: 64 * props.font_size,
        fontWeight: '600',
        color: 'primary.dark',
        fontStyle: 'italic',
        lineHeight: '72px',
        whiteSpace: 'nowrap'
    }

    return (
        !props.visibility ? <></> : 
        <ThemeProvider theme = {theme}>
            <Container sx = {container_css}>
                <Box display={'flex'} alignItems={'center'}>
                    <Typography sx = {format_typography}>
                        {getFormat(props.format)}
                    </Typography>
                </Box>
                <Box>
                    <Typography sx = {date_typography}>
                        {getFormatedDate(props.start_date, props.end_date)}
                    </Typography>
                </Box>   
            </Container>
        </ThemeProvider>
    )
}