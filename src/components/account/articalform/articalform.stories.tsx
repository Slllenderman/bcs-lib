import { ArticalForm } from '.'
import { Meta, StoryObj } from '@storybook/react'

type Story = StoryObj<typeof ArticalForm>

export const Default: Story = {
    args: {
        artical: {}
    }
}

const meta: Meta = {
    title: 'Account/Conference article form',
    component: ArticalForm
}

export default meta

