/** When your routing table is too long, you can split it into small modules **/

import Layout from '@/layout'

const userRouter = {
  path: '/user',
  component: Layout,
  redirect: '/user/list',
  name: 'user',
  meta: {
    title: 'user',
    icon: 'user',
  },
  children: [
    {
      path: 'list',
      component: () => import('@/views/user/list'),
      name: 'ListManagement',
      meta: { title: 'userListManagement', noCache: true },
    },
    {
      path: 'create',
      component: () => import('@/views/user/create'),
      name: 'UserCreate',
      breadcrumb: false,
      meta: { title: 'userCreate', noCache: true },
    },
    {
      path: 'update',
      component: () => import('@/views/user/update'),
      hidden: true,
      name: 'UserUpdate',
      breadcrumb: false,
      meta: { title: 'userUpdate', noCache: true },
    },
    {
      path: 'password',
      component: () => import('@/views/user/password'),
      hidden: true,
      breadcrumb: false,
      name: 'UserPassword',
      meta: { title: 'changePassword', noCache: true },
    },
  ],
}
export default userRouter
