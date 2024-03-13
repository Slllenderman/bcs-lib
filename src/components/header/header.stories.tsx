import { Meta, StoryObj } from '@storybook/react';
import { Header } from './header';

const meta: Meta = {
    title: 'Header',
component:Header};

export default meta;

type Story = StoryObj<typeof Header>;

export const Default: Story = {
    args: {
        links:[{to:'#', title:'Организаторы'},{to:'#', title:'Программа'},{to:'#', title:'Тематика'},{to:'#', title:'Требования'}, {to:'#',title:'ИИАСУ\'22'}]
    },
};