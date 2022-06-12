import { createApp } from 'vue'
import './styles/main.scss'
import App from './App.vue'
import router from './router'
import store from './store'
import globalComponents from './components'
import axios from './api'
import i18n from './locales'

const app = createApp(App)
app.config.performance = true
app.config.globalProperties.$http = axios

globalComponents(app)
app.use(router).use(store).use(i18n).mount('#app')
