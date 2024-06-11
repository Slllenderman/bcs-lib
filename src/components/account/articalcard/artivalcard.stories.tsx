import { ArticleCard } from '.'
import { Meta, StoryObj } from '@storybook/react'

type Story = StoryObj<typeof ArticleCard>

export const Default: Story = {
    args: {
        title: 'Название статьи',
        last_update_date: new Date(),
        review_state: "not reviewed",
        topic: 'секция конференции',
        description: 'описание...'
    }
}

export const FileUpload: Story = {
    args: {
        title: 'Название статьи',
        last_update_date: new Date(),
        review_state: "not reviewed",
        topic: 'секция конференции',
        description: 'описание...',
        files: [
            {
                name: 'Какой-то файл',
                link: '#'
            },
            {
                name: 'Какой-то файл',
                link: '#'
            },
            {
                name: 'Какой-то файл',
                link: '#'
            },
        ]
    }
}

const meta: Meta = {
    title: 'Account/Conference article',
    component: ArticleCard
}

export default meta

