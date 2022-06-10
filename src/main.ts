import { createApp } from 'vue'
import './styles/main.scss'
import App from './App.vue'
import store from './store'

createApp(App).use(store).mount('#app')
