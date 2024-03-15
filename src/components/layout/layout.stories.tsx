import { Meta, StoryObj } from '@storybook/react';
import { Layout } from './layout';
import { Header } from '../header/header';
import { SubHeader } from '../sub-header/sub-header';

const meta: Meta = {
    title: 'Layout',
component:() =><Layout><SubHeader/><Header links={[{title:'title 1', to:'#'}, {title:'title 2', to:'#'}]}/></Layout>};

export default meta;

type Story = StoryObj<typeof Layout>;

export const Default: Story = {
    args: {
    },
};