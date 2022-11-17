import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import '@/assets/style/normalize.css'
import '@/assets/style/main.scss'

// 国际化
import { setI18n } from '@/locales'

const app = createApp(App)

app.use(createPinia())
app.use(router)

setI18n(app)

app.mount('#app')
