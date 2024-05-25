import React from 'react'
import { Box, Divider, Typography, Input, ThemeProvider, Select, Grid, Button } from '@mui/material'
import { Option } from '@mui/base/Option'
import { Title } from '../../addons/title'
import { props as iprops, useWidget } from '@bauman-conference-library/interface'
import { useTheme } from '../../../themes'

export const ArticleForm = (props: { article: iprops.Article, submit: (article: iprops.Article) => void }) => {
    
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
                <Input placeholder={props.article.title ? props.article.title : 'Название'}/>
                <Select placeholder={props.article.topic ? props.article.topic : 'Секция(тематика)'} defaultValue={props.article.topic}>
                    {
                        props.article.topics?.map(topic => 
                            <Option value={topic}>
                                { topic }
                            </Option>
                        )
                    }
                </Select>
                <Typography variant='subtitle2' marginTop='30px'>
                    Файлы
                </Typography>
                <Grid container>
                    <Grid item xs={6}>
                        <Input type='file' placeholder={props.article.pdf_src ? props.article.pdf_src : 'Статья в формате PDF'}/>
                    </Grid>
                    <Grid item xs={6}>
                        <Input type='file' placeholder={props.article.word_src ? props.article.word_src : 'Статья в формате Word'}/>
                    </Grid>
                    <Grid item xs={6}>
                        <Input type='file' placeholder={props.article.dop_src ? props.article.dop_src : 'Дополнительные файлы'}/>
                    </Grid>
                    <Grid item xs={6}>
                        <Input type='file'hidden placeholder={props.article.auth_src ? props.article.auth_src : 'Авторское заявление'}/>
                    </Grid>
                </Grid>
                <Box display='flex' justifyContent='center' gap='25px' alignContent='center' marginTop='30px'>
                    <Button variant='contained' onClick={() => props.submit(props.article)}>
                        <Typography variant='h2' color='white' width='250px'>
                            Сохранить статью
                        </Typography>
                    </Button>
                    <Button variant='outlined' href={props.article.back_href}>
                        <Typography variant='h2' color='primary.dark' width='250px'>
                            Отменить
                        </Typography>
                    </Button>
                </Box>
            </Box>
        </ThemeProvider>
    )
}