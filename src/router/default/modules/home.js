//home的router

export default [
	{
		//首页
		path: '/',
		name: 'home',
		component: () => import('@/pages/default/home/Home.vue'),
		children: [],
	},
]
