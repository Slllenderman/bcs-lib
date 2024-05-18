import { Description } from '.'
import { Meta, StoryObj } from '@storybook/react'

type Story = StoryObj<typeof Description>

export const Default: Story = {
    args: {
        title: 'Заголовок'
    }
}

const meta: Meta = {
    title: 'Mui addons/Conference descriptions',
    component: Description
}

export default meta


