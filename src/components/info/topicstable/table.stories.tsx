import { Widget } from '@bauman-conference-library/interface'
import { TopicsTable } from '.'
import { Meta, StoryObj } from '@storybook/react'


type Story = StoryObj<typeof TopicsTable>

export const Default: Story = {
    args: {
        topics: [
            'Что-то там такое да....',
            'Что-то там такое да....',
            'Что-то там такое да....',
            'Что-то там такое да....',
            'Что-то там такое да....',
            'Что-то там такое да....',
            'Что-то там такое да....',
            'Что-то там такое да....'
        ],
        ... new Widget()
    }
}

const meta: Meta = {
    title: 'Info/Conference topics',
    component: TopicsTable
}

export default meta


