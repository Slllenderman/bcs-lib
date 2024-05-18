import { ConferenceLocation } from '.'
import { Meta, StoryObj } from '@storybook/react'


type Story = StoryObj<typeof ConferenceLocation>

export const Default: Story = {
    args: {
        address: 
        `Конференция проводится в МГТУ 
        им. Н.Э. Баумана по адресу:
        Москва, 2-ая Бауманская д. 5, корп. 1`,
        ya_link: 'https://ya.ru/'
    }
}

const meta: Meta = {
    title: 'Info/Conference location',
    component: ConferenceLocation
}

export default meta


