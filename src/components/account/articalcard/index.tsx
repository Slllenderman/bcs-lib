import React from "react"
import { Box, Button, Typography, ThemeProvider} from '@mui/material'
import { props as iprops, useWidget } from '@bauman-conference-library/interface'
import { Link as RouterLink } from 'react-router-dom'
import { useTheme } from "../../../themes"

export const ArticleCard = (props: iprops.ArticalCard) => {
    
    props = useWidget(props)
    const theme = useTheme(props)
    
    return(
        <ThemeProvider theme={theme}>
            <Box sx={{border: 1, borderColor: "primary.dark"}} padding="25px" width="1000px">
                <Box display="flex" flexDirection="column">
                    <Typography variant="title" fontK={props.font_size} marginBottom="25px">
                        { props.title }
                    </Typography>
                    <Box width="100%" sx={{border:0.5, borderBlockColor: 'lightgray'}} marginBottom="25px"></Box>
                    <Box display="flex" flexDirection="row">
                        <Box marginRight="100px">
                            <Typography variant="h5" marginBottom="10px" color="primary.dark">
                                Рецензия: статья не проверена
                            </Typography>
                            <Typography variant="h6">
                                {props.last_update_date.toString()}
                            </Typography>
                        </Box>
                        <Button component={RouterLink} to='#' variant="outlined">
                            Редактировать
                        </Button>
                    </Box>
                </Box>
            </Box>
        </ThemeProvider>
    )
}