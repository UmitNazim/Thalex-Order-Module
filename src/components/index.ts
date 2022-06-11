/**
 * Automatic Module Registration
 */

import { App } from 'vue'

const requireComponent = require.context('.', true, /index\.vue$/)

const globalComponents = (app: App<Element>): void => {
  requireComponent.keys().forEach((fileName) => {
    const componentConfig = requireComponent(fileName)
    const componentName = fileName.replace(/\.\/(.+)(\/index\.vue$)/g, '$1')
    app.component(componentName, componentConfig.default || componentConfig)
  })
}

export default globalComponents
