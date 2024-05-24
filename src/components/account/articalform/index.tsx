import React from 'react'
import { Box, Divider, Typography, Input, ThemeProvider, Select, Grid } from '@mui/material'
import { Option } from '@mui/base/Option'
import { Title } from '../../addons/title'
import { props as iprops, useWidget } from '@bauman-conference-library/interface'
import { useTheme } from '../../../themes'

export const ArticalForm = (props: { artical: iprops.Artical, submit: (artical: iprops.Artical) => void }) => {
    
    props = useWidget(props)
    const theme = useTheme(props)

    return (
        <ThemeProvider theme={theme}>
            <Box display='flex' justifyItems='start' flexDirection='column' gap='20px'>
                <Title brushCount={2}>
                    Добавление статьи
                </Title>
                <Divider/>
                <Typography variant='subtitle2' marginTop='30px'>
                    Общее
                </Typography>
                <Input placeholder={props.artical.title ? props.artical.title : 'Название'}/>
                <Select placeholder={props.artical.topic ? props.artical.topic : 'Секция(тематика)'} defaultValue={props.artical.topic}>
                    {
                        props.artical.topics?.map(topic => 
                            <Option value={topic}>
                                { topic }
                            </Option>
                        )
                    }
                </Select>
                <Typography marginTop='30px'>
                    Файлы
                </Typography>
                <Grid container>
                    <Grid item xs={6}>
                        <Input type='file' placeholder={props.artical.pdf_src ? props.artical.pdf_src : 'Статья в формате PDF'}/>
                    </Grid>
                    <Grid item xs={6}>
                        <Input type='file' placeholder={props.artical.word_src ? props.artical.word_src : 'Статья в формате Word'}/>
                    </Grid>
                    <Grid item xs={6}>
                        <Input type='file' placeholder={props.artical.dop_src ? props.artical.dop_src : 'Дополнительные файлы'}/>
                    </Grid>
                    <Grid item xs={6}>
                        <Input type='file'hidden placeholder={props.artical.auth_src ? props.artical.auth_src : 'Авторское заявление'}/>
                    </Grid>
                </Grid>
            </Box>
        </ThemeProvider>
    )
}