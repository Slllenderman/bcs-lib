import { Title } from '.'
import { Meta, StoryObj } from '@storybook/react'
import { Box } from '@mui/material'
import React from 'react'

type Story = StoryObj<typeof Title>

export const Default: Story = {
    decorators: (Story) => <Box marginLeft='100px' marginTop='50px' width='1200px' textAlign='center'><Story/></Box>,
    args: {
        children: 'Искусственный интеллект в автоматизированных системах управления и обработки данных',
        brushCount: 2
    }
}

export const AnotherVariant: Story = {
    decorators: (Story) => <Box marginLeft='100px' marginTop='50px' width='1200px'><Story/></Box>,
    args: {
        children: 'Программный комитет конференции',
        brushCount: 1
    }
}

const meta: Meta = {
    title: 'Mui addons/Conference Titles',
    component: Title
}

export default meta


