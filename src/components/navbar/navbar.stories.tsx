import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { Link } from 'react-router-dom'
import { Navbar } from '.';

const meta: Meta = {
    title: 'Header',
component: Navbar};

export default meta;

type Story = StoryObj<typeof Navbar>;

export const Default: Story = {
    args: {
        children: [
            <Link to="/">First</Link>,
            <Link to="/">Second</Link>
        ]
    },
};