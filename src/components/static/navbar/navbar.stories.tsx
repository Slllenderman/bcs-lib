import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { Link } from '@mui/material'
import { Navbar } from '.';
import { Link as RouterLink } from 'react-router-dom'

const meta: Meta = {
    title: 'Static/Header',
    component: Navbar
};

export default meta;

type Story = StoryObj<typeof Navbar>;

export const Default: Story = {
    args: {
        children: [
            <Link to="/" component={RouterLink} underline='none'>Организаторы</Link>,
            <Link to="/" component={RouterLink} underline='none'>Программа</Link>,
            <Link to="/" component={RouterLink} underline='none'>Тематика</Link>,
            <Link to="/" component={RouterLink} underline='none'>Требования</Link>,
            <Link to="/" component={RouterLink} underline='none'>ИИАСУ'23</Link>,
        ],
    },
};

export const AnotherLinkCount: Story = {
    args: {
        is_authenticated: true,
        children: [
            <Link to="/" component={RouterLink} underline='none'>Организаторы</Link>,
            <Link to="/" component={RouterLink} underline='none'>Программа</Link>,
            <Link to="/" component={RouterLink} underline='none'>Тематика</Link>,
            <Link to="/" component={RouterLink} underline='none'>Требования</Link>,
            <Link to="/" component={RouterLink} underline='none'>ИИАСУ'23</Link>,
            <Link to="/" component={RouterLink} underline='none'>Ещё одна ссылка</Link>,
            <Link to="/" component={RouterLink} underline='none'>И ещё одна</Link>,
        ]
    },
};