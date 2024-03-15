import { Meta, StoryObj } from '@storybook/react';
import { SubHeader } from './sub-header';

const meta: Meta = {
    title: 'SubHeader',
    component: SubHeader
}

export default meta;

type Story = StoryObj<typeof SubHeader>;

export const Default: Story = {
    args: {
    },
};