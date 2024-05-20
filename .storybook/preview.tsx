import type { Preview } from '@storybook/react'; 
import React from 'react';
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from '../src/themes'

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators:[
    (Story)=>
      <ThemeProvider>
        <BrowserRouter>
          <Story/>
        </BrowserRouter>
      </ThemeProvider>
  ]
};

export default preview;
