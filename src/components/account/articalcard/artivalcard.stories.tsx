import { ArticleCard } from '.'
import { Meta, StoryObj } from '@storybook/react'

type Story = StoryObj<typeof ArticleCard>

export const Default: Story = {
    args: {
        title: 'Название статьи',
        last_update_date: new Date(),
        review_state: "not reviewed",
        topic: 'секция конференции'
    }
}

const meta: Meta = {
    title: 'Account/Conference article',
    component: ArticleCard
}

export default meta

