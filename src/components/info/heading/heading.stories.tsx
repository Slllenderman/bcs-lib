import { Meta, StoryObj } from '@storybook/react';
import { Widget } from '@bauman-conference-library/interface'
import { Heading } from '.';


type Story = StoryObj<typeof Heading>;

export const Default: Story = {
    args: {
        title: "Искусственный интеллект в автоматизированных системах управления и обработки данных",
        subtitle: "II Всероссийская научная конференция",
        part_href: "#",
        ... new Widget()
    }
}

const meta: Meta = {
    title: 'Info/Heading',
    component: Heading
};

export default meta;