/**
 * Automatic Module Registration
 */
const requireModule = require.context('.', true, /spec\.js$/)
requireModule.keys().forEach((fileName) => requireModule(fileName))
