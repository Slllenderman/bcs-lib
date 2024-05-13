import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { Link } from '@mui/material'
import { Navbar } from '.';
import { Link as RouterLink } from 'react-router-dom'
import { Widget } from '@bauman-conference-library/interface';

const meta: Meta = {
    title: 'Header',
    component: Navbar
};

export default meta;

type Story = StoryObj<typeof Navbar>;

export const Default: Story = {
    args: {
        children: [
            <Link to="/" component={RouterLink}>Организаторы</Link>,
            <Link to="/" component={RouterLink}>Программа</Link>,
            <Link to="/" component={RouterLink}>Тематика</Link>,
            <Link to="/" component={RouterLink}>Требования</Link>,
            <Link to="/" component={RouterLink}>ИИАСУ'23</Link>,
        ],
        ... new Widget()
    },
};