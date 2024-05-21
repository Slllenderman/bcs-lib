import React from 'react'
import { Grid, Typography, ThemeProvider, Box } from '@mui/material'
import { Description } from '.'
import { Meta, StoryObj } from '@storybook/react'
import { useTheme } from '../../../themes'

type Story = StoryObj<typeof Description>

export const Default: Story = {
    decorators: (Story) => <Box marginLeft='100px' marginTop='50px'><Story/></Box>,
    args: {
        title: 'О конференции',
        shift: 40,
        variant: "h1",
        children: <Box>Кафедра ИУ5 «Системы обработки информации и управления» МГТУ 
        им. Н.Э. Баумана планирует провести конференцию «Искусственный интеллект 
        в автоматизированных системах управления 
        и обработки данных» ИИАСУ’23.</Box>
    }
}

export const UserDescription: Story = {
    decorators: (Story) => <Box marginLeft='100px' marginTop='50px'><Story/></Box>,
    args: {
        title: 'Алфимцев А.Н.',
        shift: 0,
        variant: "h3",
        children: <>д.т.н., профессор, зав. кафедрой Информационных систем и телекоммуникаций, МГТУ им. Н.Э. Баумана</>
    }
}

export const OverrideChildVariant: Story = {
    decorators: (Story) => <Box marginLeft='100px' marginTop='50px'><Story/></Box>,
    args: {
        title: 'О конференции',
        shift: 0,
        variant: "h2",
        children: <Typography variant='h3'>Кафедра ИУ5 «Системы обработки информации и управления» МГТУ 
        им. Н.Э. Баумана планирует провести конференцию «Искусственный интеллект 
        в автоматизированных системах управления 
        и обработки данных» ИИАСУ’23.</Typography>
    }
}

export const UseGrid: Story = {
    decorators: (Story) => <Box marginLeft='100px' marginTop='50px'><Story/></Box>,
    render: () => {

        const theme = useTheme({})

        return(
        <ThemeProvider theme={theme}>
            <Box width='1200px'>
                <Grid container spacing={2}>
                    <Grid item xs={6}>
                        <Description title='О конференции' variant='h1' shift={40}>
                            <>
                                Кафедра ИУ5 «Системы обработки информации и управления» МГТУ  им. Н.Э. Баумана планирует провести конференцию «Искусственный интеллект в автоматизированных системах управления и обработки данных» ИИАСУ’23.
                            </>
                        </Description>
                    </Grid>
                    <Grid item xs={6}>
                        <Description title='Цель' variant='h1' shift={40}>
                            <>
                                Представить, рассмотреть и обсудить современное состояние работ по интеграции искусственного интеллекта в автоматизиро-ванные системы управления и обработки данных.
                            </>
                        </Description>
                    </Grid>
                    <Grid item xs={6}>
                        <Description title='Тематика' variant='h1' shift={40}>
                            <>
                                Тематика конференции включает различные направления в рамках задач проектирования, разработки, внедрения, интеграции и эксплуатации автоматизи-рованных систем управления и обработки данных. 
                            </>
                        </Description>
                    </Grid>
                    <Grid item xs={6}>
                        <Description title='Участие' variant='h1' shift={40}>
                            <>
                                Участие бесплатное. Необходима регистрация. Статьи принимаются до 3-го апреля 2023 г.                  
                            </>
                        </Description>
                    </Grid>
                </Grid>
            </Box>
        </ThemeProvider>
    )}
}

const meta: Meta = {
    title: 'Mui addons/Conference descriptions',
    component: Description
}

export default meta


