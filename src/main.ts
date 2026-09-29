import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import { router } from './routes'
import { plugin, defaultConfig } from '@formkit/vue'
import config from '../formkit.config'
import { createPinia } from 'pinia'


const pinia = createPinia();

createApp(App)
  .use(pinia)
  .use(router)
  .use(plugin, defaultConfig(config))
  .mount('#app')
