import React from "react"
import { Box, Button, Typography, ThemeProvider, Divider } from '@mui/material'
import { props as iprops, useWidget } from '@bauman-conference-library/interface'
import { Link as RouterLink } from 'react-router-dom'
import { useTheme } from '../../../themes'

export const ArticleCard = (props: iprops.ArticleCard) => {

    props = useWidget(props)
    const theme = useTheme(props)

    const getRevState = (state: "reviewed" | "not reviewed"): String => {
        const samples = {
            "reviewed": "Рецензирование: cтатья проверена",
            "not reviewed": "Рецензирование: cтатья не проверена",
        }
        return samples[state]
    }

    return(
        <ThemeProvider theme={theme}>
            <Box sx={{border: 1, borderColor: "primary.dark"}} padding="35px" width="800px">
                <Box display="flex" flexDirection="column">
                    <Typography variant="subtitle1" fontK={props.font_size} marginBottom="15px">
                        { props.title }
                    </Typography>
                    <Typography variant="h3" marginBottom="25px">
                    { `Секция: ${props.topic}` }
                    </Typography>
                    <Divider/>
                    <Box display="flex" flexDirection="row" marginTop='25px'>
                        <Box>
                            <Typography variant="h3" marginBottom="7px" color="primary.dark">
                                { getRevState(props.review_state) }
                            </Typography>
                            <Typography variant="h5">
                                {`Последнее изменение статьи: ${props.last_update_date.toLocaleDateString()} ${props.last_update_date.toLocaleTimeString()}`}
                            </Typography>
                        </Box>
                        <Box marginLeft='auto'>
                            <Button component={RouterLink} to={props.update_href} variant="outlined">
                                <Typography variant="h2" color='primary.dark'>
                                    Редактировать
                                </Typography>
                            </Button>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </ThemeProvider>
    )
}