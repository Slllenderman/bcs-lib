import { ArticleForm } from '.'
import { Meta, StoryObj } from '@storybook/react'

type Story = StoryObj<typeof ArticleForm>

export const Creation: Story = {
    args: {
        topics: [
            'topic1',
            'topic2',
            'topic3'
        ],
        back_href: '#',
        submit_callback: (title: string, description: string, topic: string, priority: number, files: File[]) => {
            console.log(title, description, topic, priority, files)
        }
    }
}

export const Update: Story = {
    args: {
        title: 'Название статьи',
        description: 'Описание статьи',
        topic: 'topic1',
        topics: [
            'topic1',
            'topic2',
            'topic3'
        ],
        back_href: '#',
        submit_callback: (title: string, description: string, topic: string, priority: number, files: File[]) => {
            console.log(title, description, topic, priority, files)
        },
        files: [
            {
                name: 'Файл 1'
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

