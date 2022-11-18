import { createRouter, createWebHashHistory } from 'vue-router'

import defaultRouter from '@/router/default/index'

//暂时仅仅使用default 设备探测仅保存状态，不再作为路由封装使用
let routes = defaultRouter

// switch (global.runEnviron) {
// 	case 'default':
// 		routes = defaultRouter
// 		break
// }

const router = createRouter({
	history: createWebHashHistory(import.meta.env.BASE_URL),
	routes,
})

export default router
