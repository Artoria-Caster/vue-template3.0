//登录
export default [
  {
    //首页
    path: '/login',
    name: 'login',
    component: () => import('@/pages/default/login/Login.vue'),
    children: []
  }
]
