import { Title } from '.'
import { Meta, StoryObj } from '@storybook/react'

type Story = StoryObj<typeof Title>

export const Default: Story = {
    args: {
        children: 'Искусственный интеллект в автоматизированных системах управления и обработки данных',
        brushCount: 2
    }
}

const meta: Meta = {
    title: 'Mui addons/Conference Titles',
    component: Title
}

export default meta


