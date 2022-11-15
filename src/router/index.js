import { createRouter, createWebHashHistory } from 'vue-router'
import global from '@/utils/global'

import defaultRouter from '@/router/default/index'

let routes = []

switch (global.runEnviron) {
  case 'default':
    routes = defaultRouter
    break
}

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL), routes
})

export default router
