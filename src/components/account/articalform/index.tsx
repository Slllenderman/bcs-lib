import React, { useState } from 'react'
import { 
    Box, Divider, TextField, ThemeProvider, InputLabel,
    Select, Button, MenuItem, FormControl, Typography, IconButton
} from '@mui/material'
import { AttachFile, Delete } from '@mui/icons-material'
import { Title } from '../../addons/title'
import { props as iprops, useWidget } from '@bauman-conference-library/interface'
import { useTheme } from '../../../themes'

export const ArticleForm = (props: iprops.ArticleForm) => {
    
    props = useWidget(props)
    const theme = useTheme(props)

    const [title, setTitle] = useState(props.title)
    const [description, setDesc] = useState(props.description)
    const [topic, setTopic] = useState(props.topic)
    const [priority, setPriority] = useState(1)
    const [files, setFiles] = useState(props.files ? props.files : [] as File[])

    const [errors, setErrors] = useState({
        title: '',
        description: '',
        topic: '',
        priority: '',
        files: ''
    })


    const checkRequired = () => {
        let check_errors = {
            title: '',
            description: '',
            topic: '',
            priority: '',
            files: ''
        }
        if(!title) check_errors.title = 'Необходимо заполнить поле названия статьи';
        if(!description) check_errors.description = 'Необходимо заполнить поле описнаия статьи';
        if(!topic) check_errors.topic = 'Необходимо заполнить поле секции статьи';
        if(!priority) check_errors.priority = 'Необходимо заполнить поле приоритета статьи';
        if(files.length == 0) check_errors.files = 'Необходимо добавить файлы статьи';
        if(!title || !description || !topic || !priority || files.length == 0) {
            setErrors(check_errors);
            return false
        } else {
            return true
        }
    }   

    return (
        <ThemeProvider theme={theme}>
            <Box display='flex' justifyItems='start' flexDirection='column' gap='20px'>
                <Title brushCount={2}>
                    Добавление статьи
                </Title>
                <Divider/>
                <Box width='40%'>
                    <FormControl fullWidth={true} variant='outlined'>
                        <Typography variant='subtitle2' marginBottom='20px'>
                            Общее
                        </Typography>
                        <TextField error={errors.title != ''} label='Название' defaultValue={props.title}
                        sx={{ marginBottom: '20px',  "& .MuiOutlinedInput-root": { fontWeight: "500", fontFamily: 'Inter' }}}
                        onChange={(e) => setTitle(e.target.value)} helperText={ errors.title }/>
                        <TextField error={errors.description != ''} label='Описание' defaultValue={props.description} multiline={true} rows={3} 
                        sx={{ marginBottom: '-3px',  "& .MuiOutlinedInput-root": { fontWeight: "500", fontFamily: 'Inter' }}} 
                        onChange={(e) => setDesc(e.target.value)} helperText={ errors.description }/>
                        <InputLabel error={errors.topic != ''} sx={{ position: 'relative !important', top: '23px'}} id='topics-select'>Секция</InputLabel>
                        <Select error={errors.topic != ''} label='Секция' labelId='topics-select' defaultValue={props.topic}
                        sx={{ marginBottom: '-3px',  "& .MuiSelect-select": { fontWeight: "500", fontFamily: 'Inter' }}}
                        onChange={(e) => setTopic(e.target.value)}>
                            {
                                props.topics?.map(topic => 
                                    <MenuItem value={topic}>
                                        { topic }
                                    </MenuItem>
                                )
                            }
                        </Select>
                        <InputLabel sx={{ position: 'relative !important', top: '23px'}} id='priority-select'>Приоритет проверки</InputLabel>
                        <Select error={errors.priority != ''} label='Приоритет проверки' labelId='priority-select' defaultValue={1}
                        sx={{ marginBottom: '20px',  "& .MuiSelect-select": { fontWeight: "500", fontFamily: 'Inter' }}}
                        onChange={(e) => setPriority(e.target.value as number)}>
                            <MenuItem value={1}>Обычный</MenuItem>
                            <MenuItem value={2}>Повышенный</MenuItem>
                        </Select>
                        <Typography variant='subtitle2' marginBottom='20px'>
                            Файлы
                        </Typography>
                        <Box width='25%'>
                            <Button variant='outlined' startIcon={<AttachFile/>} 
                                    sx={{'MuiButton-startIcon': { margin: 0 }}} component="label">
                                <Typography variant='h3' noWrap color='primary.dark'>
                                    Загрузить
                                </Typography>
                                <input onChange={(e) => { 
                                    setFiles(e.target.files ? Array.from(e.target.files) : [] as File[])
                                    e.target.value = '' 
                                }} id='article-file-input' type='file' accept=".docx,.doc" multiple hidden/>
                            </Button>
                        </Box>
                        <Box width='60%'>
                            {
                                files.map((file: File, index: number) => 
                                    <Box display='flex' flexDirection='row' padding='10px' margin='10px 0'
                                    sx={{backgroundColor: 'primary.light', borderRight: 5, borderColor: 'primary.dark'}}
                                    alignContent='center' justifyContent='start'>
                                        <Box display='flex' alignItems='center'>
                                            <Typography variant='h3'>
                                                { file.name }
                                            </Typography>
                                        </Box>
                                        <Box margin='0 0 0 auto'>
                                            <IconButton onClick={() => {
                                                let tmp = files.slice()
                                                tmp.splice(index, 1)
                                                setFiles(tmp)}}>
                                                <Delete/>
                                            </IconButton>
                                        </Box>
                                    </Box>
                                )
                            }
                        </Box>
                    </FormControl>
                </Box>
                <Box display='flex' justifyContent='center' gap='25px' alignContent='center' marginTop='30px'>
                    <Button variant='contained' onClick={() => {
                        if(checkRequired())
                            props.submit_callback(title as string, description as string, topic as string, priority, files)                        
                    }}>
                        <Typography variant='h2' color='white' width='250px'>
                            Сохранить статью
                        </Typography>
                    </Button>
                    <Button variant='outlined' href={props.back_href}>
                        <Box textAlign='center'>
                            <Typography variant='h2' color='primary.dark' width='250px'>
                                Отменить
                            </Typography>
                        </Box>
                    </Button>
                </Box>
            </Box>
        </ThemeProvider>
    )
}