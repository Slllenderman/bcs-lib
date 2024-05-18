import React from 'react'
import { Grid, Typography, ThemeProvider, Box } from '@mui/material'
import { Description } from '.'
import { Meta, StoryObj } from '@storybook/react'
import { theme } from '../../../themes'

type Story = StoryObj<typeof Description>

export const Default: Story = {
    args: {
        title: 'О конференции',
        shift: 40,
        children: <Typography variant='h2'>Кафедра ИУ5 «Системы обработки информации и управления» МГТУ 
        им. Н.Э. Баумана планирует провести конференцию «Искусственный интеллект 
        в автоматизированных системах управления 
        и обработки данных» ИИАСУ’23.</Typography>
    }
}

export const UseGrid: Story = {
    render: () => (
        <ThemeProvider theme={theme}>
            <Box width='1200px'>
                <Grid container spacing={2}>
                    <Grid item xs={6}>
                        <Description title='О конференции' variant='h1' shift={40}>
                            <Typography variant='h2'>
                                Кафедра ИУ5 «Системы обработки информации и управления» МГТУ  им. Н.Э. Баумана планирует провести конференцию «Искусственный интеллект в автоматизированных системах управления и обработки данных» ИИАСУ’23.
                            </Typography>
                        </Description>
                    </Grid>
                    <Grid item xs={6}>
                        <Description title='Цель' variant='h1' shift={40}>
                            <Typography variant='h2'>
                                Представить, рассмотреть и обсудить современное состояние работ по интеграции искусственного интеллекта в автоматизиро-ванные системы управления и обработки данных.
                            </Typography>
                        </Description>
                    </Grid>
                    <Grid item xs={6}>
                        <Description title='Тематика' variant='h1' shift={40}>
                            <Typography variant='h2'>
                                Тематика конференции включает различные направления в рамках задач проектирования, разработки, внедрения, интеграции и эксплуатации автоматизи-рованных систем управления и обработки данных. 
                            </Typography>
                        </Description>
                    </Grid>
                    <Grid item xs={6}>
                        <Description title='Участие' variant='h1' shift={40}>
                            <Typography variant='h2'>
                                Участие бесплатное. Необходима регистрация. Статьи принимаются до 3-го апреля 2023 г.                  
                            </Typography>
                        </Description>
                    </Grid>
                </Grid>
            </Box>
        </ThemeProvider>
    )
}

const meta: Meta = {
    title: 'Mui addons/Conference descriptions',
    component: Description
}

export default meta


