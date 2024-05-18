import { Title } from '.'
import { Meta, StoryObj } from '@storybook/react'

type Story = StoryObj<typeof Title>

export const Default: Story = {
    args: {
        children: 'Заголовок'
    }
}

const meta: Meta = {
    title: 'Mui addons/Conference Titles',
    component: Title
}

export default meta


