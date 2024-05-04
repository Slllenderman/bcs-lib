import { Widget } from '@bauman-conference-library/interface'
import { ConferenceLocation } from '.'
import { Meta, StoryObj } from '@storybook/react'


type Story = StoryObj<typeof ConferenceLocation>

export const Default: Story = {
    args: {
        address: 'Где-то там идите прямо затем налево',
        ya_link: 'https://ya.ru/',
        ... new Widget()
    }
}

const meta: Meta = {
    title: 'Conference location',
    component: ConferenceLocation
}

export default meta


