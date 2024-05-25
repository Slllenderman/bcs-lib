import React from 'react'
import { Box } from '@mui/material'
import { InfoList } from '.'
import { Meta, StoryObj } from '@storybook/react'

type Story = StoryObj<typeof InfoList>

export const Default: Story = {
    decorators: (Story) => <Box width='350px'><Story/></Box>,
    args: {
        gap: 30,
        items: [
            'Важная списковая информация',
            'Важная списковая информация',
            'Важная списковая информация',
            'Важная списковая информация',
            'Важная списковая информация',
            'Важная списковая информация'
        ],
        padding: '25px',
        accent: true
    }
}

export const WithSubList: Story = {
    decorators: (Story) => <Box width='350px'><Story/></Box>,
    args: {
        gap: 30,
        padding: '25px',
        accent: true,
        items: [
            'Важная списковая информация',
            <InfoList gap={30} padding='0 0 0 25px' upplevel={1} items={[
                'Вложенный список',
                'Вложенный список',
                'Вложенный список',
            ]}></InfoList>,
            'Важная списковая информация',
            'Важная списковая информация',
            'Важная списковая информация',
            'Важная списковая информация'
        ]
    }
}

const meta: Meta = {
    title: 'Mui addons/List information',
    component: InfoList
}

export default meta
