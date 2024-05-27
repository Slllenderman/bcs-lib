import { ArticleForm } from '.'
import { Meta, StoryObj } from '@storybook/react'
import { Box } from '@mui/material'
import React from 'react'

type Story = StoryObj<typeof ArticleForm>

export const Creation: Story = {
    args: {
        back_href: '#',
        submit_callback: (title: string, description: string, priority: number, files: File[]) => {
            console.log(title, description, priority, files)
        }
    }
    
}

export const Update: Story = {
    decorators: (Story) => <Box><Story/></Box>,
    args: {
        title: 'Название статьи',
        description: 'Описание статьи',
        back_href: '#',
        submit_callback: (title: string, description: string, priority: number, files: File[]) => {
            console.log(title, description, priority, files)
        },
        files: [
            {
                name: 'Файл 1',
                link: '#'
            },
            {
                name: 'Файл 2'
            },
            {
                name: 'Файл 3'
            },
            {
                name: 'Файл 4'
            }
        ]
    }
}

const meta: Meta = {
    title: 'Account/Conference article form',
    component: ArticleForm
}

export default meta

