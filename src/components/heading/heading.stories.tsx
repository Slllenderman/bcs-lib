import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { Heading } from '.';

const meta: Meta = {
    title: 'Heading',
    component: Heading
};

export default meta;

type Story = StoryObj<typeof Heading>;

export const Default: Story = {};