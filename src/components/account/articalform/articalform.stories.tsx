import { ArticleForm } from '.'
import { Meta, StoryObj } from '@storybook/react'

type Story = StoryObj<typeof ArticleForm>

export const Default: Story = {
    args: {
        article: {}
    }
}

const meta: Meta = {
    title: 'Account/Conference article form',
    component: ArticleForm
}

export default meta

