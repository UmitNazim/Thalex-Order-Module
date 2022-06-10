/**
 * Automatic Module Registration
 */
import { ModuleTree } from 'vuex'

const requireModule = require.context('.', true, /index\.ts$/)
const modules: ModuleTree<unknown> = {}
requireModule.keys().forEach((fileName) => {
  if (fileName === './index.ts') return
  const moduleName = fileName.replace(/\.\/(.+)(\/index\.ts$)/g, '$1')
  modules[moduleName] = { ...requireModule(fileName).default }
})

export default modules
