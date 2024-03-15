import { Widget } from '@bauman-conference-library/interface'
import { ConferenceDate } from '../components'
import { Meta, StoryObj } from '@storybook/react'


type Story = StoryObj<typeof ConferenceDate>

export const Default: Story = {
    args: {
        start_date: new Date('2024-04-27'),
        end_date: new Date('2024-04-28'),
        format: 2,
        height: 1,
        ... new Widget()
    }
}

const meta: Meta = {
    title: 'Conference date',
    component: ConferenceDate
}

export default meta


