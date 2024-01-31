module.exports = {
  stories: ['../stories/**/*.stories.@(ts|tsx|js|jsx)'],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials'],
  // https://storybook.js.org/docs/react/configure/typescript#mainjs-configuration
  
  framework: {
    name: "@storybook/react-webpack5",
    options: {}
  },

  typescript: {
    check: true, // type-check stories during Storybook build
  },

  docs: {
    autodocs: true
  }
};
