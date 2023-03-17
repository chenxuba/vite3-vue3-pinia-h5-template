const routes = [
  {
    path: '/',
    redirect: '/home',
    component: () => import('/@/layout/basic/index.vue'),
    children: [
      {
        path: 'home',
        component: () => import('/@/views/home/index.vue'),
        meta: {
          title: '首页',
          keepAlive: true,
        },
      },
      {
        path: 'list',
        component: () => import('/@/views/list/index.vue'),
        meta: {
          title: '列表',
          keepAlive: true,
        },
      },
      {
        path: 'member',
        component: () => import('/@/views/member/index.vue'),
        meta: {
          title: '我的',
          keepAlive: true,
        },
      },
      {
        path: 'demo',
        component: () => import('/@/views/demo/index.vue'),
        meta: {
          title: '示例',
          keepAlive: true,
        },
      },
    ],
  },
  {
    name: 'login',
    path: '/login',
    component: () => import('/@/views/login/index.vue'),
    meta: {
      title: '',
      keepAlive: true,
    },
  },
];

export default routes;
