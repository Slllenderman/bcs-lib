import { Widget } from '@bauman-conference-library/interface'
import { ArticleCard } from '.'
import { Meta, StoryObj } from '@storybook/react'

type Story = StoryObj<typeof ArticleCard>

export const Default: Story = {
    args: {
        title: 'Название статьи',
        last_update_date: new Date(),
        creation_date: new Date(),
        ... new Widget()
    }
}

const meta: Meta = {
    title: 'Conference article',
    component: ArticleCard
}

export default meta


