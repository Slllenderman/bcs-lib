import { Meta, StoryObj } from '@storybook/react';
import { Widget } from '@bauman-conference-library/interface'
import { UserCard } from '.';

// post: String;
// image: String;
// initials: String;
// info: String;

type Story = StoryObj<typeof UserCard>;

export const Default: Story = {
    args: {
        post: "Председатель",
        image: "https://i.yapx.ru/XXdB7.png",
        initials: "Пролетарский А.В.",
        info: "д.т.н., проф., декан факультета «Информатика, искусственный интеллект и системы управления» (ИУ), МГТУ им. Н.Э. Баумана",
        ... new Widget()
    }
}


const meta: Meta = {
    title: 'UserCard',
    component: UserCard
};

export default meta;


