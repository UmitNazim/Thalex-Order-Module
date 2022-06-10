export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: { matchers: { color: /(background|color)$/i, date: /Date$/ } },

  themes: {
    default: 'Light Theme',
    list: [
      { name: 'Light Theme', class: 'light', color: 'white' },
      { name: 'Dark Theme', class: 'dark', color: 'black' },
    ],
  },

  viewport: {
    viewports: {
      Mobile: { name: 'Iphone 6/7/8', styles: { width: '375px', height: '736px' } },
      Tablet: { name: 'Ipad Pro', styles: { width: '768px', height: '1024px' } },
    },
  },
}
