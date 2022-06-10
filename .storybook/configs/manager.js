// .storybook/manager.js

import logo from '../stories/assets/logo.jpeg'
import { addons } from '@storybook/addons'
import { create } from '@storybook/theming'

addons.setConfig({
  panelPosition: 'bottom',
  theme: create({
    base: 'light',
    brandTitle: 'Thalex Storybook',
    brandImage: logo,
    brandUrl: 'https://www.thalex.com/',
  }),
  sidebar: {
    showRoots: true,
  },
})
