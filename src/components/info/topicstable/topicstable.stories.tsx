import { TopicsTable } from '.'
import React from 'react'
import { Box } from '@mui/material'
import { Meta, StoryObj } from '@storybook/react'


type Story = StoryObj<typeof TopicsTable>

export const Default: Story = {
    args: {
        topics: [
            'Какая-то там тема...',
            'Какая-то там тема...',
            'Какая-то там тема...',
            'Какая-то там тема...',
            'Какая-то там тема...',
            'Какая-то там тема...',
            'Какая-то там тема...',
            'Какая-то там тема...',
            'Какая-то там тема...',
            'Какая-то там тема...',
            'Какая-то там тема...',
            'Какая-то там тема...',
            'Какая-то там тема...',
        ]
    },
    decorators: (Story) => <Box display='flex' justifyContent='center'><Box width='800px'><Story/></Box></Box>
}

const meta: Meta = {
    title: 'Info/Topics table',
    component: TopicsTable
}

export default meta