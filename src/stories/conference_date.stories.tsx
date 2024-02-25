import { ConferenceDate } from '../components'
import { Meta, StoryObj } from '@storybook/react'


type Story = StoryObj<typeof ConferenceDate>

export const Default: Story = {
    args: {
        date: new Date(),
        format: 1
    }
}

const meta: Meta = {
    title: 'Conference date',
    component: ConferenceDate
}

export default meta


