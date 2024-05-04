import { Widget } from '@bauman-conference-library/interface'
import { Logo } from '.'
import { Meta, StoryObj } from '@storybook/react'


type Story = StoryObj<typeof Logo>

export const Default: Story = {
    args: {
        img_size: 50,
        img_src: 'https://mykaleidoscope.ru/x/uploads/posts/2022-10/1666137209_33-mykaleidoscope-ru-p-veselii-kotik-oboi-36.jpg',
        title: 'Кошачье лого',
        variant: 'h1',
        ... new Widget()
    }
}

const meta: Meta = {
    title: 'Logo',
    component: Logo
}

export default meta


