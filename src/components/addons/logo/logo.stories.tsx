import { Logo } from '.'
import { Meta, StoryObj } from '@storybook/react'

type Story = StoryObj<typeof Logo>

export const Default: Story = {
    args: {
        title: 'Заголовок'
    }
}

const meta: Meta = {
    title: 'Mui addons/Conference Logos',
    component: Logo
}

export default meta


