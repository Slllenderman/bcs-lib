import React from "react"
import { Grid, ThemeProvider, Typography } from "@mui/material"
import { props as iprops } from "@bauman-conference-library/interface"
import { theme } from "../../../themes"

export const ConferenceDescription = (props: iprops.ConferenceDescription) => {
    return (
            <ThemeProvider theme={theme}>
            <Grid container spacing={6}>
                <Grid item xs={6}>
                    <Typography variant="title" marginBottom="20px" fontSize_koef={props.font_size}>
                        О конференции
                    </Typography>
                    <Typography variant="h2" marginLeft="30px"  fontSize_koef={props.font_size}>
                        { props.about_text }
                    </Typography>
                </Grid>
                <Grid item xs={6}>
                    <Typography variant="title" marginBottom="20px" fontSize_koef={props.font_size}>
                        Цель
                    </Typography>
                    <Typography variant="h2" marginLeft="30px" fontSize_koef={props.font_size}>
                        { props.purpose_text }
                    </Typography>
                </Grid>
                <Grid item xs={6}>
                    <Typography variant="title" marginBottom="20px" fontSize_koef={props.font_size}>
                        Тематика
                    </Typography>
                    <Typography variant="h2" marginLeft="30px" fontSize_koef={props.font_size}>
                        { props.topic_text }
                    </Typography>
                </Grid>
                <Grid item xs={6}>
                    <Typography variant="title" marginBottom="20px" fontSize_koef={props.font_size}>
                        Участие
                    </Typography>
                    <Typography variant="h2" marginLeft="30px" fontSize_koef={props.font_size}>
                        { props.participation_text }
                    </Typography>
                </Grid>
            </Grid>
        </ThemeProvider>
    )
}