import { ConferenceDateWidget } from './datetime-widget';
import { Meta, StoryObj } from '@storybook/react';

const meta: Meta = {
    title: 'ConferenceDateWidget',
    component: ConferenceDateWidget,
};

export default meta;

type Story = StoryObj<typeof ConferenceDateWidget>;

export const Default: Story = {
    args: {
      date: new Date(2023, 6, 1),
      format: 1,
    },
};