import React from 'react'
import { Widget } from '@bauman-conference-library/interface'
import { ConferenceDescription } from '.'
import { Meta, StoryObj } from '@storybook/react'
import { Link } from '@mui/material'

type Story = StoryObj<typeof ConferenceDescription>

export const Default: Story = {
    args: {
        about_text: 'Описание...',
        purpose_text: 'Цель...',
        topic_text: 'Тема...',
        participation_text: <Link>(Пример вставки ReactElement)</Link>,
        ... new Widget()
    }
}

const meta: Meta = {
    title: 'Conference descriptions',
    component: ConferenceDescription
}

export default meta


