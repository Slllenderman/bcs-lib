import { ConferenceDate } from '.'
import { Meta, StoryObj } from '@storybook/react'

type Story = StoryObj<typeof ConferenceDate>

export const Default: Story = {
    args: {
        start_date: new Date('2024-04-27'),
        end_date: new Date('2024-04-28'),
        format: "both",
        height: 1
    }
}

const meta: Meta = {
    title: 'Info/Conference date',
    component: ConferenceDate
}

export default meta


