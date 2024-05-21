import { Meta, StoryObj } from '@storybook/react';
import { Widget } from '@bauman-conference-library/interface'
import { UserCard } from '.';
import { Box } from '@mui/material';
import React from 'react';
// post: String;
// image: String;
// initials: String;
// info: String;

type Story = StoryObj<typeof UserCard>;

export const Default: Story = {
    decorators: (Story) => <Box marginLeft='100px' marginTop='50px'><Story/></Box>,
    args: {
        post: "Председатель",
        image: "https://i.yapx.ru/XXdB7.png",
        initials: "Пролетарский А.В.",
        info: "д.т.н., проф., декан факультета «Информатика, искусственный интеллект и системы управления» (ИУ), МГТУ им. Н.Э. Баумана",
        ... new Widget()
    }
}


export const AsUserDescription: Story = {
    decorators: (Story) => <Box marginTop='-300px' marginLeft='100px'><Story/></Box>,
    args: {
        initials: "Пролетарский А.В.",
        info: "д.т.н., проф., декан факультета «Информатика, искусственный интеллект и системы управления» (ИУ), МГТУ им. Н.Э. Баумана",
        ... new Widget()
    }
}

const meta: Meta = {
    title: 'Info/UserCard',
    component: UserCard
};

export default meta;


