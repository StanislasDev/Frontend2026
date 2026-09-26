import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import { router } from './routes'
import { plugin, defaultConfig } from '@formkit/vue'
import config from '../formkit.config'

createApp(App)
  .use(router)
  .use(plugin, defaultConfig(config))
  .mount('#app')
