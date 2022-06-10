import { createApp } from 'vue'
import './styles/main.scss'
import App from './App.vue'
import store from './store'
import axios from './api'
import i18n from './locales'

const app = createApp(App)
app.config.performance = true
app.config.globalProperties.$http = axios

app.use(store).use(i18n).mount('#app')
