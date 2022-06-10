const path = require('path')
module.exports = {
  stories: ['../**/*.stories.mdx', '../**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    'storybook-addon-themes',
    '@storybook/addon-storysource',
    'storybook-addon-designs',
  ],
  framework: '@storybook/vue3',

  webpackFinal: async (config) => {
    config.module.rules.push({
      test: /\.scss$/,
      use: ['style-loader', 'css-loader', 'sass-loader'],
      include: path.resolve(__dirname, '../../'),
    })

    config.resolve.alias = { ...config.resolve.alias, '@': path.resolve(__dirname, '../../src') }
    return config
  },
}
