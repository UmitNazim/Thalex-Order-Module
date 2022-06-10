import { createApp } from 'vue'
import './styles/main.scss'
import App from './App.vue'
import store from './store'
import axios from './api'

const app = createApp(App)
app.config.performance = true
app.config.globalProperties.$http = axios

app.use(store).mount('#app')
